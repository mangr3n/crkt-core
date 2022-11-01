import { FunctionComponent } from '../';

export class Iterator extends FunctionComponent {
  constructor(iterable, {cyclic = false} = {}) {
    let iterator = iterable[Symbol.iterator]();
    super((v, next) => {
      let { value, done } = iterator.next();
      if (done && cyclic) {
        iterator = iterable[Symbol.iterator]();
        ({value, done} = iterator.next());
      }
      if (!done) next(value);
    })
  }
}