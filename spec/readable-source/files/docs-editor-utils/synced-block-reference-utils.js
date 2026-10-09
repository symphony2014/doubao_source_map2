// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oN' to 'getSyncedOverflowUi'
// - Renamed export 'li' to 'getSyncRefBlockType'
// - Renamed export 'Ke' to 'getSyncingPageUi'
// - Renamed export 'Vk' to 'getSyncedBorderUi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 279191
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  let c = e => {
    if (!e) {
      return null;
    }
    let {
      editorAPI: n
    } = e.blockManager;
    if (syncedReferenceBlockUtils.isSyncedReferenceBlock(n)) {
      return syncedReferenceBlockUtils.getSyncedReferenceBlockModel(n)?.id;
    }
    let {
      id: i,
      blockManager: c
    } = e;
    return c.hasBlockModelByBlockId(i) && [...c.getBlockPath(i), i].reverse().find(e => {
      return c.getBlockModelByBlockIdNotCheck(e)?.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
    }) || null;
  };
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  let a = () => syncedBlockFeatureFlags.isSyncedBlockBorderUiEnabled() ? "synced-new-ui" : "";
  let s = () => syncUrlBlockUtils.isSyncingActive() ? "synced-separate-page" : "";
  let d = () => syncedBlockFeatureFlags.isSyncedBlockScrollable() ? "synced-overflow-ui" : "";
  let f = (e, n) => {
    if (!syncedBlockFeatureFlags.isSyncedBlockBorderUiEnabled()) {
      return "";
    }
    let l = n.getBlockViewByBlockIdNotCheck(e);
    if (!l) {
      return "";
    }
    let u = c(l);
    if (u) {
      return n.getBlockModelByBlockIdNotCheck(u)?.type || docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE;
    } else {
      return "";
    }
  };
  require.d(exports, {
    getSyncedOverflowUi: function () {
      return d;
    },
    getSyncRefBlockType: function () {
      return f;
    },
    getSyncingPageUi: function () {
      return s;
    },
    getSyncedBorderUi: function () {
      return a;
    }
  });
}