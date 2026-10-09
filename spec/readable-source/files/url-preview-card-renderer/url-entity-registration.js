// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 559565
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "URL", {
    fields: {
      url: {
        type: "string",
        id: 1
      },
      ios: {
        type: "string",
        id: 2
      },
      android: {
        type: "string",
        id: 3
      },
      pc: {
        type: "string",
        id: 4
      },
      web: {
        type: "string",
        id: 5
      },
      harmonyOs: {
        type: "string",
        id: 6
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "URL", undefined, true);
}