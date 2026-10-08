// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L6' to 'showImageToast'
// - Renamed export 'Q' to 'getDocxImageUrl'
// - Renamed export 'T$' to 'DocxImageViewer'
// - Renamed export 'Um' to 'openImageViewer'
// - Renamed export 'lw' to 'isTranslated'
// - Renamed export 'u' to 'getImageText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 200311
         */
module.exports = function (module, exports, require) {
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var toastManagerWrapper = require("toast-manager-wrapper") /*id: 55407*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var constantFalseValue = require("constant-false-value") /*id: 17293*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  let h = {
    success: "success",
    error: "error"
  };
  let _ = {
    success: t("LarkCCM_DocxIM_SharePart_Copied_Toast"),
    error: t("LarkCCM_DocxIM_SharePart_CopyFailed_Toast")
  };
  let p = {
    success: "multi_block_anchor_copy_success",
    error: "multi_block_anchor_copy_fail"
  };
  let g = ["lark", "scene", "sub_scene", "scene_id", "doc_app_id", "multiPage", "chatTab", "agenda_platform"];
  function E(e) {
    return e.split("-")[1];
  }
  function m() {
    return flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus(reduxStoreInitializer.reduxStore.getState()).translated;
  }
  function b(e) {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      docxEventCollector.wrappedCollector("ccm_docs_toast_view", {
        sub_view: p[e]
      });
      return;
    }
    toastManagerWrapper.showToast({
      type: h[e],
      content: _[e],
      onClose: () => {
        docxEventCollector.wrappedCollector("ccm_docs_toast_view", {
          sub_view: p[e]
        });
      }
    });
  }
  function v(e) {
    let n = e.getText();
    return n.substr(0, n.length - 1);
  }
  function T(e) {
    var o;
    var s;
    let {
      docxRecord: f
    } = e;
    let {
      search: h,
      origin: _,
      pathname: p
    } = window.location;
    let E = (window.realLocation?.origin || _).replace(/docsource:/, "https:");
    if (constantFalseValue.falseConstant && ((o = window) === null || o === undefined ? undefined : o.local?.proxyHost)) {
      E = (s = window) === null || s === undefined ? undefined : s.local?.proxyHost;
    }
    let m = platformDocUtils.o0s.formatQuery(throttledOmitPathStringify.omitPathStringify(platformDocUtils.o0s.parseQuery(h), g));
    let b = p;
    if (browserEnvironmentDetectionUtils.browserDetector.isOpenDoc || opendocImageViewerUtils.hasNoNeedJsSDKSession || browserEnvironmentDetectionUtils.browserDetector.isInVC) {
      m = "";
      b = b.replace("/component", "");
    }
    return `${E}${b}${m}#${f}`;
  }
  require.d(exports, {
    showImageToast: function () {
      return b;
    },
    getDocxImageUrl: function () {
      return v;
    },
    DocxImageViewer: function () {
      return m;
    },
    openImageViewer: function () {
      return E;
    },
    isTranslated: function () {
      return T;
    },
    getImageText: function () {
      return h;
    }
  });
}