// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'c' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'd' to 'messageErrorHandler'
// - Resolved require(36156) to 'message-error-handler'
// - Renamed variable 'u' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'receiveMessageBoxSymbol'
// - Resolved require(869177) to 'receive-message-box-symbol'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'O' to 'handleMessageShowError' (module 36156)
// - Updated imported property 'R' to 'renderMessageTextWithAfterNode' (module 602492)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'R' to 'receiveMessageBox' (module 869177)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 541719
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var receiveMessageBoxSymbol = require("receive-message-box-symbol") /*id: 869177*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, n) {
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
  let h = e => {
    var m;
    let {
      message: f,
      theme: h = "samantha"
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      messageErrorHandler.handleMessageShowError({
        message: f,
        reason: "message_fallback_content",
        from: "message_fallback_content"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
      className: r(chatThemeStyleConfig.chatThemeConfig[h]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[h].cssVar,
      text: (f == null ? undefined : f.ext?.default_display_content) || i18nTranslationUtils.i18nextTranslate("chat_unsupported_message_type"),
      afterNode: chatMessageStatusCheck.isMessageFinished(f) || messageContentTypeAndStatusChecker.vlk(f) ? reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (m = f.verbose) === null || m === undefined ? undefined : m.extra?.risk_tips
      }) : null
    });
  };
  class g {
    constructor() {
      f(this, "pluginIdentifier", receiveMessageBoxSymbol.receiveMessageBox);
      f(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareDefaultReceiveMessageBoxContent: function () {
      return h;
    },
    ShareDefaultReceiveMessageBoxPlugin: function () {
      return g;
    }
  });
}