// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'chatCommandCodes'
// - Resolved require(668510) to 'chat-command-codes'
// - Resolved require(710320) to 'user-logout-cmd-plugin_1'
// - Updated imported property 'O' to 'userLogoutCmd' (module 710320)
// - Updated imported property 'SK' to 'ChatCommandCodes' (module 668510)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38683.aa636daa.js
         * chunkId: 38683
         * moduleId: 215307
         */
module.exports = function (module, exports, require) {
  var chatCommandCodes = require("chat-command-codes") /*id: 668510*/;
  let n = {
    pluginIdentifier: require("user-logout-cmd-plugin_1") /*id: 710320*/.userLogoutCmd,
    matchPlugin: _ => _.cmd === chatCommandCodes.ChatCommandCodes.USER_LOGOUT
  };
  require.r(exports);
  require.d(exports, {
    userLogoutCmdPluginMatcher: function () {
      return n;
    }
  });
}