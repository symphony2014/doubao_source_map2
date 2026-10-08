// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bs' to 'hasDuplicates'
// - Renamed export 'el' to 'hasContentMutation'
// - Renamed export 'zI' to 'isTextOperation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 89569
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  let n = e => dataProcessor.processData(e).length !== e.length;
  let d = e => {
    for (let t of e.ops) {
      if (docxEditorCore.isInsertOp(t) || docxEditorCore.isMergeMutation(t) || docxEditorCore.isReplaceOp(t)) {
        return true;
      }
    }
    return false;
  };
  let s = e => {
    for (let t of e.ops) {
      if (flowSyncDeltaOperations.isEasysyncSubtype(t) || "action" in t && t.p.length === 1 && t.p[0] === "text") {
        return true;
      }
    }
    return false;
  };
  require.d(exports, {
    hasDuplicates: function () {
      return n;
    },
    hasContentMutation: function () {
      return d;
    },
    isTextOperation: function () {
      return s;
    }
  });
}