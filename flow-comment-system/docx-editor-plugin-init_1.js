// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'configureDocxEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 879869
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderUtils = require("docx-editor-provider-utils") /*id: 993415*/;
  var autoCapitalizationPlugin = require("auto-capitalization-plugin") /*id: 782204*/;
  var editorLineSelectHandler = require("editor-line-select-handler") /*id: 229365*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var docxRendererList = require("docx-renderer-list") /*id: 254550*/;
  var docxPageBlockComponent = require("docx-page-block-component") /*id: 181612*/;
  function d(e, i) {
    var n;
    n = i.config;
    let d = [...docxRendererList.getRendererList(), [editorLineSelectHandler.LineSelectHandler], [docxInlineBlockRenderers.TripleClickHandler], ...autoCapitalizationPlugin.getDocxTranslation(n)];
    let h = docxEditorProviderUtils.getEditorProviders();
    docxPageBlockComponent.initPageBlock(d, h);
  }
  require.d(exports, {
    configureDocxEditor: function () {
      return d;
    }
  });
}