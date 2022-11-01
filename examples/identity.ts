import { FunctionComponent } from "../src";

let identity = new FunctionComponent((v,next) => next(v));

let x = [];

let conn_id = identity.on((v) => {
  x = [...x, v];
  console.log(`called: ${Date.now() - now}ms ${x.length}`);
});
const now = Date.now();
let iterations = 10000

