// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useLocalStorage'
// - Renamed export 'Z' to 'useLocalStorage_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 296239
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let a = {
    getItem: () => {},
    setItem: () => {},
    removeItem: () => {}
  };
  function o(e, t, n, o) {
    n ||= typeof window == "undefined" ? a : storageWrapperWithFallback.LocalStorageWrapper;
    let l = () => {
      try {
        let i = n.getItem(e);
        if (typeof i != "string") {
          n.setItem(e, o ? String(t) : JSON.stringify(t));
          return t;
        }
        if (o) {
          return i;
        } else {
          return JSON.parse(i);
        }
      } catch (e) {
        return t;
      }
    };
    let [s, c] = reactCoreLibraryReexport.useState(() => typeof window == "undefined" ? t : l());
    let u = reactCoreLibraryReexport.useCallback(t => {
      if (t === undefined) {
        n.removeItem(e);
      } else {
        if (typeof t == "function") {
          t = t(l());
        }
        n.setItem(e, o ? String(t) : JSON.stringify(t));
      }
      return c(t);
    }, [c, o]);
    reactCoreLibraryReexport.useEffect(() => {
      let i = i => {
        let {
          key: r,
          newValue: a,
          storageArea: l
        } = i;
        if (r === e && l === n) {
          try {
            if (typeof a == "string") {
              c(o ? a : JSON.parse(a));
            } else {
              c(t);
            }
          } catch (e) {
            c(t);
          }
        }
      };
      window.addEventListener("storage", i, false);
      return () => {
        window.removeEventListener("storage", i, false);
      };
    }, [e, t, n, o]);
    return [s, u];
  }
  exports.useLocalStorage_1 = o;
  require.d(exports, {
    useLocalStorage: function () {
      return o;
    }
  });
}