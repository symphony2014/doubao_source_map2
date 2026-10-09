// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatReceiveMindMapSymbol'
// - Resolved require(325558) to 'chat-receive-mind-map-symbol'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'useSmoothTextHook'
// - Resolved require(899617) to 'use-smooth-text-hook'
// - Renamed variable 's' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'c' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'd' to 'chatMessageRetryHandler'
// - Resolved require(725789) to 'chat-message-retry-handler'
// - Renamed variable 'u' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable '_' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'm' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'v' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'f' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'h' to 'mindmapComponent_1'
// - Resolved require(805794) to 'mindmap-component_1'
// - Renamed variable 'g' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'b' to 'logoIconWhiteBgPath'
// - Resolved require(685324) to 'logo-icon-white-bg-path'
// - Renamed variable 'k' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'j' to 'useSmoothText' (module 899617)
// - Updated imported property 'k' to 'retryReceiveMessage' (module 725789)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'g' to 'receiveMindMapSym' (module 325558)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 26454
         */
module.exports = function (module, exports, require) {
  var chatReceiveMindMapSymbol = require("chat-receive-mind-map-symbol") /*id: 325558*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var useSmoothTextHook = require("use-smooth-text-hook") /*id: 899617*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var mindmapComponent_1 = require("mindmap-component_1") /*id: 805794*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var logoIconWhiteBgPath = require("logo-icon-white-bg-path") /*id: 685324*/;
  let y = e => {
    let {
      trackEvent: t
    } = e;
    let n = useLatestCallbackHook_1.useLatestCallback(e => () => t("mind_map_click", {
      button_name: e
    }));
    return reactCoreLibraryReexport.useMemo(() => ({
      onDownload: n("download"),
      onCopy: n("copy_mind_map"),
      onCopyImage: n("copy_mind_map_image"),
      onCopyHtml: n("copy_mind_map_text"),
      onZoomIn: n("zoom_in"),
      onZoomOut: n("zoom_out"),
      onZoomFit: n("zoom_fit"),
      onFullscreen: n("fullscreen")
    }), []);
  };
  var w = {
    "mindmap-container": "mindmap-container-YP8qlz",
    "mindmap-container-half": "mindmap-container-half-ONynAg",
    "action-button-container": "action-button-container-GPso4K"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = {
    initialExpandLevel: 4
  };
  let S = e => {
    let {
      t,
      value: n,
      isDone: i,
      isError: r,
      isForbid: o,
      markmapRef: a,
      className: l,
      iconUrl: s,
      extName: c,
      isMindMapFullscreenRef: d,
      trackEvent: u,
      handleRetry: _,
      customHandleEnterFullscreen: m
    } = e;
    let {
      onDownload: v,
      onCopy: f,
      onCopyImage: p,
      onCopyHtml: b,
      onZoomIn: S,
      onZoomOut: C,
      onZoomFit: E,
      onFullscreen: R
    } = y({
      trackEvent: u
    });
    let T = useLatestCallbackHook_1.useLatestCallback(() => {
      R();
      if (d) {
        d.current = true;
      }
      u("mind_map_show");
    });
    let j = useLatestCallbackHook_1.useLatestCallback(() => {
      if (d) {
        d.current = false;
      }
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: reactJsxRuntimeCoreReexport.jsx(mindmapComponent_1.default, {
        t: t,
        value: n ?? "",
        isDone: i,
        isError: r,
        isForbid: o,
        handleRetry: _,
        iconUrl: s,
        extName: c,
        markmapRef: a,
        className: l,
        onDownload: v,
        onCopy: f,
        onCopyImg: p,
        onCopyHtml: b,
        onZoomIn: S,
        onZoomOut: C,
        onZoomFit: E,
        onEnterFullscreen: T,
        onExitFullscreen: j,
        fullscreenRootElement: window.document.body,
        actionButtonClassName: w["action-button-container"],
        inMessage: true,
        largeIconSize: true,
        maxHeight: 400,
        minHeight: 400,
        markmapOptions: x,
        customHandleEnterFullscreen: m
      })
    });
  };
  function C(e) {
    let {
      message: t,
      inView: n,
      disableTrack: i,
      Component: o = S
    } = e;
    let h = reactCoreLibraryReexport.useRef();
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let x = reactCoreLibraryReexport.useRef(false);
    let C = messageContentUtils.formatMessage(t, false) || "";
    let E = chatMessageStatusCheck.isMessageFinished(t);
    let R = messageContentTypeAndStatusChecker.FFC(t);
    let T = messageContentTypeAndStatusChecker.VQ4(t);
    let {
      text: j
    } = useSmoothTextHook.useSmoothText(C, {
      enable: !E,
      maxFirstTextSmoothSize: 10
    });
    let N = R || E && !j;
    let P = async () => {
      (await chatMessageRetryHandler.retryReceiveMessage({
        message: t
      }))();
    };
    let I = useLatestCallbackHook_1.useLatestCallback((e, n) => {
      if (i) {
        return;
      }
      let l = chatConversationBotId.getConversationBotId(t == null ? undefined : t.conversation_id);
      let s = {
        ...n,
        message_id: t == null ? undefined : t.message_id,
        conversation_id: t == null ? undefined : t.conversation_id,
        bot_id: l,
        chat_type: chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatType,
        reply_id: t == null ? undefined : t.reply_id,
        skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill?.skill_type_no_default),
        whether_full_screen: x.current
      };
      teaAnalyticsEventTracker.trackEvent(e, s);
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        I("mind_map_show");
      }
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx(o, {
      t: y,
      value: j,
      isDone: E,
      isError: N,
      isForbid: T,
      handleRetry: P,
      iconUrl: logoIconWhiteBgPath,
      extName: y("brandName_doubao"),
      markmapRef: h,
      isMindMapFullscreenRef: x,
      className: a(w["mindmap-container"], (N || T) && w["mindmap-container-half"]),
      trackEvent: I,
      message: t
    });
  }
  function E(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class R {
    constructor() {
      E(this, "pluginIdentifier", chatReceiveMindMapSymbol.receiveMindMapSym);
      E(this, "Content", C);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveMindMapContentPlugin: function () {
      return R;
    }
  });
}