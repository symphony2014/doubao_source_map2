// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(19652) to 'credit-msg-lifecycle-symbol'
// - Updated imported property 'b' to 'creditMsgLifecycle' (module 19652)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 481172
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("credit-msg-lifecycle-symbol") /*id: 19652*/.creditMsgLifecycle,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    CreditMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}