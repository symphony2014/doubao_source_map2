// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'mapImageData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 834558
         */
module.exports = function (module, exports, require) {
  let i = e => e.map(e => {
    let {
      key: t,
      name: n,
      url: i
    } = e;
    return {
      key: t || "",
      file_name: n,
      image_ori: {
        url: i || "",
        format: "",
        width: 0,
        height: 0
      },
      feedback: "",
      description: "",
      request_id: "",
      image_thumb_formats: {},
      image_thumb_ori_formats: {}
    };
  });
  require.d(exports, {
    mapImageData: function () {
      return i;
    }
  });
}