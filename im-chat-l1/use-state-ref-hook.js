// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useStateRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 739141
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  let o = e => {
    let t = reactCoreLibraryReexport.useRef(e);
    let [n, o] = reactCoreLibraryReexport.useState(e);
    return [n, reactCoreLibraryReexport.useCallback(e => {
      t.current = isFunctionUtil_1.isFunction(e) ? e(t.current) : e;
      o(t.current);
    }, []), reactCoreLibraryReexport.useCallback(() => t.current, [])];
  };
  require.d(exports, {
    useStateRef: function () {
      return o;
    }
  });
}