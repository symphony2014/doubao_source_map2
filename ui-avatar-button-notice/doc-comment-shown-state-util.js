// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cI' to 'setDocCommentShown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 814673
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  docxCommentConstants.commentSourceTypes.interaction;
  docxCommentConstants.commentSourceTypes.thirdParty;
  docxEditorConstantsConfig.containerIds.ROOT;
  docxEditorConstantsConfig.containerIds.PAGE_MAIN_ITEM;
  docxEditorConstantsConfig.containerIds.EDITOR;
  let s = e => {
    if (platformDocUtils.Vuy && !browserEnvironmentDetectionUtils.browserDetector.isInVC && !browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms) {
      try {
        platformDocUtils.T7z.setItem("docCommentShown", e);
      } catch (e) {}
    }
  };
  require.d(exports, {
    setDocCommentShown: function () {
      return s;
    }
  });
}