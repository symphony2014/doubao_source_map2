// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'getEditorPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 723295
         */
module.exports = function (module, exports, require) {
  var editorBoldRendererPlugin = require("editor-bold-renderer-plugin") /*id: 454650*/;
  var editorItalicPlugin = require("editor-italic-plugin") /*id: 566226*/;
  var strikethroughRenderer = require("strikethrough-renderer") /*id: 728874*/;
  var authorRenderer = require("author-renderer") /*id: 937435*/;
  var inlineCodeRenderer_1 = require("inline-code-renderer_1") /*id: 919823*/;
  require("flow-doc-preview-component_1") /*id: 800509*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var underlineRendererExtension = require("underline-renderer-extension") /*id: 669460*/;
  function f() {
    let e = [[docxInlineBlockRenderers.CollabConnector], [docxInlineBlockRenderers.NonEmptyLineDecorator], [docxInlineBlockRenderers.TextRevisionPlugin], [docxInlineBlockRenderers.SelectionRenderer], [editorBoldRendererPlugin.BoldRenderer], [editorItalicPlugin.ItalicPlugin], [underlineRendererExtension.UnderlineRendererExtension], [strikethroughRenderer.StrikethroughRender], [authorRenderer.AuthorRenderer, {
      authorId: userEnvironmentUtils.getUserInfo().userId || ""
    }], [docxInlineBlockRenderers.InlineBlockRenderer], [docxInlineBlockRenderers.MentionDocRenderer], [docxInlineBlockRenderers.EquationRendererClass, {
      renderEquationContent: () => undefined,
      getPopupContainer: () => document.querySelector(".docx-popup-container")
    }], [docxInlineBlockRenderers.TextRevisionRenderer, {
      authorId: userEnvironmentUtils.getUserInfo().userId || ""
    }], [inlineCodeRenderer_1.InlineCodeRenderer], [docxInlineBlockRenderers.LinkRenderer], [docxInlineBlockRenderers.TextHighlightRenderer], [docxInlineBlockRenderers.TextHighlightBackgroundRenderer]];
    if (opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment()) {
      e.push([docxInlineBlockRenderers.TextCommentRenderer]);
    }
    return e;
  }
  require.d(exports, {
    getEditorPlugins: function () {
      return f;
    }
  });
}