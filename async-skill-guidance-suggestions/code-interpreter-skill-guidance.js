// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'SkillGuidancePage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: code-interpreter-skill-guidance-page.89c02c2b.js
         * chunkId: 45894
         * moduleId: 180379
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var skillGuidanceSuggestionsList = require("skill-guidance-suggestions-list") /*id: 213126*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  let k = e => {
    let {
      reportParams: t,
      trackParams: n
    } = e;
    let {
      sendMessage: i
    } = chatServiceContext.useChatService("chatMessageService");
    let l = chatAppEnums.SkillType.CodeInterpreter.toString();
    return e => {
      if (!e.key || !e.title || !e.size || !(e == null ? undefined : e.example?.question)) {
        return;
      }
      let {
        example: {
          question: o
        },
        key: s,
        title: c,
        size: d
      } = e;
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        content_detail: (e == null ? undefined : e.desc) ?? (e == null ? undefined : e.title),
        ...n
      });
      i([{
        reportParams: {
          scene: "sidebar_skill_click",
          sec_scene: "click_suggestedprompt_case",
          send_source: "skill_guidance_page_click",
          preset_prompt_type: "ci",
          ...t
        },
        text: o,
        nestedItems: [{
          fileKey: s,
          fileName: c,
          type: contentTypeEnums.resourceType.File,
          fileType: contentTypeEnums.mediaType.File,
          identifier: "",
          size: Number(d)
        }],
        extraExt: {
          ...(e.use_cache_answer ? {
            guidance_config_key: "skill_sidebar",
            guidance_use_cache_answer: "1"
          } : {}),
          input_skill: JSON.stringify({
            skill_id: String(l),
            skill_type: chatAppEnums.SkillType.CodeInterpreter
          }),
          send_from_skill_guidance_or_suggestion: "1"
        }
      }]);
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      navigate: t,
      reportParams: n,
      trackParams: a,
      onBeforeSendMessage: g,
      onAfterSendMessage: y
    } = e;
    let w = i18nTranslationUtils.useTranslationWithFallback();
    let {
      data: S
    } = useRequestHook.useRequest(async () => {
      let e = eventReportingService.createEventReporter({
        eventName: "ci_skill_pack"
      });
      try {
        var n;
        let i = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.CodeInterpreter
        });
        e.addDurationPoint("success");
        e.success();
        return ((n = i.data) === null || n === undefined ? undefined : n.code_interperter?.category_list) || [];
      } catch (t) {
        e.error({
          error: t instanceof Error ? t : Error(String(t)),
          reason: "ci_skill_pack_error"
        });
        return [];
      }
    }, {
      cacheKey: "ci_skill_pack",
      staleTime: 300000
    });
    let b = k({
      reportParams: n,
      trackParams: a
    });
    let C = reactCoreLibraryReexport.useMemo(() => (S == null ? undefined : S.slice(0, 3).map(e => {
      let {
        desc: t,
        item_list: n
      } = e;
      let {
        key: l,
        title: r,
        preview_url: a
      } = (n == null ? undefined : n[0]) || {};
      return {
        title: t,
        center: reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                mx-12 flex h-[97px] items-start justify-center overflow-hidden
              `,
          children: reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(a || "", null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RKcmRtTXpTbXBNTWtwd1pXa3hhb%l5T$hka%1q$nNZbT$SZ*xreWEz%mFNM$p3$2tkR2RWa3lWWFJqTTFad$dqSldlb$JI-khaaWJrMTJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9"
            }),
            alt: "",
            className: "w-full rounded-2",
            style: {
              maxWidth: 188
            }
          })
        }),
        header: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
                flex items-center truncate p-8 text-s-color-text-quaternary
                s-font-xxs
              `,
          children: [reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
            fileType: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(l || "")),
            link: false,
            className: o("!text-20 mr-4")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "truncate",
            children: r
          })]
        })
      };
    })) || [], [S]);
    if (isEmptyUtil.isEmpty(S)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestionsList.SkillGuidanceList, {
        className: "mt-24 px-10",
        items: C,
        isShowMore: false,
        moreText: w("newChat_skill_sample_view_more"),
        reportParams: n,
        onShow: (e, t) => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            content_detail: S == null ? undefined : S[t].desc,
            ...a
          });
        },
        onClick: async (e, t) => {
          if ((await (g == null ? undefined : g())) === false) {
            return;
          }
          let i = S == null ? undefined : S[t].item_list?.[0];
          if (i) {
            b({
              ...i,
              desc: S == null ? undefined : S[t].desc
            });
          }
          if (y != null) {
            y({
              exitSkill: false
            });
          }
        },
        onShowMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...a
          });
        },
        onClickMore: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...a
          });
          if (t != null) {
            t("/chat/code-interpreter");
          }
        }
      });
    }
  };
  require.d(exports, {
    SkillGuidancePage: function () {
      return w;
    }
  });
}