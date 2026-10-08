// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'skeletonComponent'
// - Resolved require(619442) to 'skeleton-component'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'f' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'g' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 'x' to 'useElementSizeHook_2'
// - Resolved require(486741) to 'use-element-size-hook_2'
// - Renamed variable 'w' to 'reactCarouselComponent'
// - Resolved require(464116) to 'react-carousel-component'
// - Renamed variable '_' to 'scrollbarThumbHooks'
// - Resolved require(775173) to 'scrollbar-thumb-hooks'
// - Resolved require(682145) to 'rtl-icon-factory'
// - Renamed variable 'E' to 'videoFormatUtils'
// - Resolved require(403486) to 'video-format-utils'
// - Renamed variable 'P' to 'videoPlayerComponent'
// - Resolved require(483314) to 'video-player-component'
// - Updated imported property 'Z' to 'Skeleton' (module 619442)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'G' to 'createRtlIcon' (module 682145)
// - Updated imported property 'D' to 'useScrollbarThumb' (module 775173)
// - Updated imported property 'v' to 'formatTime' (module 403486)
// - Updated imported property 'Z' to 'useElementSize' (module 486741)
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 'l' to 'Carousel' (module 464116)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'J' to 'VideoPlayerView' (module 483314)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-video-player.b750d983.js
         * chunkId: 36904
         * moduleId: 76572
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  let s = "samantha-carousel-item";
  let c = {
    textMaxHeight: 162,
    summaryMaxHeight: 110,
    cardHeightWithBg: 210,
    cardHeightWithoutBg: 202
  };
  let u = {
    textMaxHeight: 92,
    summaryMaxHeight: 66,
    cardHeightWithBg: 144,
    cardHeightWithoutBg: 136
  };
  let d = (e, t) => {
    if (t.length === 0 || e < t[0]?.timestamp) {
      return -1;
    }
    for (let l = 0; l < t.length; l++) {
      if (t[l]?.timestamp === e) {
        return l;
      }
      if (t[l]?.timestamp > e) {
        if (l === 0) {
          return 0;
        } else {
          return l - 1;
        }
      }
    }
    return t.length - 1;
  };
  let m = (e, t) => e === "textArea" ? t > 70 ? c.textMaxHeight : u.textMaxHeight : e === "summary" ? t > 70 ? c.summaryMaxHeight : u.summaryMaxHeight : e === "bg" ? t > 70 ? c.cardHeightWithBg : u.cardHeightWithBg : e === "card" ? t > 70 ? c.cardHeightWithoutBg : u.cardHeightWithoutBg : undefined;
  var v = {
    timeline: "timeline-rssGiQ",
    "carousel-placeholder": "carousel-placeholder-GTIuvg",
    carouselPlaceholder: "carousel-placeholder-GTIuvg",
    "carousel-row-wrapper": "carousel-row-wrapper-RwZLlK",
    carouselRowWrapper: "carousel-row-wrapper-RwZLlK",
    "carousel-item": "carousel-item-IbJY_D",
    carouselItem: "carousel-item-IbJY_D",
    "carousel-timestamp-wrapper": "carousel-timestamp-wrapper-TxqjxO",
    carouselTimestampWrapper: "carousel-timestamp-wrapper-TxqjxO",
    "carousel-timestamp": "carousel-timestamp-ti1NU4",
    carouselTimestamp: "carousel-timestamp-ti1NU4",
    "carousel-timestamp-first": "carousel-timestamp-first-oD4DGr",
    carouselTimestampFirst: "carousel-timestamp-first-oD4DGr",
    "carousel-item-card": "carousel-item-card-TxYNvh",
    carouselItemCard: "carousel-item-card-TxYNvh",
    "carousel-card-left": "carousel-card-left-R8dSoI",
    carouselCardLeft: "carousel-card-left-R8dSoI",
    "carousel-img-wrapper": "carousel-img-wrapper-PxexrX",
    carouselImgWrapper: "carousel-img-wrapper-PxexrX",
    "carousel-img": "carousel-img-d7vcsM",
    carouselImg: "carousel-img-d7vcsM",
    "carousel-card-right": "carousel-card-right-XjsdMR",
    carouselCardRight: "carousel-card-right-XjsdMR",
    "carousel-title": "carousel-title-PY1ALW",
    carouselTitle: "carousel-title-PY1ALW",
    "carousel-item-card-active": "carousel-item-card-active-AZWAjp",
    carouselItemCardActive: "carousel-item-card-active-AZWAjp",
    "carousel-item-card-active-bg": "carousel-item-card-active-bg-kghXcG",
    carouselItemCardActiveBg: "carousel-item-card-active-bg-kghXcG",
    "timeline-bg-transition": "timeline-bg-transition-P9gky5",
    timelineBgTransition: "timeline-bg-transition-P9gky5",
    "carousel-timeline": "carousel-timeline-GQiDxH",
    carouselTimeline: "carousel-timeline-GQiDxH",
    "carousel-dot-stroke": "carousel-dot-stroke-m2CrzP",
    carouselDotStroke: "carousel-dot-stroke-m2CrzP",
    "carousel-dot": "carousel-dot-BI4fCo",
    carouselDot: "carousel-dot-BI4fCo",
    "carousel-item-active": "carousel-item-active-hK8_6E",
    carouselItemActive: "carousel-item-active-hK8_6E",
    "carousel-title-hidden": "carousel-title-hidden-PUVM1w",
    carouselTitleHidden: "carousel-title-hidden-PUVM1w",
    "carousel-title-show": "carousel-title-show-H4E4Zd",
    carouselTitleShow: "carousel-title-show-H4E4Zd",
    "carousel-summary": "carousel-summary-BCCW2c",
    carouselSummary: "carousel-summary-BCCW2c",
    "show-scrollbar-thumb": "show-scrollbar-thumb-ZHtDDu",
    showScrollbarThumb: "show-scrollbar-thumb-ZHtDDu",
    "carousel-dot-container": "carousel-dot-container-MeV63i",
    carouselDotContainer: "carousel-dot-container-MeV63i",
    "carousel-dot-active": "carousel-dot-active-jPNIve",
    carouselDotActive: "carousel-dot-active-jPNIve",
    "carousel-dot-stroke-show": "carousel-dot-stroke-show-BPYwr5",
    carouselDotStrokeShow: "carousel-dot-stroke-show-BPYwr5",
    "carousel-line": "carousel-line-w_AoMm",
    carouselLine: "carousel-line-w_AoMm",
    "skeleton-timeline": "skeleton-timeline-Wu5xN6",
    skeletonTimeline: "skeleton-timeline-Wu5xN6",
    "skeleton-line": "skeleton-line-SEoWS3",
    skeletonLine: "skeleton-line-SEoWS3",
    "skeleton-dot": "skeleton-dot-dcJ63X",
    skeletonDot: "skeleton-dot-dcJ63X",
    "skeleton-img": "skeleton-img-qsmvpj",
    skeletonImg: "skeleton-img-qsmvpj",
    "carousel-timeline-first": "carousel-timeline-first-wWKFwO",
    carouselTimelineFirst: "carousel-timeline-first-wWKFwO",
    "carousel-timeline-last": "carousel-timeline-last-d8DSoR",
    carouselTimelineLast: "carousel-timeline-last-d8DSoR",
    "carousel-timeline-transform": "carousel-timeline-transform-WfVL88",
    carouselTimelineTransform: "carousel-timeline-transform-WfVL88",
    "carousel-timeline-full": "carousel-timeline-full-zz1XpG",
    carouselTimelineFull: "carousel-timeline-full-zz1XpG",
    "flex-start": "flex-start-ca5Bzp",
    flexStart: "flex-start-ca5Bzp",
    "ml-40": "ml-40-zsek_J",
    ml40: "ml-40-zsek_J",
    "mr-40": "mr-40-tPE75Y",
    mr40: "mr-40-tPE75Y",
    "mt-12": "mt-12-CP3S9u",
    mt12: "mt-12-CP3S9u"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = reactCoreLibraryReexport.memo(e => {
    let {
      placeholderCount: t = 10
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a(v["carousel-placeholder"]),
      style: {
        display: "flex",
        alignItems: "center"
      },
      children: Array.from({
        length: t
      }, (e, t) => t + 1).map((e, l) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a({
          [v["mr-20"]]: l === t - 1
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a(v["carousel-timeline"], v["skeleton-timeline"], {
            [v["carousel-timeline-transform"]]: l > 0,
            [v["carousel-timeline-last"]]: l === t - 1,
            [v["carousel-timeline-first"]]: l === 0
          }),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(v["skeleton-dot"])
          }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
            rows: 1,
            className: a(v["skeleton-line"])
          })]
        }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Image, {
          className: v["skeleton-img"]
        })]
      }, e))
    });
  });
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  let b = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 36,
    height: 36,
    fill: "none",
    viewBox: "0 0 36 36",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#ic_image_wrong_svg__a)",
      fillOpacity: 0.3,
      d: "M9.285 28.339q-1.702 0-2.595-.882-.88-.882-.881-2.553V12.445q0-1.692.881-2.563Q7.583 9 9.285 9h17.421q1.702 0 2.584.882t.882 2.563v5.681a14 14 0 0 0-.564-.072 5 5 0 0 0-.564-.03q-.287 0-.585.03-.286.03-.564.082v-5.455q0-.707-.358-1.056-.36-.348-1.026-.349H9.47q-.676 0-1.035.349-.35.349-.349 1.056v10.716l2.666-2.39q.318-.286.636-.42a1.65 1.65 0 0 1 .687-.144q.348 0 .697.154.36.144.687.42l1.887 1.703 4.624-4.133a2.5 2.5 0 0 1 .738-.45 2.16 2.16 0 0 1 1.6 0q.4.153.728.47L24.4 19.89a6.8 6.8 0 0 0-1.6 2.194 6.6 6.6 0 0 0-.584 2.758q0 .954.256 1.836.267.892.738 1.66zm4.696-9.413q-.687 0-1.251-.339a2.6 2.6 0 0 1-.902-.902 2.44 2.44 0 0 1-.339-1.261q0-.677.339-1.24.338-.576.902-.913a2.4 2.4 0 0 1 1.251-.339q.687 0 1.24.338.565.339.903.913.338.564.338 1.24 0 .689-.338 1.262a2.6 2.6 0 0 1-.902.902q-.554.339-1.241.339"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#ic_image_wrong_svg__b)",
      fillOpacity: 0.3,
      d: "M34.365 24.825c0 2.904-2.443 5.325-5.325 5.325-2.914 0-5.325-2.4-5.325-5.325s2.41-5.325 5.325-5.325c2.924 0 5.325 2.4 5.325 5.325m-6.216 2.505c0 .493.409.891.89.891.493 0 .881-.398.881-.89a.88.88 0 0 0-.88-.881.9.9 0 0 0-.891.88m.168-5.21.094 2.988c.01.367.262.619.629.619a.61.61 0 0 0 .64-.619l.083-2.987c.01-.43-.283-.724-.723-.724s-.734.294-.723.724"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "ic_image_wrong_svg__a",
        x1: 32.11,
        x2: 9.346,
        y1: 25.262,
        y2: 8.056,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.25,
          stopColor: "#75A4FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0057FF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "ic_image_wrong_svg__b",
        x1: 35.212,
        x2: 23.715,
        y1: 28.456,
        y2: 21.557,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.25,
          stopColor: "#75A4FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0057FF"
        })]
      })]
    })]
  });
  var j = {
    "error-container": "error-container-aedttZ",
    "error-bg": "error-bg-FHnnWT"
  };
  var y = e => {
    let {
      src: t,
      className: l = ""
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(j["error-container"], l),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(j["error-bg"])
        }), reactJsxRuntimeCoreReexport.jsx(b, {})]
      }) : reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%p-$m10aF-w$jBZM*Q0-%dWWFZubE1NMD%1$1hrN%1tRlh$bXhpZ$Rrd1lW-3hiR0pI-khW-$$6bHFZakl4ZDJJe%5Xe*libEo2$ERK-WFHSkhlR2xa$jA1e$R*ZHNkRnA1T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
        }),
        className: l,
        onError: () => {
          n(true);
        }
      })
    });
  };
  var scrollbarThumbHooks = require("scrollbar-thumb-hooks") /*id: 775173*/;
  var N = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "m5.344 13.606 5.945-6.085A.95.95 0 0 1 12 7.2a1 1 0 0 1 .383.093q.18.078.328.227l5.945 6.085a.86.86 0 0 1 .266.641.86.86 0 0 1-.125.461.9.9 0 0 1-.32.328.86.86 0 0 1-.461.125.87.87 0 0 1-.657-.281l-5.734-5.875h.758L6.64 14.88a.85.85 0 0 1-.657.281.86.86 0 0 1-.46-.125 1 1 0 0 1-.329-.328.9.9 0 0 1-.117-.46 1 1 0 0 1 .063-.352.9.9 0 0 1 .203-.29"
    })
  }), {}));
  var R = e => {
    let {
      handleCardCollapse: t,
      collapseText: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("collapse-ptwG5N"),
      onClick: e => {
        e.stopPropagation();
        e.preventDefault();
        t();
      },
      children: [reactJsxRuntimeCoreReexport.jsx(N, {
        className: "carousel-chevron-up-P_oCfs"
      }), l]
    });
  };
  var videoFormatUtils = require("video-format-utils") /*id: 403486*/;
  var k = e => {
    var t;
    let {
      activeIndex: l,
      index: i,
      totalLength: n,
      handleClickTimelineItem: o,
      carouselItem: c,
      collapseText: u,
      handleCardCollapse: d,
      posters: p,
      cardExposeCb: f,
      carouselItemMounted: g
    } = e;
    let {
      className: x,
      onScroll: w
    } = scrollbarThumbHooks.useScrollbarThumb();
    let b = reactCoreLibraryReexport.useRef(null);
    let j = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof f == "function") {
        y();
      }
      if (g != null) {
        g(i);
      }
      return () => {
        var e;
        if ((e = j.current) !== null && e !== undefined) {
          e.disconnect();
        }
      };
    }, []);
    let y = () => {
      j.current = new IntersectionObserver(e => {
        e.forEach(e => {
          if (e.isIntersecting) {
            if (f != null) {
              f(Number(e.target.getAttribute("data-index")));
            }
          }
        });
      }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      });
      if (b.current) {
        j.current.observe(b.current);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(v["carousel-item"], {
        [v["carousel-item-active"]]: i === l
      }),
      ref: b,
      onClick: () => {
        o(c, i);
      },
      "data-index": i,
      id: `${s}-${i}`,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: v["carousel-timestamp-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(v["carousel-timestamp"], {
            [v["carousel-timestamp-first"]]: i === 0
          }),
          children: videoFormatUtils.formatTime(c == null ? undefined : (t = c.timestamp) === null || t === undefined ? undefined : t.toString())
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(v["carousel-timeline"], {
          [v["carousel-timeline-transform"]]: i > 0,
          [v["carousel-timeline-last"]]: i === n - 1,
          [v["carousel-timeline-first"]]: i === 0,
          [v["carousel-timeline-full"]]: n === 1
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v["carousel-dot-container"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(v["carousel-dot-stroke"], {
              [v["carousel-dot-stroke-show"]]: i === l
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(v["carousel-dot"], {
              [v["carousel-dot-active"]]: i === l
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(v["carousel-line"])
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(v["carousel-item-card"], {
          [v["carousel-item-card-active"]]: i === l
        }),
        id: `${s}-card-${i}`,
        style: i === l ? {
          height: m("card", c.highlight.length + c.summary.length)
        } : {},
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(v["carousel-item-card-active-bg"], {
            [v["timeline-bg-transition"]]: i === l
          }),
          style: i === l ? {
            height: m("bg", c.highlight.length + c.summary.length)
          } : {}
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v["flex-start"],
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: v["carousel-card-left"],
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: v["carousel-img-wrapper"],
              children: p == null ? undefined : p[i]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: a(v["carousel-title"], v["mt-12"], {
                [v["carousel-title-hidden"]]: i === l,
                [v["carousel-title-show"]]: i !== l
              }),
              children: c == null ? undefined : c.highlight
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: a(v["carousel-card-right"]),
            style: {
              maxHeight: m("textArea", c.highlight.length + c.summary.length)
            },
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: a(v["carousel-title"]),
              children: c == null ? undefined : c.highlight
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: a(v["carousel-summary"], x, {
                [v["show-scrollbar-thumb"]]: x !== ""
              }),
              onScroll: w,
              style: {
                maxHeight: m("summary", c.highlight.length + c.summary.length)
              },
              children: c.summary
            })]
          })]
        }), l === i && reactJsxRuntimeCoreReexport.jsx(R, {
          handleCardCollapse: () => {
            d(l);
          },
          collapseText: u
        })]
      })]
    });
  };
  var C = e => {
    let {
      timelineData: t,
      handleClickTimelineItem: l,
      activeIndex: i,
      handleCardCollapse: n,
      collapseText: a,
      timelineContainerRef: o,
      isAutoAlignCenter: c,
      renderPosterDeps: u,
      renderPoster: d,
      cardExposeCb: m,
      showArrow: p = false
    } = e;
    let [b, j] = reactCoreLibraryReexport.useState(40);
    let _ = reactCoreLibraryReexport.useRef(null);
    let N = reactCoreLibraryReexport.useRef(null);
    let R = reactCoreLibraryReexport.useRef(null);
    let [E, C] = reactCoreLibraryReexport.useState(false);
    let [T, P] = reactCoreLibraryReexport.useState(false);
    let [S, $] = reactCoreLibraryReexport.useState(false);
    let A = reactCoreLibraryReexport.useRef([]);
    let M = reactCoreLibraryReexport.useMemo(() => t.map((e, t) => {
      let l = reactJsxRuntimeCoreReexport.jsx(y, {
        src: xssContentSanitizer.sanitizeUrl((e == null ? undefined : e.poster) || "", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%p-$m10aF-w$jBZM*Q0-%dWWFZubE1NMD%1$1hrN%1tRlh$bXhpZ$Rrd1lW-3hiR0pI-khW-$$6bHFZakl4ZDJJe%5Xe*libEo2$ERO%2NHSlhWbk5o$npWc1R*ZE9hR050T1R*ak1sWnp%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
        }),
        className: v["carousel-img"]
      });
      if (typeof d == "function") {
        return d({
          item: e,
          index: t,
          size: t === i ? [110, 67] : [180, 112],
          wrapperClassName: v["carousel-img"],
          fallbackElement: l
        });
      } else {
        return l;
      }
    }), [t, d, i, ...(u || [])]);
    let {
      width: W
    } = useElementSizeHook_2.useElementSize(o) || {};
    reactCoreLibraryReexport.useEffect(() => {
      if (W) {
        D();
      }
    }, [W]);
    reactCoreLibraryReexport.useEffect(() => {
      if ((t == null ? undefined : t.length) > 0) {
        A.current = t;
        D();
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => () => {
      L(R);
      L(N);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (i > -1) {
        setTimeout(() => {
          O(i);
        }, 400);
      }
    }, [i]);
    let L = e => {
      var t;
      if ((t = e.current) !== null && t !== undefined) {
        t.disconnect();
      }
      e.current = null;
    };
    let Z = e => {
      if (e === 0) {
        I("left");
      }
      if (e === (t == null ? undefined : t.length) - 1) {
        I("right");
      }
    };
    let I = e => {
      let l = e === "left" ? R : N;
      if (l.current) {
        return;
      }
      let r = e === "left" ? 0 : (t == null ? undefined : t.length) - 1;
      let i = document.querySelector(`#${s}-card-${r}`);
      l.current = new IntersectionObserver(t => {
        t.forEach(t => {
          let l = Math.abs(t.boundingClientRect.left - t.intersectionRect.left) < 8 && Math.abs(t.boundingClientRect.right - t.intersectionRect.right) < 8;
          if (t.isIntersecting && l) {
            if (e === "left") {
              C(false);
            } else {
              P(false);
            }
          } else if (e === "left") {
            C(true);
          } else {
            P(true);
          }
        });
      }, {
        root: o == null ? undefined : o.current,
        rootMargin: "0px",
        threshold: [1]
      });
      if (i) {
        l.current.observe(i);
      }
    };
    let O = e => {
      var l;
      var r;
      let c = document.querySelector(`#${s}-${e}`);
      let u = (_ == null ? undefined : (r = _.current) === null || r === undefined ? undefined : (l = r.itemsContainerRef) === null || l === undefined ? undefined : l.current?.scrollLeft) || 0;
      let d = (o == null ? undefined : o.current?.clientWidth) || window.innerWidth;
      let m = (c == null ? undefined : c.offsetLeft) - u;
      let v = e => {
        var t;
        var l;
        var r;
        if ((r = _.current) !== null && r !== undefined && (l = r.itemsContainerRef) !== null && l !== undefined && (t = l.current) !== null && t !== undefined) {
          t.scrollTo({
            left: Math.max(e, 0),
            behavior: "smooth"
          });
        }
      };
      if (m < 8) {
        m += u;
        v(e === A.current?.length - 1 ? m + 3000 : m - 100);
      } else if (m + 398 >= d) {
        v(e === A.current?.length - 1 ? m + 3000 : m - 100 + u);
      }
    };
    let D = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(() => {
      if (c) {
        j((((o == null ? undefined : o.current?.clientWidth) || window.innerWidth) - (A.current?.length * 196 - 16)) / 2);
        $(true);
      }
    }, 200), []);
    if (c && !S) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
        carouselRowClassName: v["carousel-row-wrapper"],
        ref: _,
        customUpdateArrowVisible: () => ({
          shouldShowArrowLeft: p && E,
          shouldShowArrowRight: p && T
        }),
        children: t == null ? undefined : t.map((e, r) => reactJsxRuntimeCoreReexport.jsx(k, {
          activeIndex: i,
          index: r,
          totalLength: t == null ? undefined : t.length,
          carouselItem: e,
          handleClickTimelineItem: l,
          collapseText: a,
          handleCardCollapse: n,
          isAutoAlignCenter: c,
          posters: M,
          leftDistance: b,
          cardExposeCb: m,
          carouselItemMounted: Z
        }, (e == null ? undefined : e.timestamp) + r))
      });
    }
  };
  var T = e => {
    let {
      timelineData: t,
      className: l = "",
      activeTimelineItemCb: i,
      placeholderCount: n,
      collapseText: s,
      currentTime: c = -1,
      isAutoScrollingWithCurrentTime: u = false,
      isAutoAlignCenter: m = false,
      canExpand: f = true,
      renderPosterDeps: g,
      renderPoster: x,
      cardExposeCb: w,
      showArrow: b
    } = e;
    let [j, y] = reactCoreLibraryReexport.useState(-1);
    let _ = reactCoreLibraryReexport.useRef(null);
    let [N, R] = reactCoreLibraryReexport.useState(-1);
    reactCoreLibraryReexport.useEffect(() => {
      if (u && (t == null ? undefined : t.length) !== 0 && !(c < 0)) {
        E();
      }
    }, [c, u, t]);
    let E = reactCoreLibraryReexport.useMemo(() => () => {
      let e = d(c, t);
      if (!(e < 0) && e !== j && e !== N) {
        if (f) {
          y(e);
        }
        R(-1);
      }
    }, [c, t]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a(v.timeline, l),
      ref: _,
      children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
        loading: (t == null ? undefined : t.length) === 0,
        active: true,
        placeholder: reactJsxRuntimeCoreReexport.jsx(p, {
          placeholderCount: n
        }),
        style: {
          width: "100%"
        },
        children: reactJsxRuntimeCoreReexport.jsx(C, {
          activeIndex: j,
          timelineData: t,
          handleClickTimelineItem: (e, t) => {
            if (f) {
              y(t);
            }
            R(-1);
            if (i != null) {
              i(e, t);
            }
          },
          handleCardCollapse: e => {
            y(-1);
            R(e);
          },
          collapseText: s,
          timelineContainerRef: _,
          isAutoAlignCenter: m,
          renderPosterDeps: g,
          renderPoster: x,
          cardExposeCb: w,
          showArrow: b
        })
      })
    });
  };
  var videoPlayerComponent = require("video-player-component") /*id: 483314*/;
  var S = {
    "ai-video": "ai-video-c3K77u",
    content: "content-FfN9WU",
    "timeline-area": "timeline-area-U4HDZa",
    "sketlon-video-wrapper": "sketlon-video-wrapper-eaPVUw",
    "sketlon-timeline-wrapper": "sketlon-timeline-wrapper-NhVIIz",
    "sketlon-timeline": "sketlon-timeline-hkNso4",
    "sketlon-timebox-wrapper": "sketlon-timebox-wrapper-IsBq1u",
    "sketlon-timebox": "sketlon-timebox-EwB2yk"
  };
  let $ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      definitions: l,
      url: n,
      subtitles: o,
      onClose: s,
      posterUrl: c,
      speedRates: u,
      autoPlay: d,
      scene: m,
      timelineData: v = [],
      onTimelineItemChange: p,
      className: f,
      showClose: g = true,
      controlSlots: x,
      menuPopoverUseHoverTrigger: w,
      showTimeLineArrow: b,
      showVideoSketlon: j,
      showTimeLineSketlon: y,
      ..._
    } = e;
    let [N, R] = reactCoreLibraryReexport.useState();
    let E = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce((e, t) => {
      let i = v[t]?.timestamp;
      R(i);
      if (p != null) {
        p({
          currentTime: v[t]?.timestamp,
          index: t
        });
      }
      if (C.current) {
        C.current.currentTime = i;
        if (!C.current.isPlaying) {
          C.current.play();
        }
      }
    }, 100), [v]);
    let k = e => {
      R(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        let e = {
          handlePause: () => {
            var e;
            if ((e = C.current) !== null && e !== undefined) {
              e.pause();
            }
          }
        };
        if (typeof t == "function") {
          t(e);
        } else {
          t.current = e;
        }
      }
    }, []);
    let C = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      window._xgPlayer = C.current;
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: S["ai-video"],
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: a([S.content, f]),
        children: j ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: S["sketlon-video-wrapper"]
          })
        }) : reactJsxRuntimeCoreReexport.jsx(videoPlayerComponent.VideoPlayerView, {
          ref: C,
          url: n,
          definitions: l,
          subtitles: o,
          onClose: s,
          posterUrl: c,
          speedRates: u,
          autoPlay: d,
          scene: m,
          onTimeUpdate: e => {
            let {
              currentTime: t
            } = e;
            return k(t);
          },
          menuPopoverUseHoverTrigger: w,
          showClose: g,
          controlSlots: x,
          ..._
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: S["timeline-area"],
        children: y ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: S["sketlon-timeline-wrapper"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: S["sketlon-timeline"]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: S["sketlon-timebox-wrapper"],
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: S["sketlon-timebox"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: S["sketlon-timebox"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: S["sketlon-timebox"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: S["sketlon-timebox"]
            })]
          })]
        }) : !!v.length && reactJsxRuntimeCoreReexport.jsx(T, {
          timelineData: v,
          collapseText: "收起",
          canExpand: false,
          currentTime: N,
          activeTimelineItemCb: E,
          isAutoScrollingWithCurrentTime: true,
          isAutoAlignCenter: true,
          showArrow: b
        })
      })]
    });
  });
  require.d(exports, {
    VideoPlayer: function () {
      return $;
    }
  });
}