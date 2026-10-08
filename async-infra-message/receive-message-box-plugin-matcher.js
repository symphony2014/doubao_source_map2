// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(869177) to 'receive-message-box-symbol'
// - Updated imported property 'R' to 'receiveMessageBox' (module 869177)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 990284
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("receive-message-box-symbol") /*id: 869177*/.receiveMessageBox,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    defaultReceiveMessageBoxPluginMatcher: function () {
      return i;
    }
  });
}