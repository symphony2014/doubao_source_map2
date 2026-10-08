// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I5' to 'artifactMetaUtils'
// - Renamed export 'Uq' to 'sendArtifactMessage'
// - Renamed export 'rO' to 'createArtifactMetaFromMessage'
// - Renamed export 'ru' to 'shouldProcessArtifact'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 686064
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var chatMessageSender_1 = require("chat-message-sender_1") /*id: 195759*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var artifactMetaUtils = require("artifact-meta-utils") /*id: 398594*/;
  var codeAgentModeManager = require("code-agent-mode-manager") /*id: 722076*/;
  var asyncSkillConstants = require("async-skill-constants") /*id: 292316*/;
  function m(e) {
    switch (e) {
      case skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generating:
        return asyncSkillConstants.processStatus.Start;
      case skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generated:
        return asyncSkillConstants.processStatus.Finish;
      case skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_OutDated:
        return asyncSkillConstants.processStatus.Updated;
      default:
        return asyncSkillConstants.processStatus.Start;
    }
  }
  function v(e) {
    return {
      artifactId: e.artifact_topic,
      resourceId: e.resource_id,
      artifactKey: e.artifact_meta_id,
      version: Number(e.version),
      resourceVersion: Number(e.resource_version),
      isStreaming: e.status === skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generating,
      identifier: e.artifact_topic,
      title: e.title,
      resourceType: e.resource_type,
      code: {
        node_id: "root",
        path: ""
      },
      status: m(e.status),
      type: e.resource_content_type,
      artifactType: e.resource_content_type
    };
  }
  function f(e, t, n) {
    let {
      content_obj: i
    } = t;
    return {
      resourceId: t.id,
      artifactKey: e,
      version: 1,
      resourceVersion: 1,
      isStreaming: n,
      identifier: e,
      title: "",
      resourceType: artifactResourceType.ArtifactResourceType.Code,
      code: {
        node_id: t.id,
        path: i == null ? undefined : i.path,
        content: i == null ? undefined : i.content
      }
    };
  }
  function h(e, t = 1) {
    return {
      resourceId: "-1",
      artifactKey: e,
      version: t,
      resourceVersion: t,
      isStreaming: false,
      identifier: "-1",
      title: "",
      resourceType: artifactResourceType.ArtifactResourceType.Code,
      code: {
        node_id: "root",
        path: ""
      },
      status: m(skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generated)
    };
  }
  let g = {
    getArtifactKeyFromFileOperationBlock: e => e.parent_id,
    updateArtifactDataFromFileOperation(e, t, n = false) {
      return e.map(e => {
        if (e.id === t.id && e.artifactMeta.code) {
          return {
            ...e,
            artifactMeta: {
              ...e.artifactMeta,
              isStreaming: n,
              code: {
                ...e.artifactMeta.code,
                content: t.content_obj?.content
              }
            }
          };
        } else {
          return e;
        }
      });
    },
    addArtifactDataFromFileOperation(e, t, n = false) {
      let l = [...e];
      let {
        id: r,
        parent_id: o
      } = t;
      let a = g.getArtifactKeyFromFileOperationBlock(t);
      if (e.length === 0) {
        let e = h(a);
        artifactMetaUtils.ArtifactStreamUtil.startStreaming([e]);
        l.push({
          id: "-1",
          pid: o,
          artifactMeta: e
        });
      } else {
        l = deepCloneWrapper_1.deepClone(l);
        artifactMetaUtils.ArtifactStreamUtil.beforeCreateArtifactMeta(l.map(e => e.artifactMeta));
      }
      let s = f(a, t, n);
      l.push({
        id: r,
        pid: o,
        artifactMeta: s
      });
      return l;
    },
    getFileOperationTypeCreateArtifactListFromAgentBlockList(e) {
      let t = e.filter(e => {
        if (!("content_obj" in e)) {
          return false;
        }
        let {
          content_obj: t
        } = e;
        return !!t && "operation_type" in t && (t.operation_type === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create || t.operation_type === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace);
      });
      if (!t.length) {
        return [];
      }
      let n = t[0];
      let i = g.getArtifactKeyFromFileOperationBlock(n);
      let l = h(i);
      let o = [{
        id: "-1",
        pid: n.parent_id,
        artifactMeta: l
      }];
      t.forEach(e => {
        o.push({
          id: e.id,
          pid: e.parent_id,
          artifactMeta: f(i, e, false)
        });
      });
      return o;
    },
    getArtifactOpBlock(e) {
      let t = e.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP);
      return t || undefined;
    },
    setArtifactTypeFromCodePath(e) {
      var i;
      if (e.code?.path) {
        let t = ((i = e.code?.path) == null ? undefined : i.endsWith("html")) || (i == null ? undefined : i.endsWith("js")) || (i == null ? undefined : i.endsWith("css")) ? "webview" : "";
        return {
          ...e,
          artifactType: t,
          type: t
        };
      }
      return e;
    }
  };
  async function _(e) {
    await chatMessageSender_1.sendChatMessage(e);
  }
  async function b() {
    let e = await aiChatSkillConversationChecker.isValidSkillType(chatAppEnums.SkillType.CodeAssistant);
    let t = codeAgentModeManager.isInstructionOrDevMode();
    return !!e && !t;
  }
  require.d(exports, {
    artifactMetaUtils: function () {
      return g;
    },
    sendArtifactMessage: function () {
      return _;
    },
    createArtifactMetaFromMessage: function () {
      return v;
    },
    shouldProcessArtifact: function () {
      return b;
    }
  });
}