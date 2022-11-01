import { ObjectComponent, Mapper } from '../';
import { map } from 'nanoutils';

export class Hub extends ObjectComponent {
  constructor(...inputs) {
    let components = {};
    let connections = [['in', 'out']];
    map(i => {
      components[i] = new Mapper(v => ({[i]: v}));
      connections.push([`in.${i}`,i], [i, 'out']);
    }, inputs);
    super({components, connections, inputs});
  }
}
