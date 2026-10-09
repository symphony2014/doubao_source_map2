// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getCurrentPanelWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 458985
         */
module.exports = function (module, exports, require) {
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  let s = (e, i, r) => e ? docxEditorConstantsConfig.maxTooltipWidth : i ? docxEditorConstantsConfig.minPanelWidth : r ? docxEditorConstantsConfig.maxBlockWidth : 0;
  function a() {
    let e = reactReduxCore.useSelector(docxSelectorsExport.isCommentPanelShown);
    return s(e, reactReduxCore.useSelector(docxSelectorsExport.isHelpPanelShown), reactReduxCore.useSelector(docxSelectorsExport.isSuggestionSidebarShown));
  }
  require.d(exports, {
    getCurrentPanelWidth: function () {
      return a;
    }
  });
}