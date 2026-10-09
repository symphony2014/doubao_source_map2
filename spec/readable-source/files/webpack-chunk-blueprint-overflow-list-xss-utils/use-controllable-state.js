// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useControllableState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 584147
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseLayoutEffectSafe = require("react-use-layout-effect-safe") /*id: 245652*/;
  var a = (r ||= require.t(reactCoreLibraryReexport, 2))[" useInsertionEffect ".trim().toString()] || reactUseLayoutEffectSafe.useLayoutEffect;
  function s(e) {
    let {
      prop: t,
      defaultProp: n,
      onChange: r = () => {},
      caller: o
    } = e;
    let [s, u, c] = function (e) {
      let {
        defaultProp: t,
        onChange: n
      } = e;
      let [r, o] = reactCoreLibraryReexport.useState(t);
      let s = reactCoreLibraryReexport.useRef(r);
      let u = reactCoreLibraryReexport.useRef(n);
      a(() => {
        u.current = n;
      }, [n]);
      reactCoreLibraryReexport.useEffect(() => {
        if (s.current !== r) {
          var e;
          if ((e = u.current) !== null && e !== undefined) {
            e.call(u, r);
          }
          s.current = r;
        }
      }, [r, s]);
      return [r, o, u];
    }({
      defaultProp: n,
      onChange: r
    });
    let l = t !== undefined;
    let f = l ? t : s;
    {
      let e = reactCoreLibraryReexport.useRef(t !== undefined);
      reactCoreLibraryReexport.useEffect(() => {
        e.current;
        e.current = l;
      }, [l, o]);
    }
    return [f, reactCoreLibraryReexport.useCallback(e => {
      if (l) {
        let r = typeof e == "function" ? e(t) : e;
        if (r !== t) {
          var n;
          if ((n = c.current) !== null && n !== undefined) {
            n.call(c, r);
          }
        }
      } else {
        u(e);
      }
    }, [l, t, u, c])];
  }
  Symbol("RADIX:SYNC_STATE");
  require.d(exports, {
    useControllableState: function () {
      return s;
    }
  });
}