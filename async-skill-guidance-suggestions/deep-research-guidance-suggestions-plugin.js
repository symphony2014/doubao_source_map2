// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 259233
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  function n(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let l = () => null;
  class a {
    constructor() {
      n(this, "titleKey", i18nTranslationUtils.i18nextTranslate("web_deepResearch_page_desc"));
      n(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    DeepResearchGuidanceSuggestionsPlugin: function () {
      return a;
    }
  });
}