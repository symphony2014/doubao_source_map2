// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useMemoizedRefSetter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 458675
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function a(e, n, t = {}) {
    var a = t.skipNullish;
    var u = a !== undefined && a;
    var c = reactCoreLibraryReexport.useRef(e);
    var l = reactRefEffectUtils.useUpdatedRef(n);
    return reactCoreLibraryReexport.useMemo(function () {
      var e = {};
      Object.defineProperty(e, "current", {
        get: function () {
          return c.current;
        },
        set: function (e) {
          if (e !== c.current && (!u || u && domElementWindowUtils.isNotNullOrUndefined(e))) {
            var n;
            if ((n = l.current) !== null && n !== undefined) {
              n.call(l, e);
            }
            c.current = e;
          }
        }
      });
      return e;
    }, [l, u]);
  }
  require.d(exports, {
    useMemoizedRefSetter: function () {
      return a;
    }
  });
}