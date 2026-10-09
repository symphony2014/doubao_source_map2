// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useAsyncIterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 545543
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  exports.useAsyncIterator = function (e, t) {
    reactCoreLibraryReexport.useEffect(function () {
      var t = e();
      var n = false;
      (function () {
        typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
          return typescriptRuntimeHelpers.generator(this, function (e) {
            switch (e.label) {
              case 0:
                if (!typeCheckUtils.isFunction(t[Symbol.asyncIterator])) {
                  return [3, 4];
                }
                e.label = 1;
              case 1:
                return [4, t.next()];
              case 2:
                if (e.sent().done || n) {
                  return [3, 3];
                }
                return [3, 1];
              case 3:
                return [3, 6];
              case 4:
                return [4, t];
              case 5:
                e.sent();
                e.label = 6;
              case 6:
                return [2];
            }
          });
        });
      })();
      return function () {
        n = true;
      };
    }, t);
  };
}