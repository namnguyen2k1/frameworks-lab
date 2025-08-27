export function removeVietnameseTones(value: string, replaceSpace = false): string {
  let str: string = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[!@%^*()+=<>?/.,:;'\"&#\[\]~$_`{}\|\\-]/g, " ");

  if (replaceSpace) {
    str = str.replace(/\s+/g, "_");
  }

  return str;
}
