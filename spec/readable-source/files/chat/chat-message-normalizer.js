// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'normalizeChatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 171293
         */
module.exports = function (module, exports, require) {
  var collectionFilterUtil = require("collection-filter-util") /*id: 78628*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let l = e => {
    if (e !== chatConstantsEnum.messageContentType.UNSPECIFIED && e !== undefined) {
      return e;
    }
  };
  let s = (e, t) => {
    if (e === chatConstantsEnum.messageState.NORMAL) {
      if (t === chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE) {
        return chatMessageTypes.PushMessageStatus.Available;
      }
      if (t === chatConstantsEnum.messageStatus.MessageStatus_UNSELECTED) {
        return chatMessageTypes.PushMessageStatus.Unselected;
      }
      if (t === chatConstantsEnum.messageStatus.MessageStatus_NotCompliant) {
        return chatMessageTypes.PushMessageStatus.NotCompliant;
      }
    }
    if (e === chatConstantsEnum.messageState.INTERRUPT && t === chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE) {
      return chatMessageTypes.PushMessageStatus.Broken;
    } else if (e === chatConstantsEnum.messageState.CONTENT_IN_STREAMING && t === chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE) {
      return chatMessageTypes.PushMessageStatus.Streaming;
    } else {
      return chatMessageTypes.PushMessageStatus.InVisible;
    }
  };
  let u = e => {
    let h = {
      bot_id: e == null ? undefined : e.ext?.bot_id,
      conversation_id: e == null ? undefined : e.conversation_id,
      local_conversation_id: e == null ? undefined : e.local_conversation_id,
      section_id: e == null ? undefined : e.section_id,
      message_id: e == null ? undefined : e.message_id,
      local_message_id: e == null ? undefined : e.local_message_id,
      index: e == null ? undefined : e.index_in_conv,
      sender: e == null ? undefined : e.sender_id,
      sec_sender: e == null ? undefined : e.sec_sender,
      reply_id: e == null ? undefined : e.bot_reply_message_id,
      create_time: e == null ? undefined : e.create_time,
      message_type: undefined,
      content_type: l(e == null ? undefined : e.content_type),
      content: e == null ? undefined : e.content,
      display_content: e == null ? undefined : e.content,
      reference_info: (e == null ? undefined : e.reference_info) ? {
        ...(e == null ? undefined : e.reference_info),
        content_type: l(e == null ? undefined : e.reference_info?.content_type)
      } : undefined,
      ext: e == null ? undefined : e.ext,
      feedback: e == null ? undefined : e.feedback_type,
      tts_content: e == null ? undefined : e.tts_content,
      next_connection_type: chatMessageTypes.ConnectionType.WebSocket,
      chunk_seq: undefined,
      is_delta: undefined,
      update_time: e == null ? undefined : e.update_time,
      biz_content_key: e == null ? undefined : e.biz_content_type,
      user_type: (e == null ? undefined : e.user_type) === chatConstantsEnum.userType.USER_TYPE_UNKNOWN ? undefined : e == null ? undefined : e.user_type,
      token: e == null ? undefined : e.token,
      content_block: e == null ? undefined : e.content_block,
      status: s(e == null ? undefined : e.content_status, e == null ? undefined : e.status),
      meta_infos: (e == null ? undefined : e.ext?.meta_info) ? safeJsonUtils.safeParse(e == null ? undefined : e.ext?.meta_info, []) : undefined,
      sub_message_v2: e == null ? undefined : e.sub_message_v2,
      brief: e == null ? undefined : e.brief
    };
    if ((e == null ? undefined : e.content_type) === chatConstantsEnum.messageContentType.AGGREGATED_MSG && e.sub_message_v2) {
      h.sub_message_group = {
        groups: collectionFilterUtil.filterCollection(e.sub_message_v2.message_group || {}, (e, t, n) => {
          e[n] = t.id_list;
        }, {}),
        messages: e.sub_message_v2.sub_message_list.map(e => u(e)).sort((e, t) => {
          return (Number(e.ext?.stream_idx ?? 0) || 0) - (Number(t.ext?.stream_idx ?? 0) || 0);
        })
      };
    }
    return h;
  };
  require.d(exports, {
    normalizeChatMessage: function () {
      return u;
    }
  });
}