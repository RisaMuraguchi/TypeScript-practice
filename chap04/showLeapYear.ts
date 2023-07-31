export{}

const num = Math.round(Math.random() * 70) + 1950;
if(num % 4 == 0) {
  console.log("閏年");
} else {
  console.log("閏年ではない");
}