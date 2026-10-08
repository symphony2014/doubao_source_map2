// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mO' to 'renderChatMessageAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 704764
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var attachmentUploadStatusMapper = require("attachment-upload-status-mapper") /*id: 909739*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var attachmentNodeRenderer = require("attachment-node-renderer") /*id: 999896*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var messageErrorHandler = require("message-error-handler") /*id: 36156*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var useElementMountMonitor = require("use-element-mount-monitor") /*id: 316563*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var y = classnamesUtils;
  var skillImageMessageBox = require("skill-image-message-box") /*id: 368459*/;
  var messageBoxImage = require("message-box-image") /*id: 512593*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var rtlSkillMessageIcon = require("rtl-skill-message-icon") /*id: 696859*/;
  var uploadStatusMappingConstants = require("upload-status-mapping-constants") /*id: 790047*/;
  var fileUploadOverlayComponent = require("file-upload-overlay-component") /*id: 148138*/;
  var emptyObjectExport_1 = require("empty-object-export_1") /*id: 745731*/;
  var j = {
    "single-image": "single-image-crM264",
    singleImage: "single-image-crM264",
    "image-item": "image-item-QqBFdO",
    imageItem: "image-item-QqBFdO",
    "container-list": "container-list-t4w6k7",
    containerList: "container-list-t4w6k7",
    "container-four": "container-four-iBLiR8",
    containerFour: "container-four-iBLiR8",
    "container-five": "container-five-bTndB8",
    containerFive: "container-five-bTndB8",
    item_1: "item_1-pVUMha",
    item1: "item_1-pVUMha",
    item_2: "item_2-NwOkqj",
    item2: "item_2-NwOkqj",
    item_3: "item_3-g7RWGQ",
    item3: "item_3-g7RWGQ",
    item_4: "item_4-FLCO_y",
    item4: "item_4-FLCO_y",
    item_5: "item_5-Z8mIiE",
    item5: "item_5-Z8mIiE",
    "container-six": "container-six-S9B9kR",
    containerSix: "container-six-S9B9kR",
    "item-wrapper": "item-wrapper-lOrae7",
    itemWrapper: "item-wrapper-lOrae7",
    "more-overlay": "more-overlay-DGsM1i",
    moreOverlay: "more-overlay-DGsM1i",
    "tip-wrapper": "tip-wrapper-sANOfz",
    tipWrapper: "tip-wrapper-sANOfz",
    text: "text-aZQj5x",
    "container-infinity": "container-infinity-UPyUBs",
    containerInfinity: "container-infinity-UPyUBs",
    "image-item-top-left": "image-item-top-left-CACGDN",
    imageItemTopLeft: "image-item-top-left-CACGDN",
    "image-item-top-right": "image-item-top-right-c2XfhL",
    imageItemTopRight: "image-item-top-right-c2XfhL",
    "image-item-bottom-left": "image-item-bottom-left-RhKL_U",
    imageItemBottomLeft: "image-item-bottom-left-RhKL_U",
    "image-item-bottom-right": "image-item-bottom-right-eHkfru",
    imageItemBottomRight: "image-item-bottom-right-eHkfru"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function P(e) {
    let {
      uploadingInfo: t,
      className: i,
      onReUpload: n
    } = e;
    if (isUndefinedCheck.isUndefined(t)) {
      return null;
    }
    let r = uploadStatusMappingConstants.uploadStatusMapping[t.uploadStatus];
    if (r !== fileUploadOverlayComponent.UploadStatusEnum.Normal) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: y("absolute top-0 right-0 bottom-0 left-0 rounded-s-radius-xxs  overflow-hidden", i),
        onClick: () => {
          if (r === fileUploadOverlayComponent.UploadStatusEnum.Retry) {
            if (n != null) {
              n();
            }
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(fileUploadOverlayComponent.FileOverlayComponent, {
          status: r,
          progressPercent: t.uploadPercent
        })
      });
    } else {
      return null;
    }
  }
  let O = reactCoreLibraryReexport.memo(function (e) {
    let {
      urls: t,
      images: i,
      uploadingInfoMap: n,
      isOverflow: r = true,
      onClickImage: o,
      onReUpload: l
    } = e;
    if (t.length === 0) {
      return null;
    }
    if (t.length === 1) {
      let e = t[0];
      let r = i[0];
      let c = n == null ? undefined : n[r.fileKey];
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "relative",
        children: [reactJsxRuntimeCoreReexport.jsx(skillImageMessageBox.SkillImageBox, {
          url: e,
          maxWidth: 300,
          maxHeight: 200,
          width: r == null ? undefined : r.option?.width,
          height: r == null ? undefined : r.option?.height,
          defaultWidth: 160,
          defaultHeight: 200,
          className: j["single-image"],
          onClick: () => {
            if (o != null) {
              o(e, 0);
            }
          }
        }), reactJsxRuntimeCoreReexport.jsx(P, {
          uploadingInfo: c,
          className: "rounded-s-radius-s",
          onReUpload: () => l == null ? undefined : l(r.fileKey)
        })]
      });
    }
    if (t.length < 4) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: j["container-list"],
        children: t.map((e, t) => {
          let r = i[t];
          let a = n == null ? undefined : n[r.fileKey];
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative",
            children: [reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              className: j["image-item"],
              onClick: () => {
                if (o != null) {
                  o(e, t);
                }
              }
            }, `image_${e}`), reactJsxRuntimeCoreReexport.jsx(P, {
              uploadingInfo: a,
              onReUpload: () => l == null ? undefined : l(r.fileKey)
            })]
          });
        })
      });
    } else if (t.length === 4) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: j["container-four"],
        children: t.map((e, t) => {
          let r = i[t];
          let a = n == null ? undefined : n[r.fileKey];
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative",
            children: [reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              onClick: () => {
                if (o != null) {
                  o(e, t);
                }
              },
              className: j["image-item"]
            }, `image_${e}`), reactJsxRuntimeCoreReexport.jsx(P, {
              uploadingInfo: a,
              onReUpload: () => l == null ? undefined : l(r.fileKey)
            })]
          });
        })
      });
    } else if (t.length === 5) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: j["container-five"],
        children: t.map((e, t) => {
          let r = i[t];
          let a = n == null ? undefined : n[r.fileKey];
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative",
            children: [reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              className: y(j["image-item"], j[`item_${t + 1}`]),
              onClick: () => {
                if (o != null) {
                  o(e, t);
                }
              }
            }, `image_${e}`), reactJsxRuntimeCoreReexport.jsx(P, {
              uploadingInfo: a,
              className: y(j[`item_${t + 1}`]),
              onReUpload: () => l == null ? undefined : l(r.fileKey)
            })]
          });
        })
      });
    } else if (r) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: j["container-six"],
        children: t.slice(0, 6).map((e, r) => {
          let a = i[r];
          let s = n == null ? undefined : n[a.fileKey];
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: j["item-wrapper"],
            onClick: () => {
              if (o != null) {
                o(e, r);
              }
            },
            children: [reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              className: y(j["image-item"]),
              url: e,
              width: 98,
              height: 98
            }), r === 5 && t.length > 6 && reactJsxRuntimeCoreReexport.jsx("div", {
              className: j["more-overlay"],
              children: reactJsxRuntimeCoreReexport.jsxs("div", {
                className: j["tip-wrapper"],
                children: [reactJsxRuntimeCoreReexport.jsx(rtlSkillMessageIcon.SkillMessageIcon, {
                  className: "p-3 text-18"
                }), reactJsxRuntimeCoreReexport.jsx("span", {
                  className: j.text,
                  children: t.length - 6
                })]
              })
            }), reactJsxRuntimeCoreReexport.jsx(P, {
              uploadingInfo: s,
              onReUpload: () => l == null ? undefined : l(a.fileKey)
            })]
          }, `image_${e}`);
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: j["container-infinity"],
        children: t.map((e, r) => {
          let a = t.length % 3;
          let s = i[r];
          let c = n == null ? undefined : n[s.fileKey];
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "relative",
            children: [reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              className: y({
                [j["image-item-top-left"]]: r === 0,
                [j["image-item-top-right"]]: r === 2,
                [j["image-item-bottom-left"]]: [Math.floor(t.length / 3) * 3, (Math.floor(t.length / 3) - 1) * 3].includes(r),
                [j["image-item-bottom-right"]]: r === t.length - 1
              }),
              style: {
                gridColumnStart: a && r === t.length - a ? (a ? 3 - a : 0) + 1 : undefined
              },
              onClick: () => {
                if (o != null) {
                  o(e, r);
                }
              }
            }, `image_${e}`), reactJsxRuntimeCoreReexport.jsx(P, {
              uploadingInfo: c,
              className: y({
                [j["image-item-top-left"]]: r === 0,
                [j["image-item-top-right"]]: r === 2,
                [j["image-item-bottom-left"]]: [Math.floor(t.length / 3) * 3, (Math.floor(t.length / 3) - 1) * 3].includes(r),
                [j["image-item-bottom-right"]]: r === t.length - 1
              }),
              onReUpload: () => l == null ? undefined : l(s.fileKey)
            })]
          });
        })
      });
    }
  }, (e, t) => deepEqualUtil_1.deepEqual(e.urls, t.urls) && deepEqualUtil_1.deepEqual(e.uploadingInfoMap, t.uploadingInfoMap));
  function D(e) {
    let {
      files: t,
      className: i,
      isOverflow: r,
      onReUpload: o
    } = e;
    let l = reactCoreLibraryReexport.useMemo(() => t.map(e => {
      let {
        imageUrl: t,
        fileNameReviewStatus: i,
        fileKey: n,
        option: r
      } = e;
      let o = chatMessagingPredicateUtils.isReviewStateNotCompliant(i);
      let {
        preprocessTaskMap: l
      } = chatStoreManager.getStore("attachmentUploadStore").getState();
      let a = Object.values(l).find(e => n && (e.key === n || e.localKey === n));
      return {
        url: o ? "invalid-url" : (a == null ? undefined : a.blobUrl) || t,
        fileKey: n,
        option: r
      };
    }).filter(e => {
      let {
        url: t
      } = e;
      return infraUtilFunctions.isDefined(t);
    }), [t]);
    let {
      uploadingInfoMap: s
    } = attachmentUploadStatusMapper.getAttachmentUploadStatus({
      attachments: t
    });
    let {
      latestFileUrls: c
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: l.map(e => {
        let {
          url: t
        } = e;
        return t;
      })
    });
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let [m, h] = reactCoreLibraryReexport.useState(0);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y(i, j.container),
      children: [reactJsxRuntimeCoreReexport.jsx(O, {
        urls: c || [],
        images: l,
        uploadingInfoMap: s,
        isOverflow: r,
        onClickImage: (e, t) => {
          u(true);
          h(t);
        },
        onReUpload: e => {
          let i = t.find(t => t.fileKey === e);
          if (i) {
            if (o != null) {
              o({
                attachment: i
              });
            }
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: d,
        onVisibleChange: u,
        src: xssContentSanitizer.sanitizeUrl(c, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$P$3BpTWp*M1lqSTFiR0p1$W5wT%0wNXNZbTFSZEdKWFZuc*pNa1p1$2xNe*FXSXpaM1pa$jNoelR*ZHNkRmx-Wkd4T$-y%j$Z$mRSZ*1*WE5Xd*FXR2QxWk$oT05*bFlTbT$r$0%wOQ"
        }),
        currentIndex: m,
        onChange: h,
        ...emptyObjectExport_1.emptyObject
      })]
    });
  }
  let A = e => {
    let {
      viewOnly: t = false
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y("relative flex items-center max-w-251 h-48 border-box rounded-10 border-1 border-solid border-[var(--s-color-text-disable)] s-font-xxs bg-[var(--s-color-bg-trans)] bg-clip-content text-[var(--s-color-text-tertiary)] overflow-hidden whitespace-normal", !t && "cursor-pointer"),
      "data-testid": "message_uncompliant",
      children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
        className: "shrink-0 ml-7 text-12 p-2"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-screen grow shrink min-w-0 ml-2 mr-15 overflow-hidden",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "line-clamp-2",
          children: i("file_upload_compliance_error")
        })
      })]
    });
  };
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  let X = e => {
    let {
      attachmentBoxes: t,
      className: i = "",
      viewOnly: r = false,
      localMessageId: o
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [a, s] = reactCoreLibraryReexport.useState(!r);
    let c = reactCoreLibraryReexport.useRef(null);
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let m = d && a;
    let {
      run: h
    } = asyncSkillReceiveHook.useSkillReceive(() => {
      if (!c.current) {
        return;
      }
      let e = c.current;
      u(e.scrollHeight > e.clientHeight);
    }, {
      wait: 500
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!c.current) {
        return;
      }
      h();
      let e = new ResizeObserver(h);
      e.observe(c.current);
      return () => {
        e.disconnect();
      };
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (m) {
        teaAnalyticsEventTracker.trackEvent("upload_viewall_show", {
          message_id: o
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: c,
      className: y("relative inline-grid text-left gap-x-8 gap-y-8 max-w-full overflow-hidden", i),
      style: {
        maxHeight: a ? 178 : "none",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 250px))"
      },
      "data-testid": "message_attachment_grid",
      children: [t, m && reactJsxRuntimeCoreReexport.jsx("div", {
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
            s(e => !e);
            teaAnalyticsEventTracker.trackEvent("upload_viewall_click", {
              message_id: o
            });
          },
          children: l("allChats_button")
        })
      })]
    });
  };
  let J = e => {
    let {
      message: t,
      ...i
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: c
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      prompt: S,
      attachments: $,
      isViewOnlyNestedAttachments: R,
      localMessageId: y,
      readStatus: x
    } = reactUseChangedRef.useChangedRef((() => {
      let e = attachmentProcessingUtils.extractTextContent(t);
      let i = attachmentProcessingUtils.mapAttachments(t) || attachmentProcessingUtils.extractSourceFiles(t);
      let n = isEmptyUtil.isEmpty(i) ? attachmentProcessingUtils.extractSourceFiles(t) : undefined;
      let o = t ? chatMessageReadStatusMapper.mapFileReadStatuses({
        messageId: (t == null ? undefined : t.message_id) || "",
        conversationId: (t == null ? undefined : t.conversation_id) || ""
      }, i.map(e => e.fileKey), i.length <= 1) : undefined;
      return {
        prompt: e,
        attachments: n ?? i,
        isViewOnlyNestedAttachments: !isEmptyUtil.isEmpty(n),
        localMessageId: t == null ? undefined : t.local_message_id,
        readStatus: o
      };
    })(), deepEqualUtil_1.deepEqual);
    let T = reactFunctionMemoHook.useMemoizedCallback(() => {
      chatMessageRetryHandler.retrySendMessage({
        message: t
      })();
    });
    let N = $.filter(e => chatMessagingPredicateUtils.isParseStateFailed(e.fileParseStatus)).length;
    let I = $.every(e => attachmentProcessingUtils.isImageFile(e));
    let E = reactCoreLibraryReexport.useRef(null);
    useElementMountMonitor.useElementMountMonitor({
      getElement: () => E.current,
      enable: !isEmptyUtil.isEmpty($) && !I,
      checkMessageShowError: e => {
        let {
          element: t,
          onError: i
        } = e;
        let n = t.querySelectorAll("[data-testid=message_nested_content_file_name]");
        if (n.length === 0) {
          if (i != null) {
            i({
              reason: "nested_content_files_render_error"
            });
          }
        } else {
          let e = false;
          n.forEach(t => {
            if (t.textContent) {
              e = true;
            }
          });
          if (!e && i != null) {
            i({
              reason: "nested_content_file_names_render_error"
            });
          }
        }
      },
      onError: e => messageErrorHandler.handleMessageShowError({
        ...e,
        message: t,
        from: "read_send_attachments"
      })
    });
    if (!S && isEmptyUtil.isEmpty($)) {
      return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: a("chat_unsupported_message_type")
      });
    }
    let W = reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      text: S
    });
    if ($.length > 0 && I) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: E,
        className: "flex flex-col items-end gap-8",
        children: [reactJsxRuntimeCoreReexport.jsx(D, {
          files: $,
          onReUpload: T
        }), !!S && W]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: E,
        className: "flex w-full flex-col items-end",
        children: [!isEmptyUtil.isEmpty($) && reactJsxRuntimeCoreReexport.jsx(H, {
          attachments: $,
          attachmentProps: i,
          isViewOnlyNestedAttachments: R,
          localMessageId: y,
          readStatus: x,
          message: t,
          onReUpload: T
        }), N > 0 && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
              mt-8 flex max-w-full items-center rounded-10 bg-[#FF453A0D] px-12
              py-10 text-14 leading-20 text-[#F94D4D]
            `,
          children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
            className: "shrink-0 p-3 text-18"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "shrink truncate pl-4",
            children: a("files_parse_error").replace("%s", N.toString())
          }), reactJsxRuntimeCoreReexport.jsx("button", {
            className: `
                h-fit w-fit shrink-0 cursor-pointer border-0 bg-transparent py-0
                pr-0 pl-12 text-[var(--s-color-brand-primary-default)]
              `,
            onClick: () => {
              c([{
                operation: {
                  copySend: t ? {
                    messageLink: {
                      messageId: t.message_id || "",
                      isLocalMessage: localResourceCheck.isLocal(t)
                    }
                  } : undefined
                },
                reportParams: {
                  scene: skillConstantsEnum.SceneType.SCENE_EDIT
                },
                extraExt: {
                  parse_retry: "1"
                }
              }]);
            },
            children: a("files_parse_batch_retry")
          })]
        }), !!S && reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-8",
          children: W
        })]
      });
    }
  };
  let H = e => {
    let {
      attachments: t,
      attachmentProps: i,
      isViewOnlyNestedAttachments: r,
      localMessageId: o,
      readStatus: l,
      message: s,
      onReUpload: d
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let {
      uploadingInfoMap: m,
      hasUploadingAttachments: h
    } = attachmentUploadStatusMapper.getAttachmentUploadStatus({
      attachments: t
    });
    return reactJsxRuntimeCoreReexport.jsx(X, {
      attachmentBoxes: t.map((e, o) => {
        var b;
        let w = m[e.fileKey];
        if (chatMessagingPredicateUtils.isReviewStateNotCompliant(e.fileNameReviewStatus)) {
          return reactJsxRuntimeCoreReexport.jsx(A, {}, e.identifier || o);
        } else {
          return reactCoreLibraryReexport.createElement(attachmentNodeRenderer.renderAttachmentNode, {
            ...i,
            viewOnlyTooltip: u("cici_web_ai_coding_share_code_file_warning"),
            ...(r ? {
              viewOnly: true,
              viewOnlyTooltip: u("share_chat_disable_tooltip")
            } : undefined),
            enableScaleUpAction: !h && ((b = i.enableScaleUpAction) === null || b === undefined || b),
            key: e.identifier || o,
            ...e,
            uploadStatus: w == null ? undefined : w.uploadStatus,
            uploadPercent: w == null ? undefined : w.uploadPercent,
            onClickReUpload: () => d({
              attachment: e
            }),
            bytes: e.size,
            single: t.length === 1,
            charCount: l == null ? undefined : l[o]?.charCount,
            readRatio: l == null ? undefined : l[o]?.readRatio,
            tooltipProps: {
              showDetail: l == null ? undefined : l[o]?.showRatioDetailTooltip
            },
            teaCtx: {
              messageId: s == null ? undefined : s.message_id,
              skillType: s == null ? undefined : s.skill?.skill_type_no_default
            },
            isHitRisk: l == null ? undefined : l[o]?.isHitRisk,
            messageId: s == null ? undefined : s.message_id,
            conversationId: s == null ? undefined : s.conversation_id,
            attachments: t
          });
        }
      }),
      localMessageId: o
    });
  };
  require.d(exports, {
    renderChatMessageAttachments: function () {
      return J;
    }
  });
}