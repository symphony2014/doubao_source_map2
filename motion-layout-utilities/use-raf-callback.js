// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'useRafCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 670341
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseStableRef = require("react-use-stable-ref") /*id: 842231*/;
  var isBrowserEnv_2 = require("is-browser-env_2") /*id: 235295*/;
  function o(t) {
    let e = reactUseStableRef.useStableRef(t);
    let i = reactCoreLibraryReexport.useRef(0);
    let o = reactCoreLibraryReexport.useCallback(() => {
      if (isBrowserEnv_2.isBrowser && i.current) {
        cancelAnimationFrame(i.current);
        i.current = 0;
      }
    }, []);
    (function (t) {
      let e = reactUseStableRef.useStableRef(t);
      reactCoreLibraryReexport.useEffect(() => () => {
        e.current();
      }, []);
    })(o);
    return [reactCoreLibraryReexport.useMemo(() => {
      let n = function () {
        var t = arguments.length;
        var n = Array(t);
        var r = 0;
        for (; r < t; r++) {
          n[r] = arguments[r];
        }
        if (isBrowserEnv_2.isBrowser) {
          o();
          i.current = requestAnimationFrame(() => {
            e.current(...n);
            i.current = 0;
          });
        }
      };
      Object.defineProperties(n, {
        length: {
          value: t.length
        },
        name: {
          value: `${t.name || "anonymous"}__raf`
        }
      });
      return n;
    }, []), o];
  }
  require.d(exports, {
    useRafCallback: function () {
      return o;
    }
  });
}