// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'SearchResultDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 32776
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var v = {
    "search-source-card": "search-source-card-tRuH32",
    "search-source-card-content": "search-source-card-content-gUWU2C",
    "search-source-card-content-header": "search-source-card-content-header-U0Mvwy",
    "search-source-card-content-header-title": "search-source-card-content-header-title-f_lKRa",
    "search-source-card-content-header-image": "search-source-card-content-header-image-Q0dqG7",
    "search-source-card-content-footer": "search-source-card-content-footer-eh6PCS",
    "search-source-card-content-footer-icon": "search-source-card-content-footer-icon-7kB1JF",
    "search-source-card-content-footer-site-name": "search-source-card-content-footer-site-name-YqYC2i",
    "search-source-card-content-footer-card-index": "search-source-card-content-footer-card-index-ZfaPPM",
    "search-source-shortcuts-img-icon": "search-source-shortcuts-img-icon-8XtYjs"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      index: i,
      source: n,
      className: r,
      style: o,
      currentRow: l,
      maxCardCountInOneRow: s,
      searchType: g,
      onTrackEvent: _,
      onClickSearchCard: b
    } = e;
    let [y, k] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let {
      latestFileUrls: x
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [n.image_url]
    });
    let w = (x == null ? undefined : x[0]) ?? n.image_url;
    reactCoreLibraryReexport.useEffect(() => {
      if (k) {
        _("search_singlecard_show", {
          prompt_position_row: l,
          prompt_position: l > 1 ? i - s : i,
          site_name: n.site_name,
          search_url: n.url,
          logo_url: n.logo_url,
          title: n.title,
          search_type: g,
          search_id: n.search_id,
          card_type: "doubao_search",
          content_type: (n == null ? undefined : n.card_type) === "text" ? "webpage" : "video",
          show_from: "chat",
          whether_use_deep_thinking: "no",
          doc_id: n == null ? undefined : n.doc_id
        });
      }
    }, [k]);
    return reactJsxRuntimeCoreReexport.jsx("a", {
      className: c(r, v["search-source-card"]),
      href: xssContentSanitizer.sanitizeUrl(n.url, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6$*14WldFcHFZ$%14ZW1JelZubFpNbF-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
      }),
      style: o,
      target: "_blank",
      rel: "noreferrer noopener",
      ref: y,
      onClick: e => {
        e.preventDefault();
        _("search_singlecard_click", {
          prompt_position_row: l,
          prompt_position: l > 1 ? i - s : i,
          site_name: n.site_name,
          search_url: n.url,
          logo_url: n.logo_url,
          title: n.title,
          search_type: g,
          search_id: n.search_id,
          card_type: "doubao_search",
          content_type: (n == null ? undefined : n.card_type) === "text" ? "webpage" : "video",
          click_from: "chat",
          whether_use_deep_thinking: "no",
          doc_id: n == null ? undefined : n.doc_id
        });
        if (b) {
          if (b != null) {
            b({
              message_type: (n == null ? undefined : n.card_type) === "text" ? "search_card" : "search_video",
              url: n.url
            });
          }
        } else {
          window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(n.url), null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6$*14WldFcHFZ$%14ZW1JelZubFpNbF-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
          }), "_blank");
        }
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: v["search-source-card-content"],
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v["search-source-card-content-header"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            "data-testid": n.title ? "search-source-card-title" : "",
            className: v["search-source-card-content-header-title"],
            children: n.title
          }), w ? reactJsxRuntimeCoreReexport.jsx("img", {
            className: v["search-source-card-content-header-image"],
            src: xssContentSanitizer.sanitizeUrl(w, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6$*14WldFcHFZ$%14ZW1JelZubFpNbF-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
            })
          }) : null]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v["search-source-card-content-footer"],
          children: [n.logo_url ? reactJsxRuntimeCoreReexport.jsx("img", {
            className: v["search-source-card-content-footer-icon"],
            src: xssContentSanitizer.sanitizeUrl(n.logo_url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6$*14WldFcHFZ$%14ZW1JelZubFpNbF-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
            })
          }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: c(v["search-source-shortcuts-img-icon"], "!ml-0 text-12 text-gray-500 bg-[rgba(0,0,0,0.05)] flex justify-center items-center")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: v["search-source-card-content-footer-site-name"],
            children: `${n.site_name}`
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: v["search-source-card-content-footer-card-index"],
            children: i
          })]
        })]
      })
    });
  };
  var aiSearchStepTypes = require("ai-search-step-types") /*id: 759872*/;
  var douyinVideoUrl = require("douyin-video-url") /*id: 751684*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var chatViewContextProvider = require("chat-view-context-provider") /*id: 969474*/;
  var academicSourceCardComponent = require("academic-source-card-component") /*id: 889624*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var searchSpinAnimationLazyComponent = require("search-spin-animation-lazy-component") /*id: 955234*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var chatSettingsOutlinedIcon = require("chat-settings-outlined-icon") /*id: 8717*/;
  var wrenchToolIcon = require("wrench-tool-icon") /*id: 457145*/;
  var checkCircleFilledIcon = require("check-circle-filled-icon") /*id: 259842*/;
  var rtlChevronUpIcon = require("rtl-chevron-up-icon") /*id: 102393*/;
  var arrowRightIconSvg = require("arrow-right-icon-svg") /*id: 623696*/;
  var safeArrayReverse = require("safe-array-reverse") /*id: 953816*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var imageLoaderWithFallback = require("image-loader-with-fallback") /*id: 803654*/;
  var B = {
    "search-result-collapse": "search-result-collapse-oDL3bQ",
    searchResultCollapse: "search-result-collapse-oDL3bQ",
    "search-result-collapse-header": "search-result-collapse-header-BXYwsT",
    searchResultCollapseHeader: "search-result-collapse-header-BXYwsT",
    "search-result-collapse-header-first-step": "search-result-collapse-header-first-step-oDYilN",
    searchResultCollapseHeaderFirstStep: "search-result-collapse-header-first-step-oDYilN",
    "search-result-collapse-header-title": "search-result-collapse-header-title-ubzJu6",
    searchResultCollapseHeaderTitle: "search-result-collapse-header-title-ubzJu6",
    "search-result-collapse-header-expand-icon": "search-result-collapse-header-expand-icon-VioWSF",
    searchResultCollapseHeaderExpandIcon: "search-result-collapse-header-expand-icon-VioWSF",
    "search-result-collapse-children": "search-result-collapse-children-w_2o97",
    searchResultCollapseChildren: "search-result-collapse-children-w_2o97",
    "search-step-item": "search-step-item-d3Ozk5",
    searchStepItem: "search-step-item-d3Ozk5",
    "fade-in": "fade-in-L9SXUB",
    fadeIn: "fade-in-L9SXUB",
    "search-step-item-header": "search-step-item-header-CvuNYO",
    searchStepItemHeader: "search-step-item-header-CvuNYO",
    "search-step-item-header-with-child": "search-step-item-header-with-child-yf3xl3",
    searchStepItemHeaderWithChild: "search-step-item-header-with-child-yf3xl3",
    "search-step-item-header-point-icon": "search-step-item-header-point-icon-bDoaIc",
    searchStepItemHeaderPointIcon: "search-step-item-header-point-icon-bDoaIc",
    "search-step-item-header-title": "search-step-item-header-title-aeZXAn",
    searchStepItemHeaderTitle: "search-step-item-header-title-aeZXAn",
    "search-step-item-header-sub-title": "search-step-item-header-sub-title-q8QbUv",
    searchStepItemHeaderSubTitle: "search-step-item-header-sub-title-q8QbUv",
    "search-step-item-content": "search-step-item-content-TqgrkV",
    searchStepItemContent: "search-step-item-content-TqgrkV",
    "search-keywords": "search-keywords-YIsvkp",
    searchKeywords: "search-keywords-YIsvkp",
    "search-keywords-content": "search-keywords-content-vLAKyn",
    searchKeywordsContent: "search-keywords-content-vLAKyn",
    "search-source-grid": "search-source-grid-KmACMe",
    searchSourceGrid: "search-source-grid-KmACMe",
    "search-source-grid-col": "search-source-grid-col-UdcqLA",
    searchSourceGridCol: "search-source-grid-col-UdcqLA",
    "search-source-shortcuts": "search-source-shortcuts-LyniGv",
    searchSourceShortcuts: "search-source-shortcuts-LyniGv",
    "search-source-shortcuts-img": "search-source-shortcuts-img-uIDcBq",
    searchSourceShortcutsImg: "search-source-shortcuts-img-uIDcBq",
    "search-source-shortcuts-img-icon": "search-source-shortcuts-img-icon-B5KQI4",
    searchSourceShortcutsImgIcon: "search-source-shortcuts-img-icon-B5KQI4",
    "search-source-shortcuts-img-border": "search-source-shortcuts-img-border-H9DuCU",
    searchSourceShortcutsImgBorder: "search-source-shortcuts-img-border-H9DuCU",
    "search-source-shortcuts-hide": "search-source-shortcuts-hide-txlDZ7",
    searchSourceShortcutsHide: "search-source-shortcuts-hide-txlDZ7",
    "search-sources-left-arrow": "search-sources-left-arrow-ajyW6h",
    searchSourcesLeftArrow: "search-sources-left-arrow-ajyW6h",
    "search-sources-right-arrow": "search-sources-right-arrow-wnnJ5N",
    searchSourcesRightArrow: "search-sources-right-arrow-wnnJ5N",
    "search-source-content": "search-source-content-ZwKl6t",
    searchSourceContent: "search-source-content-ZwKl6t",
    "search-source-content-academic": "search-source-content-academic-gwvSxL",
    searchSourceContentAcademic: "search-source-content-academic-gwvSxL",
    "search-new-loading": "search-new-loading-QN_kuJ",
    searchNewLoading: "search-new-loading-QN_kuJ",
    "skeleton-loading": "skeleton-loading-d3zOsK",
    skeletonLoading: "skeleton-loading-d3zOsK",
    "search-new-loading-title": "search-new-loading-title-thCZFj",
    searchNewLoadingTitle: "search-new-loading-title-thCZFj",
    "search-new-loading-title-deep-search": "search-new-loading-title-deep-search-pKvKui",
    searchNewLoadingTitleDeepSearch: "search-new-loading-title-deep-search-pKvKui",
    "search-new-loading-sub-title": "search-new-loading-sub-title-tNNXUf",
    searchNewLoadingSubTitle: "search-new-loading-sub-title-tNNXUf",
    "search-new-loading-sub-title-grid": "search-new-loading-sub-title-grid-yvg2iz",
    searchNewLoadingSubTitleGrid: "search-new-loading-sub-title-grid-yvg2iz",
    "search-new-loading-sub-title-grid-deep-search": "search-new-loading-sub-title-grid-deep-search-mebQnD",
    searchNewLoadingSubTitleGridDeepSearch: "search-new-loading-sub-title-grid-deep-search-mebQnD",
    "search-new-loading-deep-search": "search-new-loading-deep-search-k0d6MX",
    searchNewLoadingDeepSearch: "search-new-loading-deep-search-k0d6MX",
    "search-source-mini": "search-source-mini-CSgPDA",
    searchSourceMini: "search-source-mini-CSgPDA",
    "search-source-mini-source": "search-source-mini-source-sZqLCB",
    searchSourceMiniSource: "search-source-mini-source-sZqLCB",
    "search-source-mini-source-content": "search-source-mini-source-content-W_LytP",
    searchSourceMiniSourceContent: "search-source-mini-source-content-W_LytP",
    "search-source-mini-source-content-text": "search-source-mini-source-content-text-Xh9ldH",
    searchSourceMiniSourceContentText: "search-source-mini-source-content-text-Xh9ldH",
    "fade-entering": "fade-entering-iSRtvw",
    fadeEntering: "fade-entering-iSRtvw",
    fadein: "fadein-OQSDW6",
    "fade-exiting": "fade-exiting-xkjP22",
    fadeExiting: "fade-exiting-xkjP22",
    fadeout: "fadeout-OWPbu2"
  };
  let A = e => {
    let {
      sources: t,
      visible: i = false
    } = e;
    let n = safeArrayReverse.reverseArray(dataProcessor.processData(syncedReferenceBlockManager.syncReferenceBlock(t).filter(e => {
      let {
        logo_url: t
      } = e;
      return !!t;
    }).map(e => {
      let {
        site_name: t
      } = e;
      return t;
    })));
    let r = {};
    t.map(e => {
      if (e.logo_url && e.site_name) {
        r[`${e.site_name}`] = e.logo_url;
      }
    });
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: c({
        [B["search-source-shortcuts"]]: true,
        [B["search-source-shortcuts-hide"]]: !i
      }),
      children: n.slice(0, 14).map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: B["search-source-shortcuts-img"],
        children: [reactJsxRuntimeCoreReexport.jsx(imageLoaderWithFallback.ImageLoader, {
          imgKey: t,
          classname: c(B["search-source-shortcuts-img-icon"], "bg-[var(--s-color-bg-trans)] text-gray-500 text-12 px-[1.5px] py-[1.5px]"),
          url: r[e]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: B["search-source-shortcuts-img-border"]
        })]
      }, t + 1))
    });
  };
  let L = {
    ai_search: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
      className: "text-16"
    }),
    deep_search: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
      className: "text-16"
    }),
    academic_search: reactJsxRuntimeCoreReexport.jsx(chatSettingsOutlinedIcon.ChatSettingsOutlined, {
      className: "text-16"
    }),
    writing_outline_search: reactJsxRuntimeCoreReexport.jsx(wrenchToolIcon.WrenchToolIcon, {
      className: "text-16"
    }),
    complex_search: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
      className: "text-16"
    }),
    simple_search: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
      className: "text-16"
    })
  };
  let D = e => {
    let {
      color: t = "black",
      title: i,
      className: n,
      titleClassName: r,
      status: a = "finish",
      subTitle: o = null,
      children: l = null
    } = e;
    let s = {
      in_doing: reactJsxRuntimeCoreReexport.jsx(searchSpinAnimationLazyComponent.SearchSpinAnimationComponent, {}),
      finish: reactJsxRuntimeCoreReexport.jsx(checkCircleFilledIcon.CheckCircleFilledIcon, {
        className: "text-14 px-3 py-3"
      })
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: B["search-step-item"],
      "data-color": t,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: c(B["search-step-item-header"], n, {
          [B["search-step-item-header-with-child"]]: l !== null
        }),
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: B["search-step-item-header-point-icon"],
          children: s[a]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: c(B["search-step-item-header-title"], r),
          children: i
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: B["search-step-item-header-sub-title"],
          children: o
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: B["search-step-item-content"],
        children: l
      })]
    });
  };
  let z = e => {
    let {
      keywords: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: B["search-keywords"],
      children: t.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: B["search-keywords-content"],
        children: e
      }, t))
    });
  };
  let H = e => {
    let {
      opened: t,
      sources: i,
      title: n,
      searchType: r,
      collapseCanOperate: a = true,
      narrowScreen: o = false
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let s = o ? i.slice(0, 6) : i;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(D, {
          className: B["search-result-collapse-header-first-step"],
          title: l(r === searchSkillTypes.searchSkillTypes.WritingOutlineSearch ? "professional_writing_appeal_understanding" : "search_process_indicator_understanding")
        }), reactJsxRuntimeCoreReexport.jsx(rtlChevronUpIcon.ChevronUpIcon, {
          "data-testid": "search_result_expand_arrow",
          className: c(B["search-result-collapse-header-expand-icon"], "text-12")
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs("span", {
          className: c(B["search-result-collapse-header-title"]),
          children: [L[r ?? "ai_search"], reactJsxRuntimeCoreReexport.jsx("div", {
            className: "whitespace-nowrap leading-16",
            children: n
          })]
        }), reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
          in: !t,
          unmountOnExit: true,
          timeout: 400,
          enter: true,
          children: () => reactJsxRuntimeCoreReexport.jsx("div", {
            className: B["fade-entering"],
            children: reactJsxRuntimeCoreReexport.jsx(A, {
              sources: s,
              visible: !t
            })
          })
        }), !a && reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
          className: "text-14 px-4 py-4"
        })]
      })
    });
  };
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var messageThinkingLoader = require("message-thinking-loader") /*id: 358483*/;
  (n = {}).UnderStanding = "understanding";
  n.SearchingWeb = "searching_web";
  let J = n;
  (r = {})[r.Search = 500] = "Search";
  r[r.DeepSearch = 5000] = "DeepSearch";
  let K = r;
  let q = {
    ai_search: "search_process_indicator_understanding",
    deep_search: "search_process_indicator_understanding",
    academic_search: "search_process_indicator_understanding",
    writing_outline_search: "professional_writing_appeal_understanding",
    complex_search: "search_process_indicator_understanding"
  };
  let G = {
    ai_search: "search_process_indicator_search_web",
    deep_search: "deepsearching",
    academic_search: "skill_search_paper",
    writing_outline_search: "professional_writing_searching_source",
    complex_search: "search_process_indicator_search_web"
  };
  let Q = reactCoreLibraryReexport.memo(e => {
    let {
      text: t,
      onUpdateLoadingStatus: i,
      searchType: n = searchSkillTypes.searchSkillTypes.AISearch,
      isNeedMockStep: r = true,
      step: o = J.UnderStanding,
      t: l
    } = e;
    let s = n === searchSkillTypes.searchSkillTypes.DeepSearch;
    let d = n === searchSkillTypes.searchSkillTypes.AcademicSearch;
    let u = K.Search;
    let [h, p] = reactCoreLibraryReexport.useState(J.UnderStanding);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        setTimeout(() => {
          p(J.SearchingWeb);
        }, Math.random() * 500 + u);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r) {
        p(o);
      }
      if (h === J.SearchingWeb) {
        setTimeout(() => {
          if (i != null) {
            i();
          }
        }, 1000);
      }
    }, [h, o]);
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx(messageThinkingLoader.MessageLoadingView, {
        content: l(h === J.SearchingWeb ? `${G[n]}` : `${q[n]}`),
        isInThinking: true
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: c(B["search-new-loading"], {
          [B["search-new-loading-deep-search"]]: s
        }),
        children: [reactJsxRuntimeCoreReexport.jsx(searchSpinAnimationLazyComponent.SearchSpinAnimationComponent, {
          searchLoadingType: n
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: c(B["search-new-loading-title"], {
            [B["search-new-loading-title-deep-search"]]: s
          }),
          children: l(h === J.SearchingWeb ? `${G[n]}` : `${q[n]}`)
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: B["search-new-loading-sub-title"],
          "data-opened": h === J.SearchingWeb ? "open" : "close",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: B["search-new-loading-sub-title-grid"],
            children: h !== J.SearchingWeb || d ? "" : t
          })
        })]
      });
    }
  });
  let Y = e => {
    let {
      title: t,
      children: i,
      sources: n,
      isInSearching: r,
      text: o,
      searchType: l = searchSkillTypes.searchSkillTypes.AISearch,
      isComplexSearchFinish: s = true,
      defaultExpand: d = false,
      onTrackEvent: u,
      onSearchResultExpandChange: h
    } = e;
    let {
      ref: p,
      width: m,
      height: v
    } = resizeObserverHooks.useResizeObserverEx();
    let [g, _] = reactCoreLibraryReexport.useState(false);
    let [b, x] = reactCoreLibraryReexport.useState(0);
    let [w, C] = reactCoreLibraryReexport.useState(0);
    let [S, R] = reactCoreLibraryReexport.useState(0);
    let [j, E] = reactCoreLibraryReexport.useState(false);
    let [N, I] = reactCoreLibraryReexport.useState(!!o || l === searchSkillTypes.searchSkillTypes.DeepSearch && !!r && n.length === 0);
    let [P] = reactCoreLibraryReexport.useState(l);
    let Z = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 800
    });
    let F = i18nTranslationUtils.useTranslationWithFallback();
    let M = F("search_process_indicator_understanding");
    let O = usePreviousHook.usePrevious(o);
    let W = o && o !== M;
    let A = usePreviousHook.usePrevious(W ? J.SearchingWeb : J.UnderStanding);
    let L = s && l !== searchSkillTypes.searchSkillTypes.DeepSearch;
    let D = reactCoreLibraryReexport.useCallback(() => {
      I(false);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (m && (w > m || w === 0)) {
        C(m);
      }
      if (m && !g && b === 0) {
        x(m + 20);
      }
      if (v) {
        R(v);
      }
    }, [m, v]);
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        _(true);
        E(true);
      }
    }, []);
    if (o || N || !s) {
      return reactJsxRuntimeCoreReexport.jsx(Q, {
        t: F,
        text: O !== undefined && O !== "" && O !== M ? O : W ? o : "",
        isNeedMockStep: L,
        step: W || A === J.SearchingWeb ? J.SearchingWeb : J.UnderStanding,
        onUpdateLoadingStatus: D,
        searchType: P
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
        in: g,
        addEndListener: (e, t) => {
          e.addEventListener("transitionend", t, false);
        },
        onEnter: e => {
          e.style.height = "44px";
          e.style.display = "block";
          e.style.width = "100%";
          if (l === searchSkillTypes.searchSkillTypes.AcademicSearch) {
            setTimeout(() => {
              E(true);
            }, 0);
          } else {
            E(true);
          }
        },
        onEntering: e => {
          e.style.height = `${e.scrollHeight}px`;
          e.style.width = `${e.scrollWidth}px`;
        },
        onEntered: e => {
          e.style.height = "auto";
          e.style.width = "100%";
        },
        onExit: e => {
          e.style.height = `${S}px`;
          e.style.width = `${w}px`;
          e.style.display = "block";
          e.offsetHeight;
        },
        onExiting: e => {
          e.style.height = "44px";
          e.style.width = `${b}px`;
        },
        onExited: e => {
          e.style.display = "block";
          e.style.height = "44px";
          e.style.width = "fit-content";
          E(false);
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          "data-testid": "search_result_collapse_btn",
          ref: p,
          className: c(B["search-result-collapse"], "search-result-collapse"),
          onClick: () => {
            if (u != null) {
              u("search_expand_click", {
                click_afterstatus: g ? "close" : "expand",
                search_type: P
              });
            }
            h(!g);
            _(!g);
          },
          "data-opened": g ? "open" : "close",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: c(B["search-result-collapse-header"]),
            children: reactJsxRuntimeCoreReexport.jsx(H, {
              collapseCanOperate: true,
              title: t,
              sources: n,
              narrowScreen: Z === "sm",
              searchType: P,
              opened: g,
              isInSearching: r
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: c(B["search-result-collapse-children"], `${j ? "block" : "hidden"}`),
            "data-showed": `${g ? "show" : "disappear"}`,
            children: i
          })]
        })
      });
    }
  };
  let ee = e => {
    let {
      inView: t,
      className: i,
      data: n,
      isInSearching: r,
      messageId: s = "",
      viewOnly: d = false,
      isFirstCreateConversation: u = false,
      searchType: h = searchSkillTypes.searchSkillTypes.AISearch,
      academicCardList: p,
      defaultExpand: m = false,
      onTrackEvent: v,
      onClickSearchCard: T
    } = e;
    let R = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onOpenAcademicSearchCard: j
    } = chatViewContextProvider.useChatViewActions();
    let {
      ref: E,
      width: N
    } = resizeObserverHooks.useResizeObserverEx();
    let I = responsiveScreenHooks.useIsNarrowScreen();
    let P = reactCoreLibraryReexport.useRef(0);
    let [Z, F] = reactCoreLibraryReexport.useState(false);
    let M = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        if (v != null) {
          v("search_content_show", {});
        }
      }
    }, [t]);
    let {
      sources: O,
      keywords: W,
      row: A,
      text: L,
      academicCardSource: H,
      isComplexSearchFinish: V,
      isComplexSearch: X
    } = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      var i;
      var r;
      var a;
      var s;
      var c;
      let {
        text_card: d,
        video_card: u
      } = (n == null ? undefined : n.search_result) || {};
      let {
        text: h = "",
        queries: m = []
      } = n || {};
      let {
        copilot: v
      } = n || {};
      let {
        text_card: f,
        video_card: g
      } = (n == null ? undefined : n.query_params) || {};
      let y = (v == null ? undefined : v.filter(e => e.step_type === aiSearchStepTypes.StepType.StepTypeSearchingWeb)) || [];
      let k = [];
      y.map(e => {
        k.push(...((e == null ? undefined : e.step_contents) || []));
      });
      let x = (v == null ? undefined : v.filter(e => e.step_type === aiSearchStepTypes.StepType.StepTypeConsideringSource)) || [];
      let w = [];
      x.map(e => {
        w.push(...((e == null ? undefined : e.step_contents) || []));
      });
      let C = [...((w == null ? undefined : (e = w.map(e => e == null ? undefined : e.text_card)) === null || e === undefined ? undefined : e.filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
      let S = [...((w == null ? undefined : (t = w.map(e => e == null ? undefined : e.video_card)) === null || t === undefined ? undefined : t.filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
      let $ = [...((f == null ? undefined : (i = f.map(e => e.query)) === null || i === undefined ? undefined : i.filter(isStringTypeCheck.isString)) || []), ...((g == null ? undefined : (r = g.map(e => e.query)) === null || r === undefined ? undefined : r.filter(isStringTypeCheck.isString)) || []), ...((k == null ? undefined : (a = k.map(e => e.text)) === null || a === undefined ? undefined : a.filter(isStringTypeCheck.isString)) || []), ...m];
      let T = [...((d == null ? undefined : (s = d.card_list) === null || s === undefined ? undefined : s.map(e => {
        return {
          title: e.title || "",
          site_name: e.sitename || "",
          logo_url: e.logo_url || "",
          url: e.url || "",
          card_type: "text",
          search_id: (f == null ? undefined : f[0].search_id) ?? "",
          image_url: e.image_url || "",
          summary: e.summary || "",
          index: e.index || ""
        };
      }).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((u == null ? undefined : (c = u.card_list) === null || c === undefined ? undefined : c.map(e => {
        return {
          title: e.video_captions || "",
          site_name: e.source_app_name || "",
          logo_url: e.source_app_icon || "",
          url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || "",
          card_type: "video",
          search_id: (g == null ? undefined : g[0].search_id) ?? "",
          image_url: (e == null ? undefined : e.album_image) || "",
          summary: "",
          index: e.index || ""
        };
      }).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((C == null ? undefined : C.map(e => ({
        title: (e == null ? undefined : e.title) || "",
        site_name: (e == null ? undefined : e.sitename) || "",
        logo_url: (e == null ? undefined : e.logo_url) || "",
        url: (e == null ? undefined : e.url) || "",
        card_type: "text",
        search_id: "",
        image_url: (e == null ? undefined : e.image_url) || "",
        summary: e.summary || "",
        index: e.index || ""
      })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((S == null ? undefined : S.map(e => {
        return {
          title: e.video_captions || "",
          site_name: e.source_app_name || "",
          logo_url: e.source_app_icon || "",
          url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || "",
          card_type: "video",
          search_id: (g == null ? undefined : g[0].search_id) ?? "",
          image_url: (e == null ? undefined : e.album_image) || "",
          summary: "",
          index: e.index || ""
        };
      }).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
      let R = [...((p == null ? undefined : p.map(e => e).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
      let j = v && (v == null ? undefined : v.length) > 0 && !!v.find(e => e.step_type === aiSearchStepTypes.StepType.StepTypeResearchedAndSummarized);
      let E = !!v;
      let N = v && $.length > 0 && !j ? $[0] : "";
      let I = T.length <= 4 ? 1 : Math.ceil(T.length / 3);
      return {
        keywords: [...new Set(E ? $.slice(0, 1) : $)],
        sources: T,
        row: I >= 2 ? 2 : I,
        text: h || N,
        academicCardSource: p ? R : undefined,
        isComplexSearchFinish: !v || j,
        isComplexSearch: E
      };
    }, [n, p]);
    let {
      col: U,
      maxCardsShowInOneRow: J
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = O.length;
      if (I) {
        if (e <= 4) {
          return {
            col: e,
            maxCardsShowInOneRow: 0.5
          };
        } else if (N && N >= 460) {
          if (Math.ceil(e / 3) > 2) {
            return {
              col: Math.ceil(e / 2),
              maxCardsShowInOneRow: 0.33
            };
          } else {
            return {
              col: 3,
              maxCardsShowInOneRow: 0.33
            };
          }
        } else if (N && N < 460 && N >= 310) {
          if (Math.ceil(e / 2) > 2) {
            return {
              col: Math.ceil(e / 2),
              maxCardsShowInOneRow: 0.5
            };
          } else {
            return {
              col: 2,
              maxCardsShowInOneRow: 0.5
            };
          }
        } else if (e > 3) {
          return {
            col: Math.ceil(e / 2),
            maxCardsShowInOneRow: 1
          };
        } else {
          return {
            col: length,
            maxCardsShowInOneRow: 1
          };
        }
      } else {
        return {
          col: e,
          maxCardsShowInOneRow: 0.33
        };
      }
    }, [N, O]);
    let K = e => A === 1 ? 1 : e > Math.ceil(O.length / 2) ? 2 : 1;
    let q = e => e === 1 || !!I && A === 2 && e === Math.ceil(O.length / 2) + 1;
    let G = e => e === O.length || !!I && A === 2 && e === Math.ceil(O.length / 2);
    let Q = () => h === searchSkillTypes.searchSkillTypes.AcademicSearch && H ? {
      collapseTitle: R("skill_search_papernum", {
        postProcess: "sprintf",
        sprintf: [H.length]
      }),
      secondStepTitle: R("skill_search_paper"),
      thirdStepTitile: R("search_process_indicator_found_sources", {
        postProcess: "sprintf",
        sprintf: [H.length]
      })
    } : h === searchSkillTypes.searchSkillTypes.WritingOutlineSearch ? {
      collapseTitle: R("professional_writing_reference_sources_based_on", {
        postProcess: "sprintf",
        sprintf: [O.length]
      }),
      secondStepTitle: R("professional_writing_searching_source"),
      thirdStepTitile: R("professional_writing_found_reference_sources", {
        postProcess: "sprintf",
        sprintf: [O.length]
      })
    } : {
      collapseTitle: R(`${O.length === 1 ? "search_results_based_on_single_source" : "search_results_based_on"}`, {
        postProcess: "sprintf",
        sprintf: [O.length]
      }),
      secondStepTitle: R("search_process_indicator_search_web"),
      thirdStepTitile: R(`${O.length === 1 ? "search_results_found_single_source" : "search_process_indicator_found_sources"}`, {
        postProcess: "sprintf",
        sprintf: [O.length]
      })
    };
    let ee = (!!(n == null ? undefined : n.search_result) || !!(n == null ? undefined : n.copilot) && V) && (!O || O.length === 0) && (!H || (H == null ? undefined : H.length) === 0);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && Z) {
        P.current = Date.now();
      } else if (P.current !== 0) {
        v("search_result_viewduration", {
          duration: String(Date.now() - P.current)
        });
        P.current = 0;
      }
    }, [t, Z]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && !M.current && (O.length > 0 || ((H == null ? undefined : H.length) ?? 0) > 0)) {
        M.current = true;
        if (!u) {
          v("search_expand_show", {
            search_type: h
          });
        }
      }
    }, [t, O, H]);
    if (ee) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: E,
        style: {
          position: "relative",
          marginBottom: `${!L || X ? 28 : 0}px`
        },
        className: i,
        children: reactJsxRuntimeCoreReexport.jsxs(Y, {
          messageId: s,
          title: Q().collapseTitle,
          isInSearching: r,
          sources: O,
          onSearchResultExpandChange: e => {
            F(e);
          },
          onTrackEvent: v,
          text: L,
          searchType: h,
          isComplexSearchFinish: V,
          defaultExpand: m,
          children: [reactJsxRuntimeCoreReexport.jsx(D, {
            title: Q().secondStepTitle,
            children: reactJsxRuntimeCoreReexport.jsx(z, {
              keywords: W
            })
          }), reactJsxRuntimeCoreReexport.jsx(D, {
            title: Q().thirdStepTitile,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              onClick: e => e.stopPropagation(),
              className: B["search-source-content"],
              children: H ? reactJsxRuntimeCoreReexport.jsx("div", {
                className: B["search-source-content-academic"],
                children: H.map((e, t) => reactJsxRuntimeCoreReexport.jsx(academicSourceCardComponent.AcademicSourceCard, {
                  t: R,
                  index: t + 1,
                  source: e,
                  showFrom: "search_expand",
                  viewOnly: d,
                  onOpenAcademicSearchCard: j,
                  onTrackEvent: v
                }, t))
              }) : reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
                rows: I ? A : 1,
                column: U,
                arrowSize: "small",
                scrollStep: I ? J : 0.95,
                enableArrowShalldow: false,
                leftArrowClassName: B["search-sources-left-arrow"],
                rightArrowClassName: B["search-sources-right-arrow"],
                children: O.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
                  className: c(B["search-source-grid-col"], "w-full"),
                  children: reactJsxRuntimeCoreReexport.jsx(g, {
                    style: {
                      width: `${I ? N && N > 460 ? Math.floor(N * J * 0.93) : 150 : 240}px`
                    },
                    className: c("m-w-240 m-w-150", {
                      [B["search-source-card-first-card-in-row"]]: q(t + 1)
                    }, {
                      [B["search-source-card-last-card-in-row"]]: G(t + 1)
                    }),
                    index: t + 1,
                    source: e,
                    searchType: h,
                    currentRow: K(t + 1),
                    maxCardCountInOneRow: Math.ceil(O.length / 2),
                    onTrackEvent: v,
                    onClickSearchCard: T
                  })
                }, t))
              })
            })
          })]
        })
      });
    }
  };
  require.d(exports, {
    SearchResultDisplay: function () {
      return ee;
    }
  });
}