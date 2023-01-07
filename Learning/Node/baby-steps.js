function myreducer (arg)  {
  let sum = 0;
  for (let i = 2; i < arg.length; i++) {
    sum += arg[i]*1;
  }
  return sum;
}

const sum = myreducer(process.argv);

console.log(sum)