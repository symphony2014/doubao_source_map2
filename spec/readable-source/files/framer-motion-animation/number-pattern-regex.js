// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'numberPattern'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 937066
         */
module.exports = function (module, exports, require) {
  let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  require.d(exports, {
    numberPattern: function () {
      return n;
    }
  });
}