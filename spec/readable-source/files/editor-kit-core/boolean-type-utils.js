// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ar' to 'getFalseFn'
// - Renamed export 'cI' to 'getTrueFn'
// - Renamed export 'mf' to 'isFunctionCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 488634
         */
module.exports = function (module, exports, require) {
  function n() {
    return true;
  }
  function o() {
    return false;
  }
  function i(t) {
    return typeof t == "function" && t.nodeType !== "number";
  }
  require.d(exports, {
    getFalseFn: function () {
      return o;
    },
    getTrueFn: function () {
      return n;
    },
    isFunctionCheck: function () {
      return i;
    }
  });
}