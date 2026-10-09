// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'asyncIterableToArray'
// - Resolved require(360638) to 'async-iterable-to-array'
// - Renamed variable 'i' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 578587
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var asyncIterableToArray = require("async-iterable-to-array") /*id: 360638*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var a = Array.fromAsync;
  polyfillPropertyDefiner({
    target: "Array",
    stat: true,
    forced: !a || tryCatchFunctionWrapper(function () {
      var t = 0;
      a.call(function () {
        t++;
        return [];
      }, {
        length: 0
      });
      return t !== 1;
    })
  }, {
    fromAsync: asyncIterableToArray
  });
}