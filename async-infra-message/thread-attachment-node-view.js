// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'ChatAttachmentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 707219
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var attachmentNodeRenderer = require("attachment-node-renderer") /*id: 999896*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var uncompliantMessageView = require("uncompliant-message-view") /*id: 262443*/;
  var fileUploadOverlayComponent = require("file-upload-overlay-component") /*id: 148138*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      message: f,
      ...h
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let _ = messageContentTypeAndStatusChecker.FFC(f);
    let b = chatStoreManager.useStoreSelector("attachmentUploadStore", e => {
      let n = f == null ? undefined : f.local?.localKey;
      if (n) {
        return e.preprocessTaskMap[n];
      } else {
        return undefined;
      }
    }, deepEqualityUtil.deepEqual);
    let {
      fileContent: k,
      isSafetyError: y,
      readStatus: x
    } = reactUseChangedRef.useChangedRef((() => {
      if (!messageContentTypeAndStatusChecker.A8i(f)) {
        return null;
      }
      let t = arrayFirstElement.getFirstElement(f.content_obj?.file_list);
      let n = messageContentTypeAndStatusChecker.aEU(f);
      let i = (b == null ? undefined : b.failed) || _ ? fileUploadOverlayComponent.UploadStatusEnum.Retry : (b == null ? undefined : b.loading) ? fileUploadOverlayComponent.UploadStatusEnum.Uploading : fileUploadOverlayComponent.UploadStatusEnum.Normal;
      let r = f ? chatMessageReadStatusMapper.mapFileReadStatuses({
        conversationId: f.conversation_id || "",
        messageId: f.message_id || ""
      }, t ? [t.key] : []) : undefined;
      return {
        fileContent: t,
        uploadPercent: b == null ? undefined : b.percent,
        uploadStatus: i,
        isFailed: _,
        isSafetyError: n,
        readStatus: r
      };
    })(), deepEqualUtil_1.deepEqual) ?? {};
    if (k) {
      if (y) {
        return reactJsxRuntimeCoreReexport.jsx(uncompliantMessageView.UncompliantMessage, {
          text: g("file_upload_safety_reject")
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex flex-col items-end",
          children: reactJsxRuntimeCoreReexport.jsx(attachmentNodeRenderer.renderAttachmentNode, {
            ...h,
            fileKey: k.key,
            fileName: k.file_name,
            charCount: x == null ? undefined : x[0].charCount,
            readRatio: x == null ? undefined : x[0].readRatio,
            tooltipProps: {
              showDetail: x == null ? undefined : x[0].showRatioDetailTooltip
            },
            teaCtx: {
              messageId: f == null ? undefined : f.message_id,
              skillType: f == null ? undefined : f.skill?.skill_type_no_default
            },
            messageId: f == null ? undefined : f.message_id,
            conversationId: f == null ? undefined : f.conversation_id
          })
        });
      }
    } else {
      return null;
    }
  };
  require.d(exports, {
    ChatAttachmentNode: function () {
      return f;
    }
  });
}