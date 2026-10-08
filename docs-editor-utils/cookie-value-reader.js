// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ej' to 'getCookieValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 167512
         */
module.exports = function (module, exports, require) {
  function o(e) {
    return document.cookie.split("; ").reduce((e, n) => {
      let [r, o] = n.split("=");
      if (r && o !== undefined) {
        e[r] = o;
      }
      return e;
    }, {})[e];
  }
  require.d(exports, {
    getCookieValue: function () {
      return o;
    }
  });
}