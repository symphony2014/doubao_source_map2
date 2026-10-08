// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$B' to 'getParentBlock'
// - Renamed export 'Hh' to 'findNonAssocBlock'
// - Renamed export 'MJ' to 'getGridColumnParentId'
// - Renamed export 'mQ' to 'flattenBlockIds'
// - Renamed export 'qU' to 'isSpecialBlockType'
// - Renamed export 'v' to 'collectBlockIds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 680152
         */
module.exports = function (module, exports, require) {
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var translationSuffixCheck = require("translation-suffix-check") /*id: 175813*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  function u(e) {
    return [docBlockTypeConstants.blockTypeConstants.GRID, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN, docBlockTypeConstants.blockTypeConstants.ASSOC_ROOT, docBlockTypeConstants.blockTypeConstants.ASSOC_NODE, docBlockTypeConstants.blockTypeConstants.SELECTION, docBlockTypeConstants.blockTypeConstants.VIEW, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_CONTENT].includes(e);
  }
  function a(e, n, r) {
    var o;
    let c = e;
    let u = n.getBlockModelByBlockId(c);
    while (u && (o = u.type, [docBlockTypeConstants.blockTypeConstants.ASSOC_ROOT, docBlockTypeConstants.blockTypeConstants.ASSOC_NODE, docBlockTypeConstants.blockTypeConstants.SELECTION].includes(o))) {
      let e = n.getBlockModelByBlockId(c);
      if (r) {
        if (!e.next) {
          return null;
        }
        c = (u = n.getBlockModelByBlockId(e.next.id)).id;
      } else {
        if (!e.previous) {
          return null;
        }
        c = (u = n.getBlockModelByBlockId(e.previous?.id)).id;
      }
    }
    return c || e;
  }
  function s(e, n) {
    let r = n.getBlockModelByBlockId(e);
    let {
      type: o,
      recordId: c
    } = r;
    if (o === docBlockTypeConstants.blockTypeConstants.GRID || o === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN || o === docBlockTypeConstants.blockTypeConstants.ASSOC_ROOT) {
      return r.children.reduce((e, r) => {
        e.push(...s(r.id, n));
        return e;
      }, []);
    } else if (o === docBlockTypeConstants.blockTypeConstants.VIEW) {
      return n.getBlockModelByBlockId(e).children.map(e => e.id);
    } else if (translationSuffixCheck.isTranslationMatch(n, c)) {
      return [];
    } else {
      return [e];
    }
  }
  function d(e, n) {
    return safeArrayFlattenUtil.safeFlattenArray(e.map(e => s(e, n))).map(e => ({
      id: e,
      type: editorTypeConstants.blockTypes.BLOCK
    }));
  }
  function f(e, n) {
    let r = n.getBlockModelByBlockId(e);
    if (r.type === docBlockTypeConstants.blockTypeConstants.FILE) {
      if (!r.parent) {
        throw Error("file block must have a parent");
      }
      return r.parent;
    }
    return r;
  }
  function h(e, n) {
    let r = f(e, n).parent;
    if (!r) {
      return null;
    }
    if (r.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
      if (!r.parent) {
        throw Error("parent block must have a parent");
      }
      return r.parent.id;
    }
    return null;
  }
  require.d(exports, {
    getParentBlock: function () {
      return f;
    },
    findNonAssocBlock: function () {
      return a;
    },
    getGridColumnParentId: function () {
      return h;
    },
    flattenBlockIds: function () {
      return d;
    },
    isSpecialBlockType: function () {
      return u;
    },
    collectBlockIds: function () {
      return s;
    }
  });
}