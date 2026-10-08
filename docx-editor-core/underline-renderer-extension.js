// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'UnderlineRendererExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 669460
         */
module.exports = function (module, exports, require) {
  var underlineRenderer = require("underline-renderer") /*id: 150393*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  class l extends underlineRenderer.UnderlineRenderer {
    render(e) {
      e.style.textDecorationSkipInk = "none";
      e.style.textUnderlineOffset = editorTextBlockUtilities.getEquationIndent();
      return super.render(e);
    }
  }
  require.d(exports, {
    UnderlineRendererExtension: function () {
      return l;
    }
  });
}