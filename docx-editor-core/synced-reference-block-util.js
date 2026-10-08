// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E7' to 'getSyncedRecordId'
// - Renamed export 'K6' to 'buildSyncedRefQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 759293
         */
module.exports = function (module, exports, require) {
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  function l(e, n, i, r) {
    let l = "";
    let s = "";
    if (r) {
      let e = i.getService(blockManagerToken.blockManagerToken, {
        optional: true
      });
      let n = e == null ? undefined : e.getBlockModelsByRecordId(r)[0];
      s = (n == null ? undefined : n.parent?.type) || "";
      l = (n == null ? undefined : n.type) || "";
    }
    let u = a(i);
    let d = r || "";
    if (u) {
      return {
        users: [{
          id: e,
          query: {
            ...u,
            content_anchor_id: d,
            recordId: r,
            mentionId: n,
            source_file_type: JSON.stringify({
              blockType: l,
              parentBlockType: s,
              ...u
            })
          }
        }]
      };
    } else if (r) {
      return {
        users: [{
          id: e,
          query: {
            content_anchor_id: d,
            mentionId: n,
            source_file_type: JSON.stringify({
              blockType: l,
              parentBlockType: s
            })
          }
        }]
      };
    } else {
      return undefined;
    }
  }
  function a(e) {
    if (syncedReferenceBlockUtils.isSyncedReferenceBlock(e)) {
      let n = syncedReferenceBlockUtils.getSyncedReferencePageId(e);
      if (n) {
        return {
          syncedReferenceRecordId: n
        };
      }
    }
  }
  require("docx-user-detail-manager") /*id: 794466*/;
  require.d(exports, {
    getSyncedRecordId: function () {
      return a;
    },
    buildSyncedRefQuery: function () {
      return l;
    }
  });
}