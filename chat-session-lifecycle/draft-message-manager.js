// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$j' to 'removeDraftMessage'
// - Renamed export 'FL' to 'getAndRemoveDraft'
// - Renamed export 'MX' to 'setDraftMessageStatus'
// - Renamed export 'NE' to 'removeReplyMessages'
// - Renamed export 'cS' to 'filterReplyLinks'
// - Renamed export 'km' to 'deleteDraftEntry'
// - Renamed export 'yk' to 'replaceLocalWithRemote'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 513014
         */
module.exports = function (module, exports, require) {
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var replyToIdGenerator = require("reply-to-id-generator") /*id: 762297*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  function m(e, t) {
    let {
      draftLocalMessageMap: s,
      draftMessageMap: n,
      draftMessageLinks: r
    } = e;
    let {
      isLocalMessage: a,
      messageId: o
    } = t;
    if (a) {
      delete s[o];
    } else {
      delete n[o];
    }
    return arrayFindLastIndexUtil.findLastIndex(r, e => e.messageId === o);
  }
  function h(e, t) {
    let {
      isLocalMessage: s,
      messageId: i
    } = t;
    let {
      draftLocalMessageMap: n,
      draftMessageMap: r
    } = e;
    if (s && n[i]) {
      n[i].status = chatMessageTypes.PushMessageStatus.InVisible;
    } else if (r[i]) {
      r[i].status = chatMessageTypes.PushMessageStatus.InVisible;
    }
  }
  function f(e) {
    let t = m(e, {
      isLocalMessage: true,
      messageId: replyToIdGenerator.generateReplyToId(chatMessagingConstants.onboardingMessageId)
    });
    if (t > -1) {
      e.draftMessageLinks.splice(t, 1);
    }
  }
  let p = (e, t) => {
    let c = {
      ...e.ext,
      ...t.ext
    };
    let u = e.local?.localKey;
    return {
      ...throttledOmitPathStringify.omitPathStringify(e, ["local", "local_message_id"]),
      ...objectExcludeFilterUtil.filterObjectExclude(throttledOmitPathStringify.omitPathStringify(t, ["skill"]), isNullishCheck.isNil),
      ext: c,
      local_info: {
        ...e.local_info,
        ...t.local_info,
        local_key: u,
        from: t.local_info?.from || e.local_info?.from || chatCoreConstants.ChatSourceTypes.Unknown
      }
    };
  };
  function S(e) {
    let {
      draft: t,
      localMessage: s,
      message: i
    } = e;
    let {
      message_id: n
    } = i;
    let {
      local_message_id: r
    } = s;
    if (!n || !r) {
      loggerServiceCore.defaultLogger.console.warning("skip replaceLocalMessageWithRemoteMessage: invalid remote/local message");
      return;
    }
    t.draftMessageMap[n] = p(s, i);
    let a = m(t, {
      isLocalMessage: true,
      messageId: r
    });
    if (a > -1) {
      let e = t.draftMessageLinks[a];
      return t.draftMessageLinks.splice(a, 1, {
        isLocalMessage: false,
        messageId: n,
        messageKey: e.messageKey ?? uuidV1GeneratorWrapper.generateUuid()
      })?.[0];
    }
    loggerServiceCore.defaultLogger.persist.warning({
      message: "not found local message to replace",
      meta: {
        localMessageId: r
      }
    });
  }
  function y(e, t) {
    let s = e.draftLocalMessageMap[t];
    if (s == null ? undefined : s.local_message_id) {
      let t = m(e, {
        isLocalMessage: true,
        messageId: s.local_message_id
      });
      return {
        message: s,
        messageLink: e.draftMessageLinks.splice(t, 1)?.[0]
      };
    }
  }
  function M(e, t) {
    if (!t) {
      return;
    }
    let s = chatMessageUtils_2_1.getMessageGetter({
      localMessageMap: e.draftLocalMessageMap,
      messageMap: e.draftMessageMap
    });
    messageFilterUtils.filterReplyLinks({
      messageLinks: e.draftMessageLinks,
      getMessage: s,
      replyId: t
    }).forEach(t => {
      m(e, {
        isLocalMessage: true,
        messageId: t.messageId
      });
      let s = e.draftMessageLinks.findIndex(e => e.messageId === t.messageId);
      if (s !== -1) {
        e.draftMessageLinks.splice(s, 1);
      }
    });
  }
  function E(e, t) {
    if (!t) {
      return;
    }
    let {
      draftLocalMessageMap: s
    } = e;
    Object.entries(s).forEach(s => {
      let [i, n] = s;
      if (n.reply_id === t) {
        m(e, {
          isLocalMessage: true,
          messageId: i
        });
      }
    });
  }
  require.d(exports, {
    removeDraftMessage: function () {
      return f;
    },
    getAndRemoveDraft: function () {
      return y;
    },
    setDraftMessageStatus: function () {
      return h;
    },
    removeReplyMessages: function () {
      return E;
    },
    filterReplyLinks: function () {
      return M;
    },
    deleteDraftEntry: function () {
      return m;
    },
    replaceLocalWithRemote: function () {
      return S;
    }
  });
}