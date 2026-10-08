// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initDocxCodeBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 368262
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var highlightJsLoader = require("highlight-js-loader") /*id: 123513*/;
  var docxStageModTrigger = require("docx-stage-mod-trigger") /*id: 43684*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxFallbackConfigSet = require("docx-fallback-config-set") /*id: 865092*/;
  function c() {
    docxFallbackConfigSet.setFallbackConfig(docBlockTypeConstants.blockTypeConstants.CODE, {
      collectSSRContent: true
    });
    docxEditorCore.registerFetcher(() => highlightJsLoader.loadHighlightJs());
    docxStageModTrigger.triggerDocxStageMod(docBlockTypeConstants.blockTypeConstants.CODE);
  }
  require.d(exports, {
    initDocxCodeBlocks: function () {
      return c;
    }
  });
}