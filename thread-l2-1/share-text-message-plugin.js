// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'r' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'o' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'a' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'sendMessageBoxTextSymbol'
// - Resolved require(377754) to 'send-message-box-text-symbol'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Y' to 'renderMessageText' (module 602492)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'T' to 'sendMessageBoxText' (module 377754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 718640
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var sendMessageBoxTextSymbol = require("send-message-box-text-symbol") /*id: 377754*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let p = e => {
    let {
      message: i,
      theme: c = "samantha"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      className: l(chatThemeStyleConfig.chatThemeConfig[c]?.sendClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[c].cssVar,
      text: messageContentUtils.formatMessage(i, false, (i == null ? undefined : i.ext?.default_display_content) || i18nTranslationUtils.i18nextTranslate("chat_unsupported_message_type"))
    });
  };
  class m {
    constructor() {
      u(this, "pluginIdentifier", sendMessageBoxTextSymbol.sendMessageBoxText);
      u(this, "Content", p);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareTextSendMessageBoxPlugin: function () {
      return m;
    }
  });
}