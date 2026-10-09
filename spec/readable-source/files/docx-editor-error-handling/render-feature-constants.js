// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'descendantRenderKey'
// - Renamed export 'z' to 'renderThreshold'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 362509
         */
module.exports = function (module, exports, require) {
  let n = 300;
  let o = "enableDescendantRender";
  require.d(exports, {
    descendantRenderKey: function () {
      return o;
    },
    renderThreshold: function () {
      return n;
    }
  });
}