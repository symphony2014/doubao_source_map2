// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'UrlPreviewCreateResp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 265786
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  require("url-preview-schema-def") /*id: 550837*/;
  let i = protobufCodecHelper.createProtobufCodec("url_preview", "NotifyCreatePreviewResponse", {
    fields: {
      urlHangpointMap: {
        keyType: "string",
        type: "PreviewHangPoint",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("url_preview", "NotifyCreatePreviewResponse", undefined, true);
  require.d(exports, {
    UrlPreviewCreateResp: function () {
      return i;
    }
  });
}