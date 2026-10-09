// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ue' to 'createStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 960791
         */
module.exports = function (module, exports, require) {
  let r = e => {
    let t;
    let n = new Set();
    let r = (e, r) => {
      let i = typeof e == "function" ? e(t) : e;
      if (!Object.is(i, t)) {
        let e = t;
        t = r ?? typeof i != "object" ? i : Object.assign({}, t, i);
        n.forEach(n => n(t, e));
      }
    };
    let i = () => t;
    let o = {
      setState: r,
      getState: i,
      subscribe: e => {
        n.add(e);
        return () => n.delete(e);
      },
      destroy: () => {
        n.clear();
      }
    };
    t = e(r, i, o);
    return o;
  };
  let i = e => e ? r(e) : r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let {
    useSyncExternalStoreWithSelector: a
  } = require("use-sync-external-store-selector_1") /*id: 837232*/;
  let s = e => {
    let t = typeof e == "function" ? i(e) : e;
    let n = (e, n) => function (e, t = e.getState, n) {
      let r = a(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
      reactCoreLibraryReexport.useDebugValue(r);
      return r;
    }(t, e, n);
    Object.assign(n, t);
    return n;
  };
  let u = e => e ? s(e) : s;
  require.d(exports, {
    createStore: function () {
      return u;
    }
  });
}