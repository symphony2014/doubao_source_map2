// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getClientFeature'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 319225
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    var r;
    if (typeof (t == null ? undefined : t[e]) == "boolean") {
      return t[e];
    } else {
      return (r = window == null ? undefined : window.User) !== null && r !== undefined && !!r.clientFeatures && (window == null ? undefined : window.User.clientFeatures[e]);
    }
  }
  require.d(exports, {
    getClientFeature: function () {
      return n;
    }
  });
}