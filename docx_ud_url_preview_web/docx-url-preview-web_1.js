// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'docxUrlPreviewExports'
// - Resolved require(777722) to 'docx-url-preview-exports'
// - Updated imported property 'LL' to 'CacheType' (module 777722)
// - Updated imported property 'fO' to 'UrlPreviewCard' (module 777722)
// - Updated imported property 'Hd' to 'cardPreviewCdw' (module 777722)
// - Updated imported property 'wv' to 'UrlPreviewDisplay' (module 777722)
// - Updated imported property 'vc' to 'urlPreviewManager' (module 777722)
// - Updated imported property '$J' to 'processPreviewIcon' (module 777722)
// - Updated imported property 'S1' to 'initPreviewManager' (module 777722)
// - Updated imported property 'Xn' to 'UrlPreviewApi' (module 777722)
// - Updated imported property 'Nb' to 'setEnvironment' (module 777722)
// - Updated imported property 'a3' to 'setJssdkSession' (module 777722)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_web.3755f56c.js
         * chunkId: 5926
         * moduleId: 26153
         */
module.exports = function (module, exports, require) {
  var docxUrlPreviewExports = require("docx-url-preview-exports") /*id: 777722*/;
  let {
    getTempUrlPreview: i,
    getTempUrlPreviewByBatch: u,
    getTempUrlPreviewByBatchV2: c,
    getUrlPreviews: f,
    notifyCreatePreview: o
  } = docxUrlPreviewExports.UrlPreviewApi;
  require.r(exports);
  require.d(exports, {
    CacheType: function () {
      return docxUrlPreviewExports.CacheType;
    },
    CardPreview: function () {
      return docxUrlPreviewExports.UrlPreviewCard;
    },
    ElementType: function () {
      return docxUrlPreviewExports.cardPreviewCdw;
    },
    InlinePreview: function () {
      return docxUrlPreviewExports.UrlPreviewDisplay;
    },
    config: function () {
      return docxUrlPreviewExports.urlPreviewManager;
    },
    getTempUrlPreview: function () {
      return i;
    },
    getTempUrlPreviewByBatch: function () {
      return u;
    },
    getTempUrlPreviewByBatchV2: function () {
      return c;
    },
    getUrlPreviewInlineElementFromEntity: function () {
      return docxUrlPreviewExports.processPreviewIcon;
    },
    getUrlPreviews: function () {
      return f;
    },
    init: function () {
      return docxUrlPreviewExports.initPreviewManager;
    },
    notifyCreatePreview: function () {
      return o;
    },
    service: function () {
      return docxUrlPreviewExports.UrlPreviewApi;
    },
    setEnv: function () {
      return docxUrlPreviewExports.setEnvironment;
    },
    setJssdkSession: function () {
      return docxUrlPreviewExports.setJssdkSession;
    }
  });
}