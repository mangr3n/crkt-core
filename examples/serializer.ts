import { Serializer } from "../src/components/Serializer";

const comp = new Serializer();

comp.on(console.log);

comp.send([1,2,3]);