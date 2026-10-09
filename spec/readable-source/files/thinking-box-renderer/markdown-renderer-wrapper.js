// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fp' to 'MarkdownRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50161.8780fb41.js
         * chunkId: 50161
         * moduleId: 252805
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var katexCoreRenderer = require("katex-core-renderer") /*id: 811377*/;
  var prismCodeBlockHighlighterComponent = require("prism-code-block-highlighter-component") /*id: 360333*/;
  var mathInlineRenderer = require("math-inline-renderer") /*id: 358520*/;
  var markdownRendererModule = require("markdown-renderer-module") /*id: 4463*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      slots: i = {},
      autoFixSyntax: n = true,
      ...u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(markdownRendererModule.MdBoxComponent, {
      ref: t,
      slots: objectDefaultsUtil.defaults(i, {
        Tex: mathInlineRenderer.MathInlineRenderer,
        CodeBlockHighlighter: prismCodeBlockHighlighterComponent.PrismCodeBlockHighlighter
      }),
      autoFixSyntax: n && {
        katex: katexCoreRenderer.default,
        ...(isBooleanUtil.isBoolean(n) ? {} : n)
      },
      ...u
    });
  });
  require.d(exports, {
    MarkdownRenderer: function () {
      return u;
    }
  });
}