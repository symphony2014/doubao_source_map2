// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$z' to 'insertNewChildren'
// - Renamed export 'CU' to 'createInsertChildren'
// - Renamed export 'Cl' to 'removeBlockItems'
// - Renamed export 'Vx' to 'moveChildren'
// - Renamed export 'i8' to 'batchCreateChildren'
// - Renamed export 'jR' to 'createSingleBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 139630
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var selectionServiceProviderName = require("selection-service-provider-name") /*id: 572319*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function s(e, n, r) {
    if (!isObjectOrFunction_1_1.isObjectOrFunction(n[0]) && r) {
      n = n.map(e => r.getBlockModelByBlockIdNotCheck(e)).filter(e => !!e);
    }
    n.forEach(n => {
      let r = n.parent;
      let o = r.record.get(["children"]);
      if (!arrayIsArrayUtil.isArray(o) || o.indexOf(n.recordId) === -1) {
        var l;
        let e = n.editorAPI.getService(selectionServiceProviderName.selectionServiceKey).getSelection().map(e => {
          let r = n.editorAPI.modelService.getBlockModelByBlockId(e.id);
          if (r) {
            return {
              id: r.id,
              type: r.type,
              selType: e.type,
              selection: e.selection || null
            };
          } else {
            return null;
          }
        });
        n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_mobile", {
          action: "remove_blocks_failed",
          info: JSON.stringify({
            blockId: n.id,
            recordId: platformDocUtils.p5T(n.recordId),
            blockType: n.type,
            parentId: r.id,
            parentType: r.type,
            children: arrayIsArrayUtil.isArray(o) ? o.map(e => platformDocUtils.p5T(e)) : o,
            isDestroyed: n.isDestroyed,
            isDirty: n.isDirty,
            modelChildren: (l = r.children) === null || l === undefined ? undefined : l.map(e => platformDocUtils.p5T(e == null ? undefined : e.recordId)),
            selection: e
          })
        });
      }
      e.removeChildren(r.recordId, [n.recordId]);
    });
  }
  function d(e, n, r, o) {
    return e.createChildren(r.map(e => Object.assign({
      parent_id: n
    }, e)), o);
  }
  function f(e, n, r, o, i) {
    let l = d(e, n, o, i);
    e.insertChildren(n, r, l);
    return l;
  }
  function h(e, n, r, o) {
    e.insertChildren(n, r, o);
    o.forEach(r => {
      e.replace(r, ["parent_id"], n);
    });
    return o;
  }
  function _(e, n, r, o) {
    let i = o.map(r => isStringTypeCheck.isString(r) ? (e.replace(r, ["parent_id"], n), r) : e.create(Object.assign({
      parent_id: n
    }, r)));
    e.insertChildren(n, r, i);
    return i;
  }
  function p(e, n, r) {
    return e.create(Object.assign({
      parent_id: n
    }, r));
  }
  require.d(exports, {
    insertNewChildren: function () {
      return f;
    },
    createInsertChildren: function () {
      return _;
    },
    removeBlockItems: function () {
      return s;
    },
    moveChildren: function () {
      return h;
    },
    batchCreateChildren: function () {
      return d;
    },
    createSingleBlock: function () {
      return p;
    }
  });
}