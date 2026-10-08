// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'collectEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 276732
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = function (e, n = {}, r) {
    try {
      let a = e.startsWith("flow_doc") || (r == null ? undefined : r.isOriginEventName) ? e : `flow_doc_${e}`;
      teaAnalyticsEventTracker.trackEvent(a, n);
      (function (e, n) {
        let r = {
          flow_doc_ccm_docs_page_view: {
            fields: []
          },
          flow_doc_docx_sdk_oops_dev: {
            fields: ["code", "type", "msg", "requestId", "ttLogId", "scmDocx", "scm", "oopsType", "blockType", "detail", "fg", "stack"]
          },
          flow_doc_docx_block_oops_dev: {
            fields: ["code", "type", "msg", "requestId", "ttLogId", "scmDocx", "scm", "blockType", "fg", "detail", "stack"]
          },
          flow_doc_editor_view: {
            fields: []
          },
          flow_doc_suite_error: {
            fields: ["code", "scene", "isDevMode"]
          },
          flow_doc_preview_view: {
            fields: []
          }
        };
        if (r[e]) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: e,
            meta: function (e, n) {
              let {
                fields: r
              } = e;
              return r.reduce((e, r) => {
                let i = n[r];
                if (i) {
                  let n = typeof i == "string" ? i.slice(0, 500) : i;
                  e[r] = n;
                }
                return e;
              }, {});
            }(r[e], n)
          });
        }
      })(a, n);
    } catch (e) {}
  };
  if (typeof window != "undefined") {
    window.collectEvent = a;
  }
  require.d(exports, {
    collectEvent: function () {
      return a;
    }
  });
}