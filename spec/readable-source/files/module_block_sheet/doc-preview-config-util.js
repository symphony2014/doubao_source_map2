// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getDocPreviewConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 664227
         */
module.exports = function (module, exports, require) {
  var docPreviewContainerIds = require("doc-preview-container-ids") /*id: 449485*/;
  function o() {
    return {
      rootSelector: docPreviewContainerIds.flowDocSelector,
      noCommentPanel: true
    };
  }
  require.d(exports, {
    getDocPreviewConfig: function () {
      return o;
    }
  });
}