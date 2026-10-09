// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BL' to 'getLastChildNode'
// - Renamed export 'Bu' to 'findParentByType'
// - Renamed export 'O_' to 'findNonSelectionParent'
// - Renamed export 'XP' to 'findNodeByType'
// - Renamed export 'm5' to 'getBlockModelsByIds'
// - Renamed export 'vs' to 'hasParentOfType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 772264
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function i(e, n) {
    while (e && e.parent) {
      if (n.includes(e.parent.type)) {
        return e.parent;
      }
      e = e.parent;
    }
    return null;
  }
  function l(e, n) {
    if (n.includes(e.type)) {
      return e;
    } else {
      return i(e, n);
    }
  }
  function c(e, n) {
    while (e && e.parent) {
      if (n.includes(e.parent.type)) {
        return true;
      }
      e = e.parent;
    }
    return false;
  }
  function u(e) {
    let n = e;
    while (n.children.length) {
      n = n.children[n.children.length - 1];
    }
    return n;
  }
  function a(e, n) {
    return e.reduce((e, r) => {
      let o = n.getBlockModelByBlockIdNotCheck(r.id);
      if (o) {
        e.push(o);
      }
      return e;
    }, []);
  }
  require.d(exports, {
    getLastChildNode: function () {
      return u;
    },
    findParentByType: function () {
      return i;
    },
    findNonSelectionParent: function () {
      return function e(n) {
        if (!n || !n.parent) {
          return null;
        }
        let {
          parent: r
        } = n;
        if (docBlockTypeConstants.selectionViewTypes.includes(r.type)) {
          return e(r);
        } else {
          return r;
        }
      };
    },
    findNodeByType: function () {
      return l;
    },
    getBlockModelsByIds: function () {
      return a;
    },
    hasParentOfType: function () {
      return c;
    }
  });
}