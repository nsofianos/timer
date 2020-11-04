const input = process.argv.slice(2);

for (let interval of input) {
  if (interval > 0 && Number.isInteger(Math.floor(interval))) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval * 100);
  }
}

