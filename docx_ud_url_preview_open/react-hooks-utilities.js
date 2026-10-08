// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZR' to 'useConfig'
// - Renamed export 'U8' to 'useIsUnmounted'
// - Renamed export 'Y$' to 'useIdleTimer'
// - Renamed export 'C6' to 'useFirstRender'
// - Renamed export 'NW' to 'useForceUpdate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 810817
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r() {
    let e = reactCoreLibraryReexport.useRef(true);
    if (e.current) {
      e.current = false;
      return true;
    } else {
      return e.current;
    }
  }
  let o = typeof window.requestIdleCallback == "function" && typeof window.cancelIdleCallback == "function";
  function s(e = 2000) {
    let t = reactCoreLibraryReexport.useRef(null);
    let i = () => {
      if (t.current !== null) {
        if (o) {
          window.cancelIdleCallback(t.current);
          t.current = null;
          return;
        }
        clearTimeout(t.current);
      }
    };
    reactCoreLibraryReexport.useEffect(() => i, []);
    return {
      requestTimer: n => {
        i();
        if (o) {
          t.current = window.requestIdleCallback(() => {
            n();
          }, {
            timeout: e
          });
          return;
        }
        t.current = setTimeout(() => {
          n();
        }, 16);
      },
      cancelTimer: i
    };
  }
  let l = e => (e + 1) % 1000000;
  function a() {
    let [, e] = reactCoreLibraryReexport.useReducer(l, 0);
    return e;
  }
  function c() {
    let e = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => () => {
      e.current = true;
    }, []);
    return e.current;
  }
  var i18nLocaleContextProvider = require("i18n-locale-context-provider") /*id: 194449*/;
  let g = () => {
    let e = reactCoreLibraryReexport.useContext(i18nLocaleContextProvider.localeContext);
    if (e === undefined) {
      throw Error("useConfig must be used within a ConfigProvider");
    }
    return e;
  };
  require.d(exports, {
    useConfig: function () {
      return g;
    },
    useIsUnmounted: function () {
      return c;
    },
    useIdleTimer: function () {
      return s;
    },
    useFirstRender: function () {
      return r;
    },
    useForceUpdate: function () {
      return a;
    }
  });
}