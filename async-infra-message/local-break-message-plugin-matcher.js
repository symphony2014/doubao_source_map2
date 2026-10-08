// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(773327) to 'local-break-symbol'
// - Updated imported property '_' to 'localBreakSymbol' (module 773327)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 390624
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("local-break-symbol") /*id: 773327*/.localBreakSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    localBreakMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}