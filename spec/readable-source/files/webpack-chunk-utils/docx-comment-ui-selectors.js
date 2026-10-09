// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$P' to 'isCommentNumbersShow'
// - Renamed export 'an' to 'isCommentPanelShown'
// - Renamed export 'fe' to 'isHelpPanelShown'
// - Renamed export 'uj' to 'isSuggestionSidebarShown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 133504
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function o(e) {
    var r;
    var o;
    return !browserEnvironmentDetectionUtils.browserDetector.isMobile && (o = e == null ? undefined : (r = e.docx) === null || r === undefined ? undefined : r.comment?.commentPanelShown) !== null && o !== undefined && o;
  }
  function a(e) {
    return e.docx.comment.isCommentNumbersShow;
  }
  function u(e) {
    var r;
    if ((r = e.docx) === null || r === undefined) {
      return undefined;
    } else {
      return r.comment?.helpPanelShown;
    }
  }
  function c(e) {
    var r;
    if ((r = e.docx) === null || r === undefined) {
      return undefined;
    } else {
      return r.comment?.suggestionSidebarShown;
    }
  }
  require.d(exports, {
    isCommentNumbersShow: function () {
      return a;
    },
    isCommentPanelShown: function () {
      return o;
    },
    isHelpPanelShown: function () {
      return u;
    },
    isSuggestionSidebarShown: function () {
      return c;
    }
  });
}