// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SZ' to 'checkCanvasDocCard'
// - Renamed export 'hi' to 'getArtifactContent'
// - Renamed export 'nf' to 'checkDocCardRender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 91850.a003a52a.js
         * chunkId: 91850
         * moduleId: 90901
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatSkillPluginRegistry = require("chat-skill-plugin-registry") /*id: 500651*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let c = e => {
    if (!e || !messageContentTypeAndStatusChecker.XD1(e)) {
      return;
    }
    let i = safeJsonUtils.safeParse(e.ext?.samantha_artifact, {});
    if (messageContentTypeAndStatusChecker.F3w(e)) {
      return {
        ...i,
        content: String(e == null ? undefined : e.content_obj?.text)
      };
    }
    let {
      content: a
    } = extractArtifactFromChatMessage.extractArtifactFromMessage(e) ?? {};
    return {
      ...i,
      content: a
    };
  };
  let u = e => {
    let {
      conversationId: n,
      messageId: s
    } = e;
    let {
      isExpand: o,
      canvasContent: l = {}
    } = chatStoreManager.getStoreState("chatViewCanvasStore");
    let {
      artifacts: c,
      artifactKey: u
    } = l;
    return !!c && !!u && !!s && !!isStringTypeCheck.isString(u) && o && chatSkillPluginRegistry.skillBarPluginConfig({
      conversationId: n ?? "",
      artifacts: c,
      artifactKey: u
    })?.messageId === s;
  };
  let d = e => {
    let {
      hasCanvasDocCard: t,
      element: n,
      onError: r
    } = e;
    if (!t) {
      return;
    }
    if (n.querySelectorAll("[data-testid=control_bar_action_item]").length === 0) {
      if (r != null) {
        r({
          reason: "doc_card_control_bar_error"
        });
      }
      return;
    }
    let i = n.querySelector("[data-testid=flow_doc_editor]");
    if (i) {
      if (i.textContent) {
        if (i instanceof HTMLDivElement && !i.innerText) {
          if (r != null) {
            r({
              reason: "doc_card_inner_text_null"
            });
          }
        }
      } else if (r != null) {
        r({
          reason: "doc_card_text_content_null"
        });
      }
    } else if (r != null) {
      r({
        reason: "doc_card_mount_error"
      });
    }
  };
  require.d(exports, {
    checkCanvasDocCard: function () {
      return u;
    },
    getArtifactContent: function () {
      return c;
    },
    checkDocCardRender: function () {
      return d;
    }
  });
}