// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useMediaQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 797741
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isBrowserEnv_2 = require("is-browser-env_2") /*id: 235295*/;
  let o = new Map();
  let a = e => {
    let t = matchMedia(e);
    let n = new Set();
    let r = () => {
      n.forEach(e => {
        e(t.matches);
      });
    };
    if (t.addEventListener) {
      t.addEventListener("change", r, {
        passive: true
      });
    } else {
      t.addListener(r);
    }
    return {
      mql: t,
      dispatchers: n,
      listener: r
    };
  };
  let s = (e, t) => {
    let n = o.get(e);
    if (!n) {
      n = a(e);
      o.set(e, n);
    }
    n.dispatchers.add(t);
    t(n.mql.matches);
  };
  let u = (e, t) => {
    let n = o.get(e);
    if (n) {
      let {
        mql: r,
        dispatchers: i,
        listener: a
      } = n;
      i.delete(t);
      if (!i.size) {
        o.delete(e);
        if (r.removeEventListener) {
          r.removeEventListener("change", a);
        } else {
          r.removeListener(a);
        }
      }
    }
  };
  function c(e, t = {}) {
    let {
      initializeWithValue: n = true
    } = t;
    if (!isBrowserEnv_2.isBrowser) {
      n = false;
    }
    let [c, l] = reactCoreLibraryReexport.useState(() => {
      if (n) {
        let t = o.get(e);
        if (!t) {
          t = a(e);
          o.set(e, t);
        }
        return t.mql.matches;
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      s(e, l);
      return () => {
        u(e, l);
      };
    }, [e]);
    return c;
  }
  require.d(exports, {
    useMediaQuery: function () {
      return c;
    }
  });
}