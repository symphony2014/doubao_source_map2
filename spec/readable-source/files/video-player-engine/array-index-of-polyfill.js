// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'functionBindPolyfill_2'
// - Resolved require(146857) to 'function-bind-polyfill_2'
// - Resolved require(569286) to 'array-includes-indexof-polyfill'
// - Renamed variable 'a' to 'safeArrayMethodCheck_1'
// - Resolved require(811572) to 'safe-array-method-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 695219
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindPolyfill_2 = require("function-bind-polyfill_2") /*id: 146857*/;
  var i = require("array-includes-indexof-polyfill") /*id: 569286*/.indexOf;
  var safeArrayMethodCheck_1 = require("safe-array-method-check_1") /*id: 811572*/;
  var d = functionBindPolyfill_2([].indexOf);
  var r = !!d && 1 / d([1], 1, -0) < 0;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: r || !safeArrayMethodCheck_1("indexOf")
  }, {
    indexOf: function (U, n) {
      if (r) {
        return d(this, U, n) || 0;
      } else {
        return i(this, U, n);
      }
    }
  });
}