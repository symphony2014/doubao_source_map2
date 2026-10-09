// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l1' to 'getDocMetrics'
// - Renamed export 'mt' to 'createMetricsFn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 121662
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var syncedRefBlockManagerToken = require("synced-ref-block-manager-token") /*id: 549332*/;
  let a = new Set(docBlockTypeConstants.filteredBlockTypes);
  let c = e => {
    let i = {};
    let r = 0;
    let l = 0;
    let c = e.editorAPI.getService(syncedRefBlockManagerToken.syncedRefBlockToken, {
      dynamic: true
    }).get();
    let d = c ? syncedReferenceBlockUtils.getAllBlockStructsIncludingSynced(c) : e.structService.getAllBlockStructs();
    if (!d) {
      return {
        synced_refer_block_manager: +!!c,
        total_block_count: 0,
        page_block_lines: 0,
        ...i
      };
    }
    for (let e of d) {
      r++;
      if (e.isRoot()) {
        let {
          children: i
        } = e.record.snapshot;
        l = i && i instanceof Array && i.length || -1;
      }
      let o = e.type === docBlockTypeConstants.blockTypeConstants.FALLBACK ? e.snapshot.type : e.type;
      if (a.has(o)) {
        let e = `${o}_block_count`;
        if (i[e]) {
          i[e]++;
        } else {
          i[e] = 1;
        }
      }
    }
    return {
      synced_refer_block_manager: +!!c,
      total_block_count: r,
      page_block_lines: l,
      ...i
    };
  };
  let d = (e, i, r) => {
    let n = c(e);
    let o = i ? i.getDocComments(true, true).size : 0;
    let s = (r == null ? undefined : r.clientvarFrom) || (docUrlResolver.isDocDomain() ? "LOCAL" : (r == null ? undefined : r.useCache) ? "CACHE" : "NETWORK");
    return {
      ...n,
      comment: o,
      clientvar_from: s
    };
  };
  let u = (e, i, r) => function () {
    return d(e, i, r);
  };
  require.d(exports, {
    getDocMetrics: function () {
      return d;
    },
    createMetricsFn: function () {
      return u;
    }
  });
}