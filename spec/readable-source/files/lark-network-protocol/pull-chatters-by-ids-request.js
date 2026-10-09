// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'PullChattersByIdsRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 746620
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("protobuf-field-info-extension") /*id: 906532*/;
  let n = protobufCodecHelper.createProtobufCodec("chatters", "PullChattersByIdsRequest", {
    fields: {
      chatterIds: {
        rule: "repeated",
        type: "string",
        id: 1,
        options: {
          "(fieldinfo.FieldInfo)": "split,type=user"
        }
      },
      needBotInfo: {
        type: "bool",
        id: 2
      },
      notSubscribeChatters: {
        type: "bool",
        id: 3
      },
      source: {
        type: "int32",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("chatters", "PullChattersByIdsRequest", undefined, true);
  require.d(exports, {
    PullChattersByIdsRequest: function () {
      return n;
    }
  });
}