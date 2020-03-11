const stdin = process.stdin;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

stdin.setRawMode(true);
stdin.setEncoding('utf8');



stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me! :)\n');
    process.exit();
  }
  if (key > 0 && key < 10) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key*1000)
  }
});