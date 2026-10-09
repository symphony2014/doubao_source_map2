// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'buildUploadParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 952830
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let u = e => {
    let {
      attachmentStates: t
    } = e;
    let i = isEmptyUtil.isEmpty(t) ? undefined : JSON.stringify(t.map(e => e.type === "image" ? "pic" : "pdf"));
    let u = isEmptyUtil.isEmpty(t) ? undefined : skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE;
    let s = isEmptyUtil.isEmpty(t) ? undefined : JSON.stringify(t.map(e => e.localKey || e.url || ""));
    let c = isEmptyUtil.isEmpty(t) ? "" : t.length === 1 ? "single" : "multi";
    let d = isEmptyUtil.isEmpty(t) ? undefined : safeJsonUtils.safeStringify(t.map(e => e.fileKey || e.url || ""));
    return {
      upload_type: i,
      upload_from: u,
      upload_collection_way: c,
      collection_name: d,
      upload_file_type: isEmptyUtil.isEmpty(t) ? undefined : safeJsonUtils.safeStringify(t.map(e => fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.fileKey || e.url || "")))),
      upload_token_length: "",
      collection_id: s,
      upload_file_size: String(t.reduce((e, t) => e + (t.size || 0), 0))
    };
  };
  require.d(exports, {
    buildUploadParams: function () {
      return u;
    }
  });
}