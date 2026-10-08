// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'MessageDivider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 822506
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      dividerItem: n
    } = e;
    let i = n.dividerType === "encrypt" ? t("settings_encryption_message_viewOnMobile") : t("start_new_topic");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        flex w-full max-w-full items-center justify-between self-center
        pt-[24px] pb-[20px]
      `,
      style: {
        willChange: "transform"
      },
      "data-testid": "message_section_divider",
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: "h-px flex-1 bg-dbx-fill-trans-30-disable"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          mx-[12px] text-12 leading-14 text-dbx-neutral-400 select-none
        `,
        children: i
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: "h-px flex-1 bg-dbx-fill-trans-30-disable"
      })]
    });
  };
  require.d(exports, {
    MessageDivider: function () {
      return i;
    }
  });
}