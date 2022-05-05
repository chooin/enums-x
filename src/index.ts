function keys(e: any): string[];
function keys(e: any) {
  return Object.keys(e).filter((key) => isNaN(Number(key)));
}

function values<T = number | string>(e: any): T[];
function values(e: any) {
  return keys(e).map((key) => e[key]);
}

function entries<T = number | string>(e: any): [string, T][];
function entries(e: any) {
  return keys(e).map((key) => [key, e[key]]);
}

function length(e: any): number;
function length(e: any) {
  return keys(e).length;
}

export default {
  keys,
  values,
  entries,
  length
};
