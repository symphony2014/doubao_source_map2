// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'PullVideoInfoResponse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 917173
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let i = {
    fields: {
      site: {
        type: "Site",
        id: 1
      },
      srcUrl: {
        type: "string",
        id: 2
      },
      vid: {
        type: "string",
        id: 3
      },
      iframeUrl: {
        type: "string",
        id: 4
      },
      expireTime: {
        type: "int64",
        id: 5
      }
    },
    nested: {
      Site: {
        values: {
          UNKNOWN: 0,
          XIGUA: 1,
          DOUYIN: 2,
          HUOSHAN: 3,
          YOUTUBE: 4,
          IQIYI: 5,
          YOUKU: 6,
          QQ: 7
        }
      }
    }
  };
  protobufCodecHelper.createProtobufCodec("entities", "VideoInfo", i);
  protobufCodecHelper.createProtobufCodec("entities", "VideoInfo", undefined, true);
  i.nested.Site.values;
  let o = protobufCodecHelper.createProtobufCodec("messages", "PullVideoInfoResponse", {
    fields: {
      videoInfos: {
        keyType: "string",
        type: "entities.VideoInfo",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("messages", "PullVideoInfoResponse", undefined, true);
  require.d(exports, {
    PullVideoInfoResponse: function () {
      return o;
    }
  });
}