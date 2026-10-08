// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(856124) to 'user-agent-string-extractor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 875114
         */
module.exports = function (module, exports, require) {
  var n = require("user-agent-string-extractor") /*id: 856124*/.match(/firefox\/(\d+)/i);
  module.exports = !!n && +n[1];
}