// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PG' to 'useIsNarrowScreen'
// - Renamed export 'iN' to 'isNarrowScreen'
// - Renamed export 'lj' to 'useIsMediumScreen'
// - Renamed export 'mF' to 'subscribeMediaChanges'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 221846
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  let o = {
    _isWideClientScreen: undefined,
    _mediaQueryList: undefined,
    get mediaQueryList() {
      var a;
      return o._mediaQueryList ??= (a = window) === null || a === undefined ? undefined : a.matchMedia("(min-width:600px)");
    },
    get isWideClientScreen() {
      if (typeof window == "undefined") {
        return true;
      }
      return o._isWideClientScreen ??= o.mediaQueryList.matches;
    }
  };
  let u = () => !o.isWideClientScreen;
  let c = () => {
    let e = e => o._isWideClientScreen = e.matches;
    if (o.mediaQueryList.addEventListener) {
      o.mediaQueryList.addEventListener("change", e);
      return () => o.mediaQueryList.removeEventListener("change", e);
    } else {
      o.mediaQueryList.addListener(e);
      return () => o.mediaQueryList.removeListener(e);
    }
  };
  let d = reactCoreLibraryReexport.createContext(false);
  d.Provider;
  let h = () => {
    let e = reactCoreLibraryReexport.useContext(d);
    return useMediaQueryHook.useMediaQuery({
      maxWidth: 599
    }, e);
  };
  let m = () => useMediaQueryHook.useMediaQuery({
    maxWidth: 800
  });
  require.d(exports, {
    useIsNarrowScreen: function () {
      return h;
    },
    isNarrowScreen: function () {
      return u;
    },
    useIsMediumScreen: function () {
      return m;
    },
    subscribeMediaChanges: function () {
      return c;
    }
  });
}