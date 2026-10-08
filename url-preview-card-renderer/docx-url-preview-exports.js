// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$J' to 'processPreviewIcon'
// - Renamed export 'Hd' to 'cardPreviewCdw'
// - Renamed export 'LL' to 'CacheType'
// - Renamed export 'Nb' to 'setEnvironment'
// - Renamed export 'O4' to 'previewClassName'
// - Renamed export 'Q' to 'cleanUrl'
// - Renamed export 'S1' to 'initPreviewManager'
// - Renamed export 'U8' to 'useIsUnmounted'
// - Renamed export 'W_' to 'PreviewElement'
// - Renamed export 'Xn' to 'UrlPreviewApi'
// - Renamed export 'a3' to 'setJssdkSession'
// - Renamed export 'fO' to 'UrlPreviewCard'
// - Renamed export 'vc' to 'urlPreviewManager'
// - Renamed export 'wv' to 'UrlPreviewDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 777722
         */
module.exports = function (module, exports, require) {
  var urlPreviewComponents = require("url-preview-components") /*id: 909577*/;
  var urlPreviewElementRenderers = require("url-preview-element-renderers") /*id: 634744*/;
  var urlPreviewCacheUtilityModule = require("url-preview-cache-utility-module") /*id: 779458*/;
  var cardPreviewLocaleConstants = require("card-preview-locale-constants") /*id: 7562*/;
  var reactHookUtilities = require("react-hook-utilities") /*id: 306319*/;
  var docxUrlPreviewManager = require("docx-url-preview-manager") /*id: 334000*/;
  require.d(exports, {
    processPreviewIcon: function () {
      return docxUrlPreviewManager.processPreviewIcon;
    },
    cardPreviewCdw: function () {
      return cardPreviewLocaleConstants.cardPreviewConstant;
    },
    CacheType: function () {
      return urlPreviewCacheUtilityModule.CacheType;
    },
    setEnvironment: function () {
      return urlPreviewCacheUtilityModule.setEnvironment;
    },
    previewClassName: function () {
      return urlPreviewCacheUtilityModule.componentName;
    },
    cleanUrl: function () {
      return urlPreviewCacheUtilityModule.stripUrlQueryParams;
    },
    initPreviewManager: function () {
      return docxUrlPreviewManager.initUrlPreviewManager;
    },
    useIsUnmounted: function () {
      return reactHookUtilities.useIsUnmounted;
    },
    PreviewElement: function () {
      return urlPreviewElementRenderers.BaseElementRenderer;
    },
    UrlPreviewApi: function () {
      return docxUrlPreviewManager.UrlPreviewApi;
    },
    setJssdkSession: function () {
      return urlPreviewCacheUtilityModule.setJssdkSession;
    },
    UrlPreviewCard: function () {
      return urlPreviewComponents.UrlPreviewCard;
    },
    urlPreviewManager: function () {
      return urlPreviewCacheUtilityModule.urlPreviewManager;
    },
    UrlPreviewDisplay: function () {
      return docxUrlPreviewManager.UrlPreviewDisplay;
    }
  });
}