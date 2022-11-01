import { ObjectComponent } from "../src";

const comp = new ObjectComponent({
  components: {
  },
  connections: [
    ['in','out']
  ]
});

comp.on(console.log);
comp.send('a');