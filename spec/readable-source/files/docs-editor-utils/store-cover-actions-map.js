// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WJ' to 'toggleHelpPanel'
// - Renamed export 'rM' to 'setCoverList'
// - Renamed export 'PH' to 'setCoverSuperStatus'
// - Renamed export 'FI' to 'setPageToken'
// - Renamed export 'm0' to 'setStopFetchTaskId'
// - Renamed export 'V6' to 'toggleCommentPanel'
// - Renamed export 'gh' to 'uploadCoverCancel'
// - Renamed export 'FB' to 'uploadCoverFail'
// - Renamed export 'QK' to 'uploadCoverStart'
// - Renamed export 'XU' to 'setCoverInfo'
// - Renamed export 'MK' to 'setAiImageState'
// - Renamed export 'd5' to 'setDlpStatus'
// - Renamed export 'JD' to 'setIsFirstLineEmpty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 535604
         */
module.exports = function (module, exports, require) {
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  var panelToggleActions = require("panel-toggle-actions") /*id: 310864*/;
  var storeCoverActions = require("store-cover-actions") /*id: 365390*/;
  function c(e) {
    return {
      type: storeActionConstants.actionTypes.SetPageToken,
      payload: e
    };
  }
  function u(e) {
    return {
      type: storeActionConstants.actionTypes.SetIsFirstLineEmpty,
      payload: e
    };
  }
  require.d(exports, {
    toggleHelpPanel: function () {
      return panelToggleActions.toggleHelpPanel;
    },
    setCoverList: function () {
      return storeCoverActions.setCoverList;
    },
    setCoverSuperStatus: function () {
      return storeCoverActions.setCoverSuperStatus;
    },
    setPageToken: function () {
      return c;
    },
    setStopFetchTaskId: function () {
      return storeCoverActions.setStopFetchTaskId;
    },
    toggleCommentPanel: function () {
      return panelToggleActions.toggleCommentPanel;
    },
    uploadCoverCancel: function () {
      return storeCoverActions.uploadCoverCancel;
    },
    uploadCoverFail: function () {
      return storeCoverActions.uploadCoverFail;
    },
    uploadCoverStart: function () {
      return storeCoverActions.uploadCoverStart;
    },
    setCoverInfo: function () {
      return storeCoverActions.setCoverInfo;
    },
    setAiImageState: function () {
      return storeCoverActions.setAiImageState;
    },
    setDlpStatus: function () {
      return storeCoverActions.setDlpStatus;
    },
    setIsFirstLineEmpty: function () {
      return u;
    }
  });
}