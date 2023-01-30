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

function key(e: any, v: any): string | number;
function key(e: any, v: any) {
  return entries(e).find(([, _]) => _ === v)![0];
}

export default {
  keys,
  values,
  entries,
  length,
  key,
};
