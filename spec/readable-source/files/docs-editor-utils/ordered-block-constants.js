// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$Z' to 'orderedMonitorName'
// - Renamed export 'FZ' to 'orderedBlockTypes'
// - Renamed export 'zb' to 'orderUpdateAction'
// - Renamed export 'SP' to 'orderedProviderName'
// - Renamed export 'KM' to 'OrderDirection'
// - Renamed export 'cp' to 'directionValueMap'
// - Renamed export 'Uu' to 'orderModeAuto'
// - Renamed export '_t' to 'orderedCommands'
// - Renamed export 'Rd' to 'orderPriorityMax'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 976830
         */
module.exports = function (module, exports, require) {
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var calloutActionConstants = require("callout-action-constants") /*id: 677493*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var quoteContainerSelectors = require("quote-container-selectors") /*id: 604018*/;
  var dropToSameLevelCmd = require("drop-to-same-level-cmd") /*id: 52205*/;
  let s = 999999999;
  (o = {})[o.UP = 1] = "UP";
  o[o.DOWN = 2] = "DOWN";
  let d = o;
  let f = {
    [d.UP]: -1,
    [d.DOWN]: 1
  };
  let h = "ORDERED_ORDER_UPDATE";
  let _ = "auto";
  let p = [...docBlockTypeConstants.listBlockTypes, ...docBlockTypeConstants.pageGridBlockTypes, docBlockTypeConstants.blockTypeConstants.TASK];
  let g = docxEditorCore.getProviderName("ordered");
  let E = docxEditorCore.getProviderName("ordered-monitor");
  let m = [dropToSameLevelCmd.dropToSameLevelCmd, calloutActionConstants.turnIntoCallout, calloutActionConstants.calloutMultiSelect, "turnIntoSyncedWithMultipleSelection", "turnIntoSynced", quoteContainerSelectors.enterQuoteContainer, quoteContainerSelectors.quoteContainerMulti, "keyevent:block:tab", "keyevent:block:untab"];
  require.d(exports, {
    orderedMonitorName: function () {
      return E;
    },
    orderedBlockTypes: function () {
      return p;
    },
    orderUpdateAction: function () {
      return h;
    },
    orderedProviderName: function () {
      return g;
    },
    OrderDirection: function () {
      return d;
    },
    directionValueMap: function () {
      return f;
    },
    orderModeAuto: function () {
      return _;
    },
    orderedCommands: function () {
      return m;
    },
    orderPriorityMax: function () {
      return s;
    }
  });
}