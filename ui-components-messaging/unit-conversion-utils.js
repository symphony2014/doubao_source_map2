// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'convertToSeconds'
// - Renamed export 'w' to 'convertToMilliseconds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 60508
         */
module.exports = function (module, exports, require) {
  let i = e => e * 1000;
  let l = e => e / 1000;
  require.d(exports, {
    convertToSeconds: function () {
      return l;
    },
    convertToMilliseconds: function () {
      return i;
    }
  });
}