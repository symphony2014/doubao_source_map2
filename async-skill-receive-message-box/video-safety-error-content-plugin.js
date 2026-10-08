// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'imageErrorTooltipComponent'
// - Resolved require(233288) to 'image-error-tooltip-component'
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'chatVideoSafetyError'
// - Resolved require(301263) to 'chat-video-safety-error'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Y' to 'ImageErrorTooltip' (module 233288)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'a' to 'videoSafetyError' (module 301263)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 637841
         */
module.exports = function (module, exports, require) {
  var imageErrorTooltipComponent = require("image-error-tooltip-component") /*id: 233288*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatVideoSafetyError = require("chat-video-safety-error") /*id: 301263*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e, t, n) {
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
  let s = () => reactJsxRuntimeCoreReexport.jsx(imageErrorTooltipComponent.ImageErrorTooltip, {
    content: i18nTranslationUtils.i18nextTranslate("message_recieve_Video_error")
  });
  class c {
    constructor() {
      l(this, "pluginIdentifier", chatVideoSafetyError.videoSafetyError);
      l(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveVideoSafetyErrorContentPlugin: function () {
      return c;
    }
  });
}