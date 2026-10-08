// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OB' to 'getArtifactsWithErrorHandling'
// - Renamed export 'lP' to 'getArtifactMetaByDocId'
// - Renamed export 'pQ' to 'generateArtifactCacheKey'
// - Renamed export 'yN' to 'getArtifactsByConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 896276
         */
module.exports = function (module, exports, require) {
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var artifactEnumConstants = require("artifact-enum-constants") /*id: 912769*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = async e => {
    let {
      conversationId: n,
      artifactId: o
    } = e;
    let {
      data: a
    } = await apiServicesCollection.SamanthaApiService.SearchArtifact({
      conversation_id: n,
      artifact_id: o
    });
    let s = (a == null ? undefined : a.artifacts) ?? [];
    return throttledOrderByUtil.throttledOrderBy(s, e => e.version);
  };
  let l = async e => {
    try {
      return await s(e);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "get_artifacts_error",
        error: e
      });
      throw e;
    }
  };
  let u = async e => {
    let {
      docId: t,
      needHistories: n = false
    } = e;
    try {
      let {
        data: e = {}
      } = await apiServicesCollection.CreationArtifactApiService.AGWGetArtifactMetaByResource({
        resource_id: t,
        artifact_type: artifactEnumConstants.ArtifactType.Page,
        need_current_version: true,
        need_histories: n
      });
      let {
        artifact_meta: i
      } = e;
      if (!i) {
        throw Error("Artifact meta is empty");
      }
      return i;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "get_artifact_union_meta_by_doc_id_error",
        error: e
      });
      throw e;
    }
  };
  let c = e => {
    let {
      conversationId: t,
      artifactId: n
    } = e;
    return `${t}_${n}`;
  };
  require.d(exports, {
    getArtifactsWithErrorHandling: function () {
      return l;
    },
    getArtifactMetaByDocId: function () {
      return u;
    },
    generateArtifactCacheKey: function () {
      return c;
    },
    getArtifactsByConversation: function () {
      return s;
    }
  });
}