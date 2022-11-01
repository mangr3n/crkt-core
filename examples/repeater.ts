import { brotliCompressSync } from 'zlib';
import { log, Repeater } from '../src';

const comp = new Repeater(5);

comp.on(log('repeater'));

comp.send(1);