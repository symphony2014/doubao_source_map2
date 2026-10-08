// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'assignOrDefine'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 411363
         */
module.exports = function (module, exports, require) {
  function n(t, r, e) {
    if (r in t) {
      Object.defineProperty(t, r, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[r] = e;
    }
    return t;
  }
  require.d(exports, {
    assignOrDefine: function () {
      return n;
    }
  });
}