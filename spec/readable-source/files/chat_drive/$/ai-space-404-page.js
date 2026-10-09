// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'commonErrorPageBoundaryComponent'
// - Resolved require(318434) to 'common-error-page-boundary-component'
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'K' to 'CommonErrorPageBoundary' (module 318434)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: $.12e7ea28.js
         * chunkId: 15841
         * moduleId: 412457
         */
module.exports = function (module, exports, require) {
  var commonErrorPageBoundaryComponent = require("common-error-page-boundary-component") /*id: 318434*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(commonErrorPageBoundaryComponent.CommonErrorPageBoundary, {
      title: e("page_can_not_find_title"),
      subTitle: e("page_can_not_find_desc"),
      from: "Page404Global",
      showHomeBtn: true
    });
  };
  exports.default = a;
  require.r(exports);
  require.d(exports, {
    AiSpacePage404: function () {
      return a;
    }
  });
}