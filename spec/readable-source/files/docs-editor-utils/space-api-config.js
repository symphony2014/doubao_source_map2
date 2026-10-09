// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SV' to 'getSamanthaRoute'
// - Renamed export 'US' to 'getSpaceApiBase'
// - Renamed export 'cA' to 'getSpaceApiFn'
// - Renamed export 'on' to 'getTemplatePath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 11507
         */
module.exports = function (module, exports, require) {
  let o = "/space/api";
  let i = "/space/api/platform/template";
  function l() {
    return "/samantha/otter";
  }
  function c() {
    return o;
  }
  require.d(exports, {
    getSamanthaRoute: function () {
      return l;
    },
    getSpaceApiBase: function () {
      return o;
    },
    getSpaceApiFn: function () {
      return c;
    },
    getTemplatePath: function () {
      return i;
    }
  });
}