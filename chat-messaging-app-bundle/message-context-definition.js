// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UD' to 'useMessage'
// - Renamed export 'x1' to 'MessageProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 786528
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = reactCoreLibraryReexport.createContext(null);
  let r = l.Provider;
  let o = () => {
    let e = reactCoreLibraryReexport.useContext(l);
    if (!e) {
      throw Error("useMessage must be used within a MessageProvider");
    }
    return e.message;
  };
  require.d(exports, {
    useMessage: function () {
      return o;
    },
    MessageProvider: function () {
      return r;
    }
  });
}