// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'ThemeConfigProvider'
// - Renamed export 'w' to 'useThemeConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42489.04b85baf.js
         * chunkId: 42489
         * moduleId: 82938
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var memoizedContextProvider = require("memoized-context-provider") /*id: 143858*/;
  let o = reactCoreLibraryReexport.createContext({
    theme: "default",
    mode: "light",
    catchSlotsError: true
  });
  let a = memoizedContextProvider.createMemoProvider(o);
  let s = () => reactCoreLibraryReexport.useContext(o);
  require.d(exports, {
    ThemeConfigProvider: function () {
      return a;
    },
    useThemeConfig: function () {
      return s;
    }
  });
}