// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(905844) to 'unicode-string-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 472347
         */
module.exports = function (module, exports, require) {
  var n = require("unicode-string-utils") /*id: 905844*/.charAt;
  module.exports = function (t, r, e) {
    return r + (e ? n(t, r).length : 1);
  };
}