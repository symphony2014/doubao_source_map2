// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qe' to 'getHistoryLocal'
// - Renamed export 'tF' to 'getHistoryShow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 840802
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var i;
    if ((i = e.docx) === null || i === undefined) {
      return undefined;
    } else {
      return i.history?.isShow;
    }
  }
  function o(e) {
    var i;
    if ((i = e.docx) === null || i === undefined) {
      return undefined;
    } else {
      return i.history?.isLocal;
    }
  }
  require.d(exports, {
    getHistoryLocal: function () {
      return o;
    },
    getHistoryShow: function () {
      return r;
    }
  });
}