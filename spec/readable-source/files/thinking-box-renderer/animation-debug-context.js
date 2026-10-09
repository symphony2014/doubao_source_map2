// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M8' to 'AnimationDebugProv'
// - Renamed export 'W0' to 'useAnimationDebug'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50161.8780fb41.js
         * chunkId: 50161
         * moduleId: 60445
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = () => {
    let [e, t] = reactCoreLibraryReexport.useState(1);
    let [i, l] = reactCoreLibraryReexport.useState(false);
    let [a, r] = reactCoreLibraryReexport.useState(1);
    let [o, s] = reactCoreLibraryReexport.useState(false);
    let d = reactCoreLibraryReexport.useCallback(t => t / e, [e]);
    return {
      animationScale: e,
      setAnimationScale: t,
      getAnimationDuration: d,
      showBorders: i,
      setShowBorders: l,
      keyForRemountDebug: a,
      triggerRemount: reactCoreLibraryReexport.useCallback(() => {
        r(e => (e + 1) % 1000);
      }, []),
      currentCollapsedContentOverflowing: o,
      setCurrentCollapsedContentOverflowing: s
    };
  };
  let r = {
    animationScale: 1,
    setAnimationScale: () => undefined,
    getAnimationDuration: e => e,
    showBorders: false,
    setShowBorders: () => undefined,
    keyForRemountDebug: 1,
    triggerRemount: () => undefined,
    currentCollapsedContentOverflowing: false,
    setCurrentCollapsedContentOverflowing: () => undefined
  };
  let o = reactCoreLibraryReexport.createContext(null);
  let s = e => {
    let {
      children: t
    } = e;
    let i = a();
    return reactJsxRuntimeCoreReexport.jsx(o.Provider, {
      value: i,
      children: t
    });
  };
  let d = () => {
    let e = reactCoreLibraryReexport.useContext(o);
    return e ?? r;
  };
  require.d(exports, {
    AnimationDebugProv: function () {
      return s;
    },
    useAnimationDebug: function () {
      return d;
    }
  });
}