// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'renderMessageLinkPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 354183
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var urlPreviewService = require("url-preview-service") /*id: 933085*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var attachmentNodeUi = require("attachment-node-ui") /*id: 304762*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var asyncSkillSendMessageBox_2 = require("async-skill-send-message-box_2") /*id: 19807*/;
  let x = (e, t) => e("flow_web_ext_sidebar_summarize");
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = {
    url: "",
    title: ""
  };
  let R = (e, t) => {
    if (!e) {
      return S;
    }
    if (messageContentTypeAndStatusChecker.esE(e)) {
      let l = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.browser_explain, S);
      return {
        ...safeJsonUtils.safeParse(e == null ? undefined : e.ext?.browser_explain, S),
        promptText: x(t, l)
      };
    }
    if (asyncSkillSendMessageBox_2.isSamanthaSkillType(e)) {
      let n = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.display_params, S);
      return {
        ...n,
        promptText: t(n.promptKey) || e.content_obj?.text
      };
    }
    return S;
  };
  let $ = e => {
    var t;
    let {
      message: n
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatInputRef: h
    } = chatRefsContext.useChatRefs({
      optionalProvider: true
    });
    let {
      currentChatViewConfig: k
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let {
      url: y = "",
      title: x,
      promptText: $
    } = reactCoreLibraryReexport.useMemo(() => R(n, o) || S, [n]);
    let {
      linkPreviewInfo: C
    } = chatMessageStoreFactory.createMessageStore(e => ({
      linkPreviewInfo: e.linkPreviewMap[y]
    }), deepEqualityUtil.deepEqual);
    let T = y ? (t = new URL(y).host) === null || t === undefined ? undefined : t.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "") : undefined;
    let j = x || ((C == null ? undefined : C.title) ? C.title : y);
    let N = reactCoreLibraryReexport.useRef(null);
    let [E] = useIntersectionObserver.useIntersection(N);
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        urlPreviewService.getUrlPreview(y);
      }
    }, [E]);
    let P = {
      chat_list_subtitle_link: o("chat_list_subtitle_link"),
      skill_read_quote: o("skill_read_quote"),
      skill_copliotreading_open_new_tab: o("skill_copliotreading_open_new_tab")
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex flex-col items-end gap-8",
      children: [y && reactJsxRuntimeCoreReexport.jsx(attachmentNodeUi.AttachmentNodeUI, {
        className: "max-w-250",
        customSubTitle: T,
        isCanPreview: false,
        viewOnly: false,
        fileName: j,
        link: y,
        linkExt: "",
        showRef: true,
        showZoom: true,
        tooltipProps: {
          showDetail: true
        },
        onClickLink: () => {
          if (urlParamUtils.validateUrl(y, {
            allowedProtocols: ["https:"]
          })) {
            window.open(xssContentSanitizer.sanitizeUrl(y, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHSkhiSFZoZ$R*NFp*-z$NRnB%T$dwa%1q$XdXb*MxT%$3eWJI$mFSM$kw$Ec1%2$t$khSbmxhTTFaNg"
            }));
          }
        },
        onClickRef: () => {
          if (k == null ? undefined : k.chatId) {
            var e;
            let t = chatStoreManager.getStore("chatInputStore").getState().activeSkillTypeMap[k.chatId];
            chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
              if (e != null) {
                e.setRefContents({
                  refContents: [{
                    type: "link",
                    link: y
                  }],
                  channel: t ? `skill_${t}` : "default"
                }, k.chatId);
              }
            });
            if ((e = h.current) !== null && e !== undefined) {
              e.focus();
            }
          }
        },
        ref: N,
        i18nConfig: P,
        renderIcon: (C == null ? undefined : C.icon_url) ? e => reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                        flex h-32 w-32 shrink-0 items-center justify-center
                      `,
          children: reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
            src: xssContentSanitizer.sanitizeUrl(C.icon_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHSkhiSFZoZ$R*NFp*-z$NRnB%T$dwa%1q$XdXb*MxT%$3eWJI$mFSM$kw$Ec1%2$t$khSbmxhTTFaNg"
            }),
            width: 22,
            height: 22,
            fallback: e,
            preview: false
          })
        }) : undefined
      }), reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        className: a("whitespace-break-spaces font-[400] px-9 py-12", "text-16 leading-22 sm:text-15 sm:leading-21"),
        text: $
      })]
    });
  };
  require.d(exports, {
    renderMessageLinkPreview: function () {
      return $;
    }
  });
}