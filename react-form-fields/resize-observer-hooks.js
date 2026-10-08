// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'useResizeObserver'
// - Renamed export 'y' to 'useResizeObserverEx'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 246619
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseResizeObserver = require("react-use-resize-observer") /*id: 912520*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactEffectHookSelector = require("react-effect-hook-selector") /*id: 245280*/;
  var resizeObserverPolyfill_2 = require("resize-observer-polyfill_2") /*id: 129887*/;
  if (typeof window != "undefined" && !window.ResizeObserver) {
    window.ResizeObserver = resizeObserverPolyfill_2.ResizeObserver;
  }
  let d = function (e = {}) {
    let {
      ref: t,
      onlyBothNilIsFirstScreen: n = true,
      onResize: l,
      box: c,
      syncUpdate: d = true
    } = e;
    let u = reactCoreLibraryReexport.useRef(null);
    let h = t ?? u;
    let [p, m] = reactCoreLibraryReexport.useState();
    let [f, g] = reactCoreLibraryReexport.useState();
    reactEffectHookSelector.useEffectHook(() => {
      b();
    }, []);
    reactEffectHookSelector.useEffectHook(() => {
      if (!isUndefinedCheck.isUndefined(p) && !isUndefinedCheck.isUndefined(f) && l != null) {
        l({
          width: p,
          height: f
        });
      }
    }, [p, f]);
    let b = () => {
      if (h.current) {
        let {
          width: e,
          height: t
        } = h.current.getBoundingClientRect();
        m(e);
        g(t);
      } else {
        m(undefined);
        g(undefined);
      }
    };
    let {
      width: y,
      height: v
    } = reactUseResizeObserver.useResizeObserver({
      ref: h,
      box: c,
      onResize: e => {
        if (l != null) {
          l(e);
        }
        let {
          width: t,
          height: n
        } = e;
        if (d) {
          reactDomEntryWrapper.flushSync(() => {
            m(t ?? 0);
            g(n ?? 0);
          });
        } else {
          m(t ?? 0);
          g(n ?? 0);
        }
      }
    });
    reactEffectHookSelector.useEffectHook(() => {
      m(undefined);
    }, [y]);
    reactEffectHookSelector.useEffectHook(() => {
      g(undefined);
    }, [v]);
    let w = n && isUndefinedCheck.isUndefined(y) && isUndefinedCheck.isUndefined(v);
    let _ = w ? undefined : y ?? 0;
    let x = w ? undefined : v ?? 0;
    return {
      ref: h,
      width: p ?? _,
      height: f ?? x,
      refresh: b
    };
  };
  let u = function (e = {}) {
    let {
      ref: t,
      onResize: n
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    let s = t ?? i;
    let {
      width: a,
      height: c
    } = reactUseResizeObserver.useResizeObserver({
      ref: s,
      onResize: n
    });
    return {
      ref: s,
      width: a,
      height: c,
      refresh: emptyExportFunction.emptyFunction
    };
  };
  require.d(exports, {
    useResizeObserver: function () {
      return u;
    },
    useResizeObserverEx: function () {
      return d;
    }
  });
}