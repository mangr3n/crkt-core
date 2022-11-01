import { ObjectComponent } from "../";
import { concat, map, reduce, range } from 'nanoutils';

export class Chain extends ObjectComponent {
  constructor(...args) {
    console.log('Chain',args);
    const lastIndex = args.length - 1;
    const [first, last] = [args[0], args[lastIndex]];

    let idx = 0;
    let components =  reduce((ac, v) => ({...ac,[`c${idx++}`]: v}), {}, args);
    const inputs = first.inputs;
    const outputs = last.outputs;
    const compKeys = range(0, lastIndex);
    const intConns = map(i => ([`c${i}`, `c${i+1}`]), compKeys);
    const inConns = map(input => ([`in.${input}`,`c0.${input}`]),inputs);
    const outConns = map(out => ([`c${lastIndex}.${out}`,`out.${out}`]), outputs);

    const connections = concat(intConns, concat(inConns, outConns));

    const result = {
      components, 
      connections,
      inputs,
      outputs
    };
    super(result);
  }
}