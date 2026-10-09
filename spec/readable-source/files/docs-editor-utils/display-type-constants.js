// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'displayInlineBlock'
// - Renamed export 'T' to 'typeEquation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 897087
         */
module.exports = function (module, exports, require) {
  let o = "inlineblock";
  let i = "equation";
  require.d(exports, {
    displayInlineBlock: function () {
      return o;
    },
    typeEquation: function () {
      return i;
    }
  });
}