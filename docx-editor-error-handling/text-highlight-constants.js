// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'HighlightActions'
// - Renamed export 'p' to 'DocxFeatureKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 184403
         */
module.exports = function (module, exports, require) {
  let n = {
    DRAW: "LOCAL_TEXT_HIGHLIGHT:DRAW",
    CLEAR: "LOCAL_TEXT_HIGHLIGHT:CLEAR"
  };
  let o = {
    DOCX_FINDRE_PLACE: "DocxFindReplace"
  };
  require.d(exports, {
    HighlightActions: function () {
      return n;
    },
    DocxFeatureKeys: function () {
      return o;
    }
  });
}