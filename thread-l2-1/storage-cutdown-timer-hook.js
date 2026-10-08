// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'useStorageCutdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 993094
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = "STORAGE_CUTDOWN_EVENT";
  function r(e, t, n) {
    let [r, o] = reactCoreLibraryReexport.useState(60);
    let a = reactCoreLibraryReexport.useMemo(() => Date.now(), []);
    let s = reactCoreLibraryReexport.useRef({
      handler: undefined,
      id: ""
    });
    s.current.handler = n;
    s.current.id = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        return;
      }
      let e = () => {
        window.localStorage.setItem(l, s.current.id);
        setTimeout(() => {
          window.localStorage.removeItem(l);
        }, 100);
      };
      let n = setInterval(() => {
        let t = Math.round((60000 - (Date.now() - a)) / 1000);
        o(Math.max(t, 0));
        if (t <= 0) {
          var i;
          var l;
          clearInterval(n);
          e();
          if ((l = s.current) !== null && l !== undefined && (i = l.handler) !== null && i !== undefined) {
            i.call(l);
          }
        }
      }, 1000);
      let i = e => {
        if ((e == null ? undefined : e.key) === l && (e == null ? undefined : e.newValue) === s.current.id) {
          clearInterval(n);
        }
      };
      window.addEventListener("storage", i);
      return () => {
        window.removeEventListener("storage", i);
        clearInterval(n);
      };
    }, [t]);
    if (r) {
      if (r >= 10) {
        return `${r}`;
      } else {
        return `0${r}`;
      }
    } else {
      return "";
    }
  }
  require.d(exports, {
    useStorageCutdown: function () {
      return r;
    }
  });
}