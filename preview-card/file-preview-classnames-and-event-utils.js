// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XW' to 'getFilePreviewClassnames'
// - Renamed export 'yK' to 'triggerFilePreviewEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 547228
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxAnchorImageLoaderLogger = require("docx-anchor-image-loader-logger") /*id: 48587*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  function u(e, i) {
    let n = fileUtilsAndViewHelpers.formatFileSize(e);
    let r = platformDocUtils.P60.isAudioTypePreview(n);
    let s = platformDocUtils.P60.isVideoTypePreview(n);
    let a = platformDocUtils.P60.isImageTypePreview(n);
    return l({
      [docxViewConfigConstants.zoneTypeFileBlock]: true,
      "preview-type-video": s,
      "preview-type-audio": r,
      "preview-type-image": a,
      "preview-selected": i
    });
  }
  let p = (e, i) => {
    docxAnchorImageLoaderLogger.collectBlockInfoDev(i ? "fileBlockLoadStageError" : "fileBlockLoadStageLoad", docBlockTypeConstants.blockTypeConstants.FILE, {
      blockId: e
    });
    window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("filePreviewDidRender", {
      detail: {
        blockId: e
      }
    }));
  };
  require.d(exports, {
    getFilePreviewClassnames: function () {
      return u;
    },
    triggerFilePreviewEvent: function () {
      return p;
    }
  });
}