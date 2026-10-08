// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'getObjectExtension'
// - Renamed export 'l' to 'getExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 146008
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let t = String(e).split(".").pop();
    if (t && t !== e) {
      return t.toLowerCase();
    } else {
      return "";
    }
  }
  function o(e) {
    return n(e && e.name ? e.name : "");
  }
  require.d(exports, {
    getObjectExtension: function () {
      return o;
    },
    getExtension: function () {
      return n;
    }
  });
}