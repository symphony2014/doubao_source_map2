// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EN' to 'getMessageFromReplyLink'
// - Renamed export 'QO' to 'isSingleValidReply'
// - Renamed export 'ZJ' to 'regenMessageActions'
// - Renamed export 'aS' to 'isMessageContentTypeValid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 893308
         */
module.exports = function (module, exports, require) {
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let v = e => ({
    setRegenMessageInactive: t => {
      let {
        draftMessageMap: n
      } = e;
      let r = n[t];
      safeObjectSetWrapper.safeObjectSet(r, "regen_active", false);
      safeObjectSetWrapper.safeObjectSet(r, "is_regen", true);
      safeObjectSetWrapper.safeObjectSet(r, "ext.regen", "1");
      safeObjectSetWrapper.safeObjectSet(r, "ext.regen_active", "0");
      safeObjectSetWrapper.safeObjectSet(r, "status", chatMessageTypes.PushMessageStatus.InVisible);
    },
    setRegenMessageActive: t => {
      let {
        draftMessageMap: n
      } = e;
      let r = n[t];
      safeObjectSetWrapper.safeObjectSet(r, "regen_active", true);
      safeObjectSetWrapper.safeObjectSet(r, "status", chatMessageTypes.PushMessageStatus.Available);
      safeObjectSetWrapper.safeObjectSet(r, "ext.regen_active", "1");
    }
  });
  let p = (e, t) => {
    if (!e || !t.reply_id) {
      return false;
    }
    let n = t.reply_id;
    let i = chatMessageStoreFactory.createMessageStore.getState();
    let a = i.messageLinkMap[e];
    let l = chatMessageUtils_2_1.getMessageGetter({
      messageMap: i.messageMap[e],
      localMessageMap: i.localMessageMap[e]
    });
    let u = messageFilterUtils.filterReplyLinks({
      messageLinks: a,
      replyId: n,
      getMessage: l
    });
    return (u == null ? undefined : u.length) === 1 || arrayValueFinder.valueFinder(u, e => {
      let t = l(e);
      return t && localRegenCheck.shouldRegenerate(t);
    });
  };
  let f = (e, t) => {
    if (!e || !t) {
      return false;
    }
    let i = chatMessageStoreFactory.createMessageStore.getState().messageMap[e]?.[t];
    return messageContentTypeAndStatusChecker.H6e(i);
  };
  let m = e => {
    let {
      reply_id: t
    } = e ?? {};
    let n = chatMessageStoreFactory.createMessageStore.getState();
    if (t) {
      return conversationMessageUtils_1.getMessageFromLink(n, (e == null ? undefined : e.conversation_id) || "", {
        isLocalMessage: false,
        messageId: t
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    getMessageFromReplyLink: function () {
      return m;
    },
    isSingleValidReply: function () {
      return p;
    },
    regenMessageActions: function () {
      return v;
    },
    isMessageContentTypeValid: function () {
      return f;
    }
  });
}