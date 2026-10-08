// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vj' to 'hasViewState'
// - Renamed export 'hW' to 'getViewType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 596609
         */
module.exports = function (module, exports, require) {
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  function i(e) {
    var r;
    return (e == null ? undefined : (r = e.docx) === null || r === undefined ? undefined : r.presentationMode?.type) ?? viewStateTypeConstants.viewTypes.NONE;
  }
  function l(e) {
    return i(e) !== viewStateTypeConstants.viewTypes.NONE;
  }
  require.d(exports, {
    hasViewState: function () {
      return l;
    },
    getViewType: function () {
      return i;
    }
  });
}