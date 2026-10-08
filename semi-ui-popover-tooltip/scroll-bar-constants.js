// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Av' to 'scrollBarSizeVar'
// - Renamed export 'pF' to 'scrollBarPosition'
// - Renamed export 'xv' to 'scrollBarsHidden'
// - Renamed export 'zi' to 'widthBeforeScroll'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 314373
         */
module.exports = function (module, exports, require) {
  var r = "right-scroll-bar-position";
  var o = "width-before-scroll-bar";
  var i = "with-scroll-bars-hidden";
  var a = "--removed-body-scroll-bar-size";
  require.d(exports, {
    scrollBarSizeVar: function () {
      return a;
    },
    scrollBarPosition: function () {
      return r;
    },
    scrollBarsHidden: function () {
      return i;
    },
    widthBeforeScroll: function () {
      return o;
    }
  });
}