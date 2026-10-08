// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Renamed variable 'n' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Resolved require(608613) to 'image-safety-plugin-symbol'
// - Updated imported property 'Z' to 'imageSafetyPlugin' (module 608613)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 686004
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let o = {
    pluginIdentifier: require("image-safety-plugin-symbol") /*id: 608613*/.imageSafetyPlugin,
    matchPlugin(e) {
      return e.error_details?.error_code === chatErrorCodes.chatErrorCodes.IMAGE_SAFETY_ERROR || (e == null ? undefined : e.status) === chatMessageTypes.PushMessageStatus.NotCompliant;
    }
  };
  require.r(exports);
  require.d(exports, {
    imageSafetyMessageErrorPluginMatcher: function () {
      return o;
    }
  });
}