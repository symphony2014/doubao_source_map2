// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fg' to 'useTheme'
// - Renamed export 'f6' to 'ThemeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 274284
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = reactCoreLibraryReexport.createContext("light");
  function o(e) {
    var t = e.children;
    var n = e.mode;
    return reactCoreLibraryReexport.createElement(i.Provider, {
      value: n === undefined ? "light" : n
    }, t);
  }
  function s() {
    return reactCoreLibraryReexport.useContext(i);
  }
  require.d(exports, {
    useTheme: function () {
      return s;
    },
    ThemeProvider: function () {
      return o;
    }
  });
}