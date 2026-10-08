// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$M' to 'compositionEvents'
// - Renamed export 'J1' to 'editorSelectors'
// - Renamed export 'Qz' to 'progressSelector'
// - Renamed export 'cg' to 'inputDelayMs'
// - Renamed export 'xp' to 'inputEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 585572
         */
module.exports = function (module, exports, require) {
  let n = ["beforeinput", "input", "keydown", "keyup", "paste", "cut", "compositionstart", "compositionupdate", "compositionend"];
  let i = ["compositionstart", "compositionupdate", "compositionend"];
  let a = [".progress-block-wrapper"];
  let l = 200;
  let s = ["div.spreadsheet.embed-spreadsheet.faster.spread-loaded > div.cell-wrapper-element > div > div > div", "div.mindmap-block-container > div.mindnote-block.mindnote-block__selected > div.mindnote-block-container.minder-container > div.minder-editor-container > div.mm-editor"];
  require.d(exports, {
    compositionEvents: function () {
      return i;
    },
    editorSelectors: function () {
      return s;
    },
    progressSelector: function () {
      return a;
    },
    inputDelayMs: function () {
      return l;
    },
    inputEvents: function () {
      return n;
    }
  });
}