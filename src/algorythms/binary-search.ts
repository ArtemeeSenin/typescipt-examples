function binarySearch<T>(list: T[], item: T): number | null {
  let low = 0;
  let high = list.length - 1;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const exampleList = [1,2,3,4,5,6,7,8,9,10];

binarySearch(exampleList, 100) //?
