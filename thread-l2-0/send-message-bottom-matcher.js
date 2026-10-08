// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(913505) to 'infra-send-message-bottom-symbol'
// - Updated imported property 'Z' to 'defaultSendMsgBottom' (module 913505)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 874806
         */
module.exports = function (module, exports, require) {
  let n = {
    pluginIdentifier: require("infra-send-message-bottom-symbol") /*id: 913505*/.defaultSendMsgBottom,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    defaultSendMessageBottomPluginMatcher: function () {
      return n;
    }
  });
}