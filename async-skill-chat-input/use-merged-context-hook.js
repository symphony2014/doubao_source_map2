// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x$' to 'useMergedContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 203934
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  let o = reactCoreLibraryReexport.createContext(null);
  o.Provider;
  let l = reactCoreLibraryReexport.createContext({});
  l.Provider;
  let a = () => {
    let e = reactCoreLibraryReexport.useContext(o);
    let t = reactCoreLibraryReexport.useContext(l);
    return objectDefaultsUtil.defaults(t, e);
  };
  require.d(exports, {
    useMergedContext: function () {
      return a;
    }
  });
}