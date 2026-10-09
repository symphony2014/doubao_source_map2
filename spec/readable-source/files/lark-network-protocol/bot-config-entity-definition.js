// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 431229
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "BotConfig", {
    fields: {
      withBotTag: {
        type: "string",
        id: 1,
        options: {
          default: "bot"
        }
      },
      inContacts: {
        type: "bool",
        id: 2,
        options: {
          default: true
        }
      },
      canJoinGroup: {
        type: "bool",
        id: 3,
        options: {
          default: true
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "BotConfig", undefined, true);
}