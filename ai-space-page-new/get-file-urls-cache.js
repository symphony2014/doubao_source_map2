// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getFileUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 109992
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let r = {};
  async function o(e, t) {
    if (!e.length) {
      return;
    }
    let i = e.filter(e => !r[e]);
    if (i == null ? undefined : i.length) {
      var o;
      let {
        data: e
      } = await apiServicesCollection.ResourceApiService.GetFileURL({
        uris: i,
        type: t
      });
      if (e != null && (o = e.file_urls) !== null && o !== undefined) {
        o.forEach(e => {
          let {
            main_url: t,
            back_url: i,
            uri: n
          } = e;
          let a = t || i;
          if (n && a) {
            r[n] = a;
          }
        });
      }
    }
    return throttledPathFilterStringify.throttledPathStr(r, e);
  }
  require.d(exports, {
    getFileUrls: function () {
      return o;
    }
  });
}