// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'transformSamanthaChatMessageToMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 110074
         */
module.exports = function (module, exports, require) {
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let c = async (e, t) => {
    var b;
    var k;
    let C = e.is_finish ? "Success" : undefined;
    let E = {
      ...e.message,
      bot_id: e.bot_id,
      conversation_type: chatConversationSelectorUtils.getConversationType(e.conversation_id) || chatConversationSelectorUtils.getConversationType(e.local_conversation_id, true),
      message_type: protocolMessageConstants.messageTypes.CMPL,
      conversation_id: e.conversation_id,
      local_conversation_id: e.local_conversation_id,
      message_id: e.message_id,
      index: e.message_index,
      is_delta: e.is_delta,
      has_suggest: e.has_suggest,
      reply_id: e.reply_id,
      status: e.status,
      user_type: chatMessageTypes.UserType.Bot,
      chunk_seq: t == null ? undefined : t.event_id,
      local_info: t,
      content_obj: safeJsonUtils.safeParse(e.message?.content, {}),
      section_id: e.section_id,
      is_regen: e.is_regen,
      regen_active: e.is_regen,
      is_finish: e.is_finish,
      stream_id: e.stream_id,
      ...u(e.input_content_type || e.message?.content_type),
      tts_content: e.tts_content,
      message_action_bar: {
        invisible: e.message_action_bar?.invisible,
        config: safeJsonUtils.safeParse(e.message_action_bar?.config, {})
      },
      final_status: {
        message: C,
        session: C
      }
    };
    if (e.message?.pid !== undefined) {
      E.parent_id = e.message?.pid;
    }
    if (e.message?.reset !== undefined) {
      E.reset_block = (b = e.message?.reset) !== null && b !== undefined && b;
    }
    if (e.message?.is_finish !== undefined) {
      E.finish_block = (k = e.message?.is_finish) !== null && k !== undefined && k;
    }
    if (e.message?.pid !== undefined) {
      E.parent_id = e.message?.pid;
    }
    let I = await chatPluginMatcherRegistry.loadProtocolTransformMatcher();
    if (I) {
      let n = I.find(e => {
        var t;
        if ((t = e.matchPluginForSamanthaChatMessageToMessage) === null || t === undefined) {
          return undefined;
        } else {
          return t.call(e, E);
        }
      })?.pluginIdentifier;
      let i = await chatPluginIocManager.protocolTransformLoader(n);
      if (i == null ? undefined : i.samanthaChatMessageToMessage) {
        return i.samanthaChatMessageToMessage(E, e, t);
      }
    }
    return E;
  };
  let u = e => {
    let n = aiSkillProtocolTransformMatcher.samanthaToSkillMap[e] ?? 0;
    return {
      skill: {
        skill_type: n,
        skill_type_no_default: n || null,
        skill_id: `${n}`,
        skill_id_no_default: n ? `${n}` : null
      }
    };
  };
  require.d(exports, {
    transformSamanthaChatMessageToMessage: function () {
      return c;
    }
  });
}