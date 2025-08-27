export function generateObjectId(): string {
  const timestamp = Math.floor(Date.now() / 1000).toString(16);
  const objectId = "xxxxxxxxxxxxxxxx".replace(/[x]/g, () => {
    return Math.floor(Math.random() * 16).toString(16);
  });

  return `${timestamp}${objectId}`;
}

export function isObjectId(id: string): boolean {
  return id.length === 24 && /^[0-9a-fA-F]+$/i.test(id);
}
