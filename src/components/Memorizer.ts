import { ObjectComponent, FunctionComponent, Mapper, Demuxer } from '..';

export class Memorizer extends ObjectComponent {
  memory;

  constructor(initialMemory = null) {
    let memory = initialMemory;
    super({
      inputs: ['memory', 'value'],
      components: {
        memory: new FunctionComponent(v => { memory = v; }),
        mapper: new Mapper(value => ({value, memory})),
        demuxer: new Demuxer('memory', 'value')
      },
      connections: [
        ['in.memory', 'memory'],
        ['in.value', 'mapper'],
        ['mapper', 'out'],
        ['in', 'demuxer'],
        ['demuxer.memory', 'memory'],
        ['demuxer.value', 'mapper']
      ]
    })
  }
}