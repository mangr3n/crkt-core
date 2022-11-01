import { Chain, Hub, Accumulator, Filter } from '.';

export class Muxer extends Chain {
  constructor(...inputs) {
    super(
      new Hub(...inputs),
      new Accumulator(),
      new Filter(v => inputs.every(i => v[i] !== undefined))
    )
  }
}