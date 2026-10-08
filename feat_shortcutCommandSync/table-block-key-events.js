// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rj' to 'checkBlockFormat'
// - Renamed export 'i$' to 'handleTableKeyEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 753891
         */
module.exports = function (module, exports, require) {
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var editorSelectionTraversalUtils = require("editor-selection-traversal-utils") /*id: 71322*/;
  var selectionRectangleUtility = require("selection-rectangle-utility") /*id: 91539*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var editorFormatRevisionUtils = require("editor-format-revision-utils") /*id: 63043*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxIndentAndFormattingHelper = require("docx-indent-and-formatting-helper") /*id: 436394*/;
  var docxEditorSelectionUtils = require("docx-editor-selection-utils") /*id: 258370*/;
  var docStructEnums = require("doc-struct-enums") /*id: 577678*/;
  require("block-selection-validation") /*id: 72949*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var tableActionHelper = require("table-action-helper") /*id: 826304*/;
  let B = debugLoggerFactory.createLogger("keyevent:TableBlockKeyEvents");
  function k(e, i, l, r = "true", d) {
    let {
      blockManager: c,
      collector: p
    } = e;
    let f = arrayUniqByMatcher.uniqByMatcher(function e(i, l) {
      let {
        blockManager: o
      } = i;
      let r = [];
      for (let d of l) {
        if (d.model.isEmpty) {
          continue;
        }
        let l = d.model.zoneState.getModelText();
        let c = new editorPositionClass.EditorPosition({
          zoneId: d.model.zoneId,
          editor: d.editor,
          start: 0,
          len: l.length - 1
        }).toRange();
        let a = o.getBlockModelByBlockIdNotCheck(d.id);
        let s = e(i, ((a == null ? undefined : a.children) || []).map(e => o.getBlockViewByBlockIdNotCheck(e.id)).filter(e => editorTextBlockUtilities.isTextEditable(e) && !docBlockTypeConstants.pageOnlyTypes.includes(e.type)));
        r.push(editorRangeUtilities.toSelectionObject(c));
        r.push(...(s || []));
      }
      return r;
    }(e, i), "id");
    let [v] = docxIndentAndFormattingHelper.checkBlocksFormattingConsistency(c, f, l, r, d);
    let T = v ? "" : r;
    if (p != null) {
      p.setExtraData({
        action_value: {
          value1: v ? "false" : "true"
        }
      }, true);
    }
    editorFormatRevisionUtils.applyFormatRevisionToSelection(c, f, {
      [l]: T
    });
  }
  async function m(e) {
    let {
      ctx: i,
      forward: l,
      isVertical: n,
      canAppendRow: o
    } = e;
    let {
      currentTargetViewFilterEmpty: c,
      blockManager: a,
      selectionAPI: s,
      preventDefault: g,
      shouldPropagation: y,
      editorContextService: {
        rect: k
      }
    } = i;
    let m = c[0];
    let b = m.model.parent;
    if (!b) {
      return;
    }
    let S = async () => {
      let e = m.parentId;
      B("jumpToCell.appendTableRow: tableId=%s", e);
      if (e) {
        await tableActionHelper.addTableRow(a, e);
      }
    };
    let E = n ? l ? docStructEnums.DirectionType.DOWN : docStructEnums.DirectionType.UP : l ? docStructEnums.DirectionType.RIGHT : docStructEnums.DirectionType.LEFT;
    let I = () => {
      let e = function (e, i, l) {
        let n = e.getBlockModelByBlockId(i);
        let o = e.getBlockViewByBlockId(i);
        let r = n.parent;
        if (!r) {
          return null;
        }
        let d = r.record.snapshot;
        let [c, a] = docxTableLayoutUtils.getCellPosition(o.cellId, d);
        let u = docxTableLayoutUtils.getTableLayoutInfo(d)[c][a];
        let s = c;
        let p = a;
        switch (l) {
          case docStructEnums.DirectionType.UP:
            s -= 1;
            break;
          case docStructEnums.DirectionType.DOWN:
            s += u.rowSpan;
            break;
          case docStructEnums.DirectionType.LEFT:
            if ((p -= 1) < 0) {
              p = d.columns_id.length - 1;
              s -= 1;
            }
            break;
          case docStructEnums.DirectionType.RIGHT:
            if ((p += u.colSpan) >= d.columns_id.length) {
              p = 0;
              s += u.rowSpan;
            }
        }
        if (docxTableLayoutUtils.validateRowColBounds([s, p], d)) {
          let [e, i] = function (e) {
            let {
              snapshot: i,
              rowIndex: l,
              colIndex: n
            } = e;
            let o = docxTableLayoutUtils.getTableLayoutInfo(i)[l][n];
            if (o.cellId !== o.sourceCellId) {
              let [e, l] = docxTableLayoutUtils.splitCellId(o.sourceCellId);
              return [i.rows_id.indexOf(e), i.columns_id.indexOf(l)];
            }
            return [l, n];
          }({
            snapshot: d,
            rowIndex: s,
            colIndex: p,
            direction: l,
            cellRecordId: n.record.id
          });
          let o = e * d.columns_id.length + i;
          return {
            rowIndex: e,
            colIndex: i,
            cellIndex: o
          };
        }
        return null;
      }(a, m.id, E);
      if (!e) {
        return;
      }
      let {
        cellIndex: i
      } = e;
      B("jumpToCell(%s), newCell=%s", E, i);
      g();
      let o = b.children[i];
      if (o.children.length > 0) {
        let e = l ? o.children[0] : function e(i, l = false) {
          let {
            children: n
          } = i;
          if (n.length === 0) {
            return null;
          }
          let o = n[n.length - 1];
          if (l && o.children.length > 0) {
            return e(o, l);
          } else {
            return o;
          }
        }(o, true);
        if (e) {
          let i = a.getBlockViewByBlockId(e.id);
          editorSelectionTraversalUtils.getBoundaryBlock(i, a, n, l);
          if (E === docStructEnums.DirectionType.LEFT || E === docStructEnums.DirectionType.RIGHT) {
            setTimeout(() => {
              let i = selectionRectangleUtility.getSelectionRectangle(s, k) || null;
              docxTableLayoutUtils.scrollTableHorizontal(a, e.id, i);
            });
          }
        }
      }
      return e;
    };
    if (I()) {
      return;
    }
    if (l && o) {
      await S();
      I();
      return;
    }
    let h = l ? "nextSibling" : "previousSibling";
    let w = b[h];
    if (!w && docxTableLayoutUtils.isTableEdge(m.cellId, b.snapshot, E)) {
      var L;
      if (b.parent?.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
        let e;
        w = (b.parent?.[h] ? b.parent?.[h] : (L = b.parent) === null || L === undefined ? undefined : L.parent?.[h]) || null;
      } else {
        w = b.parent?.[h] || null;
      }
    }
    if (!w) {
      B("jumpToCell(%s): fail to find sibling", E);
      if (!l) {
        y();
      }
      return;
    }
    g();
    if (w.type === docBlockTypeConstants.blockTypeConstants.GRID || w.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
      if (!l) {
        docxEditorSelectionUtils.navigateToBlock(i, true, false);
        return;
      }
      let e = a.getBlockViewByBlockIdNotCheck(w.id);
      if (e) {
        editorSelectionTraversalUtils.findNextSelectable(e, a, true, true);
        return;
      }
    }
    editorSelectionTraversalUtils.getBoundaryBlock(a.getBlockViewByBlockId(w.id), a, n, l);
  }
  require.d(exports, {
    checkBlockFormat: function () {
      return k;
    },
    handleTableKeyEvent: function () {
      return m;
    }
  });
}