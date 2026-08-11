export interface UploadedBlogImage {
  url: string;
  sizeLabel: string;
}

// Compresses an image via the server-side API (keeps it under ~300KB) and
// saves it into the project's public/blog folder. Shared by the featured
// image picker and the rich text editor's inline image insertion.
export async function uploadBlogImage(file: File): Promise<UploadedBlogImage> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/admin/blogs/upload-image", {
    method: "POST",
    body: formData,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.error || "Failed to upload image");
  }

  return { url: data.imagePath, sizeLabel: data.formattedSize };
}
