import { Iterator } from '../src';

const log = (label) => (value) => console.log(`${label}:`,value);
let comp = new Iterator('one');

comp.on(log('non-cyclic'));
comp.send(1);
comp.send(1);
comp.send(1);
comp.send(1);


comp = new Iterator('one',{cyclic:true});

comp.on(log("cyclic"));
comp.send(1);
comp.send(1);
comp.send(1);
comp.send(1);
