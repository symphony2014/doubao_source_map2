// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Resolved require(976843) to 'object-define-property-safe'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 983774
         */
module.exports = function (module, exports, require) {
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var o = require("object-define-property-safe") /*id: 976843*/.safeDefineProperty;
  var i = symbolWellKnownRegistry("metadata");
  var u = Function.prototype;
  if (u[i] === undefined) {
    o(u, i, {
      value: null
    });
  }
}