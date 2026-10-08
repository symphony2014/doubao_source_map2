// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AJ' to 'hasCoverType'
// - Renamed export 'FS' to 'getCoverList'
// - Renamed export 'S8' to 'getCurrentUser'
// - Renamed export 'ST' to 'getCoverInfo'
// - Renamed export 'an' to 'isCommentPanelShown'
// - Renamed export 'cG' to 'getAiImageRequestState'
// - Renamed export 'eK' to 'getIsUploading'
// - Renamed export 'el' to 'getCoverSuperStatus'
// - Renamed export 'fe' to 'isHelpPanelShown'
// - Renamed export 'ms' to 'getDlpStatus'
// - Renamed export 'sT' to 'getIsFirstLineEmpty'
// - Renamed export 'uj' to 'isSuggestionSidebarShown'
// - Renamed export 'y' to 'getPageToken'
// - Renamed export 'yj' to 'getStopTaskId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 254026
         */
module.exports = function (module, exports, require) {
  var docPermissionStatusSelectors = require("doc-permission-status-selectors") /*id: 16982*/;
  var docxCommentUiSelectors = require("docx-comment-ui-selectors") /*id: 133504*/;
  var docxCoverSelectors = require("docx-cover-selectors") /*id: 784702*/;
  function c(e) {
    return e.appState.currentUser;
  }
  function u(e) {
    return e.docx.root.pageToken;
  }
  function a(e) {
    return e.docx.root.isFirstLineEmpty;
  }
  docPermissionStatusSelectors.createPermissionSelector("userAction");
  require.d(exports, {
    hasCoverType: function () {
      return docxCoverSelectors.hasCoverType;
    },
    getCoverList: function () {
      return docxCoverSelectors.getCoverList;
    },
    getCurrentUser: function () {
      return c;
    },
    getCoverInfo: function () {
      return docxCoverSelectors.getCoverInfo;
    },
    isCommentPanelShown: function () {
      return docxCommentUiSelectors.isCommentPanelShown;
    },
    getAiImageRequestState: function () {
      return docxCoverSelectors.getAiImageRequestState;
    },
    getIsUploading: function () {
      return docxCoverSelectors.getIsUploading;
    },
    getCoverSuperStatus: function () {
      return docxCoverSelectors.getCoverSuperStatus;
    },
    isHelpPanelShown: function () {
      return docxCommentUiSelectors.isHelpPanelShown;
    },
    getDlpStatus: function () {
      return docxCoverSelectors.getDlpStatus;
    },
    getIsFirstLineEmpty: function () {
      return a;
    },
    isSuggestionSidebarShown: function () {
      return docxCommentUiSelectors.isSuggestionSidebarShown;
    },
    getPageToken: function () {
      return u;
    },
    getStopTaskId: function () {
      return docxCoverSelectors.getStopTaskId;
    }
  });
}