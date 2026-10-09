// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(809263) to 'crypto-entity-protobuf-definition'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 931788
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("crypto-entity-protobuf-definition") /*id: 809263*/;
  protobufCodecHelper.createProtobufCodec("entities", "Image", {
    fields: {
      key: {
        type: "string",
        id: 1
      },
      urls: {
        rule: "repeated",
        type: "string",
        id: 2,
        options: {
          deprecated: true
        }
      },
      width: {
        type: "int32",
        id: 3
      },
      height: {
        type: "int32",
        id: 4
      },
      secureKey: {
        type: "string",
        id: 5
      },
      secureUrls: {
        rule: "repeated",
        type: "string",
        id: 6,
        options: {
          deprecated: true
        }
      },
      secureWidth: {
        type: "int32",
        id: 7
      },
      secureHeight: {
        type: "int32",
        id: 8
      },
      crypto: {
        type: "Crypto",
        id: 9
      },
      size: {
        type: "int32",
        id: 10
      },
      fsUnit: {
        type: "string",
        id: 11
      },
      params: {
        keyType: "string",
        type: "string",
        id: 12
      },
      etag: {
        type: "string",
        id: 13
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "Image", undefined, true);
}