// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ThemedGlobalStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 640334
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var emotionCssUtilities = require("emotion-css-utilities") /*id: 385765*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e) {
    let {
      styles: t,
      defaultTheme: n = {}
    } = e;
    let o = typeof t == "function" ? e => t(e == null || Object.keys(e).length === 0 ? n : e) : t;
    return reactJsxRuntimeCoreReexport.jsx(emotionCssUtilities.GlobalStyles, {
      styles: o
    });
  }
  require.d(exports, {
    ThemedGlobalStyles: function () {
      return o;
    }
  });
}