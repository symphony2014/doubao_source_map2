// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BH' to 'draggableProvider'
// - Renamed export 'BK' to 'cellBlocks'
// - Renamed export 'E3' to 'dragStatusEvent'
// - Renamed export 'FJ' to 'dragOffsetSmall'
// - Renamed export 'GV' to 'nestedBlocks'
// - Renamed export 'Gi' to 'errorCodes'
// - Renamed export 'MN' to 'draggableType'
// - Renamed export 'N5' to 'complexBlocks'
// - Renamed export 'PD' to 'containerBlocks'
// - Renamed export 'Pv' to 'dragOffsetLarge'
// - Renamed export 'Q9' to 'dropChangeEvent'
// - Renamed export 'Zc' to 'dragHandleSize'
// - Renamed export 'bz' to 'okrAgendaBlocks'
// - Renamed export 'dT' to 'dragClassName'
// - Renamed export 'iM' to 'dragThreshold'
// - Renamed export 'nO' to 'dropEndEvent'
// - Renamed export 'nc' to 'deletePaidLine'
// - Renamed export 'p_' to 'draggingState'
// - Renamed export 'uw' to 'tableSheetBlocks'
// - Renamed export 'vj' to 'columnLayoutBlocks'
// - Renamed export 'vq' to 'errorMessageMap'
// - Renamed export 'zg' to 'agendaTitleBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 253882
         */
module.exports = function (module, exports, require) {
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let c = "j-drag-cls";
  let u = "DROP_CHANGE";
  let a = "DROP_END";
  let s = "DRAG_STATUS_CHANGE";
  let d = "dragging";
  let f = 8;
  let h = 40;
  let _ = 10;
  let p = "DELETE_PAID_LINE";
  (o = {}).REFUSE_BITABLE_IN_GRID = "REFUSE_BITABLE_IN_GRID";
  let g = o;
  let E = {
    [g.REFUSE_BITABLE_IN_GRID]: t("CreationDoc_DocX_insert_bitable_column_failed_toast")
  };
  let m = [docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE];
  let b = [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE];
  let v = [docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT];
  let T = [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.SHEET];
  let C = [docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.AI];
  let k = 28;
  let I = [docBlockTypeConstants.blockTypeConstants.CELL];
  let R = [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN];
  let y = [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.AGENDA, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.MEEGO];
  let O = docxEditorCore.getProviderName("draggable");
  let S = "draggable";
  require.d(exports, {
    draggableProvider: function () {
      return O;
    },
    cellBlocks: function () {
      return I;
    },
    dragStatusEvent: function () {
      return s;
    },
    dragOffsetSmall: function () {
      return f;
    },
    nestedBlocks: function () {
      return m;
    },
    errorCodes: function () {
      return g;
    },
    draggableType: function () {
      return S;
    },
    complexBlocks: function () {
      return y;
    },
    containerBlocks: function () {
      return R;
    },
    dragOffsetLarge: function () {
      return k;
    },
    dropChangeEvent: function () {
      return u;
    },
    dragHandleSize: function () {
      return h;
    },
    okrAgendaBlocks: function () {
      return v;
    },
    dragClassName: function () {
      return c;
    },
    dragThreshold: function () {
      return _;
    },
    dropEndEvent: function () {
      return a;
    },
    deletePaidLine: function () {
      return p;
    },
    draggingState: function () {
      return d;
    },
    tableSheetBlocks: function () {
      return T;
    },
    columnLayoutBlocks: function () {
      return C;
    },
    errorMessageMap: function () {
      return E;
    },
    agendaTitleBlocks: function () {
      return b;
    }
  });
}