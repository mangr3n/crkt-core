import { FunctionComponent } from "../FunctionComponent";

export class Identity extends FunctionComponent {
  constructor() {
    super((v, next) => next(v));
  }
}