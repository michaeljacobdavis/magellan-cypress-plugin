module.exports = function(tests, bucketConfig) {
  const [currentBucket, totalBuckets] = bucketConfig.split("/").map(Number);
  if (!Number.isInteger(currentBucket) || !Number.isInteger(totalBuckets))
    throw new Error(`Use --bucket=1/2 syntax. Received ${bucketConfig}`);
  return tests.filter(
    (test, index) => index % totalBuckets === currentBucket - 1
  );
};
