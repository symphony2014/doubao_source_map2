// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'getConversationReportParams'
// - Renamed export 'XG' to 'getConversationId'
// - Renamed export 'aF' to 'buildMessageOperationParams'
// - Renamed export 'rH' to 'mapContentType'
// - Renamed export 'sb' to 'checkSkillReleaseType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 500435
         */
module.exports = function (module, exports, require) {
  var a;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var uiComponentTypeConstants = require("ui-component-type-constants") /*id: 169442*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var chatConfigConstants = require("chat-config-constants") /*id: 577013*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var messageFilterUtils = require("message-filter-utils") /*id: 883835*/;
  var chatMessageServiceManager = require("chat-message-service-manager") /*id: 701777*/;
  (a = {}).Text = "text";
  a.Picture = "pic";
  a.File = "file";
  let y = a;
  let h = e => {
    let t = {
      [chatMessageTypes.ContentType.Text]: y.Text,
      [chatMessageTypes.ContentType.Image]: y.Picture,
      [chatMessageTypes.ContentType.File]: y.File
    };
    return e && t[e] || y.Text;
  };
  let I = e => {
    let o = e.botId || chatConversationBotId.getConversationBotId(e.conversationId) || "";
    let a = chatMessageServiceManager.chatMessageServiceContext.get("chatBotService", true);
    let n = a == null ? undefined : a.getBot(o);
    let i = e.reportParams.conversation_type ?? chatConversationSelectorUtils.getConversationType(e.conversationId);
    return {
      bot_id: o,
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", e.conversationId, n, i),
      conversation_type: i
    };
  };
  let C = [chatAppEnums.SkillType.AcademicSearch];
  let x = e => {
    let t = uniParamsManager.uniParamsManager.getParam("aid");
    let o = t && [chatConfigConstants.chatIdXi, chatConfigConstants.chatIdQg, chatConfigConstants.chatIdNi].includes(t);
    let a = !!~C.findIndex(t => t === e);
    if (o) {
      if (a) {
        return undefined;
      } else {
        return uiComponentTypeConstants.releaseType.Release;
      }
    } else {
      return undefined;
    }
  };
  let T = (e, t) => {
    let {
      resolvedConversationId: o,
      extraExt: a,
      reportParams: {
        scene: l
      }
    } = e;
    let {
      replace: s,
      remove: d,
      regenerate: c,
      resume: u
    } = e.operation || {};
    let v = function (e) {
      let {
        conversationId: o,
        store: a
      } = e;
      let l = conversationMessageUtils_1.getReplyMessage(a, o);
      if (!l || messageContentTypeAndStatusChecker.qP0(l) || messageContentTypeAndStatusChecker.dqg(l)) {
        return;
      }
      let s = messageFilterUtils.processMessageList(a.messageLinkMap[o], e => {
        let t = conversationMessageUtils_1.getMessageFromLink(a, o, e);
        return chatMessageUtils_2.isVisibleStatus(t) && localRegenCheck.shouldRegenerate(t);
      });
      if (s && !(s == null ? undefined : s.isLocalMessage) && conversationMessageUtils_1.getMessageFromLink(a, o, s)?.reply_id === l.reply_id) {
        return s.messageId;
      }
    }({
      store: t,
      conversationId: o
    });
    return {
      stream: "1",
      answer_with_suggest: "1",
      wiki: "2",
      media_search_type: "1",
      ...(s ? {
        replace: "1"
      } : {}),
      ...(d ? {
        delete: "1"
      } : {}),
      ...(c ? {
        regen: "1"
      } : {}),
      ...(u ? {
        resume: "1"
      } : {}),
      ...(s || u || d || c || !v ? {} : {
        lastRegenerateSelectedMessageId: v
      }),
      ...(l === "onboarding_suggestion" ? {
        onboarding_v2: "1"
      } : {}),
      ...(l === "keyboard_unlog" ? {
        scene: l
      } : {}),
      ...a
    };
  };
  let b = e => {
    let t = e.localConversationId || e.conversationId;
    if (!t) {
      throw Error("conversationId is empty");
    }
    return t;
  };
  require.d(exports, {
    getConversationReportParams: function () {
      return I;
    },
    getConversationId: function () {
      return b;
    },
    buildMessageOperationParams: function () {
      return T;
    },
    mapContentType: function () {
      return h;
    },
    checkSkillReleaseType: function () {
      return x;
    }
  });
}