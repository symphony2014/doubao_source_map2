// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g$' to 'verticalAlignTypes'
// - Renamed export 'li' to 'blockPropertyKeys'
// - Renamed export 'mk' to 'tableStatusCodes'
// - Renamed export 'n0' to 'layoutDirection'
// - Renamed export 'nZ' to 'rowColTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 247388
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var u;
  (o = {}).COLUMN = "column";
  o.ROW = "row";
  let a = o;
  (i = {}).COL = "col";
  i.ROW = "row";
  let s = i;
  (l = {}).TOP = "top";
  l.MIDDLE = "middle";
  l.BOTTOM = "bottom";
  let d = l;
  (c = {}).BACKGROUND_COLOR = "background_color";
  c.VERTICAL_ALIGN = "vertical_align";
  c.CHILDREN = "children";
  c.COLUMNS_ID = "columns_id";
  c.ROWS_ID = "rows_id";
  c.COLUMN_SET = "column_set";
  c.CELL_SET = "cell_set";
  c.HEADER_ROW = "header_row";
  c.HEADER_COL = "header_column";
  c.COLUMN_WIDTH = "column_width";
  c.MERGE_INFO = "merge_info";
  c.ROW_SPAN = "row_span";
  c.COL_SPAN = "col_span";
  c.RECORD_ID = "block_id";
  let f = c;
  (u = {})[u.noRect = 1] = "noRect";
  u[u.noClosestTable = 2] = "noClosestTable";
  u[u.noClosestTableView = 3] = "noClosestTableView";
  u[u.noTableHookInstance = 4] = "noTableHookInstance";
  u[u.vcReplayInfoUsed = 5] = "vcReplayInfoUsed";
  u[u.tableScrollModelNotReady = 6] = "tableScrollModelNotReady";
  u[u.tableScrollModelNotReadyGoRetry = 7] = "tableScrollModelNotReadyGoRetry";
  u[u.goToNewScroll = 8] = "goToNewScroll";
  u[u.calcDistance = 9] = "calcDistance";
  let h = u;
  require.d(exports, {
    verticalAlignTypes: function () {
      return d;
    },
    blockPropertyKeys: function () {
      return f;
    },
    tableStatusCodes: function () {
      return h;
    },
    layoutDirection: function () {
      return a;
    },
    rowColTypes: function () {
      return s;
    }
  });
}