// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GF' to 'resolveParentElement'
// - Renamed export 'kp' to 'getBlockRecords'
// - Renamed export 'qy' to 'copyCopilotContent'
// - Renamed export 'tq' to 'isMobileBytedance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 606621
         */
module.exports = function (module, exports, require) {
  require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  require("toast-notification-handler") /*id: 669090*/;
  require("user-environment-utils") /*id: 107339*/;
  var docCopilotServiceLoader = require("doc-copilot-service-loader") /*id: 424080*/;
  require("doc-sync-config-flags") /*id: 934075*/;
  require("docx-editor-constants-config_1") /*id: 914193*/;
  require("doc-block-type-constants") /*id: 433991*/;
  require("create-document-node-helper") /*id: 980168*/;
  require("docx-block-selection-handler_1") /*id: 801350*/;
  require("compat-browser-selection-service_1") /*id: 22128*/;
  require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  require("ai-action-constants_1") /*id: 893977*/;
  let l = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp;
  let s = (e, i) => e.map(e => {
    return {
      recordId: i.getBlockModelByBlockId(e.id)?.recordId,
      range: e.selection
    };
  }).filter(e => !!e.recordId);
  let a = e => {
    let {
      parent: i
    } = e;
    return i || e;
  };
  let c = e => {
    try {
      var r;
      var n;
      let l = docCopilotServiceLoader.getDocCopilotService(e);
      if (!l) {
        return false;
      }
      let s = l.docCopilotBase;
      let a = s.getResponseContentByTaskId(s.curTaskId);
      if (s.context?.isMobileBytedanceApp) {
        if ((n = s.context) !== null && n !== undefined && (r = n.copyCallback) !== null && r !== undefined) {
          r.call(n, a);
        }
      } else {
        s.copyTextWithHTML(a);
      }
      return true;
    } catch (e) {
      return false;
    }
  };
  require.d(exports, {
    resolveParentElement: function () {
      return a;
    },
    getBlockRecords: function () {
      return s;
    },
    copyCopilotContent: function () {
      return c;
    },
    isMobileBytedance: function () {
      return l;
    }
  });
}