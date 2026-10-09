// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'triggerDocxStageMod'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 43684
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var docxImageUrlResolver = require("docx-image-url-resolver") /*id: 323878*/;
  var stageConstant = require("stage-constant") /*id: 199969*/;
  var docBlockTypeConfig = require("doc-block-type-config") /*id: 558922*/;
  function c(e) {
    let i = e && docBlockTypeConfig.supportedBlockTypes.includes(e);
    if (!docxImageUrlResolver.resolveImageUrl || i) {
      docxEditorCore.registerModTrig([[stageConstant.stage, {
        stage: businessStageConstants.businessConstants.DocxStage.idle
      }]]);
    }
  }
  require.d(exports, {
    triggerDocxStageMod: function () {
      return c;
    }
  });
}