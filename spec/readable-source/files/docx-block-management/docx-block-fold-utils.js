// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DN' to 'isBlockFolded'
// - Renamed export 'PQ' to 'asyncSingleExec'
// - Renamed export 'bM' to 'isInSpecialBlock'
// - Renamed export 'hh' to 'isListBlockType'
// - Renamed export 'k7' to 'isBlockFoldable'
// - Renamed export 'v$' to 'hasParentOfType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 186232
         */
module.exports = function (module, exports, require) {
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  function d(e) {
    let n = syncedReferenceBlockUtils.getMainDocxBlockManager(e);
    let i = syncedReferenceBlockUtils.getSyncedReferenceBlockId(e);
    if (!n || !i) {
      var o;
      return !!((o = e.config.get("boundary")) === null || o === undefined ? undefined : o.closest(".docx-table-block"));
    }
    return s(n, i);
  }
  function s(e, n) {
    if (!e || !n || !e.hasBlockModelByBlockId(n)) {
      return false;
    }
    let i = e => e.type === docBlockTypeConstants.blockTypeConstants.CELL;
    return [...e.getBlockPath(n), n].reverse().some(n => i(e.getBlockModelByBlockId(n)));
  }
  let c = e => docBlockTypeConstants.bulletOrderTypes.includes(e);
  function u(e) {
    let {
      folded: n,
      type: i
    } = e.record.snapshot;
    let o = e;
    while (o.parent) {
      let e = o.parent.record.snapshot.type;
      if (e === docBlockTypeConstants.blockTypeConstants.CALLOUT || e === docBlockTypeConstants.blockTypeConstants.CELL || e === docBlockTypeConstants.blockTypeConstants.TABLE) {
        return false;
      }
      o = o.parent;
    }
    if (typeof i == "string" && c(i)) {
      return n === true;
    }
  }
  function h(e) {
    return c(e.type);
  }
  let f = (e, n) => {
    let i = n.getRecordByBlockId(e);
    if (!i || !i.snapshot) {
      return false;
    }
    let {
      snapshot: c
    } = i;
    let {
      type: u,
      children: h = [],
      folded: f
    } = c;
    let {
      editorAPI: v
    } = n;
    return !docxBlockUtils_1.hasParentOfBlockType(e, n, docBlockTypeConstants.tableCalloutTypes) && !s(n, e) && !calloutBlockUtils.isCalloutContext(e, n) && (!syncedReferenceBlockUtils.isSyncedReferenceBlock(v) || !d(v)) && (!!u.includes("heading") || (u !== "text" || (h == null ? undefined : h.length) !== 0) && !!docBlockTypeConstants.bulletOrderTypes.includes(u) && (h.length > 0 || f === true));
  };
  function v(e) {
    let n = false;
    return function () {
      var i = arguments.length;
      var o = Array(i);
      var l = 0;
      for (; l < i; l++) {
        o[l] = arguments[l];
      }
      if (!n) {
        n = true;
        return Promise.resolve().then(i => {
          try {
            e(...o);
          } catch (e) {}
          n = false;
        });
      }
    };
  }
  function p(e, n) {
    let i = Array.isArray(n) ? n : [n];
    let o = e;
    while (o && o.parent) {
      if (i.includes(o.parent.type)) {
        return true;
      }
      o = o.parent;
    }
    return false;
  }
  require.d(exports, {
    isBlockFolded: function () {
      return u;
    },
    asyncSingleExec: function () {
      return v;
    },
    isInSpecialBlock: function () {
      return d;
    },
    isListBlockType: function () {
      return h;
    },
    isBlockFoldable: function () {
      return f;
    },
    hasParentOfType: function () {
      return p;
    }
  });
}