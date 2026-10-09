// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'IdRegistryProvider'
// - Renamed export 'T' to 'useIdRegistered'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32845.1b4bf491.js
         * chunkId: 32845
         * moduleId: 683140
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.createContext(null);
  let l = e => {
    let {
      children: t,
      noIdItemDefault: r = false
    } = e;
    let o = reactCoreLibraryReexport.useRef(new Map());
    let l = () => {
      o.current.clear();
    };
    let a = e => e ? o.current.get(e) === true : r;
    let h = e => {
      if (e) {
        o.current.set(e, true);
      }
    };
    let d = reactCoreLibraryReexport.useMemo(() => ({
      storeRef: o,
      reset: l,
      get: a,
      set: h
    }), []);
    reactCoreLibraryReexport.useEffect(() => () => {
      o.current.clear();
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(s.Provider, {
      value: d,
      children: t
    });
  };
  function a(e, t) {
    let r = reactCoreLibraryReexport.useContext(s);
    let n = reactUseRefValue.useRefValue(t != null && t);
    reactCoreLibraryReexport.useEffect(() => {
      if (r && t && e) {
        r.set(e);
      }
    }, [e, t]);
    if (r) {
      return r.get(e) || t;
    } else {
      return n;
    }
  }
  require.d(exports, {
    IdRegistryProvider: function () {
      return l;
    },
    useIdRegistered: function () {
      return a;
    }
  });
}