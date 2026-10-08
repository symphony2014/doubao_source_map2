// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'getIdentityHeaders'
// - Renamed export 'b4' to 'getAppIdentity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 604117
         */
module.exports = function (module, exports, require) {
  var appIdentityInfo = require("app-identity-info") /*id: 838408*/;
  function r() {
    return appIdentityInfo.getAppIdentity();
  }
  function a() {
    return function (e) {
      let t = {};
      for (let [i, n] of Object.entries(e)) {
        if (!n) {
          continue;
        }
        let e = "";
        for (let t of i) {
          if (t === t.toLowerCase()) {
            e += t;
          } else if (t === t.toUpperCase()) {
            e += `-${t.toLowerCase()}`;
          }
        }
        t[e = "x-lgw-" + e] = String(n);
      }
      return t;
    }(appIdentityInfo.getAppIdentity());
  }
  require.d(exports, {
    getIdentityHeaders: function () {
      return a;
    },
    getAppIdentity: function () {
      return r;
    }
  });
}