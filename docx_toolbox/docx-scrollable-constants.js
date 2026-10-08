// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Aw' to 'scrollEvents'
// - Renamed export 'M5' to 'scrollableItem'
// - Renamed export 'Oy' to 'scrollableContainer'
// - Renamed export 'Z5' to 'scrollableWrapper'
// - Renamed export 'iF' to 'scrollProviderName'
// - Renamed export 'kg' to 'scrollConstant'
// - Renamed export 'xU' to 'scrollRectReady'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 451992
         */
module.exports = function (module, exports, require) {
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  (o = {}).ON_SCROLL = "ON_SCROLL";
  let l = o;
  let a = 16;
  let c = "scrollable-wrapper";
  let u = "scrollable-container";
  let s = "scrollable-item";
  let d = "scrollable-rect-ready";
  let h = docxEditorCore.getProviderName("scrollable");
  require.d(exports, {
    scrollEvents: function () {
      return l;
    },
    scrollableItem: function () {
      return s;
    },
    scrollableContainer: function () {
      return u;
    },
    scrollableWrapper: function () {
      return c;
    },
    scrollProviderName: function () {
      return h;
    },
    scrollConstant: function () {
      return a;
    },
    scrollRectReady: function () {
      return d;
    }
  });
}