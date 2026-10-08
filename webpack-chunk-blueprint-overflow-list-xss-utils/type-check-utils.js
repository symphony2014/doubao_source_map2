// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G7' to 'isUndefined'
// - Renamed export 'HD' to 'isString'
// - Renamed export 'hj' to 'isNumber'
// - Renamed export 'mf' to 'isFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 916406
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return typeof e == "function";
  }
  function i(e) {
    return typeof e == "string";
  }
  function o(e) {
    return typeof e == "number";
  }
  function a(e) {
    return e === undefined;
  }
  require.d(exports, {
    isUndefined: function () {
      return a;
    },
    isString: function () {
      return i;
    },
    isNumber: function () {
      return o;
    },
    isFunction: function () {
      return r;
    }
  });
}