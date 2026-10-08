// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 856124
         */
module.exports = function (module, exports, require) {
  var n = require("global-object-polyfill") /*id: 515719*/.navigator;
  var o = n && n.userAgent;
  module.exports = o ? String(o) : "";
}