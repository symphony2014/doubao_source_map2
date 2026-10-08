// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Av' to 'transformConversationChat'
// - Renamed export 'Ds' to 'transformThreadData'
// - Renamed export 'G$' to 'filterConversationData'
// - Renamed export 'Nl' to 'transformConversationObj'
// - Renamed export 'h' to 'botCategoryToParticipant'
// - Renamed export 'um' to 'transformConversationBase'
// - Renamed export 'vQ' to 'participantToBotCategory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 969267
         */
module.exports = function (module, exports, require) {
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageNormalizer = require("chat-message-normalizer") /*id: 171293*/;
  var chatParticipantTypes = require("chat-participant-types") /*id: 437956*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  let h = e => {
    switch (e) {
      case chatConstantsEnum.specificBotType.COCO:
        return chatParticipantTypes.participantTypes.Coco;
      case chatConstantsEnum.specificBotType.BOT:
        return chatParticipantTypes.participantTypes.Bot;
      case chatConstantsEnum.specificBotType.COCO_SUB:
        return chatParticipantTypes.participantTypes.CocoSub;
      default:
        return;
    }
  };
  let m = e => {
    switch (e) {
      case chatParticipantTypes.participantTypes.Coco:
        return chatConstantsEnum.specificBotType.COCO;
      case chatParticipantTypes.participantTypes.Bot:
        return chatConstantsEnum.specificBotType.BOT;
      case chatParticipantTypes.participantTypes.CocoSub:
        return chatConstantsEnum.specificBotType.COCO_SUB;
      default:
        return chatConstantsEnum.specificBotType.BOT_TYPE_UNKNOWN;
    }
  };
  let g = e => {
    switch (e) {
      case chatConstantsEnum.internalBotType.BotType_Unknown:
        return;
      case chatConstantsEnum.internalBotType.BotType_User:
        return chatEnumConstants.ParticipantType.User;
      case chatConstantsEnum.internalBotType.BotType_Coco:
        return chatEnumConstants.ParticipantType.Coco;
      case chatConstantsEnum.internalBotType.BotType_GuanFang:
        return chatEnumConstants.ParticipantType.GuanFang;
      case chatConstantsEnum.internalBotType.BotType_CocoWeb:
        return chatEnumConstants.ParticipantType.CocoWeb;
      default:
        return;
    }
  };
  let f = (e, t) => {
    if (e) {
      return Object.assign({}, e, {
        conversation_id: e == null ? undefined : e.conversation_id,
        conversation_type: h(e == null ? undefined : e.bot_type),
        message_cursor: e == null ? undefined : e.msg_cursor,
        message_index: e == null ? undefined : e.latest_index,
        cmd_index: undefined,
        last_section_id: e == null ? undefined : e.last_section_id,
        icon_url: t == null ? undefined : t.icon_url,
        name: e == null ? undefined : e.name,
        bot_id: t == null ? undefined : t.id,
        tags: doubaoConfigConstants_1.productName,
        local_conversation_id: e == null ? undefined : e.local_conversation_id,
        update_time: e == null ? undefined : e.update_time,
        deleted: e == null ? undefined : e.is_deleted,
        pinned: e == null ? undefined : e.pinned_time,
        icon_image: t == null ? undefined : t.icon_image?.raw_image,
        bot_creator_info: t == null ? undefined : t.creator_info,
        read_message_index: e == null ? undefined : e.last_read_index,
        conversation_page: undefined,
        retention_cursor: e == null ? undefined : e.retention_cursor,
        bot_disable_tag: t == null ? undefined : t.disabled_tag,
        bot_type: g(t == null ? undefined : t.real_bot_type),
        bg_img_url: t == null ? undefined : t.bg_img_url,
        bg_img_avg_hue: t == null ? undefined : t.bg_img_avg_hue,
        bot_conversation_type: undefined,
        content_dist_type: undefined,
        default_onboarding: e == null ? undefined : e.default_onboarding,
        extra: e == null ? undefined : e.extra,
        badge_count: e == null ? undefined : e.badge_count,
        read_badge_count: e == null ? undefined : e.read_badge_count
      });
    }
  };
  let p = e => e === chatConstantsEnum.privacyStatus.Public ? chatEnumConstants.VisibilityType.Public : e === chatConstantsEnum.privacyStatus.Private ? chatEnumConstants.VisibilityType.Private : e === chatConstantsEnum.privacyStatus.Unlisted ? chatEnumConstants.VisibilityType.Unlisted : undefined;
  let _ = e => e === chatConstantsEnum.botMode.BotMode_Subject ? chatEnumConstants.RoleType.subject : e === chatConstantsEnum.botMode.BotMode_Guest ? chatEnumConstants.RoleType.guest : undefined;
  let v = e => e === chatConstantsEnum.botActionType.ArchiveConversation ? chatEnumConstants.ConversationAction.ArchiveConversation : e === chatConstantsEnum.botActionType.CreateConversation ? chatEnumConstants.ConversationAction.CreateConversation : undefined;
  let b = e => e === chatConstantsEnum.contentSource.Preset ? chatEnumConstants.ContentSource.Preset : e === chatConstantsEnum.contentSource.ContentPool ? chatEnumConstants.ContentSource.ContentPool : undefined;
  let S = e => e === chatConstantsEnum.realityType.None ? chatEnumConstants.AuthType.None : e === chatConstantsEnum.realityType.Real ? chatEnumConstants.AuthType.Real : e === chatConstantsEnum.realityType.RealNone ? chatEnumConstants.AuthType.RealNone : undefined;
  let P = e => {
    var i;
    var o;
    var s;
    var c;
    var d;
    var m;
    var f;
    var y;
    var E;
    if (e) {
      return {
        ...e,
        bot_type: g(e == null ? undefined : e.real_bot_type),
        icon_image: {
          uri: e == null ? undefined : e.icon_image?.key,
          tiny_url: e == null ? undefined : (i = e.icon_image) === null || i === undefined ? undefined : i.image_thumb?.url,
          origin_url: e == null ? undefined : (o = e.icon_image) === null || o === undefined ? undefined : o.image_ori?.url
        },
        creator_info: {
          ...(e == null ? undefined : e.creator_info),
          creator_avatar: {
            uri: e == null ? undefined : (s = e.creator_info) === null || s === undefined ? undefined : s.creator_avatar?.key,
            tiny_url: e == null ? undefined : (d = e.creator_info) === null || d === undefined ? undefined : (c = d.creator_avatar) === null || c === undefined ? undefined : c.image_thumb?.url,
            origin_url: e == null ? undefined : (f = e.creator_info) === null || f === undefined ? undefined : (m = f.creator_avatar) === null || m === undefined ? undefined : m.image_ori?.url
          }
        },
        private_status: p(e == null ? undefined : e.private_status),
        onboarding: {
          ...(e == null ? undefined : e.onboarding),
          content_source: b(e == null ? undefined : e.onboarding?.content_source),
          call_mode: S(e == null ? undefined : e.onboarding?.call_mode),
          message_list: e == null ? undefined : (E = e.onboarding) === null || E === undefined ? undefined : (y = E.message_list) === null || y === undefined ? undefined : y.map(chatMessageNormalizer.normalizeChatMessage)
        },
        bot_mode: _(e == null ? undefined : e.bot_mode),
        action: (e == null ? undefined : e.action) ? {
          action_path: e.action.action_path,
          action_type: v(e.action.action_type)
        } : undefined,
        conversation_page: undefined
      };
    }
  };
  let C = e => {
    if (e) {
      return objectExcludeFilterUtil.filterObjectExclude({
        conversation_type: h(e == null ? undefined : e.bot_type),
        conversation_id: e == null ? undefined : e.conversation_id,
        message_cursor: e == null ? undefined : e.user_msg_cursor,
        message_index: e == null ? undefined : e.latest_index,
        cmd_index: undefined,
        last_section_id: e == null ? undefined : e.last_section_id,
        icon_url: e == null ? undefined : e.icon_url,
        name: e == null ? undefined : e.name,
        bot_id: e == null ? undefined : e.bot_id,
        tags: e == null ? undefined : e.tags,
        update_time: e == null ? undefined : e.update_time,
        pinned: !!(e == null ? undefined : e.pinned_time),
        icon_image: (e == null ? undefined : e.image) ? {
          uri: e.image.key,
          tiny_url: e.image.image_thumb?.url,
          origin_url: e.image.image_ori?.url
        } : undefined,
        read_message_index: e == null ? undefined : e.last_read_index,
        retention_cursor: undefined,
        bot_conversation_type: undefined,
        badge_count: e == null ? undefined : e.badge_count,
        read_badge_count: e == null ? undefined : e.read_badge_count,
        extra: (e == null ? undefined : e.conv_extra) ? isStringTypeCheck.isString(e.conv_extra) ? e.conv_extra : safeJsonUtils.safeStringify(e.conv_extra) : undefined
      }, isUndefinedCheck.isUndefined);
    }
  };
  let y = e => {
    var n;
    var r;
    let a = (n = e.conversation) === null || n === undefined ? undefined : n.conv_extra?.flowpc_thread_source;
    let l = safeJsonUtils.safeParse(a, undefined);
    let s = C(e.conversation);
    return {
      thread_id: e.id,
      thread_source: l,
      conversation: {
        ...s,
        bot_conversation_type: undefined,
        intention_type: e == null ? undefined : (r = e.conversation) === null || r === undefined ? undefined : r.conv_extra?.samantha_intention_type,
        latest_artifact: e == null ? undefined : e.conversation?.latest_artifact,
        conversation_type: s == null ? undefined : s.conversation_type
      }
    };
  };
  let E = e => {
    var n;
    var r;
    var a;
    if (!e) {
      return;
    }
    let l = (n = e.conversation) === null || n === undefined ? undefined : n.conv_extra?.flowpc_thread_source;
    return {
      thread_source: safeJsonUtils.safeParse(l, undefined),
      thread_id: e.id,
      can_chat: ((r = e.conversation) === null || r === undefined ? undefined : r.conv_extra?.can_chat) !== undefined ? ((a = e.conversation) === null || a === undefined ? undefined : a.conv_extra?.can_chat) === "true" : undefined,
      conversation: C(e.conversation)
    };
  };
  require.d(exports, {
    transformConversationChat: function () {
      return E;
    },
    transformThreadData: function () {
      return y;
    },
    filterConversationData: function () {
      return C;
    },
    transformConversationObj: function () {
      return h;
    },
    botCategoryToParticipant: function () {
      return P;
    },
    transformConversationBase: function () {
      return f;
    },
    participantToBotCategory: function () {
      return m;
    }
  });
}