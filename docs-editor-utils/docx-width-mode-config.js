// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ce' to 'isConfigReady'
// - Renamed export 'XP' to 'isNotMobile'
// - Renamed export 'et' to 'updateWidthMode'
// - Renamed export 'ng' to 'getWidthMode'
// - Renamed export 'xt' to 'syncWidthMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 106194
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxDocumentConfigManager = require("docx-document-config-manager") /*id: 836929*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxEditorLayoutUtils = require("docx-editor-layout-utils") /*id: 585439*/;
  var docxWidthModeUtils = require("docx-width-mode-utils") /*id: 337143*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let _ = () => docxFeatureFlags.isNotMobile();
  function p(e, n, r) {
    var i;
    if (r) {
      return docxWidthModeConstants.sizeModes.STANDARD;
    }
    if (n) {
      return docxWidthModeConstants.sizeModes.FULL;
    }
    if (_()) {
      let e = docxDocumentConfigManager.documentConfigManager.getConfigByKeyWithDefault(docxWidthModeConstants.attrNames.WIDTH_MODE, docxWidthModeConstants.sizeModes.UNKNOWN);
      if (docxWidthModeUtils.isValidSizeMode(e)) {
        return e;
      }
    }
    return ((i = e.block_map[e.id]) === null || i === undefined ? undefined : i.data?.width_mode) || docxWidthModeConstants.sizeModes.STANDARD;
  }
  let g = _();
  let E = () => !!g && !!docxDocumentConfigManager.documentConfigManager.getLocalDocumentConfig().promise;
  let m = e => {
    let n;
    let r = docxDocumentConfigManager.documentConfigManager.getLocalDocumentConfig()[docxWidthModeConstants.attrNames.WIDTH_MODE];
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      n = docxWidthModeConstants.sizeModes.STANDARD;
    } else if (browserEnvironmentDetectionUtils.browserDetector.isFeed || docComponentFeatureFlags.isContentMarginOn()) {
      n = docxWidthModeConstants.sizeModes.FULL;
    } else {
      var _;
      var E;
      n = g ? docxEditorLayoutUtils.getEditorPadding.serviceWidthMode : (_ = e.block_map[e.id]) === null || _ === undefined ? undefined : _.data?.width_mode;
      if (!docxWidthModeUtils.isValidSizeMode(n)) {
        n = ((E = e.block_map[e.id]) === null || E === undefined ? undefined : E.data?.width_mode) || docxWidthModeConstants.sizeModes.STANDARD;
      }
    }
    if (r !== n) {
      let e = {
        [docxWidthModeConstants.attrNames.WIDTH_MODE]: n,
        token: docTokenHelperUtils.resolveDocToken()
      };
      if (browserEnvironmentDetectionUtils.browserDetector.isPcTemplate) {
        platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.UPDATE_DOC_CONFIG, e);
      }
      docxDocumentConfigManager.documentConfigManager.updateLocalDocumentConfig(e);
    }
  };
  let b = async e => {
    if (g) {
      let e = docxDocumentConfigManager.documentConfigManager.getLocalDocumentConfig();
      if (e.promise) {
        await e.promise;
      }
    }
    m(e);
  };
  require.d(exports, {
    isConfigReady: function () {
      return E;
    },
    isNotMobile: function () {
      return _;
    },
    updateWidthMode: function () {
      return m;
    },
    getWidthMode: function () {
      return p;
    },
    syncWidthMode: function () {
      return b;
    }
  });
}