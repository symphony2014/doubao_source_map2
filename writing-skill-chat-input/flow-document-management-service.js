// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bb' to 'stopDocumentGeneration'
// - Renamed export 'Xf' to 'revertDocumentHistory'
// - Renamed export 'Yk' to 'deleteDocumentNodes'
// - Renamed export 'dT' to 'getInternetPublicPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 588256
         */
module.exports = function (module, exports, require) {
  var threadResourceTypes = require("thread-resource-types") /*id: 259428*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function a(e) {
    if (e.length) {
      try {
        await apiServicesCollection.OtterDocApiService.AGWMDeletePage({
          page_tokens: e,
          flag: 2
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "flowDoc_deleteDocNodes",
          error: e
        });
        return Promise.reject(e);
      }
    }
  }
  let o = async e => {
    let {
      docId: t,
      minorVersion: n
    } = e;
    try {
      await apiServicesCollection.OtterDocApiService.AGWRevertPageHistory({
        page_id: t,
        minor_version: n
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "revert_doc_history_version_error",
        error: e
      });
      throw e;
    }
  };
  let s = async e => {
    let {
      docId: t
    } = e;
    try {
      await apiServicesCollection.SamanthaApiService.TerminalGenPages({
        pages_id: t
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "stop_step_doc_error",
        error: e,
        meta: {
          docId: t
        }
      });
      throw e;
    }
  };
  let u = async e => {
    let {
      token: t
    } = e;
    try {
      return (await apiServicesCollection.OtterDocApiService.AGWGetInternetPublic({
        obj_type: threadResourceTypes.resourceTypes.Page,
        obj_token: t
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_internet_public_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    stopDocumentGeneration: function () {
      return s;
    },
    revertDocumentHistory: function () {
      return o;
    },
    deleteDocumentNodes: function () {
      return a;
    },
    getInternetPublicPage: function () {
      return u;
    }
  });
}