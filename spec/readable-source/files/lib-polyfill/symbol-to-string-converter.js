// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'toPrimitivePolyfill'
// - Resolved require(320986) to 'to-primitive-polyfill'
// - Renamed variable 'o' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 980181
         */
module.exports = function (module, exports, require) {
  var toPrimitivePolyfill = require("to-primitive-polyfill") /*id: 320986*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  module.exports = function (t) {
    var r = toPrimitivePolyfill(t, "string");
    if (isSymbolPolyfill(r)) {
      return r;
    } else {
      return r + "";
    }
  };
}