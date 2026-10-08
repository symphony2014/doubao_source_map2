// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XR' to 'joinTruthyStrings'
// - Renamed export 'mh' to 'getFileListSummary'
// - Renamed export 'yB' to 'getFileDisplayName'
// - Renamed export 'ys' to 'getFileLinkOrName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-ref-content-ui.2012527d.js
         * chunkId: 14180
         * moduleId: 859718
         */
module.exports = function (module, exports, require) {
  var fileTypeCheckers = require("file-type-checkers") /*id: 412342*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let u = (e, n) => {
    if (fileTypeCheckers.isLinkType(e)) {
      return e.link;
    }
    if (fileTypeCheckers.isFileType(e)) {
      if (n && fileTypeDetectionUtils.isImageFile(s(e))) {
        return "";
      } else {
        return e.fileName;
      }
    }
    if (fileTypeCheckers.isTextType(e)) {
      return e.text;
    }
    if (fileTypeCheckers.isLarkDocType(e)) {
      return e.larkDoc?.title || "";
    }
    return "";
  };
  let s = e => fileTypeCheckers.isLinkType(e) ? getFileExtension.getFileExtension(e.link) : fileTypeCheckers.isFileType(e) ? getFileExtension.getFileExtension(e.fileName) : "";
  let o = (e, n) => e.length === 0 ? "No file." : e.length === 1 ? e[0] : n("file_ref_all_files", {
    postProcess: "sprintf",
    sprintf: [e[0], `${e.length - 1}`]
  });
  let f = e => e.filter(e => !!e).join(", ");
  require.d(exports, {
    joinTruthyStrings: function () {
      return f;
    },
    getFileListSummary: function () {
      return o;
    },
    getFileDisplayName: function () {
      return u;
    },
    getFileLinkOrName: function () {
      return s;
    }
  });
}