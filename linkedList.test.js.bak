const linkedList = require("./linkedList");

describe("linkedList", () => {
  let ll;

  beforeEach(() => {
    ll = new linkedList();
  });

  test("should create an empty linked list", () => {
    expect(ll.head).toBeNull();
    expect(ll.size).toBe(0);
  });

  test("should insert a new node at the head", () => {
    ll.insertHead(1);
    expect(ll.head.data).toBe(1);
    expect(ll.size).toBe(1);

    ll.insertHead(2);
    expect(ll.head.data).toBe(2);
    expect(ll.head.next.data).toBe(1);
    expect(ll.size).toBe(2);
  });

  test("should print the data of the linked list", () => {
    console.log = jest.fn();
    ll.insertHead(1);
    ll.insertHead(2);
    ll.insertHead(3);
    ll.printData();

    expect(console.log).toHaveBeenCalledWith(3);
    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
