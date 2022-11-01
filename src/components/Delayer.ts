import { FunctionComponent } from "../FunctionComponent";

export class Delayer extends FunctionComponent {
  constructor(ms: number) {
    super((v, next) => {
      setTimeout(() => next(v), ms);
    })
  }
};