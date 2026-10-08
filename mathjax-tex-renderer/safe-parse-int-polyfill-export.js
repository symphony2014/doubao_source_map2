// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(968811) to 'safe-parse-int-polyfill_1'
// - Renamed variable 'r' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 741551
         */
module.exports = function (module, exports, require) {
  require("safe-parse-int-polyfill_1") /*id: 968811*/;
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  module.exports = emptyModuleStub_1.parseInt;
}