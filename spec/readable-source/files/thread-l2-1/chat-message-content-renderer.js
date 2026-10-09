// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'ChatMessageContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14920.5124a06d.js
         * chunkId: 14920
         * moduleId: 633823
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var attachmentNodeRenderer = require("attachment-node-renderer") /*id: 999896*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatMessageRetryHandler = require("chat-message-retry-handler") /*id: 725789*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var messageDataExtractor = require("message-data-extractor") /*id: 725292*/;
  var uncompliantMessageView = require("uncompliant-message-view") /*id: 262443*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let N = e => {
    let {
      boxes: t,
      className: n = "",
      viewOnly: i = false
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let [a, o] = reactCoreLibraryReexport.useState(!i);
    let s = chatResponsiveSize.useChatScreenSize();
    let d = t.length <= 1 ? 1 : t.length <= 2 ? 2 : s === "sm" ? 2 : 3;
    let u = a ? t.slice(0, d * 3) : t;
    let v = t.length > u.length && a;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c("relative grid gap-x-8 gap-y-8", n),
      style: {
        gridTemplateColumns: `repeat(${d}, 1fr)`
      },
      children: [u, v && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 flex justify-center",
        style: {
          backgroundImage: "linear-gradient(180deg, transparent, var(--s-color-bg-body))"
        },
        children: reactJsxRuntimeCoreReexport.jsx("button", {
          className: "min-w-113 mb-16 mt-6 py-7 px-20 s-font-small border-0 rounded-73 text-[var(--s-color-text-primary)] bg-[var(--s-color-bg-body)] cursor-pointer",
          style: {
            boxShadow: "0px 4px 16px 4px #1F232908, 0px 4px 8px 0px #1F232905, 0px 2px 4px -4px #1F232905"
          },
          onClick: () => {
            o(e => !e);
          },
          children: r("allChats_button")
        })
      })]
    });
  };
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var allowedUrlCheck = require("allowed-url-check") /*id: 671850*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var iconSunOutline = require("icon-sun-outline") /*id: 700480*/;
  var exitToAppIcon = require("exit-to-app-icon") /*id: 703191*/;
  var L = {
    box: "box-ypfcyI",
    "action-container": "action-container-HLCjiP",
    "ref-action": "ref-action-Ne0uiw",
    container: "container-A91JFC",
    mask: "mask-cVGvds",
    hoverable: "hoverable-dLgxJD",
    favicon: "favicon-I_hi9X"
  };
  let P = e => {
    window.open(xssContentSanitizer.sanitizeUrl(e, null, {
      logType: "js.window.location",
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mR*a3lPWFJq%npsNllWaFNiRXh-$*5aaWJsSnNZbT$SZ*1Re$Ztb*pNbXd3$2xNe*RXSXl$bXhNTTJSc1dXN%9jR1JI$lhSWmJ%azB%Rz$TZW1WSFJub*FNM$o2"
    }));
  };
  let j = e => {
    let {
      className: t,
      url: n,
      title: r,
      icon: a
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      currentChatViewConfig: s
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      chatInputRef: d
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let u = new URL(n).host;
    let [v, _] = reactCoreLibraryReexport.useState(!!a);
    reactCoreLibraryReexport.useEffect(() => {
      _(!!a);
    }, [a]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "website-box",
      onClick: () => {
        if (allowedUrlCheck.isUrlAllowed(n, {
          allowedProtocols: ["https:"]
        })) {
          P(n);
        }
      },
      className: c("relative flex items-center max-w-251 border-box rounded-[var(--s-radius-s)] bg-[var(--s-color-bg-trans)] overflow-hidden cursor-pointer", L.box, L.hoverable, t),
      children: [v ? reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(a, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mR*a3lPWFJq%npsNllWaFNiRXh-$*5aaWJsSnNZbT$SZ*1Re$Ztb*pNbXd3$2xNe*RXSXl$bXhNTTJSc1dXN%9jR1JI$lhSWmJ%azB%Rz$TZW1WSFJub*FNM$o2"
        }),
        className: c("flex items-center justify-center ml-16 mr-12", L.favicon),
        onError: () => _(false),
        referrerPolicy: "no-referrer"
      }) : reactJsxRuntimeCoreReexport.jsx(iconSunOutline.SunIcon, {
        className: "flex items-center justify-center text-32 ml-10 mr-6 my-8 shrink-0"
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "w-screen grow shrink min-w-0 mr-12 mb-10 mt-10 overflow-hidden",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "s-font-small !leading-16 text-s-color-text-secondary truncate",
          "data-testid": "website-title",
          children: r
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mt-2 s-font-xxs !leading-14 text-[var(--s-color-text-quaternary)]",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "truncate",
            children: u
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: L["action-container"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: L.mask
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: L.container,
          children: reactJsxRuntimeCoreReexport.jsx(chatTooltipWrapper.ChatTooltip, {
            content: o("skill_read_quote"),
            className: "s-font-xxs",
            trigger: "hover",
            showArrow: true,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: L["ref-action"],
              children: reactJsxRuntimeCoreReexport.jsx(exitToAppIcon.ExitToAppIcon, {
                className: "text-10 p-2 text-white",
                onClick: e => {
                  e.stopPropagation();
                  if (s == null ? undefined : s.chatId) {
                    var t;
                    let e = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[s.chatId];
                    chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(t => {
                      if (t != null) {
                        t.setRefContents({
                          refContents: [{
                            type: "link",
                            link: n
                          }],
                          channel: e ? `skill_${e}` : "default"
                        }, s.chatId);
                      }
                    });
                    if ((t = d.current) !== null && t !== undefined) {
                      t.focus();
                    }
                  }
                }
              })
            })
          })
        })]
      })]
    });
  };
  let W = e => {
    let {
      message: w,
      baseContentClassName: I,
      ...R
    } = e;
    let E = i18nTranslationUtils.useTranslationWithFallback();
    let C = messageContentTypeAndStatusChecker.FFC(w);
    let $ = chatStoreManager.useStoreSelector("attachmentUploadStore", e => {
      let n = w == null ? undefined : w.local?.localKey;
      if (n) {
        return e.preprocessTaskMap[n];
      } else {
        return undefined;
      }
    }, deepEqualityUtil.deepEqual);
    let {
      text: T,
      fileList: L = [],
      imageList: P = [],
      websiteList: W = [],
      url: F = "",
      isSafetyError: D,
      readStatus: M
    } = reactUseChangedRef.useChangedRef((() => {
      var t;
      var i;
      if (!w || !messageContentTypeAndStatusChecker.xop(w)) {
        return null;
      }
      let r = messageContentTypeAndStatusChecker.icE(w);
      let {
        text: a,
        image_model: o,
        file_model: s,
        website_model: c
      } = w.content_obj ?? {};
      let {
        file_list: u = []
      } = s || {};
      let {
        image_list: v = []
      } = o || {};
      let {
        pages: p = []
      } = c || {};
      let f = ($ == null ? undefined : $.blobUrl) || ((t = v[0]) === null || t === undefined ? undefined : t.image_thumb?.url) || ((i = v[0]) === null || i === undefined ? undefined : i.image_ori?.url) || "hack_fallback_url";
      let m = messageContentTypeAndStatusChecker.Jlm(w) || messageContentTypeAndStatusChecker.aEU(w);
      let h = w ? chatMessageReadStatusMapper.mapFileReadStatuses({
        conversationId: w.conversation_id || "",
        messageId: w.message_id || ""
      }, u.map(e => e.key)) : undefined;
      return {
        text: a,
        fileList: u,
        imageList: v,
        websiteList: p,
        url: f,
        isSafetyError: m,
        isCompositeWithFiles: r,
        readStatus: h
      };
    })(), deepEqualityUtil.deepEqual) ?? {};
    let A = async () => {
      (await chatMessageRetryHandler.retrySendMessage({
        message: w
      }))();
    };
    let O = messageDataExtractor.extractMessageData({
      message: w
    });
    let {
      imageEventCallbacks: {
        onImageClick: Z,
        onImageRender: z
      },
      renderImagePreview: B
    } = imagePreviewEventHandlerHook.useImagePreviewEvents(O, P, chatCoreConstants.MessageActions.Original);
    if (L.length > 0) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col items-end gap-8",
        children: [reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
          text: T
        }), D ? reactJsxRuntimeCoreReexport.jsx(uncompliantMessageView.UncompliantMessage, {
          text: E("file_upload_safety_reject")
        }) : reactJsxRuntimeCoreReexport.jsx(attachmentNodeRenderer.renderAttachmentNode, {
          ...R,
          fileKey: L[0]?.key,
          fileName: L[0]?.file_name,
          charCount: M == null ? undefined : M[0].charCount,
          readRatio: M == null ? undefined : M[0].readRatio,
          tooltipProps: {
            showDetail: M == null ? undefined : M[0].showRatioDetailTooltip
          },
          teaCtx: {
            messageId: w == null ? undefined : w.message_id,
            skillType: w == null ? undefined : w.skill?.skill_type_no_default
          },
          messageId: w == null ? undefined : w.message_id,
          conversationId: w == null ? undefined : w.conversation_id
        })]
      });
    } else if (P.length > 0) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: c(I, "flex flex-col gap-8"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: c("whitespace-break-spaces font-[400]", "text-16 leading-22 sm:text-15 sm:leading-21"),
            "data-testid": "message_text_content",
            children: T
          }), D ? reactJsxRuntimeCoreReexport.jsx(uncompliantMessageView.UncompliantMessage, {
            text: E("image_upload_safety_error")
          }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: P.length === 1 ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
                onImageClick: e => {
                  if (D) {
                    emptyExportFunction.emptyFunction();
                  } else if (C) {
                    A();
                  } else if (Z != null) {
                    Z(e, F);
                  }
                },
                onImageRender: e => {
                  let {
                    src: t
                  } = e;
                  return t && z(t);
                },
                src: xssContentSanitizer.sanitizeUrl(F, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mR*a3lPWFJq%npsNllWaFNiRXh-$*5aaWJsSnNZbT$SZ*xre%9-%mpSemwx$2xjM%1FeH$$bnBs%jBaN$dqTldlZz09"
                }),
                imageOptions: {
                  squareContainer: true,
                  objectFit: "cover",
                  draggable: false,
                  width: 64,
                  height: 64
                },
                className: "rounded-10"
              }, F)
            }) : null
          })]
        }), D ? null : B()]
      });
    } else if (W.length > 0) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col items-end",
        children: [!!T && reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
          text: T
        }), !isEmptyUtil.isEmpty(W) && reactJsxRuntimeCoreReexport.jsx(N, {
          className: "mt-8",
          boxes: W.map((e, t) => reactJsxRuntimeCoreReexport.jsx(j, {
            ...e
          }, t))
        })]
      });
    } else if (T) {
      return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: T
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: E("chat_unsupported_message_type")
      });
    }
  };
  let F = e => {
    let {
      message: t,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(W, {
      message: t,
      ...n
    });
  };
  require.d(exports, {
    ChatMessageContent: function () {
      return F;
    }
  });
}