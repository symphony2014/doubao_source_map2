// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'createStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 142289
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
  require.d(exports, {
    createStore: function () {
      return i;
    }
  });
}