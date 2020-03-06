module.exports = function (tests, partialFilename) {
    return tests.filter(function (f) {
      var pass = true;
  
      if (partialFilename) {
        if (typeof partialFilename === "string") {
          partialFilename = [partialFilename];
        }
        pass = partialFilename.some(function (pfn) {
          return f.filename.indexOf(pfn) > -1;
        });
      }
  
      return (f.filename.indexOf(".js") === f.filename.length - 3) && pass;
    });
  };