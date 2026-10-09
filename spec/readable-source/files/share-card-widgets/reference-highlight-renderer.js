// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'generateReferenceHighlights'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 256530
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatDesktopResourceCheck = require("chat-desktop-resource-check") /*id: 873204*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var refContentCircleComponent = require("ref-content-circle-component") /*id: 595358*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var _ = {
    container: "container-sXMlSt",
    "container-without-highlight": "container-without-highlight-sZDt0t",
    meta: "meta-LjB_FW",
    "meta-without-highlight": "meta-without-highlight-SwIcfI",
    "icon-img": "icon-img-YHvzgb",
    text: "text-UgxDmm",
    "svg-rounded-50": "svg-rounded-50-b8uraC"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      url: t,
      icon: r,
      highlightLoading: i,
      websiteName: a,
      showJumpToParaText: o,
      shouldShowHighLightContent: s,
      onClick: l
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let [d, h] = reactCoreLibraryReexport.useState(!!r);
    let p = a || function (e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      try {
        let {
          hostname: r
        } = new URL(e);
        let n = r.split(".");
        let i = n[0];
        let a = n.slice(n.length - 2).join(".");
        if (t) {
          if (i !== "www") {
            return r;
          } else {
            return a;
          }
        }
        return a;
      } catch {
        return e;
      }
    }(t || "");
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: u(_.container, {
        [_["container-without-highlight"]]: !i && !s
      }),
      onClick: () => l == null ? undefined : l(t),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: u(_.meta, `${i || s ? "border-tranparent" : ""}`, {
          [_["meta-without-highlight"]]: !i && !s
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-6 flex-1",
          children: [d ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl(r, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d4bFN*RjBX$Epv-%dSRE1Xb*hXRzkwWTIx$2JWcFlTbXhp-l%1c1RETk9l$mw1T1dwa%1qRjNZakkx-kdKd$$ucE1Na1o2W$hre*QxbFhaR3hN$0$wc1dtaz$l$nB-$1hSa$-xWXdX$k01-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
              }),
              className: u("flex items-center justify-center", _["icon-img"]),
              onError: () => h(false),
              referrerPolicy: "no-referrer"
            }, r)
          }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: u(_["svg-rounded-50"], "text-gray-500")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: _.text,
            children: p
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-4",
          children: [o && reactJsxRuntimeCoreReexport.jsx("div", {
            className: _.text,
            children: c("flow_web_ext_jump_to_reference", "跳转到段落")
          }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
            className: "text-16"
          })]
        })]
      })
    });
  };
  var textSimilarityDisplay = require("text-similarity-display") /*id: 987971*/;
  let x = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "flex flex-col gap-12 w-full",
    children: Array.from({
      length: 4
    }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
      className: u("input-FP4Uey", "flash-ibBC09")
    }, t))
  });
  let k = e => (e || "").replace(/\s/g, "");
  let C = e => {
    let {
      highlightLoading: t,
      highLightData: r,
      url: n,
      icon: i,
      websiteName: a,
      showJumpToParaText: o,
      onClick: s
    } = e;
    let {
      before_text: l,
      text: c,
      after_text: d
    } = r ?? {};
    let u = k(c) !== "" && !t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "card-KFZQPF",
      children: [reactJsxRuntimeCoreReexport.jsx(b, {
        showJumpToParaText: o,
        shouldShowHighLightContent: u,
        url: n,
        icon: i,
        highlightLoading: t,
        websiteName: a,
        onClick: s
      }), t ? reactJsxRuntimeCoreReexport.jsx(x, {}) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: u ? reactJsxRuntimeCoreReexport.jsx(textSimilarityDisplay.TextSimilarityDisplay, {
          prefix_content: l,
          similarity_content: c,
          suffix_content: d
        }) : null
      })]
    });
  };
  let j = e => {
    let {
      refInfoData: t,
      showJumpToParaText: r,
      highlightLoading: i,
      trackEvent: a,
      options: o,
      onClick: s
    } = e;
    let {
      getPopupContainer: l
    } = o ?? {};
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let [u, f] = reactCoreLibraryReexport.useState(false);
    let m = reactCoreLibraryReexport.useRef(false);
    let g = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      e = u ? setTimeout(() => {
        d(true);
      }, 200) : setTimeout(() => {
        d(false);
      }, 200);
      return () => clearTimeout(e);
    }, [u]);
    let v = reactCoreLibraryReexport.useCallback(e => {
      if ((!g.current || !(e.target instanceof HTMLElement) || !function (e, t) {
        let r = t;
        while (r !== null) {
          if (r === e) {
            return true;
          }
          r = r.parentElement;
        }
        return false;
      }(g.current, e.target)) && !m.current) {
        f(false);
        document.removeEventListener("mousemove", v);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      style: {
        boxShadow: "none",
        borderRadius: "12px"
      },
      autoAdjustOverflow: true,
      trigger: "custom",
      visible: c,
      getPopupContainer: l,
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        onMouseEnter: () => {
          m.current = true;
          f(true);
        },
        onMouseLeave: () => {
          m.current = false;
          f(false);
        },
        children: reactJsxRuntimeCoreReexport.jsx(C, {
          ...t,
          showJumpToParaText: r,
          highlightLoading: i,
          onClick: s,
          trackEvent: a
        })
      }),
      onClickOutSide: () => d(false),
      children: reactJsxRuntimeCoreReexport.jsx(refContentCircleComponent.RefContentCircle, {
        ref: g,
        style: c ? {
          background: "var(--s-color-brand-primary-hover, #004ad9)",
          color: "var(--s-color-text-invert-primary, #fff) !important"
        } : {},
        page: t.refTag,
        onClick: s,
        onMouseEnter: () => {
          document.removeEventListener("mousemove", v);
          f(true);
          document.addEventListener("mousemove", v);
        }
      })
    });
  };
  let S = e => reactJsxRuntimeCoreReexport.jsx(j, {
    ...e,
    showJumpToParaText: false
  });
  let E = e => {
    let {
      metaInfos: t,
      options: r,
      onTrackEvent: d,
      onClickRef: u
    } = e;
    let h = t.filter(chatDesktopResourceCheck.isDesktopResource);
    let {
      refs: p = [],
      resource_content_id: f,
      origin_url: m,
      icon_url: g,
      website_name: v
    } = h.length === 0 ? {} : h[h.length - 1].data;
    let _ = [];
    let b = [];
    let w = 1;
    for (let e of p) {
      let {
        indexes: t,
        page_number: r
      } = e;
      if (!isUndefinedCheck.isUndefined(t) && !isUndefinedCheck.isUndefined(r)) {
        for (let e of t) {
          _.push({
            index: e,
            pageNumber: r,
            refTag: w
          });
          b.push(r);
        }
        w += 1;
      }
    }
    let [x, k] = reactCoreLibraryReexport.useState({});
    reactCoreLibraryReexport.useEffect(() => {
      if (b.length !== 0 && f) {
        apiServicesCollection.SamanthaApiService.ResourceContentReferenceCard({
          id: f,
          page_numbers: b
        }).then(e => {
          k((e == null ? undefined : e.data) ?? {});
        });
      }
    }, [b.length, f]);
    let {
      pages: C = []
    } = x;
    let j = collectionArrayGrouper.groupValuesToArray(C, e => e.page_number);
    let E = collectionArrayGrouper.groupValuesToArray(_, e => e.index);
    let R = 0;
    let N = [];
    for (let [e, t] of toEntriesUtil.toEntries(E)) {
      R += 1;
      t.sort((e, t) => e.refTag - t.refTag);
      let n = [];
      for (let e of objectValuesHelper.getObjectValues(t)) {
        let t = (j == null ? undefined : j[`${e.pageNumber}`]?.length) ? j[`${e.pageNumber}`][0] : undefined;
        let i = {
          url: m,
          icon: g,
          websiteName: v,
          refTag: e.refTag,
          highLightData: t
        };
        n.push(reactJsxRuntimeCoreReexport.jsx(S, {
          refInfoData: i,
          highlightLoading: !t,
          isFirstRef: R === 1,
          trackEvent: d,
          onClick: () => {
            u(m || "", (t == null ? undefined : t.text) || "", !t);
          },
          options: r
        }, e.refTag));
      }
      N.push({
        range: Number(e),
        render: () => reactJsxRuntimeCoreReexport.jsx("span", {
          children: n.map(e => e)
        })
      });
    }
    return N;
  };
  require.d(exports, {
    generateReferenceHighlights: function () {
      return E;
    }
  });
}