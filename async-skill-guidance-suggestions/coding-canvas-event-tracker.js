// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cw' to 'codingEventTracker'
// - Renamed export 'Tk' to 'canvasType'
// - Renamed export 'ep' to 'codingCanvasPipeline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 943129
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var chatSkillInputBuilder = require("chat-skill-input-builder") /*id: 700419*/;
  var codingSkillChatUtils_1 = require("coding-skill-chat-utils_1") /*id: 269786*/;
  let v = "coding";
  let b = e => {
    let {
      chatId: t
    } = e;
    let n = (e, t) => {
      var r;
      if ((t == null ? undefined : t.skill?.skill_type) === chatAppEnums.SkillType.DesExtSkillSuperTask && !messageContentTypeAndStatusChecker.Yns(t)) {
        let n = {
          super_task_id: t == null ? undefined : t.async_task?.id,
          super_task_mode: (t == null ? undefined : (r = t.verbose) === null || r === undefined ? undefined : r.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
        };
        if (e === "copy") {
          Object.assign(n, {
            user_type: "bot"
          });
        }
        return {
          ...n
        };
      }
      return {};
    };
    let i = (e, t, i, l) => {
      let r = chatSkillInputBuilder.buildChatSkillInput(t, i);
      let o = l ?? (r == null ? undefined : r.skill?.skill_type_no_default);
      return {
        skill_id: o ? String(o) : null,
        skill_name: o ? skillTypeMappings.getSkillName(o) : null,
        conversation_id: t,
        bot_id: chatConversationBotId.getConversationBotId(t, true),
        message_id: i,
        section_id: r == null ? undefined : r.section_id,
        canvas_is_code: +!!codingSkillChatUtils_1.validateChatInput(t, i),
        ...n(e, r)
      };
    };
    let a = async () => {
      let t = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      return {
        ...(t == null ? undefined : t.getCanvasTeaParams()),
        canvas_type: "coding",
        canvas_sub_type: e.canvasSubType
      };
    };
    let r = async (e, n, l, r) => {
      let o = {
        ...i(e, n, l, chatStoreManager.getStoreState("chatInputStore").activeSkillTypeMap[t || ""]),
        ...(await a()),
        ...(r ?? {})
      };
      teaAnalyticsEventTracker.trackEvent(e, o);
    };
    return {
      trackCodingCanvasEvent: skillPinModalCallback.useSkillPinCallback((t, n) => {
        r(t, e.conversationId, e.messageId, n);
      })
    };
  };
  let y = function (e = {}) {
    let {
      chatId: t,
      messageId: n,
      conversationId: o,
      skillType: h
    } = e;
    let g = (e, t) => {
      if (t) {
        return conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), e, t);
      }
    };
    let v = e => {
      var a;
      if ((e == null ? undefined : e.skill?.skill_type) !== chatAppEnums.SkillType.DesExtSkillSuperTask || messageContentTypeAndStatusChecker.Yns(e)) {
        return {};
      } else {
        return {
          super_task_id: e == null ? undefined : e.async_task?.id,
          super_task_mode: (e == null ? undefined : (a = e.verbose) === null || a === undefined ? undefined : a.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
        };
      }
    };
    let b = skillPinModalCallback.useSkillPinCallback((e, n) => {
      let l = h || chatStoreManager.getStoreState("chatInputStore").activeSkillTypeMap[t || ""];
      if (codeRouteUtils.isCodePage()) {
        l = chatAppEnums.SkillType.CodeAssistant;
      }
      let a = {
        skill_id: l ? String(l) : null,
        skill_name: l ? skillTypeMappings.getSkillName(l || chatAppEnums.SkillType.CodeAssistant) : null,
        bot_id: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()) || "",
        ...(n ?? {})
      };
      teaAnalyticsEventTracker.trackEvent(e, a);
    });
    let y = skillPinModalCallback.useSkillPinCallback((e, t) => {
      if (!o || !n) {
        return;
      }
      let i = g(o, n);
      b(e, {
        ...{
          conversation_id: o,
          bot_id: chatConversationBotId.getConversationBotId(o, true),
          message_id: n,
          section_id: i == null ? undefined : i.section_id,
          ...v(i)
        },
        ...(t ?? {})
      });
    });
    return {
      trackCodingBaseEvent: b,
      trackCodingConversationEvent: y
    };
  };
  require.d(exports, {
    codingEventTracker: function () {
      return y;
    },
    canvasType: function () {
      return v;
    },
    codingCanvasPipeline: function () {
      return b;
    }
  });
}