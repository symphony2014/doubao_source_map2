// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useMyContext'
// - Renamed export 'g' to 'MyContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 884866
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = reactCoreLibraryReexport.createContext(null);
  let l = () => reactCoreLibraryReexport.useContext(o);
  require.d(exports, {
    useMyContext: function () {
      return l;
    },
    MyContext: function () {
      return o;
    }
  });
}