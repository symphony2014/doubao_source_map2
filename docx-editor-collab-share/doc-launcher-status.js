// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getLaunchStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 126777
         */
module.exports = function (module, exports, require) {
  var r = {
    Mock: -1,
    Unknown: 0,
    Startup: 1,
    Rewrite: 2
  };
  require.d(exports, {
    getLaunchStatus: function () {
      return r;
    }
  });
}