// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useChangedRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 284850
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = (e, t) => {
    let n = reactCoreLibraryReexport.useRef(e);
    if (!t(e, n.current)) {
      n.current = e;
    }
    return n.current;
  };
  require.d(exports, {
    useChangedRef: function () {
      return r;
    }
  });
}