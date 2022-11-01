import { FunctionComponent } from "../FunctionComponent";

export class Serializer extends FunctionComponent {
  constructor() {
    super((v, next) => {
      if (v[Symbol.iterator]) {
        for (let i of v) next(i);
      }
    }) 
  }
}