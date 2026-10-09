// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gq' to 'assembleContentBlocks'
// - Renamed export 'cW' to 'createMessageObject'
// - Renamed export 'i1' to 'parseConversationId'
// - Renamed export 'yn' to 'serializeAbilityData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 45244
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatFeedConversationUtil = require("chat-feed-conversation-util") /*id: 891416*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let c = e => chatFeedConversationUtil.isLocalConversation(e ?? "") ? {
    local_conversation_id: e,
    conversation_id: undefined
  } : {
    conversation_id: e,
    local_conversation_id: undefined
  };
  let d = (e, t) => e !== undefined ? JSON.stringify({
    ability_type: e,
    ability_param: t
  }) : "";
  let f = (e, t) => {
    let {
      attachmentBlock: n,
      textBlock: i,
      referenceBlocks: r
    } = e;
    let s = [];
    if (n) {
      s.push(n);
    }
    if ((!n || (t == null ? undefined : t.excludeReferenceOnAttachment) === false) && r && r.length > 0) {
      s.push(...r.filter(e => e !== undefined));
    }
    if (i) {
      s.push(i);
    }
    return s;
  };
  let h = e => {
    let {
      conversation: d,
      message: f
    } = e;
    let {
      conversation_id: h,
      local_conversation_id: p
    } = d;
    let m = chatFeedStoreFactory.useFeedStore.getState();
    let g = chatConversationSelectors_2.getConversation(m, h) ?? chatConversationSelectors_2.getLocalConversation(m, p);
    let _ = f.unique_id ?? uuidGeneratorUtil.generateUuid();
    return {
      conversation_id: h,
      local_conversation_id: p,
      local_message_id: _,
      unique_id: _,
      bot_id: (g == null ? undefined : g.bot_id) || "7338286299411103781",
      user_type: chatConstantsEnum.userType.HUMAN,
      create_time: Date.now(),
      content_blocks_v2: f.content_blocks_v2,
      ext: f.ext,
      conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), h ?? p ?? "", true),
      status: f.message_status ?? chatMessageTypes.PushMessageStatus.Available,
      create_from: "sse-stream",
      section_id: g == null ? undefined : g.last_section_id,
      is_finish: true
    };
  };
  require.d(exports, {
    assembleContentBlocks: function () {
      return f;
    },
    createMessageObject: function () {
      return h;
    },
    parseConversationId: function () {
      return c;
    },
    serializeAbilityData: function () {
      return d;
    }
  });
}