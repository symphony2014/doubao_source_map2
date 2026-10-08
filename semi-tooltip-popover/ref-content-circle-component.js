// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'RefContentCircle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 595358
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      page: n,
      style: o,
      onMouseEnter: l,
      onMouseLeave: a,
      onClick: s,
      ...d
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      ref: t,
      ...d,
      "data-testid": "ref_content_circle",
      "data-validate-id": "ref_content_circle",
      className: r("ref_content_circle", "container-HykiTl", {
        "short-lPkW2w": n < 100,
        "clickable-gzGbFG": !!s
      }),
      style: o,
      onClick: () => s == null ? undefined : s(),
      onMouseEnter: () => l == null ? undefined : l(),
      onMouseLeave: () => a == null ? undefined : a(),
      children: n > 999 ? "999+" : n
    });
  });
  require.d(exports, {
    RefContentCircle: function () {
      return a;
    }
  });
}