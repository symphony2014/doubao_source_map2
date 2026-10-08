// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(616556) to 'array-is-array-polyfill-init'
// - Renamed variable 'r' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 765515
         */
module.exports = function (module, exports, require) {
  require("array-is-array-polyfill-init") /*id: 616556*/;
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  module.exports = emptyModuleStub_1.Array.isArray;
}