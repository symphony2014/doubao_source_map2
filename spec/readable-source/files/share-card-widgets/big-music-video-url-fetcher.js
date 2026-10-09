// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'mergeContentObjects'
// - Renamed export 'V' to 'fetchBigMusicVideoUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 738598
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let i = async e => {
    if (!e) {
      return "";
    }
    try {
      let {
        data: {
          url: t
        } = {}
      } = await apiServicesCollection.MessageApiService.GetBigMusicVideoInfo({
        video_id: e
      });
      return t || "";
    } catch (e) {
      return "";
    }
  };
  let a = e => {
    let {
      oldContentObj: t,
      newValues: r,
      taskID: n
    } = e;
    if (n !== undefined) {
      return {
        ...t,
        [n]: {
          ...(t[n] || {}),
          ...r
        }
      };
    } else {
      return {
        ...t,
        ...r
      };
    }
  };
  require.d(exports, {
    mergeContentObjects: function () {
      return a;
    },
    fetchBigMusicVideoUrl: function () {
      return i;
    }
  });
}