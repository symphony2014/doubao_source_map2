// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L$' to 'getFileStatusMessage'
// - Renamed export 'TX' to 'truncateFileName'
// - Renamed export 'mW' to 'validateFile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_file-uploader.f9224cfb.js
         * chunkId: 28747
         * moduleId: 285037
         */
module.exports = function (module, exports, require) {
  var docPreviewConstants = require("doc-preview-constants") /*id: 162554*/;
  function a(e) {
    return e <= 0 || e > docPreviewConstants.maxFileSizeLimit;
  }
  function n(e) {
    return e.length > docPreviewConstants.debounceDelayMs;
  }
  function l(e) {
    return docPreviewConstants.invalidCharRegex.test(e);
  }
  function s(e) {
    let {
      name: r,
      size: i
    } = e;
    return !n(r) && !l(r) && !a(i);
  }
  function d(e) {
    let r = 0;
    for (let i = 0; i < e.length; i++) {
      if (e.charCodeAt(i) > 127 || e.charCodeAt(i) === 94) {
        r += 2;
      } else {
        r += 1;
      }
    }
    if (r > 20) {
      return `${e.substring(0, 10)}...`;
    } else {
      return e;
    }
  }
  function u(e) {
    let r;
    let i = d(e.name);
    if (n(e.name)) {
      r = `\u{300C}${i}\u{300D} ${t("drive.file_name_valid")}`;
    } else if (l(e.name)) {
      r = `\u{300C}${i}\u{300D} ${t("CreationDoc_Alert_FileNameInvalid_Toast")}`;
    } else if (a(e.size)) {
      let e = Math.floor(docPreviewConstants.maxFileSizeLimit / 1024 / 1024 / 1024);
      r = `\u{300C}${i}\u{300D} ${t("CreationDoc_Drive_Upload_Failed_ZeroOrTooLarge", undefined, "", `${e}`)}`;
    }
    return r;
  }
  require.d(exports, {
    getFileStatusMessage: function () {
      return u;
    },
    truncateFileName: function () {
      return d;
    },
    validateFile: function () {
      return s;
    }
  });
}