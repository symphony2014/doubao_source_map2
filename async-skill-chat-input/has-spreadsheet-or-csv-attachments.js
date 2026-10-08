// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'hasSpreadsheetOrCsvAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 836052
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let l = e => {
    let {
      attachments: t,
      refContents: n
    } = e;
    return (t != null && !!t.length || n != null && !!n.length) && (!!(t == null ? undefined : t.length) && !!t.every(e => {
      if (e.type !== "file") {
        return false;
      }
      let l = getFileExtension.getFileExtension(e.fileName ?? objectPathGetDefault.getObjectPathDefault(e.file, "name") ?? "");
      return fileTypeDetectionUtils.isSpreadsheetFile(l) || fileTypeDetectionUtils.isCsvFile(l);
    }) || !!(n == null ? undefined : n.length) && !!n.every(e => {
      if (e.type !== "attachment") {
        return false;
      }
      let t = getFileExtension.getFileExtension(e.fileName);
      return fileTypeDetectionUtils.isSpreadsheetFile(t) || fileTypeDetectionUtils.isCsvFile(t);
    }));
  };
  require.d(exports, {
    hasSpreadsheetOrCsvAttachments: function () {
      return l;
    }
  });
}