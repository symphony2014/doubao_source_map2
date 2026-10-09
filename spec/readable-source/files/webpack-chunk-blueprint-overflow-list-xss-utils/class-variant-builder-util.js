// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createVariantClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 885479
         */
module.exports = function (module, exports, require) {
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  let i = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e;
  let o = classNamesUtil.classNames;
  let a = (e, t) => n => {
    var r;
    if ((t == null ? undefined : t.variants) == null) {
      return o(e, n == null ? undefined : n.class, n == null ? undefined : n.className);
    }
    let {
      variants: a,
      defaultVariants: s
    } = t;
    let u = Object.keys(a).map(e => {
      let t = n == null ? undefined : n[e];
      let r = s == null ? undefined : s[e];
      if (t === null) {
        return null;
      }
      let o = i(t) || i(r);
      return a[e][o];
    });
    let c = n && Object.entries(n).reduce((e, t) => {
      let [n, r] = t;
      if (r !== undefined) {
        e[n] = r;
      }
      return e;
    }, {});
    return o(e, u, t == null ? undefined : (r = t.compoundVariants) === null || r === undefined ? undefined : r.reduce((e, t) => {
      let {
        class: n,
        className: r,
        ...i
      } = t;
      if (Object.entries(i).every(e => {
        let [t, n] = e;
        if (Array.isArray(n)) {
          return n.includes({
            ...s,
            ...c
          }[t]);
        } else {
          return {
            ...s,
            ...c
          }[t] === n;
        }
      })) {
        return [...e, n, r];
      } else {
        return e;
      }
    }, []), n == null ? undefined : n.class, n == null ? undefined : n.className);
  };
  require.d(exports, {
    createVariantClassNames: function () {
      return a;
    }
  });
}