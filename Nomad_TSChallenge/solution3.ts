declare module "lodash" {
  function head(array: []): any;
  function hasIn(object: Object, key: String): boolean;
  function isBoolean(value: any): boolean;
  function toString(valueOf: any): String;
  function split(string: String, separator: RegExp | String, limit: number): [];
  function hasPath(object: object, path: [] | string): boolean;
  function filter(array: [], predicate: Function): [];
  function every(array: [], predicate: Function): boolean;
  function map(array: [], iteratee: Function): [];
}
