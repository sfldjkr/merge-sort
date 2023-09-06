let mergeTwoArray = (listOne, listTwo) => {
  let mergeList = [];
  let listOneLen = listOne.length;
  let listTwoLen = listTwo.length;
  if (listOneLen === 1 && listTwoLen === 1) {
    if (listOne[0] < listTwo[0]) {
      mergeList.push(listOne[0]);
      mergeList.push(listTwo[0]);
    } else {
      mergeList.push(listTwo[0]);
      mergeList.push(listOne[0]);
    }
    return mergeList;
  }
  let listOneHead = 0;
  let listTwoHead = 0;
  while (listTwoHead < listTwoLen && listOneHead < listOneLen) {
    if (listOne[listOneHead] < listTwo[listTwoHead]) {
      mergeList.push(listOne[listOneHead]);
      listOneHead++;
    } else {
      mergeList.push(listTwo[listTwoHead]);
      listTwoHead++;
    }
  }
  if (listOneHead < listOneLen) {
    for (let i = listOneHead; i < listOneLen; i++) {
      mergeList.push(listOne[i]);
    }
  } else if (listTwoHead < listTwoLen) {
    for (let i = listTwoHead; i < listTwoLen; i++) {
      mergeList.push(listTwo[i]);
    }
  }
  return mergeList;
};
let mergeSort = (list) => {
  let listLen = list.length;
  if (list.length === 1) {
    return list;
  }
  let halfIndex = Math.round(listLen / 2);
  let firstHalf = mergeSort(list.slice(0, halfIndex));
  let secondHalf = mergeSort(list.slice(halfIndex, listLen));
  return mergeTwoArray(firstHalf, secondHalf);
};
