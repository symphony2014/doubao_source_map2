// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'useMouseHover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 665747
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    var t = reactCoreLibraryReexport.useState(false);
    var n = iterableToArrayUtil_1_1.iterableToArray(t, 2);
    var i = n[0];
    var u = n[1];
    var a = e || {};
    var c = a.onMouseEnter;
    var l = a.onMouseLeave;
    return {
      isMouseOver: i,
      handleMouseEnter: reactCoreLibraryReexport.useCallback(function (e) {
        u(true);
        if (c != null) {
          c(e);
        }
      }, [c]),
      handleMouseLeave: reactCoreLibraryReexport.useCallback(function (e) {
        u(false);
        if (l != null) {
          l(e);
        }
      }, [l])
    };
  }
  require.d(exports, {
    useMouseHover: function () {
      return i;
    }
  });
}