// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'AnimatePresence'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 591327
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var createContextModule_1 = require("create-context-module_1") /*id: 324875*/;
  var useLazyRefHook_1 = require("use-lazy-ref-hook_1") /*id: 906944*/;
  var useLayoutEffectSsr = require("use-layout-effect-ssr") /*id: 730770*/;
  var imagePreviewContext = require("image-preview-context") /*id: 61163*/;
  var isDomElementChecker = require("is-dom-element-checker") /*id: 34457*/;
  var motionContextProvider = require("motion-context-provider") /*id: 271458*/;
  class c extends reactCoreLibraryReexport.Component {
    getSnapshotBeforeUpdate(t) {
      let e = this.props.childRef.current;
      if (e && t.isPresent && !this.props.isPresent) {
        let t = e.offsetParent;
        let i = isDomElementChecker.isDomElement(t) && t.offsetWidth || 0;
        let n = this.props.sizeRef.current;
        n.height = e.offsetHeight || 0;
        n.width = e.offsetWidth || 0;
        n.top = e.offsetTop;
        n.left = e.offsetLeft;
        n.right = i - n.width - n.left;
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function d(t) {
    let {
      children: e,
      isPresent: i,
      anchorX: s
    } = t;
    let o = reactCoreLibraryReexport.useId();
    let a = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
    });
    let {
      nonce: u
    } = reactCoreLibraryReexport.useContext(motionContextProvider.motionContext);
    reactCoreLibraryReexport.useInsertionEffect(() => {
      let {
        width: t,
        height: e,
        top: n,
        left: r,
        right: h
      } = l.current;
      if (i || !a.current || !t || !e) {
        return;
      }
      let c = s === "left" ? `left: ${r}` : `right: ${h}`;
      a.current.dataset.motionPopId = o;
      let d = document.createElement("style");
      if (u) {
        d.nonce = u;
      }
      document.head.appendChild(d);
      if (d.sheet) {
        d.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${c}px !important;
            top: ${n}px !important;
          }
        `);
      }
      return () => {
        if (document.head.contains(d)) {
          document.head.removeChild(d);
        }
      };
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx(c, {
      isPresent: i,
      childRef: a,
      sizeRef: l,
      children: reactCoreLibraryReexport.cloneElement(e, {
        ref: a
      })
    });
  }
  let p = t => {
    let {
      children: e,
      initial: i,
      isPresent: s,
      onExitComplete: a,
      custom: u,
      presenceAffectsLayout: h,
      mode: c,
      anchorX: p
    } = t;
    let m = useLazyRefHook_1.useLazyRef(f);
    let g = reactCoreLibraryReexport.useId();
    let v = true;
    let y = reactCoreLibraryReexport.useMemo(() => {
      v = false;
      return {
        id: g,
        initial: i,
        isPresent: s,
        custom: u,
        onExitComplete: t => {
          m.set(t, true);
          for (let e of m.values()) {
            if (!e) {
              return;
            }
          }
          if (a) {
            a();
          }
        },
        register: t => {
          m.set(t, false);
          return () => m.delete(t);
        }
      };
    }, [s, m, a]);
    if (h && v) {
      y = {
        ...y
      };
    }
    reactCoreLibraryReexport.useMemo(() => {
      m.forEach((t, e) => m.set(e, false));
    }, [s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!s && !m.size && !!a) {
        a();
      }
    }, [s]);
    if (c === "popLayout") {
      e = reactJsxRuntimeCoreReexport.jsx(d, {
        isPresent: s,
        anchorX: p,
        children: e
      });
    }
    return reactJsxRuntimeCoreReexport.jsx(imagePreviewContext.previewContext.Provider, {
      value: y,
      children: e
    });
  };
  function f() {
    return new Map();
  }
  var imagePreviewRegistration = require("image-preview-registration") /*id: 188570*/;
  let g = t => t.key || "";
  function v(t) {
    let e = [];
    reactCoreLibraryReexport.Children.forEach(t, t => {
      if (reactCoreLibraryReexport.isValidElement(t)) {
        e.push(t);
      }
    });
    return e;
  }
  let y = t => {
    let {
      children: e,
      custom: i,
      initial: l = true,
      onExitComplete: u,
      presenceAffectsLayout: h = true,
      mode: c = "sync",
      propagate: d = false,
      anchorX: f = "left"
    } = t;
    let [y, x] = imagePreviewRegistration.usePreviewRegister(d);
    let w = reactCoreLibraryReexport.useMemo(() => v(e), [e]);
    let b = d && !y ? [] : w.map(g);
    let A = reactCoreLibraryReexport.useRef(true);
    let P = reactCoreLibraryReexport.useRef(w);
    let T = useLazyRefHook_1.useLazyRef(() => new Map());
    let [S, E] = reactCoreLibraryReexport.useState(w);
    let [k, M] = reactCoreLibraryReexport.useState(w);
    useLayoutEffectSsr.useSafeLayoutEffect(() => {
      A.current = false;
      P.current = w;
      for (let t = 0; t < k.length; t++) {
        let e = g(k[t]);
        if (b.includes(e)) {
          T.delete(e);
        } else if (T.get(e) !== true) {
          T.set(e, false);
        }
      }
    }, [k, b.length, b.join("-")]);
    let C = [];
    if (w !== S) {
      let t = [...w];
      for (let e = 0; e < k.length; e++) {
        let i = k[e];
        let n = g(i);
        if (!b.includes(n)) {
          t.splice(e, 0, i);
          C.push(i);
        }
      }
      if (c === "wait" && C.length) {
        t = C;
      }
      M(v(t));
      E(w);
      return null;
    }
    let {
      forceRender: F
    } = reactCoreLibraryReexport.useContext(createContextModule_1.createContext);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: k.map(t => {
        let e = g(t);
        let r = (!d || !!y) && (w === k || b.includes(e));
        return reactJsxRuntimeCoreReexport.jsx(p, {
          isPresent: r,
          initial: (!A.current || !!l) && undefined,
          custom: i,
          presenceAffectsLayout: h,
          mode: c,
          onExitComplete: r ? undefined : () => {
            if (!T.has(e)) {
              return;
            }
            T.set(e, true);
            let t = true;
            T.forEach(e => {
              if (!e) {
                t = false;
              }
            });
            if (t) {
              if (F != null) {
                F();
              }
              M(P.current);
              if (d) {
                if (x != null) {
                  x();
                }
              }
              if (u) {
                u();
              }
            }
          },
          anchorX: f,
          children: t
        }, e);
      })
    });
  };
  require.d(exports, {
    AnimatePresence: function () {
      return y;
    }
  });
}