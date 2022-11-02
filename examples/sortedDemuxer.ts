import { SortedDemuxer, log } from '../src';

const comp = new SortedDemuxer('a','b','c');

comp.on(log());
comp.on('a', log('a'));
comp.on('b', log('b'));
comp.on('c', log('c'));
comp.send({a: 1});
comp.send({a: 1, b: 2, c: 3});
