// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useContentOpener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 559958
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  let a = () => {
    let e = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId || "";
    });
    let t = reactCoreLibraryReexport.useRef(0);
    return {
      openFileByKey: (n, i, o, a) => {
        let {
          attachments: s = [],
          messageId: c = "",
          conversationId: d = "",
          activePath: u
        } = i || {};
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(i => {
          if (i != null) {
            i.openCanvasPanel({
              messageId: c,
              conversationId: d,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              fileKey: n,
              attachments: s,
              isCodeFile: true,
              activePath: u,
              canvasVersion: t.current,
              chatId: e,
              teaCtx: o
            }, a);
          }
        });
        t.current += 1;
      },
      openCodeContent: (t, n, i, o, a) => {
        let {
          messageId: s = "",
          conversationId: c = "",
          autoRun: d,
          autoQuote: u = true
        } = i || {};
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(i => {
          if (i != null) {
            i.openCanvasPanel({
              messageId: s,
              conversationId: c,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              fileKey: "",
              attachments: [],
              modelGenContent: {
                code: t,
                language: n
              },
              isCodeFile: true,
              chatId: e,
              autoQuote: u,
              teaCtx: o,
              autoRun: d
            }, a);
          }
        });
      },
      openRepo: (n, i, o) => {
        let {
          id: a,
          name: s,
          url: c,
          activePath: d
        } = n || {};
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(n => {
          if (n != null) {
            n.openCanvasPanel({
              messageId: "",
              conversationId: "",
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              fileKey: a,
              canvasVersion: t.current,
              activePath: d,
              attachments: [{
                key: a,
                type: "link",
                identifier: a,
                local_key: a,
                name: s,
                url: c,
                repo_id: a
              }],
              isCodeFile: true,
              chatId: e,
              teaCtx: i
            }, o);
          }
        });
        t.current += 1;
      },
      openArtifact: (e, t, n, i, o, a) => {
        let {
          messageId: s = "",
          conversationId: c = "",
          isAutoOpen: d
        } = i || {};
        let {
          version: u
        } = n || {};
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(i => {
          if (i != null) {
            i.openCanvasPanel({
              conversationId: c,
              messageId: s,
              artifactId: e,
              artifactKey: t,
              defaultArtifacts: undefined,
              isCodeFile: true,
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
              chatId: c,
              version: u,
              isAutoOpen: d,
              artifactMeta: n,
              teaCtx: o
            }, a, d);
          }
        });
      }
    };
  };
  require.d(exports, {
    useContentOpener: function () {
      return a;
    }
  });
}