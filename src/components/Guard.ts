import { FunctionComponent, Chain, Demuxer } from "../";
import { keys, toPairs, map, is } from "nanoutils";

export class Guard extends Chain {
  constructor(conds) {
    super(
      new FunctionComponent((v, next) => {
        let matches: string[] = [];
        let others: string[] = [];
        let match = false;
        const processConds = ([name, cond]) => {
          if (cond === "otherwise") {
            others.push(name);
          } else if (is(Function, cond) && cond(v)) {
            matches.push(name);
            match = true;
          }
        };
        map(processConds, toPairs(conds));
        map((name: string) => next({[name]: v}), match ? matches : others);
      }),
      new Demuxer(...keys(conds))
    );
  }
}
