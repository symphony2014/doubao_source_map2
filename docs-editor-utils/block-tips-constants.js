// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QV' to 'showBlockTips'
// - Renamed export 'i3' to 'blockTipsClosed'
// - Renamed export 'v2' to 'closeBlockTips'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 574715
         */
module.exports = function (module, exports, require) {
  let o = "SHOW_BLOCK_TIPS";
  let i = "CLOSE_BLOCK_TIPS";
  let l = "BLOCK_TIPS_CLOSED";
  require.d(exports, {
    showBlockTips: function () {
      return o;
    },
    blockTipsClosed: function () {
      return l;
    },
    closeBlockTips: function () {
      return i;
    }
  });
}