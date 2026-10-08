// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'regexpMatchSymbolCheckHelper'
// - Resolved require(573964) to 'regexp-match-symbol-check-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 494821
         */
module.exports = function (module, exports, require) {
  var regexpMatchSymbolCheckHelper = require("regexp-match-symbol-check-helper") /*id: 573964*/;
  var a = TypeError;
  module.exports = function (e) {
    if (regexpMatchSymbolCheckHelper(e)) {
      throw new a("The method doesn't accept regular expressions");
    }
    return e;
  };
}