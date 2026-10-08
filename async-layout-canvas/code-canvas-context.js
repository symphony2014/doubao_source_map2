// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'useCodeCanvasContext'
// - Renamed export 'r' to 'CodeCanvasProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 16996
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = reactCoreLibraryReexport.createContext(undefined);
  let o = r.Provider;
  function s() {
    let e = reactCoreLibraryReexport.useContext(r);
    if (!e) {
      throw Error("code canvas context is undefined");
    }
    return e;
  }
  require.d(exports, {
    useCodeCanvasContext: function () {
      return s;
    },
    CodeCanvasProvider: function () {
      return o;
    }
  });
}