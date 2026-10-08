// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'BusinessLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18872.aedb6c81.js
         * chunkId: 18872
         * moduleId: 144317
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      className: t,
      children: n,
      samanthaLayoutProps: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      ...r,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: o("footer-I3c8rg", t),
        children: n
      })
    });
  };
  require.d(exports, {
    BusinessLayout: function () {
      return s;
    }
  });
}