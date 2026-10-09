// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(938219) to 'credit-block-no-login-symbol'
// - Updated imported property 'j' to 'creditBlockNoLoginSymbol' (module 938219)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51981.99ffeb25.js
         * chunkId: 51981
         * moduleId: 796342
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let c = {
    pluginIdentifier: require("credit-block-no-login-symbol") /*id: 938219*/.creditBlockNoLoginSymbol,
    matchContentBlock: t => t === chatConstantsEnum.messageContentType.BLOCK_AUTH_IDENTITY
  };
  require.r(exports);
  require.d(exports, {
    creditCreditMessageContentBlockNoLoginMatcher: function () {
      return c;
    }
  });
}