// export{}

const showStudent = new Map();
showStudent.set("い組", 35);
showStudent.set("ろ組", 36);
showStudent.set("は組", 37);
showStudent.set("に組", 34);
showStudent.set("ほ組", 36);

for(const [key, value] of showStudent) {
  console.log(`${key}: ${value}人`);
}