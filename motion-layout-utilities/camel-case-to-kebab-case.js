// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'camelToKebabCase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 869509
         */
module.exports = function (module, exports, require) {
  let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
  require.d(exports, {
    camelToKebabCase: function () {
      return n;
    }
  });
}