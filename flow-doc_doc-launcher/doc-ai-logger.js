// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ld' to 'logAiPerf'
// - Renamed export 'g4' to 'logAiError'
// - Renamed export 'kg' to 'logAiEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 472816
         */
module.exports = function (module, exports, require) {
  require("docx-performance-stage-collector") /*id: 753948*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var flowDocShortcutUtils = require("flow-doc-shortcut-utils") /*id: 606621*/;
  let s = {};
  let c = e => {
    let i;
    try {
      i = e instanceof Error ? JSON.stringify(e, Object.getOwnPropertyNames(e)) : typeof e == "object" && e != null ? JSON.stringify(e) : String(e);
    } catch (e) {
      return "safeStringify error";
    }
    return i;
  };
  function d(e, i) {
    let n = c(i);
    if (!flowDocShortcutUtils.isMobileBytedance) {
      runtimeEnvFlags.isLocalDev;
    }
    docxEventCollector.wrappedCollector("ccm_doc_ai_log_dev", {
      tag: e,
      msg: n,
      isMigration: true
    });
  }
  function u(e, i) {
    let n = c(i);
    if (!flowDocShortcutUtils.isMobileBytedance) {
      runtimeEnvFlags.isLocalDev;
    }
    docxUtilityHelpers.captureException(e, {
      extra: {
        subModule: "docxAI",
        info: n
      },
      useSlardarWeb: true
    });
    docxEventCollector.wrappedCollector("ccm_doc_ai_error_dev", {
      tag: e,
      error: n,
      isMigration: true
    });
  }
  function h(e) {
    e.isMigration = true;
    c(e);
    if (!flowDocShortcutUtils.isMobileBytedance) {
      runtimeEnvFlags.isLocalDev;
    }
    docxEventCollector.wrappedCollector("ccm_doc_ai_perf_dev", e);
  }
  window.addEventListener("beforeunload", () => {
    if (s) {
      h(s);
      s = null;
    }
  });
  require.d(exports, {
    logAiPerf: function () {
      return h;
    },
    logAiError: function () {
      return u;
    },
    logAiEvent: function () {
      return d;
    }
  });
}