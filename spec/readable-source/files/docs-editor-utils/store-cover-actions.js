// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FB' to 'uploadCoverFail'
// - Renamed export 'MK' to 'setAiImageState'
// - Renamed export 'PH' to 'setCoverSuperStatus'
// - Renamed export 'QK' to 'uploadCoverStart'
// - Renamed export 'XU' to 'setCoverInfo'
// - Renamed export 'd5' to 'setDlpStatus'
// - Renamed export 'gh' to 'uploadCoverCancel'
// - Renamed export 'm0' to 'setStopFetchTaskId'
// - Renamed export 'rM' to 'setCoverList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 365390
         */
module.exports = function (module, exports, require) {
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function i(e) {
    return {
      type: storeActionConstants.actionTypes.SetCoverInfo,
      payload: e || null
    };
  }
  function l() {
    return {
      type: storeActionConstants.actionTypes.UploadCoverStart
    };
  }
  function c() {
    return {
      type: storeActionConstants.actionTypes.UploadCoverFail
    };
  }
  function u() {
    return {
      type: storeActionConstants.actionTypes.UploadCoverCancel
    };
  }
  function a(e) {
    return {
      type: storeActionConstants.actionTypes.SetCoverList,
      payload: e
    };
  }
  function s(e) {
    return {
      type: storeActionConstants.actionTypes.SetCoverSuperStatus,
      payload: e
    };
  }
  function d(e) {
    return {
      type: storeActionConstants.actionTypes.SetAIImageRequestState,
      payload: e
    };
  }
  function f(e) {
    return {
      type: storeActionConstants.actionTypes.SetStopFetchCoverTaskId,
      payload: e
    };
  }
  function h(e) {
    return {
      type: storeActionConstants.actionTypes.SET_DLP_STATUS,
      payload: e
    };
  }
  require.d(exports, {
    uploadCoverFail: function () {
      return c;
    },
    setAiImageState: function () {
      return d;
    },
    setCoverSuperStatus: function () {
      return s;
    },
    uploadCoverStart: function () {
      return l;
    },
    setCoverInfo: function () {
      return i;
    },
    setDlpStatus: function () {
      return h;
    },
    uploadCoverCancel: function () {
      return u;
    },
    setStopFetchTaskId: function () {
      return f;
    },
    setCoverList: function () {
      return a;
    }
  });
}