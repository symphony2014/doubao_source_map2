// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'msToSec'
// - Renamed export 'w' to 'secToMs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 707109
         */
module.exports = function (module, exports, require) {
  let n = t => t * 1000;
  let r = t => t / 1000;
  require.d(exports, {
    msToSec: function () {
      return r;
    },
    secToMs: function () {
      return n;
    }
  });
}