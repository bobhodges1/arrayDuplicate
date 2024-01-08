import { duplicate2 } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("test1", () => {
    expect(duplicate2([30,20,10])).toStrictEqual([30,30,20,20,10,10]);
});

test("test2", () => {
    expect(duplicate2(["apple", "banana"])).toStrictEqual(["apple","apple","banana","banana"]);
});
