// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bi' to 'getEditorPadding'
// - Renamed export 'CH' to 'getLayoutMetrics'
// - Renamed export 'ZP' to 'isCompactMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 585439
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  var docxSidebarOpenedCheck = require("docx-sidebar-opened-check") /*id: 885927*/;
  var reducerFactoryUtil = require("reducer-factory-util") /*id: 978342*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var docxWidthModeUtils = require("docx-width-mode-utils") /*id: 337143*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxWidthModeStorage = require("docx-width-mode-storage") /*id: 851483*/;
  let p = {
    serviceWidthMode: docxWidthModeConstants.sizeModes.STANDARD
  };
  let S = {
    [docxWidthModeConstants.attrNames.WIDTH_MODE]: docxWidthModeConstants.sizeModes.STANDARD,
    [docxWidthModeConstants.attrNames.CATALOGUE_STATUS]: docxWidthModeConstants.statusModes.UNKNOWN,
    [docxWidthModeConstants.attrNames.HAS_UNFINISHED_COMMENT]: false,
    promise: null
  };
  let f = (() => {
    let n = typeof window == "undefined" ? {} : window.SERVER_DATA?.ccmCommonSetting || {};
    let r = n[docxWidthModeConstants.attrNames.WIDTH_MODE];
    let i = r;
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      i = docxWidthModeConstants.sizeModes.STANDARD;
    } else if (browserEnvironmentDetectionUtils.browserDetector.isFeed || docComponentFeatureFlags.isContentMarginOn()) {
      i = docxWidthModeConstants.sizeModes.FULL;
    }
    let o = n[docxWidthModeConstants.attrNames.CATALOGUE_STATUS];
    o = docxWidthModeStorage.getDocxWidthMode(docxSidebarOpenedCheck.isDocxSidebarOpened(reduxStoreInitializer.reduxStore.getState()));
    p.serviceWidthMode = r;
    return {
      ...S,
      token: docTokenHelperUtils.resolveDocToken(),
      ...n,
      [docxWidthModeConstants.attrNames.WIDTH_MODE]: docxWidthModeUtils.isValidSizeMode(i) ? i : docxWidthModeConstants.sizeModes.STANDARD,
      [docxWidthModeConstants.attrNames.CATALOGUE_STATUS]: o
    };
  })();
  let A = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.UPDATE_DOCUMENT_CONFIG]: (e, n) => {
      let {
        payload: r
      } = n;
      if (isEmptyUtil.isEmpty(r)) {
        return e;
      } else {
        return {
          ...e,
          ...r
        };
      }
    }
  }, f);
  exports.isCompactMode = A;
  require.d(exports, {
    getEditorPadding: function () {
      return p;
    },
    getLayoutMetrics: function () {
      return S;
    }
  });
}