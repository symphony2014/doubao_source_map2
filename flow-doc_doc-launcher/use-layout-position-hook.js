// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useLayoutPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 234774
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  function c(e, n, r) {
    let [c, u] = reactCoreLibraryReexport.useState(n);
    let s = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useRef(r);
    let h = reactCoreLibraryReexport.useRef(debounceUtil_1_1.debounce((e, n, r) => {
      d.current = r;
      if (e && n && uiLayoutPositionUtils.hasNonZeroRect(r)) {
        u(e => e || (n.x <= r.left ? (s.current = 0, {
          x: r.left,
          y: n.y
        }) : n.x >= r.left + r.width ? (s.current = 1, {
          x: r.left + r.width,
          y: n.y
        }) : (s.current = (n.x - r.left) / r.width, n)));
      }
      if (!e) {
        s.current = null;
        u(null);
      }
    }, 16)).current;
    reactCoreLibraryReexport.useLayoutEffect(() => {
      h(e, n, r);
      return () => {
        h.cancel();
      };
    }, [e, n, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        let e = () => {
          u(e => {
            if (e && s.current !== null) {
              let n = {
                x: d.current.left + d.current.width * s.current,
                y: e.y
              };
              if (deepEqualUtil_1.deepEqual(n, e)) {
                return e;
              } else {
                return n;
              }
            }
            return e;
          });
        };
        window.addEventListener("resize", e);
        return () => {
          window.removeEventListener("resize", e);
        };
      }
    }, [e]);
    return c;
  }
  require.d(exports, {
    useLayoutPosition: function () {
      return c;
    }
  });
}