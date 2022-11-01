import { FunctionComponent } from "../FunctionComponent";
import { map, is, assoc, toPairs } from 'nanoutils';

export class Accumulator extends FunctionComponent {
  obj;
  constructor(initial = {}) {
    super((v, next) => {
      if (!is(Object, v)) return;
      map(([key, value]) => {
        this.obj = assoc(key, value, this.obj);
      }, toPairs(v));
      next(this.obj);
    });
    this.obj = initial;
  }
}