// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'getDefaultBool'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 855627
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetter = require("bool-default-getter") /*id: 909267*/;
  require.d(exports, {
    getDefaultBool: function () {
      return boolDefaultGetter.getDefaultBool;
    }
  });
}