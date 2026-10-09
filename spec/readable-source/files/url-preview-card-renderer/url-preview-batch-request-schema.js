// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'getTempPreviewByBatchRequestSchema'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 619049
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-app-scene-schema") /*id: 578583*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewByBatchRequest", {
    fields: {
      appId: {
        rule: "required",
        type: "int64",
        id: 1
      },
      urls: {
        rule: "repeated",
        type: "string",
        id: 2
      },
      locale: {
        type: "string",
        id: 3
      },
      appScene: {
        rule: "required",
        type: "AppScene",
        id: 4
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewByBatchRequest", undefined, true);
  require.d(exports, {
    getTempPreviewByBatchRequestSchema: function () {
      return i;
    }
  });
}