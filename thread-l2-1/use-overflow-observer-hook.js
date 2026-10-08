// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'useOverflowObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 187118
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useResizeObserverHook = require("use-resize-observer-hook") /*id: 754067*/;
  let r = e => {
    let {
      outerRef: t
    } = e;
    let [n, r] = reactCoreLibraryReexport.useState(false);
    let a = reactCoreLibraryReexport.useRef(null);
    let s = o(t, a);
    let c = reactCoreLibraryReexport.useCallback(() => {
      let e = a.current;
      if (!e) {
        return;
      }
      let t = e.clientHeight;
      let n = e.scrollHeight;
      if (t !== undefined && n !== undefined) {
        r(n - t > 1);
      }
    }, [a]);
    useResizeObserverHook.useResizeObserver(a, () => {
      c();
    });
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let e = a.current;
      if (!e) {
        return;
      }
      let t = new MutationObserver(() => {
        c();
      });
      t.observe(e, {
        childList: true,
        subtree: true,
        attributes: true
      });
      return () => {
        t.disconnect();
      };
    }, [c]);
    return {
      isOverflowing: n,
      mergedRef: s
    };
  };
  let o = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return e => {
      t.forEach(t => {
        if (t && "current" in t) {
          t.current = e;
        } else if (typeof t == "function") {
          t(e);
        }
      });
    };
  };
  require.d(exports, {
    useOverflowObserver: function () {
      return r;
    }
  });
}