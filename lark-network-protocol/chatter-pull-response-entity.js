// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'PullChattersResponse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 981911
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("chatter-user-entity-definitions") /*id: 503877*/;
  require("bot-app-status-entities") /*id: 794543*/;
  protobufCodecHelper.createProtobufCodec("entities", "BotInfo", {
    fields: {
      botId: {
        rule: "required",
        type: "int64",
        id: 1
      },
      appStatus: {
        type: "AppStatusInfo",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "BotInfo", undefined, true);
  require("protobuf-field-info-extension") /*id: 906532*/;
  let n = protobufCodecHelper.createProtobufCodec("chatters", "PullChattersByIdsResponse", {
    fields: {
      chatters: {
        keyType: "string",
        type: "entities.Chatter",
        id: 1
      },
      maxAge: {
        type: "int64",
        id: 2,
        options: {
          "(fieldinfo.FieldInfo)": "skip_validate"
        }
      },
      botInfo: {
        keyType: "int64",
        type: "entities.BotInfo",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("chatters", "PullChattersByIdsResponse", undefined, true);
  require.d(exports, {
    PullChattersResponse: function () {
      return n;
    }
  });
}