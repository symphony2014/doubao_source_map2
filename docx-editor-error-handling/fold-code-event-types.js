// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WL' to 'foldCodeViewChange'
// - Renamed export 'go' to 'foldCodeBufChange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 525302
         */
module.exports = function (module, exports, require) {
  let n = "FOLD_CODE_VIEW_CHANGE";
  let o = "FOLD_CODE_BUFFER_CHANGE";
  require.d(exports, {
    foldCodeViewChange: function () {
      return n;
    },
    foldCodeBufChange: function () {
      return o;
    }
  });
}