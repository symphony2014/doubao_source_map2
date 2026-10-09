// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H$' to 'createTableNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 612896
         */
module.exports = function (module, exports, require) {
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var tableLayoutConstants = require("table-layout-constants") /*id: 247388*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  function u() {
    return `${tableLayoutConstants_1.colType}${uuidGeneratorUtil.generateUuid()}`;
  }
  function s() {
    return `${tableLayoutConstants_1.rowType}${uuidGeneratorUtil.generateUuid()}`;
  }
  function d(e = {
    column: tableLayoutConstants_1.tableConstant3,
    row: tableLayoutConstants_1.tableConstant2,
    ...tableLayoutConstants_1.headerPropertyObj
  }) {
    let {
      column: n,
      row: o
    } = e;
    let a = Array(n).fill(0).map(u);
    let d = Array(o).fill(0).map(s);
    return documentNodeFactory_2.createDocumentNode({
      [tableLayoutConstants.blockPropertyKeys.COLUMNS_ID]: a,
      [tableLayoutConstants.blockPropertyKeys.ROWS_ID]: d,
      [tableLayoutConstants.blockPropertyKeys.COLUMN_SET]: a.reduce((e, n) => {
        e[n] = {
          [tableLayoutConstants.blockPropertyKeys.COLUMN_WIDTH]: tableLayoutConstants_1.tableConstant100
        };
        return e;
      }, {}),
      cell_set: {},
      [tableLayoutConstants.blockPropertyKeys.HEADER_ROW]: e[tableLayoutConstants.blockPropertyKeys.HEADER_ROW],
      [tableLayoutConstants.blockPropertyKeys.HEADER_COL]: e[tableLayoutConstants.blockPropertyKeys.HEADER_COL]
    }, docBlockTypeConstants.blockTypeConstants.TABLE);
  }
  require.d(exports, {
    createTableNode: function () {
      return d;
    }
  });
}