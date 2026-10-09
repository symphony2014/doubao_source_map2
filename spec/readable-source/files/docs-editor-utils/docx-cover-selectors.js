// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AJ' to 'hasCoverType'
// - Renamed export 'FS' to 'getCoverList'
// - Renamed export 'ST' to 'getCoverInfo'
// - Renamed export 'cG' to 'getAiImageRequestState'
// - Renamed export 'eK' to 'getIsUploading'
// - Renamed export 'el' to 'getCoverSuperStatus'
// - Renamed export 'ms' to 'getDlpStatus'
// - Renamed export 'yj' to 'getStopTaskId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 784702
         */
module.exports = function (module, exports, require) {
  function o(e) {
    return e.docx.cover.coverInfo;
  }
  function i(e) {
    let n = e.docx.cover.coverInfo;
    return n && !!n.type;
  }
  function l(e) {
    return e.docx.cover.isUploading;
  }
  function c(e) {
    return e.docx.cover.coverList;
  }
  function u(e) {
    return e.docx.cover.coverSuperStatus;
  }
  function a(e) {
    return e.docx.cover.aiImageRequestState;
  }
  function s(e) {
    return e.docx.cover.stopTaskId;
  }
  function d(e) {
    return e.docx.cover.dlpStatus;
  }
  require.d(exports, {
    hasCoverType: function () {
      return i;
    },
    getCoverList: function () {
      return c;
    },
    getCoverInfo: function () {
      return o;
    },
    getAiImageRequestState: function () {
      return a;
    },
    getIsUploading: function () {
      return l;
    },
    getCoverSuperStatus: function () {
      return u;
    },
    getDlpStatus: function () {
      return d;
    },
    getStopTaskId: function () {
      return s;
    }
  });
}