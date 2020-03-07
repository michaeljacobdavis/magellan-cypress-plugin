const filter = require("./bucket");

it("Should distrubute tests based on the bucket config", () => {
  const bucketConfig = "1/3";
  const tests = ["test1", "test2", "test3"];
  const result = filter(tests, bucketConfig);
  expect(result).toEqual(["test1"]);
});

it("Should validate bucket config consists of two integers", () => {
  const bucketConfig = "z";
  expect(() => filter([], bucketConfig)).toThrow(
    `Use --bucket=1/2 syntax. Received ${bucketConfig}`
  );
});
