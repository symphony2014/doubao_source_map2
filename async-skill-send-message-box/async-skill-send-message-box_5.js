// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'renderMessageAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 935141
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillCopliotreadingLabels = require("skill-copliotreading-labels") /*id: 932866*/;
  var scaleUpActionFlags = require("scale-up-action-flags") /*id: 143434*/;
  var asyncAttachmentNodeUi = require("async-attachment-node-ui") /*id: 440766*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      fileName: t,
      enableScaleUpAction: n = true,
      isHitRisk: r = false,
      messageId: x,
      asrMediaType: w,
      scene: A,
      enableOpenCanvas: _ = true
    } = e;
    let {
      Tooltip: k = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let S = skillCopliotreadingLabels.useReadingSkillLabels();
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let {
      fileKey: $
    } = e;
    let {
      showRef: E,
      showZoom: R
    } = scaleUpActionFlags.getScaleUpFlags({
      enableScaleUpAction: n
    });
    let T = !!A || r || !_;
    let N = w === "video" || w === "audio";
    let {
      currentChatViewConfig: j
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let I = () => {
      if (j == null ? undefined : j.chatId) {
        let t = [];
        t = [{
          type: "attachment",
          fileKey: $,
          fileName: e.fileName || "",
          asrType: w === "video" ? "video" : w === "audio" ? "audio" : undefined
        }];
        let n = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[j.chatId];
        if (n !== chatAppEnums.SkillType.CodeAssistant) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.setRefContents({
                refContents: t,
                channel: n ? `skill_${n}` : "default"
              }, j.chatId);
            }
          });
        }
      }
    };
    let Z = i18nextLanguageGetter.getCurrentLanguage();
    let O = {
      zh: !!Z && i18nLanguageStorageUtils.isChineseLanguage(Z),
      i18nConfig: S,
      showRef: E,
      showZoom: R,
      onClickRef: I,
      className: o(e.className, "max-w-250"),
      viewOnly: T,
      renderIcon: undefined,
      customSubTitle: undefined
    };
    let P = reactCoreLibraryReexport.useRef(null);
    let M = reactJsxRuntimeCoreReexport.jsx(asyncAttachmentNodeUi.AsyncAttachmentNode, {
      ...e,
      ...O,
      isCanPreview: N,
      onClickFile: e => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "click_attachment_open_file",
          meta: {
            isPreRender: false,
            isCanPreview: N ? "1" : "0",
            isOpenCanvas: "1"
          }
        });
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(n => {
          var i;
          var r;
          if (n != null) {
            n.openCanvasPanel({
              conversationId: (j == null ? undefined : j.chatId) || "",
              messageId: x || "",
              mediaInfo: {
                type: w,
                title: t,
                vid: $
              },
              canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
            }, e == null ? undefined : (r = e.currentTarget) === null || r === undefined ? undefined : (i = r.getBoundingClientRect) === null || i === undefined ? undefined : i.call(r));
          }
        });
      },
      onClickRef: I,
      ref: P
    });
    if (T) {
      return reactJsxRuntimeCoreReexport.jsx(k, {
        content: C("cici_web_ai_coding_share_code_file_warning"),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "cursor-not-allowed",
          children: M
        })
      });
    } else {
      return M;
    }
  };
  require.d(exports, {
    renderMessageAttachment: function () {
      return x;
    }
  });
}