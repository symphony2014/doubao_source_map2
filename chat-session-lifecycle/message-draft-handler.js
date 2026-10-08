// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BH' to 'getConversationReplies'
// - Renamed export 'Bi' to 'getDraftMessage'
// - Renamed export 'ae' to 'createDraftMessage'
// - Renamed export 'eD' to 'addDraftMessageLink'
// - Renamed export 'uj' to 'getLocalMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 971522
         */
module.exports = function (module, exports, require) {
  var objectPathFilterUtil = require("object-path-filter-util") /*id: 213469*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var replyToIdGenerator = require("reply-to-id-generator") /*id: 762297*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var createMessageObject = require("create-message-object") /*id: 74878*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  function g(e, t) {
    let {
      conversationId: s,
      replyId: r
    } = t;
    let a = objectPathFilterUtil.filterObjectByPaths(e.localMessageMap[s], e => (e == null ? undefined : e.reply_id) === r);
    return objectValuesHelper.getObjectValues(a);
  }
  function _(e, t, s) {
    return e.localMessageMap[t]?.[s];
  }
  function m(e) {
    let {
      isRegenerate: s,
      immerUpdateMessage: i,
      newLocalMessageId: n,
      conversationId: r,
      replyId: a,
      sectionId: o,
      message: v = {},
      messageStreamStage: g
    } = e;
    let [_] = i;
    let m = chatMessageUtils_2_1.getNonLocalMessage({
      messageMap: _.draftMessageMap
    });
    _.draftLocalMessageMap[n] = createMessageObject.createMessageObject({
      prevMessageId: s ? messageFilterUtils.filterValidMessages(_.draftMessageLinks, e => {
        return m(e)?.reply_id === a;
      })?.messageId : a,
      messageStreamStage: g,
      message: {
        ...v,
        is_delta: false,
        user_type: chatMessageTypes.UserType.Bot,
        conversation_id: r,
        section_id: o,
        local_message_id: n,
        reply_id: a
      },
      messageLinks: _.draftMessageLinks,
      isRegenerate: s
    });
  }
  function h(e) {
    let {
      immerUpdateMessage: t,
      newLocalMessageId: s,
      messageKey: i
    } = e;
    let [n] = t;
    if (!moduleReExportWrapper.wrappedModule(n.draftMessageLinks, e => e.messageId === s)) {
      let e = {
        isLocalMessage: true,
        messageId: s,
        ...(i ? {
          messageKey: i
        } : {})
      };
      n.draftMessageLinks.push(e);
    }
  }
  function f(e, t, s) {
    let {
      draftLocalMessageMap: i
    } = e;
    let n = replyToIdGenerator.generateReplyToId(t, s);
    let r = replyToIdGenerator.generateReplyToId(t);
    let l = i[chatMessagingConstants.mockReplyMessageId];
    let c = i[r];
    let u = i[n];
    if (l) {
      return draftMessageManager.getAndRemoveDraft(e, chatMessagingConstants.mockReplyMessageId);
    } else if (c) {
      return draftMessageManager.getAndRemoveDraft(e, r);
    } else if (u) {
      return draftMessageManager.getAndRemoveDraft(e, n);
    } else {
      return undefined;
    }
  }
  require.d(exports, {
    getConversationReplies: function () {
      return g;
    },
    getDraftMessage: function () {
      return f;
    },
    createDraftMessage: function () {
      return m;
    },
    addDraftMessageLink: function () {
      return h;
    },
    getLocalMessage: function () {
      return _;
    }
  });
}