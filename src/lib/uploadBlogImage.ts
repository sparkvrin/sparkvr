import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export interface UploadedBlogImage {
  url: string;
  sizeLabel: string;
}

const MAX_ALLOWED_BYTES = 300 * 1024;

// Draws the image onto a canvas, downscaling if it's oversized, and returns
// a JPEG blob compressed under MAX_ALLOWED_BYTES by iteratively lowering
// quality (and resolution, as a last resort).
async function compressImage(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  let targetWidth = bitmap.width;
  let targetHeight = bitmap.height;
  const MAX_DIMENSION = 1600;
  if (targetWidth > MAX_DIMENSION || targetHeight > MAX_DIMENSION) {
    const scale = MAX_DIMENSION / Math.max(targetWidth, targetHeight);
    targetWidth = Math.round(targetWidth * scale);
    targetHeight = Math.round(targetHeight * scale);
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported in this browser");

  const drawAt = (width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(bitmap, 0, 0, width, height);
  };

  const toBlob = (quality: number): Promise<Blob> =>
    new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("Image compression failed"))),
        "image/jpeg",
        quality
      );
    });

  drawAt(targetWidth, targetHeight);

  let quality = 0.85;
  let blob = await toBlob(quality);

  while (blob.size > MAX_ALLOWED_BYTES && quality > 0.15) {
    quality -= 0.1;
    if (quality < 0.5 && targetWidth > 1000) {
      targetWidth = 1000;
      targetHeight = Math.round((bitmap.height / bitmap.width) * 1000);
      drawAt(targetWidth, targetHeight);
    }
    blob = await toBlob(quality);
  }

  if (blob.size > MAX_ALLOWED_BYTES) {
    drawAt(800, Math.round((bitmap.height / bitmap.width) * 800));
    blob = await toBlob(0.5);
  }

  return blob;
}

// Compresses an image in-browser (keeps it under ~300KB) and uploads it
// directly to Firebase Storage. Shared by the featured image picker and
// the rich text editor's inline image insertion.
export async function uploadBlogImage(file: File): Promise<UploadedBlogImage> {
  let blob: Blob;
  try {
    blob = await compressImage(file);
  } catch {
    // Fallback for formats createImageBitmap/canvas can't handle (e.g. SVG)
    blob = file;
  }

  const timestamp = Date.now();
  const sanitizedOriginal = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").replace(/\.[^/.]+$/, "");
  const extension = blob === file ? file.name.split(".").pop() || "jpg" : "jpg";
  const filename = `blog_${sanitizedOriginal}_${timestamp}.${extension}`;

  const storageRef = ref(storage, `blog/${filename}`);
  await uploadBytes(storageRef, blob, { contentType: blob.type || "image/jpeg" });
  const url = await getDownloadURL(storageRef);

  return { url, sizeLabel: `${(blob.size / 1024).toFixed(1)} KB` };
}
