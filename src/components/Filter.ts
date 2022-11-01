import { FunctionComponent } from "../FunctionComponent";

export class Filter extends FunctionComponent {
  constructor(condFn) {
    super((v, next) => {
      if (condFn(v)) next(v);
    })
  }
}