// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'renderAsyncSkillMessageBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 264088
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      message: n
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let p = messageContentTypeAndStatusChecker.G7Q(n) ? messageContentUtils.formatMessage(n, false, u("chat_unsupported_message_type")) : "";
    let h = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(n, ["ext", "reference_content"]), []);
    let m = (h == null ? undefined : h.length) > 0 ? h == null ? undefined : h[0]?.text : "";
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        flex-column flex w-fit max-w-450 min-w-0 items-start gap-8
        rounded-s-radius-s bg-s-color-bg-trans px-16 py-9
        text-s-color-text-secondary s-font-base
        sm:text-15
      `,
      children: [m && reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
        text: m,
        className: "max-w-full justify-end",
        onClickClassName: "hover:bg-s-color-bg-trans-primary active:bg-s-color-bg-trans-primary cursor-pointer",
        allowMultiLine: false
      }), reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
        text: p
      })]
    });
  };
  require.d(exports, {
    renderAsyncSkillMessageBox: function () {
      return u;
    }
  });
}