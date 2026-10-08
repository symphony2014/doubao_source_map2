// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'useElementMountMonitor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 316563
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  let o = e => {
    let {
      inView: t,
      reportOnInView: i,
      getElement: o,
      enable: l = true,
      checkMessageShowError: a,
      onError: s
    } = e;
    let c = useLatestRef_1.useLatestRef(l);
    let d = useLatestRef_1.useLatestRef(a);
    let u = useLatestRef_1.useLatestRef(s);
    let m = reactCoreLibraryReexport.useRef(t);
    m.current = m.current || t;
    reactCoreLibraryReexport.useLayoutEffect(() => () => {
      var e;
      var t;
      if (!c.current) {
        return;
      }
      let n = o();
      if (!n) {
        if ((e = u.current) !== null && e !== undefined) {
          e.call(u, {
            reason: "element_mount_error"
          });
        }
        return;
      }
      if (m.current || !i) {
        if ((t = d.current) !== null && t !== undefined) {
          t.call(d, {
            element: n,
            onError: u.current
          });
        }
      }
    }, []);
  };
  require.d(exports, {
    useElementMountMonitor: function () {
      return o;
    }
  });
}