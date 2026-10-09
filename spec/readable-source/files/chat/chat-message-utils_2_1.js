// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$I' to 'getChatSourceType'
// - Renamed export 'FD' to 'initMessageListState'
// - Renamed export 'HF' to 'getOnboardingStatusVerbose'
// - Renamed export 'JG' to 'getLocalMessage'
// - Renamed export 'R9' to 'extractMessageLogInfo'
// - Renamed export 'UQ' to 'getNonLocalMessage'
// - Renamed export 'Wi' to 'getMessageGetter'
// - Renamed export 'eg' to 'generateMessageId'
// - Renamed export 'kq' to 'getMessageTextLength'
// - Renamed export 'r7' to 'checkMessageIdPrefix'
// - Renamed export 'wN' to 'getOnboardingStatus'
// - Renamed export 'xg' to 'getMessageListStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 296060
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let a = e => {
    let {
      messageLinks: n,
      getMessage: i,
      hasMore: r,
      range: o
    } = e;
    let a = Number(i(n[0])?.index) || 0;
    return {
      hasMore: o ? a > o.start : r,
      lastCursor: a,
      inIniting: false,
      inLoadingMore: false
    };
  };
  let l = (e, t) => ({
    messageMap: e.messageMap[t],
    localMessageMap: e.localMessageMap[t],
    messageLinks: e.messageLinkMap[t],
    messageListStatus: e.messageListStatusMap[t]
  });
  let s = e => t => {
    if (!t) {
      return;
    }
    let {
      isLocalMessage: r,
      messageId: o
    } = t;
    if (r) {
      return e.localMessageMap?.[o];
    } else {
      return e.messageMap?.[o];
    }
  };
  let u = e => t => {
    if (!t) {
      return;
    }
    let {
      isLocalMessage: i,
      messageId: r
    } = t;
    if (i) {
      return undefined;
    } else {
      return e.messageMap?.[r];
    }
  };
  let c = e => t => {
    if (!t) {
      return;
    }
    let {
      isLocalMessage: i,
      messageId: r
    } = t;
    if (i) {
      return e.localMessageMap?.[r];
    } else {
      return undefined;
    }
  };
  let d = function (e, t, n = "sub") {
    return `${n === "sub" ? "localThread_" : "localMainThread_"}${t || ""}_${e}`;
  };
  let h = function (e, t) {
    var n;
    var i;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "sub";
    let o = r === "sub" ? "localThread_" : "localMainThread_";
    if (t) {
      if (e == null) {
        return undefined;
      } else if ((n = e.startsWith) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(e, `${o}${t}_`);
      }
    } else if (e == null) {
      return undefined;
    } else if ((i = e.startsWith) === null || i === undefined) {
      return undefined;
    } else {
      return i.call(e, o);
    }
  };
  let m = e => {
    let {
      text: t
    } = (e == null ? undefined : e.content_obj) || {};
    if (isStringTypeCheck.isString(t)) {
      return t.length;
    } else {
      return 0;
    }
  };
  function g(e) {
    let {
      ConnectionType: n
    } = chatMessageTypes;
    if (e.next_connection_type === n.WebSocket) {
      return chatCoreConstants.ChatSourceTypes.AliceChatSocket;
    } else if (e.next_connection_type === n.HttpChunk) {
      return chatCoreConstants.ChatSourceTypes.AliceChatStream;
    } else {
      return e.local_info?.from;
    }
  }
  function f(e) {
    return {
      conversation_id: e.conversation_id,
      message_id: e.message_id,
      from: e.local_info?.from,
      local_message_id: e == null ? undefined : e.local_message_id,
      is_regenerate: "local" in e && (e == null ? undefined : e.local?.isRegenerate),
      has_err: e.error_details?.error_code,
      log_id: e.local_info?.log_id,
      inner_log_id: e == null ? undefined : e.ext?.log_id,
      trace_id: e.local_info?.trace_id,
      retried: e == null ? undefined : e.local_info?.retried
    };
  }
  let p = e => {
    switch (Number(e == null ? undefined : e.ext?.onboarding)) {
      case 1:
        return "first_met";
      case 2:
        return "welcome_back";
      default:
        return "unknown";
    }
  };
  let _ = e => {
    switch (Number(e == null ? undefined : e.ext?.onboarding)) {
      case 1:
        return "onboarding_first_met";
      case 2:
        return "onboarding_welcome_back";
      default:
        return "unknown";
    }
  };
  require.d(exports, {
    getChatSourceType: function () {
      return g;
    },
    initMessageListState: function () {
      return a;
    },
    getOnboardingStatusVerbose: function () {
      return _;
    },
    getLocalMessage: function () {
      return c;
    },
    extractMessageLogInfo: function () {
      return f;
    },
    getNonLocalMessage: function () {
      return u;
    },
    getMessageGetter: function () {
      return s;
    },
    generateMessageId: function () {
      return d;
    },
    getMessageTextLength: function () {
      return m;
    },
    checkMessageIdPrefix: function () {
      return h;
    },
    getOnboardingStatus: function () {
      return p;
    },
    getMessageListStatus: function () {
      return l;
    }
  });
}