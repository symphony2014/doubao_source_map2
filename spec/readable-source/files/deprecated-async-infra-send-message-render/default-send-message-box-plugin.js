// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'o' to 'messageErrorHandler'
// - Resolved require(36156) to 'message-error-handler'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'infraMessageBoxSymbol_1'
// - Resolved require(149385) to 'infra-message-box-symbol_1'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'O' to 'handleMessageShowError' (module 36156)
// - Updated imported property 'Y' to 'renderMessageText' (module 602492)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'X' to 'messageBoxSymbol' (module 149385)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deprecated-async-infra-send-message-render.14f6c1a7.js
         * chunkId: 93910
         * moduleId: 143644
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var infraMessageBoxSymbol_1 = require("infra-message-box-symbol_1") /*id: 149385*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function d(e, t, n) {
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
  let c = e => {
    let {
      message: n
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      messageErrorHandler.handleMessageShowError({
        message: n,
        reason: "message_fallback_content",
        from: "message_fallback_content"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      text: (n == null ? undefined : n.ext?.default_display_content) || i18nTranslationUtils.i18nextTranslate("chat_unsupported_message_type")
    });
  };
  class u {
    constructor() {
      d(this, "pluginIdentifier", infraMessageBoxSymbol_1.messageBoxSymbol);
      d(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultSendMessageBoxPlugin: function () {
      return u;
    }
  });
}