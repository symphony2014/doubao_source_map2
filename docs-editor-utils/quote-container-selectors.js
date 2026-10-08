// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'enterQuoteContainer'
// - Renamed export 'x' to 'quoteContainerMulti'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 604018
         */
module.exports = function (module, exports, require) {
  let o = "enterQuoteContainerWithMultipleSelection";
  let i = "enterQuoteContainer";
  require.d(exports, {
    enterQuoteContainer: function () {
      return i;
    },
    quoteContainerMulti: function () {
      return o;
    }
  });
}