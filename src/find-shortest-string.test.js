// import findShortestString
const findShortestString = require("./find-shortest-string");

// console.log(findShortestString(["it", "is", "a", "nice", "day"]), "a");
// console.log(findShortestString(["why", "hello", "to", "you"]), "to");
// console.log(findShortestString(["brave", "dance"]), "brave");

test("findShortestString finds the shortest string in an array", () => {
    expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
    expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
    expect(findShortestString(["brave", "dance"])).toBe("brave");
})

