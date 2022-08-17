  
const nmb = process.argv.slice(2).reduce((acc, current) => {
    return acc + +current;
  }, 0);
  console.log(nmb);