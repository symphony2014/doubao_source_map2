// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(484041) to 'chat-message-fp-params'
// - Updated imported property 'T' to 'messageFpParams' (module 484041)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 934864
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("chat-message-fp-params") /*id: 484041*/.messageFpParams,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    messageFpParamsMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}