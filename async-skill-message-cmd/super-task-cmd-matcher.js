// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Resolved require(637964) to 'super-task-cmd-symbol'
// - Updated imported property 'S' to 'superTaskCmdSymbol' (module 637964)
// - Updated imported property 'KF' to 'messageType' (module 292449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 239927
         */
module.exports = function (module, exports, require) {
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let r = {
    pluginIdentifier: require("super-task-cmd-symbol") /*id: 637964*/.superTaskCmdSymbol,
    matchPlugin: e => e.cmd === messagingConstants.messageType.SuperTaskModelCallOverload
  };
  require.r(exports);
  require.d(exports, {
    superTaskOverloadMessageCmdPluginMatcher: function () {
      return r;
    }
  });
}