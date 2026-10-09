// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'insertBlockAt'
// - Renamed export 'Z' to 'insertBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 907868
         */
module.exports = function (module, exports, require) {
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  let h = async e => {
    let n;
    let {
      blockManager: i,
      blocks: h,
      newBlockType: f,
      options: v,
      afterInsertBlock: p,
      afterTransactionAccepted: g,
      autoFocus: m = true,
      blockData: S,
      replaceSelection: y,
      transactionName: w,
      transactionOptions: I
    } = e;
    if (!h || h.length <= 0) {
      editorBlockUtilities.logInsertBlockFailure(docxEditorConstantsConfig_1.noBlockConstants.NO_BLOCK, i);
      return;
    }
    let B = h[h.length - 1];
    let k = documentViewUtils.getParentViewBlock(B, i).id;
    let b = i.getBlockModelByBlockId(k);
    let C = b.parent;
    if (!C) {
      editorBlockUtilities.logInsertBlockFailure(docxEditorConstantsConfig_1.noBlockConstants.NO_PARENT, i);
      return;
    }
    let E = [];
    if (y) {
      E = i.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection().map(e => {
        let o = e.id;
        let r = i.getBlockModelByBlockIdNotCheck(o);
        if (r && r.type === docBlockTypeConstants.blockTypeConstants.FILE && r.parent?.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
          return r.parent.id;
        } else {
          return o;
        }
      });
    }
    E = Array.from(new Set(E));
    let _ = () => b.position + 1;
    let T = "add:block:newline";
    let N = w || T;
    let O = i.applyTransaction(N, e => {
      [n] = documentBlockOperations.insertNewChildren(e, C.record.id, _(), [S || i.createSnapshot(f, v)]);
      if (y) {
        documentBlockOperations.removeBlockItems(e, E, i);
      }
    }, {
      afterTransactionAccepted: () => {
        if (g) {
          g(n);
        }
      },
      ...I,
      source: N === T ? changeSourceConstants.changeSourceConstants.LOCAL_INSERT : undefined
    });
    let {
      id: F,
      recordId: L
    } = C.children[_()];
    if (i.config.get("translated") && n) {
      let [e] = i.getBlockModelsByRecordId(n);
      if (e) {
        F = e.id;
        L = n;
      }
    }
    if (p != null) {
      p(L);
    }
    if (i.hasBlockViewByBlockId(F)) {
      await O;
    } else {
      await i.layoutManager.scrollToSelection(F);
    }
    let A = i.getBlockViewByBlockId(F);
    if (m && editorTextBlockUtilities.isTextEditable(A)) {
      A.model.setSelection({
        start: {
          line: 0,
          offset: 0
        },
        end: {
          line: 0,
          offset: 0
        }
      }, true);
    }
    return A;
  };
  let f = async e => {
    let {
      blockManager: n,
      newBlockType: i,
      parentModel: l,
      position: r,
      afterTransactionAccepted: a
    } = e;
    await n.applyTransaction("add:block:newline", e => {
      documentBlockOperations.insertNewChildren(e, l.record.id, r, [n.createSnapshot(i)]);
    }, {
      source: changeSourceConstants.changeSourceConstants.LOCAL_INSERT,
      afterTransactionAccepted: async () => {
        if (a) {
          await a();
        }
      }
    });
    let {
      id: s
    } = l.children[r];
    return n.getBlockViewByBlockId(s);
  };
  exports.insertBlocks = h;
  require.d(exports, {
    insertBlockAt: function () {
      return f;
    }
  });
}