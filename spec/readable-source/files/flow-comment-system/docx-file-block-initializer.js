// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initializeDocxFileBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 972540
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxFallbackConfigSet = require("docx-fallback-config-set") /*id: 865092*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxStageModTrigger = require("docx-stage-mod-trigger") /*id: 43684*/;
  function s() {
    docxFallbackConfigSet.setFallbackConfig(docBlockTypeConstants.blockTypeConstants.FILE, {
      collectSSRContent: true
    });
    docxEditorCore.registerFetcher(() => require.e("preview-card") /*id: 74596*/.then(require.bind(require, "preview-card-component") /*id: 84571*/));
    docxStageModTrigger.triggerDocxStageMod(docBlockTypeConstants.blockTypeConstants.FILE);
  }
  require.d(exports, {
    initializeDocxFileBlock: function () {
      return s;
    }
  });
}