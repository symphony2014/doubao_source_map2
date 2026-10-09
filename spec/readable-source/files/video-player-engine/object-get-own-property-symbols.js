// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'nativeSymbolSupportDetector'
// - Resolved require(655222) to 'native-symbol-support-detector'
// - Renamed variable 'i' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'a' to 'objectGetOwnPropertySymbols_1'
// - Resolved require(991431) to 'object-get-own-property-symbols_1'
// - Renamed variable 'd' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Updated imported property 'f' to 'getOwnPropSymbols' (module 991431)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 73881
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var nativeSymbolSupportDetector = require("native-symbol-support-detector") /*id: 655222*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var objectGetOwnPropertySymbols_1 = require("object-get-own-property-symbols_1") /*id: 991431*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  polyfillPropertyDefiner({
    target: "Object",
    stat: true,
    forced: !nativeSymbolSupportDetector || tryCatchFunctionWrapper(function () {
      objectGetOwnPropertySymbols_1.getOwnPropSymbols(1);
    })
  }, {
    getOwnPropertySymbols: function (U) {
      var n = objectGetOwnPropertySymbols_1.getOwnPropSymbols;
      if (n) {
        return n(requireObjectNotNullish(U));
      } else {
        return [];
      }
    }
  });
}