// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useChatImageRender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 80227
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var imageEditHoverTagRenderer = require("image-edit-hover-tag-renderer") /*id: 474718*/;
  var imageContextMenuHook = require("image-context-menu-hook") /*id: 604173*/;
  var chatImagePreviewHandler = require("chat-image-preview-handler") /*id: 239861*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var chatCanvasPlugin = require("chat-canvas-plugin") /*id: 533520*/;
  var imageEditModes = require("image-edit-modes") /*id: 494752*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var batchDownloadImageCheckboxWrapper = require("batch-download-image-checkbox-wrapper") /*id: 144026*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = e => (isObjectOrFunction_1_1.isObjectOrFunction(e) && "type" in e ? e.type : undefined) === batchDownloadImageCheckboxWrapper.ImageCheckboxWrapper;
  let j = e => {
    let {
      children: t,
      item: n,
      imageList: o,
      renderHoverEle: a,
      onImageClickLegacy: l,
      conversationId: r,
      message: s,
      canvasLayoutState: d
    } = e;
    let c = reactCoreLibraryReexport.useRef(null);
    let [u, h] = reactCoreLibraryReexport.useState(imageEditModes.editModes.default);
    let {
      imageEditorProps: p,
      ...v
    } = imageActionUtils.getImageEditorProps({
      imageContent: n,
      conversationId: r,
      message: s,
      canvasLayoutState: d
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: T(t) ? reactJsxRuntimeCoreReexport.jsx(chatCanvasPlugin.ChatCanvasPlugin, {
        ref: c,
        className: "inline-flex",
        pluginIdentifier: "image-artifact-preview",
        ...v,
        canvasContent: {
          imageEditorProps: {
            ...p,
            initialEditTool: u
          }
        },
        children: reactCoreLibraryReexport.cloneElement(t, {
          onImageClick: (e, t) => {
            h(imageEditModes.editModes.default);
            if (l != null) {
              l(e, t, n, o, () => {
                var e;
                if ((e = c.current) === null || e === undefined) {
                  return undefined;
                } else {
                  return e.open();
                }
              });
            }
            loggerServiceCore.defaultLogger.persist.log({
              eventName: "image_canvas_open_start"
            });
          },
          renderHoverEle: e => n && (a == null ? undefined : a(n, e, e => {
            var t;
            if (e !== "regenerate" && e !== "continueEdit") {
              h(e);
              if ((t = c.current) !== null && t !== undefined) {
                t.open();
              }
            }
          }))
        })
      }) : t
    });
  };
  let N = e => {
    let {
      children: t,
      item: n,
      renderHoverEle: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: T(t) ? reactCoreLibraryReexport.cloneElement(t, {
        renderHoverEle: e => n && (o == null ? undefined : o(n, e, () => {}))
      }) : t
    });
  };
  let $ = e => {
    let {
      imageList: t,
      message: n,
      showRegenerate: w,
      onClickRegenerate: x,
      onDownloadStart: C,
      hideHoverTag: E = false,
      enableOpenCanvas: I = true
    } = e;
    let T = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let R = chatConversationSelectors.selectConversation((n == null ? undefined : n.conversation_id) || "");
    let {
      service: P
    } = chatIocServiceLoaderHook.useServiceLoader("chatViewService");
    let [O, Z, F] = batchImageStoreLogic.imageStore(e => [e.batchDownloadSelected, e.toggleImageUrl, e.selectedImageUrlWithMessageList], deepEqualityUtil_1.isDeepEqual);
    let M = useMediaQueryHook.mediaQueryHook({
      minWidth: 800
    }, true);
    let {
      imageEventCallbacks: A,
      onImageRender: W,
      renderImagePreview: D,
      onImageClickTrackEvent: L
    } = chatImagePreviewHandler.imagePreviewHandler({
      conversationId: (n == null ? undefined : n.conversation_id) || "",
      imageList: t,
      messageId: (n == null ? undefined : n.message_id) || "",
      replyId: (n == null ? undefined : n.reply_id) || "",
      message: n
    });
    let {
      contextMenu: B,
      showContextMenu: G
    } = imageContextMenuHook.useImageContextMenu({
      t: $,
      eventCallbacks: {
        onImageDownload: e => {
          let {
            format: a
          } = e;
          if (C != null) {
            C();
          }
          if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
            teaAnalyticsEventTracker.trackEvent("right_click_download", {
              message_id: n == null ? undefined : n.message_id,
              bot_id: chatConversationBotId.getConversationBotId((n == null ? undefined : n.conversation_id) || ""),
              conversation_id: (n == null ? undefined : n.conversation_id) || "",
              file_type: a,
              skill_name: (n == null ? undefined : n.skill?.skill_id_no_default) ? "images_generation" : null,
              skill_id: n == null ? undefined : n.skill?.skill_id_no_default,
              click_from: "chat",
              is_image: "1",
              content_type: "pic",
              section_id: n == null ? undefined : n.section_id,
              canvas_type: P == null ? undefined : P.getCanvasTeaParams()?.canvas_type
            });
          }
        },
        onImageCopy: () => {
          var s;
          let d = P == null ? undefined : P.getCanvasTeaParams();
          let c = {};
          if ((n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask) {
            c = {
              super_task_id: n == null ? undefined : n.async_task?.id,
              super_task_mode: (n == null ? undefined : (s = n.verbose) === null || s === undefined ? undefined : s.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
            };
          }
          if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
            teaAnalyticsEventTracker.trackEvent("right_click_copy", {
              ...d,
              message_id: n == null ? undefined : n.message_id,
              bot_id: chatConversationBotId.getConversationBotId((n == null ? undefined : n.conversation_id) || ""),
              conversation_id: (n == null ? undefined : n.conversation_id) || "",
              is_image: "1",
              skill_name: (n == null ? undefined : n.skill?.skill_id_no_default) ? "images_generation" : null,
              skill_id: n == null ? undefined : n.skill?.skill_id_no_default,
              content_type: "pic",
              section_id: n == null ? undefined : n.section_id,
              canvas_type: P == null ? undefined : P.getCanvasTeaParams()?.canvas_type,
              start_index: "",
              end_index: "",
              click_from: (d == null ? undefined : d.canvas_type) ? "canvas_left_answer" : "answer",
              ...c
            });
          }
        }
      }
    });
    let V = (e, t, n) => {
      let {
        clientX: i,
        clientY: o
      } = e;
      G({
        image: t,
        src: n,
        fileName: (R == null ? undefined : R.name) || "",
        pos: [i, o]
      });
    };
    let z = (e, t) => {
      if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
        teaAnalyticsEventTracker.trackEvent("image_hover_show", {
          ...(P == null ? undefined : P.getCanvasTeaParams()),
          click_from: "image_response_hover",
          message_id: n == null ? undefined : n.message_id,
          pic_id: t == null ? undefined : t.key
        });
      }
    };
    let X = reactCoreLibraryReexport.useMemo(() => {
      let e = (e, t, i, o, a) => {
        let {
          src: p
        } = t;
        if (O && i) {
          if (!F.map(e => e.url).includes(imageActionUtils.processImageData(i).downloadImage?.url ?? "") && F.length > 99) {
            samanthaToastFactory.toastInstance.warning({
              content: $("image_download_toast_downloadLimit"),
              theme: "light",
              showClose: false
            });
            return;
          }
          Z(imageActionUtils.processImageData(i).downloadImage?.url || "", n);
          return;
        }
        L(i);
        if ((i ? imageActionUtils.processImageData(i).previewImage?.url : p) && !(P == null ? undefined : P.exactImmersiveMode) && I) {
          if (a != null) {
            a(e, t, i, o);
          }
          if (i && M) {
            chatStoreManager.getStoreState("chatInputStore").updateHidePopoverWhenMount((n == null ? undefined : n.conversation_id) || "", true);
            chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap((n == null ? undefined : n.conversation_id) || "", chatAppEnums.SkillType.ImageGeneration);
          }
          return;
        }
        A.onImageClick(e, imageActionUtils.getThumbImage(i)?.url || (i == null ? undefined : i.image_ori?.url) || p || "");
      };
      return {
        onImageClickLegacy: e,
        onImageClick: function () {
          var t = arguments.length;
          var i = Array(t);
          var o = 0;
          for (; o < t; o++) {
            i[o] = arguments[o];
          }
          return e(...i, (e, t, i) => {
            var o;
            var a;
            return i && (P == null ? undefined : (a = P.openCanvasPanel) === null || a === undefined ? undefined : a.call(P, imageActionUtils.getImageEditorProps({
              imageContent: i,
              message: n,
              chatId: T == null ? undefined : T.chatId,
              conversationId: (n == null ? undefined : n.conversation_id) || ""
            }), (o = e.currentTarget) === null || o === undefined ? undefined : o.getBoundingClientRect()));
          });
        },
        onImageRender: W,
        onImageContextMenu: V,
        onImageMouseEnter: z
      };
    }, [t, R, T == null ? undefined : T.chatId, false]);
    let U = (R == null ? undefined : R.name) || "";
    let H = imageEditHoverTagRenderer.ImageEditHoverTagRenderer({
      imageFileName: U,
      message: n,
      showRegenerate: w,
      onClickRegenerate: x,
      onDownloadStart: C,
      hideHoverTag: E
    });
    let J = reactFunctionMemoHook.useMemoizedCallback(e => I ? reactJsxRuntimeCoreReexport.jsx(j, {
      message: n,
      conversationId: (n == null ? undefined : n.conversation_id) || "",
      renderHoverEle: H,
      ...e,
      ...X,
      imageList: t
    }) : reactJsxRuntimeCoreReexport.jsx(N, {
      renderHoverEle: H,
      children: e.children,
      item: e.item
    }));
    return {
      imageRenderProps: X,
      contextMenu: B,
      renderImagePreview: D,
      imageRenderWrapper: J,
      isCanvasExpand: chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand && e.canvasLayoutState !== chatPanelModes.PanelMode.NARROW_SIDE_PANEL)
    };
  };
  require.d(exports, {
    useChatImageRender: function () {
      return $;
    }
  });
}