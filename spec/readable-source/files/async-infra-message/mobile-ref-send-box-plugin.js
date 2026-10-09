// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'refContentWrapperComponent'
// - Resolved require(15351) to 'ref-content-wrapper-component'
// - Renamed variable 'l' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'a' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'c' to 'messageContentUtils'
// - Resolved require(976464) to 'message-content-utils'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'mobileSendBoxRef'
// - Resolved require(204620) to 'mobile-send-box-ref'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 's' to 'RefContentWrapper' (module 15351)
// - Updated imported property 'Y' to 'renderMessageText' (module 602492)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'UD' to 'formatMessage' (module 976464)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'o' to 'mobileSendBoxRef' (module 204620)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 971278
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var mobileSendBoxRef = require("mobile-send-box-ref") /*id: 204620*/;
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
  let m = e => {
    let {
      message: r,
      theme: d = "samantha"
    } = e;
    let f = objectPathGetDefault.getObjectPathDefault(r, "reference_info.display_content");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-end max-w-[var(--self-message-box-max-width,450px)]",
      children: [reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
        className: "mb-8 max-w-full",
        text: f || "",
        allowMultiLine: true
      }), reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        className: o(chatThemeStyleConfig.chatThemeConfig[d]?.sendClassNames),
        style: chatThemeStyleConfig.chatThemeConfig[d].cssVar,
        text: messageContentUtils.formatMessage(r, false, (r == null ? undefined : r.ext?.default_display_content) || i18nTranslationUtils.i18nextTranslate("chat_unsupported_message_type"))
      })]
    });
  };
  class h {
    constructor() {
      f(this, "pluginIdentifier", mobileSendBoxRef.mobileSendBoxRef);
      f(this, "Content", m);
    }
  }
  require.r(exports);
  require.d(exports, {
    MobileRefSendMessageBoxPlugin: function () {
      return h;
    }
  });
}