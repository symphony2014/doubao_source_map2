// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(809263) to 'crypto-entity-protobuf-definition'
// - Renamed variable 'n' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 520501
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("crypto-entity-protobuf-definition") /*id: 809263*/;
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let s = {
    ImageCropType: {
      values: {
        ORIGIN: 1,
        MIDDLE: 2,
        THUMB: 3,
        MIDDLE_WEBP: 4,
        THUMB_WEBP: 5,
        MIDDLE_MP4: 6,
        COVER: 7,
        INTACT: 8
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(s);
  s.ImageCropType.values;
  protobufCodecHelper.createProtobufCodec("entities", "ImageBaseAttribute", {
    fields: {
      width: {
        rule: "required",
        type: "uint32",
        id: 1
      },
      height: {
        rule: "required",
        type: "uint32",
        id: 2
      },
      exifOrientation: {
        type: "uint32",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "ImageBaseAttribute", undefined, true);
  protobufCodecHelper.createProtobufCodec("entities", "ImageSetV2", {
    fields: {
      imageKey: {
        type: "string",
        id: 1
      },
      fsUnit: {
        type: "string",
        id: 2
      },
      crypto: {
        type: "Crypto",
        id: 3
      },
      images: {
        rule: "repeated",
        type: "ImageAttribute",
        id: 4
      },
      inlinePreview: {
        type: "bytes",
        id: 5
      },
      isDestroyed: {
        type: "bool",
        id: 6
      },
      sceneId: {
        type: "int64",
        id: 7
      }
    },
    nested: {
      ImageAttribute: {
        fields: {
          type: {
            rule: "required",
            type: "ImageCropType",
            id: 1
          },
          attribute: {
            rule: "required",
            type: "ImageBaseAttribute",
            id: 2
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "ImageSetV2", undefined, true);
}