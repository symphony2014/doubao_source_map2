// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolWellKnownRegistrySetter'
// - Resolved require(11427) to 'symbol-well-known-registry-setter'
// - Renamed variable 'o' to 'symbolToPrimitivePolyfill'
// - Resolved require(784907) to 'symbol-to-primitive-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 387898
         */
module.exports = function (module, exports, require) {
  var symbolWellKnownRegistrySetter = require("symbol-well-known-registry-setter") /*id: 11427*/;
  var symbolToPrimitivePolyfill = require("symbol-to-primitive-polyfill") /*id: 784907*/;
  symbolWellKnownRegistrySetter("toPrimitive");
  symbolToPrimitivePolyfill();
}