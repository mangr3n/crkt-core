export class BadPortError extends Error {
  constructor(type, name) {
    console.error('BadPortError',{type,name});
    super("unknown port", { cause: `${type} port [${name}] does not exist` });
  }
}
