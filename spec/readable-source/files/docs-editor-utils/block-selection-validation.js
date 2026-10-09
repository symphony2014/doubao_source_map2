// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A1' to 'canInsertBlock'
// - Renamed export 'Q' to 'filterBlockToolbar'
// - Renamed export 'YQ' to 'getBlockAlignments'
// - Renamed export 'Z7' to 'getCommonValue'
// - Renamed export 'e3' to 'canInsertBefore'
// - Renamed export 'hX' to 'excludeCellTypes'
// - Renamed export 'nK' to 'getSpecialTypes'
// - Renamed export 'wk' to 'excludeSpecialTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 72949
         */
module.exports = function (module, exports, require) {
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var docBlockSelectionUtils = require("doc-block-selection-utils") /*id: 906257*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var blockSelectionUtils = require("block-selection-utils") /*id: 166197*/;
  let s = e => {
    if (e.length > 0) {
      let n = e.slice();
      let r = n[0];
      if (n.every(e => e === r)) {
        return r;
      }
    }
  };
  let d = e => e.map(e => {
    let n;
    if (n = e.getAlignType ? e.getAlignType() : e.snapshot.align) {
      return n;
    } else if (docBlockTypeConstants.mediaBlockTypes.includes(e.type)) {
      return docBlockTypeConstants.alignmentConstants.CENTER;
    } else {
      return docBlockTypeConstants.alignmentConstants.LEFT;
    }
  });
  let f = e => n => {
    let {
      blocks: r,
      blockManager: o,
      recursive: i = false,
      fold: l
    } = n;
    let {
      blockList: c,
      isMultiSel: u
    } = blockSelectionUtils.getSelectableBlocks(l, r, o);
    return blockSelectionUtils.getBlockModelsWithChildren({
      fold: l,
      blockList: c,
      shouldIgnoreFold: u,
      blockManager: o,
      recursive: i
    }).filter(n => !e.includes(n.type));
  };
  let h = syncUrlBlockUtils.isSyncingActive() ? docBlockTypeConstants.specialBlockTypes.filter(e => e !== docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) : docBlockTypeConstants.specialBlockTypes;
  let _ = f(h);
  let p = f(docBlockTypeConstants.cellOnlyTypes);
  let g = (e, n, r) => n === editorUiComponentConstants.uiComponentTypes.BlockToolbar || r ? undefined : e;
  let E = e => (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.VIEW;
  let m = e => {
    let n = e.parent;
    if (E(e.parent)) {
      if (n == null) {
        return undefined;
      } else {
        return n.parent;
      }
    } else {
      return n;
    }
  };
  let b = e => e.map(e => E(e.parent) ? e.parent : e).sort((e, n) => e.position - n.position)[0];
  let v = e => dataProcessor.processData(e.map(e => {
    return m(e)?.id;
  })).length === 1;
  let T = function (e, n = false) {
    let {
      blockList: r
    } = docBlockSelectionUtils.filterBlocksBySelection(e, n, true);
    if (r.length === 0 || !v(r)) {
      return false;
    }
    let o = b(r).previousSibling;
    return !!o && docBlockTypeConstants.getAllowedBlockTypes().includes(o.type);
  };
  let C = function (e, n = false) {
    let {
      blockList: r
    } = docBlockSelectionUtils.filterBlocksBySelection(e, n, true);
    if (r.length === 0 || !v(r)) {
      return false;
    }
    let o = m(r[0]);
    return !!o && docBlockTypeConstants.getAllowedBlockTypes().includes(o.type);
  };
  require.d(exports, {
    canInsertBlock: function () {
      return C;
    },
    filterBlockToolbar: function () {
      return g;
    },
    getBlockAlignments: function () {
      return d;
    },
    getCommonValue: function () {
      return s;
    },
    canInsertBefore: function () {
      return T;
    },
    excludeCellTypes: function () {
      return p;
    },
    getSpecialTypes: function () {
      return h;
    },
    excludeSpecialTypes: function () {
      return _;
    }
  });
}