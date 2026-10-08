// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 166764
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
  class l {
    constructor() {
      n(this, "titleKey", i18nTranslationUtils.i18nextTranslate("newChat_skill_triggered_title_for_writing"));
      n(this, "Content", () => null);
    }
  }
  require.r(exports);
  require.d(exports, {
    WriteGuidanceSuggestionsPlugin: function () {
      return l;
    }
  });
}