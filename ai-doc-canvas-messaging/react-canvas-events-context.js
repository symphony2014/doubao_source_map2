// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IZ' to 'useCanvasEvents'
// - Renamed export 'JM' to 'useCanvasEventsCtx'
// - Renamed export 'bo' to 'CanvasEventsContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59341.c357291c.js
         * chunkId: 59341
         * moduleId: 578669
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let n = reactCoreLibraryReexport.createContext(null);
  let o = () => {
    let e = reactCoreLibraryReexport.useContext(n);
    if (!e) {
      throw Error("CanvasEvents should wrapper outside when useCanvasEvents");
    }
    return e;
  };
  let r = () => reactCoreLibraryReexport.useContext(n);
  require.d(exports, {
    useCanvasEvents: function () {
      return o;
    },
    useCanvasEventsCtx: function () {
      return r;
    },
    CanvasEventsContext: function () {
      return n;
    }
  });
}