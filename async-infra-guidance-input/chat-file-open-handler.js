// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'createChatFileHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 145253
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let g = async e => e ? e.startsWith("local_") ? new Promise(t => {
    let n = true;
    let i = false;
    let o = () => {
      if (n) {
        s();
        n = false;
        if (!i) {
          clearTimeout(u);
        }
      }
    };
    let a = e => {
      o();
      t(e);
    };
    let s = chatStoreManager.getStore("chatViewCoreStore").subscribe(t => {
      let {
        currentChatViewConfig: n
      } = t;
      if (!n) {
        return;
      }
      let {
        chatType: i,
        chatId: o,
        chatKey: s
      } = n;
      if (i === chatConversationTypes.ConversationTypes.Conversation) {
        if (s && s === e) {
          a(o);
        } else {
          a(null);
        }
      }
    });
    let u = window.setTimeout(() => {
      i = true;
      a(null);
    }, 60000);
  }) : e : null;
  let y = async e => {
    let t = await g(e);
    return !!t && new Promise(e => {
      let n = true;
      let r = false;
      let o = () => {
        if (n) {
          u();
          n = false;
          if (!r) {
            clearTimeout(c);
          }
        }
      };
      let l = t => {
        o();
        e(t);
      };
      let u = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        var r;
        var u;
        let p;
        let f = conversationMessageUtils_1.getAvailableMessage(e, t);
        if (!isUndefinedCheck.isUndefined(f == null ? undefined : f.verbose)) {
          if (f == null ? undefined : (r = f.verbose) === null || r === undefined ? undefined : r.agent_to_skill?.skill_type) {
            p = f == null ? undefined : (u = f.verbose) === null || u === undefined ? undefined : u.agent_to_skill?.skill_type;
          } else if ((f == null ? undefined : f.verbose?.verbose_type) === "multi_agents_jump_to_agent") {
            p = JSON.parse((f == null ? undefined : f.verbose?.verbose_payload) || "{}")?.skill_type;
          }
          l(Number(p) === chatAppEnums.SkillType.ReadPDF);
        }
      });
      let c = window.setTimeout(() => {
        r = true;
        l(false);
      }, 60000);
    });
  };
  let _ = function ({
    chatViewConfig: e
  } = {}) {
    let t = (t, n) => {
      let {
        chatId: i
      } = e ?? {};
      let r = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), i);
      teaAnalyticsEventTracker.trackEvent("copilot_button_click", {
        bot_id: chatConversationBotId.getConversationBotId(i),
        conversation_type: r == null ? undefined : r.conversation_type,
        conversation_id: i,
        collection_id: t == null ? undefined : t.collectionId,
        message_id: t == null ? undefined : t.messageId,
        entrance_type: t == null ? undefined : t.entranceType
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "read_canvas_open_start",
        meta: {
          ...(n || {})
        }
      });
    };
    return {
      onAfterOpenFile: t,
      openFileByKey: (n, i, r, a, s) => {
        let {
          pdf: l = {},
          messageId: c,
          openFrom: d,
          delayToIntension: p = false
        } = r || {};
        let f = async () => {
          let {
            anchorPage: i,
            highlightArea: r,
            assetList: f,
            realFileKey: h,
            fileName: m
          } = l;
          if (!p || (await y(e == null ? undefined : e.chatId))) {
            chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
              if (t != null) {
                t.openCanvasPanel({
                  exactPluginIdentifier: "read-preview",
                  conversationId: (e == null ? undefined : e.chatId) || "",
                  messageId: c || "",
                  readContent: {
                    pdfId: n,
                    realFileKey: h ?? n,
                    pdfName: m,
                    assetList: f,
                    pdfAnchorConfig: {
                      page: i,
                      areas: r
                    },
                    teaCtx: a,
                    openFrom: d
                  },
                  canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
                }, s);
              }
            });
            t(a, {
              openFrom: d
            });
          }
        };
        if (i === "PDF") {
          f();
          return false;
        }
      },
      openFileByLink: (n, i, r, a) => {
        let {
          attchmentType: s,
          pdf: l = {},
          messageId: c,
          openFrom: d,
          delayToIntension: p = false
        } = i || {};
        let h = async () => {
          let {
            anchorPage: i,
            highlightArea: s,
            assetList: h,
            realFileKey: m
          } = l;
          if (!p || (await y(e == null ? undefined : e.chatId))) {
            n = arxivUrlNormalizer.normalizeArxivUrl(n);
            chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
              if (t != null) {
                t.openCanvasPanel({
                  exactPluginIdentifier: "read-preview",
                  conversationId: (e == null ? undefined : e.chatId) || "",
                  messageId: c || "",
                  readContent: {
                    pdfUrl: n,
                    pdfName: n,
                    realFileKey: m ?? n,
                    assetList: h,
                    pdfAnchorConfig: {
                      page: i,
                      areas: s
                    },
                    teaCtx: r,
                    openFrom: d
                  },
                  canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
                }, a);
              }
            });
            t(r, {
              openFrom: d
            });
          }
        };
        if (s === "pdf") {
          h();
          return false;
        }
      }
    };
  };
  require.d(exports, {
    createChatFileHandler: function () {
      return _;
    }
  });
}