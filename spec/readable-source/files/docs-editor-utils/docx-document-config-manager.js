// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'documentConfigManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 836929
         */
module.exports = function (module, exports, require) {
  let o;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var docxSidebarOpenedCheck = require("docx-sidebar-opened-check") /*id: 885927*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var booleanConstantUtils = require("boolean-constant-utils") /*id: 143711*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docxWidthModeUtils = require("docx-width-mode-utils") /*id: 337143*/;
  var docxEditorLayoutUtils = require("docx-editor-layout-utils") /*id: 585439*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  function E(e) {
    return {
      type: storeActionConstants.actionTypes.UPDATE_DOCUMENT_CONFIG,
      payload: e
    };
  }
  var storeCoverActionsMap = require("store-cover-actions-map") /*id: 535604*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxWidthModeStorage = require("docx-width-mode-storage") /*id: 851483*/;
  let C = () => !!platformDocUtils.pEP();
  let k = e => {
    o = {
      ...e
    };
  };
  let I = () => o || {};
  let R = () => !isEmptyUtil.isEmpty(o);
  let y = {
    getLocalDocumentConfig() {
      let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : docTokenHelperUtils.resolveDocToken();
      let r = reduxStoreInitializer.reduxStore.getState().docx?.documentConfig || {};
      if (r && r.token !== n) {
        return {};
      } else {
        return r;
      }
    },
    getConfigByKeyWithDefault(e) {
      let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : docxEditorLayoutUtils.getLayoutMetrics[e];
      let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : docTokenHelperUtils.resolveDocToken();
      let i = reduxStoreInitializer.reduxStore.getState().docx?.documentConfig || {};
      if (i && i.token !== o) {
        return r;
      } else {
        return i[e];
      }
    },
    getRemoteDocumentConfig(e = docTokenHelperUtils.resolveDocToken()) {
      return docxApiConstantsExports.docxApiService.getDocumentConfig(e);
    },
    updateRemoteDocumentConfig(e, n = docTokenHelperUtils.resolveDocToken()) {
      let r = docxWidthModeConstants.widthModeKeys.map(n => ({
        scene: n,
        settingValue: e[n]
      })).filter(e => {
        let {
          settingValue: n
        } = e;
        return !!n;
      });
      return docxApiConstantsExports.docxApiService.updateDocumentConfig(n, ...r);
    },
    updateLocalDocumentConfig(e) {
      if (e[docxWidthModeConstants.attrNames.WIDTH_MODE]) {
        docxEditorLayoutUtils.getEditorPadding.serviceWidthMode = e[docxWidthModeConstants.attrNames.WIDTH_MODE];
      }
      reduxStoreInitializer.reduxStore.dispatch(E(e));
    },
    updateLocalCommentShow(e) {
      reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.toggleCommentPanel(e));
    },
    initDocumentConfig(e = docTokenHelperUtils.resolveDocToken(), n = false) {
      let r = reduxStoreInitializer.reduxStore.getState().docx.documentConfig;
      let o = C();
      let i = null;
      if (o) {
        if (platformDocUtils.pEP() === r.token) {
          k(r);
        } else if (!R()) {
          i = y.getRemoteDocumentConfig(platformDocUtils.pEP()).then(e => {
            k(e);
            i = null;
            return e;
          }).catch(() => ({}));
        }
      }
      let h = y.getRemoteDocumentConfig(e).catch(() => ({})).then(async r => {
        if (reduxStoreInitializer.reduxStore.getState().docx.documentConfig.token === e) {
          let h;
          let g = r[docxWidthModeConstants.attrNames.WIDTH_MODE];
          if (!docxWidthModeUtils.isValidSizeMode(g) && o) {
            if (i) {
              await i;
            }
            let e = I();
            g = e[docxWidthModeConstants.attrNames.WIDTH_MODE] || g;
            h = e[docxWidthModeConstants.attrNames.CATALOGUE_STATUS] || h;
          }
          if (booleanConstantUtils.constantTrueAlt()) {
            h = docxWidthModeStorage.getDocxWidthMode(docxSidebarOpenedCheck.isDocxSidebarOpened(reduxStoreInitializer.reduxStore.getState()));
          }
          let m = g;
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
            m = docxWidthModeConstants.sizeModes.STANDARD;
          } else if (browserEnvironmentDetectionUtils.browserDetector.isFeed) {
            m = docxWidthModeConstants.sizeModes.FULL;
          }
          docxEditorLayoutUtils.getEditorPadding.serviceWidthMode = g;
          let b = {
            ...r,
            promise: null,
            token: e,
            [docxWidthModeConstants.attrNames.CATALOGUE_STATUS]: h,
            [docxWidthModeConstants.attrNames.WIDTH_MODE]: docxWidthModeUtils.isValidSizeMode(m) ? m : docxWidthModeConstants.sizeModes.STANDARD
          };
          reduxStoreInitializer.reduxStore.dispatch(E(b));
          if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
            if (n) {
              platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.UPDATE_DOC_CONFIG, b);
            }
            docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.SPA_DOCUMENT_CONFIG_LOADED, b);
          }
        }
        return r;
      });
      let g = i ? Promise.all([i, h]) : h;
      reduxStoreInitializer.reduxStore.dispatch(E({
        promise: g,
        token: e
      }));
      return g;
    }
  };
  var O = y;
  require.d(exports, {
    documentConfigManager: function () {
      return O;
    }
  });
}