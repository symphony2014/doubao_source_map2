// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'getRendererList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 254550
         */
module.exports = function (module, exports, require) {
  var authorRenderer = require("author-renderer") /*id: 937435*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  function a() {
    let e = [[docxInlineBlockRenderers.CollabConnector], [docxInlineBlockRenderers.NonEmptyLineDecorator], [docxInlineBlockRenderers.TextRevisionPlugin], [docxInlineBlockRenderers.SelectionRenderer], [authorRenderer.AuthorRenderer, {
      authorId: userEnvironmentUtils.getUserInfo().userId || ""
    }], [docxInlineBlockRenderers.InlineBlockRenderer], [docxInlineBlockRenderers.MentionDocRenderer], [docxInlineBlockRenderers.EquationRendererClass, {
      renderEquationContent: () => undefined,
      getPopupContainer: () => document.querySelector(".docx-popup-container")
    }], [docxInlineBlockRenderers.TextRevisionRenderer, {
      authorId: userEnvironmentUtils.getUserInfo().userId || ""
    }]];
    if (opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment()) {
      e.push([docxInlineBlockRenderers.TextCommentRenderer]);
    }
    return e;
  }
  require.d(exports, {
    getRendererList: function () {
      return a;
    }
  });
}