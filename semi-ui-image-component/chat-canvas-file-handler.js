// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Os' to 'useCanvasFileHandler'
// - Renamed export 'r5' to 'CanvasFileHandlerContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 373517
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let h = () => ({
    onOpenCodeFile: (e, t) => {
      let {
        messageId: n,
        conversationId: i,
        fileKey: o,
        attachments: a,
        isCodeFile: s,
        chatId: c,
        teaCtx: d
      } = e;
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
        messageId: n,
        conversationId: i,
        canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
        fileKey: o,
        attachments: a,
        isCodeFile: s,
        chatId: c,
        teaCtx: d
      }, t));
    }
  });
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = reactCoreLibraryReexport.createContext(null);
  let f = function ({
    enableOpenCanvas: e = true
  } = {}) {
    let t = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let {
      onOpenCodeFile: n
    } = h();
    let f = reactCoreLibraryReexport.useContext(m);
    let g = (e, n) => {
      let i = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), t);
      teaAnalyticsEventTracker.trackEvent("copilot_button_click", {
        bot_id: chatConversationBotId.getConversationBotId(t),
        conversation_type: i == null ? undefined : i.conversation_type,
        conversation_id: t,
        collection_id: e == null ? undefined : e.collectionId,
        message_id: e == null ? undefined : e.messageId,
        entrance_type: e == null ? undefined : e.entranceType
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "read_canvas_open_start",
        meta: {
          ...(n || {})
        }
      });
    };
    return {
      onAfterOpenFile: g,
      onOpenFileByKey: (n, i, o, a, s) => {
        if (f == null ? undefined : f.onOpenFileByKey) {
          return f.onOpenFileByKey(n, i, o, a, s);
        }
        let {
          pdf: c = {},
          messageId: d,
          openFrom: u,
          fileName: p
        } = o || {};
        if (i === "video" || i === "audio") {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
            conversationId: t || "",
            messageId: d || "",
            mediaInfo: {
              type: i,
              title: p,
              vid: n
            },
            canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
          }, s));
          return false;
        }
        if (i === "PDF" && e) {
          let {
            anchorPage: e,
            highlightArea: i,
            assetList: o,
            realFileKey: p,
            fileName: h
          } = c;
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(l => l == null ? undefined : l.openCanvasPanel({
            exactPluginIdentifier: "read-preview",
            conversationId: t || "",
            messageId: d || "",
            readContent: {
              pdfId: n,
              realFileKey: p ?? n,
              pdfName: h,
              assetList: o,
              pdfAnchorConfig: {
                page: e,
                areas: i
              },
              teaCtx: a,
              openFrom: u
            },
            canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
          }, s));
          g(a, {
            openFrom: u
          });
          return false;
        }
      },
      onOpenFileByLink: (n, i, o, a) => {
        if (f == null ? undefined : f.onOpenFileByLink) {
          return f.onOpenFileByLink(n, i, o, a);
        }
        let {
          attchmentType: s,
          pdf: c = {},
          messageId: u,
          openFrom: p
        } = i || {};
        if (s === "pdf" && e) {
          let {
            anchorPage: e,
            highlightArea: i,
            assetList: s,
            realFileKey: h
          } = c;
          n = arxivUrlNormalizer.normalizeArxivUrl(n);
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(l => l == null ? undefined : l.openCanvasPanel({
            exactPluginIdentifier: "read-preview",
            conversationId: t || "",
            messageId: u || "",
            readContent: {
              pdfUrl: n,
              pdfName: n,
              realFileKey: h ?? n,
              assetList: s,
              pdfAnchorConfig: {
                page: e,
                areas: i
              },
              teaCtx: o,
              openFrom: p
            },
            canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
          }, a));
          g(o, {
            openFrom: p
          });
          return false;
        }
      },
      onOpenCodeFile: (t, i) => {
        if (e) {
          n(t, i);
        }
      }
    };
  };
  require.d(exports, {
    useCanvasFileHandler: function () {
      return f;
    },
    CanvasFileHandlerContext: function () {
      return m;
    }
  });
}