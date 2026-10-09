// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'GetPreviewRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 545572
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-app-scene-schema") /*id: 578583*/;
  require("protobuf-field-info-extension") /*id: 906532*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "GetPreviewRequest", {
    fields: {
      appId: {
        type: "int64",
        id: 1,
        options: {
          deprecated: true
        }
      },
      previewIds: {
        rule: "repeated",
        type: "string",
        id: 2,
        options: {
          "(fieldinfo.FieldInfo)": "split,type=url_preview_token"
        }
      },
      locale: {
        type: "string",
        id: 3
      },
      appScene: {
        type: "AppScene",
        id: 4,
        options: {
          deprecated: true
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "GetPreviewRequest", undefined, true);
  require.d(exports, {
    GetPreviewRequest: function () {
      return i;
    }
  });
}