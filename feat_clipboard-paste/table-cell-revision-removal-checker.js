// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getCellRevisionInfo'
// - Renamed export 'k' to 'canRemoveTableCells'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 968150
         */
module.exports = function (module, exports, require) {
  var tableRowColumnRemoval = require("table-row-column-removal") /*id: 956168*/;
  var docxTableCellClipboardUtils = require("docx-table-cell-clipboard-utils") /*id: 597988*/;
  var docBlockCellUtils = require("doc-block-cell-utils") /*id: 48515*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  function c(e, r) {
    let i = e.model.zoneState.getEntities(editorRangeUtilities.convertRangeWithZone(e, r), (e, r) => {
      if (!editorRevisionUtilities.isRevisionIdString(e)) {
        return false;
      }
      let n = editorRevisionUtilities.parseJsonSafe(r);
      return !!n && (editorRevisionUtilities.isAddOp(n.type) || editorRevisionUtilities.isReplaceAddOp(n.type, n.details?.subtype));
    });
    if (!i.length) {
      return;
    }
    let n = i[0];
    let o = Object.keys(n.attributes).find(e => editorRevisionUtilities.isRevisionIdString(e));
    if (!o) {
      return;
    }
    let a = editorRevisionUtilities.stripRevIdString(o);
    let c = editorRevisionUtilities.parseJsonSafe(n.attributes[o]);
    if (c) {
      return {
        revisionId: a,
        ...c
      };
    }
  }
  function d(e, r) {
    if (!e.config.get("revising") || !docBlockCellUtils.areAllCellsById(e, r)) {
      return false;
    }
    try {
      let i = r.map(r => e.getBlockViewByBlockIdNotCheck(r)).filter(e => !!e);
      let a = e.getBlockModelByBlockIdNotCheck(i[0].parentId);
      let l = docxTableCellClipboardUtils.getTableSelectionInfo(e, a, i);
      if (!l) {
        return false;
      }
      let {
        commonRemoveOptions: s,
        colIndexes: c,
        rowIndexes: d
      } = l;
      return (c.length <= 0 || tableRowColumnRemoval.canRemoveTableColumns({
        ...s,
        target: c
      })) && (d.length <= 0 || tableRowColumnRemoval.canRemoveTableRows({
        ...s,
        target: d
      }));
    } catch (e) {}
  }
  require.d(exports, {
    getCellRevisionInfo: function () {
      return c;
    },
    canRemoveTableCells: function () {
      return d;
    }
  });
}