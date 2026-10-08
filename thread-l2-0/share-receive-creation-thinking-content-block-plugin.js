// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatThinkingBlockSymbol_1'
// - Resolved require(432273) to 'chat-thinking-block-symbol_1'
// - Renamed variable 'r' to 'thinkQuotaCollapseBlockComponent'
// - Resolved require(353510) to 'think-quota-collapse-block-component'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'quoteBlockClassMap'
// - Resolved require(316103) to 'quote-block-class-map'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'R' to 'ThinkQuotaCollapseBlock' (module 353510)
// - Updated imported property 'Z' to 'quoteBlockClassMap' (module 316103)
// - Updated imported property 'S' to 'thinkingBlockSymbol' (module 432273)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 902455
         */
module.exports = function (module, exports, require) {
  var chatThinkingBlockSymbol_1 = require("chat-thinking-block-symbol_1") /*id: 432273*/;
  var thinkQuotaCollapseBlockComponent = require("think-quota-collapse-block-component") /*id: 353510*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var quoteBlockClassMap = require("quote-block-class-map") /*id: 316103*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      contentBlock: i
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let s = i == null ? undefined : i.content_obj?.text;
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-[-10px]",
        children: reactJsxRuntimeCoreReexport.jsx(thinkQuotaCollapseBlockComponent.ThinkQuotaCollapseBlock, {
          quotaBlockClassName: quoteBlockClassMap.quoteBlockClassMap["quote-block"],
          isFinished: true,
          contentStr: s,
          defaultExpand: false,
          insertedElements: [],
          collapseButtonText: n("image_status_generated")
        })
      });
    } else {
      return null;
    }
  };
  function c(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class d {
    constructor() {
      c(this, "pluginIdentifier", chatThinkingBlockSymbol_1.thinkingBlockSymbol);
      c(this, "type", "Content");
      c(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveCreationThinkingContentBlockPlugin: function () {
      return d;
    }
  });
}