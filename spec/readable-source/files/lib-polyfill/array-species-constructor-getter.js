// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// - Renamed variable 'o' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'i' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 517083
         */
module.exports = function (module, exports, require) {
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var a = require("core-js-wks-access") /*id: 349338*/("species");
  var u = Array;
  module.exports = function (t) {
    var r;
    if (arrayIsarrayPolyfill(t)) {
      if (nativeConstructorDetector(r = t.constructor) && (r === u || arrayIsarrayPolyfill(r.prototype))) {
        r = undefined;
      } else if (isObjectOrFunctionCheck(r) && (r = r[a]) === null) {
        r = undefined;
      }
    }
    if (r === undefined) {
      return u;
    } else {
      return r;
    }
  };
}