// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ux' to 'getArtifactVersions'
// - Renamed export 'yN' to 'searchChatArtifacts'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 76089
         */
module.exports = function (module, exports, require) {
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatSkillPluginRegistry = require("chat-skill-plugin-registry") /*id: 500651*/;
  let l = async e => {
    let {
      conversationId: t,
      artifactId: n
    } = e;
    try {
      let {
        data: e = {}
      } = await apiServicesCollection.SamanthaApiService.SearchArtifact({
        conversation_id: t,
        artifact_id: n,
        include_content: false
      });
      let {
        artifacts: i = []
      } = e;
      return i;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "search_artifact_in_chat_error",
        error: e
      });
      throw e;
    }
  };
  let c = async e => {
    let {
      artifact_version_id: n,
      need_all_versions: o
    } = e;
    let {
      data: a
    } = await apiServicesCollection.CreationArtifactApiService.AGWGetArtifactMetaByVersion({
      artifact_version_id: n,
      need_all_versions: o
    });
    let l = (a == null ? undefined : a.artifact_meta) ?? {};
    let c = o ? l.version_list : [l.current_version_info];
    let d = c == null ? undefined : c.filter(e => e !== undefined).map(e => chatSkillPluginRegistry.chatLayoutPlugin(e));
    return throttledOrderByUtil.throttledOrderBy(d, e => e.version);
  };
  let d = async e => {
    let {
      artifactKey: t,
      needAllVersions: n,
      hasAbort: i,
      ifRetry: r
    } = e;
    try {
      let e = await asyncRetryUtils.pollUntilSuccess({
        value: () => c({
          artifact_version_id: t,
          need_all_versions: n
        }),
        ifRetry: e => !e.length || !!(r == null ? undefined : r(e)),
        count: 5
      });
      if (i) {
        return;
      }
      return e;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "search_artifact_error",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    getArtifactVersions: function () {
      return d;
    },
    searchChatArtifacts: function () {
      return l;
    }
  });
}