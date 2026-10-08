// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(149385) to 'infra-message-box-symbol_1'
// - Updated imported property 'X' to 'messageBoxSymbol' (module 149385)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 423246
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("infra-message-box-symbol_1") /*id: 149385*/.messageBoxSymbol,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    defaultSendMessageBoxPluginMatcher: function () {
      return i;
    }
  });
}