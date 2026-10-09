// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'r' to 'searchReferencesList'
// - Resolved require(263161) to 'search-references-list'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'rtlListIcon'
// - Resolved require(658544) to 'rtl-list-icon'
// - Renamed variable 's' to 'cardWithSpinAndChevron'
// - Resolved require(22941) to 'card-with-spin-and-chevron'
// - Renamed variable 'c' to 'threadIconConfig'
// - Resolved require(928349) to 'thread-icon-config'
// - Renamed variable 'd' to 'messageTrackingUtils'
// - Resolved require(353360) to 'message-tracking-utils'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'm' to 'chatSearchResultSymbol_1'
// - Resolved require(919392) to 'chat-search-result-symbol_1'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'S' to 'formatCardData' (module 353360)
// - Updated imported property 'G5' to 'extractChatSources' (module 268836)
// - Updated imported property 'c' to 'CardComponent' (module 22941)
// - Updated imported property 'Z' to 'ListIcon' (module 658544)
// - Updated imported property 'Z' to 'iconConfig' (module 928349)
// - Updated imported property '_' to 'SearchReferences' (module 263161)
// - Updated imported property 'z' to 'searchResultSymbol' (module 919392)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 708824
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var searchReferencesList = require("search-references-list") /*id: 263161*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlListIcon = require("rtl-list-icon") /*id: 658544*/;
  var cardWithSpinAndChevron = require("card-with-spin-and-chevron") /*id: 22941*/;
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  var messageTrackingUtils = require("message-tracking-utils") /*id: 353360*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      contentBlock: n
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let [m, v] = reactCoreLibraryReexport.useState(false);
    let {
      results: f
    } = (n == null ? undefined : n.content_obj) ?? {};
    let h = messageTrackingUtils.formatCardData(f);
    let {
      deepThinkingReference: g = []
    } = aiChatSourceExtractor.extractChatSources(h, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(cardWithSpinAndChevron.CardComponent, {
        title: p("web_search_deep_think_searchResult_label_resultCount_temp", {
          postProcess: "sprintf",
          sprintf: [g.length]
        }),
        prefixIcon: reactJsxRuntimeCoreReexport.jsx(rtlListIcon.ListIcon, {
          className: threadIconConfig.iconConfig.icon
        }),
        showSuffixIcon: true,
        hoverable: true,
        onClick: () => {
          v(!m);
        }
      }), m && reactJsxRuntimeCoreReexport.jsx(searchReferencesList.SearchReferences, {
        classname: "ml-4",
        childrenCollapse: false,
        references: g
      })]
    });
  };
  var chatSearchResultSymbol_1 = require("chat-search-result-symbol_1") /*id: 919392*/;
  function v(e, t, n) {
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
      v(this, "pluginIdentifier", chatSearchResultSymbol_1.searchResultSymbol);
      v(this, "type", "Content");
      v(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchResultBlockContentPlugin: function () {
      return f;
    }
  });
}