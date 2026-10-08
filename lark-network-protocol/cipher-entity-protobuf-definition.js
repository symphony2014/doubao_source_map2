// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 330114
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("entities", "Cipher", {
    fields: {
      secret: {
        type: "bytes",
        id: 1
      },
      nonce: {
        type: "bytes",
        id: 2
      },
      additionalData: {
        type: "bytes",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "Cipher", undefined, true);
}