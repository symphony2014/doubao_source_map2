// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bj' to 'isSandboxUrl'
// - Renamed export 'To' to 'extractUrlParam'
// - Renamed export 'kT' to 'isFlowFileUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 566301
         */
module.exports = function (module, exports, require) {
  function i(e) {
    try {
      let t = new URL(e).searchParams.get("url");
      if (t) {
        return t;
      }
    } catch (e) {}
    return "";
  }
  function r(e) {
    return !!e && e.startsWith("sslocal://flow/file_open");
  }
  function l(e) {
    return !!e && e.startsWith("sandbox://");
  }
  require.d(exports, {
    isSandboxUrl: function () {
      return l;
    },
    extractUrlParam: function () {
      return i;
    },
    isFlowFileUrl: function () {
      return r;
    }
  });
}