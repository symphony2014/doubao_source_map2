// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jU' to 'isBrowser'
// - Renamed export 'tq' to 'isTouchOrNonBrowser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 642709
         */
module.exports = function (module, exports, require) {
  var i = typeof document != "undefined" && document.toString().indexOf("HTMLDocument") !== -1;
  var r = i && typeof window != "undefined" && "ontouchstart" in window;
  var o = !i || !!r;
  require.d(exports, {
    isBrowser: function () {
      return i;
    },
    isTouchOrNonBrowser: function () {
      return o;
    }
  });
}