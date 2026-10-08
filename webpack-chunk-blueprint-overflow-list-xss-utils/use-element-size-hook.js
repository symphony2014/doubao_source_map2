// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useElementSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 956289
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseLayoutEffectSafe = require("react-use-layout-effect-safe") /*id: 245652*/;
  function o(e) {
    let [t, n] = reactCoreLibraryReexport.useState(undefined);
    reactUseLayoutEffectSafe.useLayoutEffect(() => {
      if (e) {
        n({
          width: e.offsetWidth,
          height: e.offsetHeight
        });
        let t = new ResizeObserver(t => {
          let r;
          let i;
          if (!Array.isArray(t) || !t.length) {
            return;
          }
          let o = t[0];
          if ("borderBoxSize" in o) {
            let e = o.borderBoxSize;
            let t = Array.isArray(e) ? e[0] : e;
            r = t.inlineSize;
            i = t.blockSize;
          } else {
            r = e.offsetWidth;
            i = e.offsetHeight;
          }
          n({
            width: r,
            height: i
          });
        });
        t.observe(e, {
          box: "border-box"
        });
        return () => t.unobserve(e);
      }
      n(undefined);
    }, [e]);
    return t;
  }
  require.d(exports, {
    useElementSize: function () {
      return o;
    }
  });
}