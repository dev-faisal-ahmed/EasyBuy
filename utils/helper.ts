export function arrayMaker(length: number) {
  const newArr: number[] = [];
  for (let i = 1; i <= length; i++) {
    newArr.push(i);
  }

  return newArr;
}
