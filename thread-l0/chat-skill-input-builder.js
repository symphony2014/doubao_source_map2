// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'buildChatSkillInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 700419
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  function o(e = "", t = "") {
    let n = chatMessageStoreFactory.createMessageStore.getState();
    if (e && t) {
      let i = conversationMessageUtils_1.getMessageById(n, e, t);
      if (i) {
        return i;
      }
    }
    let o = codeRouteUtils.isCodeChatRoute() || codeRouteUtils.isCodeChatGeneral() || codeRouteUtils.isCodeShareNew() ? chatAppEnums.SkillType.CodeAssistant : null;
    let s = o ? String(o) : null;
    return {
      conversation_id: e,
      ext: {
        input_skill: {
          skill_id: s,
          skill_type: o
        }
      },
      skill: {
        skill_type: o,
        skill_type_no_default: o,
        skill_id: s,
        skill_id_no_default: s
      }
    };
  }
  require.d(exports, {
    buildChatSkillInput: function () {
      return o;
    }
  });
}