import { Muxer } from '../src/components';

const muxer = new Muxer('a', 'b');

const log = (label= 'out') => value => console.log(`${label}: `,value);

muxer.on(log());

muxer.send('a',1);
muxer.send('b',2);
muxer.send('a',10);