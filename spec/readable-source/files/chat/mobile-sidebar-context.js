// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XA' to 'useMobileSidebar'
// - Renamed export 'zb' to 'MobileSidebarCtx'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 526694
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.createContext(null);
  let a = function (e = {}) {
    let {
      optionalProvider: t = false
    } = e;
    let n = reactCoreLibraryReexport.useContext(o);
    if (!n) {
      if (t) {
        return {
          mobileSidebarVisible: false,
          setMobileSidebarVisible: emptyExportFunction.emptyFunction
        };
      }
      throw Error("Expect mobileContext");
    }
    return n;
  };
  require.d(exports, {
    useMobileSidebar: function () {
      return a;
    },
    MobileSidebarCtx: function () {
      return o;
    }
  });
}