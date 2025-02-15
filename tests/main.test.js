import hasCommonAncestor from "../src/main.js";

const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

test("6 and 8 should have a common ancestor", () => {
    expect(hasCommonAncestor(parentChildPairs1, 6, 8)).toBe(true);
});

test("6 and 7 should have a common ancestor", () => {
    expect(hasCommonAncestor(parentChildPairs1, 6, 7)).toBe(true);
});

test("6 and 11 should have a common ancestor", () => {
    expect(hasCommonAncestor(parentChildPairs1, 6, 11)).toBe(true);
});

test("1 and 12 should not have a common ancestor", () => {
    expect(hasCommonAncestor(parentChildPairs1, 1, 12)).toBe(false);
});
