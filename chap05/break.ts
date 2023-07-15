export{}

for(let i = 1; i <= 10; i++) {
  const num = Math.round(Math.random() * 10);
  console.log(`${i}個目の乱数: ${num}`);
  if(num == 5) {
    console.log("5が発生したのでbreak");
    break;
  }
}