module.exports = {
  tags: {
    example: "tag1,tag2",
    description:
      "Run all tests that match a list of comma-delimited tags (eg: tag1,tag2)"
  },
  group: {
    example: "path/**/*.specs",
    description: "Glob of tests to run"
  },
  bucket: {
    example: "1/3",
    description: "Current bucket / Total Buckets"
  }
};
