import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { Jimp } from "jimp";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const inputBuffer = Buffer.from(bytes);

    // Target max size: 300KB (307,200 bytes)
    const MAX_ALLOWED_BYTES = 300 * 1024;
    let outputBuffer: Buffer = inputBuffer;
    let fileExtension = "jpg";

    try {
      // Read image with Jimp
      const image = await Jimp.read(inputBuffer);

      // Auto resize if dimensions are excessively large for a blog featured image
      const width = image.bitmap.width;
      const height = image.bitmap.height;
      if (width > 1600 || height > 1600) {
        image.resize({ w: Math.min(width, 1600) });
      }

      // Progressively compress until size is under 300KB
      let quality = 85;
      outputBuffer = await image.getBuffer("image/jpeg", { quality });

      while (outputBuffer.length > MAX_ALLOWED_BYTES && quality > 15) {
        quality -= 10;
        // If image is still huge, resize down further
        if (quality < 50 && image.bitmap.width > 1000) {
          image.resize({ w: 1000 });
        }
        outputBuffer = await image.getBuffer("image/jpeg", { quality });
      }

      // If JPEG compression couldn't drop it under 300KB (unlikely), force scale down
      if (outputBuffer.length > MAX_ALLOWED_BYTES) {
        image.resize({ w: 800 });
        outputBuffer = await image.getBuffer("image/jpeg", { quality: 50 });
      }
    } catch (imgError) {
      console.warn("Jimp image processing fallback:", imgError);
      // Fallback directly to original buffer if Jimp fails on raw SVG or special format
      outputBuffer = inputBuffer;
      const originalExt = file.name.split(".").pop() || "jpg";
      fileExtension = originalExt.toLowerCase();
    }

    if (outputBuffer.length > MAX_ALLOWED_BYTES) {
      console.warn(`Compressed size (${outputBuffer.length} bytes) exceeds 300KB limit.`);
    }

    // Prepare filename and target folder
    const timestamp = Date.now();
    const sanitizedOriginal = file.name
      .replace(/[^a-zA-Z0-9.-]/g, "_")
      .replace(/\.[^/.]+$/, "");
    const filename = `blog_${sanitizedOriginal}_${timestamp}.${fileExtension}`;

    const blogDir = path.join(process.cwd(), "public", "blog");

    // Ensure public/blog directory exists
    await mkdir(blogDir, { recursive: true });

    // Write file to public/blog/<filename>
    const filePath = path.join(blogDir, filename);
    await writeFile(filePath, outputBuffer);

    const relativeUrl = `/blog/${filename}`;

    return NextResponse.json({
      success: true,
      imagePath: relativeUrl,
      filename,
      sizeBytes: outputBuffer.length,
      formattedSize: `${(outputBuffer.length / 1024).toFixed(1)} KB`,
    });
  } catch (error: any) {
    console.error("Error uploading blog image:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to upload and compress image" },
      { status: 500 }
    );
  }
}
