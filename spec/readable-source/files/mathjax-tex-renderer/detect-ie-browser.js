// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'getUserAgentString'
// - Resolved require(951061) to 'get-user-agent-string'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 159123
         */
module.exports = function (module, exports, require) {
  var getUserAgentString = require("get-user-agent-string") /*id: 951061*/;
  module.exports = /MSIE|Trident/.test(getUserAgentString);
}