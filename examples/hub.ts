import { Hub } from '../src';

const log = (label) => (value) => console.log(`${label}`,value);
const hub = new Hub('a', 'b', 'c');

hub.on(log('out'));

hub.send('a',1);
hub.send('b', 2);
hub.send('c',3);

