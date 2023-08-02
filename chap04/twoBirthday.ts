export{}

const a = Math.round(Math.random() * 68) + 1950;
const b = Math.round(Math.random() * 68) + 1950;

console.log(`Aの生まれ年: ${a} Bの生まれ年: ${b}`);
if(a >= 1989 && b >= 1989) {
  console.log(`AさんもBさんも平成生まれ`);
} else if(a >= 1989 || b >= 1989) {
  console.log(`どちらかが平成生まれ`);
} else {
  console.log(`両方とも昭和生まれ`);
}