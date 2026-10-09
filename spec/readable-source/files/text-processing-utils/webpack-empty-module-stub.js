// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ok' to 'okStub'
// - Renamed export 't1' to 't1Stub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 927617
         */
module.exports = function (module, exports, require) {
  function n() {}
  function i() {}
  require.d(exports, {
    okStub: function () {
      return n;
    },
    t1Stub: function () {
      return i;
    }
  });
}