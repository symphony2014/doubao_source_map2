// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W8' to 'isEmptyChildren'
// - Renamed export 'kK' to 'isValidElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 105208
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(e) {
    return reactCoreLibraryReexport.isValidElement(e);
  }
  function o(e) {
    return reactCoreLibraryReexport.Children.count(e) === 0;
  }
  require.d(exports, {
    isEmptyChildren: function () {
      return o;
    },
    isValidElement: function () {
      return r;
    }
  });
}