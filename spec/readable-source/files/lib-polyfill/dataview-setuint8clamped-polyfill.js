// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'assertDataView'
// - Resolved require(996633) to 'assert-data-view'
// - Renamed variable 'a' to 'mathTruncSafeValidate'
// - Resolved require(120156) to 'math-trunc-safe-validate'
// - Renamed variable 'u' to 'colorByteClampUtil'
// - Resolved require(872025) to 'color-byte-clamp-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 700221
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var assertDataView = require("assert-data-view") /*id: 996633*/;
  var mathTruncSafeValidate = require("math-trunc-safe-validate") /*id: 120156*/;
  var colorByteClampUtil = require("color-byte-clamp-util") /*id: 872025*/;
  var c = functionBindFallback(DataView.prototype.setUint8);
  polyfillPropertyDefiner({
    target: "DataView",
    proto: true,
    forced: true
  }, {
    setUint8Clamped: function (t, r) {
      assertDataView(this);
      return c(this, mathTruncSafeValidate(t), colorByteClampUtil(r));
    }
  });
}