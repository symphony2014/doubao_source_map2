// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'setCanvasCreator'
// - Renamed export 'u' to 'getCanvasCreator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 705110
         */
module.exports = function (module, exports, require) {
  function i(t, e) {
    var n = document.createElement("canvas");
    n.width = t;
    n.height = e;
    return n;
  }
  function r() {
    return i;
  }
  function o(t) {
    i = t;
  }
  require.d(exports, {
    setCanvasCreator: function () {
      return o;
    },
    getCanvasCreator: function () {
      return r;
    }
  });
}