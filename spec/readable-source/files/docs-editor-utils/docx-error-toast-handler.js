// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J_' to 'handleDocxToast'
// - Renamed export '_N' to 'showErrorWithDebug'
// - Renamed export 'ej' to 'showErrorToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 230438
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e) {
    let {
      errorContext: n
    } = e;
    if (docxErrorDebugUtils.isDebugTraceEnabled() && n) {
      (function (e, n) {
        toastNotificationManager_1.toastManager.error({
          ...e,
          closable: true,
          duration: 10000,
          action: reactJsxRuntimeCoreReexport.jsx(CopyBtn, {
            style: {
              color: "var(--text-link-hover)",
              fontSize: "14px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              cursor: "pointer"
            },
            onClick: () => {
              docxErrorDebugUtils.copyErrorToClipboard(n);
            },
            children: t("CreationDoc_DocX_BugReport_Copy_btn")
          })
        });
        let r = docxErrorDebugUtils.formatErrorInfo(n);
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "toast_error_with_stack",
          info: JSON.stringify({
            error: r
          })
        });
      })(e, n);
    } else {
      toastNotificationManager_1.toastManager.error(e);
    }
  }
  function a(e) {
    return toastNotificationManager_1.toastManager.error(e);
  }
  function s(e) {
    if (e.type === "error") {
      u(e);
      return;
    }
    toastNotificationManager_1.toastManager.show(e);
  }
  require.d(exports, {
    handleDocxToast: function () {
      return s;
    },
    showErrorWithDebug: function () {
      return u;
    },
    showErrorToast: function () {
      return a;
    }
  });
}