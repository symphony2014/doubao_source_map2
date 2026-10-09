// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'useInView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62381.cb92c622.js
         * chunkId: 62381
         * moduleId: 387169
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  let r = (e, t, n) => e >= t && e <= n;
  let o = function (e, t = {}) {
    let {
      top: n,
      left: i,
      bottom: l,
      right: o
    } = e.getBoundingClientRect();
    let {
      topOffset: a = 0,
      bottomOffset: s = 0,
      leftOffset: d = 0,
      rightOffset: u = 0
    } = t;
    let c = window.innerWidth || document.documentElement.clientWidth;
    let v = window.innerHeight || document.documentElement.clientHeight;
    return (r(n, -a, v + s) || r(l, -a, v + s) || n < -a && l > v + s) && (r(i, -d, c + u) || r(o, -d, c + u) || i < -d && o > c + u);
  };
  let a = e => {
    let {
      ref: t,
      ...n
    } = e;
    let [r, a] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let e = isFunctionUtil_1.isFunction(t) ? t() : t.current;
      if (e && o(e, n)) {
        a(true);
      }
    }, []);
    return {
      ref: t,
      inView: r
    };
  };
  require.d(exports, {
    useInView: function () {
      return a;
    }
  });
}