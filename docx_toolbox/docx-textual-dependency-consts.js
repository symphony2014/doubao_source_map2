// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'textualDepProvider'
// - Renamed export 'm' to 'textualDepTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 698399
         */
module.exports = function (module, exports, require) {
  var o;
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("textual-dependency-manager");
  (o = {}).BLOCK_CONTENT = "block_content";
  o.CAPTION = "caption";
  let l = o;
  require.d(exports, {
    textualDepProvider: function () {
      return i;
    },
    textualDepTypes: function () {
      return l;
    }
  });
}