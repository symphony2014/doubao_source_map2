// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 550837
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("url_preview", "PreviewHangPoint", {
    fields: {
      previewId: {
        type: "string",
        id: 1
      },
      needLocalPreview: {
        type: "bool",
        id: 2,
        options: {
          default: false
        }
      },
      closeCardPreview: {
        type: "bool",
        id: 3,
        options: {
          default: false
        }
      },
      url: {
        type: "string",
        id: 4
      },
      isLazyLoad: {
        type: "bool",
        id: 5,
        options: {
          default: false
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PreviewHangPoint", undefined, true);
}