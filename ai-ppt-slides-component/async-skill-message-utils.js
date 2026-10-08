// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xl' to 'getAsyncJobStatus'
// - Renamed export 'a2' to 'getAsyncJobId'
// - Renamed export 'hy' to 'buildSkillTrackParams'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 200238
         */
module.exports = function (module, exports, require) {
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let u = e => e.length === 0 ? undefined : e.length === 1 ? e[0] : e.join(",");
  let v = e => {
    let n = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.async_job, {});
    return (n == null ? undefined : n.job_id) || "";
  };
  let p = e => {
    let n = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.async_job, {});
    return String(n == null ? undefined : n.status) || "0";
  };
  let f = e => {
    var t;
    if (!messageContentTypeAndStatusChecker.DPh(e)) {
      return;
    }
    let n = e == null ? undefined : (t = e.content_blocks_v2) === null || t === undefined ? undefined : t.filter(e => {
      var n;
      return e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && ((n = e.content) === null || n === undefined ? undefined : n.artifact_block?.resource_type) === skillMessageLifecycleTypes.artifactResourceType.ArtifactResourceType_Slides;
    });
    return arrayUniqByMatcher.uniqByMatcher(collectionMapMatcher.mapWithMatcher(n, e => {
      return e.content?.artifact_block;
    }), "resource_id");
  };
  let m = e => {
    var t;
    if (!messageContentTypeAndStatusChecker.DPh(e)) {
      return;
    }
    let n = e == null ? undefined : (t = e.content_blocks_v2) === null || t === undefined ? undefined : t.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP);
    return arrayUniqByMatcher.uniqByMatcher(collectionMapMatcher.mapWithMatcher(n, e => {
      var n;
      if ((n = e.content) === null || n === undefined) {
        return undefined;
      } else {
        return n.artifact_op_block?.artifact;
      }
    }), "resource_id");
  };
  let g = (e, t) => {
    if (!e && !(t == null ? undefined : t.customTrackInfo) && !(t == null ? undefined : t.customBlock)) {
      return {};
    }
    let n = [];
    if (t == null ? undefined : t.customTrackInfo) {
      n = [t.customTrackInfo];
    } else if (t == null ? undefined : t.customBlock) {
      var d;
      var p;
      var g;
      if (t.customBlock?.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT) {
        n = [((d = t.customBlock) === null || d === undefined ? undefined : d.content?.artifact_block) || {}];
      }
      if (t.customBlock?.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP) {
        n = [((g = t.customBlock) === null || g === undefined ? undefined : (p = g.content) === null || p === undefined ? undefined : p.artifact_op_block?.artifact) || {}];
      }
    } else if (e) {
      let i = f(e) || [];
      let r = m(e) || [];
      n = (t == null ? undefined : t.needToolBlock) ? r || {} : i || [];
    }
    if (isEmptyUtil.isEmpty(n)) {
      return {
        aippt_task_id: v(e) || ""
      };
    }
    let h = [];
    let _ = [];
    let b = [];
    let y = [];
    let w = [];
    arrayObjectForeach.arrayObjectForeach(n, e => {
      h.push((e == null ? undefined : e.resource_id) || "");
      _.push((e == null ? undefined : e.resource_id) || "");
      b.push(String(e == null ? undefined : e.resource_type) || "");
      y.push((e == null ? undefined : e.artifact_meta_id) || "");
      w.push("2");
    });
    return {
      aippt_task_id: v(e) || "",
      presentation_id: u(h) || "",
      resource_id: u(_) || "",
      resource_type: u(b) || "",
      artifact_meta_id: u(y) || "",
      artifact_type: u(w) || ""
    };
  };
  require.d(exports, {
    getAsyncJobStatus: function () {
      return p;
    },
    getAsyncJobId: function () {
      return v;
    },
    buildSkillTrackParams: function () {
      return g;
    }
  });
}