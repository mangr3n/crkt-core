import { Demuxer } from '../src';

const comp = new Demuxer('a','b');

comp.on('a',v => console.log('a: ',v));
comp.on('b', v => console.log('b: ',v));
comp.on(v => console.log('out: ',v));

comp.send({a:1});
comp.send({b:2});
comp.send({a:3,b:4});