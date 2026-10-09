// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getNodeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 133237
         */
module.exports = function (module, exports, require) {
  function r(t) {
    if (t) {
      return (t.nodeName || "").toLowerCase();
    } else {
      return null;
    }
  }
  require.d(exports, {
    getNodeName: function () {
      return r;
    }
  });
}