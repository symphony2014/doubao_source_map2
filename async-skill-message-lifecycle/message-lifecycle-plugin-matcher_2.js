// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(763929) to 'crowd-test-message-lifecycle_1'
// - Updated imported property 'L' to 'messageLifecycle' (module 763929)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 673084
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("crowd-test-message-lifecycle_1") /*id: 763929*/.messageLifecycle,
    matchPlugin: () => true
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return i;
    }
  });
}