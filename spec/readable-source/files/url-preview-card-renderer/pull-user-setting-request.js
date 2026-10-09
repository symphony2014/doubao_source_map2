// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'UserSettingRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 591152
         */
module.exports = function (module, exports, require) {
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  let i = protobufCodecHelper.createProtobufCodec("settings", "PullUserSettingRequest", {
    fields: {}
  });
  protobufCodecHelper.createProtobufCodec("settings", "PullUserSettingRequest", undefined, true);
  require.d(exports, {
    UserSettingRequest: function () {
      return i;
    }
  });
}