// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jk' to 'isBlockSelectable'
// - Renamed export 'Nd' to 'renderBlockViews'
// - Renamed export 'R' to 'getSelectableBlocks'
// - Renamed export 'rk' to 'getBlockModelsWithChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 166197
         */
module.exports = function (module, exports, require) {
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function l(e, n, r) {
    return !!docxBlockUtils_1.hasParentOfBlockType(e, r, docBlockTypeConstants.tableCalloutTypes) || !n || n.isShow(e);
  }
  function c(e, n, r) {
    let o = n.filter(n => l(n.id, e, r));
    if (o.length > 1) {
      return {
        blockList: n,
        isMultiSel: true
      };
    } else {
      return {
        blockList: o,
        isMultiSel: false
      };
    }
  }
  let u = function (e) {
    let {
      model: n,
      blockManager: r,
      fold: o,
      shouldIgnoreFold: c,
      forceFindBlockGroups: a
    } = e;
    if ((a.length ? docBlockTypeConstants.tableCalloutOkrTypes.filter(e => !a.includes(e)) : docBlockTypeConstants.tableCalloutOkrTypes).includes(n.type) || !c && !l(n.id, o, r)) {
      return [];
    }
    let s = [];
    for (let e of n.children || []) {
      if (r.hasBlockModelByBlockId(e.id)) {
        let n = r.getBlockModelByBlockId(e.id);
        if (!c && o && !l(n.id, o, r)) {
          continue;
        }
        s.push(n);
        s.push(...u({
          model: n,
          blockManager: r,
          fold: o,
          shouldIgnoreFold: c,
          forceFindBlockGroups: a
        }));
      }
    }
    return s;
  };
  function a(e) {
    let {
      fold: n,
      blockList: r,
      shouldIgnoreFold: o,
      blockManager: i,
      recursive: l = true,
      forceFindBlockGroups: c = []
    } = e;
    let a = [];
    for (let {
      id: e
    } of r) {
      let r = i.getBlockModelByBlockIdNotCheck(e);
      if (r && (a.push(r), n && l)) {
        let e = u({
          model: r,
          blockManager: i,
          fold: n,
          shouldIgnoreFold: o,
          forceFindBlockGroups: c
        });
        a = a.concat(e);
      }
    }
    return a;
  }
  async function s(e, n) {
    let r = e.filter(e => !n.hasBlockViewByBlockId(e.id)).map(e => e.id);
    if (r.length) {
      await n.layoutManager.renderNodeById(r);
    }
    return e.map(e => n.getBlockViewByBlockId(e.id));
  }
  require.d(exports, {
    isBlockSelectable: function () {
      return l;
    },
    renderBlockViews: function () {
      return s;
    },
    getSelectableBlocks: function () {
      return c;
    },
    getBlockModelsWithChildren: function () {
      return a;
    }
  });
}