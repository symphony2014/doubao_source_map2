// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'AutoSpacingText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 213046
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var cjkLatinSpacingDetector = require("cjk-latin-spacing-detector") /*id: 279300*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e) {
    let {
      text: i
    } = e;
    let n = cjkLatinSpacingDetector.getSpacingIndices(i);
    let l = [];
    let s = 0;
    for (let e of n) {
      if (e - s > 0) {
        l.push(reactJsxRuntimeCoreReexport.jsx("span", {
          children: i.substring(s, e)
        }));
      }
      l.push(reactJsxRuntimeCoreReexport.jsx("span", {
        className: "auto-space",
        children: i.substr(e, 1)
      }));
      s = e + 1;
    }
    if (i.length > s) {
      l.push(reactJsxRuntimeCoreReexport.jsx("span", {
        children: i.substring(s)
      }));
    }
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: l
    });
  }
  require.d(exports, {
    AutoSpacingText: function () {
      return l;
    }
  });
}