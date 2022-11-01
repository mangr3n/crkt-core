import { Checker } from '../src';

const log = (v) => (x) => console.log(`${v}:`,x);
const comp = new Checker(v => v > 5);

comp.on('true',log('true'));
comp.on('false', log('false'));

comp.send(1);
comp.send(6);