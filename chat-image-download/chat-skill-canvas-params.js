// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'getCanvasSkillData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 502472
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  let c = (e, t) => {
    var a;
    if (!e || !t) {
      return;
    }
    let i = chatMessageStoreFactory.createMessageStore.getState();
    let r = (a = i.messageLinkMap[e]) === null || a === undefined ? undefined : a.find(e => e.messageId === t);
    return r && conversationMessageUtils_1.getMessageFromLink(i, e, r);
  };
  let d = e => {
    let {
      conversationId: s,
      messageId: n,
      message: d,
      chatViewService: p
    } = e;
    let u = d || c(s, n);
    if (!u) {
      return {};
    }
    let m = u.skill?.skill_type;
    let g = u.skill?.skill_id;
    g = g && g !== skillConstantsEnum.SkillId.SkillFreeChat ? g : null;
    let k = isNullishCheck.isNil(g) || isNullishCheck.isNil(m) ? null : skillTypeMappings.getSkillName(m) || null;
    return {
      ...throttledPathFilterStringify.throttledPathStr(u, "bot_id", "conversation_id", "message_id", "section_id"),
      ...(p == null ? undefined : p.getCanvasTeaParams()),
      skill_id: g,
      skill_name: k
    };
  };
  require.d(exports, {
    getCanvasSkillData: function () {
      return d;
    }
  });
}