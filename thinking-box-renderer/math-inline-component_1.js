// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'MathInline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 452.57f081b0.js
         * chunkId: 452
         * moduleId: 131370
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = reactCoreLibraryReexport.forwardRef(function (t, e) {
    let {
      className: n,
      style: l,
      tex: i,
      html: s
    } = t;
    let c = reactCoreLibraryReexport.useMemo(() => /^[a-zA-Z0-9\s]+$/.test(i.trim()), [i]);
    let d = !!(s == null ? undefined : s.includes("data-mjx-error"));
    let m = !isUndefinedCheck.isUndefined(s) && !d;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      ref: e,
      className: o("container-ff_XWT", n, "math-inline", {
        "single-ClvP1H": c,
        "error-aj2xi1": d
      }),
      style: l,
      dangerouslySetInnerHTML: m ? {
        __html: s
      } : undefined,
      "data-custom-copy-text": `\\(${i}\\)`,
      children: m ? null : i
    });
  });
  require.d(exports, {
    MathInline: function () {
      return i;
    }
  });
}