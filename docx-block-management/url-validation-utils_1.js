// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'YN' to 'isValidUrl'
// - Renamed export 'lx' to 'parseUrl'
// - Renamed export 'pN' to 'isApplinkUrl'
// - Renamed export 'vp' to 'isApplinkUrlNoPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 233855
         */
module.exports = function (module, exports, require) {
  var uiToastManager = require("ui-toast-manager") /*id: 117371*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  let r = e => {
    try {
      return new URL(e);
    } catch (e) {
      return;
    }
  };
  function a(e) {
    return !!docUrlProcessingUtilities.isStrictUrl(e) && !!r(e) && (!(encodeURIComponent(e).length > 3000) || (uiToastManager.toastManager.info(t("LarkCCM_Docs_LinkPreview_Over3k_Toast")), false));
  }
  function d(e) {
    return !!/^(http|https):\/\/applink\.(feishu|larkoffice|larksuite)(-pre|-boe)?\.(cn|com|net)/.test(e);
  }
  function s(e) {
    return !!d(e) && (uiToastManager.toastManager.info(t("LarkCCM_Docs_ApplinkInDoc_NoPreview_Toast")), true);
  }
  require.d(exports, {
    isValidUrl: function () {
      return a;
    },
    parseUrl: function () {
      return r;
    },
    isApplinkUrl: function () {
      return s;
    },
    isApplinkUrlNoPreview: function () {
      return d;
    }
  });
}