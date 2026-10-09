// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'safeJsonParse'
// - Renamed export 'h' to 'safeJsonStringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 39873
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return n || null;
    }
  }
  function i(e) {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "";
    }
  }
  require.d(exports, {
    safeJsonParse: function () {
      return o;
    },
    safeJsonStringify: function () {
      return i;
    }
  });
}