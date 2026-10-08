// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'i' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57594.1338ce40.js
         * chunkId: 57594
         * moduleId: 356641
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  class o {
    constructor() {
      var t;
      var e;
      var n;
      t = "handleReceivingMessageError";
      e = () => {
        samanthaToastFactory.toastInstance.error({
          content: i18nTranslationUtils.i18nextTranslate("doc_copilot_security_toast"),
          showClose: false,
          id: "REWRITE_SAFETY_MESSAGE_ERROR_TOAST"
        });
      };
      if ((t = typeof (n = function (t, e) {
        if (typeof t != "object" || !t) {
          return t;
        }
        var n = t[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(t, e || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(t);
      }(t, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: e,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = e;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    RewriteSafetyMessageErrorPlugin: function () {
      return o;
    }
  });
}