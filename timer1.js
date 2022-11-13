// a timer that takes any number of inputs and creates an alarm
const timer1 = function(args) {
  //check that array of args is not empty.
  if (args === []) {
    return;
  }
  // count through the args.
  for (let i of args) {
    // round to the nearest 2 decimals
    i = Math.round(i * 100) / 100;
    // feedback
    if (!isNaN(i) && i > 0) {
      setTimeout(() => {
        process.stdout.write(`You're ${i} second alarm.\n`);
      }, i * 1000);
    }
  }
};
// process the inputs as args
let args = process.argv.slice(2);

timer1(args);