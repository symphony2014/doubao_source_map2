// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'l' to 'searchCanvasServiceHook'
// - Resolved require(583489) to 'search-canvas-service-hook'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'rtlListIcon'
// - Resolved require(658544) to 'rtl-list-icon'
// - Renamed variable 'c' to 'cardWithSpinAndChevron'
// - Resolved require(22941) to 'card-with-spin-and-chevron'
// - Renamed variable 'd' to 'threadIconConfig'
// - Resolved require(928349) to 'thread-icon-config'
// - Renamed variable 'u' to 'messageTrackingUtils'
// - Resolved require(353360) to 'message-tracking-utils'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'v' to 'chatSearchResultSymbol_1'
// - Resolved require(919392) to 'chat-search-result-symbol_1'
// - Updated imported property 'S' to 'formatCardData' (module 353360)
// - Updated imported property 'A' to 'useMessageTracking' (module 353360)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'G5' to 'extractChatSources' (module 268836)
// - Updated imported property 'u' to 'useSearchCanvas' (module 583489)
// - Updated imported property 'c' to 'CardComponent' (module 22941)
// - Updated imported property 'Z' to 'ListIcon' (module 658544)
// - Updated imported property 'Z' to 'iconConfig' (module 928349)
// - Updated imported property 'z' to 'searchResultSymbol' (module 919392)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 818015
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var searchCanvasServiceHook = require("search-canvas-service-hook") /*id: 583489*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var rtlListIcon = require("rtl-list-icon") /*id: 658544*/;
  var cardWithSpinAndChevron = require("card-with-spin-and-chevron") /*id: 22941*/;
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  var messageTrackingUtils = require("message-tracking-utils") /*id: 353360*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      message: t,
      contentBlock: n
    } = e;
    let {
      id: h,
      content_obj: v
    } = n ?? {};
    let {
      summary: m,
      results: f
    } = v ?? {};
    let {
      conversation_id: g,
      reply_id: _
    } = t ?? {};
    let b = _ + h;
    let y = messageTrackingUtils.formatCardData(f);
    let [k, w, C] = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => [e.isExpand, e.matchedCanvasPluginIdentifier, e.isExpand && e.messageId === b]);
    let [x, S] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let {
      trackBase: T
    } = messageTrackingUtils.useMessageTracking({
      message: t
    });
    let {
      sources: R = []
    } = aiChatSourceExtractor.extractChatSources(y, []);
    let {
      onOpenSearchCanvas: E,
      onCloseCanvas: $
    } = searchCanvasServiceHook.useSearchCanvas({
      conversationId: g ?? "",
      messageReplyId: b ?? "",
      useDeepThinking: false,
      referenceInAll: R,
      isAutoOpenCanvasInNarrow: false,
      onTrackEvent: T
    });
    let j = () => {
      if (g && b) {
        if (T != null) {
          T("search_result_entrance_click", {
            show_from: "deep_research",
            whether_use_deep_thinking: "no"
          });
        }
        if (C) {
          $();
          return;
        }
        E();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (k && w === "receive-search-result-canvas") {
        j();
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (S) {
        if (T != null) {
          T("search_result_entrance_show", {
            show_from: "deep_research",
            whether_use_deep_thinking: "no"
          });
        }
      }
    }, [S]);
    if (g && R.length !== 0) {
      return reactJsxRuntimeCoreReexport.jsx(cardWithSpinAndChevron.CardComponent, {
        ref: x,
        hoverable: true,
        title: m,
        prefixIcon: reactJsxRuntimeCoreReexport.jsx(rtlListIcon.ListIcon, {
          className: threadIconConfig.iconConfig.icon
        }),
        showSuffixIcon: true,
        onClick: j
      });
    } else {
      return null;
    }
  };
  var chatSearchResultSymbol_1 = require("chat-search-result-symbol_1") /*id: 919392*/;
  function m(e, t, n) {
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
  class f {
    constructor() {
      m(this, "pluginIdentifier", chatSearchResultSymbol_1.searchResultSymbol);
      m(this, "type", "Content");
      m(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchResultBlockContentPlugin: function () {
      return f;
    }
  });
}