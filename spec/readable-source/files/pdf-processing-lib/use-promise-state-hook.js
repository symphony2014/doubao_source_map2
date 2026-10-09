// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'usePromiseState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 456252
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function n(t, e) {
    switch (e.type) {
      case "RESOLVE":
        return {
          value: e.value,
          error: undefined
        };
      case "REJECT":
        return {
          value: false,
          error: e.error
        };
      case "RESET":
        return {
          value: undefined,
          error: undefined
        };
      default:
        return t;
    }
  }
  function o() {
    return reactCoreLibraryReexport.useReducer(n, {
      value: undefined,
      error: undefined
    });
  }
  require.d(exports, {
    usePromiseState: function () {
      return o;
    }
  });
}