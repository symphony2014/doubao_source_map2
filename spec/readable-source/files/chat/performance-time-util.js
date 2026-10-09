// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'getPerformanceNow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 512870
         */
module.exports = function (module, exports, require) {
  let i = () => {
    try {
      var e;
      var t;
      if ((t = window) === null || t === undefined) {
        return undefined;
      } else if ((e = t.performance) === null || e === undefined) {
        return undefined;
      } else {
        return e.now();
      }
    } catch (e) {
      return Date.now();
    }
  };
  require.d(exports, {
    getPerformanceNow: function () {
      return i;
    }
  });
}