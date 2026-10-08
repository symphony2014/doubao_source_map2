// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'webidlIteratorPolyfill'
// - Resolved require(474361) to 'webidl-iterator-polyfill'
// - Resolved require(841154) to 'dom-interface-setup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 262498
         */
module.exports = function (module, exports, require) {
  var webidlIteratorPolyfill = require("webidl-iterator-polyfill") /*id: 474361*/;
  require("dom-interface-setup") /*id: 841154*/;
  module.exports = webidlIteratorPolyfill;
}