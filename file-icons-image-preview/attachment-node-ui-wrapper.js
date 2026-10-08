// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'AttachmentNodeComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27298.82d85863.js
         * chunkId: 27298
         * moduleId: 88463
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var urlExtensionDetectionUtils = require("url-extension-detection-utils") /*id: 12177*/;
  var messageStatusMapper = require("message-status-mapper") /*id: 308885*/;
  var statusConstants = require("status-constants") /*id: 356183*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var gitRepoUrlValidator = require("git-repo-url-validator") /*id: 904797*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var githubOctocatIconRtl = require("github-octocat-icon-rtl") /*id: 460543*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var C = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 32 32",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M16.009 5.5C10.198 5.5 5.5 10.192 5.5 15.997c0 4.64 3.01 8.568 7.185 9.958.523.105.714-.226.714-.504 0-.243-.017-1.077-.017-1.946-2.924.626-3.532-1.252-3.532-1.252-.47-1.216-1.166-1.529-1.166-1.529-.957-.643.07-.643.07-.643 1.06.07 1.618 1.078 1.618 1.078.939 1.598 2.453 1.147 3.062.869.087-.678.365-1.147.66-1.408-2.33-.244-4.784-1.147-4.784-5.18a4.1 4.1 0 0 1 1.079-2.814c-.104-.261-.47-1.339.104-2.781 0 0 .888-.278 2.888 1.077.857-.23 1.74-.346 2.628-.347.887 0 1.791.121 2.627.347 2-1.355 2.888-1.077 2.888-1.077.574 1.442.209 2.52.104 2.78.679.73 1.079 1.669 1.079 2.816 0 4.032-2.453 4.918-4.802 5.179.383.33.713.956.713 1.946 0 1.408-.017 2.538-.017 2.885 0 .278.192.609.713.504 4.176-1.39 7.186-5.318 7.186-9.958C26.517 10.192 21.802 5.5 16.009 5.5",
      clipRule: "evenodd"
    })
  }), {}));
  var colorfulFolderIconComponent = require("colorful-folder-icon-component") /*id: 58312*/;
  var q = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 32 32",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#000",
      fillOpacity: 0.55,
      d: "M5.5 10h21v12.5c0 1.105-.94 2-2.1 2H7.6c-1.16 0-2.1-.895-2.1-2zM5.5 8a2 2 0 0 1 2-2h4.775a4 4 0 0 1 1.404.255l2.642.99a4 4 0 0 0 1.404.255H24.5a2 2 0 0 1 2 2v.5h-21z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      fillOpacity: 0.35,
      d: "M5.5 8a2 2 0 0 1 2-2h4.775a4 4 0 0 1 1.404.255l2.642.99a4 4 0 0 0 1.404.255H24.5a2 2 0 0 1 2 2v.5h-21z"
    })]
  }), {}));
  var filetypeCodeIcon = require("filetype-code-icon") /*id: 72764*/;
  var rtlFileSyncIcon = require("rtl-file-sync-icon") /*id: 785320*/;
  var sendMessageRtlIcon = require("send-message-rtl-icon") /*id: 580867*/;
  let F = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("ui-tooltip-attachment") /*id: 61355*/.then(require.bind(require, "attachment-node-ui") /*id: 304762*/).then(e => {
      let {
        AttachmentNodeUI: i
      } = e;
      return {
        default: i
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  let E = e => ({
    [receiveMessageBoxStatus.messageBoxStatus.Normal]: statusConstants.statusTypes.Success,
    [receiveMessageBoxStatus.messageBoxStatus.Uploading]: statusConstants.statusTypes.Processing,
    [receiveMessageBoxStatus.messageBoxStatus.Retry]: statusConstants.statusTypes.Failed
  })[e];
  let P = e => {
    var t;
    let {
      className: r,
      type: a,
      fileName: h,
      url: b,
      imageList: j = [],
      size: $,
      status: P,
      uploadPercent: T,
      onReUpload: D,
      onReParse: O,
      onDelete: H,
      parseState: L = messagingConstants.parseState.ParseState_Default,
      parsedCharCount: A,
      parsePercent: B,
      isRepo: I,
      repoInfo: X,
      showDeleteAlways: J
    } = e;
    let V = i18nTranslationUtils.useTranslationWithFallback();
    let U = i18nextLanguageGetter.getCurrentLanguage();
    let G = a === "link";
    let K = a === "file";
    let Q = a === "directory";
    let Y = a === "lark_doc";
    let ee = K && L === messagingConstants.parseState.ParseState_Failed;
    let ei = K && messageBoxTypeCheckers.isRetryStatus(P);
    let {
      Tooltip: et = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let {
      imageEventCallbacks: {
        onImageClick: el,
        onImageRender: en
      },
      renderImagePreview: er
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      conversationId: "",
      messageId: "",
      chatType: "",
      conversationType: "",
      botId: ""
    }, j, chatCoreConstants.MessageActions.Original);
    let eo = (j == null ? undefined : (t = j[0]) === null || t === undefined ? undefined : t.image_ori?.url) || "";
    let ea = reactCoreLibraryReexport.useMemo(() => I && B === 100 ? `${X == null ? undefined : X.ref}` : Q && T === 100 && B === 100 ? V("cici_web_ai_coding_folder_desc") : Y ? V("doc_uploaded_label_feishuDocs", {
      brandName_feishu: V("brandName_feishu")
    }) : "", [I, B, Q, T]);
    let es = G && gitRepoUrlValidator.isGithubUrl(b) || I;
    let ed = es && (X == null ? undefined : X.name);
    let {
      ext: eu
    } = urlExtensionDetectionUtils.useUrlExtension(G && b ? b : "", fileTypeDetectionUtils.imageExtensions);
    return reactJsxRuntimeCoreReexport.jsx(F, {
      className: o(r, "py-8 pl-8 rounded-10"),
      ...(G ? {
        link: b ?? "",
        fileName: ed || b,
        linkExt: eu
      } : {
        fileName: h,
        fileKey: h
      }),
      viewOnly: a !== "image" && !ee && !ei,
      bytes: $,
      uploadPercent: T,
      parsePercent: B,
      isRepo: I,
      zh: !!U && i18nLanguageStorageUtils.isChineseLanguage(U),
      Tooltip: et,
      uploadStatus: G ? undefined : E(P),
      parseStatus: K || Q || I ? messageStatusMapper.getProcessStatus(L) : undefined,
      showRef: false,
      showZoom: false,
      charCount: A,
      i18nConfig: {
        label_token_count_largenumber: V("label_token_count_largenumber"),
        label_token_count_smallnumber: V("label_token_count_smallnumber"),
        skill_copliotreading_not_read: V("skill_copliotreading_not_read"),
        skill_copliotreading_partial_read: V("skill_copliotreading_partial_read"),
        skill_copliotreading_read: V("skill_copliotreading_read"),
        skill_copliotreading_read_percentage: V("skill_copliotreading_read_percentage"),
        skill_read_pic_untitled: V("skill_read_pic_untitled"),
        skill_read_parsing_file: V("skill_read_parsing_file"),
        reference_modal_reference_item_status_uploading: V("reference_modal_reference_item_status_uploading"),
        chat_list_subtitle_link: V("chat_list_subtitle_link"),
        file_upload_error: V("file_upload_error"),
        file_parse_error: V("file_parse_error"),
        files_parse_click_retry: V("files_parse_click_retry"),
        skill_copliotreading_open: V("skill_copliotreading_open"),
        skill_copliotreading_download: V("skill_copliotreading_download"),
        skill_copliotreading_open_new_tab: V("skill_copliotreading_open_new_tab")
      },
      renderIcon: e => {
        let i = {
          className: "flex items-center justify-center !text-32 shrink-0"
        };
        if (a === "image" && j[0]) {
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex h-40 w-40 shrink-0 items-center justify-center",
            children: [reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
              wrapperClassName: "rounded-4 overflow-hidden",
              onImageRender: e => {
                let {
                  src: i
                } = e;
                return i && en(i);
              },
              src: xssContentSanitizer.sanitizeUrl(eo, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTW5od1dXa3hhb%ZI%mpCT$-yeDFZM*hXT%$3elRubFpl$*xwW$ZodmR*a3lPWFJq%npsM$ds-zFNR041T1doa1N*Sm9X$EpvZEZwWE5%Qk1WMFo1$2xkRmRsa3lPWFJq%npsM$ds-zFNR041T1doa1N*Sm9X$EpvZEZwWE5%Qk1WMHAyWl$NNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
              }),
              imageOptions: {
                squareContainer: true,
                objectFit: "cover",
                draggable: false,
                width: 40,
                height: 40
              }
            }), er()]
          });
        }
        if (es) {
          if (B === 100) {
            return reactJsxRuntimeCoreReexport.jsx(githubOctocatIconRtl.GithubOctocatIcon, {
              ...i
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(C, {
              ...i
            });
          }
        }
        if (Q) {
          if (T === 100 && B === 100) {
            return reactJsxRuntimeCoreReexport.jsx(colorfulFolderIconComponent.ColorfulFolderIcon, {
              ...i
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(q, {
              ...i
            });
          }
        }
        if (codeAssistantFileValidator.getCodeFileTypes(h)) {
          if (T === 100 && B === 100) {
            return reactJsxRuntimeCoreReexport.jsx(filetypeCodeIcon.FiletypeCodeIcon, {
              ...i
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(rtlFileSyncIcon.FileSyncIcon, {
              ...i
            });
          }
        }
        if (Y) {
          return reactJsxRuntimeCoreReexport.jsx(sendMessageRtlIcon.SendMessageRtlIcon, {
            className: "flex shrink-0 items-center justify-center !text-24"
          });
        } else {
          return e;
        }
      },
      showDelete: true,
      showDeleteAlways: J || messageBoxTypeCheckers.isUploadingStatus(P),
      onClickFile: e => {
        if (a === "image") {
          if (el != null) {
            el(e, eo);
          }
        }
      },
      onClickReParse: O,
      onClickReUpload: D,
      onClickDelete: H,
      customSubTitle: ea
    });
  };
  require.d(exports, {
    AttachmentNodeComponent: function () {
      return P;
    }
  });
}