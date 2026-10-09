// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fw' to 'getPositionRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 402360
         */
module.exports = function (module, exports, require) {
  function o(e) {
    let n = e.toPosition();
    return {
      start: n.start,
      end: n.start + n.len
    };
  }
  require.d(exports, {
    getPositionRange: function () {
      return o;
    }
  });
}