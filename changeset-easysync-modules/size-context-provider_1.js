// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'SizeContext'
// - Renamed export 'x' to 'SizeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 686769
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var o = reactContextSelector.createContext(undefined);
  function s(t) {
    var e = t.size;
    var n = t.children;
    var s = reactContextSelector.useContextValue(o);
    return reactCoreLibraryReexport.createElement(o.Provider, {
      value: e ?? s
    }, n);
  }
  require.d(exports, {
    SizeContext: function () {
      return o;
    },
    SizeProvider: function () {
      return s;
    }
  });
}