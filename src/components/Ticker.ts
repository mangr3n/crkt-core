import { FunctionComponent } from '../';

export class Ticker extends FunctionComponent {
  constructor(ms, {value = {}, initialDelay}) {
    super((v, next) => {
      if (!initialDelay) next(value);
      setInterval(() => next(value), ms);
    });
  }
}