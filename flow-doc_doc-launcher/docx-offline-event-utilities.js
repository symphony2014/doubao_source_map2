// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$n' to 'isTimeExpired'
// - Renamed export 'HL' to 'collectOfflineEvent'
// - Renamed export 'IC' to 'isReplaceAction'
// - Renamed export 'Pj' to 'getSnapshotToken'
// - Renamed export 'cM' to 'noopHandler'
// - Renamed export 'd3' to 'isEmptyString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 35973
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  function a(e = 0) {
    return Date.now() - e > 129600000;
  }
  function s(e) {
    return typeof e == "string" && !e;
  }
  function c(e) {}
  function d(e) {
    return !!e.isReplace;
  }
  function u(e, i) {
    let o = "";
    if (e === docBlockActionConstants.offlineDataKeys.UPLOAD_FILE || e === docBlockActionConstants.offlineDataKeys.PASTE_FILE) {
      return i.snapshot.file?.token;
    } else {
      return i.snapshot.image?.token;
    }
  }
  function h(e, i, n) {
    let l = {
      action: e,
      recordId: platformDocUtils.p5T(i),
      from: "docx-webview"
    };
    if (n !== undefined) {
      l.msg = n;
    }
    docxEventCollector.wrappedCollector("docx_offline", l);
  }
  require.d(exports, {
    isTimeExpired: function () {
      return a;
    },
    collectOfflineEvent: function () {
      return h;
    },
    isReplaceAction: function () {
      return d;
    },
    getSnapshotToken: function () {
      return u;
    },
    noopHandler: function () {
      return c;
    },
    isEmptyString: function () {
      return s;
    }
  });
}