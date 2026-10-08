// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'toKebabCase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 968008
         */
module.exports = function (module, exports, require) {
  let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
  require.d(exports, {
    toKebabCase: function () {
      return n;
    }
  });
}