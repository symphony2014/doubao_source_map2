// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(103109) to 'infra-receive-message-symbol'
// - Updated imported property 'j' to 'infraMessageSuggest' (module 103109)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-suggest.ce48dc2b.js
         * chunkId: 32179
         * moduleId: 843666
         */
module.exports = function (module, exports, require) {
  let r = {
    pluginIdentifier: require("infra-receive-message-symbol") /*id: 103109*/.infraMessageSuggest,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    defaultReceiveMessageSuggestPluginMatcher: function () {
      return r;
    }
  });
}