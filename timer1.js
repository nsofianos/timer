const userArgs = process.argv.slice(2);
for (const arg of userArgs) {
  if (arg > 0 && Number(arg) !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg*1000)
  }
};








