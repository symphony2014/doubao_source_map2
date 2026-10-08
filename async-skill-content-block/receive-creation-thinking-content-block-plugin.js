// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'thinkQuotaCollapseBlockComponent'
// - Resolved require(353510) to 'think-quota-collapse-block-component'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'quoteBlockClassMap'
// - Resolved require(316103) to 'quote-block-class-map'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'd' to 'chatThinkingBlockSymbol_1'
// - Resolved require(432273) to 'chat-thinking-block-symbol_1'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'R' to 'ThinkQuotaCollapseBlock' (module 353510)
// - Updated imported property 'Z' to 'quoteBlockClassMap' (module 316103)
// - Updated imported property 'S' to 'thinkingBlockSymbol' (module 432273)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 171621
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var thinkQuotaCollapseBlockComponent = require("think-quota-collapse-block-component") /*id: 353510*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var quoteBlockClassMap = require("quote-block-class-map") /*id: 316103*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    var c;
    let {
      contentBlock: u,
      message: p
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let v = u == null ? undefined : u.content_obj?.text;
    let m = u == null ? undefined : u.content_obj?.status;
    let f = ((c = p.content_blocks) === null || c === undefined ? undefined : c.findIndex(e => e.id === u.id)) !== (p.content_blocks?.length || 0) - 1 || chatMessageStatusCheck.isMessageFinished(p);
    if (v) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-[-10px]",
        children: reactJsxRuntimeCoreReexport.jsx(thinkQuotaCollapseBlockComponent.ThinkQuotaCollapseBlock, {
          quotaBlockClassName: quoteBlockClassMap.quoteBlockClassMap["quote-block"],
          hasquotaBlockWrapper: m !== 2,
          isFinished: m === 2,
          contentStr: v,
          defaultExpand: !f,
          insertedElements: [],
          collapseButtonText: h(m === 2 ? "image_status_generated" : "image_status_generating"),
          onCollapseButtonClick: e => {
            if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
              teaAnalyticsEventTracker.trackEvent("image_prompt_progress_click", {
                skill_name: (p == null ? undefined : p.skill?.skill_id_no_default) ? "images_generation" : null,
                skill_id: p == null ? undefined : p.skill?.skill_id_no_default,
                to_status: e ? "open" : "close"
              });
            }
          },
          onMessageRender: () => {
            if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
              teaAnalyticsEventTracker.trackEvent("image_prompt_progress_start", {
                skill_name: (p == null ? undefined : p.skill?.skill_id_no_default) ? "images_generation" : null,
                skill_id: p == null ? undefined : p.skill?.skill_id_no_default
              });
            }
          }
        })
      });
    } else {
      return null;
    }
  };
  var chatThinkingBlockSymbol_1 = require("chat-thinking-block-symbol_1") /*id: 432273*/;
  function u(e, t, n) {
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
  class p {
    constructor() {
      u(this, "pluginIdentifier", chatThinkingBlockSymbol_1.thinkingBlockSymbol);
      u(this, "type", "Content");
      u(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreationThinkingContentBlockPlugin: function () {
      return p;
    }
  });
}