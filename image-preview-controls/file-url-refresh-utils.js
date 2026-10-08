// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'getUrlExpireTime'
// - Renamed export 'N' to 'refreshFileUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 66377
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = e => {
    try {
      let t = new URL(e).searchParams.get("x-expires");
      if (t) {
        return Number(t);
      } else {
        return undefined;
      }
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_expire_time_from_imagex_url_error",
        error: t,
        meta: {
          url: e
        }
      });
      return;
    }
  };
  let a = async e => {
    if (!e) {
      return e;
    }
    let t = s(e);
    if (!t || Number(t) > Date.now() / 1000 + 600) {
      return e;
    }
    try {
      var a;
      let t = await apiServicesCollection.ResourceApiService.RefreshFileURL({
        url: e
      });
      let {
        main_url: r,
        back_url: s
      } = ((a = t.data) === null || a === undefined ? undefined : a.file_urls?.[0]) || {};
      return r || s || e;
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "refresh_file_url_error",
        error: t,
        meta: {
          fileUrl: e
        }
      });
      return e;
    }
  };
  require.d(exports, {
    getUrlExpireTime: function () {
      return s;
    },
    refreshFileUrl: function () {
      return a;
    }
  });
}