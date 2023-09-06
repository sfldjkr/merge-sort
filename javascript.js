list0 = [7, 3, 4, 1, 2];
list1 = [7, 2, 3, 1];
list2 = [7, 8, 9, 6, 5, 4, 1, 2, 3];
list3 = [2, 1, 3, 4, 6, 5, 7, 8, 9];

// the problem is when the left and right are already sorted

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

let listThree = [8, 4, 0, 1, 2];
console.log(mergeSort(listThree));
