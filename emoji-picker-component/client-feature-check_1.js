// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getClientFeature'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 768765
         */
module.exports = function (module, exports, require) {
  function a(e, i) {
    var n;
    if (typeof (i == null ? undefined : i[e]) == "boolean") {
      return i[e];
    } else {
      return (n = window == null ? undefined : window.User) !== null && n !== undefined && !!n.clientFeatures && (window == null ? undefined : window.User.clientFeatures[e]);
    }
  }
  require.d(exports, {
    getClientFeature: function () {
      return a;
    }
  });
}