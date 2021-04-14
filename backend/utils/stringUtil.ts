export const escapeRegExp = function (str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
