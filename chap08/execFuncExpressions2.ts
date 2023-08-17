export{}

function showConcatName(f) {
  const result = f("田中", "太朗");
  console.log(result);
}

const func = function(lastName: string, firstName: string): string {
  return `${lastName} ${firstName}`;
}
showConcatName(func);