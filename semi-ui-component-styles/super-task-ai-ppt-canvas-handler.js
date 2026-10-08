// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BK' to 'pptStreamPreviewCanvasTool'
// - Renamed export 'RB' to 'handleSuperTaskPptPreview'
// - Renamed export 'ZD' to 'openSuperTaskCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 291217
         */
module.exports = function (module, exports, require) {
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var modalCallbackManager = require("modal-callback-manager") /*id: 941211*/;
  var superTaskAiPptPreview = require("super-task-ai-ppt-preview") /*id: 574716*/;
  var superTaskAiPptConstants = require("super-task-ai-ppt-constants") /*id: 384454*/;
  var chatBlockManagerAndToolDataCache = require("chat-block-manager-and-tool-data-cache") /*id: 247150*/;
  let m = async (e, t, a) => {
    var r;
    let i = modalCallbackManager.findModalManager("modal");
    if (i) {
      i.showModal((t == null ? undefined : t.contentBlockId) || "", e);
      return;
    }
    let l = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
    let d = (r = chatStoreManager.getStore("chatViewCanvasStore").getState().canvasContent) === null || r === undefined ? undefined : r.superTaskData?.uniqueKey;
    if (!d || d !== e.superTaskData.uniqueKey) {
      if (l != null) {
        l.openCanvasPanel(e, undefined, false);
      }
    }
  };
  let v = "pptStreamPreviewCavansTool";
  let h = async (e, t, a) => {
    var m;
    let h = e.getToolDataManager();
    if (!(h == null ? undefined : h.toolData?.artifact)) {
      return;
    }
    let {
      messageId: _ = ""
    } = e;
    let {
      conversation_id: g,
      resource_id: f,
      resource_content_type: w,
      title: k
    } = h.toolData.artifact;
    let b = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
    if (w === "type/ppt") {
      let e = modalCallbackManager.findModalManager("modal");
      if (e) {
        e.showModal(_, undefined);
        return;
      }
      let n = chatBlockManagerAndToolDataCache.chatPageDataManager.getPPTPageData(f);
      if (!(n == null ? undefined : n.length)) {
        return;
      }
      let o = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), g || "", _ || "");
      let s = o == null ? undefined : (m = o.content_blocks) === null || m === undefined ? undefined : m.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK);
      let u = {
        superTaskData: {
          uniqueKey: t,
          toolType: v
        },
        type: superTaskAiPptPreview.superTaskPptPreview,
        triggerByTool: true,
        conversationId: g || "",
        messageId: _,
        selectedPageNodeId: a ? undefined : h.getPPTNodeId(),
        content_obj: {
          ...h.toolData.artifact,
          status: (s == null ? undefined : s.is_finish) ? h.toolData.artifact.status : 1
        },
        localPageData: n
      };
      if (b != null) {
        b.openCanvasPanel({
          ...u
        });
      }
    } else if (w === "type/markdown") {
      let e = modalCallbackManager.findModalManager("modal");
      let a = chatBlockManagerAndToolDataCache.chatPageDataManager.getPPTPageOutlineData(f) || "";
      if (e) {
        e.showMarkdownPreviewModal(superTaskAiPptConstants.aiPptOutlinePreview, a || "");
        return;
      }
      let n = {
        superTaskData: {
          uniqueKey: t,
          toolType: v
        },
        type: superTaskAiPptConstants.aiPptOutlinePreview,
        triggerByTool: true,
        conversationId: g || "",
        messageId: _,
        resource_id: f,
        content_obj: h.toolData.artifact,
        markdown: a,
        title: k
      };
      if (b != null) {
        b.openCanvasPanel(n, undefined, true);
      }
    } else if (w === "type/ddxml") {
      let e = {
        exactPluginIdentifier: writeArtifactPreviewId.artifactPreviewId,
        type: h.toolData.artifact.resource_type,
        triggerByTool: true,
        conversationId: g || "",
        messageId: _,
        artifactId: h.toolData.artifact.artifact_topic || "",
        artifactKey: h.toolData.artifact.artifact_version_id || "",
        autoRefresh: true
      };
      if (b != null) {
        b.openCanvasPanel(e);
      }
    }
  };
  require.d(exports, {
    pptStreamPreviewCanvasTool: function () {
      return v;
    },
    handleSuperTaskPptPreview: function () {
      return h;
    },
    openSuperTaskCanvas: function () {
      return m;
    }
  });
}