// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 108678
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = typeof Object.is == "function" ? Object.is : function (e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t;
  };
  var o = reactCoreLibraryReexport.useState;
  var a = reactCoreLibraryReexport.useEffect;
  var s = reactCoreLibraryReexport.useLayoutEffect;
  var u = reactCoreLibraryReexport.useDebugValue;
  function c(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !i(e, n);
    } catch (e) {
      return true;
    }
  }
  var l = typeof window == "undefined" || window.document === undefined || window.document.createElement === undefined ? function (e, t) {
    return t();
  } : function (e, t) {
    var n = t();
    var r = o({
      inst: {
        value: n,
        getSnapshot: t
      }
    });
    var i = r[0].inst;
    var l = r[1];
    s(function () {
      i.value = n;
      i.getSnapshot = t;
      if (c(i)) {
        l({
          inst: i
        });
      }
    }, [e, n, t]);
    a(function () {
      if (c(i)) {
        l({
          inst: i
        });
      }
      return e(function () {
        if (c(i)) {
          l({
            inst: i
          });
        }
      });
    }, [e]);
    u(n);
    return n;
  };
  exports.useSyncExternalStore = reactCoreLibraryReexport.useSyncExternalStore !== undefined ? reactCoreLibraryReexport.useSyncExternalStore : l;
}