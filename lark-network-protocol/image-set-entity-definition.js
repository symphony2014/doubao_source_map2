// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(931788) to 'crypto-image-entity-def'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 237941
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("crypto-image-entity-def") /*id: 931788*/;
  protobufCodecHelper.createProtobufCodec("entities", "ImageSet", {
    fields: {
      key: {
        type: "string",
        id: 1,
        options: {
          deprecated: true
        }
      },
      origin: {
        type: "Image",
        id: 2
      },
      thumbnail: {
        type: "Image",
        id: 3
      },
      imageKey: {
        type: "string",
        id: 4,
        options: {
          deprecated: true
        }
      },
      middle: {
        type: "Image",
        id: 5
      },
      thumbnailWebp: {
        type: "Image",
        id: 6
      },
      middleWebp: {
        type: "Image",
        id: 7
      },
      middleMp4: {
        type: "Image",
        id: 8
      },
      cover: {
        type: "Image",
        id: 9
      },
      intact: {
        type: "Image",
        id: 10
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "ImageSet", undefined, true);
}