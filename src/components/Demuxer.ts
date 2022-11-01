import { FunctionComponent, ObjectComponent } from "..";
import { reduce, concat, map } from 'nanoutils';

const outputReducer = (acc, output) => {
  // console.log('outputReducer',{acc,output});
  acc[output] = new FunctionComponent((v, next) => {
    if (v.hasOwnProperty(output)) next(v[output]);

  })
  return acc;
}
export class Demuxer extends ObjectComponent {
  constructor(...outputs) {
    // console.log('outputs',outputs);
    const components = reduce(outputReducer, {}, outputs);
    const connections = reduce(
      concat,
      [['in','out']],
      map(out => [['in',out],[out,`out.${out}`]] ,outputs)
    );
    super({components, connections, outputs});
  }
}