export function getUploadableFiles(
  fileList: FileList,
  options?: {
    type?: "image" | "video";
    limit?: number;
    sizeMB?: number;
  },
) {
  const BYTE_1_MB = 1048576;
  const type = options?.type ?? "image";
  const limit = options?.limit ?? 20;
  const maxSize = (options?.sizeMB ?? 5) * BYTE_1_MB;
  const duration = 3000;

  const rawFiles = Array.from(fileList);
  const validFiles: File[] = [];
  const errors: string[] = [];

  if (rawFiles.length > limit) {
    errors.push(
      `Maximum ${limit} ${type === "image" ? "images" : "videos"} can be uploaded at once!`,
    );
  }

  for (const file of rawFiles) {
    if (!file.type.startsWith(type)) {
      errors.push(`File ${file.name} is not a valid ${type}.`);
      continue;
    }

    if (file.size > maxSize) {
      errors.push(
        `${type === "image" ? "Image" : "Video"} ${file.name} exceeds the maximum size of ${
          maxSize / BYTE_1_MB
        } MB`,
      );
      continue;
    }

    if (validFiles.length < limit) {
      validFiles.push(file);
    }

    if (validFiles.length === limit) break;
  }

  return { files: validFiles, errors, duration };
}
