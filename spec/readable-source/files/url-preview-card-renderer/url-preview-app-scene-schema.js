// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufCodecHelper'
// - Resolved require(98114) to 'protobuf-codec-helper'
// - Updated imported property 'o' to 'createProtobufCodec' (module 98114)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 578583
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  protobufCodecHelper.createProtobufCodec("url_preview", "AppScene", {
    fields: {
      type: {
        rule: "required",
        type: "int64",
        id: 1
      },
      sourceId: {
        type: "string",
        id: 2
      },
      baseCtx: {
        type: "string",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "AppScene", undefined, true);
}