// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(942645) to 'chat-credit-block-symbol'
// - Updated imported property 'z' to 'creditBlockContent' (module 942645)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97882.1891937a.js
         * chunkId: 97882
         * moduleId: 652240
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let c = {
    pluginIdentifier: require("chat-credit-block-symbol") /*id: 942645*/.creditBlockContent,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_CREDIT
  };
  require.r(exports);
  require.d(exports, {
    creditCreditMessageContentBlockMatcher: function () {
      return c;
    }
  });
}