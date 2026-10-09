// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'getCaptionText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 811941
         */
module.exports = function (module, exports, require) {
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var docxCaptionTextCheck_1 = require("docx-caption-text-check_1") /*id: 289941*/;
  function l(e) {
    if (docxCaptionTextCheck_1.isCaptionTextEmpty(e)) {
      return "";
    } else {
      return e.text.initialAttributedTexts.text[zeroConstantModule_1.versionValue];
    }
  }
  require.d(exports, {
    getCaptionText: function () {
      return l;
    }
  });
}