import { Memorizer } from '../src';

const log = label => value => console.log(`${label}:`,value);
let comp = new Memorizer();

comp.on(log('out'));
comp.send('memory',1); // Nothing
comp.send('value',2);  // Emit {memory: 1, value: 2};

comp.send({memory: 5 }); // Nothing
comp.send({value: 3}); // { memory: 5, value: 3}

comp.send({memory: 6, value: 12});

