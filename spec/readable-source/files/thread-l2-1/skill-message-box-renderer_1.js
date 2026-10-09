// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'SkillMessageBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 706663
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var copilotLinkReadFailView = require("copilot-link-read-fail-view") /*id: 303262*/;
  var extractHttpsUrls = require("extract-https-urls") /*id: 346091*/;
  var skillReferenceImageHook = require("skill-reference-image-hook") /*id: 177182*/;
  var messageAttachmentRenderer = require("message-attachment-renderer") /*id: 779448*/;
  var lazyFileIconWrapper_1 = require("lazy-file-icon-wrapper_1") /*id: 632403*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var fileTypeCheckers = require("file-type-checkers") /*id: 412342*/;
  var chatInputRefUtils = require("chat-input-ref-utils") /*id: 859718*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var statusConstants = require("status-constants") /*id: 356183*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileFolderRtlIcon = require("file-folder-rtl-icon") /*id: 543040*/;
  var filetypeCodeIcon_1 = require("filetype-code-icon_1") /*id: 58470*/;
  var rtlIconComponent_3 = require("rtl-icon-component_3") /*id: 651551*/;
  var filetypeColorfulImageIcon = require("filetype-colorful-image-icon") /*id: 745226*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var skillImageMessageBox = require("skill-image-message-box") /*id: 368459*/;
  var messageBoxImage = require("message-box-image") /*id: 512593*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlSkillMessageIcon = require("rtl-skill-message-icon") /*id: 696859*/;
  var V = {
    "single-image": "single-image-aSXUCs",
    singleImage: "single-image-aSXUCs",
    "image-item": "image-item-OPOCRB",
    imageItem: "image-item-OPOCRB",
    "container-list": "container-list-EeoHLC",
    containerList: "container-list-EeoHLC",
    "container-four": "container-four-Q6fyh0",
    containerFour: "container-four-Q6fyh0",
    "container-five": "container-five-DOdZKR",
    containerFive: "container-five-DOdZKR",
    item_1: "item_1-Yfxq6S",
    item1: "item_1-Yfxq6S",
    item_2: "item_2-glJZIK",
    item2: "item_2-glJZIK",
    item_3: "item_3-gv4w28",
    item3: "item_3-gv4w28",
    item_4: "item_4-TcOlwL",
    item4: "item_4-TcOlwL",
    item_5: "item_5-N49fua",
    item5: "item_5-N49fua",
    "container-six": "container-six-UfOH3d",
    containerSix: "container-six-UfOH3d",
    "item-wrapper": "item-wrapper-a_oNgu",
    itemWrapper: "item-wrapper-a_oNgu",
    "more-overlay": "more-overlay-b4V_TH",
    moreOverlay: "more-overlay-b4V_TH",
    "tip-wrapper": "tip-wrapper-tv3fa0",
    tipWrapper: "tip-wrapper-tv3fa0",
    text: "text-Lkukbn",
    "container-infinity": "container-infinity-PihuVG",
    containerInfinity: "container-infinity-PihuVG",
    "image-item-top-left": "image-item-top-left-SZW8w4",
    imageItemTopLeft: "image-item-top-left-SZW8w4",
    "image-item-top-right": "image-item-top-right-i7RHTz",
    imageItemTopRight: "image-item-top-right-i7RHTz",
    "image-item-bottom-left": "image-item-bottom-left-xaKvTy",
    imageItemBottomLeft: "image-item-bottom-left-xaKvTy",
    "image-item-bottom-right": "image-item-bottom-right-JRSGdz",
    imageItemBottomRight: "image-item-bottom-right-JRSGdz"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let J = reactCoreLibraryReexport.memo(function (e) {
    let {
      urls: t,
      images: n,
      isOverflow: i = true,
      onClickImage: r
    } = e;
    if (t.length === 0) {
      return null;
    }
    if (t.length === 1) {
      let e = t[0];
      let i = n[0];
      if (i == null ? undefined : i.tooltip) {
        return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: i == null ? undefined : i.tooltip,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx(skillImageMessageBox.SkillImageBox, {
              url: e,
              maxWidth: 300,
              maxHeight: 200,
              width: i == null ? undefined : i.option?.width,
              height: i == null ? undefined : i.option?.height,
              defaultWidth: 160,
              defaultHeight: 200,
              className: V["single-image"],
              onClick: () => {
                if (r != null) {
                  r(e, 0);
                }
              }
            })
          })
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(skillImageMessageBox.SkillImageBox, {
          url: e,
          maxWidth: 300,
          maxHeight: 200,
          width: i == null ? undefined : i.option?.width,
          height: i == null ? undefined : i.option?.height,
          defaultWidth: 160,
          defaultHeight: 200,
          className: V["single-image"],
          onClick: () => {
            if (r != null) {
              r(e, 0);
            }
          }
        });
      }
    }
    if (t.length < 4) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: V["container-list"],
        children: t.map((e, t) => {
          let o = n[t]?.tooltip;
          if (o) {
            return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: o,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
                  url: e,
                  width: 98,
                  height: 98,
                  className: V["image-item"],
                  onClick: () => {
                    if (r != null) {
                      r(e, t);
                    }
                  }
                }, `image_${e}`)
              })
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              className: V["image-item"],
              onClick: () => {
                if (r != null) {
                  r(e, t);
                }
              }
            }, `image_${e}`);
          }
        })
      });
    } else if (t.length === 4) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: V["container-four"],
        children: t.map((e, t) => {
          let o = n[t]?.tooltip;
          if (o) {
            return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: o,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
                  url: e,
                  width: 98,
                  height: 98,
                  onClick: () => {
                    if (r != null) {
                      r(e, t);
                    }
                  },
                  className: V["image-item"]
                }, `image_${e}`)
              })
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              onClick: () => {
                if (r != null) {
                  r(e, t);
                }
              },
              className: V["image-item"]
            }, `image_${e}`);
          }
        })
      });
    } else if (t.length === 5) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: V["container-five"],
        children: t.map((e, t) => {
          let o = n[t]?.tooltip;
          if (o) {
            return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: o,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
                  url: e,
                  width: 98,
                  height: 98,
                  className: c(V["image-item"], V[`item_${t + 1}`]),
                  onClick: () => {
                    if (r != null) {
                      r(e, t);
                    }
                  }
                }, `image_${e}`)
              })
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              className: c(V["image-item"], V[`item_${t + 1}`]),
              onClick: () => {
                if (r != null) {
                  r(e, t);
                }
              }
            }, `image_${e}`);
          }
        })
      });
    } else if (i) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: V["container-six"],
        children: t.slice(0, 6).map((e, i) => {
          let l = n[i]?.tooltip;
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: V["item-wrapper"],
            onClick: () => {
              if (r != null) {
                r(e, i);
              }
            },
            children: [l ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: l,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
                  className: c(V["image-item"]),
                  url: e,
                  width: 98,
                  height: 98
                })
              })
            }) : reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              className: c(V["image-item"]),
              url: e,
              width: 98,
              height: 98
            }), i === 5 && t.length > 6 && reactJsxRuntimeCoreReexport.jsx("div", {
              className: V["more-overlay"],
              children: reactJsxRuntimeCoreReexport.jsxs("div", {
                className: V["tip-wrapper"],
                children: [reactJsxRuntimeCoreReexport.jsx(rtlSkillMessageIcon.SkillMessageIcon, {
                  className: "p-3 text-18"
                }), reactJsxRuntimeCoreReexport.jsx("span", {
                  className: V.text,
                  children: t.length - 6
                })]
              })
            })]
          }, `image_${e}`);
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: V["container-infinity"],
        children: t.map((e, i) => {
          let l = t.length % 3;
          let a = l ? 3 - l : 0;
          let s = n[i]?.tooltip;
          if (s) {
            return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: s,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
                  url: e,
                  width: 98,
                  height: 98,
                  className: c(V["image-item"], {
                    [V["image-item-top-left"]]: i === 0,
                    [V["image-item-top-right"]]: i === 2,
                    [V["image-item-bottom-left"]]: [Math.floor(t.length / 3) * 3, (Math.floor(t.length / 3) - 1) * 3].includes(i),
                    [V["image-item-bottom-right"]]: i === t.length - 1
                  }),
                  style: {
                    gridColumnStart: l && i === t.length - l ? a + 1 : undefined
                  },
                  onClick: () => {
                    if (r != null) {
                      r(e, i);
                    }
                  }
                }, `image_${e}`)
              })
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(messageBoxImage.MessageBoxImage, {
              url: e,
              width: 98,
              height: 98,
              className: c(V["image-item"], {
                [V["image-item-top-left"]]: i === 0,
                [V["image-item-top-right"]]: i === 2,
                [V["image-item-bottom-left"]]: [Math.floor(t.length / 3) * 3, (Math.floor(t.length / 3) - 1) * 3].includes(i),
                [V["image-item-bottom-right"]]: i === t.length - 1
              }),
              style: {
                gridColumnStart: l && i === t.length - l ? a + 1 : undefined
              },
              onClick: () => {
                if (r != null) {
                  r(e, i);
                }
              }
            }, `image_${e}`);
          }
        })
      });
    }
  }, (e, t) => deepEqualUtil_1.deepEqual(e.urls, t.urls));
  function q(e) {
    let {
      files: t,
      className: n,
      isOverflow: r
    } = e;
    let o = reactCoreLibraryReexport.useMemo(() => t.map(e => {
      let {
        imageUrl: t,
        fileNameReviewStatus: n,
        fileKey: i,
        option: r
      } = e;
      let o = chatMessagingPredicateUtils.isReviewStateNotCompliant(n);
      let {
        preprocessTaskMap: l
      } = chatStoreManager.getStore("attachmentUploadStore").getState();
      let a = Object.values(l).find(e => i && e.key === i);
      return {
        url: o ? "invalid-url" : (a == null ? undefined : a.blobUrl) || t,
        fileKey: i,
        option: r,
        tooltip: e.tooltip
      };
    }).filter(e => {
      let {
        url: t
      } = e;
      return infraUtilFunctions.isDefined(t);
    }), [t]);
    let {
      latestFileUrls: l
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: o.map(e => {
        let {
          url: t
        } = e;
        return t;
      })
    });
    let [a, s] = reactCoreLibraryReexport.useState(false);
    let [d, u] = reactCoreLibraryReexport.useState(0);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c(n, V.container),
      children: [reactJsxRuntimeCoreReexport.jsx(J, {
        urls: l || [],
        images: o,
        isOverflow: r,
        onClickImage: (e, t) => {
          s(true);
          u(t);
        }
      }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
        visible: a,
        onVisibleChange: s,
        src: xssContentSanitizer.sanitizeUrl(l, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e$JuTmlRekZ3WWxkR2JscFRN$z$q-ld4clRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
        }),
        currentIndex: d,
        onChange: u
      })]
    });
  }
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  let Q = e => {
    let {
      viewOnly: t = false
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c("relative flex items-center max-w-251 h-48 border-box rounded-10 border-1 border-solid border-[var(--s-color-text-disable)] s-font-xxs bg-[var(--s-color-bg-trans)] bg-clip-content text-[var(--s-color-text-tertiary)] overflow-hidden whitespace-normal", !t && "cursor-pointer"),
      "data-testid": "message_uncompliant",
      children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
        className: "mr-4 ml-7 shrink-0 text-12"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mr-15 ml-2 w-screen min-w-0 shrink grow overflow-hidden",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "line-clamp-2",
          children: n("file_upload_compliance_error")
        })
      })]
    });
  };
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  let ei = e => {
    let {
      attachmentBoxes: t,
      className: n = "",
      viewOnly: r = false,
      localMessageId: o
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [a, s] = reactCoreLibraryReexport.useState(!r);
    let d = reactCoreLibraryReexport.useRef(null);
    let u = useElementSizeHook_2.useElementSize(d);
    let p = reactCoreLibraryReexport.useMemo(() => isUndefinedCheck.isUndefined(u) ? "lg" : u.width <= chatResponsiveSize.sizeBreakpoints.sm ? "sm" : u.width <= chatResponsiveSize.sizeBreakpoints.md ? "md" : "lg", [u]);
    let h = p === "sm" ? 1 : p === "md" ? 2 : 3;
    let m = t.length <= 1 ? 1 : t.length <= 2 ? Math.min(2, h) : h;
    let f = reactCoreLibraryReexport.useMemo(() => a ? t.slice(0, m * 3) : t, [a, t, m]);
    let g = t.length > f.length && a;
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        teaAnalyticsEventTracker.trackEvent("upload_viewall_show", {
          message_id: o
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c("flex overflow-hidden gap-8 w-full justify-end", n),
      ref: d,
      "data-testid": "message_attachment_grid",
      children: [f, g && reactJsxRuntimeCoreReexport.jsx("div", {
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
  let er = e => {
    var n;
    let {
      viewOnly: W,
      message: F,
      onReferenceClick: L,
      theme: D = "samantha",
      ...z
    } = e;
    let B = i18nTranslationUtils.useTranslationWithFallback();
    let X = (D == null ? undefined : D.toLowerCase()) === "coco";
    let {
      bubbleText: H,
      refContents: U,
      attachments: V,
      readStatus: J,
      localMessageId: K,
      repoInfo: Y,
      isViewOnlyNestedAttachments: ee
    } = reactUseChangedRef.useChangedRef((() => {
      var i;
      if (!F) {
        return {
          bubbleText: B("chat_unsupported_message_type"),
          refContents: []
        };
      }
      let f = (F == null ? undefined : F.content_obj?.text) || "";
      let g = safeJsonUtils.safeParse(F.ext?.reference_content, []);
      let v = [];
      if (arrayIsArrayUtil.isArray(g) && !isEmptyUtil.isEmpty(g)) {
        v = g.filter(e => (e == null ? undefined : e.type) !== "text" || !!(e == null ? undefined : e.text));
      }
      let {
        local_message_id: b
      } = F;
      let {
        attachments: x
      } = F;
      let w = {};
      if (x == null ? undefined : (i = x[0]) === null || i === undefined ? undefined : i.extra?.repo_id) {
        w = {
          ...(x == null ? undefined : x[0]?.extra)
        };
      }
      if (F.content_obj?.link_model) {
        let e = F.content_obj?.link_model;
        x = [{
          type: "link",
          name: e.extra?.repo_name || e.url,
          url: e.url,
          key: e.extra?.repo_id || "",
          repo_id: e.extra?.repo_id || "",
          file_parse_state: messagingConstants.parseState.ParseState_Success
        }];
        w = e.extra;
      }
      let A = W || isEmptyUtil.isEmpty(x);
      if (A && F.ext?.source_entity) {
        let e = JSON.parse(F.ext?.source_entity || "[{}]");
        x = chatContentTransformer.transformChatContent(e);
      }
      let _ = (x == null ? undefined : x.length) && F ? chatMessageReadStatusMapper.mapFileReadStatuses({
        conversationId: F.conversation_id || "",
        messageId: F.message_id || ""
      }, x.map(e => e.key)) : undefined;
      return {
        bubbleText: f,
        refContents: v,
        attachments: x,
        readStatus: _,
        localMessageId: b,
        repoInfo: w,
        isViewOnlyNestedAttachments: A
      };
    })(), deepEqualUtil_1.deepEqual);
    let et = extractHttpsUrls.extractHttpsUrls(H || "");
    let en = F ? (n = chatMessageReadStatusMapper.mapFileReadStatuses({
      conversationId: F.conversation_id || "",
      messageId: F.message_id || ""
    }, et)) === null || n === undefined ? undefined : n[0]?.parseSuccess : undefined;
    let er = arrayFirstElement.getFirstElement(U);
    let {
      ext: eo
    } = urlExtensionDetectionUtils.useUrlExtension(fileTypeCheckers.isLinkType(er) && er.link ? er.link : "", fileTypeDetectionUtils.imageExtensions);
    let el = reactFunctionMemoHook.useMemoizedCallback((e, t) => (e == null ? undefined : e.type) === "directory" ? reactJsxRuntimeCoreReexport.jsx(fileFolderRtlIcon.FileFolderRtlIcon, {
      className: "mr-2 ml-6 shrink-0"
    }) : fileTypeCheckers.isFileType(e) ? codeAssistantFileValidator.getCodeFileTypes(e.fileName) ? reactJsxRuntimeCoreReexport.jsx(filetypeCodeIcon_1.FiletypeCodeIcon, {
      className: "mr-2 ml-6 shrink-0"
    }) : reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper_1.LazyFileIcon, {
      ext: e ? chatInputRefUtils.getFileLinkOrName(e) : "",
      className: "mr-2 ml-6 shrink-0"
    }) : fileTypeCheckers.isLinkType(e) && e.identifier ? reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_3.RtlIcon, {
      className: "mr-2 ml-6 shrink-0"
    }) : fileTypeCheckers.isLinkType(e) ? reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper_1.LazyFileIcon, {
      ext: t,
      link: true,
      className: "mr-2 ml-6 shrink-0"
    }) : fileTypeCheckers.isImageType(e) ? reactJsxRuntimeCoreReexport.jsx(filetypeColorfulImageIcon.FiletypeColorfulImageIcon, {
      className: "mr-2 ml-6 shrink-0"
    }) : (fileTypeCheckers.isTextType(e), null));
    let ea = reactCoreLibraryReexport.useMemo(() => U.filter(e => fileTypeCheckers.isFileType(e)), [U]);
    let es = reactCoreLibraryReexport.useMemo(() => U.filter(e => fileTypeCheckers.isTextType(e)), [U]);
    let ec = reactCoreLibraryReexport.useMemo(() => U.filter(e => fileTypeCheckers.isDirectoryType(e)), [U]);
    let ed = reactCoreLibraryReexport.useMemo(() => U.filter(e => fileTypeCheckers.isLinkType(e) && e.identifier), [U]);
    let eu = reactCoreLibraryReexport.useMemo(() => U.filter(e => fileTypeCheckers.isImageType(e)), [U]);
    let ep = () => {
      if (ed.length) {
        return [...ed, ...es];
      }
      if (ec.length) {
        return [...ec, ...es];
      }
      if (eu.length) {
        let e = eu.map(e => "fileName" in e && e.fileName || "");
        return [{
          type: "image",
          fileName: chatInputRefUtils.getFileListSummary(e, B),
          fileKey: "fileKey" in eu[0] && eu[0].fileKey || "",
          fileCount: eu.length
        }];
      }
      if (ea.length) {
        let e = ea.map(e => "fileName" in e && e.fileName || "");
        return [{
          type: "attachment",
          fileName: chatInputRefUtils.getFileListSummary(e, B),
          fileKey: "fileKey" in ea[0] && ea[0].fileKey || "",
          fileCount: ea.length
        }, ...es];
      }
      return U;
    };
    let eh = e => {
      let r = (e == null ? undefined : e.extra?.renderTitle) || (e == null ? undefined : e.text);
      let o = e == null ? undefined : e.extra?.rangeStart;
      let l = e == null ? undefined : e.extra?.rangeEnd;
      if (o && l) {
        return `${r} (${o}-${l})`;
      } else {
        return r;
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex w-full flex-col items-end",
        children: [(() => {
          if (isEmptyUtil.isEmpty(V) || !Array.isArray(V) || !isEmptyUtil.isEmpty(U)) {
            return null;
          }
          if (V.every(e => e.type === chatCoreConstants.ContentTypes.VlmImage || e.type === chatCoreConstants.ContentTypes.Image)) {
            let e = V.map(e => {
              var n;
              var i;
              var r;
              var o;
              var l;
              var a;
              var s;
              let c = (l = F.content_obj) === null || l === undefined ? undefined : (o = l.entities) === null || o === undefined ? undefined : (r = o.find(t => (t == null ? undefined : t.identifier) === e.identifier)) === null || r === undefined ? undefined : (i = r.entity_content) === null || i === undefined ? undefined : (n = i.image) === null || n === undefined ? undefined : n.metadata?.code_dev_mode_refer_image_types;
              let d = {
                [skillReferenceImageHook.ReferenceImageTypes.Function]: B("coding_website_build_img_function"),
                [skillReferenceImageHook.ReferenceImageTypes.Layout]: B("coding_website_build_img_layout"),
                [skillReferenceImageHook.ReferenceImageTypes.Color]: B("coding_website_build_img_color")
              };
              return {
                imageUrl: e.url,
                fileNameReviewStatus: e.file_review_state,
                fileKey: e.key,
                option: e.option,
                fileParseStatus: e.file_parse_state,
                fileType: contentTypeEnums.resourceType.Image,
                fileName: e.name,
                size: e.size,
                identifier: e.identifier,
                ...(c ? {
                  tooltip: B("coding_website_build_referenced_type", {
                    s_type: c == null ? undefined : (s = c.split(",")) === null || s === undefined ? undefined : (a = s.map(e => d[e])) === null || a === undefined ? undefined : a.join("+")
                  })
                } : {})
              };
            });
            return reactJsxRuntimeCoreReexport.jsx("div", {
              className: "mb-8 flex justify-end",
              children: reactJsxRuntimeCoreReexport.jsx(q, {
                files: e
              })
            });
          }
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mb-8 flex justify-end",
            children: reactJsxRuntimeCoreReexport.jsx(ei, {
              attachmentBoxes: V.map((e, t) => {
                var a;
                if (chatMessagingPredicateUtils.isReviewStateNotCompliant(e.file_review_state)) {
                  return reactJsxRuntimeCoreReexport.jsx(Q, {}, e.identifier || t);
                } else {
                  return reactCoreLibraryReexport.createElement(messageAttachmentRenderer.MessageAttachment, {
                    ...z,
                    ...(ee ? {
                      viewOnly: true,
                      viewOnlyTooltip: B("cici_web_ai_coding_share_code_file_warning")
                    } : undefined),
                    key: e.identifier || t,
                    ...e,
                    nodeType: e.type === "directory" ? "directory" : e.type === "link" ? "repo" : "codeFile",
                    fileKey: e.key,
                    fileName: e.name,
                    bytes: e.size,
                    single: V.length === 1,
                    enableScaleUpAction: (a = z.enableScaleUpAction) === null || a === undefined || a,
                    charCount: J == null ? undefined : J[t]?.charCount,
                    readRatio: J == null ? undefined : J[t]?.readRatio,
                    tooltipProps: {
                      showDetail: J == null ? undefined : J[t]?.showRatioDetailTooltip
                    },
                    parseStatus: statusConstants.processStatus.Success,
                    repoInfo: Y,
                    teaCtx: {
                      messageId: F == null ? undefined : F.message_id,
                      skillType: F == null ? undefined : F.skill?.skill_type_no_default
                    },
                    isHitRisk: J == null ? undefined : J[t].isHitRisk,
                    messageId: F == null ? undefined : F.message_id,
                    conversationId: F == null ? undefined : F.conversation_id,
                    attachments: V
                  });
                }
              }),
              localMessageId: K
            })
          });
        })(), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: c(`w-fit max-w-450 min-w-0
            px-16 py-9 text-s-color-text-secondary s-font-base
            sm:text-15`, H || !isEmptyUtil.isEmpty(U) && Array.isArray(U) ? X ? "rounded-s-radius-s !bg-[#06f] py-16" : "rounded-s-radius-s bg-s-color-bg-trans" : ""),
          children: [(() => {
            if (isEmptyUtil.isEmpty(U) || !Array.isArray(U)) {
              return null;
            }
            let e = ep();
            return reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex justify-end",
              children: e.map((e, t) => reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
                className: c("mb-8 max-w-full", X && "text-white/85"),
                refIconClassName: c(X && "[&_*]:!bg-white/85"),
                text: e.type === "text" ? eh(e) : "fileName" in e ? e.fileName || "" : e.type === "link" ? e.link : "",
                icon: e.type !== "text" && el(e, eo),
                allowMultiLine: true,
                onClick: L
              }, `${e.type}-${t}`))
            });
          })(), H && reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex w-full justify-start",
            children: reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
              text: H,
              className: c(chatThemeStyleConfig.chatThemeConfig[D]?.sendClassNames, X && "!p-[unset] [&_*]:!text-white"),
              style: chatThemeStyleConfig.chatThemeConfig[D].cssVar
            })
          })]
        })]
      }), en === false && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-28 w-[100vw] max-w-full self-start",
        children: reactJsxRuntimeCoreReexport.jsx(copilotLinkReadFailView.LinkReadFailView, {})
      })]
    });
  };
  require.d(exports, {
    SkillMessageBox: function () {
      return er;
    }
  });
}