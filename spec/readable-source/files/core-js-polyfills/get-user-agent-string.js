// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(780500) to 'get-global-object'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 951061
         */
module.exports = function (module, exports, require) {
  var e = require("get-global-object") /*id: 780500*/.navigator;
  var o = e && e.userAgent;
  module.exports = o ? String(o) : "";
}