// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'usePanzoom'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hsir-render.1da2d47c.js
         * chunkId: 27677
         * moduleId: 872098
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var panzoomCoreModule = require("panzoom-core-module") /*id: 615113*/;
  function i(t, e, n = {}) {
    let {
      panzoomOptions: i = {},
      enableDoubleClickZoom: a = true,
      padding: l = 20,
      fullscreenMaxWidth: s = 800
    } = n;
    let [u, c] = reactCoreLibraryReexport.useState(false);
    let h = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t || !e) {
        return;
      }
      let n = panzoomCoreModule.Panzoom(e, i);
      n.fit = () => {
        if (!t || !e) {
          return;
        }
        let r = t.clientWidth;
        let o = t.clientHeight;
        let i = e.offsetWidth;
        let a = e.offsetHeight;
        if (i === 0 || a === 0) {
          return;
        }
        let u = Math.min(Math.min(r - l * 2, s) / i, (o - l * 2) / a);
        n.pan(0, 0, {
          animate: false,
          relative: false
        });
        n.zoom(u, {
          animate: false
        });
      };
      h.current = n;
      c(true);
      let r = t => n.handleDown(t);
      let u = t => n.handleMove(t);
      let d = t => n.handleUp(t);
      let f = t => n.handleUp(t);
      let p = t => {
        if (a) {
          t.preventDefault();
          n.zoomIn({
            animate: true
          });
        }
      };
      t.addEventListener("pointerdown", r);
      t.addEventListener("pointermove", u);
      t.addEventListener("pointerup", d);
      t.addEventListener("pointercancel", f);
      t.addEventListener("dblclick", p);
      return () => {
        t.removeEventListener("pointerdown", r);
        t.removeEventListener("pointermove", u);
        t.removeEventListener("pointerup", d);
        t.removeEventListener("pointercancel", f);
        t.removeEventListener("dblclick", p);
        h.current = null;
        n.destroy();
      };
    }, [t, e]);
    return {
      panzoomRef: h,
      isInit: u
    };
  }
  require.d(exports, {
    usePanzoom: function () {
      return i;
    }
  });
}