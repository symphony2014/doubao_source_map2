// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'UrlPreviewChatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 804776
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("protobuf-field-info-extension") /*id: 906532*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "PullUrlPreviewChattersListRequest", {
    fields: {
      previewId: {
        rule: "required",
        type: "string",
        id: 1,
        options: {
          "(fieldinfo.FieldInfo)": "split,type=url_preview_token"
        }
      },
      componentId: {
        type: "string",
        id: 2
      },
      nextToken: {
        type: "string",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "PullUrlPreviewChattersListRequest", undefined, true);
  require.d(exports, {
    UrlPreviewChatters: function () {
      return i;
    }
  });
}