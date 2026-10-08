// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'AnimatePresence'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 661587
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextProvider_2 = require("react-context-provider_2") /*id: 501827*/;
  var useLazyRefHook = require("use-lazy-ref-hook") /*id: 693163*/;
  var reactEnvironmentEffect = require("react-environment-effect") /*id: 65058*/;
  var larkUrlPreviewContext = require("lark-url-preview-context") /*id: 445669*/;
  var checkElementHasOffsetHeight = require("check-element-has-offset-height") /*id: 918816*/;
  var motionContext = require("motion-context") /*id: 647809*/;
  class u extends reactCoreLibraryReexport.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = t.offsetParent;
        let n = checkElementHasOffsetHeight.hasOffsetHeight(e) && e.offsetWidth || 0;
        let i = this.props.sizeRef.current;
        i.height = t.offsetHeight || 0;
        i.width = t.offsetWidth || 0;
        i.top = t.offsetTop;
        i.left = t.offsetLeft;
        i.right = n - i.width - i.left;
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function p(e) {
    let {
      children: t,
      isPresent: n,
      anchorX: o,
      root: l
    } = e;
    let a = reactCoreLibraryReexport.useId();
    let s = reactCoreLibraryReexport.useRef(null);
    let c = reactCoreLibraryReexport.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
    });
    let {
      nonce: p
    } = reactCoreLibraryReexport.useContext(motionContext.motionContext);
    reactCoreLibraryReexport.useInsertionEffect(() => {
      let {
        width: e,
        height: t,
        top: i,
        left: r,
        right: d
      } = c.current;
      if (n || !s.current || !e || !t) {
        return;
      }
      let u = o === "left" ? `left: ${r}` : `right: ${d}`;
      s.current.dataset.motionPopId = a;
      let h = document.createElement("style");
      if (p) {
        h.nonce = p;
      }
      let v = l ?? document.head;
      v.appendChild(h);
      if (h.sheet) {
        h.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${u}px !important;
            top: ${i}px !important;
          }
        `);
      }
      return () => {
        if (v.contains(h)) {
          v.removeChild(h);
        }
      };
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx(u, {
      isPresent: n,
      childRef: s,
      sizeRef: c,
      children: reactCoreLibraryReexport.cloneElement(t, {
        ref: s
      })
    });
  }
  let h = e => {
    let {
      children: t,
      initial: n,
      isPresent: o,
      onExitComplete: a,
      custom: c,
      presenceAffectsLayout: d,
      mode: u,
      anchorX: h,
      root: m
    } = e;
    let f = useLazyRefHook.useLazyRef(v);
    let g = reactCoreLibraryReexport.useId();
    let _ = true;
    let b = reactCoreLibraryReexport.useMemo(() => {
      _ = false;
      return {
        id: g,
        initial: n,
        isPresent: o,
        custom: c,
        onExitComplete: e => {
          f.set(e, true);
          for (let t of f.values()) {
            if (!t) {
              return;
            }
          }
          if (a) {
            a();
          }
        },
        register: e => {
          f.set(e, false);
          return () => f.delete(e);
        }
      };
    }, [o, f, a]);
    if (d && _) {
      b = {
        ...b
      };
    }
    reactCoreLibraryReexport.useMemo(() => {
      f.forEach((e, t) => f.set(t, false));
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!o && !f.size && !!a) {
        a();
      }
    }, [o]);
    if (u === "popLayout") {
      t = reactJsxRuntimeCoreReexport.jsx(p, {
        isPresent: o,
        anchorX: h,
        root: m,
        children: t
      });
    }
    return reactJsxRuntimeCoreReexport.jsx(larkUrlPreviewContext.previewContext.Provider, {
      value: b,
      children: t
    });
  };
  function v() {
    return new Map();
  }
  var larkUrlPreviewExitHook = require("lark-url-preview-exit-hook") /*id: 963313*/;
  let f = e => e.key || "";
  function g(e) {
    let t = [];
    reactCoreLibraryReexport.Children.forEach(e, e => {
      if (reactCoreLibraryReexport.isValidElement(e)) {
        t.push(e);
      }
    });
    return t;
  }
  let _ = e => {
    let {
      children: t,
      custom: n,
      initial: s = true,
      onExitComplete: c,
      presenceAffectsLayout: d = true,
      mode: u = "sync",
      propagate: p = false,
      anchorX: v = "left",
      root: _
    } = e;
    let [b, y] = larkUrlPreviewExitHook.useExitPreview(p);
    let k = reactCoreLibraryReexport.useMemo(() => g(t), [t]);
    let w = p && !b ? [] : k.map(f);
    let C = reactCoreLibraryReexport.useRef(true);
    let x = reactCoreLibraryReexport.useRef(k);
    let S = useLazyRefHook.useLazyRef(() => new Map());
    let [T, R] = reactCoreLibraryReexport.useState(k);
    let [E, $] = reactCoreLibraryReexport.useState(k);
    reactEnvironmentEffect.useEnvEffect(() => {
      C.current = false;
      x.current = k;
      for (let e = 0; e < E.length; e++) {
        let t = f(E[e]);
        if (w.includes(t)) {
          S.delete(t);
        } else if (S.get(t) !== true) {
          S.set(t, false);
        }
      }
    }, [E, w.length, w.join("-")]);
    let j = [];
    if (k !== T) {
      let e = [...k];
      for (let t = 0; t < E.length; t++) {
        let n = E[t];
        let i = f(n);
        if (!w.includes(i)) {
          e.splice(t, 0, n);
          j.push(n);
        }
      }
      if (u === "wait" && j.length) {
        e = j;
      }
      $(g(e));
      R(k);
      return null;
    }
    let {
      forceRender: I
    } = reactCoreLibraryReexport.useContext(reactContextProvider_2.AppContext);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: E.map(e => {
        let t = f(e);
        let r = (!p || !!b) && (k === E || w.includes(t));
        return reactJsxRuntimeCoreReexport.jsx(h, {
          isPresent: r,
          initial: (!C.current || !!s) && undefined,
          custom: n,
          presenceAffectsLayout: d,
          mode: u,
          root: _,
          onExitComplete: r ? undefined : () => {
            if (!S.has(t)) {
              return;
            }
            S.set(t, true);
            let e = true;
            S.forEach(t => {
              if (!t) {
                e = false;
              }
            });
            if (e) {
              if (I != null) {
                I();
              }
              $(x.current);
              if (p) {
                if (y != null) {
                  y();
                }
              }
              if (c) {
                c();
              }
            }
          },
          anchorX: v,
          children: e
        }, t);
      })
    });
  };
  require.d(exports, {
    AnimatePresence: function () {
      return _;
    }
  });
}