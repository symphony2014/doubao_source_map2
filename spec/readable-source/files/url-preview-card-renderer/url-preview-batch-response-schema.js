// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'previewBatchResponse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 115270
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-entity-schema") /*id: 823274*/;
  require("preview-status-entity") /*id: 279177*/;
  require("url-preview-data-schema") /*id: 186084*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewByBatchResponse", {
    fields: {
      previewEntityMap: {
        keyType: "string",
        type: "entities.UrlPreviewEntity",
        id: 1
      },
      previewStatusMap: {
        keyType: "string",
        type: "entities.PreviewStatus",
        id: 2
      },
      previewResultMap: {
        keyType: "string",
        type: "PreviewResult",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "GetTempPreviewByBatchResponse", undefined, true);
  require.d(exports, {
    previewBatchResponse: function () {
      return i;
    }
  });
}