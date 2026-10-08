// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Resolved require(147875) to 'api-services-collection'
// - Resolved require(679391) to 'chat-error-codes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-init-business.49e30a64.js
         * chunkId: 63216
         * moduleId: 362522
         */
module.exports = function (module, exports, require) {
  require("xss-content-sanitizer") /*id: 508971*/;
  require("api-services-collection") /*id: 147875*/;
  require("chat-error-codes") /*id: 679391*/;
  let i = async () => {};
  require.r(exports);
  require.d(exports, {
    checkSSOVerify: function () {
      return i;
    }
  });
}