// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GT' to 'isSyncedPageType'
// - Renamed export 'Lb' to 'isPageOnlyType'
// - Renamed export 'Ud' to 'isGridTableOkType'
// - Renamed export 'aG' to 'isEmbeddedBlockType'
// - Renamed export 'ox' to 'isAllowedBlockType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 391113
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = new Set(docBlockTypeConstants.gridTableOkTypes);
  let l = new Set(docBlockTypeConstants.embeddedBlockSet);
  function c(e) {
    return new Set(docBlockTypeConstants.getAllowedBlockTypes()).has(e);
  }
  function u(e) {
    return docBlockTypeConstants.pageOnlyTypes.includes(e);
  }
  function a(e) {
    return i.has(e);
  }
  function s(e) {
    return l.has(e);
  }
  function d(e) {
    return docBlockTypeConstants.syncedPageTypes.includes(e);
  }
  require.d(exports, {
    isSyncedPageType: function () {
      return d;
    },
    isPageOnlyType: function () {
      return u;
    },
    isGridTableOkType: function () {
      return a;
    },
    isEmbeddedBlockType: function () {
      return s;
    },
    isAllowedBlockType: function () {
      return c;
    }
  });
}