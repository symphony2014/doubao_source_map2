// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'getAuthToken'
// - Renamed export 'j' to 'getAuthInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 489098
         */
module.exports = function (module, exports, require) {
  function o() {
    return new URLSearchParams(location.search).get("auth_token");
  }
  function i() {
    let e = o();
    if (e) {
      return {
        auth_token: e,
        auth_type: 1
      };
    }
  }
  require.d(exports, {
    getAuthToken: function () {
      return o;
    },
    getAuthInfo: function () {
      return i;
    }
  });
}