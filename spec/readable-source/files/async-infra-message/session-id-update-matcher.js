// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(516930) to 'session-id-update-symbol'
// - Updated imported property 'w' to 'sessionIdUpdate' (module 516930)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 176067
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("session-id-update-symbol") /*id: 516930*/.sessionIdUpdate,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    sessionIdUpdateMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}