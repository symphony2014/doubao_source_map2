// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'LayoutPresence'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 381418
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactHookEnvironmentSelector = require("react-hook-environment-selector") /*id: 956112*/;
  function s() {
    let t = reactCoreLibraryReexport.useRef(false);
    reactHookEnvironmentSelector.useEnvironmentEffect(() => {
      t.current = true;
      return () => {
        t.current = false;
      };
    }, []);
    return t;
  }
  var animationFrameScheduler = require("animation-frame-scheduler") /*id: 92608*/;
  var appContextInstance = require("app-context-instance") /*id: 63821*/;
  var useConstant = require("use-constant") /*id: 712385*/;
  class u extends reactCoreLibraryReexport.Component {
    getSnapshotBeforeUpdate(t) {
      let e = this.props.childRef.current;
      if (e && t.isPresent && !this.props.isPresent) {
        let t = this.props.sizeRef.current;
        t.height = e.offsetHeight || 0;
        t.width = e.offsetWidth || 0;
        t.top = e.offsetTop;
        t.left = e.offsetLeft;
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function h(t) {
    let {
      children: e,
      isPresent: i
    } = t;
    let r = reactCoreLibraryReexport.useId();
    let s = reactCoreLibraryReexport.useRef(null);
    let o = reactCoreLibraryReexport.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });
    reactCoreLibraryReexport.useInsertionEffect(() => {
      let {
        width: t,
        height: e,
        top: n,
        left: a
      } = o.current;
      if (i || !s.current || !t || !e) {
        return;
      }
      s.current.dataset.motionPopId = r;
      let l = document.createElement("style");
      document.head.appendChild(l);
      if (l.sheet) {
        l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            top: ${n}px !important;
            left: ${a}px !important;
          }
        `);
      }
      return () => {
        document.head.removeChild(l);
      };
    }, [i]);
    return reactCoreLibraryReexport.createElement(u, {
      isPresent: i,
      childRef: s,
      sizeRef: o
    }, reactCoreLibraryReexport.cloneElement(e, {
      ref: s
    }));
  }
  let c = t => {
    let {
      children: e,
      initial: i,
      isPresent: r,
      onExitComplete: s,
      custom: o,
      presenceAffectsLayout: u,
      mode: c
    } = t;
    let p = useConstant.useConstant(d);
    let m = reactCoreLibraryReexport.useId();
    let f = reactCoreLibraryReexport.useMemo(() => ({
      id: m,
      initial: i,
      isPresent: r,
      custom: o,
      onExitComplete: t => {
        p.set(t, true);
        for (let e of p.values()) {
          if (!e) {
            return;
          }
        }
        if (s) {
          s();
        }
      },
      register: t => {
        p.set(t, false);
        return () => p.delete(t);
      }
    }), u ? undefined : [r]);
    reactCoreLibraryReexport.useMemo(() => {
      p.forEach((t, e) => p.set(e, false));
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r && !p.size && !!s) {
        s();
      }
    }, [r]);
    if (c === "popLayout") {
      e = reactCoreLibraryReexport.createElement(h, {
        isPresent: r
      }, e);
    }
    return reactCoreLibraryReexport.createElement(appContextInstance.appContext.Provider, {
      value: f
    }, e);
  };
  function d() {
    return new Map();
  }
  var sharedUiContext = require("shared-ui-context") /*id: 10109*/;
  var identityFunctionExports = require("identity-function-exports") /*id: 183293*/;
  let f = t => t.key || "";
  let g = t => {
    var e;
    let {
      children: i,
      custom: a,
      initial: l = true,
      onExitComplete: u,
      exitBeforeEnter: h,
      presenceAffectsLayout: d = true,
      mode: g = "sync"
    } = t;
    identityFunctionExports.identityFn(!h, "Replace exitBeforeEnter with mode='wait'");
    let v = reactCoreLibraryReexport.useContext(sharedUiContext.uiContext).forceRender || function () {
      let t = s();
      let [e, i] = reactCoreLibraryReexport.useState(0);
      let r = reactCoreLibraryReexport.useCallback(() => {
        if (t.current) {
          i(e + 1);
        }
      }, [e]);
      return [reactCoreLibraryReexport.useCallback(() => animationFrameScheduler.frameScheduler.postRender(r), [r]), e];
    }()[0];
    let y = s();
    let x = function (t) {
      let e = [];
      reactCoreLibraryReexport.Children.forEach(t, t => {
        if (reactCoreLibraryReexport.isValidElement(t)) {
          e.push(t);
        }
      });
      return e;
    }(i);
    let b = x;
    let P = reactCoreLibraryReexport.useRef(new Map()).current;
    let w = reactCoreLibraryReexport.useRef(b);
    let T = reactCoreLibraryReexport.useRef(new Map()).current;
    let A = reactCoreLibraryReexport.useRef(true);
    reactHookEnvironmentSelector.useEnvironmentEffect(() => {
      A.current = false;
      (function (t, e) {
        t.forEach(t => {
          let i = f(t);
          e.set(i, t);
        });
      })(x, T);
      w.current = b;
    });
    e = () => {
      A.current = true;
      T.clear();
      P.clear();
    };
    reactCoreLibraryReexport.useEffect(() => () => e(), []);
    if (A.current) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, b.map(t => reactCoreLibraryReexport.createElement(c, {
        key: f(t),
        isPresent: true,
        initial: !!l && undefined,
        presenceAffectsLayout: d,
        mode: g
      }, t)));
    }
    b = [...b];
    let C = w.current.map(f);
    let S = x.map(f);
    let E = C.length;
    for (let t = 0; t < E; t++) {
      let e = C[t];
      if (S.indexOf(e) === -1 && !P.has(e)) {
        P.set(e, undefined);
      }
    }
    if (g === "wait" && P.size) {
      b = [];
    }
    P.forEach((t, e) => {
      if (S.indexOf(e) !== -1) {
        return;
      }
      let i = T.get(e);
      if (!i) {
        return;
      }
      let r = C.indexOf(e);
      let s = t;
      if (!s) {
        s = reactCoreLibraryReexport.createElement(c, {
          key: f(i),
          isPresent: false,
          onExitComplete: () => {
            P.delete(e);
            let t = Array.from(T.keys()).filter(t => !S.includes(t));
            t.forEach(t => T.delete(t));
            w.current = x.filter(i => {
              let n = f(i);
              return n === e || t.includes(n);
            });
            if (!P.size) {
              if (y.current === false) {
                return;
              }
              v();
              if (u) {
                u();
              }
            }
          },
          custom: a,
          presenceAffectsLayout: d,
          mode: g
        }, i);
        P.set(e, s);
      }
      b.splice(r, 0, s);
    });
    b = b.map(t => {
      let e = t.key;
      if (P.has(e)) {
        return t;
      } else {
        return reactCoreLibraryReexport.createElement(c, {
          key: f(t),
          isPresent: true,
          presenceAffectsLayout: d,
          mode: g
        }, t);
      }
    });
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, P.size ? b : b.map(t => reactCoreLibraryReexport.cloneElement(t)));
  };
  require.d(exports, {
    LayoutPresence: function () {
      return g;
    }
  });
}