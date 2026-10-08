// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(537990) to 'string-iterator-polyfill'
// - Resolved require(733332) to 'array-from-polyfill-patch'
// - Renamed variable 'r' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 902836
         */
module.exports = function (module, exports, require) {
  require("string-iterator-polyfill") /*id: 537990*/;
  require("array-from-polyfill-patch") /*id: 733332*/;
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  module.exports = emptyModuleStub_1.Array.from;
}