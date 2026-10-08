// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rZ' to 'getUserCountry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 370809
         */
module.exports = function (module, exports, require) {
  require("object-to-string-ref") /*id: 437976*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let r = () => storageWrapperWithFallback.LocalStorageWrapper.getItem("flow_user_country");
  require.d(exports, {
    getUserCountry: function () {
      return r;
    }
  });
}