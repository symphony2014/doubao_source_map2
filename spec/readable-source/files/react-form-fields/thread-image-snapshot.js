// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'useThreadSnapshot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 145918
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var html2canvasCoreRenderer = require("html2canvas-core-renderer") /*id: 275377*/;
  var a = html2canvasCoreRenderer;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatMessageTransformer = require("chat-message-transformer") /*id: 319937*/;
  var pureMessageListComponent = require("pure-message-list-component") /*id: 42720*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var isWorkspaceMode = require("is-workspace-mode") /*id: 799020*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatContextToastUtil = require("chat-context-toast-util") /*id: 559763*/;
  var aiCsuiConstants = require("ai-csui-constants") /*id: 515113*/;
  var saveThreadShareInfo = require("save-thread-share-info") /*id: 601320*/;
  let j = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatContextToastUtil.useChatToastUtil();
    let n = isWorkspaceMode.isWorkspaceMode();
    let r = reactCoreLibraryReexport.useMemo(() => n ? chatAiConstants.workspaceMode.Workspace : chatAiConstants.workspaceMode.Default, [n]);
    return async n => {
      let {
        conversationId: o,
        messageIndexList: i,
        isReverse: a,
        messageIndexEnd: s,
        isAllowSeo: l,
        enableUpdate: c = true,
        needUpdate: d,
        preShareId: u,
        shareToken: p,
        shareType: f,
        reportEvent: h = eventReportingService.createEventReporter({
          eventName: "share_thread_save_image_snapshot"
        }),
        i18nConfig: m
      } = n;
      let b = {
        preview_error_exceed_limit: e("share_preview_error_exceedlimit"),
        notification_system_error_toast: e("notification_system_error_toast"),
        ...m
      };
      try {
        let e = chatConversationSelectorUtils.getConversationThreadId(o);
        let [{
          code: t,
          data: n
        }, {
          code: m,
          data: b
        }] = await Promise.all([(await chatMessageServiceModule.getChatMessageService()).getMessageListByIndexList({
          conversation_id: o,
          message_index_list: i.slice(0, aiCsuiConstants.csuiTimeout),
          is_reverse: a
        }), c && d ? saveThreadShareInfo.saveThreadShareInfo({
          share_token: p,
          thread_id: e || "0",
          conversation_id: o,
          message_index_end: s,
          is_allow_seo: l,
          message_index_list: i,
          share_type: f,
          share_visibility: r
        }) : Promise.resolve({
          code: 0,
          data: {
            share_id: u
          }
        })]);
        h.success({
          meta: {
            code: [t, m]
          }
        });
        return {
          list: n == null ? undefined : n.message_list,
          shareId: b == null ? undefined : b.share_id
        };
      } catch (n) {
        if (apiErrorChecker.isApiError(n) && Number(n == null ? undefined : n.errorOption?.code) === chatErrorCodes.chatErrorCodes.CONVERSATION_MESSAGE_OVER_LIMIT) {
          t.error({
            content: b.preview_error_exceed_limit,
            showClose: false,
            theme: "light"
          });
          h.success({
            meta: {
              code: chatErrorCodes.chatErrorCodes.CONVERSATION_MESSAGE_OVER_LIMIT
            }
          });
          return;
        }
        if (apiErrorChecker.isApiError(n) && Number(n == null ? undefined : n.errorOption?.code) === chatErrorCodes.chatErrorCodes.SECURITY_RESOURCE_REJECTED) {
          t.error({
            content: e("share_compliance_failed"),
            showClose: false,
            theme: "light"
          });
          h.success({
            meta: {
              code: chatErrorCodes.chatErrorCodes.SECURITY_RESOURCE_REJECTED
            }
          });
          return;
        }
        t.error({
          content: b.notification_system_error_toast,
          showClose: false,
          theme: "light"
        });
        h.error({
          reason: "SaveImageSnapshot failed",
          error: n
        });
        throw n;
      }
    };
  };
  var qrcodeWithBrandingComponent = require("qrcode-with-branding-component") /*id: 999730*/;
  var threadShareHeader = require("thread-share-header") /*id: 550159*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let N = "SHARE_IMAGE_CANVAS";
  let R = () => {
    var e;
    let t = document.createElement("style");
    document.head.appendChild(t);
    if ((e = t.sheet) !== null && e !== undefined) {
      e.insertRule("body > div:last-child img { display: inline-block; }");
    }
    return function () {
      t.remove();
    };
  };
  let O = e => {
    try {
      e.classList.add(N);
      e.style.position = "fixed";
      e.style.top = "0px";
      e.style.left = "-1000px";
      document.body.appendChild(e);
    } catch (e) {
      if (e instanceof Error) {
        loggerServiceCore.defaultLogger.console.error({
          message: "appendCanvasDomToBody failed",
          error: e
        });
      }
    }
  };
  let I = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      title: r,
      list: o,
      url: i,
      showHeader: a = true,
      showQRCode: s = true,
      ignoreTrackEvent: c
    } = e;
    let d = Date.now();
    let f = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l("image-snapshot fixed inset-0 top-[100vh] overflow-auto hidden w-560 max-w-[100vw] px-38 pt-32 pb-0 bg-s-color-bg-content-base shrink-0 min-h-max max-h-max bg-[var(--s-color-bg-content-base)]", n),
      ref: t,
      children: [a && reactJsxRuntimeCoreReexport.jsx(threadShareHeader.ThreadShareHeader, {
        title: r,
        t: f,
        createTime: d,
        className: "mb-28"
      }), reactJsxRuntimeCoreReexport.jsx(pureMessageListComponent.PureMessageList, {
        message_list: o,
        noMore: true,
        themeContextedVal: {
          searchDefaultExpand: false,
          ignoreTrackEvent: c
        },
        overrideChatContext: {}
      }), reactJsxRuntimeCoreReexport.jsx(qrcodeWithBrandingComponent.QrCodeWithBranding, {
        showQRCode: s,
        url: i
      })]
    });
  });
  let $ = e => !!e.shadowRoot && e.tagName.toLowerCase() !== aiCsuiConstants.doubaoAiCsuiId && e.tagName.toLowerCase() !== aiCsuiConstants.ciciAiCsuiId;
  let Z = async e => {
    await promiseDelayUtil.delayPromise(500);
    let t = null;
    try {
      let n = 0;
      await new Promise(r => {
        n = window.setTimeout(r, 300);
        (t = new MutationObserver(() => {
          clearTimeout(n);
          n = window.setTimeout(r, 300);
        })).observe(e, {
          childList: true,
          subtree: true,
          characterData: true
        });
      });
    } catch {} finally {
      if (t) {
        t.disconnect();
      }
    }
    if (e.querySelector(".search-result-collapse")) {
      await promiseDelayUtil.delayPromise(600);
    }
  };
  let M = e => {
    e.querySelectorAll("[srcset]").forEach(e => {
      e.srcset = "";
    });
  };
  let P = e => {
    let {
      conversationId: t,
      messageIndexList: n,
      title: i,
      messageIndexEnd: s,
      snapshotClassName: l,
      showHeader: u,
      showQRCode: p,
      i18nConfig: f,
      downloadFileName: m,
      ignoreTrackEvent: v
    } = e;
    let g = reactCoreLibraryReexport.useRef(null);
    let [b, y] = reactCoreLibraryReexport.useState(false);
    let [_, x] = reactCoreLibraryReexport.useState([]);
    let [w, E] = reactCoreLibraryReexport.useState("");
    let C = j();
    reactCoreLibraryReexport.useEffect(() => () => {
      document.querySelectorAll(`.${N}`).forEach(e => {
        document.body.removeChild(e);
      });
    }, []);
    let S = async () => {
      let e = document.querySelector(`.${N}`);
      if (e) {
        return e;
      }
      let t = g.current;
      if (!t) {
        return null;
      }
      t.style.display = "block";
      await Z(t);
      t.style.height = `${t.scrollHeight}px`;
      M(t);
      let n = R();
      try {
        let e = await a(t, {
          useCORS: true,
          ignoreElements: $
        });
        n();
        O(e);
        return e;
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "html2canvas failed",
          error: e
        });
        return null;
      }
    };
    let P = async () => {
      let e = await S();
      if (e) {
        let t = document.createElement("a");
        t.href = xssContentSanitizer.sanitizeUrl(e.toDataURL("image/png").replace("image/png", "image/octet-stream"), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpKb2FHTnRWWFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1SS*FIb*FWMFpy$EZoT2IxbFlTbXhN$0ZKMllqSjRh$mxZ%1haaFJ6bDJZ$E5OZ*1SW$RteE1WMD$vWTBo%01XTnRWWFZr%0%0MFdWaEtib$JZ$FQwPQ"
        });
        t.download = m ?? "snapshot.png";
        t.click();
      }
    };
    let F = async e => {
      let {
        needUpdate: r,
        preShareId: o,
        shareToken: i,
        shareType: a,
        enableUpdate: l,
        saveAction: u = "download",
        reportEvent: p,
        onShareIdReady: m,
        origin: v
      } = e;
      y(true);
      try {
        let {
          list: e,
          shareId: h
        } = (await C({
          conversationId: t,
          messageIndexList: n,
          isReverse: false,
          messageIndexEnd: s,
          isAllowSeo: false,
          enableUpdate: l,
          needUpdate: r,
          preShareId: o,
          shareToken: i,
          shareType: a,
          i18nConfig: f,
          reportEvent: p
        })) || {};
        let g = await Promise.all((e || []).map(async e => ({
          ...(await chatMessageTransformer.transformMessage(e, {
            conversation_type: chatCoreConstants.BotTypes.CocoWebSub
          })),
          is_delta: false
        })));
        x(g);
        E(h ? `${v || location.origin}/thread/${h}` : "");
        if (m != null) {
          m(h || "");
        }
        if (u === "download") {
          await P();
        } else if (u === "canvas") {
          return await S();
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "error when captureAsImage",
          error: e
        });
      } finally {
        y(false);
      }
    };
    return {
      imageSnapshot: reactJsxRuntimeCoreReexport.jsx(I, {
        ref: g,
        className: l,
        title: i,
        list: _ == null ? undefined : _.slice(0, aiCsuiConstants.csuiTimeout),
        url: w,
        showHeader: u,
        showQRCode: p,
        ignoreTrackEvent: v
      }),
      list: _,
      shareUrl: w,
      loading: b,
      captureAsImage: F
    };
  };
  require.d(exports, {
    useThreadSnapshot: function () {
      return P;
    }
  });
}