// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ve' to 'ThreadMessageView'
// - Renamed export 'ev' to 'QuoteMessageView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14473.5ec9d82c.js
         * chunkId: 14473
         * moduleId: 91826
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var asyncSkillSendMessageBoxHandler = require("async-skill-send-message-box-handler") /*id: 801371*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = t => {
    let u = chatStoreManager.getStoreState("launcherRawSettingStore").launchData?.bot_language_list ?? [];
    let c = chatStoreManager.getStoreState("launcherRawSettingStore").launchData?.language_list ?? [];
    let d = u.find(e => {
      return e.language_code === (t == null ? undefined : t.ext?.translate);
    })?.language_loc;
    d ||= c.find(e => {
      return e.language_code === (t == null ? undefined : t.ext?.translate);
    })?.language_loc;
    return d ?? ((t == null ? undefined : t.ext?.translate) || "en");
  };
  let g = t => {
    let {
      message: n
    } = t;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let o = responsiveScreenHooks.useIsNarrowScreen();
    return reactUseChangedRef.useChangedRef(n ? {
      quoteInfo: asyncSkillSendMessageBoxHandler.extractMessageAndRefContent({
        message: n,
        t: r,
        translateLanguage: f(n)
      }),
      isNarrow: o
    } : {}, deepEqualUtil_1.deepEqual) ?? {
      isNarrow: o
    };
  };
  let m = t => {
    let {
      quoteInfo: e,
      onQuoteClick: n
    } = t;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let r = (e == null ? undefined : e.onQuoteClick) ? () => {
      var t;
      if (n != null) {
        n();
      }
      if ((t = e.onQuoteClick) !== null && t !== undefined) {
        t.call(e);
      }
    } : n;
    let a = e == null ? undefined : e.refContent;
    let c = e == null ? undefined : e.messageContent;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-end",
      children: [a && reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
        className: o("mb-8"),
        text: a,
        onClick: r,
        allowMultiLine: true
      }), reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: c || i("chat_unsupported_message_type")
      })]
    });
  };
  let v = t => {
    let {
      message: e
    } = t;
    let n = g({
      message: e
    });
    return reactJsxRuntimeCoreReexport.jsx(m, {
      ...n
    });
  };
  require.d(exports, {
    ThreadMessageView: function () {
      return v;
    },
    QuoteMessageView: function () {
      return m;
    }
  });
}