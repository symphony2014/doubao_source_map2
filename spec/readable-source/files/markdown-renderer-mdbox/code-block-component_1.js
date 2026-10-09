// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'CodeBlock'
// - Renamed export 'Z' to 'CodeBlock_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 822392
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      language: t,
      code: r,
      className: n,
      style: a,
      dark: o = false
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("pre", {
      className: l(t && `language-${t}`, "light-scrollbar-kll93z", n, {
        "dark-wUXLO5": o
      }),
      style: a,
      children: reactJsxRuntimeCoreReexport.jsx("code", {
        children: r
      })
    });
  };
  var o = a;
  require.d(exports, {
    CodeBlock: function () {
      return a;
    },
    CodeBlock_1: function () {
      return o;
    }
  });
}