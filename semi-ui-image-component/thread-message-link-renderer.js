// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'ThreadMessageLinkView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 104989
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var copilotLinkReadFailView = require("copilot-link-read-fail-view") /*id: 303262*/;
  var attachmentNodeRenderer = require("attachment-node-renderer") /*id: 999896*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    var n;
    if ((e == null ? undefined : (n = e.attachments) === null || n === undefined ? undefined : n[0]?.type) === "link") {
      return objectPathGetDefault.getObjectPathDefault(e.attachments?.[0], ["url"], undefined);
    }
    let a = e == null ? undefined : e.content_obj?.link_model;
    let s = objectPathGetDefault.getObjectPathDefault(a, ["url"], undefined);
    if (s && isStringTypeCheck.isString(s)) {
      return s;
    } else {
      return undefined;
    }
  };
  let v = e => {
    let {
      message: i,
      enableScaleUpAction: l,
      enableOpenCanvas: r
    } = e;
    let v = attachmentProcessingUtils.extractTextContent(i);
    let f = m(i);
    let h = i ? chatMessageReadStatusMapper.mapFileReadStatuses({
      conversationId: i.conversation_id || "",
      messageId: i.message_id || ""
    }, f ? [f] : []) : undefined;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex max-w-[var(--self-message-box-max-width,450px)] flex-col items-end",
        children: [f && reactJsxRuntimeCoreReexport.jsx(attachmentNodeRenderer.renderAttachmentNode, {
          enableScaleUpAction: l,
          enableOpenCanvas: r,
          link: f,
          fileName: f,
          charCount: h == null ? undefined : h[0].charCount,
          readRatio: h == null ? undefined : h[0].readRatio,
          tooltipProps: {
            showDetail: h == null ? undefined : h[0].showRatioDetailTooltip
          },
          teaCtx: {
            messageId: i == null ? undefined : i.message_id,
            skillType: i == null ? undefined : i.skill?.skill_type_no_default
          },
          messageId: i == null ? undefined : i.message_id,
          conversationId: i == null ? undefined : i.conversation_id
        }), !!v && reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
          className: o("whitespace-break-spaces font-[400] px-9 py-12 mt-8", "text-16 leading-22 sm:text-15 sm:leading-21"),
          text: v
        })]
      }), f && (h == null ? undefined : h[0]?.parseSuccess) === false && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-28 w-[100vw] max-w-full self-start",
        children: reactJsxRuntimeCoreReexport.jsx(copilotLinkReadFailView.LinkReadFailView, {})
      })]
    });
  };
  let f = e => {
    let {
      message: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(v, {
      message: t
    });
  };
  require.d(exports, {
    ThreadMessageLinkView: function () {
      return f;
    }
  });
}