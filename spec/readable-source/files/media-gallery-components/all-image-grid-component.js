// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 's' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'h' to 'skillImageMessageBox'
// - Resolved require(368459) to 'skill-image-message-box'
// - Renamed variable 'd' to 'messageBoxImage'
// - Resolved require(512593) to 'message-box-image'
// - Renamed variable 'c' to 'attachmentUploadStatusMapper'
// - Resolved require(909739) to 'attachment-upload-status-mapper'
// - Renamed variable 'u' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 'p' to 'chatMessagingPredicateUtils'
// - Resolved require(701382) to 'chat-messaging-predicate-utils'
// - Renamed variable 'm' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'f' to 'samanthaImagePreviewGallery'
// - Resolved require(927160) to 'samantha-image-preview-gallery'
// - Renamed variable '$' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'b' to 'uploadStatusMappingConstants'
// - Resolved require(790047) to 'upload-status-mapping-constants'
// - Renamed variable 'g' to 'fileUploadOverlayComponent'
// - Resolved require(148138) to 'file-upload-overlay-component'
// - Renamed variable 'w' to 'emptyObjectExport_1'
// - Resolved require(745731) to 'empty-object-export_1'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'n' to 'uploadStatusMapping' (module 790047)
// - Updated imported property 'K' to 'UploadStatusEnum' (module 148138)
// - Updated imported property 'J' to 'FileOverlayComponent' (module 148138)
// - Updated imported property 'F' to 'SkillImageBox' (module 368459)
// - Updated imported property 't' to 'MessageBoxImage' (module 512593)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'HS' to 'isReviewStateNotCompliant' (module 701382)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'Av' to 'isDefined' (module 385226)
// - Updated imported property 'e' to 'getAttachmentUploadStatus' (module 909739)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'h' to 'ImagePreviewGallery' (module 927160)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'a' to 'emptyObject' (module 745731)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93845.40b7ee33.js
         * chunkId: 93845
         * moduleId: 141408
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var skillImageMessageBox = require("skill-image-message-box") /*id: 368459*/;
  var messageBoxImage = require("message-box-image") /*id: 512593*/;
  var attachmentUploadStatusMapper = require("attachment-upload-status-mapper") /*id: 909739*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var uploadStatusMappingConstants = require("upload-status-mapping-constants") /*id: 790047*/;
  var fileUploadOverlayComponent = require("file-upload-overlay-component") /*id: 148138*/;
  var emptyObjectExport_1 = require("empty-object-export_1") /*id: 745731*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function R(e) {
    let {
      uploadingInfo: t,
      onReUpload: i
    } = e;
    if (isUndefinedCheck.isUndefined(t)) {
      return null;
    }
    let r = uploadStatusMappingConstants.uploadStatusMapping[t.uploadStatus];
    if (r !== fileUploadOverlayComponent.UploadStatusEnum.Normal) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
        absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-dbx-2xl
      `,
        onClick: () => {
          if (r === fileUploadOverlayComponent.UploadStatusEnum.Retry) {
            if (i != null) {
              i();
            }
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(fileUploadOverlayComponent.FileOverlayComponent, {
          progressPercent: t.uploadPercent,
          status: r
        })
      });
    } else {
      return null;
    }
  }
  let k = reactCoreLibraryReexport.memo(function (e) {
    let {
      urls: t,
      images: i,
      uploadingInfoMap: r,
      onClickImage: n,
      onReUpload: o
    } = e;
    if (t.length === 0) {
      return null;
    }
    if (t.length === 1) {
      let e = t[0];
      let l = i[0];
      let d = r == null ? undefined : r[l.fileKey];
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "relative",
        children: [reactJsxRuntimeCoreReexport.jsx(skillImageMessageBox.SkillImageBox, {
          url: e,
          tag: l == null ? undefined : l.tag,
          maxWidth: 300,
          maxHeight: 200,
          width: l == null ? undefined : l.option?.width,
          height: l == null ? undefined : l.option?.height,
          defaultWidth: 160,
          defaultHeight: 200,
          className: "overflow-hidden rounded-dbx-2xl border-dbx-line-7",
          onClick: () => {
            if (n != null) {
              n(e, 0);
            }
          }
        }), reactJsxRuntimeCoreReexport.jsx(R, {
          uploadingInfo: d,
          onReUpload: () => o == null ? undefined : o(l.fileKey)
        })]
      });
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex flex-wrap justify-end gap-6",
      children: t.map((e, t) => {
        let s = i[t];
        let a = r == null ? undefined : r[s.fileKey];
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "relative",
          children: [reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
            tag: s == null ? undefined : s.tag,
            className: "overflow-hidden rounded-dbx-2xl border-dbx-line-7",
            url: e,
            width: 100,
            height: 100,
            onClick: () => {
              if (n != null) {
                n(e, t);
              }
            }
          }, `image_${e}`), reactJsxRuntimeCoreReexport.jsx(R, {
            uploadingInfo: a,
            onReUpload: () => o == null ? undefined : o(s.fileKey)
          })]
        });
      })
    });
  }, (e, t) => deepEqualUtil_1.deepEqual(e.urls, t.urls) && deepEqualUtil_1.deepEqual(e.uploadingInfoMap, t.uploadingInfoMap));
  function T(e) {
    let {
      files: t,
      className: i,
      isOverflow: o,
      onReUpload: s
    } = e;
    let a = reactCoreLibraryReexport.useMemo(() => t.map(e => {
      let {
        imageUrl: t,
        fileNameReviewStatus: i,
        fileKey: r,
        option: n,
        tag: o,
        previewDisable: s
      } = e;
      let a = chatMessagingPredicateUtils.isReviewStateNotCompliant(i);
      let {
        preprocessTaskMap: l
      } = chatStoreManager.getStore("attachmentUploadStore").getState();
      let h = Object.values(l).find(e => r && (e.key === r || e.localKey === r));
      return {
        url: a ? "invalid-url" : (h == null ? undefined : h.blobUrl) || t,
        fileKey: r,
        option: n,
        tag: o,
        previewDisable: s
      };
    }).filter(e => {
      let {
        url: t
      } = e;
      return infraUtilFunctions.isDefined(t);
    }), [t]);
    let {
      uploadingInfoMap: h
    } = attachmentUploadStatusMapper.getAttachmentUploadStatus({
      attachments: t
    });
    let {
      latestFileUrls: d
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: a.map(e => {
        let {
          url: t
        } = e;
        return t;
      })
    });
    let b = a.filter(e => {
      let {
        previewDisable: t
      } = e;
      return !t;
    }).map(e => {
      let {
        url: t
      } = e;
      return t;
    });
    let [g, R] = reactCoreLibraryReexport.useState(false);
    let [T, x] = reactCoreLibraryReexport.useState(0);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(i),
      children: [reactJsxRuntimeCoreReexport.jsx(k, {
        urls: d || [],
        images: a,
        uploadingInfoMap: h,
        isOverflow: o,
        onClickImage: (e, t) => {
          if (a[t]?.previewDisable) {
            return;
          }
          let r = b.indexOf(e);
          R(true);
          x(r);
        },
        onReUpload: e => {
          let i = t.find(t => t.fileKey === e);
          if (i) {
            if (s != null) {
              s({
                attachment: i
              });
            }
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: g,
        onVisibleChange: R,
        src: xssContentSanitizer.sanitizeUrl(b, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$P$3BpTWp*M1lqSTFiR0p1$W5wT%0wNXNZbTFSZEdKWFZuc*pNa1p1$2xNe*FXSXpaM1pa$jNoelR*ZHNkRmx-Wkd4T$-y%j$Z$mRSZ*1*WE5Xd*FXR2QwWkdwSmRX%kl%alJa$0$wd$p*aE5Q%T09"
        }),
        currentIndex: T,
        onChange: x,
        ...emptyObjectExport_1.emptyObject
      })]
    });
  }
  require.r(exports);
  require.d(exports, {
    AllImageGrid: function () {
      return T;
    }
  });
}