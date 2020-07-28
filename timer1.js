const input = process.argv.slice(2);
let time = 0;
input.sort((a,b) => a < b);
for (let i of input) {
  if (i < 0 || isNaN(i) === true) continue;
  time = i * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`Sound not working so lets count the seconds ${i}`);
    
  }, time);
}