// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'MetaRenderPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-common-meta-render-plugin.cced7776.js
         * chunkId: 26875
         * moduleId: 305922
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function i(e) {
    let {
      plugins: t,
      ...n
    } = e;
    let i = t.find(e => e.match(n));
    let a = i == null ? undefined : i.pluginRender;
    if (a) {
      return reactJsxRuntimeCoreReexport.jsx(a, {
        ...n
      });
    } else {
      return null;
    }
  }
  require.d(exports, {
    MetaRenderPlugin: function () {
      return i;
    }
  });
}