// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'getUploadAnalytics'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 324806
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let o = e => {
    let {
      attachmentStates: t
    } = e;
    let n = isEmptyUtil.isEmpty(t) ? undefined : JSON.stringify(t.map(e => e.type === "image" ? "pic" : "pdf"));
    let o = isEmptyUtil.isEmpty(t) ? undefined : skillConstantsEnum.UploadSource.UPLOAD_FROM_CI_UPLOAD;
    let s = t.reduce((e, t) => e + (t.size || 0), 0);
    let u = isEmptyUtil.isEmpty(t) ? "" : t.length === 1 ? "single" : "multi";
    let d = isEmptyUtil.isEmpty(t) ? undefined : safeJsonUtils.safeStringify(t.map(e => e.fileKey || e.url || ""));
    return {
      uploadType: n,
      uploadFrom: o,
      uploadFileSize: s,
      uploadCollectionWay: u,
      collectionName: d,
      uploadFileType: isEmptyUtil.isEmpty(t) ? undefined : safeJsonUtils.safeStringify(t.map(e => getFileExtension.getFileExtension(e.fileKey || e.url || ""))),
      collectionId: isEmptyUtil.isEmpty(t) ? undefined : JSON.stringify(t.map(e => e.localKey || e.url || ""))
    };
  };
  require.d(exports, {
    getUploadAnalytics: function () {
      return o;
    }
  });
}