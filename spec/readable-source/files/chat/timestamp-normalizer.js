// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'normalizeTimestamp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 950098
         */
module.exports = function (module, exports, require) {
  function i(e) {
    let t = Date.now();
    if (e % 10 ** (t.toString().length - 1) !== e) {
      return e;
    }
    {
      let n = e * 1000;
      if (n < t) {
        return n;
      } else {
        return e;
      }
    }
  }
  require.d(exports, {
    normalizeTimestamp: function () {
      return i;
    }
  });
}