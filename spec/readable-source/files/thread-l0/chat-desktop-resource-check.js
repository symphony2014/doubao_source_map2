// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'isDesktopResource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 873204
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let i = e => e.type === chatMessageTypes.MetaType.DesktopResourceContentReference;
  require.d(exports, {
    isDesktopResource: function () {
      return i;
    }
  });
}