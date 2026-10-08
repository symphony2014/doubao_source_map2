// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'MessageImageContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 871547
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var uncompliantMessageView = require("uncompliant-message-view") /*id: 262443*/;
  var fileUploadOverlayComponent = require("file-upload-overlay-component") /*id: 148138*/;
  var messageDataExtractor = require("message-data-extractor") /*id: 725292*/;
  var T = {
    container: "container-lbqmmR",
    "image-wrapper": "image-wrapper-pm4Muw",
    "img-error": "img-error-h14BEy",
    "image-icon-overlay-container": "image-icon-overlay-container-u4tXRq"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let O = e => {
    let {
      message: l
    } = e;
    let O = i18nTranslationUtils.useTranslationWithFallback();
    let M = chatStoreManager.useStoreSelector("attachmentUploadStore", e => {
      var r;
      let a = (messageContentTypeAndStatusChecker.qP0(l) && localResourceCheck.isLocal(l) ? l == null ? undefined : l.local?.localKey : (l == null ? undefined : l.local_info?.local_key) ?? undefined) || ((r = l.attachments) === null || r === undefined ? undefined : r[0]?.key);
      return Object.values(e.preprocessTaskMap).find(e => a && (e.localKey === a || e.key === a));
    }, deepEqualityUtil.deepEqual);
    let {
      url: I = "",
      uploadStatus: N,
      uploadPercent: C,
      isSafetyError: A,
      isFailed: x,
      imageList: L = []
    } = reactUseChangedRef.useChangedRef((() => {
      var r;
      if (!messageContentTypeAndStatusChecker.qP0(l) && !messageContentTypeAndStatusChecker.O72(l)) {
        return null;
      }
      let a = messageContentTypeAndStatusChecker.FFC(l);
      let o = (l == null ? undefined : l.content_obj?.data) || objectPathGetDefault.getObjectPathDefault(l == null ? undefined : l.content_obj, "image_list") || [];
      let u = o.length > 0 ? o[0] : undefined;
      let c = (M == null ? undefined : M.blobUrl) || (u == null ? undefined : u.image_thumb?.url) || (u == null ? undefined : u.image_ori?.url);
      let f = (M == null ? undefined : M.failed) ? fileUploadOverlayComponent.UploadStatusEnum.Retry : (M == null ? undefined : M.loading) ? fileUploadOverlayComponent.UploadStatusEnum.Uploading : fileUploadOverlayComponent.UploadStatusEnum.Normal;
      return {
        url: c || "hack_fallback_url",
        uploadStatus: f,
        uploadPercent: M == null ? undefined : M.percent,
        isSafetyError: messageContentTypeAndStatusChecker.Jlm(l) || chatMessagingPredicateUtils.isReviewStateNotCompliant((r = l.attachments) === null || r === undefined ? undefined : r[0]?.file_review_state),
        isFailed: a,
        imageList: o
      };
    })(), deepEqualUtil_1.deepEqual) ?? {};
    let {
      latestFileUrls: P
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [I]
    });
    let D = (P == null ? undefined : P[0]) ?? I;
    let R = messageDataExtractor.extractMessageData({
      message: l
    });
    let {
      imageEventCallbacks: {
        onImageClick: $,
        onImageRender: j
      },
      renderImagePreview: Z
    } = imagePreviewEventHandlerHook.useImagePreviewEvents(R, L, chatCoreConstants.MessageActions.Original);
    let F = async e => {
      if (!A) {
        if (x) {
          (await chatMessageRetryHandler.retrySendMessage({
            message: l
          }))();
        } else if ($ != null) {
          $(e, D);
        }
      }
    };
    if (A) {
      return reactJsxRuntimeCoreReexport.jsx(uncompliantMessageView.UncompliantMessage, {
        text: O("image_upload_safety_error")
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: u(T.container, "w-full h-full relative overflow-hidden", x && !A && "cursor-pointer"),
          "data-testid": "message_image_content",
          onClick: F,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative inline-block",
            children: [reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
              wrapperClassName: T["image-wrapper"],
              onImageClick: A ? undefined : F,
              onImageRender: e => {
                let {
                  src: t
                } = e;
                return t && j(t);
              },
              src: xssContentSanitizer.sanitizeUrl(D, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHRlhN$2hhTWxWMFd%ST$k$1JI$m5Wa1F6bHFZakl4ZDJJe%5Xe*libE-xWk$oT05*bFlTbT$r$0%wOQ"
              }),
              imageOptions: {
                width: 160,
                height: 88,
                responsiveNaturalSize: {
                  maxHeight: 200,
                  maxWidth: 300
                },
                loading: "eager"
              },
              errorClassName: T["img-error"]
            }, D), !isUndefinedCheck.isUndefined(N) && N !== fileUploadOverlayComponent.UploadStatusEnum.Normal && reactJsxRuntimeCoreReexport.jsx("div", {
              className: T["image-icon-overlay-container"],
              children: reactJsxRuntimeCoreReexport.jsx(fileUploadOverlayComponent.FileOverlayComponent, {
                progressPercent: C,
                status: N
              })
            })]
          })
        }), Z()]
      });
    }
  };
  require.d(exports, {
    MessageImageContent: function () {
      return O;
    }
  });
}