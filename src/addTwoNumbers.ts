export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let l3 = new ListNode(0);
  let curr = l3;
  let carry = 0;

  // check if either is still non-null
  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    // max possible sum will be 19
    let sum = carry + x + y;
    // truncate one digit (19 -> 1) for the next iteration
    carry = Math.floor(sum / 10);
    // store the result (19 -> 9)
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    // if the current isn't null then onto the next one
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return l3.next;
};
