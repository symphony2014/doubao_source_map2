// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'instanceOfCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 404913
         */
module.exports = function (module, exports, require) {
  function n(t, r) {
    if (r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance]) {
      return !!r[Symbol.hasInstance](t);
    } else {
      return t instanceof r;
    }
  }
  require.d(exports, {
    instanceOfCheck: function () {
      return n;
    }
  });
}