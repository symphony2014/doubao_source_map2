// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Renamed variable 'n' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Resolved require(863085) to 'chat-safety-rewrite-symbol'
// - Updated imported property 'u' to 'rewriteSafetySym' (module 863085)
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23722.d8255420.js
         * chunkId: 23722
         * moduleId: 173459
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let _ = {
    pluginIdentifier: require("chat-safety-rewrite-symbol") /*id: 863085*/.rewriteSafetySym,
    matchPlugin(e) {
      return Number(e.content_obj?.samantha_code ?? e.ext?.samantha_code) === chatErrorCodes.chatErrorCodes.SECURITY_REVIEW_FAILED && e.skill?.skill_type === chatAppEnums.SkillType.WriteAssistant;
    }
  };
  require.r(exports);
  require.d(exports, {
    rewriteSafetyMessageErrorPluginMatcher: function () {
      return _;
    }
  });
}