// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'remapDocumentPageId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 375867
         */
module.exports = function (module, exports, require) {
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  function i(e, n) {
    if (!n) {
      return false;
    }
    let i = n.id;
    let l = n.block_map;
    if (!docUrlResolver.isDocDomain(i) || !!docUrlResolver.isDocDomain(e) || !l[i]) {
      return false;
    }
    let c = n.meta_map;
    let u = n.external_mention_url;
    let a = n.mention_page_title;
    n.id = e;
    if (l[i].data?.children) {
      for (let n of l[i].data.children) {
        if (l[n] && l[n].data) {
          l[n].data.parent_id = e;
        }
      }
    }
    l[i].id = e;
    l[i].data.id = e;
    l[e] = l[i];
    delete l[i];
    if (c[i]) {
      c[i].page_id = e;
      c[e] = c[i];
      delete c[i];
    }
    if (u == null ? undefined : u[i]) {
      u[i] = u[i].replace(i, e);
      u[e] = u[i];
      delete u[i];
    }
    if (a == null ? undefined : a[i]) {
      a[e] = a[i];
      delete a[i];
    }
    return true;
  }
  require.d(exports, {
    remapDocumentPageId: function () {
      return i;
    }
  });
}