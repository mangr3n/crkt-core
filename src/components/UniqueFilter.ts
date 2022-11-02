import { FunctionComponent } from '../';

export class UniqueFilter extends FunctionComponent {
  lastValue: any;
  constructor(initialValue?) {
    super((v, next) => {
      if (v !== this.lastValue) {
        this.lastValue = v;
        next(v);
      }
    });
    if (initialValue) this.lastValue = initialValue;
  }
}