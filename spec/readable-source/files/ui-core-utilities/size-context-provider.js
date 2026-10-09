// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'SizeContext'
// - Renamed export 'x' to 'SizeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 415555
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var a = reactContextSelector.createContext(undefined);
  function l(e) {
    var n = e.size;
    var r = e.children;
    var l = reactContextSelector.useContextValue(a);
    return reactCoreLibraryReexport.createElement(a.Provider, {
      value: n ?? l
    }, r);
  }
  require.d(exports, {
    SizeContext: function () {
      return a;
    },
    SizeProvider: function () {
      return l;
    }
  });
}