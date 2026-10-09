// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'SkillFileCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 499209
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var threadFileStatusEnum = require("thread-file-status-enum") /*id: 669935*/;
  var threadFileCard = require("thread-file-card") /*id: 94978*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var rtlIconComponent_1_2 = require("rtl-icon-component_1_2") /*id: 734871*/;
  var emptyObjectExport = require("empty-object-export") /*id: 475971*/;
  var docExportPopover = require("doc-export-popover") /*id: 381123*/;
  var base64PngImage = require("base64-png-image") /*id: 173215*/;
  var pngImageBase64 = require("png-image-base64") /*id: 961275*/;
  var docCanvasCardFallbackLight = require("doc-canvas-card-fallback-light") /*id: 470756*/;
  var docCanvasFallbackDarkImg = require("doc-canvas-fallback-dark-img") /*id: 661114*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let W = e => {
    var o;
    let {
      type: a,
      docId: l,
      conversationId: s,
      messageId: c
    } = e;
    let d = {
      [docExportPopover.FileType.PDF]: "pdf",
      [docExportPopover.FileType.MarkDown]: "markdown",
      [docExportPopover.FileType.Word]: "docx",
      [docExportPopover.FileType.WordDoc]: "docx"
    };
    let u = (() => {
      if (s && c) {
        return conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), s, c);
      }
    })();
    let {
      variables: _
    } = safeJsonUtils.safeParse(u == null ? undefined : u.ext?.input_skill, {});
    let {
      section_id: m
    } = u ?? {};
    let v = !!objectPathGetDefault.getObjectPathDefault(_, "action") || (u == null ? undefined : u.skill?.skill_type) === chatAppEnums.SkillType.WriteAssistant;
    let f = u == null ? undefined : u.async_task?.id;
    let p = u == null ? undefined : (o = u.verbose) === null || o === undefined ? undefined : o.super_task?.supertask_task_type;
    chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
      let t = {
        click_from: "reply_message",
        content_type: "ai_doc",
        content_sec_type: d[a],
        page_token: l,
        skill_id: v || !u ? String(chatAppEnums.SkillType.WriteAssistant) : null,
        skill_name: v || !u ? skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant) : null,
        conversation_id: s,
        bot_id: chatConversationBotId.getConversationBotId(s, true),
        message_id: c,
        section_id: m,
        ...(e == null ? undefined : e.getCanvasTeaParams())
      };
      if (f) {
        safePropertyAssignUtil.safePropertyAssign(t, {
          super_task_id: f,
          super_task_mode: p === "0" ? "search_task" : "complex_task",
          skill_id: "138",
          skill_name: "super_task"
        });
      }
      teaAnalyticsEventTracker.trackEvent("download", t);
    });
  };
  var Z = {
    container: "container-BpVxTh",
    icon: "icon-YjLkwu",
    "bottom-entry": "bottom-entry-GSWErB",
    bottomEntry: "bottom-entry-GSWErB",
    title: "title-mglfCD",
    "product-card": "product-card-M16gEj",
    productCard: "product-card-M16gEj"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let L = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: l,
      style: T,
      conversationId: j,
      messageId: N,
      docId: P,
      title: I,
      subTitle: $,
      shareMode: M = false,
      showBottomChatEntry: A = false,
      checked: F,
      showCardImage: O = false,
      status: L,
      latestCardVersion: B,
      isFinished: H = true,
      onBottomEntryClick: V,
      onClick: z,
      onDisabledClick: U,
      onBottomEntryShow: X
    } = e;
    let G = i18nTranslationUtils.useTranslationWithFallback();
    let J = reactCoreLibraryReexport.useRef(null);
    let {
      width: Q
    } = resizeObserverHooks.useResizeObserverEx({
      ref: J
    });
    let q = !isUndefinedCheck.isUndefined(Q) && Q < 400;
    let [K, Y] = reactCoreLibraryReexport.useState(false);
    let ee = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    let {
      ref: et,
      inView: en
    } = reactIntersectionObserver.useInView({
      threshold: 0.1
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (en) {
        if (X != null) {
          X();
        }
      }
    }, [en]);
    let ei = functionInvoker.invoke(() => ee ? H ? docCanvasFallbackDarkImg : pngImageBase64 : H ? docCanvasCardFallbackLight : base64PngImage);
    let er = functionInvoker.invoke(() => I || (L === threadFileStatusEnum.ThreadFileStatus.Generating ? "" : G("canvas_untitled_doc")));
    let eo = skillPinModalCallback.useSkillPinCallback(e => {
      if (isFunctionUtil_1.isFunction(t)) {
        t(e);
      } else if (t) {
        t.current = e;
      }
      J.current = e;
    });
    let ea = functionInvoker.invoke(() => {
      let e = [];
      if (!M) {
        e.push({
          type: "custom",
          element: reactJsxRuntimeCoreReexport.jsx(docExportPopover.DocXExportPopover, {
            pageToken: P,
            visible: K,
            reportParams: {
              show_from: "message"
            },
            onBeforeExport: e => {
              Y(false);
              W({
                type: e,
                docId: P,
                conversationId: j,
                messageId: N
              });
            },
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              className: s(Z["download-button"]),
              "data-testid": "doc_card_download_button",
              size: "small",
              color: "deep-grey",
              tooltip: G("doc_editor_toolbar_download"),
              newIcon: true,
              disabled: !H,
              onClick: e => {
                e.stopPropagation();
                Y(true);
              },
              children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {})
            })
          })
        });
      }
      return e;
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "doc_card",
      "data-status": L,
      ref: eo,
      className: s(Z.container, l, "flow-product-card"),
      style: T,
      children: [reactJsxRuntimeCoreReexport.jsx(threadFileCard.ThreadFileCard, {
        className: Z["product-card"],
        checked: F,
        showCardImage: O && !q,
        status: L,
        titleSkeleton: true,
        cardTitle: er,
        subTitle: $,
        latestCardVersion: B,
        fallBackCardImage: ei,
        cardIcon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1_2.RtlIcon, {
          className: Z.icon
        }),
        controlBarActions: ea,
        onHoverDisactive: () => Y(false),
        onClick: emptyObjectExport.emptyObject.onClickCard ?? z,
        onDisabledClick: U
      }), (() => {
        if (A) {
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            ref: et,
            className: Z["bottom-entry"],
            onClick: V,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: Z.title,
              children: G("skill_writing_docCard_footer_answer_in_chat")
            }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
              className: Z.icon
            })]
          });
        }
      })()]
    });
  });
  require.d(exports, {
    SkillFileCard: function () {
      return L;
    }
  });
}