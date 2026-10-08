// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Resolved require(673317) to 'theme-color-protobuf-schema'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 285116
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("theme-color-protobuf-schema") /*id: 673317*/;
  protobufCodecHelper.createProtobufCodec("entities", "UDIcon", {
    fields: {
      key: {
        type: "string",
        id: 1
      },
      color: {
        type: "ThemeColor",
        id: 2
      },
      unicode: {
        type: "string",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("entities", "UDIcon", undefined, true);
}