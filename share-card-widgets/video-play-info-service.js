// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getVideoPlayInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23641.b9dc0072.js
         * chunkId: 23641
         * moduleId: 823464
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let r = async e => {
    try {
      let {
        data: i
      } = await apiServicesCollection.SamanthaApiService.GetPlayInfo({
        vid: e
      });
      let r = i == null ? undefined : i.play_infos?.[0];
      if (!r) {
        throw Error("empty_data");
      }
      return {
        data: r,
        view_count: i.view_count ?? 1
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_video_by_vid_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    getVideoPlayInfo: function () {
      return r;
    }
  });
}