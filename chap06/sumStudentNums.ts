export{}

const studentNums: {[key: string]: number;} =
{
  "い組": 35,
  "ろ組": 36,
  "は組": 37,
  "に組": 34,
  "ほ組": 36
};
let ans = 0;
for(const key in studentNums) {
  ans += studentNums[key];
}
console.log(`学年の数: ${ans}`);