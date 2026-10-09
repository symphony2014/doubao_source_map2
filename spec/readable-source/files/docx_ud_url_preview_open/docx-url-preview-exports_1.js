// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hd' to 'cardPreviewConfig'
// - Renamed export 'LL' to 'CacheTypes'
// - Renamed export 'Nb' to 'setPreviewEnv'
// - Renamed export 'O4' to 'previewClassName'
// - Renamed export 'Q' to 'stripUrlSearchParam'
// - Renamed export 'S1' to 'S1'
// - Renamed export 'U8' to 'useIsUnmounted'
// - Renamed export 'W_' to 'PreviewElement'
// - Renamed export 'Xn' to 'Xn'
// - Renamed export 'a3' to 'setJssdkSession'
// - Renamed export 'fO' to 'UrlPreviewCard'
// - Renamed export 'vc' to 'previewConfig'
// - Renamed export 'wv' to 'wv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 637556
         */
module.exports = function (module, exports, require) {
  var docxUrlPreviewComponents = require("docx-url-preview-components") /*id: 75487*/;
  var docxUrlPreviewOpenComponents = require("docx-url-preview-open-components") /*id: 822132*/;
  var docxLarkUrlPreviewUtils = require("docx-lark-url-preview-utils") /*id: 146261*/;
  var cardPreviewLocaleConstants_1 = require("card-preview-locale-constants_1") /*id: 568860*/;
  var reactHooksUtilities = require("react-hooks-utilities") /*id: 810817*/;
  var docxUrlPreviewManager_1 = require("docx-url-preview-manager_1") /*id: 829826*/;
  require.d(exports, {
    cardPreviewConfig: function () {
      return cardPreviewLocaleConstants_1.cardPreviewConstant;
    },
    CacheTypes: function () {
      return docxLarkUrlPreviewUtils.cacheTypes;
    },
    setPreviewEnv: function () {
      return docxLarkUrlPreviewUtils.setPreviewEnv;
    },
    previewClassName: function () {
      return docxLarkUrlPreviewUtils.componentName;
    },
    stripUrlSearchParam: function () {
      return docxLarkUrlPreviewUtils.stripQueryParams;
    },
    S1: function () {
      return docxUrlPreviewManager_1.initPreviewConfig;
    },
    useIsUnmounted: function () {
      return reactHooksUtilities.useIsUnmounted;
    },
    PreviewElement: function () {
      return docxUrlPreviewOpenComponents.BaseElement;
    },
    Xn: function () {
      return docxUrlPreviewManager_1.urlPreviewActions;
    },
    setJssdkSession: function () {
      return docxLarkUrlPreviewUtils.setJssdkSession;
    },
    UrlPreviewCard: function () {
      return docxUrlPreviewComponents.urlPreviewCard;
    },
    previewConfig: function () {
      return docxLarkUrlPreviewUtils.previewConfig;
    },
    wv: function () {
      return docxUrlPreviewManager_1.UrlPreviewLink;
    }
  });
}