// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'useObservableState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 150624
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var observableTypeCheck = require("observable-type-check") /*id: 279182*/;
  function l(e) {
    if (observableTypeCheck.isObservable(e)) {
      return e;
    } else {
      return e();
    }
  }
  function a(e, n, i = false) {
    let o = reactCoreLibraryReexport.useRef();
    let a = reactCoreLibraryReexport.useRef();
    let s = reactCoreLibraryReexport.useRef();
    o.current ||= l(e);
    s.current ||= n;
    a.current ||= s.current();
    let [c, u] = reactCoreLibraryReexport.useState(a.current);
    let d = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (s.current) {
        let e = s.current();
        if (e !== a.current) {
          a.current = e;
          u(e);
        }
      }
      if (o.current) {
        d.current = o.current.subscribe(u);
      }
      return () => {
        var e;
        if ((e = d.current) !== null && e !== undefined) {
          e.unsubscribe();
        }
      };
    }, []);
    let h = reactCoreLibraryReexport.useRef();
    if (i) {
      h.current ||= (e, n) => {
        var i;
        if ((i = d.current) !== null && i !== undefined) {
          i.unsubscribe();
        }
        o.current = l(e);
        d.current = o.current.subscribe(u);
        u(n);
      };
      return [c, h.current];
    } else {
      return c;
    }
  }
  require.d(exports, {
    useObservableState: function () {
      return a;
    }
  });
}