// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'restoreArtifact'
// - Renamed export 'v' to 'readResourceLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 332703
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = async e => {
    let {
      conversationId: t,
      artifactId: n,
      version: a
    } = e;
    try {
      await apiServicesCollection.SamanthaApiService.RestoreArtifact({
        conversation_id: t,
        artifact_id: n,
        version: a
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "restore_artifact_error",
        error: e
      });
      throw e;
    }
  };
  let o = async e => {
    let {
      url: t
    } = e;
    try {
      let e = await apiServicesCollection.SamanthaApiService.ResourceLinkContentGet({
        url: t
      });
      return e.data?.text;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "resource_link_reader_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    restoreArtifact: function () {
      return a;
    },
    readResourceLink: function () {
      return o;
    }
  });
}