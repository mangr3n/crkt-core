import { Chain, Mapper, Serializer } from '.';

const toArray = (v) => [].concat(v);

export class ArraySerializer extends Chain {
  constructor() {
    super(new Mapper(toArray), new Serializer());
  }
}