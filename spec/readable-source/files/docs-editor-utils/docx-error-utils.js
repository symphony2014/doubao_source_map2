// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b2' to 'trackInvalidRecords'
// - Renamed export 'q4' to 'isTimeoutError'
// - Renamed export 'JZ' to 'isCrossOperationError'
// - Renamed export 'mZ' to 'partitionByDocToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 390897
         */
module.exports = function (module, exports, require) {
  var statusCodes = require("status-codes") /*id: 497936*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  require("docx-editor-constants-config") /*id: 302915*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  require("url-parser-util") /*id: 14217*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  function s(e) {
    return e.code === statusCodes.statusCodes.STATUS_CODE.TIMEOUT && typeof e.message == "string" && e.message.indexOf("timeout") > -1;
  }
  function d(e) {
    return e.code === docApiConstants.operationStatus.CROSS_BRAND || e.code === docApiConstants.operationStatus.CROSS_TENANT;
  }
  function f(e) {
    return collectionPartitionFactory.partitionCollection(e, docTokenHelperUtils.validateDocToken);
  }
  function h(e) {
    if (e.length) {
      try {
        throw Error("invalid record generator stack");
      } catch (n) {
        docxEventCollector.wrappedCollector("doc_bug_track_mobile", {
          action: "invalid_record",
          info: JSON.stringify({
            ids: e.map(e => platformDocUtils.p5T(e)).join(","),
            invoke_stack: (n == null ? undefined : n.stack) || ""
          })
        });
      }
    }
  }
  require.d(exports, {
    trackInvalidRecords: function () {
      return h;
    },
    isTimeoutError: function () {
      return s;
    },
    isCrossOperationError: function () {
      return d;
    },
    partitionByDocToken: function () {
      return f;
    }
  });
}