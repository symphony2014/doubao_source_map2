// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'consumeValue'
// - Renamed export 'y' to 'storeValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59341.c357291c.js
         * chunkId: 59341
         * moduleId: 31491
         */
module.exports = function (module, exports, require) {
  let a;
  function n(e) {
    a = e;
  }
  function o() {
    let e = a;
    a = undefined;
    return e;
  }
  require.d(exports, {
    consumeValue: function () {
      return o;
    },
    storeValue: function () {
      return n;
    }
  });
}