// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'o' to 'messageErrorHandler'
// - Resolved require(36156) to 'message-error-handler'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'receiveMessageBoxSymbol'
// - Resolved require(869177) to 'receive-message-box-symbol'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'O' to 'handleMessageShowError' (module 36156)
// - Updated imported property 'R' to 'renderMessageTextWithAfterNode' (module 602492)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'R' to 'receiveMessageBox' (module 869177)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 776910
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var receiveMessageBoxSymbol = require("receive-message-box-symbol") /*id: 869177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function c(e, t, n) {
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
  let u = e => {
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
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
      text: (n == null ? undefined : n.ext?.default_display_content) || i18nTranslationUtils.i18nextTranslate("chat_unsupported_message_type")
    });
  };
  class d {
    constructor() {
      c(this, "pluginIdentifier", receiveMessageBoxSymbol.receiveMessageBox);
      c(this, "Content", u);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultReceiveMessageBoxPlugin: function () {
      return d;
    }
  });
}