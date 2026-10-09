// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sf' to 'findInvalidRecord'
// - Renamed export 'TZ' to 'transformRecordMap'
// - Renamed export 'eR' to 'isValidContentLength'
// - Renamed export 'fs' to 'cloneParentRecord'
// - Renamed export 'of' to 'createPageRecord'
// - Renamed export 'sM' to 'isNonEmbeddedBlockType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 125185
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  require("react-dom-entry-wrapper") /*id: 640848*/;
  var docxGridBlockSelectionManager = require("docx-grid-block-selection-manager") /*id: 967288*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableCellClipboardUtils = require("docx-table-cell-clipboard-utils") /*id: 597988*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  let p = e => ![docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET, ...docBlockTypeConstants.chartEmbeddedTypes].includes(e);
  let g = e => e.length < 2000;
  let m = e => e.find(e => !e.validator());
  let v = e => {
    let n = {};
    for (let r in e) {
      let {
        data: o,
        ...i
      } = e[r];
      n[r] = {
        ...i,
        snapshot: o
      };
    }
    return n;
  };
  let b = e => {
    let n = documentNodeUtils_2.createDocumentNode({
      recordType: docBlockTypeConstants.blockTypeConstants.PAGE
    });
    let r = new contentStructureDelta.ContentDelta().insert(e);
    let l = new deltaSetCore.DeltaSet().compose(r);
    let a = new contentStructureDelta.ContentDelta().retain(e.length, {
      author: n.author
    });
    let d = l.compose(a);
    return {
      newTitleRecord: n,
      newtitleRecordText: editorDataTextUtils.getAttributedTexts(d),
      newPageRecordId: docTokenHelperUtils.generateDocToken()
    };
  };
  let y = (e, n) => {
    if (e.length === 0) {
      return {
        recordMap: {},
        id: ""
      };
    }
    let r = {};
    for (let o of e) {
      r[o.id] = docxClipboardUtils.cloneRecord(n, o.id);
    }
    let o = new docxGridBlockSelectionManager.GridBlockSelectionManager(n, e, r);
    let i = o.getRecordIds();
    let c = o.getRecordMap();
    let {
      parent: u
    } = n.getBlockModelByBlockId(e[0].id);
    let s = u.id;
    let {
      record: h
    } = n.getBlockViewByBlockId(s);
    let p = deepCloneWrapper_1.deepClone({
      id: h.id,
      snapshot: h.snapshot
    });
    let g = p.id;
    Object.assign(c, {
      [g]: p
    });
    docxTableCellClipboardUtils.processTableCellSelection(i, c, n);
    return {
      recordMap: c,
      id: g
    };
  };
  require.d(exports, {
    findInvalidRecord: function () {
      return m;
    },
    transformRecordMap: function () {
      return v;
    },
    isValidContentLength: function () {
      return g;
    },
    cloneParentRecord: function () {
      return y;
    },
    createPageRecord: function () {
      return b;
    },
    isNonEmbeddedBlockType: function () {
      return p;
    }
  });
}