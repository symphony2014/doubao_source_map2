// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ej' to 'getCookieValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 985120
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let t = document.cookie.match(RegExp(`(?:^|;)\\s*${e}=([^;]+)`));
    return window.decodeURIComponent(t ? t[1] : "");
  }
  require.d(exports, {
    getCookieValue: function () {
      return n;
    }
  });
}