// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sz' to 'useContextSelector'
// - Renamed export 'kr' to 'createContext'
// - Renamed export 'qp' to 'useContextValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 65860
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSchedulerCoreWrapper = require("react-scheduler-core-wrapper") /*id: 496627*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  require("process-browser-shim") /*id: 488992*/;
  let u = Symbol();
  let a = Symbol();
  let c = typeof window == "undefined" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent) ? reactCoreLibraryReexport.useEffect : reactCoreLibraryReexport.useLayoutEffect;
  let s = reactSchedulerCoreWrapper.unstable_runWithPriority ? e => {
    try {
      reactSchedulerCoreWrapper.unstable_runWithPriority(reactSchedulerCoreWrapper.unstable_NormalPriority, e);
    } catch (t) {
      if (t.message === "Not implemented.") {
        e();
      } else {
        throw t;
      }
    }
  } : e => e();
  let l = e => ({
    value: t,
    children: n
  }) => {
    let o = reactCoreLibraryReexport.useRef(t);
    let a = reactCoreLibraryReexport.useRef(0);
    let [l, f] = reactCoreLibraryReexport.useState(null);
    if (l) {
      l(t);
      f(null);
    }
    let p = reactCoreLibraryReexport.useRef();
    if (!p.current) {
      let e = new Set();
      p.current = {
        [u]: {
          v: o,
          n: a,
          l: e,
          u: (t, n) => {
            reactDomEntryWrapper.unstable_batchedUpdates(() => {
              a.current += 1;
              let r = {
                n: a.current
              };
              if (n != null && n.suspense) {
                r.n *= -1;
                r.p = new Promise(e => {
                  f(() => t => {
                    r.v = t;
                    delete r.p;
                    e(t);
                  });
                });
              }
              e.forEach(e => e(r));
              t();
            });
          }
        }
      };
    }
    c(() => {
      o.current = t;
      a.current += 1;
      s(() => {
        p.current[u].l.forEach(e => {
          e({
            n: a.current,
            v: t
          });
        });
      });
    }, [t]);
    return reactCoreLibraryReexport.createElement(e, {
      value: p.current
    }, n);
  };
  let f = e => e;
  function p(e) {
    let t = reactCoreLibraryReexport.createContext({
      [u]: {
        v: {
          current: e
        },
        n: {
          current: -1
        },
        l: new Set(),
        u: e => e()
      }
    });
    t[a] = t.Provider;
    t.Provider = l(t.Provider);
    delete t.Consumer;
    return t;
  }
  function d(e, t) {
    let {
      v: {
        current: n
      },
      n: {
        current: o
      },
      l: i
    } = reactCoreLibraryReexport.useContext(e)[u];
    let a = t(n);
    let [s, l] = reactCoreLibraryReexport.useReducer((e, r) => {
      if (!r) {
        return [n, a];
      }
      if ("p" in r) {
        throw r.p;
      }
      if (r.n === o) {
        if (Object.is(e[1], a)) {
          return e;
        } else {
          return [n, a];
        }
      }
      try {
        if ("v" in r) {
          if (Object.is(e[0], r.v)) {
            return e;
          }
          let n = t(r.v);
          if (Object.is(e[1], n)) {
            return e;
          }
          return [r.v, n];
        }
      } catch (e) {}
      return [...e];
    }, [n, a]);
    if (!Object.is(s[1], a)) {
      l();
    }
    c(() => {
      i.add(l);
      return () => {
        i.delete(l);
      };
    }, [i]);
    return s[1];
  }
  function h(e) {
    return d(e, f);
  }
  require.d(exports, {
    useContextSelector: function () {
      return d;
    },
    createContext: function () {
      return p;
    },
    useContextValue: function () {
      return h;
    }
  });
}