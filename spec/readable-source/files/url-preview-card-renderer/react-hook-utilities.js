// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZR' to 'useLocaleContext'
// - Renamed export 'U8' to 'useIsUnmounted'
// - Renamed export 'Y$' to 'useIdleTimer'
// - Renamed export 'C6' to 'useIsFirstRender'
// - Renamed export 'NW' to 'useForceUpdate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 306319
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i() {
    let e = reactCoreLibraryReexport.useRef(true);
    if (e.current) {
      e.current = false;
      return true;
    } else {
      return e.current;
    }
  }
  let o = typeof window.requestIdleCallback == "function" && typeof window.cancelIdleCallback == "function";
  function _(e = 2000) {
    let t = reactCoreLibraryReexport.useRef(null);
    let n = () => {
      if (t.current !== null) {
        if (o) {
          window.cancelIdleCallback(t.current);
          t.current = null;
          return;
        }
        clearTimeout(t.current);
      }
    };
    reactCoreLibraryReexport.useEffect(() => n, []);
    return {
      requestTimer: r => {
        n();
        if (o) {
          t.current = window.requestIdleCallback(() => {
            r();
          }, {
            timeout: e
          });
          return;
        }
        t.current = setTimeout(() => {
          r();
        }, 16);
      },
      cancelTimer: n
    };
  }
  let a = e => (e + 1) % 1000000;
  function E() {
    let [, e] = reactCoreLibraryReexport.useReducer(a, 0);
    return e;
  }
  function l() {
    let e = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => () => {
      e.current = true;
    }, []);
    return e.current;
  }
  var i18nLocaleContextProvider = require("i18n-locale-context-provider") /*id: 194449*/;
  let T = () => {
    let e = reactCoreLibraryReexport.useContext(i18nLocaleContextProvider.localeContext);
    if (e === undefined) {
      throw Error("useConfig must be used within a ConfigProvider");
    }
    return e;
  };
  require.d(exports, {
    useLocaleContext: function () {
      return T;
    },
    useIsUnmounted: function () {
      return l;
    },
    useIdleTimer: function () {
      return _;
    },
    useIsFirstRender: function () {
      return i;
    },
    useForceUpdate: function () {
      return E;
    }
  });
}