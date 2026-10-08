// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'ScrollIntoViewWrap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 180637
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: o,
      children: s,
      enabled: a = false,
      onClick: u,
      options: c
    } = e;
    let d = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        var e;
        if ((e = d.current) !== null && e !== undefined) {
          e.scrollIntoView(c);
        }
      }
    }, [a]);
    let f = reactCoreLibraryReexport.useCallback(e => {
      if (isFunctionUtil_1.isFunction(t)) {
        t(e);
      } else if (t) {
        t.current = e;
      }
      d.current = e;
    }, []);
    if (isFunctionUtil_1.isFunction(s)) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: s(f)
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: f,
        className: n,
        style: o,
        onClick: u,
        children: s
      });
    }
  });
  require.d(exports, {
    ScrollIntoViewWrap: function () {
      return o;
    }
  });
}