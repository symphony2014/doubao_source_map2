// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'useToggle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 952335
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i() {
    var e = reactCoreLibraryReexport.useState(true);
    var t = iterableToArrayUtil_1_1.iterableToArray(e, 2)[1];
    return reactCoreLibraryReexport.useCallback(function () {
      return t(function (e) {
        return !e;
      });
    }, []);
  }
  require.d(exports, {
    useToggle: function () {
      return i;
    }
  });
}