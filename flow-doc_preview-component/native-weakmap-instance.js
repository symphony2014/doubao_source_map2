// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'weakMapInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 159242
         */
module.exports = function (module, exports, require) {
  var nativeWeakmapDetector = require("native-weakmap-detector") /*id: 99767*/;
  var o = nativeWeakmapDetector.NativeWeakMap && new nativeWeakmapDetector.NativeWeakMap();
  exports.weakMapInstance = o;
}