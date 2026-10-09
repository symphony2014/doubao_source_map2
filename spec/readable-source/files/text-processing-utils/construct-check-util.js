// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'checkConstruct'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 56001
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    return i(e, t.inConstruct, true) && !i(e, t.notInConstruct, false);
  }
  function i(e, t, r) {
    if (typeof t == "string") {
      t = [t];
    }
    if (!t || t.length === 0) {
      return r;
    }
    let n = -1;
    while (++n < t.length) {
      if (e.includes(t[n])) {
        return true;
      }
    }
    return false;
  }
  require.d(exports, {
    checkConstruct: function () {
      return n;
    }
  });
}