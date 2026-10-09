// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'getCodeBlockPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_code.b72f4cb7.js
         * chunkId: 39855
         * moduleId: 731627
         */
module.exports = function (module, exports, require) {
  var editorLineSelectHandler = require("editor-line-select-handler") /*id: 229365*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxCodeBlockInlineRendererRegistry = require("docx-code-block-inline-renderer-registry") /*id: 497319*/;
  function s() {
    let e = docxCodeBlockInlineRendererRegistry.getInlineRendererPlugins();
    if (!browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
      e.push([editorLineSelectHandler.LineSelectHandler]);
    }
    return e;
  }
  require.d(exports, {
    getCodeBlockPlugins: function () {
      return s;
    }
  });
}