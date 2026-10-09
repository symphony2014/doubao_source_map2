// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(852722) to 'card-action-schema'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 612108
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("card-action-schema") /*id: 852722*/;
  protobufCodecHelper.createProtobufCodec("entities", "CardActionPacket", {
    fields: {
      cid: {
        type: "string",
        id: 1
      },
      parameters: {
        type: "CardAction.Parameters",
        id: 2
      },
      payload: {
        type: "bytes",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "CardActionPacket", undefined, true);
}