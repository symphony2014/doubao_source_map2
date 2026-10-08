// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(951061) to 'get-user-agent-string'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 354038
         */
module.exports = function (module, exports, require) {
  var r = require("get-user-agent-string") /*id: 951061*/.match(/AppleWebKit\/(\d+)\./);
  module.exports = !!r && +r[1];
}