// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'resolveFileUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 550880
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let r = {};
  async function o(e, t) {
    if (!e.length) {
      return;
    }
    let a = e.filter(e => !r[e]);
    if (a == null ? undefined : a.length) {
      var o;
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.AISpaceGetFileUrl({
        node_id_str: a.map(e => String(e)),
        share_id: t
      });
      if (e != null && (o = e.file_urls) !== null && o !== undefined) {
        o.forEach(e => {
          let {
            main_url: t,
            backup_url: a,
            node_id: i
          } = e;
          let n = t || a;
          if (i && n) {
            r[i] = n;
          }
        });
      }
    }
    return throttledPathFilterStringify.throttledPathStr(r, e);
  }
  require.d(exports, {
    resolveFileUrls: function () {
      return o;
    }
  });
}