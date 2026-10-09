// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'skillGuidanceSuggestionsList'
// - Resolved require(213126) to 'skill-guidance-suggestions-list'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'd' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'p' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'm' to 'lazyFileIconLoader'
// - Resolved require(525556) to 'lazy-file-icon-loader'
// - Renamed variable 'v' to 'readPdfSkillGuidanceHandler'
// - Resolved require(915414) to 'read-pdf-skill-guidance-handler'
// - Renamed variable 'f' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'g' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'y' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'k' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'w' to 'pdfPreviewFetchService'
// - Resolved require(736066) to 'pdf-preview-fetch-service'
// - Renamed variable 'b' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'x' to 'arxivUrlNormalizer'
// - Resolved require(461857) to 'arxiv-url-normalizer'
// - Renamed variable 'S' to 'useIntersectionObserver'
// - Resolved require(774639) to 'use-intersection-observer'
// - Renamed variable 'C' to 'asyncSkillDeepChangeCb'
// - Resolved require(29951) to 'async-skill-deep-change-cb'
// - Renamed variable 'T' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'N' to 'arrayUniqByMatcher'
// - Resolved require(898750) to 'array-uniq-by-matcher'
// - Renamed variable 'E' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'A' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'M' to 'chatConversationProcessor'
// - Resolved require(118650) to 'chat-conversation-processor'
// - Renamed variable 'I' to 'useAiReaderSkillPack'
// - Resolved require(806870) to 'use-ai-reader-skill-pack'
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'Z' to 'useIntersection' (module 774639)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'P' to 'normalizeArxivUrl' (module 461857)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'p' to 'fetchPdfPreview' (module 736066)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'Z' to 'createDeepChangeCallback' (module 29951)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'W' to 'useAiReaderSkill' (module 806870)
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'Z' to 'uniqByMatcher' (module 898750)
// - Updated imported property 'o' to 'dateComparator' (module 118650)
// - Updated imported property 'd' to 'handleReadPdfGuidanceClick' (module 915414)
// - Updated imported property 'aA' to 'FileIcon' (module 525556)
// - Updated imported property 'l' to 'SkillGuidanceList' (module 213126)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 847064
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var skillGuidanceSuggestionsList = require("skill-guidance-suggestions-list") /*id: 213126*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  (r = {}).Example = "example";
  r.LatestReading = "latest_reading";
  let _ = r;
  var readPdfSkillGuidanceHandler = require("read-pdf-skill-guidance-handler") /*id: 915414*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  let h = () => {
    let e = useNavigateRuntimeResolver.useNavigateResolver();
    return {
      handleClickLatestReading: t => {
        let {
          template: i,
          trackParams: r
        } = t;
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
          content_detail: i.prompt,
          ...r
        });
        let {
          prompt: n,
          assets: l,
          conversationId: a
        } = i;
        let o = l[0];
        let s = {
          pluginId: aiActionConstants.aiActionConstants.ReadPDF_LatestReading,
          payload: {
            prompt: n,
            asset: o,
            conversationId: a,
            needSendMessage: true
          }
        };
        e(`/chat/${a}?action=${encodeURIComponent(JSON.stringify(s))}`);
      }
    };
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var pdfPreviewFetchService = require("pdf-preview-fetch-service") /*id: 736066*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var asyncSkillDeepChangeCb = require("async-skill-deep-change-cb") /*id: 29951*/;
  function P(e, t) {
    return e.some(e => !e.cover) && t === "card";
  }
  let j = e => {
    let {
      assets: t,
      type: i = "card"
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let [l] = useIntersectionObserver.useIntersection(r);
    let [a, o] = reactCoreLibraryReexport.useState(P(t ?? [], i));
    let {
      pdfPreviewCovers: s
    } = chatMessageStoreFactory.createMessageStore(e => ({
      pdfPreviewCovers: t == null ? undefined : t.map(t => {
        if ("fileKey" in t) {
          return e.pdfPreviewMap[t.fileKey]?.imageUrl;
        } else {
          return e.pdfPreviewMap[arxivUrlNormalizer.normalizeArxivUrl(t.link)]?.imageUrl;
        }
      })
    }), deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      if (l) {
        let e = t == null ? undefined : t.map(e => {
          if (!e.cover && i === "card") {
            if ("fileKey" in e) {
              return pdfPreviewFetchService.fetchPdfPreview(e.fileKey, {
                fileType: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.fileName))
              });
            } else {
              return pdfPreviewFetchService.fetchPdfPreview(arxivUrlNormalizer.normalizeArxivUrl(e.link));
            }
          }
        });
        if (e == null ? undefined : e.some(e => e)) {
          Promise.all(e).finally(() => {
            o(false);
          });
        }
      }
    }, [l, i, t]);
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      o(P(t ?? [], i));
    }, [t]);
    return {
      ref: r,
      pdfPreviewLoading: a,
      pdfPreviewCovers: s
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let R = e => {
    let {
      assets: t,
      className: i
    } = e;
    let {
      ref: r,
      pdfPreviewLoading: n,
      pdfPreviewCovers: a
    } = j({
      assets: t
    });
    let s = !isEmptyUtil.isEmpty(t) && !n;
    let c = t == null ? undefined : t[0];
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: r,
      className: o("flex items-start justify-center h-[97px] max-h-[97px] overflow-hidden mx-12", i),
      children: s ? reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl((c == null ? undefined : c.cover) || (a == null ? undefined : a[0]) || "", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTIx$2F*cERPWHBq-l%xMldXMXNOa3h-$*5aa$dFSjJZbTFXZFdSRE9-b*FWMFpy$EZka01XRlh$bWhp-l%1c1R*aE9N$m95Wkd4ak0xSndZakkxZWt3elRqRmFNb$JzWXpO%2NHSXlOSFJaTWpre$dsaEpk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
        }),
        alt: "",
        style: {
          maxWidth: 188
        },
        className: "rounded-2 w-full"
      }) : null
    });
  };
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatConversationProcessor = require("chat-conversation-processor") /*id: 118650*/;
  var useAiReaderSkillPack = require("use-ai-reader-skill-pack") /*id: 806870*/;
  let W = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = useAiReaderSkillPack.useAiReaderSkill();
    let i = chatFgStoreHooks.getSourceValue("read_guidance_use_latest_reading", {
      defaultValue: false,
      source: chatStorageKeys.chatStorageKeys.tea
    });
    let r = t => t.assets.map(i => ({
      type: _.LatestReading,
      title: i.title || "",
      prompt: i.prompt || e("read_sug_prompt_generate_summary"),
      assets: [i],
      date: i.date,
      conversationId: t.conversationId
    }));
    let a = e => ({
      type: _.Example,
      ...e
    });
    return {
      templates: reactCoreLibraryReexport.useMemo(() => {
        let e = [];
        if (i && t.latestReadingList) {
          let i = arrayUniqByMatcher.uniqByMatcher(t.latestReadingList.flatMap(r).filter(e => !isEmptyUtil.isEmpty(e.assets)).sort(chatConversationProcessor.dateComparator), "title");
          e.push(...i.slice(0, 3));
        }
        if (e.length < 3 && t.exampleList) {
          e.push(...t.exampleList.map(a).filter(e => !isEmptyUtil.isEmpty(e.assets)).slice(0, 3 - e.length));
        }
        return e;
      }, [t, i])
    };
  };
  let Z = e => {
    let {
      navigate: t,
      reportParams: i,
      trackParams: r,
      onBeforeSendMessage: a,
      onAfterSendMessage: f
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let {
      templates: y
    } = W();
    let k = readPdfSkillGuidanceHandler.handleReadPdfGuidanceClick({
      reportParams: i,
      onBeforeSendMessage: a,
      onAfterSendMessage: f
    });
    let {
      handleClickLatestReading: w
    } = h();
    let b = e => {
      let t = y[e];
      if (t.type === _.Example) {
        k({
          item: t,
          trackParams: r,
          index: e,
          needTrackEvent: true,
          needLog: false
        });
      } else if (t.type === _.LatestReading) {
        w({
          template: t,
          trackParams: r
        });
      }
    };
    let x = reactCoreLibraryReexport.useMemo(() => y.map(e => {
      let {
        fileName: i,
        link: r
      } = e.assets?.[0] || {};
      return {
        title: e.prompt,
        center: reactJsxRuntimeCoreReexport.jsx(R, {
          assets: e.assets
        }),
        header: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
                flex items-center truncate p-8 text-s-color-text-quaternary
                s-font-xxs
              `,
          children: [reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
            fileType: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(i || "")),
            link: !!r,
            className: o("!text-20 mr-4")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "truncate",
            children: e.title
          })]
        })
      };
    }), [y]);
    if (isEmptyUtil.isEmpty(x)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestionsList.SkillGuidanceList, {
        className: "mt-24 px-10",
        items: x,
        moreText: g("newChat_skill_sample_view_more"),
        reportParams: i,
        onShow: e => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            content_detail: e.title,
            ...r
          });
        },
        onClick: (e, t) => {
          b(t);
        },
        onShowMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...r
          });
        },
        onClickMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...r
          });
          if (t != null) {
            t("/chat/chat-with-doc");
          }
        }
      });
    }
  };
  function F(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class $ {
    constructor() {
      F(this, "titleKey", "newChat_skill_triggered_title_for_reading");
      F(this, "Content", Z);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReadGuidanceSuggestionsPlugin: function () {
      return $;
    }
  });
}