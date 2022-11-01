import { FunctionComponent } from "../FunctionComponent";

export class Mapper extends FunctionComponent {
  constructor(fn) {
    super((v, next) => {
      next(fn(v));
    })
  }
}