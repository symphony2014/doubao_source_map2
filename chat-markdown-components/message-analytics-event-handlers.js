// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'createMessageAnalyticsHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62381.cb92c622.js
         * chunkId: 62381
         * moduleId: 189888
         */
module.exports = function (module, exports, require) {
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  let v = async e => {
    let t = await e.read();
    return await Promise.all(t.map(e => Promise.all(e.types.map(t => e.getType(t).then(async e => ({
      type: t,
      content: await e.text()
    }))))));
  };
  let _ = async e => (await v(e)).flat().find(e => {
    if (e.type === "text/plain") {
      return true;
    }
  });
  let f = async (e, t) => (await v(e)).flat().find(e => {
    if (e.type === "text/plain") {
      return false;
    }
    let n = new DOMParser().parseFromString(e.content, "text/html");
    return t.find(e => n.querySelector(e));
  });
  let m = async e => f(e, ["img", "picture"]);
  let g = async e => f(e, ["code"]);
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let y = e => {
    let n;
    let i = (e == null ? undefined : e.length) ?? 0;
    if (i === 1) {
      n = String(e == null ? undefined : e[0]);
    } else if (i > 1) {
      n = JSON.stringify(e);
    }
    return n;
  };
  let w = e => {
    let {
      message: t,
      messageTextContent: n
    } = e;
    let v = chatConversationSelectors.selectConversation(t.conversation_id || "");
    let f = e => {
      var n;
      var i;
      if (!(t == null ? undefined : t.reply_id)) {
        return;
      }
      let o = y((i = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t == null ? undefined : t.reply_id)) === null || i === undefined ? undefined : (n = i.attachments) === null || n === undefined ? undefined : n.map(e => e.key).filter(Boolean));
      teaAnalyticsEventTracker.trackEvent("code_block_show", {
        code_type: e,
        message_id: t.message_id,
        section_id: t.section_id,
        conversation_id: t.conversation_id,
        bot_id: v == null ? undefined : v.bot_id,
        collection_id: o
      });
    };
    let w = async () => {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
      let n = e == null ? undefined : e.getCanvasTeaParams();
      teaAnalyticsEventTracker.trackEvent("copy", {
        if_regenerated: +!!localRegenCheck.shouldRegenerate(t),
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", t.conversation_id || ""),
        message_id: t == null ? undefined : t.message_id,
        section_id: t == null ? undefined : t.section_id,
        conversation_id: t.conversation_id || "",
        bot_id: v == null ? undefined : v.bot_id,
        click_from: "code_block",
        ...n
      });
    };
    let k = skillPinModalCallback.useSkillPinCallback(async () => {
      try {
        let [e, i, l] = await Promise.all([_(navigator.clipboard), m(navigator.clipboard), g(navigator.clipboard)]);
        let r = async (e, i) => {
          let a = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
          let s = a == null ? undefined : a.getCanvasTeaParams();
          teaAnalyticsEventTracker.trackEvent("right_click_copy", {
            message_id: t == null ? undefined : t.message_id,
            bot_id: v == null ? undefined : v.bot_id,
            conversation_id: t.conversation_id || "",
            ...(i ? {
              start_index: String(utf8EncodingUtils_1.Utf8Utils.length(String(n == null ? undefined : n.slice(0, i.start)))),
              end_index: String(utf8EncodingUtils_1.Utf8Utils.length(String(n == null ? undefined : n.slice(0, Number(i.start) + i.end))))
            } : {
              start_index: "",
              end_index: ""
            }),
            skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
            is_image: e.includes("image") ? "1" : "0",
            content_type: y(e) ?? "",
            ...s
          });
        };
        if (e && !i && !l) {
          navigator.clipboard.readText().then(e => {
            let t = n == null ? undefined : n.indexOf(e);
            let i = e.length;
            if (n && t !== -1 && i > 0) {
              r(["text"], {
                start: t,
                end: i
              });
            }
          }).catch(e => {
            if ((e == null ? undefined : e.name) === "NotAllowedError") {
              loggerServiceCore.defaultLogger.console.warning({
                eventName: "copy_text_error",
                meta: {
                  error: e
                }
              });
              return;
            }
            throw e;
          });
          return;
        }
        let a = [!!e && "text", !!l && "code", !!i && "image"].filter(Boolean);
        r(a);
      } catch (e) {
        return;
      }
    });
    let C = skillPinModalCallback.useSkillPinCallback(function () {
      let {
        name: n = ""
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      teaAnalyticsEventTracker.trackEvent("download", {
        conversation_id: t.conversation_id || "",
        bot_id: v == null ? undefined : v.bot_id,
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        message_id: t.message_id,
        content_type: getFileExtension.getFileExtension(n),
        click_from: "response_attachment"
      });
    });
    return {
      onClickAttachmentEvent: C,
      onClickDownloadAttachmentEvent: skillPinModalCallback.useSkillPinCallback(function () {
        let {
          name: n = ""
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        teaAnalyticsEventTracker.trackEvent("click_response_attachment", {
          conversation_id: t.conversation_id || "",
          bot_id: v == null ? undefined : v.bot_id,
          skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
          message_id: t.message_id,
          content_type: getFileExtension.getFileExtension(n)
        });
      }),
      clickCodeDetailButtonEvent: (e, n, i) => {
        var o;
        var a;
        if (!(t == null ? undefined : t.reply_id)) {
          return;
        }
        let _ = y((a = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t == null ? undefined : t.reply_id)) === null || a === undefined ? undefined : (o = a.attachments) === null || o === undefined ? undefined : o.map(e => e.key).filter(Boolean));
        if (e) {
          f(n);
        }
        teaAnalyticsEventTracker.trackEvent("click_detail_button", {
          button_name: e ? "expand" : "hide",
          skill_id: t.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(t.skill?.skill_type_no_default),
          message_id: t.message_id,
          section_id: t.section_id,
          conversation_id: t.conversation_id,
          bot_id: v == null ? undefined : v.bot_id,
          collection_id: _,
          position: (i ?? 0) + 1
        });
      },
      codeBlockShowEvent: f,
      clickCodeBarCopyEvent: w,
      clickRightCopyEvent: k,
      codeBarShowEvent: skillPinModalCallback.useSkillPinCallback(e => {
        var n;
        var i;
        if (!(t == null ? undefined : t.reply_id)) {
          return;
        }
        let s = y((i = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t == null ? undefined : t.reply_id)) === null || i === undefined ? undefined : (n = i.attachments) === null || n === undefined ? undefined : n.map(e => e.key).filter(Boolean));
        teaAnalyticsEventTracker.trackEvent("show_pill_button", {
          skill_id: t.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(t.skill?.skill_type_no_default),
          message_id: t.message_id,
          section_id: t.section_id,
          conversation_id: t.conversation_id,
          bot_id: v == null ? undefined : v.bot_id,
          collection_id: s,
          position: (e ?? 0) + 1
        });
      })
    };
  };
  require.d(exports, {
    createMessageAnalyticsHandlers: function () {
      return w;
    }
  });
}