// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useRefValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 45405
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = e => {
    let t = reactCoreLibraryReexport.useRef(e);
    t.current = t.current || e;
    return t.current;
  };
  require.d(exports, {
    useRefValue: function () {
      return r;
    }
  });
}