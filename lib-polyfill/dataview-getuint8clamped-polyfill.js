// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 157689
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var o = require("function-bind-fallback") /*id: 263497*/(DataView.prototype.getUint8);
  polyfillPropertyDefiner({
    target: "DataView",
    proto: true,
    forced: true
  }, {
    getUint8Clamped: function (t) {
      return o(this, t);
    }
  });
}