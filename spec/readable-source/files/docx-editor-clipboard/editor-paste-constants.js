// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'contentTypes'
// - Renamed export 'j' to 'pasteConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 32743
         */
module.exports = function (module, exports, require) {
  var n;
  let i = ["application/x-editor-kit-business-key", "application/x-editor-kit-fragment", "application/x-vnd.google-docs-document-slice-clip+wrapped", "text/_notion-page-source-production", "text/_notion-text-production"];
  (n = {}).onPaste = "HTMLFormatOnPaste";
  n.shouldPaste = "HTMLFormatShouldPaste";
  let a = n;
  require.d(exports, {
    contentTypes: function () {
      return i;
    },
    pasteConfig: function () {
      return a;
    }
  });
}