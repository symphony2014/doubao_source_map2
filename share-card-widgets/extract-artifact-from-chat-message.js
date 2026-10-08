// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'le' to 'extractArtifactFromMessage'
// - Renamed export 'z3' to 'extractResearchFromMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 117895
         */
module.exports = function (module, exports, require) {
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var stringSliceLengthUtil = require("string-slice-length-util") /*id: 235558*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var validateConversationId = require("validate-conversation-id") /*id: 913490*/;
  let u = (e, t) => {
    var p;
    var m;
    var _;
    if (e == null ? undefined : e.content_blocks_v2?.length) {
      let n = (_ = e.content_blocks_v2.find(e => {
        var i;
        return e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && (!t || ((i = e.content) === null || i === undefined ? undefined : i.artifact_block?.resource_id) === t);
      })) === null || _ === undefined ? undefined : _.content?.artifact_block;
      if (n) {
        return {
          ...n,
          version: Number(n.version),
          resource_version: Number(n.resource_version),
          artifactId: n.artifact_topic,
          artifactKey: n.artifact_version_id,
          resourceId: n.resource_id,
          resourceType: n.resource_type,
          createTime: validateConversationId.normalizeTimestamp(e == null ? undefined : e.create_time),
          isStreaming: !(e == null ? undefined : e.is_finish),
          intention: "",
          identifier: "",
          title: n.title,
          guide: "",
          genre: "",
          artifact_type: "",
          status: 0
        };
      }
    }
    if (e == null ? undefined : e.content_blocks?.length) {
      let n = e.content_blocks.find(e => {
        return e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT && (!t || e.content_obj?.resource_id === t);
      });
      if (n) {
        return {
          ...(n == null ? undefined : n.content_obj),
          artifactId: n == null ? undefined : n.content_obj?.artifact_topic,
          artifactKey: n == null ? undefined : n.content_obj?.artifact_version_id,
          resourceId: n == null ? undefined : n.content_obj?.resource_id,
          resourceType: n == null ? undefined : n.content_obj?.resource_type,
          title: n == null ? undefined : n.content_obj?.title,
          createTime: validateConversationId.normalizeTimestamp(e == null ? undefined : e.create_time),
          isStreaming: !(e == null ? undefined : e.is_finish)
        };
      }
    }
    if (!messageContentTypeAndStatusChecker.XD1(e)) {
      return;
    }
    let I = safeJsonUtils.safeParse(e.ext?.samantha_artifact, null) ?? e.content_obj?.artifact_meta ?? {};
    let j = arrayFindLastIndexUtil.findLastIndex(e.content_blocks_v2, e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT);
    let R = (m = e.content_blocks_v2) === null || m === undefined ? undefined : (p = m[j]) === null || p === undefined ? undefined : p.content?.text_block;
    let N = (R == null ? undefined : R.text) ?? e.content_obj?.text ?? "";
    let {
      offset: $,
      title: M = "",
      intention: P,
      identifier: L,
      meeting_minutes: D,
      artifact_id: O,
      artifact_key: Z,
      create_time: A,
      resource_id: W,
      resource_type: B,
      resource_version: F,
      status: z
    } = I ?? {};
    let H = $ && !isUndefinedCheck.isUndefined($ == null ? undefined : $.start) ? stringSliceLengthUtil.calcSliceLength(N, $.start) : undefined;
    let V = $ && !isUndefinedCheck.isUndefined($ == null ? undefined : $.end) ? stringSliceLengthUtil.calcSliceLength(N, $.end) : undefined;
    return {
      title: M,
      content: N.slice(H, V),
      isStreaming: !($ == null ? undefined : $.end),
      offset: $ && {
        start: H,
        end: V
      },
      intention: P,
      identifier: L,
      artifactId: O,
      artifactKey: Z,
      createTime: A,
      resourceId: W,
      resourceType: B,
      resourceVersion: F,
      meeting_minutes: D,
      status: z
    };
  };
  let h = e => {
    var n;
    if (!messageContentTypeAndStatusChecker.cnd(e)) {
      return;
    }
    let i = e == null ? undefined : (n = e.content_blocks) === null || n === undefined ? undefined : n.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_RESEARCH)?.content_obj;
    let {
      title: r,
      resource_id: l,
      artifact: c,
      status: d
    } = i ?? {};
    let {
      artifact_id: u,
      artifact_key: h,
      resource_id: f,
      resource_type: p
    } = c ?? {};
    return {
      title: r,
      content: "",
      isStreaming: d === skillMessageLifecycleTypes.taskStatus.PROCESSING,
      artifactId: u,
      artifactKey: h,
      resourceId: f ?? l,
      resourceType: p,
      intention: "",
      identifier: "",
      guide: "",
      genre: "",
      artifact_type: "",
      status: 0
    };
  };
  require.d(exports, {
    extractArtifactFromMessage: function () {
      return u;
    },
    extractResearchFromMessage: function () {
      return h;
    }
  });
}