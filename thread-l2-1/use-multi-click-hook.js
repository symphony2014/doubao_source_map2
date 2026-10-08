// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useMultiClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 398816
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let r = e => {
    let {
      clickTimes: t = 5,
      autoResetIntervalInMs: n = 1000,
      onClick: r,
      onAutoResetBeforeTrigger: o,
      onTrigger: a
    } = e;
    let s = reactCoreLibraryReexport.useRef(0);
    let c = reactCoreLibraryReexport.useRef(null);
    let d = useLatestCallbackHook_1.useLatestCallback(r);
    let u = useLatestCallbackHook_1.useLatestCallback(o);
    let p = useLatestCallbackHook_1.useLatestCallback(a);
    let m = reactCoreLibraryReexport.useCallback(() => {
      s.current = 0;
    }, []);
    let v = reactCoreLibraryReexport.useCallback(() => {
      if (c.current) {
        clearTimeout(c.current);
      }
    }, []);
    let f = reactCoreLibraryReexport.useCallback(() => {
      v();
      c.current = window.setTimeout(() => {
        if (u != null) {
          u(s.current);
        }
        m();
        c.current = null;
      }, n);
    }, [n, v, u, m]);
    return {
      handleClick: reactCoreLibraryReexport.useCallback(() => {
        let e = s.current + 1;
        if (d != null) {
          d(e);
        }
        if (e >= t) {
          if (p != null) {
            p();
          }
          v();
          m();
          return 0;
        } else {
          s.current = e;
          f();
          return e;
        }
      }, [t, d, p, m, f])
    };
  };
  require.d(exports, {
    useMultiClick: function () {
      return r;
    }
  });
}