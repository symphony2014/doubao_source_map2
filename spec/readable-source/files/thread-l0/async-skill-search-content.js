// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SkillSearchContent'
// - Renamed export 'd' to 'SkillContentWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 517565
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var searchResultTextItemComponent = require("search-result-text-item-component") /*id: 837753*/;
  var searchReferenceEntryButton = require("search-reference-entry-button") /*id: 986437*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var threadRadiusUtil = require("thread-radius-util") /*id: 904734*/;
  var threadLazyImageCard = require("thread-lazy-image-card") /*id: 274552*/;
  var threadContainerStyles = require("thread-container-styles") /*id: 137917*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      classname: r,
      data: o = []
    } = e;
    let [l, s] = reactCoreLibraryReexport.useState(false);
    let [c, d] = reactCoreLibraryReexport.useState(0);
    let u = [];
    o.map(e => {
      if (e.image) {
        u.push(e.image);
      }
    });
    let h = u == null ? undefined : u.map(e => {
      return e.full_size_url?.[0] || "";
    });
    let b = u == null ? undefined : u.slice(0, 4);
    let y = b.length;
    let k = (u == null ? undefined : u.slice(4)?.length) ?? 0;
    if (y === 0) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(threadContainerStyles.threadClassNames.container, {
            [threadContainerStyles.threadClassNames.containerGrid]: y > 3
          }, r),
          children: b.map((e, t) => reactJsxRuntimeCoreReexport.jsx(threadLazyImageCard.LazyImageCard, {
            item: e,
            remainCount: k,
            classname: threadRadiusUtil.getRoundedClass(t, y),
            onClick: () => s(true),
            isLastImage: t === y - 1
          }))
        }), reactJsxRuntimeCoreReexport.jsx(samanthaImagePreviewGallery.ImagePreviewGallery, {
          visible: l,
          onVisibleChange: s,
          src: xssContentSanitizer.sanitizeUrl(h, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%15$m1oamJ$NXZ%RE5PZ$ZsN%9Xb*hXRzkw$1RJNWRHTkhPWFZh$np$d1kzaz$lbHB-%m5sWk1tZDBZMWhX-kdOdWEz%mpi$lo2WkZkNE1FeFhTbk5pTWs1e$RESk9kb%pZ%W5aaWJWWjFaR%01ZWxwWFJubFpNbWQwWXpKc2ExcFRN$2xa$0$sMFlW-3hhRm95$lhSWk1qbDFaRWRXZFdSRE9-c*hSMFo1$2xNM%1HTXphR2hq-ldReFkz-zlQ%T09"
          }),
          currentIndex: c,
          onChange: d
        })]
      });
    }
  };
  var y = {
    popover: "popover-DoOC_w",
    searchItemTitle: "searchItemTitle-jezu9N",
    searchItemFooter: "searchItemFooter-uDo0NP",
    searchItemSummary: "searchItemSummary-Q7ZORN",
    footerTitle: "footerTitle-ZBK7ER",
    scroll: "scroll-TUXIc6"
  };
  let k = e => {
    let {
      sources: t,
      vlmRichMediaResults: i,
      onClickSearchTextItem: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y.scroll,
      children: [reactJsxRuntimeCoreReexport.jsx(b, {
        classname: "mb-12",
        data: i
      }), t == null ? undefined : t.map(e => reactJsxRuntimeCoreReexport.jsx(searchResultTextItemComponent.SearchResultTextItem, {
        classname: "!mx-0 !my-0 !w-full !px-8 !py-8",
        searchItemTitleClassName: y.searchItemTitle,
        searchItemSummaryClassName: y.searchItemSummary,
        footerClassName: y.searchItemFooter,
        footerTitleClassName: y.footerTitle,
        value: e,
        onClick: n,
        onItemInview: emptyExportFunction.emptyFunction
      }, e.search_id))]
    });
  };
  let x = e => {
    let {
      classname: t,
      sources: i,
      title: r,
      vlmRichMediaResults: a
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState(false);
    let [c, d] = reactIntersectionObserver.useInView({
      initialInView: false,
      threshold: 1
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!d) {
        l(false);
      }
    }, [d]);
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      className: y.popover,
      autoAdjustOverflow: true,
      trigger: "custom",
      visible: o,
      position: "rightBottom",
      showArrow: false,
      onClickOutSide: () => {
        l(false);
      },
      content: k({
        sources: i,
        vlmRichMediaResults: a
      }),
      children: reactJsxRuntimeCoreReexport.jsx(searchReferenceEntryButton.SearchReferenceEntry, {
        ref: c,
        classname: t,
        sources: i,
        title: r,
        richImagesResultsLength: (a == null ? undefined : a.length) || 0,
        onClick: () => {
          l(e => !e);
        }
      })
    });
  };
  var asyncSkillContentStyles = require("async-skill-content-styles") /*id: 405330*/;
  let C = e => {
    let {
      blockContent: t
    } = e;
    let {
      scene: i,
      results: r = [],
      summary: s,
      vlm_rich_media_results: c = []
    } = t || {};
    let {
      searchSource: d,
      isThinkScene: u,
      resolveSummary: h,
      vlmRichMediaResults: p
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = {
        text_card: {
          card_list: r.map(e => e.text_card).filter(Boolean)
        },
        video_card: {
          card_list: r.map(e => e.video_card).filter(Boolean)
        }
      };
      let {
        sources: t
      } = aiChatSourceExtractor.extractChatSources(e, []);
      let n = i === skillMessageLifecycleTypes.messageRole.Thinking;
      return {
        isThinkScene: n,
        resolveSummary: n ? s : "",
        searchSource: t,
        vlmRichMediaResults: (c == null ? undefined : c.filter(e => e.type === skillMessageLifecycleTypes.richMediaType.RichMediaTypeImage)) || []
      };
    }, [r, i, c]);
    return reactJsxRuntimeCoreReexport.jsx(x, {
      classname: a(asyncSkillContentStyles.skillContentStyles.searchBtn, {
        [asyncSkillContentStyles.skillContentStyles["think-style"]]: u
      }),
      title: h,
      sources: d,
      vlmRichMediaResults: p
    });
  };
  let S = e => {
    let {
      contentBlock: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(C, {
      blockContent: t == null ? undefined : t.content_obj
    });
  };
  require.d(exports, {
    SkillSearchContent: function () {
      return C;
    },
    SkillContentWrapper: function () {
      return S;
    }
  });
}