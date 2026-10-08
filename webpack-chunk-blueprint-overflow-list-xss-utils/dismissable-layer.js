// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XB' to 'DismissableLayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 749383
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactUseLatestCallback = require("react-use-latest-callback") /*id: 440027*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var l = "dismissableLayer.update";
  var f = reactCoreLibraryReexport.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  });
  var h = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      disableOutsidePointerEvents: g = false,
      onEscapeKeyDown: v,
      onPointerDownOutside: m,
      onFocusOutside: y,
      onInteractOutside: b,
      onDismiss: _,
      ...w
    } = e;
    let E = reactCoreLibraryReexport.useContext(f);
    let [S, x] = reactCoreLibraryReexport.useState(null);
    let k = (S == null ? undefined : S.ownerDocument) ?? globalThis?.document;
    let [, O] = reactCoreLibraryReexport.useState({});
    let A = reactMergeRefs.useMergeRefs(t, e => x(e));
    let T = Array.from(E.layers);
    let [R] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1);
    let C = T.indexOf(R);
    let M = S ? T.indexOf(S) : -1;
    let P = E.layersWithOutsidePointerEventsDisabled.size > 0;
    let D = M >= C;
    let j = function (e, n = globalThis?.document) {
      let r = reactUseLatestCallback.useLatestCallback(e);
      let o = reactCoreLibraryReexport.useRef(false);
      let a = reactCoreLibraryReexport.useRef(() => {});
      reactCoreLibraryReexport.useEffect(() => {
        let e = e => {
          if (e.target && !o.current) {
            let t = function () {
              p("dismissableLayer.pointerDownOutside", r, i, {
                discrete: true
              });
            };
            let i = {
              originalEvent: e
            };
            if (e.pointerType === "touch") {
              n.removeEventListener("click", a.current);
              a.current = t;
              n.addEventListener("click", a.current, {
                once: true
              });
            } else {
              t();
            }
          } else {
            n.removeEventListener("click", a.current);
          }
          o.current = false;
        };
        let t = window.setTimeout(() => {
          n.addEventListener("pointerdown", e);
        }, 0);
        return () => {
          window.clearTimeout(t);
          n.removeEventListener("pointerdown", e);
          n.removeEventListener("click", a.current);
        };
      }, [n, r]);
      return {
        onPointerDownCapture: () => o.current = true
      };
    }(e => {
      let t = e.target;
      let n = [...E.branches].some(e => e.contains(t));
      if (!!D && !n) {
        if (m != null) {
          m(e);
        }
        if (b != null) {
          b(e);
        }
        if (!e.defaultPrevented && _ != null) {
          _();
        }
      }
    }, k);
    let I = function (e, n = globalThis?.document) {
      let r = reactUseLatestCallback.useLatestCallback(e);
      let o = reactCoreLibraryReexport.useRef(false);
      reactCoreLibraryReexport.useEffect(() => {
        let e = e => {
          if (e.target && !o.current) {
            p("dismissableLayer.focusOutside", r, {
              originalEvent: e
            }, {
              discrete: false
            });
          }
        };
        n.addEventListener("focusin", e);
        return () => n.removeEventListener("focusin", e);
      }, [n, r]);
      return {
        onFocusCapture: () => o.current = true,
        onBlurCapture: () => o.current = false
      };
    }(e => {
      let t = e.target;
      if (![...E.branches].some(e => e.contains(t))) {
        if (y != null) {
          y(e);
        }
        if (b != null) {
          b(e);
        }
        if (!e.defaultPrevented && _ != null) {
          _();
        }
      }
    }, k);
    (function (e, n = globalThis?.document) {
      let r = reactUseLatestCallback.useLatestCallback(e);
      reactCoreLibraryReexport.useEffect(() => {
        let e = e => {
          if (e.key === "Escape") {
            r(e);
          }
        };
        n.addEventListener("keydown", e, {
          capture: true
        });
        return () => n.removeEventListener("keydown", e, {
          capture: true
        });
      }, [r, n]);
    })(e => {
      if (M === E.layers.size - 1) {
        if (v != null) {
          v(e);
        }
        if (!e.defaultPrevented && _) {
          e.preventDefault();
          _();
        }
      }
    }, k);
    reactCoreLibraryReexport.useEffect(() => {
      if (S) {
        if (g) {
          if (E.layersWithOutsidePointerEventsDisabled.size === 0) {
            r = k.body.style.pointerEvents;
            k.body.style.pointerEvents = "none";
          }
          E.layersWithOutsidePointerEventsDisabled.add(S);
        }
        E.layers.add(S);
        d();
        return () => {
          if (g && E.layersWithOutsidePointerEventsDisabled.size === 1) {
            k.body.style.pointerEvents = r;
          }
        };
      }
    }, [S, k, g, E]);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (S) {
        E.layers.delete(S);
        E.layersWithOutsidePointerEventsDisabled.delete(S);
        d();
      }
    }, [S, E]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => O({});
      document.addEventListener(l, e);
      return () => document.removeEventListener(l, e);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      ...w,
      ref: A,
      style: {
        pointerEvents: P ? D ? "auto" : "none" : undefined,
        ...e.style
      },
      onFocusCapture: composeHandlers.composeHandlers(e.onFocusCapture, I.onFocusCapture),
      onBlurCapture: composeHandlers.composeHandlers(e.onBlurCapture, I.onBlurCapture),
      onPointerDownCapture: composeHandlers.composeHandlers(e.onPointerDownCapture, j.onPointerDownCapture)
    });
  });
  function d() {
    let e = new CustomEvent(l);
    document.dispatchEvent(e);
  }
  function p(e, t, n, r) {
    let {
      discrete: i
    } = r;
    let o = n.originalEvent.target;
    let s = new CustomEvent(e, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    if (t) {
      o.addEventListener(e, t, {
        once: true
      });
    }
    if (i) {
      reactPrimitiveComponents.dispatchEventSync(o, s);
    } else {
      o.dispatchEvent(s);
    }
  }
  h.displayName = "DismissableLayer";
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = reactCoreLibraryReexport.useContext(f);
    let r = reactCoreLibraryReexport.useRef(null);
    let o = reactMergeRefs.useMergeRefs(t, r);
    reactCoreLibraryReexport.useEffect(() => {
      let e = r.current;
      if (e) {
        n.branches.add(e);
        return () => {
          n.branches.delete(e);
        };
      }
    }, [n.branches]);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      ...e,
      ref: o
    });
  }).displayName = "DismissableLayerBranch";
  require.d(exports, {
    DismissableLayer: function () {
      return h;
    }
  });
}