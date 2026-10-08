// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xY' to 'MathInlineRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 452.57f081b0.js
         * chunkId: 452
         * moduleId: 358520
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var mathjaxLatexRenderer = require("mathjax-latex-renderer") /*id: 700206*/;
  var mathInlineComponent_1 = require("math-inline-component_1") /*id: 131370*/;
  var dompurifySanitizerWrapper = require("dompurify-sanitizer-wrapper") /*id: 37494*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = t => {
    let {
      className: e,
      style: n,
      tex: i,
      mode: s
    } = t;
    let c = reactCoreLibraryReexport.useMemo(() => dompurifySanitizerWrapper.sanitizeContent(mathjaxLatexRenderer.renderLatex(i)), [i]);
    return reactJsxRuntimeCoreReexport.jsx(mathInlineComponent_1.MathInline, {
      className: e,
      style: n,
      tex: i,
      html: c
    });
  };
  require.d(exports, {
    MathInlineRenderer: function () {
      return i;
    }
  });
}