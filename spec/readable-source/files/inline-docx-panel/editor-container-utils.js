// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Br' to 'getEditorWidth'
// - Renamed export 'GF' to 'checkEmptyEditor'
// - Renamed export 'yb' to 'getEditorContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 874690
         */
module.exports = function (module, exports, require) {
  var checkSingleEmptyTextBlock = require("check-single-empty-text-block") /*id: 963907*/;
  function r() {
    return document.querySelector(".editor-container");
  }
  function o() {
    let e = r();
    let {
      width: t,
      paddingLeft: n,
      paddingRight: i
    } = window.getComputedStyle(e);
    return parseFloat(t) - parseFloat(n) - parseFloat(i);
  }
  let s = e => e.getBlockModelByBlockId(e.rootBlockId).zoneState.isEmpty() && checkSingleEmptyTextBlock.checkSingleEmptyTextBlock(e);
  require.d(exports, {
    getEditorWidth: function () {
      return o;
    },
    checkEmptyEditor: function () {
      return s;
    },
    getEditorContainer: function () {
      return r;
    }
  });
}