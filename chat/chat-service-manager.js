// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getServiceContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 25497
         */
module.exports = function (module, exports, require) {
  function i() {
    let e = {
      service: null
    };
    return {
      get(t, n) {
        var r;
        let o = (r = e.service) === null || r === undefined ? undefined : r.ctx?.[t];
        if (!o && !n) {
          throw Error(`target service [${t}] not found`);
        }
        return o;
      },
      get service() {
        return e.service;
      },
      set service(service) {
        e.service = service;
      }
    };
  }
  require.d(exports, {
    getServiceContext: function () {
      return i;
    }
  });
}