// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getNodeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 59771
         */
module.exports = function (module, exports, require) {
  function o(e) {
    if (e) {
      return (e.nodeName || "").toLowerCase();
    } else {
      return null;
    }
  }
  require.d(exports, {
    getNodeName: function () {
      return o;
    }
  });
}