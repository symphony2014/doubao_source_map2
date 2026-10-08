// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'delayPromise'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 937669
         */
module.exports = function (module, exports, require) {
  let i = e => {
    let t;
    let n = new Promise(e => {
      t = e;
    });
    setTimeout(() => {
      if (t != null) {
        t();
      }
    }, e);
    return n;
  };
  require.d(exports, {
    delayPromise: function () {
      return i;
    }
  });
}