// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'markdownTokenClass'
// - Resolved require(687389) to 'markdown-token-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 380311
         */
module.exports = function (module, exports, require) {
  var markdownTokenClass = require("markdown-token-class") /*id: 687389*/;
  function i(t, e, r) {
    this.src = t;
    this.env = r;
    this.tokens = [];
    this.inlineMode = false;
    this.md = e;
  }
  i.prototype.Token = markdownTokenClass;
  module.exports = i;
}