// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'renderAttachmentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 999896
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var asyncSkillSendMessageBox = require("async-skill-send-message-box") /*id: 65648*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
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
  var asyncAttachmentNodeUi = require("async-attachment-node-ui") /*id: 440766*/;
  var chatCanvasFileHandler = require("chat-canvas-file-handler") /*id: 373517*/;
  var safeFileUrlOpener = require("safe-file-url-opener") /*id: 715479*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let W = e => {
    let {
      teaCtx: t,
      enableScaleUpAction: n = true,
      viewOnly: r,
      isHitRisk: l = false,
      viewOnlyTooltip: d,
      messageId: W,
      conversationId: F,
      enableOpenCanvas: L = true
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
    let q = r || l;
    let K = !l && d;
    let Q = arxivPdfUrlChecker_1.checkArxivPdfUrl(H);
    let {
      currentChatViewConfig: Y
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      onOpenFileByLink: ee,
      onAfterOpenFile: et
    } = chatCanvasFileHandler.useCanvasFileHandler({
      enableOpenCanvas: L
    });
    let {
      chatInputRef: en
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let ei = reactCoreLibraryReexport.useMemo(() => {
      if ((!q || !K) && (B == null || !B.onOpenFileByLink) && L && Q) {
        let e = arxivUrlNormalizer.normalizeArxivUrl(H);
        return {
          pluginIdentifier: "read-preview",
          messageId: W,
          conversationId: F,
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
    }, [H, Q, q, K, B == null ? undefined : B.onOpenFileByLink, W, F, J]);
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*xZ$WpCWl-wNXZZb*RXZFdSRE9-c*pi$TEy$1RJNWRHTkhPWFZh$np$d1kzaz$hR1JJ$W1oWk1taDBXb*MxT%$4WE5-WmFSM$-y$1RJNWRHTkhPWFZh$np$d1kzaz$jMkZ-TlhKT$-wWXdaRWRH-W1*SE1Xe*libE-wWW0wNWExcFRO$EJqTTJob1kyMWtN$04z%FQwPQ"
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
      className: u(e.className, "max-w-250"),
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
    let eh = reactJsxRuntimeCoreReexport.jsx(asyncAttachmentNodeUi.AsyncAttachmentNode, {
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
            messageId: W,
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
  var documentPdfKeyHook = require("document-pdf-key-hook") /*id: 427678*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  let B = e => {
    let {
      fileName: t,
      teaCtx: n,
      enableScaleUpAction: r = true,
      viewOnly: l,
      isHitRisk: a = false,
      viewOnlyTooltip: c,
      messageId: d,
      conversationId: m,
      enableOpenCanvas: f = true
    } = e;
    let {
      Tooltip: y = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let x = skillCopliotreadingLabels.useReadingSkillLabels();
    let A = reactCoreLibraryReexport.useContext(chatCanvasFileHandler.CanvasFileHandlerContext);
    let _ = reactCoreLibraryReexport.useRef(null);
    let {
      fileKey: R
    } = e;
    let {
      showRef: T,
      showZoom: W
    } = scaleUpActionFlags.getScaleUpFlags({
      enableScaleUpAction: r
    });
    let B = reactUseChangedRef.useChangedRef(n, isEqualUtil_1.isEqual);
    let X = l || a;
    let H = !a && c;
    let U = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t || R || "")) === "PDF";
    let V = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t || "")) === "Document";
    let G = U || V;
    let {
      currentChatViewConfig: J
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      onOpenFileByKey: q,
      onAfterOpenFile: K
    } = chatCanvasFileHandler.useCanvasFileHandler({
      enableOpenCanvas: f
    });
    let {
      chatInputRef: Q
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let [Y] = documentPdfKeyHook.useDocumentPdfKey({
      fileKey: R,
      fileName: t
    });
    let ee = reactCoreLibraryReexport.useMemo(() => {
      if ((!X || !H) && G && (A == null || !A.onOpenFileByKey) && f && (V && Y || U)) {
        return {
          pluginIdentifier: "read-preview",
          messageId: d,
          conversationId: m,
          canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
          canvasContent: {
            readContent: {
              pdfId: V ? Y : R,
              realFileKey: R,
              pdfName: t,
              teaCtx: {
                ...B,
                entranceType: "click_pdf",
                collectionId: R
              },
              openFrom: "click_attachment_node"
            }
          }
        };
      }
    }, [G, A == null ? undefined : A.onOpenFileByKey, V, Y, U, R, t, B, d, m]);
    let et = reactFunctionMemoHook.useMemoizedCallback(async e => {
      var n;
      var i;
      var r;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "click_attachment_open_file",
        meta: {
          isPreRender: ee ? "1" : "0",
          isCanPreview: G ? "1" : "0",
          isOpenCanvas: (A == null ? undefined : A.onOpenFileByKey) ? "0" : "1"
        }
      });
      if (ee) {
        if ((r = _.current) !== null && r !== undefined) {
          r.open();
        }
        K({
          collectionId: R,
          messageId: d,
          entranceType: "click_pdf"
        }, {
          openFrom: "click_attachment_node"
        });
        return;
      }
      let o = R;
      let l = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(t || ""));
      if (l === "Document") {
        let e = await getDocumentPdfKey.getDocumentPdfKey(R);
        if (e) {
          o = e;
          l = "PDF";
        }
      }
      if ((q == null ? undefined : q(o, l, {
        messageId: B == null ? undefined : B.messageId,
        pdf: {
          realFileKey: R,
          fileName: t
        },
        openFrom: "click_attachment_node"
      }, {
        ...B,
        entranceType: "click_pdf",
        collectionId: R
      }, e == null ? undefined : (i = e.currentTarget) === null || i === undefined ? undefined : (n = i.getBoundingClientRect) === null || n === undefined ? undefined : n.call(i))) === false) {
        return;
      }
      let a = fileTypeDetectionUtils.isImageExtension(t || "");
      safeFileUrlOpener.openFileUrl(o, a ? "image" : "file");
    });
    let en = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (J == null ? undefined : J.chatId) {
        var t;
        let n = [];
        n = [{
          type: "attachment",
          fileKey: R,
          fileName: e.fileName || ""
        }];
        let r = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[J.chatId];
        if (r !== chatAppEnums.SkillType.CodeAssistant) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.setRefContents({
                refContents: n,
                channel: r ? `skill_${r}` : "default"
              }, J.chatId);
            }
          });
          if ((t = Q.current) !== null && t !== undefined) {
            t.focus();
          }
        }
      }
    });
    let ei = i18nextLanguageGetter.getCurrentLanguage();
    let er = {
      zh: !!ei && i18nLanguageStorageUtils.isChineseLanguage(ei),
      i18nConfig: x,
      showRef: T,
      showZoom: W,
      onClickRef: en,
      className: u(e.className, "max-w-250"),
      viewOnly: X,
      renderIcon: undefined,
      customSubTitle: undefined,
      bytes: e.bytes
    };
    let eo = reactCoreLibraryReexport.useRef(null);
    let el = reactJsxRuntimeCoreReexport.jsx(asyncAttachmentNodeUi.AsyncAttachmentNode, {
      ...e,
      ...er,
      isCanPreview: G,
      onClickFile: et,
      onClickRef: en,
      ref: eo
    });
    if (X && H) {
      return reactJsxRuntimeCoreReexport.jsx(y, {
        content: H,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "cursor-not-allowed",
          children: el
        })
      });
    } else if (ee) {
      return reactJsxRuntimeCoreReexport.jsx(chatCanvasPlugin.ChatCanvasPlugin, {
        ref: _,
        ...ee,
        children: el
      });
    } else {
      return el;
    }
  };
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var colorfulFolderIconComponent = require("colorful-folder-icon-component") /*id: 58312*/;
  var githubOctocatIconRtl = require("github-octocat-icon-rtl") /*id: 460543*/;
  var filetypeCodeIcon = require("filetype-code-icon") /*id: 72764*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  let K = e => {
    let {
      teaCtx: t,
      enableScaleUpAction: n = true,
      viewOnly: l,
      isHitRisk: a = false,
      viewOnlyTooltip: c,
      attachments: d,
      messageId: p,
      conversationId: h,
      nodeType: m,
      repoInfo: f,
      linkExt: y,
      fileName: x,
      enableOpenCanvas: A = true
    } = e;
    let {
      Tooltip: _ = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let C = skillCopliotreadingLabels.useReadingSkillLabels();
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
    let N = l || a || !A;
    let W = !a && c;
    let F = reactCoreLibraryReexport.useMemo(() => !x || !attachmentProcessingUtils.isSpreadsheetOrCsv(x), [x]);
    let {
      currentChatViewConfig: L
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      onOpenCodeFile: D
    } = chatCanvasFileHandler.useCanvasFileHandler({
      enableOpenCanvas: A
    });
    let {
      chatInputRef: z
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let B = reactCoreLibraryReexport.useMemo(() => {
      if (f) {
        return f;
      }
      if (y) {
        try {
          return JSON.parse(y);
        } catch (e) {}
      }
    }, [f, y]);
    let K = () => {
      if (L == null ? undefined : L.chatId) {
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
        let r = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[L.chatId];
        if (r !== chatAppEnums.SkillType.CodeAssistant) {
          chatStoreManager.getStore("chatInputStore").getState().updateActiveSkillTypeMap(L.chatId, chatAppEnums.SkillType.CodeAssistant, chatStatusActionTypes.chatActionTypes.Quote);
        }
        r = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[L.chatId];
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.setRefContents({
              refContents: n,
              channel: r ? `skill_${r}` : "default"
            }, L.chatId);
          }
        });
        if ((t = z.current) !== null && t !== undefined) {
          t.focus();
        }
      }
    };
    let Q = i18nextLanguageGetter.getCurrentLanguage();
    let Y = {
      zh: !!Q && i18nLanguageStorageUtils.isChineseLanguage(Q),
      i18nConfig: C,
      showRef: R,
      showZoom: T,
      onClickRef: K,
      className: u(e.className, "max-w-250"),
      viewOnly: N,
      renderIcon: () => m === "directory" ? reactJsxRuntimeCoreReexport.jsx(colorfulFolderIconComponent.ColorfulFolderIcon, {
        className: "flex items-center justify-center !text-32 shrink-0"
      }) : m === "repo" ? reactJsxRuntimeCoreReexport.jsx(githubOctocatIconRtl.GithubOctocatIcon, {
        className: "flex items-center justify-center !text-32 shrink-0"
      }) : reactJsxRuntimeCoreReexport.jsx(filetypeCodeIcon.FiletypeCodeIcon, {
        className: "flex items-center justify-center !text-32 shrink-0"
      }),
      customSubTitle: m === "directory" ? $("cici_web_ai_coding_folder_subtitle") : m === "repo" ? (B == null ? undefined : B.ref) || "main" : undefined,
      bytes: e.bytes
    };
    let ee = reactCoreLibraryReexport.useRef(null);
    let et = reactJsxRuntimeCoreReexport.jsx(asyncAttachmentNodeUi.AsyncAttachmentNode, {
      ...e,
      ...Y,
      isCanPreview: F,
      onClickFile: e => {
        var n;
        var i;
        let o = d || [];
        if (!F) {
          safeFileUrlOpener.openFileUrl(E, "file");
          return;
        }
        if ((o == null ? undefined : o.length) > 1) {
          o = [];
          for (let e of d || []) {
            let t = "file_review_state" in e && e.file_review_state || "fileNameReviewStatus" in e && e.fileNameReviewStatus;
            let n = "name" in e && e.name || "fileName" in e && e.fileName || "";
            let i = m === "codeFile" || codeAssistantFileValidator.isAssistantFile(n);
            if (t !== messagingConstants.reviewState.ReviewState_NotCompliant && i) {
              o.push(e);
            }
          }
        }
        if (D != null) {
          D({
            messageId: p || "",
            conversationId: h || "",
            fileKey: E,
            attachments: o || [],
            isCodeFile: true,
            chatId: L == null ? undefined : L.chatId,
            teaCtx: t
          }, e == null ? undefined : (i = e.currentTarget) === null || i === undefined ? undefined : (n = i.getBoundingClientRect) === null || n === undefined ? undefined : n.call(i));
        }
      },
      onClickRef: K,
      ref: ee
    });
    if (N && W) {
      return reactJsxRuntimeCoreReexport.jsx(_, {
        content: W,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "cursor-not-allowed",
          children: et
        })
      });
    } else {
      return et;
    }
  };
  var asyncSkillSendMessageBox_5 = require("async-skill-send-message-box_5") /*id: 935141*/;
  let Y = e => {
    let {
      fileName: t,
      nodeType: n,
      asrMediaType: a,
      scene: s
    } = e;
    let c = "link" in e;
    let d = chatStoreManager.useStoreSelector("chatInputStore", e => e.checkSupportSkill(chatAppEnums.SkillType.CodeAssistant));
    let u = ["directory", "codeFile", "repo"].includes(n || "") || d && !c && codeAssistantFileValidator.isAssistantFile(t);
    if (c) {
      return reactJsxRuntimeCoreReexport.jsx(W, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    } else if (u) {
      return reactJsxRuntimeCoreReexport.jsx(K, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    } else if (a === "video" || a === "audio") {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillSendMessageBox_5.renderMessageAttachment, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e,
        scene: s
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(B, {
        ...asyncSkillSendMessageBox.messageBox,
        ...e
      });
    }
  };
  require.d(exports, {
    renderAttachmentNode: function () {
      return Y;
    }
  });
}