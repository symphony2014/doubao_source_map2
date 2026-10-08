// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initBlockHighlights'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 370881
         */
module.exports = function (module, exports, require) {
  var editorPluginListMerge = require("editor-plugin-list-merge") /*id: 339280*/;
  var docxEditorProviderAggregator = require("docx-editor-provider-aggregator") /*id: 754913*/;
  var registerHeadingBlocks = require("register-heading-blocks") /*id: 824975*/;
  function a(e, i) {
    let n = editorPluginListMerge.getEditorPluginList(i.config);
    let a = docxEditorProviderAggregator.getBlockHighlightProvidersWithHeading(i.config);
    registerHeadingBlocks.registerHeadingBlocks(n, a);
  }
  require.d(exports, {
    initBlockHighlights: function () {
      return a;
    }
  });
}