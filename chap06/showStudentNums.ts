export{}

const studentNums: {[key: string]: number;} =
{
  "い組": 35,
  "ろ組": 36,
  "は組": 37,
  "に組": 34,
  "ほ組": 36
};
for(const key in studentNums) {
  console.log(`${key}: ${studentNums[key]}人`);
}