// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'formatProdError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 330388
         */
module.exports = function (module, exports, require) {
  function r(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let e = 1; e < arguments.length; e += 1) {
      t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
  }
  require.d(exports, {
    formatProdError: function () {
      return r;
    }
  });
}