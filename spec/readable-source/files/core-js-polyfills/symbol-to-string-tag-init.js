// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'o' to 'symbolWellKnownRegistrySetter'
// - Resolved require(11427) to 'symbol-well-known-registry-setter'
// - Renamed variable 'i' to 'setSymbolToStringTag_1'
// - Resolved require(434792) to 'set-symbol-to-string-tag_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 495183
         */
module.exports = function (module, exports, require) {
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var symbolWellKnownRegistrySetter = require("symbol-well-known-registry-setter") /*id: 11427*/;
  var setSymbolToStringTag_1 = require("set-symbol-to-string-tag_1") /*id: 434792*/;
  symbolWellKnownRegistrySetter("toStringTag");
  setSymbolToStringTag_1(globalNamespaceUtil("Symbol"), "Symbol");
}