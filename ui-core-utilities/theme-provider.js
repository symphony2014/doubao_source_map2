// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bW' to 'ThemeProvider'
// - Renamed export 'nQ' to 'useTheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85276.c29b99ac.js
         * chunkId: 85276
         * moduleId: 420169
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = reactCoreLibraryReexport.createContext("light");
  let o = ({
    children: e,
    mode: t = "light"
  }) => reactCoreLibraryReexport.createElement(i.Provider, {
    value: t
  }, e);
  let u = () => reactCoreLibraryReexport.useContext(i);
  require.d(exports, {
    ThemeProvider: function () {
      return o;
    },
    useTheme: function () {
      return u;
    }
  });
}