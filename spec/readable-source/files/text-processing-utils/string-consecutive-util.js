// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'maxConsecutiveCount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 879547
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    let r = String(e);
    let n = r.indexOf(t);
    let i = n;
    let o = 0;
    let u = 0;
    if (typeof t != "string") {
      throw TypeError("Expected substring");
    }
    while (n !== -1) {
      if (n === i) {
        if (++o > u) {
          u = o;
        }
      } else {
        o = 1;
      }
      i = n + t.length;
      n = r.indexOf(t, i);
    }
    return u;
  }
  require.d(exports, {
    maxConsecutiveCount: function () {
      return n;
    }
  });
}