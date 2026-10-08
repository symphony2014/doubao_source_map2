// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'MessageAttachmentsRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 686554
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      attachmentBoxes: t,
      className: n = "",
      viewOnly: r = false,
      localMessageId: o
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [a, c] = reactCoreLibraryReexport.useState(!r);
    let g = reactCoreLibraryReexport.useRef(null);
    let v = useElementSizeHook_2.useElementSize(g);
    let b = reactCoreLibraryReexport.useMemo(() => isUndefinedCheck.isUndefined(v) ? "lg" : v.width <= chatResponsiveSize.sizeBreakpoints.sm ? "sm" : v.width <= chatResponsiveSize.sizeBreakpoints.md ? "md" : "lg", [v]);
    let y = b === "sm" ? 1 : b === "md" ? 2 : 3;
    let x = t.length <= 1 ? 1 : t.length <= 2 ? Math.min(2, y) : y;
    let w = reactCoreLibraryReexport.useMemo(() => a ? t.slice(0, x * 3) : t, [a, t, x]);
    let A = t.length > w.length && a;
    reactCoreLibraryReexport.useEffect(() => {
      if (A) {
        teaAnalyticsEventTracker.trackEvent("upload_viewall_show", {
          message_id: o
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d("relative grid gap-x-8 gap-y-8 max-w-full", n),
      style: {
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 250px))"
      },
      ref: g,
      "data-testid": "message_attachment_grid",
      children: [w, A && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute right-0 bottom-0 left-0 flex justify-center",
        style: {
          backgroundImage: "linear-gradient(180deg, transparent, var(--s-color-bg-body))"
        },
        children: reactJsxRuntimeCoreReexport.jsx("button", {
          className: `
              mt-6 mb-16 min-w-113 cursor-pointer rounded-73 border-0
              bg-[var(--s-color-bg-body)] px-20 py-7
              text-[var(--s-color-text-primary)] s-font-small
            `,
          style: {
            boxShadow: "0px 4px 16px 4px #1F232908, 0px 4px 8px 0px #1F232905, 0px 2px 4px -4px #1F232905"
          },
          onClick: () => {
            c(e => !e);
            teaAnalyticsEventTracker.trackEvent("upload_viewall_click", {
              message_id: o
            });
          },
          children: l("allChats_button")
        })
      })]
    });
  };
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  let b = e => {
    let {
      viewOnly: t = false
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d("relative flex items-center max-w-251 h-48 border-box rounded-10 border-1 border-solid border-[var(--s-color-text-disable)] s-font-xxs bg-[var(--s-color-bg-trans)] bg-clip-content text-[var(--s-color-text-tertiary)] overflow-hidden whitespace-normal", !t && "cursor-pointer"),
      "data-testid": "message_uncompliant",
      children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
        className: "shrink-0 ml-7 text-12 mr-4"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-screen grow shrink min-w-0 ml-2 mr-15 overflow-hidden",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "line-clamp-2",
          children: n("file_upload_compliance_error")
        })
      })]
    });
  };
  var attachmentNodeRenderer = require("attachment-node-renderer") /*id: 999896*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var messageStatusMapper = require("message-status-mapper") /*id: 308885*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  let k = e => {
    let {
      message: n,
      viewOnly: s
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let {
      conversation_id: d = "",
      message_id: u = ""
    } = n;
    let {
      attachments: p,
      isViewOnlyNestedAttachments: m,
      readStatus: v,
      localMessageId: k
    } = reactUseChangedRef.useChangedRef((() => {
      let e = attachmentProcessingUtils.mapAttachments(n) || attachmentProcessingUtils.extractSourceFiles(n);
      let t = isEmptyUtil.isEmpty(e) ? attachmentProcessingUtils.extractSourceFiles(n) : undefined;
      let i = d && u ? chatMessageReadStatusMapper.mapFileReadStatuses({
        messageId: u,
        conversationId: d
      }, e.map(e => e.fileKey), e.length <= 1) : undefined;
      return {
        attachments: t ?? e,
        isViewOnlyNestedAttachments: s || !isEmptyUtil.isEmpty(t),
        localMessageId: n == null ? undefined : n.local_message_id,
        readStatus: i
      };
    })(), deepEqualUtil_1.deepEqual);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "container-dBCpOi",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "attachment-QjbE9K",
        children: isEmptyUtil.isEmpty(p) || !Array.isArray(p) ? null : reactJsxRuntimeCoreReexport.jsx(g, {
          attachmentBoxes: p.map((e, t) => {
            if (chatMessagingPredicateUtils.isReviewStateNotCompliant(e.fileNameReviewStatus)) {
              return reactJsxRuntimeCoreReexport.jsx(b, {}, e.identifier || t);
            } else {
              return reactCoreLibraryReexport.createElement(attachmentNodeRenderer.renderAttachmentNode, {
                ...(m ? {
                  viewOnly: true,
                  viewOnlyTooltip: c("share_chat_disable_tooltip")
                } : undefined),
                enableScaleUpAction: true,
                key: e.identifier || t,
                ...e,
                bytes: e.size,
                single: p.length === 1,
                charCount: v == null ? undefined : v[t]?.charCount,
                readRatio: v == null ? undefined : v[t]?.readRatio,
                viewOnlyTooltip: c("share_chat_disable_tooltip"),
                tooltipProps: {
                  showDetail: v == null ? undefined : v[t]?.showRatioDetailTooltip
                },
                parseStatus: messageStatusMapper.getProcessStatus(e.fileParseStatus),
                teaCtx: {
                  messageId: u,
                  skillType: n == null ? undefined : n.skill?.skill_type_no_default
                },
                isHitRisk: v == null ? undefined : v[t]?.isHitRisk,
                messageId: u,
                conversationId: d,
                attachments: p
              });
            }
          }),
          localMessageId: k
        })
      }), reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: n == null ? undefined : n.content_obj?.text
      })]
    });
  };
  require.d(exports, {
    MessageAttachmentsRenderer: function () {
      return k;
    }
  });
}