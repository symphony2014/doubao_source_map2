// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'NotifyCreatePreviewRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 754159
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-app-scene-schema") /*id: 578583*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "NotifyCreatePreviewRequest", {
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
      appScene: {
        rule: "required",
        type: "AppScene",
        id: 3
      },
      isLazyLoad: {
        type: "bool",
        id: 4,
        options: {
          default: false
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "NotifyCreatePreviewRequest", undefined, true);
  require.d(exports, {
    NotifyCreatePreviewRequest: function () {
      return i;
    }
  });
}