// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'retryWithDelay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 464158
         */
module.exports = function (module, exports, require) {
  let i = function (e, t = 3, n = 1000) {
    return new Promise((r, o) => {
      e().then(r).catch(s => {
        setTimeout(() => {
          if (t === 1) {
            o(s);
            return;
          }
          i(e, t - 1, n).then(r, o);
        }, n);
      });
    });
  };
  require.d(exports, {
    retryWithDelay: function () {
      return i;
    }
  });
}