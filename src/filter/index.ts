// ./filter/index.ts
export const capitalize = function(value: string): any {
  if (!value) { return ''; }
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};
