// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'MessageAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 779448
         */
module.exports = function (module, exports, require) {
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncSkillSendMessageBox = require("async-skill-send-message-box") /*id: 65648*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var p = classnamesUtils;
  var chatCanvasPlugin = require("chat-canvas-plugin") /*id: 533520*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var urlPreviewService = require("url-preview-service") /*id: 933085*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  var urlValidator = require("url-validator") /*id: 714614*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var isEqualUtil_1 = require("is-equal-util_1") /*id: 999658*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillCopliotreadingLabels = require("skill-copliotreading-labels") /*id: 932866*/;
  var scaleUpActionFlags = require("scale-up-action-flags") /*id: 143434*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let W = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("attachment-progress-ui") /*id: 27145*/.then(require.bind(require, "chat-attachment-node-ui") /*id: 866890*/).then(e => {
      let {
        AttachmentNodeUI: t
      } = e;
      return {
        default: t
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  var chatCanvasFileHandler = require("chat-canvas-file-handler") /*id: 373517*/;
  var safeFileUrlOpener = require("safe-file-url-opener") /*id: 715479*/;
  let D = e => {
    let {
      teaCtx: t,
      enableScaleUpAction: n = true,
      viewOnly: i,
      isHitRisk: o = false,
      viewOnlyTooltip: a,
      messageId: u,
      conversationId: O,
      enableOpenCanvas: P = true
    } = e;
    let {
      Tooltip: D = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let z = skillCopliotreadingLabels.useReadingSkillLabels();
    let B = reactCoreLibraryReexport.useContext(chatCanvasFileHandler.CanvasFileHandlerContext);
    let X = reactCoreLibraryReexport.useRef(null);
    let {
      link: H
    } = e;
    let {
      ext: U
    } = urlExtensionDetectionUtils.useUrlExtension(H, fileTypeDetectionUtils.imageExtensions);
    let {
      showRef: V,
      showZoom: G
    } = scaleUpActionFlags.getScaleUpFlags({
      enableScaleUpAction: n
    });
    let J = reactUseChangedRef.useChangedRef(t, isEqualUtil_1.isEqual);
    let q = i || o;
    let K = !o && a;
    let Q = arxivPdfUrlChecker_1.checkArxivPdfUrl(H);
    let {
      currentChatViewConfig: Y
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      onOpenFileByLink: ee,
      onAfterOpenFile: et
    } = chatCanvasFileHandler.useCanvasFileHandler({
      enableOpenCanvas: P
    });
    let {
      chatInputRef: en
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let ei = reactCoreLibraryReexport.useMemo(() => {
      if ((!q || !K) && (B == null || !B.onOpenFileByLink) && P && Q) {
        let e = arxivUrlNormalizer.normalizeArxivUrl(H);
        return {
          pluginIdentifier: "read-preview",
          messageId: u,
          conversationId: O,
          canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
          canvasContent: {
            readContent: {
              pdfUrl: e,
              pdfName: e,
              realFileKey: e,
              teaCtx: {
                ...J,
                entranceType: "click_pdf",
                collectionId: H
              },
              openFrom: "click_attachment_node"
            }
          }
        };
      }
    }, [H, Q, q, K, B == null ? undefined : B.onOpenFileByLink, u, O, J]);
    let er = () => {
      if (Y == null ? undefined : Y.chatId) {
        var e;
        let t = [];
        t = [{
          type: "link",
          link: H
        }];
        let n = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[Y.chatId];
        if (n !== chatAppEnums.SkillType.CodeAssistant) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.setRefContents({
                refContents: t,
                channel: n ? `skill_${n}` : "default"
              }, Y.chatId);
            }
          });
          if ((e = en.current) !== null && e !== undefined) {
            e.focus();
          }
        }
      }
    };
    let {
      linkPreviewInfo: eo
    } = chatMessageStoreFactory.createMessageStore(e => ({
      linkPreviewInfo: e.linkPreviewMap[H]
    }), deepEqualityUtil.deepEqual);
    let {
      linkTitle: el,
      linkSubTitle: ea,
      linkIconComp: es
    } = reactCoreLibraryReexport.useMemo(() => {
      if (eo) {
        var e;
        let {
          title: t,
          type: n,
          icon_url: i
        } = eo;
        let r = t && n === "web" ? (e = new URL(H).host) === null || e === undefined ? undefined : e.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "") : undefined;
        return {
          linkTitle: t,
          linkSubTitle: r,
          linkIconComp: i && (eo == null ? undefined : eo.type) === "web" ? e => reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
                    flex h-32 w-32 shrink-0 items-center justify-center
                  `,
            children: reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              src: xssContentSanitizer.sanitizeUrl(i, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*xZ$WpCWl-wNXZZb*RXZFdSRE9-c*pi$TEy$1RJNWRHTkhPWFZh$np$d1kzaz$hR1JJ$W1oWk1taDBXb*MxT%$4WE5-WmFSM$-y$1RJNWRHTkhPWFZh$np$d1kzaz$jMkZ-TlhKT$-wWXdaRWRH-W1*SE1Xe*libE-wWW0wNWExcFRN$EpO-$R$d1l6Tm9hR050WkR*amR6MDk"
              }),
              width: 22,
              height: 22,
              fallback: e,
              preview: false
            })
          }) : undefined
        };
      }
      return {};
    }, [H, eo]);
    let ec = i18nextLanguageGetter.getCurrentLanguage();
    let ed = {
      zh: !!ec && i18nLanguageStorageUtils.isChineseLanguage(ec),
      i18nConfig: z,
      showRef: V,
      showZoom: G,
      onClickRef: er,
      className: p(e.className, "max-w-250"),
      viewOnly: q,
      renderIcon: es,
      customSubTitle: ea,
      bytes: e.bytes,
      fileName: el || e.fileName
    };
    let eu = reactCoreLibraryReexport.useRef(null);
    let [ep] = useIntersectionObserver.useIntersection(eu);
    reactCoreLibraryReexport.useEffect(() => {
      if (ep && urlValidator.isValidUrl(H)) {
        urlPreviewService.getUrlPreview(H);
      }
    }, [ep]);
    let eh = reactJsxRuntimeCoreReexport.jsx(W, {
      ...e,
      ...ed,
      linkExt: U,
      isCanPreview: Q,
      onClickLink: e => {
        var t;
        var n;
        var i;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "click_attachment_open_link",
          meta: {
            isPreRender: ei ? "1" : "0",
            isCanPreview: Q ? "1" : "0",
            isOpenCanvas: (B == null ? undefined : B.onOpenFileByLink) ? "0" : "1"
          }
        });
        if (ei) {
          if ((i = X.current) !== null && i !== undefined) {
            i.open();
          }
          et({
            collectionId: H,
            messageId: u,
            entranceType: "click_pdf"
          }, {
            openFrom: "click_attachment_node"
          });
          return;
        }
        if ((ee == null ? undefined : ee(H, {
          attchmentType: Q ? "pdf" : "unknown",
          messageId: J == null ? undefined : J.messageId,
          openFrom: "click_attachment_node"
        }, {
          ...J,
          entranceType: "click_pdf",
          collectionId: H
        }, e == null ? undefined : (n = e.currentTarget) === null || n === undefined ? undefined : (t = n.getBoundingClientRect) === null || t === undefined ? undefined : t.call(n))) !== false) {
          safeFileUrlOpener.openSafeUrl(H);
        }
      },
      onClickRef: er,
      ref: eu
    });
    if (q && K) {
      return reactJsxRuntimeCoreReexport.jsx(D, {
        content: K,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "cursor-not-allowed",
          children: eh
        })
      });
    } else if (ei) {
      return reactJsxRuntimeCoreReexport.jsx(chatCanvasPlugin.ChatCanvasPlugin, {
        ref: X,
        ...ei,
        children: eh
      });
    } else {
      return eh;
    }
  };
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var sendMessageRtlIcon = require("send-message-rtl-icon") /*id: 580867*/;
  let X = e => {
    let {
      teaCtx: t,
      viewOnly: n,
      viewOnlyTooltip: i,
      larkDoc: o
    } = e;
    let a = skillCopliotreadingLabels.useReadingSkillLabels();
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let {
      currentChatViewConfig: d
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      chatInputRef: u
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let h = () => {
      if (d == null ? undefined : d.chatId) {
        var e;
        let t = [];
        t = [{
          type: "lark_doc",
          larkDoc: o
        }];
        let n = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[d.chatId];
        if (n !== chatAppEnums.SkillType.CodeAssistant) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.setRefContents({
                refContents: t,
                channel: n ? `skill_${n}` : "default"
              }, d.chatId);
            }
          });
          if ((e = u.current) !== null && e !== undefined) {
            e.focus();
          }
        }
      }
    };
    let m = i18nextLanguageGetter.getCurrentLanguage();
    let f = {
      zh: !!m && i18nLanguageStorageUtils.isChineseLanguage(m),
      i18nConfig: a,
      showRef: true,
      onClickRef: h,
      className: p(e.className, "max-w-250"),
      viewOnly: false,
      renderIcon: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex h-32 w-32 shrink-0 items-center justify-center",
        children: reactJsxRuntimeCoreReexport.jsx(sendMessageRtlIcon.SendMessageRtlIcon, {
          className: "!text-24"
        })
      }),
      customSubTitle: c("doc_uploaded_label_feishuDocs", {
        brandName_feishu: c("brandName_feishu")
      }),
      fileName: e.fileName
    };
    return reactJsxRuntimeCoreReexport.jsx(W, {
      ...e,
      ...f,
      onClickFile: () => {
        if (o == null ? undefined : o.url) {
          window.open(xssContentSanitizer.sanitizeUrl(o.url, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*xZ$WpCWl-wNXZZb*RXZFdSRE9-c*pi$TEy$1RJNWRHTkhPWFZh$np$d1kzaz$hR1JJ$W1oWk1taDBXb*MxT%$4WE5-WmFSM$-y$1RJNWRHTkhPWFZh$np$d1kzaz$jMWxZ%25KT$-xSjJXW*t4-%dSS$$taFpNbWgw$2xjM%1FeFhOWFph%jFWMFpHcEpk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
          }));
        }
      },
      onClickRef: h
    });
  };
  var documentPdfKeyHook = require("document-pdf-key-hook") /*id: 427678*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  let q = e => {
    let {
      fileName: t,
      teaCtx: n,
      enableScaleUpAction: i = true,
      viewOnly: o,
      isHitRisk: a = false,
      viewOnlyTooltip: s,
      messageId: d,
      conversationId: u,
      enableOpenCanvas: f = true
    } = e;
    let g = skillCopliotreadingLabels.useReadingSkillLabels();
    let b = reactCoreLibraryReexport.useContext(chatCanvasFileHandler.CanvasFileHandlerContext);
    let y = reactCoreLibraryReexport.useRef(null);
    let {
      fileKey: x
    } = e;
    let {
      showRef: w,
      showZoom: _
    } = scaleUpActionFlags.getScaleUpFlags({
      enableScaleUpAction: i
    });
    let k = reactUseChangedRef.useChangedRef(n, isEqualUtil_1.isEqual);
    let T = o || a;
    let N = !a && s;
    let O = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t || x || "")) === "PDF";
    let P = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t || "")) === "Document";
    let D = O || P;
    let {
      currentChatViewConfig: z
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      onOpenFileByKey: B,
      onAfterOpenFile: X
    } = chatCanvasFileHandler.useCanvasFileHandler({
      enableOpenCanvas: f
    });
    let {
      chatInputRef: q
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let [K] = documentPdfKeyHook.useDocumentPdfKey({
      fileKey: x,
      fileName: t
    });
    let Q = reactCoreLibraryReexport.useMemo(() => {
      if ((!T || !N) && D && (b == null || !b.onOpenFileByKey) && f && (P && K || O)) {
        return {
          pluginIdentifier: "read-preview",
          messageId: d,
          conversationId: u,
          canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
          canvasContent: {
            readContent: {
              pdfId: P ? K : x,
              realFileKey: x,
              pdfName: t,
              teaCtx: {
                ...k,
                entranceType: "click_pdf",
                collectionId: x
              },
              openFrom: "click_attachment_node"
            }
          }
        };
      }
    }, [D, b == null ? undefined : b.onOpenFileByKey, P, K, O, x, t, k, d, u]);
    let Y = reactFunctionMemoHook.useMemoizedCallback(async e => {
      var n;
      var i;
      var r;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "click_attachment_open_file",
        meta: {
          isPreRender: Q ? "1" : "0",
          isCanPreview: D ? "1" : "0",
          isOpenCanvas: (b == null ? undefined : b.onOpenFileByKey) ? "0" : "1"
        }
      });
      if (Q) {
        if ((r = y.current) !== null && r !== undefined) {
          r.open();
        }
        X({
          collectionId: x,
          messageId: d,
          entranceType: "click_pdf"
        }, {
          openFrom: "click_attachment_node"
        });
        return;
      }
      let o = x;
      let l = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t || ""));
      if (l === "Document") {
        let e = await getDocumentPdfKey.getDocumentPdfKey(x);
        if (e) {
          o = e;
          l = "PDF";
        }
      }
      if ((B == null ? undefined : B(o, l, {
        messageId: k == null ? undefined : k.messageId,
        pdf: {
          realFileKey: x,
          fileName: t
        },
        openFrom: "click_attachment_node"
      }, {
        ...k,
        entranceType: "click_pdf",
        collectionId: x
      }, e == null ? undefined : (i = e.currentTarget) === null || i === undefined ? undefined : (n = i.getBoundingClientRect) === null || n === undefined ? undefined : n.call(i))) === false) {
        return;
      }
      let a = fileTypeDetectionUtils.isImageExtension(t || "");
      safeFileUrlOpener.openFileUrl(o, a ? "image" : "file");
    });
    let ee = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (z == null ? undefined : z.chatId) {
        var t;
        let n = [];
        n = [{
          type: "attachment",
          fileKey: x,
          fileName: e.fileName || ""
        }];
        let i = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[z.chatId];
        if (i !== chatAppEnums.SkillType.CodeAssistant) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.setRefContents({
                refContents: n,
                channel: i ? `skill_${i}` : "default"
              }, z.chatId);
            }
          });
          if ((t = q.current) !== null && t !== undefined) {
            t.focus();
          }
        }
      }
    });
    let et = i18nextLanguageGetter.getCurrentLanguage();
    let en = {
      zh: !!et && i18nLanguageStorageUtils.isChineseLanguage(et),
      i18nConfig: g,
      showRef: w,
      showZoom: _,
      onClickRef: ee,
      className: p(e.className, "max-w-250"),
      viewOnly: T,
      renderIcon: undefined,
      customSubTitle: undefined,
      bytes: e.bytes
    };
    let ei = reactCoreLibraryReexport.useRef(null);
    let er = reactJsxRuntimeCoreReexport.jsx(W, {
      ...e,
      ...en,
      isCanPreview: D,
      onClickFile: Y,
      onClickRef: ee,
      ref: ei
    });
    if (T && N) {
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        content: N,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "cursor-not-allowed",
          children: er
        })
      });
    } else if (Q) {
      return reactJsxRuntimeCoreReexport.jsx(chatCanvasPlugin.ChatCanvasPlugin, {
        ref: y,
        ...Q,
        children: er
      });
    } else {
      return er;
    }
  };
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var colorfulFolderIconComponent = require("colorful-folder-icon-component") /*id: 58312*/;
  var githubOctocatIconRtl = require("github-octocat-icon-rtl") /*id: 460543*/;
  var filetypeCodeIcon = require("filetype-code-icon") /*id: 72764*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  let ei = e => {
    let {
      teaCtx: t,
      enableScaleUpAction: n = true,
      viewOnly: i,
      isHitRisk: a = false,
      viewOnlyTooltip: s,
      attachments: d,
      messageId: u,
      conversationId: h,
      nodeType: m,
      repoInfo: f,
      linkExt: g,
      fileName: x,
      enableOpenCanvas: w = true
    } = e;
    let {
      Tooltip: _ = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let k = skillCopliotreadingLabels.useReadingSkillLabels();
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let {
      fileKey: E
    } = e;
    let {
      showRef: R,
      showZoom: T
    } = scaleUpActionFlags.getScaleUpFlags({
      enableScaleUpAction: n
    });
    let N = i || a || !w;
    let j = !a && s;
    let O = reactCoreLibraryReexport.useMemo(() => !x || !attachmentProcessingUtils.isSpreadsheetOrCsv(x), [x]);
    let {
      currentChatViewConfig: P
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      onOpenCodeFile: D
    } = chatCanvasFileHandler.useCanvasFileHandler({
      enableOpenCanvas: w
    });
    let {
      chatInputRef: B
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let X = reactCoreLibraryReexport.useMemo(() => {
      if (f) {
        return f;
      }
      if (g) {
        try {
          return JSON.parse(g);
        } catch (e) {}
      }
    }, [f, g]);
    let H = () => {
      if (P == null ? undefined : P.chatId) {
        var t;
        let n = [];
        n = m === "directory" ? [{
          type: "directory",
          fileKey: E,
          identifier: E,
          fileName: e.fileName || ""
        }] : m === "repo" ? [{
          type: "link",
          link: e.fileName || "",
          identifier: E,
          fileName: e.fileName || ""
        }] : [{
          type: "attachment",
          fileKey: E,
          fileName: e.fileName || ""
        }];
        let i = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[P.chatId];
        if (i !== chatAppEnums.SkillType.CodeAssistant) {
          chatStoreManager.getStore("chatInputStore").getState().updateActiveSkillTypeMap(P.chatId, chatAppEnums.SkillType.CodeAssistant, chatStatusActionTypes.chatActionTypes.Quote);
        }
        i = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[P.chatId];
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.setRefContents({
              refContents: n,
              channel: i ? `skill_${i}` : "default"
            }, P.chatId);
          }
        });
        if ((t = B.current) !== null && t !== undefined) {
          t.focus();
        }
      }
    };
    let U = i18nextLanguageGetter.getCurrentLanguage();
    let V = {
      zh: !!U && i18nLanguageStorageUtils.isChineseLanguage(U),
      i18nConfig: k,
      showRef: R,
      showZoom: T,
      onClickRef: H,
      className: p(e.className, "max-w-250"),
      viewOnly: N,
      renderIcon: () => m === "directory" ? reactJsxRuntimeCoreReexport.jsx(colorfulFolderIconComponent.ColorfulFolderIcon, {
        className: "flex items-center justify-center !text-32 shrink-0"
      }) : m === "repo" ? reactJsxRuntimeCoreReexport.jsx(githubOctocatIconRtl.GithubOctocatIcon, {
        className: "flex items-center justify-center !text-32 shrink-0"
      }) : reactJsxRuntimeCoreReexport.jsx(filetypeCodeIcon.FiletypeCodeIcon, {
        className: "flex items-center justify-center !text-32 shrink-0"
      }),
      customSubTitle: m === "directory" ? $("cici_web_ai_coding_folder_subtitle") : m === "repo" ? (X == null ? undefined : X.ref) || "main" : undefined,
      bytes: e.bytes
    };
    let G = reactCoreLibraryReexport.useRef(null);
    let J = reactJsxRuntimeCoreReexport.jsx(W, {
      ...e,
      ...V,
      isCanPreview: O,
      onClickFile: e => {
        var n;
        var i;
        let r = d || [];
        if (!O) {
          safeFileUrlOpener.openFileUrl(E, "file");
          return;
        }
        if ((r == null ? undefined : r.length) > 1) {
          r = [];
          for (let e of d || []) {
            let t = "file_review_state" in e && e.file_review_state || "fileNameReviewStatus" in e && e.fileNameReviewStatus;
            let n = "name" in e && e.name || "fileName" in e && e.fileName || "";
            let i = m === "codeFile" || codeAssistantFileValidator.isAssistantFile(n);
            if (t !== messagingConstants.reviewState.ReviewState_NotCompliant && i) {
              r.push(e);
            }
          }
        }
        if (D != null) {
          D({
            messageId: u || "",
            conversationId: h || "",
            fileKey: E,
            attachments: r || [],
            isCodeFile: true,
            chatId: P == null ? undefined : P.chatId,
            teaCtx: t
          }, e == null ? undefined : (i = e.currentTarget) === null || i === undefined ? undefined : (n = i.getBoundingClientRect) === null || n === undefined ? undefined : n.call(i));
        }
      },
      onClickRef: H,
      ref: G
    });
    if (N && j) {
      return reactJsxRuntimeCoreReexport.jsx(_, {
        content: j,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "cursor-not-allowed",
          children: J
        })
      });
    } else {
      return J;
    }
  };
  var asyncSkillSendMessageBox_5 = require("async-skill-send-message-box_5") /*id: 935141*/;
  let eo = e => {
    let {
      fileName: t,
      nodeType: n,
      asrMediaType: s,
      scene: c,
      fileType: d
    } = e;
    let u = "link" in e;
    let p = chatStoreManager.useStoreSelector("chatInputStore", e => e.checkSupportSkill(chatAppEnums.SkillType.CodeAssistant));
    let h = ["directory", "codeFile", "repo"].includes(n || "") || p && !u && codeAssistantFileValidator.isAssistantFile(t);
    let m = d === contentTypeEnums.resourceType.LarkDoc;
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(D, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    } else if (h) {
      return reactJsxRuntimeCoreReexport.jsx(ei, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    } else if (s === "video" || s === "audio") {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillSendMessageBox_5.renderMessageAttachment, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e,
        scene: c
      });
    } else if (m) {
      return reactJsxRuntimeCoreReexport.jsx(X, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(q, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    }
  };
  require.d(exports, {
    MessageAttachment: function () {
      return eo;
    }
  });
}