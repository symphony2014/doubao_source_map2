// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'falseConstant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 17293
         */
module.exports = function (module, exports, require) {
  let o = false;
  require.d(exports, {
    falseConstant: function () {
      return o;
    }
  });
}