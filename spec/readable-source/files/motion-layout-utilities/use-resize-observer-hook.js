// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 754067
         */
module.exports = function (module, exports, require) {
  let n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseStableRef = require("react-use-stable-ref") /*id: 842231*/;
  var isBrowserEnv_2 = require("is-browser-env_2") /*id: 235295*/;
  function a(t, e) {
    let i = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let a = i && function () {
      if (!isBrowserEnv_2.isBrowser) {
        return;
      }
      if (n) {
        return n;
      }
      let t = new Map();
      let e = new ResizeObserver(e => {
        e.forEach(e => {
          var i;
          if ((i = t.get(e.target)) === null || i === undefined) {
            return undefined;
          } else {
            return i.forEach(t => setTimeout(() => {
              t(e);
            }, 0));
          }
        });
      });
      return n = {
        observer: e,
        subscribe(i, n) {
          let r = t.get(i);
          if (!r) {
            r = new Set();
            t.set(i, r);
            e.observe(i);
          }
          r.add(n);
        },
        unsubscribe(i, n) {
          let r = t.get(i);
          if (r) {
            r.delete(n);
            if (!r.size) {
              t.delete(i);
              e.unobserve(i);
            }
          }
        }
      };
    }();
    let l = reactUseStableRef.useStableRef(e);
    let u = t && "current" in t ? t.current : t;
    reactCoreLibraryReexport.useEffect(() => {
      let e = t && "current" in t ? t.current : t;
      if (!a || !e) {
        return;
      }
      let i = true;
      let n = function () {
        var t = arguments.length;
        var e = Array(t);
        var n = 0;
        for (; n < t; n++) {
          e[n] = arguments[n];
        }
        if (i) {
          l.current(...e);
        }
      };
      a.subscribe(e, n);
      return () => {
        i = false;
        a.unsubscribe(e, n);
      };
    }, [u, a]);
  }
  require.d(exports, {
    useResizeObserver: function () {
      return a;
    }
  });
}