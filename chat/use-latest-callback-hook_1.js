// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useLatestCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 318475
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  exports.useLatestCallback = function (e) {
    let t = reactCoreLibraryReexport.useRef();
    t.current = reactCoreLibraryReexport.useMemo(() => e, [e]);
    return reactCoreLibraryReexport.useCallback(function () {
      var e = arguments.length;
      var n = Array(e);
      var i = 0;
      for (; i < e; i++) {
        n[i] = arguments[i];
      }
      let r = t.current;
      if (r == null) {
        return undefined;
      } else {
        return r(...n);
      }
    }, [t]);
  };
}