// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerTextBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 491362
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderCollections = require("docx-editor-provider-collections") /*id: 494060*/;
  var editorPluginListMerge = require("editor-plugin-list-merge") /*id: 339280*/;
  var textBlockWrapperComponent = require("text-block-wrapper-component") /*id: 36029*/;
  function a(e, i) {
    let n = editorPluginListMerge.getEditorPluginList(i.config);
    let a = docxEditorProviderCollections.getAllProviderNames(i.config);
    textBlockWrapperComponent.registerTextBlock(n, a);
  }
  require.d(exports, {
    registerTextBlock: function () {
      return a;
    }
  });
}