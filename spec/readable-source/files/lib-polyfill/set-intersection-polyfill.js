// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'setIntersectionPolyfillUtil'
// - Resolved require(343052) to 'set-intersection-polyfill-util'
// - Resolved require(922533) to 'set-implementation-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 261532
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var setIntersectionPolyfillUtil = require("set-intersection-polyfill-util") /*id: 343052*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: !require("set-implementation-check") /*id: 922533*/("intersection", function (t) {
      return t.size === 2 && t.has(1) && t.has(2);
    }) || tryCatchFunctionWrapper(function () {
      return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
    })
  }, {
    intersection: setIntersectionPolyfillUtil
  });
}