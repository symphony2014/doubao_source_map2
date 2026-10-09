// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getBlockChildren'
// - Renamed export 'IG' to 'findParentBlock'
// - Renamed export 'LP' to 'getTableCellChildren'
// - Renamed export 'UM' to 'hasMergedCells'
// - Renamed export 'ls' to 'getParentBlockId'
// - Renamed export 'rd' to 'copyListBlockChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 891712
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  function s(e, n) {
    let i = function (e, n) {
      let i = n.id;
      let r = u(e, n.block_map, e => e.data.parent_id === i);
      if (r == null) {
        return undefined;
      } else {
        return r.id;
      }
    }(e, n);
    if (i) {
      return i;
    }
  }
  function u(e, n, i) {
    let o = n[e];
    let a = 0;
    while (true) {
      if (!o) {
        return;
      }
      if (i(o)) {
        return o;
      }
      let {
        parent_id: e
      } = o.data;
      let l = n[e];
      if (!e || !l) {
        return;
      }
      if (++a > docxEditorConstantsConfig.defaultTimeout) {
        throw Error("times over max depth");
      }
      o = l;
    }
  }
  function d(e, n = false) {
    if (docxBlockValidatorUtils_1.isListBlockType(e.data.type) && e.data.folded) {
      return [];
    } else if (n && e.data.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
      return f(e);
    } else {
      return e.data.children || [];
    }
  }
  function f(e) {
    let n = new Set();
    let i = e.data;
    docxTableLayoutUtils.getTableLayoutInfo(i, e => {
      if (e.cellId === e.sourceCellId) {
        n.add(e.cellRecordId);
      }
    });
    return Array.from(n);
  }
  function h(e) {
    return Object.values(e).some(e => {
      let {
        merge_info: n
      } = e;
      return n && (n.col_span > 1 || n.row_span > 1);
    });
  }
  function p(e, n, i) {
    let r = e.data;
    if (!editorTextBlockUtilities.hasTextWithApoolSimple(r) || !docxBlockValidatorUtils_1.isListBlockType(r.type)) {
      return;
    }
    let o = editorTextBlockUtilities.getInlineDisplayMarksFromText(r);
    if (o == null ? undefined : o.length) {
      o.forEach(e => {
        let r = n[e];
        if (r) {
          i[e] = r;
        }
      });
    }
  }
  require.d(exports, {
    getBlockChildren: function () {
      return d;
    },
    findParentBlock: function () {
      return u;
    },
    getTableCellChildren: function () {
      return f;
    },
    hasMergedCells: function () {
      return h;
    },
    getParentBlockId: function () {
      return s;
    },
    copyListBlockChildren: function () {
      return p;
    }
  });
}