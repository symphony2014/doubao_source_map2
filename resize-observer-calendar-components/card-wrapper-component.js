// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'CardWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13468.dccdd582.js
         * chunkId: 13468
         * moduleId: 201819
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var cardComponent_1 = require("card-component_1") /*id: 654098*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let n = reactCoreLibraryReexport.forwardRef(function (e, o) {
    let {
      classname: t,
      cardClassName: i,
      cardStyle: l,
      children: n,
      header: s,
      content: u,
      showContent: c = true,
      onClick: b
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: o,
      className: r("max-w-480 mt-8", t),
      onClick: () => b == null ? undefined : b(),
      children: reactJsxRuntimeCoreReexport.jsxs(cardComponent_1.Card, {
        className: r("container-MjdWYw", i),
        bodyStyle: l,
        children: [s, c && u, n]
      })
    });
  });
  require.d(exports, {
    CardWrapper: function () {
      return n;
    }
  });
}