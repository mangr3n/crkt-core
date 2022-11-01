import { FunctionComponent } from '../';

export class Logger extends FunctionComponent {
  constructor(prefix='',{log = console.log} = {}) {
    super((v,next) => {
      log(prefix,v);
      next(v);
    })
  }
}