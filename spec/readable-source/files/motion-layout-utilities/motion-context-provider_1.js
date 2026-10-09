// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'MotionProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 483976
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var createContextModule_1 = require("create-context-module_1") /*id: 324875*/;
  let o = reactCoreLibraryReexport.createContext(null);
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  var useLayoutEffectSsr = require("use-layout-effect-ssr") /*id: 730770*/;
  let u = t => !t.isLayoutDirty && t.willUpdate(false);
  let h = t => t === true;
  let c = t => h(t === true) || t === "id";
  let d = t => {
    let {
      children: e,
      id: i,
      inherit: d = true
    } = t;
    let p = reactCoreLibraryReexport.useContext(createContextModule_1.createContext);
    let f = reactCoreLibraryReexport.useContext(o);
    let [m, g] = function () {
      let t = function () {
        let t = reactCoreLibraryReexport.useRef(false);
        useLayoutEffectSsr.useSafeLayoutEffect(() => {
          t.current = true;
          return () => {
            t.current = false;
          };
        }, []);
        return t;
      }();
      let [e, i] = reactCoreLibraryReexport.useState(0);
      let n = reactCoreLibraryReexport.useCallback(() => {
        if (t.current) {
          i(e + 1);
        }
      }, [e]);
      return [reactCoreLibraryReexport.useCallback(() => frameloopSchedulerUtils_1.scheduleFrame.postRender(n), [n]), e];
    }();
    let v = reactCoreLibraryReexport.useRef(null);
    let y = p.id || f;
    if (v.current === null) {
      if (c(d) && y) {
        i = i ? y + "-" + i : y;
      }
      v.current = {
        id: i,
        group: h(d) && p.group || function () {
          let t = new Set();
          let e = new WeakMap();
          let i = () => t.forEach(u);
          return {
            add: n => {
              t.add(n);
              e.set(n, n.addEventListener("willUpdate", i));
            },
            remove: n => {
              t.delete(n);
              let r = e.get(n);
              if (r) {
                r();
                e.delete(n);
              }
              i();
            },
            dirty: i
          };
        }()
      };
    }
    let x = reactCoreLibraryReexport.useMemo(() => ({
      ...v.current,
      forceRender: m
    }), [g]);
    return reactJsxRuntimeCoreReexport.jsx(createContextModule_1.createContext.Provider, {
      value: x,
      children: e
    });
  };
  require.d(exports, {
    MotionProvider: function () {
      return d;
    }
  });
}