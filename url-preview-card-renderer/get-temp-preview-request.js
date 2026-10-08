// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'TempPreviewRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 114730
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-app-scene-schema") /*id: 578583*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewRequest", {
    fields: {
      appId: {
        rule: "required",
        type: "int64",
        id: 1
      },
      url: {
        rule: "required",
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
  protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewRequest", undefined, true);
  require.d(exports, {
    TempPreviewRequest: function () {
      return i;
    }
  });
}