// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cp' to 'pasteRecordAccepted'
// - Renamed export 'eB' to 'textualBlockType'
// - Renamed export 'jc' to 'pasteRecordApply'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 780742
         */
module.exports = function (module, exports, require) {
  let r = "onPasteRecordAfterApply";
  let o = "onPasteRecordAfterAccepted";
  let l = "textual_block";
  require.d(exports, {
    pasteRecordAccepted: function () {
      return o;
    },
    textualBlockType: function () {
      return l;
    },
    pasteRecordApply: function () {
      return r;
    }
  });
}