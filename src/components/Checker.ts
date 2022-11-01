import { Chain, Mapper, Demuxer } from '.';

export class Checker extends Chain {
  constructor(cond) {
    super(
      new Mapper(v => cond(v) ? {true:v} : {false: v}),
      new Demuxer('true', 'false')
    );
  }
}