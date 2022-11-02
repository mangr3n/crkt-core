import { log, UniqueFilter } from "../src";

const comp = new UniqueFilter();

comp.on(log());

comp.send(1); // out: 1
comp.send(1);
comp.send(2); // out: 2
comp.send(2);