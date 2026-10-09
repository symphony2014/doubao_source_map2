// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'sniffLinkMetadata'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29539.c0351cdd.js
         * chunkId: 29539
         * moduleId: 377680
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let i = (() => {
    let e = {};
    return async t => {
      if (e[t]) {
        return e[t];
      }
      try {
        var n;
        var i;
        var a;
        var o;
        let l = await apiServicesCollection.SamanthaApiService.SniffLink({
          links: [t],
          with_content_type: false,
          with_repository: true
        });
        let s = ((i = l.data) === null || i === undefined ? undefined : (n = i.results) === null || n === undefined ? undefined : n.find(e => e.url === t)) || ((o = l.data) === null || o === undefined ? undefined : (a = o.failed_urls) === null || a === undefined ? undefined : a.find(e => e.url === t));
        if (!s) {
          return null;
        }
        e[t] = s;
        return s;
      } catch (e) {
        return null;
      }
    };
  })();
  require.d(exports, {
    sniffLinkMetadata: function () {
      return i;
    }
  });
}