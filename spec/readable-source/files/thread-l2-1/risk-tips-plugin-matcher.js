// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(404650) to 'message-risk-tips-symbol'
// - Updated imported property 'E' to 'riskTipsSymbol' (module 404650)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 135445
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("message-risk-tips-symbol") /*id: 404650*/.riskTipsSymbol,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_TIPS
  };
  require.r(exports);
  require.d(exports, {
    receiveRiskTipsBlockPluginMatcher: function () {
      return l;
    }
  });
}