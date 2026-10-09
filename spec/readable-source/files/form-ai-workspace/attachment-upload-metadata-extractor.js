// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'extractUploadMetadata'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 826432
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let s = e => {
    let {
      attachmentStates: t
    } = e;
    let n = isEmptyUtil.isEmpty(t) ? undefined : JSON.stringify(t.map(e => e.type === "image" ? "pic" : "pdf"));
    let s = isEmptyUtil.isEmpty(t) ? undefined : skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE;
    let d = isEmptyUtil.isEmpty(t) ? undefined : JSON.stringify(t.map(e => e.localKey || e.url || ""));
    let c = isEmptyUtil.isEmpty(t) ? "" : t.length === 1 ? "single" : "multi";
    let u = isEmptyUtil.isEmpty(t) ? undefined : safeJsonUtils.safeStringify(t.map(e => e.fileKey || e.url || ""));
    return {
      upload_type: n,
      upload_from: s,
      upload_collection_way: c,
      collection_name: u,
      upload_file_type: isEmptyUtil.isEmpty(t) ? undefined : safeJsonUtils.safeStringify(t.map(e => fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.fileKey || e.url || "")))),
      upload_token_length: "",
      collection_id: d,
      upload_file_size: String(t.reduce((e, t) => e + (t.size || 0), 0))
    };
  };
  require.d(exports, {
    extractUploadMetadata: function () {
      return s;
    }
  });
}