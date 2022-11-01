import { FunctionComponent } from '../';

export class Repeater extends FunctionComponent {
  constructor(times) {
    super((v, next) => {
      for (let i = 0; i < times; i++) next(v);
    })
  }
}