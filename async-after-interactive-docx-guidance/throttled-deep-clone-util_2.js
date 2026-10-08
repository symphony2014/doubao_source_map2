// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledCloneDeep'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 739988
         */
module.exports = function (module, exports, require) {
  var deepCloneUtil_1 = require("deep-clone-util_1") /*id: 793497*/;
  var r = require("throttled-arg-verify-util") /*id: 680343*/.throttledArgVerify(function (e, t, n, r) {
    deepCloneUtil_1.cloneDeep(e, t, n, r);
  });
  exports.throttledCloneDeep = r;
}