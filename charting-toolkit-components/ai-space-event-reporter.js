// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'reportFileOpen'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41268.462a5cda.js
         * chunkId: 41268
         * moduleId: 946482
         */
module.exports = function (module, exports, require) {
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let o = function ({
    key: e,
    nodeId: t
  } = {}) {
    if (e || t) {
      apiServicesCollection.SamanthaApiService.AISpaceEventReport({
        key: e,
        node_id: t,
        report_type: chatAiConstants.fileOpenType.file_open
      });
    }
  };
  require.d(exports, {
    reportFileOpen: function () {
      return o;
    }
  });
}