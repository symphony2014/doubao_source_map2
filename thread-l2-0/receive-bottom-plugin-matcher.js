// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(374289) to 'infra-receive-bottom-symbol'
// - Updated imported property 'L' to 'defaultReceiveSymbol' (module 374289)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 283514
         */
module.exports = function (module, exports, require) {
  let n = {
    pluginIdentifier: require("infra-receive-bottom-symbol") /*id: 374289*/.defaultReceiveSymbol,
    matchPlugin: e => true
  };
  require.r(exports);
  require.d(exports, {
    defaultReceiveMessageBottomPluginMatcher: function () {
      return n;
    }
  });
}