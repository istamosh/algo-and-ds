import { addTwoNumbers, ListNode } from "../src/addTwoNumbers";

const createList = (arr: number[]): ListNode | null => {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

const listToArray = (list: ListNode | null): number[] => {
  let arr: number[] = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};

test("addTwoNumbers with [2,4,3] and [5,6,4]", () => {
  const l1 = createList([2, 4, 3]);
  const l2 = createList([5, 6, 4]);
  const result = addTwoNumbers(l1, l2);
  expect(listToArray(result)).toEqual([7, 0, 8]);
});

test("addTwoNumbers with [0] and [0]", () => {
  const l1 = createList([0]);
  const l2 = createList([0]);
  const result = addTwoNumbers(l1, l2);
  expect(listToArray(result)).toEqual([0]);
});

test("addTwoNumbers with [9,9,9,9,9,9,9] and [9,9,9,9]", () => {
  const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
  const l2 = createList([9, 9, 9, 9]);
  const result = addTwoNumbers(l1, l2);
  expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test("addTwoNumbers with [1,8] and [0]", () => {
  const l1 = createList([1, 8]);
  const l2 = createList([0]);
  const result = addTwoNumbers(l1, l2);
  expect(listToArray(result)).toEqual([1, 8]);
});

test("addTwoNumbers with [5] and [5]", () => {
  const l1 = createList([5]);
  const l2 = createList([5]);
  const result = addTwoNumbers(l1, l2);
  expect(listToArray(result)).toEqual([0, 1]);
});
