// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'weakMapGet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 168497
         */
module.exports = function (module, exports, require) {
  var nativeWeakmapInstance = require("native-weakmap-instance") /*id: 159242*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var a = nativeWeakmapInstance.weakMapInstance ? function (t) {
    return nativeWeakmapInstance.weakMapInstance.get(t);
  } : emptyExportFunction.emptyFunction;
  exports.weakMapGet = a;
}