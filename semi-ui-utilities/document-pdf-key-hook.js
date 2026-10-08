// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'useDocumentPdfKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 427678
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  let a = e => {
    let {
      fileKey: t,
      fileName: n
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(n || "")) === "Document") {
        getDocumentPdfKey.getDocumentPdfKey(t).then(s);
      }
    }, [t]);
    return [a];
  };
  require.d(exports, {
    useDocumentPdfKey: function () {
      return a;
    }
  });
}