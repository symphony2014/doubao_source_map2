// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'ImageEditHoverTagRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 474718
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var exitToAppIcon = require("exit-to-app-icon") /*id: 703191*/;
  var refreshRtlIcon = require("refresh-rtl-icon") /*id: 151364*/;
  var imageQuoteHandlerHooks = require("image-quote-handler-hooks") /*id: 536904*/;
  var docxCreationAgentHook = require("docx-creation-agent-hook") /*id: 933686*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var queryContextStore = require("query-context-store") /*id: 988837*/;
  var imageEditHoverTagButtons = require("image-edit-hover-tag-buttons") /*id: 304166*/;
  var hoverShowTagComponent = require("hover-show-tag-component") /*id: 145742*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let E = e => {
    let {
      imageFileName: t,
      message: n,
      hideHoverTag: E,
      showRegenerate: I,
      onClickRegenerate: S,
      onDownloadStart: T
    } = e;
    let {
      regeneratingCount: j,
      onUpdateRegeneratingCount: N
    } = queryContextStore.queryContextStore.getState();
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let R = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand && e.canvasLayoutState !== chatPanelModes.PanelMode.NARROW_SIDE_PANEL);
    let {
      refImageIntoImageAttachmentEnabled: P
    } = docxCreationAgentHook.useCreationAgent();
    let O = useMediaQueryHook.mediaQueryHook({
      minWidth: 401
    }, true);
    let {
      isRefImageKeyExist: Z,
      handleRefImage: F
    } = imageQuoteHandlerHooks.useImageQuoteHandler({
      chatId: n == null ? undefined : n.conversation_id
    });
    return reactFunctionMemoHook.useMemoizedCallback((e, a, r) => {
      if (!e) {
        return null;
      }
      let {
        format: u
      } = imageActionUtils.processImageData(e);
      let h = (t, a) => {
        var k;
        var w;
        t.stopPropagation();
        teaAnalyticsEventTracker.trackEvent("image_edit_button_click", {
          button_type: objectPathGetDefault.getObjectPathDefault({
            outPainting: "outPainting",
            inPainting: "inPainting",
            erase: "erase",
            continueEdit: "continue_edit",
            regenerate: "regenerate"
          }, a),
          pic_id: e.key,
          message_id: n == null ? undefined : n.message_id,
          skill_id: n == null ? undefined : n.skill?.skill_id,
          skill_name: isNullishCheck.isNil(n == null ? undefined : n.skill?.skill_type) ? undefined : skillTypeMappings.getSkillName(n == null ? undefined : n.skill?.skill_type)
        });
        if (a === "regenerate") {
          if (j >= 5) {
            samanthaToastFactory.toastInstance.warning({
              content: $("image_toast_generate_limit"),
              showClose: false,
              theme: "light"
            });
            return;
          }
          N(j + 1);
          if (S != null) {
            S((e == null ? undefined : e.image_ori?.width) || 1024, (e == null ? undefined : e.image_ori?.height) || 1024, (e == null ? undefined : e.gen_params?.prompt) || "", e == null ? undefined : e.gen_params?.ratio, e == null ? undefined : e.gen_params?.img_uri);
          }
          return;
        }
        if (a === "continueEdit") {
          F({
            image: e,
            imageQuoteFrom: "image_quote",
            entryType: "image_response_hover"
          });
        } else if (r) {
          r(a);
        } else {
          let i = (w = t.currentTarget) === null || w === undefined ? undefined : (k = w.offsetParent) === null || k === undefined ? undefined : k.parentElement?.offsetParent;
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
            var o;
            if (t == null) {
              return undefined;
            } else if ((o = t.openCanvasPanel) === null || o === undefined) {
              return undefined;
            } else {
              return o.call(t, imageActionUtils.getImageEditorProps({
                conversationId: (n == null ? undefined : n.conversation_id) || "",
                message: n,
                imageContent: e
              }), i == null ? undefined : i.getBoundingClientRect());
            }
          });
        }
      };
      let p = () => {
        var o;
        if ((n == null ? undefined : n.skill?.skill_type) === aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask) {
          return {
            super_task_id: n == null ? undefined : n.async_task?.id,
            super_task_mode: (n == null ? undefined : (o = n.verbose) === null || o === undefined ? undefined : o.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task"
          };
        } else {
          return {};
        }
      };
      let f = i => {
        i.stopPropagation();
        let g = imageActionUtils.processImageData(e).downloadImage?.url || "";
        let _ = imageActionUtils.getFileExtension(g);
        teaAnalyticsEventTracker.trackEvent("image_edit_button_click", {
          button_type: "download",
          pic_id: e == null ? undefined : e.key,
          message_id: n == null ? undefined : n.message_id,
          skill_id: n == null ? undefined : n.skill?.skill_id,
          skill_name: isNullishCheck.isNil(n == null ? undefined : n.skill?.skill_type) ? undefined : skillTypeMappings.getSkillName(n == null ? undefined : n.skill?.skill_type)
        });
        teaAnalyticsEventTracker.trackEvent("download", {
          content_type: "pic",
          content_sec_type: u && _ === "image" ? u : _,
          message_id: (n == null ? undefined : n.message_id) || "",
          conversation_id: (n == null ? undefined : n.conversation_id) || "",
          bot_id: (n == null ? undefined : n.bot_id) || "",
          section_id: (n == null ? undefined : n.section_id) || "",
          skill_id: n == null ? undefined : n.skill?.skill_id,
          skill_name: isNullishCheck.isNil(n == null ? undefined : n.skill?.skill_type) ? undefined : skillTypeMappings.getSkillName(n == null ? undefined : n.skill?.skill_type),
          click_from: "reply_message",
          ...p()
        });
        if (T != null) {
          T();
        }
        imageActionUtils.downloadImage({
          imageSrc: g,
          format: u,
          fileName: t,
          t: $
        });
      };
      let b = I && (e == null ? undefined : e.gen_params);
      let k = Z(e == null ? undefined : e.key);
      let M = (O ? [P ? {
        icon: k ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
          className: "p-4 text-12"
        }) : reactJsxRuntimeCoreReexport.jsx(exitToAppIcon.ExitToAppIcon, {
          className: "p-4 text-12"
        }),
        text: $("image_btn_quote"),
        tooltipText: $("image_btn_quote"),
        showTooltip: true,
        toolName: "continueEdit"
      } : undefined, b ? {
        icon: reactJsxRuntimeCoreReexport.jsx(refreshRtlIcon.RefreshIcon, {
          className: "p-4 !text-14"
        }),
        text: $("image_btn_regenerate"),
        tooltipText: $("image_btn_regenerate"),
        showTooltip: true,
        toolName: "regenerate"
      } : undefined] : []).filter(e => !!e);
      let A = reactJsxRuntimeCoreReexport.jsx(imageEditHoverTagButtons.ImageEditTagListWithDownload, {
        tagList: M,
        onDownload: f,
        onClick: h,
        isNewAgent: I
      });
      let W = reactJsxRuntimeCoreReexport.jsx(imageEditHoverTagButtons.ImageEditTagListCompact, {
        tagList: M,
        onDownload: f,
        onClick: h,
        isNewAgent: I
      });
      let D = reactJsxRuntimeCoreReexport.jsx(imageEditHoverTagButtons.ImageDownloadButton, {
        tagList: M,
        onDownload: f,
        onClick: h,
        isNewAgent: I
      });
      return !E && !R && hoverShowTagComponent.HoverShowTag(a > 250 ? A : a > 150 ? W : D);
    });
  };
  require.d(exports, {
    ImageEditHoverTagRenderer: function () {
      return E;
    }
  });
}