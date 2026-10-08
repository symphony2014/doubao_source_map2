// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ScrollViewProvider'
// - Renamed export 'l' to 'useScrollView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 611454
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.createContext(null);
  let l = e => {
    let {
      containerRef: t,
      controller: n,
      children: i
    } = e;
    let {
      width: l,
      height: a
    } = resizeObserverHooks.useResizeObserverEx({
      ref: t
    });
    return reactJsxRuntimeCoreReexport.jsx(s.Provider, {
      value: {
        ref: t,
        width: l,
        height: a,
        ...n
      },
      children: i
    });
  };
  let a = () => {
    let e = reactCoreLibraryReexport.useContext(s);
    if (!e) {
      throw Error("require ScrollViewContext when calling useScrollView");
    }
    return e;
  };
  require.d(exports, {
    ScrollViewProvider: function () {
      return l;
    },
    useScrollView: function () {
      return a;
    }
  });
}