// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'getEditorPluginList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 980558
         */
module.exports = function (module, exports, require) {
  var editorLineSelectHandler = require("editor-line-select-handler") /*id: 229365*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var editorPluginRegistry = require("editor-plugin-registry") /*id: 723295*/;
  function a() {
    return [...editorPluginRegistry.getEditorPlugins(), [editorLineSelectHandler.LineSelectHandler], [docxInlineBlockRenderers.TripleClickHandler]];
  }
  require.d(exports, {
    getEditorPluginList: function () {
      return a;
    }
  });
}