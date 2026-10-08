// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathInlineRenderer'
// - Resolved require(358520) to 'math-inline-renderer'
// - Renamed variable 'a' to 'reactKatexLatexRenderer'
// - Resolved require(75906) to 'react-katex-latex-renderer'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'xY' to 'MathInlineRenderer' (module 358520)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 452.57f081b0.js
         * chunkId: 452
         * moduleId: 809253
         */
module.exports = function (module, exports, require) {
  var mathInlineRenderer = require("math-inline-renderer") /*id: 358520*/;
  var reactKatexLatexRenderer = require("react-katex-latex-renderer") /*id: 75906*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = t => reactJsxRuntimeCoreReexport.jsx(reactKatexLatexRenderer.KatexTex, {
    ...t,
    katexOptions: {
      strict: true,
      throwOnError: true
    },
    fallback: reactJsxRuntimeCoreReexport.jsx(mathInlineRenderer.MathInlineRenderer, {
      ...t
    })
  });
  exports.default = o;
  require.r(exports);
  require.d(exports, {
    KatexMathjaxTex: function () {
      return o;
    }
  });
}