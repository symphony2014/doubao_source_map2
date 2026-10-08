// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'r' to 'reactUseChangedRef'
// - Resolved require(284850) to 'react-use-changed-ref'
// - Renamed variable 'o' to 'asyncSkillSendMessageBoxHandler'
// - Resolved require(801371) to 'async-skill-send-message-box-handler'
// - Renamed variable 'a' to 'threadMessageQuoteRenderer'
// - Resolved require(91826) to 'thread-message-quote-renderer'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'sendQuotaContentSymbol'
// - Resolved require(767585) to 'send-quota-content-symbol'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useChangedRef' (module 284850)
// - Updated imported property 'VE' to 'extractMessageAndRefContent' (module 801371)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'ev' to 'QuoteMessageView' (module 91826)
// - Updated imported property 'b' to 'sendQuotaContent' (module 767585)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 516898
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var asyncSkillSendMessageBoxHandler = require("async-skill-send-message-box-handler") /*id: 801371*/;
  var threadMessageQuoteRenderer = require("thread-message-quote-renderer") /*id: 91826*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    return (e == null ? undefined : e.ext?.translate) || "en";
  };
  let d = e => {
    let {
      message: n
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let u = reactUseChangedRef.useChangedRef(n ? {
      quoteInfo: asyncSkillSendMessageBoxHandler.extractMessageAndRefContent({
        message: n,
        t: d,
        translateLanguage: c(n)
      }),
      isNarrow: false
    } : {}, deepEqualUtil_1.deepEqual) ?? {};
    return reactJsxRuntimeCoreReexport.jsx(threadMessageQuoteRenderer.QuoteMessageView, {
      ...u
    });
  };
  var sendQuotaContentSymbol = require("send-quota-content-symbol") /*id: 767585*/;
  function p(e, t, n) {
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
  class m {
    constructor() {
      p(this, "pluginIdentifier", sendQuotaContentSymbol.sendQuotaContent);
      p(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendQuoteContentPlugin: function () {
      return m;
    }
  });
}