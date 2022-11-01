import { Guard } from '../src';

const log = (label) => value => console.log(`${label}: `, value);
const guard = new Guard({
  even: v => v % 2 === 0,
  greaterThan10: v => v > 10,
  greaterThan5: v => v > 5,
  some: 'otherwise'
});

guard.on('even',log('even'));
guard.on('greaterThan10',log('greaterThan10'));
guard.on('greaterThan5',log('greaterThan5'));
guard.on('some',log('some'));

guard.send(1); // some
guard.send(2); // even
guard.send(6); // even, greaterThan5
guard.send(7); // greaterThan5
guard.send(11) // greaterThan5, greaterThan10
guard.send(12) // even, greaterThan5, greaterThan10
