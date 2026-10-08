// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Df' to 'getBoundaryBlock'
// - Renamed export 'Nm' to 'getDeepestBlock'
// - Renamed export 'SR' to 'findNextSelectable'
// - Renamed export 'cX' to 'getTableSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 71322
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  function f(e) {
    let n = [docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.OKR, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN];
    if (!syncUrlBlockUtils.isSyncingActive()) {
      n.push(docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE);
    }
    return n.includes(e);
  }
  async function h(e, n, r, o, i = []) {
    if (syncedTranslationBlockUtils.hasModelTranslate(e)) {
      let r = o ? e.struct.next : e.struct.previous;
      if (r) {
        e = n.getBlockViewByBlockIdNotCheck(r.id) || e;
      }
    }
    let l = n.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    if (f(e.type)) {
      return _(e, n, r, o);
    }
    if (!n.layoutManager.isBlockInViewport(e.id)) {
      await n.layoutManager.scrollToSelection(e.id);
    }
    if (editorTextBlockUtilities.isFoldedCodeBlock(e)) {
      l.setSelection([{
        type: editorTypeConstants.blockTypes.BLOCK,
        id: e.id
      }]);
    } else if (editorTextBlockUtilities.isTextEditable(e) && r) {
      let r = (i.length > 0 ? i : l.getSelection())[0];
      if (!r) {
        return;
      }
      let s = r.id;
      let d = n.getBlockViewByBlockIdNotCheck(s);
      if (editorTextBlockUtilities.isFoldedCodeBlock(d)) {
        editorRangeUtilities.selectToStart(e);
        return;
      }
      if (r.type === editorTypeConstants.blockTypes.BLOCK && editorTextBlockUtilities.isTextEditable(d)) {
        l.setSelection([{
          type: editorTypeConstants.blockTypes.BLOCK,
          id: e.id
        }]);
        return;
      }
      if (d && editorTextBlockUtilities.isTextEditable(d)) {
        editorRangeUtilities.transferSelection(d, e, !o);
      } else {
        editorRangeUtilities.selectToStart(e);
      }
    } else if (editorTextBlockUtilities.isTextEditable(e)) {
      if (o) {
        editorRangeUtilities.selectToStart(e);
      } else {
        editorRangeUtilities.selectToEnd(e);
      }
    } else if (e) {
      l.setSelection([{
        type: editorTypeConstants.blockTypes.BLOCK,
        id: e.id
      }]);
    }
  }
  async function _(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    if (e.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
      return p(e, n, r, i);
    }
    if (e.type === docBlockTypeConstants.blockTypeConstants.OKR) {
      let l = function e(n, r) {
        let o = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let i = arguments.length > 3 ? arguments[3] : undefined;
        let l = r.getBlockModelByBlockId(n);
        if (!l.children.length) {
          return;
        }
        i = i || (() => true);
        let c = o ? 0 : l.children.length - 1;
        for (; o ? c < l.children.length : c >= 0; o ? c++ : c--) {
          let n;
          let u = r.getBlockViewByBlockId(l.children[c].id);
          let a = () => !!i && i(u);
          let s = () => {
            let n = e(u.id, r, o, i);
            if (n) {
              return n;
            }
          };
          if (o) {
            n = a() ? u : s();
          } else if (!(n = s()) && a()) {
            n = u;
          }
          if (n) {
            return n;
          }
        }
      }(e.id, n, i, e => ![docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.OBJECTIVE].includes(e.type));
      return l && h(l, n, r, i);
    }
    if (e.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) ;else {
      let o = e.model.children[i ? 0 : e.model.children.length - 1];
      return h(n.getBlockViewByBlockId(o.id), n, r, i);
    }
  }
  function p(e, n) {
    let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let o = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    let i = e.record.snapshot;
    let c = docxTableLayoutUtils.getTableLayoutInfo(i);
    let {
      rows_id: u,
      columns_id: a
    } = i;
    let s = o ? 0 : u.length - 1;
    let d = c[s][0];
    if (d.cellId !== d.sourceCellId) {
      let [e] = docxTableLayoutUtils.splitCellId(d.sourceCellId);
      s = u.indexOf(e);
    }
    let f = n.getBlockModelByBlockId(e.id).children[s * a.length];
    let _ = o ? 0 : f.children.length - 1;
    let p = f.children[_];
    if (p) {
      return h(n.getBlockViewByBlockId(p.id), n, r, o);
    }
  }
  require.d(exports, {
    getBoundaryBlock: function () {
      return h;
    },
    getDeepestBlock: function () {
      return f;
    },
    findNextSelectable: function () {
      return _;
    },
    getTableSelection: function () {
      return p;
    }
  });
}