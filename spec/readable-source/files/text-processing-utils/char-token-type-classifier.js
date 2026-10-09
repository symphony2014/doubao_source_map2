// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'getCharTokenType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 967710
         */
module.exports = function (module, exports, require) {
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  function i(e) {
    if (e === null || charClassificationUtils.isWhitespaceOrNeg(e) || charClassificationUtils.isWhitespace(e)) {
      return 1;
    } else if (charClassificationUtils.isPunctuation(e)) {
      return 2;
    } else {
      return undefined;
    }
  }
  require.d(exports, {
    getCharTokenType: function () {
      return i;
    }
  });
}