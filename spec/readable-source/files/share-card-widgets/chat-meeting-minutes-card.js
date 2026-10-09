// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'meetingMinutesCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 614979
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var chatCanvasPlugin = require("chat-canvas-plugin") /*id: 533520*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var minutesArtifactPreviewSymbol = require("minutes-artifact-preview-symbol") /*id: 233806*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  var threadFileCard = require("thread-file-card") /*id: 94978*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var targetCircleIcon = require("target-circle-icon") /*id: 968096*/;
  var j = require.p + "static/image/meeting-minutes-card-fallback-light.6b25bd9d.png";
  var S = require.p + "static/image/meeting-minutes-card-fallback-dark.e7da59e2.png";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let R = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      clickable: r,
      startTime: n,
      text: i = "",
      isGenerating: a,
      onClick: o,
      ...s
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isExpand: c
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return {
        isExpand: t
      };
    });
    let d = functionInvoker.invoke(() => a ? l("desktop_meeting_card_generatingNotes") : n ? `${l("desktop_meeting_label_time")}${dateFormatUtils_1.formatTimestamp(n * 1000, "YYYY/MM/DD HH:mm")}` : "");
    let u = chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage
    }) ? "dark" : "light";
    let p = functionInvoker.invoke(() => u === "light" ? a ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACMCAMAAACQ9RF2AAAAOVBMVEUAAADw8PD29vbf39/29vbn5+fx8fHj4+Pv7+/n5+f////x9f/19vn9/v75+fn09//7/f/3+v/4+ftlDWcgAAAACnRSTlMAkM8Q3yCfQKBAEqaTtgAAAZtJREFUeNrt3OuOwiAQhmHoQXenDAfv/2I31WQT0QQ0Mh3ke+IFvIkyTvsDs/u1i/MHcdNpNTezZToU2/naMdHhpr3EkgLWmJVJAT6bE6lgjYJfyG4xjlRwxpMKHiEIQQhCvjgkhq1W4oYhaXtB4HYhYXtFahYStz5DwveHcKchUcvxbTnQkpKBVmug/5oqCMkhJIeQ3FAhLKT8pycklhYjKenNfUQ6hFIQwt2cmioIyQ0Vws00fJz4yEOQ/GRNbz7pSYXIT1bu9NRUQUhusBAWUBGSNglBzfIcuJOdVc0WLxcSEIIQhCAEIQi5h5AcQnIIySEkh5DcsCFqnvQobEJiISRuMlL5zXMKAmJXb4wqICQ3VAgLKYVcnJDSyzwnxWsJuZRGvBPCFaeGiVt/ejq+VRDyoL/JSgVik7VQIjfQvJaQy5shFJV8NVf8sdn6Fce3CkIe9DdZsbNiZ8XO+m+cOVJlqBB+DpP1CUzWB2NMVjWXXCykwqTjZhiikzmrGK1+1XNZjp7rg8xsPR3K29ncrD+T8wdxiz3vDX+8UB3iy3gMsQAAAABJRU5ErkJggg==" : j : a ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACMBAMAAABVBfx3AAAALVBMVEUAAAAsLzYsMDQrLjUtLjQsLjUsLTQsMDQtMDYtLzYuMTc5PEQwMzk1OD8xNDtBuIHLAAAACnRSTlMAzxCQj59AIN/fiIiNYgAAATxJREFUaN7t2s0NgkAQBeAXtQpPJlqA8eDBk7EJE8+evHuxBEvwRox/hFCAiAWgFQCxAGnCOy6GYVbDrvMK+DJhHxM2AcB87TLiTAGg5zIzARptLuJ00HLZGWPFR/aY8ZEt2nzkBFdDBBHEUMRPAkVSGpIFytCQQJ2Ygvh2IV4Bkup4sM/fH7GvNGJT3x1BBCmDeHd63pAkoOeiWErkhPlJtCBZBSSt7xFbhpAaW4QkVarKamxYMAkXoTc2rf0R24bQl6zq+4ScMNKxqM/f2LG+4Ugkk8gkMolMIpP83yQeFdB2VbnmkVsFJM4jXkI2HnX+3LILkRu63NDNQko2NlIY9MYqFHpj40+TMBByY8PIjCO2DJEdKzvWLEQaa21jN3zDwYiP7LDgIwc0+Uhfzy9G6HKRAQAsWbMch8ALPrGjTg7AO0MAAAAASUVORK5CYII=" : S);
    let R = skillPinModalCallback.useSkillPinCallback(e => {
      if (isFunctionUtil_1.isFunction(t)) {
        t(e);
      } else if (t) {
        t.current = e;
      }
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "meeting-minutes-card",
      ref: R,
      className: "cardWrapper-D0P6FQ",
      onClick: o,
      children: reactJsxRuntimeCoreReexport.jsx(threadFileCard.ThreadFileCard, {
        className: f("card-X9RhMx", {
          "disableCursorPointer-wvWHz3": !r
        }),
        ...s,
        latestCardVersion: true,
        cardTitle: i,
        subTitle: d,
        showCardImage: !c,
        fallBackCardImage: p,
        cardIcon: reactJsxRuntimeCoreReexport.jsx(targetCircleIcon.TargetCircleIcon, {
          className: "iconRecord-Z3BnaL"
        })
      })
    });
  });
  let N = () => {
    if (typeof window != "undefined") {
      let e = new URLSearchParams(window.location.search);
      let t = Number(e.get("t"));
      return {
        artifactId: e.get("artifactId"),
        messageId: e.get("messageId"),
        t
      };
    }
  };
  let T = function (e) {
    let {
      onAutoOpen: t,
      artifactId: r,
      messageId: i
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      let e = N();
      if (e && e.artifactId === r && e.messageId === i && Date.now() - e.t < 20000) {
        if (t != null) {
          t({
            artifactId: r
          });
        }
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(R, {
      ...e
    });
  };
  var P = e => {
    let {
      isPreviewOnly: f,
      onClick: m,
      message: g
    } = e;
    let v = reactCoreLibraryReexport.useRef(null);
    let {
      service: _
    } = chatIocServiceLoaderHook.useServiceLoader("chatViewService");
    let y = extractArtifactFromChatMessage.extractArtifactFromMessage(g);
    let b = (g == null || !g.is_finish) && !(y == null ? undefined : y.offset?.end);
    let w = () => {
      var e;
      if (!f) {
        if (m) {
          m({
            messageId: g == null ? undefined : g.message_id,
            artifactId: y == null ? undefined : y.identifier
          });
          return;
        }
        if ((g == null ? undefined : g.conversation_id) && (g == null ? undefined : g.message_id)) {
          if ((e = v.current) !== null && e !== undefined) {
            e.open();
          }
          teaAnalyticsEventTracker.trackEvent("output_preview_show", {
            ...(_ == null ? undefined : _.getCanvasTeaParams()),
            conversation_id: g == null ? undefined : g.conversation_id,
            bot_id: chatConversationBotId.getConversationBotId(g == null ? undefined : g.conversation_id),
            message_id: g == null ? undefined : g.message_id,
            section_id: g == null ? undefined : g.section_id,
            meeting_summary_tab: "summary_and_todo",
            canvas_id: y == null ? undefined : y.identifier
          });
        }
      }
    };
    if (!y) {
      return null;
    }
    let x = {
      intention: "meeting_minutes",
      reportParams: {
        conversationId: g == null ? undefined : g.conversation_id,
        messageId: g == null ? undefined : g.message_id,
        sectionId: g == null ? undefined : g.section_id,
        artifactId: y == null ? undefined : y.identifier,
        bot_id: chatConversationBotId.getConversationBotId(g == null ? undefined : g.conversation_id)
      },
      conversationId: g == null ? undefined : g.conversation_id,
      createTime: g == null ? undefined : g.create_time,
      artifactInfo: y,
      canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
    };
    return reactJsxRuntimeCoreReexport.jsx(chatCanvasPlugin.ChatCanvasPlugin, {
      ref: v,
      pluginIdentifier: minutesArtifactPreviewSymbol.minutesArtifactId,
      canvasContent: x,
      messageId: g == null ? undefined : g.message_id,
      children: reactJsxRuntimeCoreReexport.jsx(T, {
        isGenerating: b,
        text: y == null ? undefined : y.title,
        duration: infraUtilFunctions.parseNumber(y == null ? undefined : y.meeting_minutes?.duration),
        startTime: Number(g == null ? undefined : g.create_time) - Number(y == null ? undefined : y.meeting_minutes?.duration) / 1000,
        onClick: () => w(),
        clickable: !f,
        artifactId: y.identifier ?? "",
        messageId: (g == null ? undefined : g.message_id) || "",
        onAutoOpen: () => w()
      })
    });
  };
  let I = function (e, t = false, r) {
    let a = reactCoreLibraryReexport.useMemo(() => extractArtifactFromChatMessage.extractArtifactFromMessage(e), [e]);
    if (!a) {
      return [];
    }
    let {
      offset: o,
      intention: s
    } = a;
    if (!o) {
      return [];
    }
    let {
      start: l,
      end: c
    } = o;
    return [{
      range: [l ?? 0, c ?? Infinity],
      render: () => {
        if (s === "meeting_minutes") {
          return reactJsxRuntimeCoreReexport.jsx(P, {
            isPreviewOnly: t,
            message: e,
            onClick: r
          });
        }
      }
    }];
  };
  require.d(exports, {
    meetingMinutesCard: function () {
      return I;
    }
  });
}