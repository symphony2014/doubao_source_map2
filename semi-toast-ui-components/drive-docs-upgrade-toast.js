// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'DocsUpgradeToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 847503
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var textFormatterComponent = require("text-formatter-component") /*id: 532796*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(textFormatterComponent.textFormatter, {
      text: `${e("drive_toast_docs_upgrading_refresh")}`,
      replacingMap: {
        s_refresh: {
          text: e("drive_toast_docs_upgrading_refresh_linkText"),
          className: "text-primary-KvoUiz"
        }
      },
      onTextClick: () => location.reload()
    });
  };
  require.d(exports, {
    DocsUpgradeToast: function () {
      return o;
    }
  });
}