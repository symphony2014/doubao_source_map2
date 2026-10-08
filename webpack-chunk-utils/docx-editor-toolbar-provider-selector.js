// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'getToolbarProvider'
// - Renamed export 'S' to 'getHideBlockCodeOrConst'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 932717
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var numericConstants = require("numeric-constants") /*id: 807000*/;
  var documentOverflowAndDimensionsUtils = require("document-overflow-and-dimensions-utils") /*id: 319019*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var hideBlockToolbarConsts = require("hide-block-toolbar-consts") /*id: 544027*/;
  function _() {
    let {
      height: e
    } = documentOverflowAndDimensionsUtils.getDocumentDimensions();
    if (e >= docxEditorConstantsConfig_1.maxZIndexConstant) {
      return docxEditorConstantsConfig_1.templateSearchProvider;
    } else {
      return docxEditorConstantsConfig_1.editTextBlockToolbarProvider;
    }
  }
  let l = () => browserEnvironmentDetectionUtils.browserDetector.isLarkFeed ? hideBlockToolbarConsts.hideBlockCode : numericConstants.numConst87;
  require.d(exports, {
    getToolbarProvider: function () {
      return _;
    },
    getHideBlockCodeOrConst: function () {
      return l;
    }
  });
}