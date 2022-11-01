import { Chain, Identity, log } from "../src/";

const comp = new Chain(new Identity(), new Identity());

comp.on(log());

comp.send(1);