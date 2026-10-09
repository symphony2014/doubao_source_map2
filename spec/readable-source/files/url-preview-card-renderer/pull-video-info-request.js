// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'VideoInfoRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 953498
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let i = protobufCodecHelper.createProtobufCodec("messages", "PullVideoInfoRequest", {
    fields: {
      urls: {
        rule: "repeated",
        type: "string",
        id: 1
      },
      isPc: {
        type: "bool",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("messages", "PullVideoInfoRequest", undefined, true);
  require.d(exports, {
    VideoInfoRequest: function () {
      return i;
    }
  });
}