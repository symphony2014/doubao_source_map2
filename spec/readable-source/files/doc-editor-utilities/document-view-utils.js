// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$S' to 'getParentViewBlock'
// - Renamed export 'DZ' to 'createViewNode'
// - Renamed export 'jQ' to 'mapToParentViews'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 83122
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var createDocumentNodeWithDefaultType = require("create-document-node-with-default-type") /*id: 934095*/;
  function s(e, n) {
    return createDocumentNodeWithDefaultType.createDocumentNodeWithDefaultType({
      view_type: e,
      children: n ? [n] : []
    });
  }
  function l(e, n) {
    let {
      parent: r
    } = e.model;
    if (r && r.type === docBlockTypeConstants.blockTypeConstants.VIEW) {
      return n.getBlockViewByBlockId(r.id);
    } else {
      return e;
    }
  }
  function u(e, n) {
    return e.map(e => {
      let r = e.parentId ? n.viewService.getBlockViewByBlockId(e.parentId) : null;
      if ((r == null ? undefined : r.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
        return r;
      } else {
        return e;
      }
    });
  }
  require.d(exports, {
    getParentViewBlock: function () {
      return l;
    },
    createViewNode: function () {
      return s;
    },
    mapToParentViews: function () {
      return u;
    }
  });
}