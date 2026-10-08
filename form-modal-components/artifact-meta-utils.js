// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$A' to 'ArtifactStreamUtil'
// - Renamed export 'NZ' to 'mapArtifactMeta'
// - Renamed export 'a$' to 'hasRejectedReview'
// - Renamed export 'qR' to 'parseArtifactList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30108.9930390a.js
         * chunkId: 30108
         * moduleId: 398594
         */
module.exports = function (module, exports, require) {
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var chatFeedConversationUtil = require("chat-feed-conversation-util") /*id: 891416*/;
  var processingEnums = require("processing-enums") /*id: 230994*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var asyncSkillConstants = require("async-skill-constants") /*id: 292316*/;
  let l = function (e, t = {}) {
    let {
      isFinished: r,
      isSourceShare: a,
      isLocal: o
    } = t;
    let {
      offset: n,
      title: i = "",
      intention: c,
      identifier: d,
      artifact_id: l,
      artifact_key: u,
      artifact_type: f,
      version: p,
      create_time: m,
      resource_id: v,
      resource_type: y,
      resource_version: _,
      status: h,
      code: A,
      is_entry: S
    } = e ?? {};
    return {
      title: i,
      code: A,
      language: A == null ? undefined : A.language,
      version: p,
      status: h,
      isStreaming: h === asyncSkillConstants.processStatus.Start && !r,
      isSourceShare: a,
      isLocal: o,
      offset: n,
      intention: c,
      identifier: d,
      isEntry: S,
      artifactId: l,
      artifactKey: u,
      createTime: m,
      resourceId: v,
      resourceType: y,
      resourceVersion: _,
      artifactType: f
    };
  };
  let u = e => {
    var c;
    let m = [];
    if (e == null ? undefined : e.content_obj?.artifact_meta) {
      m = Array.isArray(e == null ? undefined : e.content_obj?.artifact_meta) ? e == null ? undefined : e.content_obj?.artifact_meta : [e == null ? undefined : e.content_obj?.artifact_meta];
    }
    if (e == null ? undefined : e.ext?.samantha_artifact_meta_list) {
      m = JSON.parse(e == null ? undefined : e.ext?.samantha_artifact_meta_list);
    }
    let v = chatMessageStatusCheck.isMessageFinished(e);
    let y = messageContentTypeAndStatusChecker.F3w(e);
    let _ = localResourceCheck.isLocal(e) || !!(e == null ? undefined : e.conversation_id) && !!chatFeedConversationUtil.isLocalConversation(e.conversation_id);
    if (Array.isArray(m)) {
      if (m == null) {
        return undefined;
      } else if ((c = m.map) === null || c === undefined) {
        return undefined;
      } else {
        return c.call(m, e => l(e, {
          isFinished: v,
          isSourceShare: y,
          isLocal: _
        }));
      }
    } else {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "artifactMetaList is not array",
        error: Error(JSON.stringify(e))
      });
      return [];
    }
  };
  let f = {
    startStreaming(e) {
      let t = e.find(e => {
        return e.code?.node_id === "root";
      });
      if (t) {
        t.isStreaming = true;
      }
    },
    beforeCreateArtifactMeta(e) {
      e.forEach(e => {
        if (e.code?.node_id !== "root") {
          e.isStreaming = false;
        }
      });
    },
    endStreaming(e) {
      e.forEach(e => {
        e.isStreaming = false;
        e.isFetched = true;
      });
    }
  };
  function p(e) {
    return e.some(e => (e == null ? undefined : e.review_status) === processingEnums.AccessStatus.Reject);
  }
  require.d(exports, {
    ArtifactStreamUtil: function () {
      return f;
    },
    mapArtifactMeta: function () {
      return l;
    },
    hasRejectedReview: function () {
      return p;
    },
    parseArtifactList: function () {
      return u;
    }
  });
}