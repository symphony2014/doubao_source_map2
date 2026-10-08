// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SearchResultTextItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55821.62d46e89.js
         * chunkId: 55821
         * moduleId: 837753
         */
module.exports = function (module, exports, require) {
  var i;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#icon_douyin_svg__a)",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "url(#icon_douyin_svg__b)",
        d: "M0 0h24v24H0z"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "icon_douyin_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M0 0h24v24H0z"
        })
      }), reactJsxRuntimeCoreReexport.jsx("pattern", {
        id: "icon_douyin_svg__b",
        width: 1,
        height: 1,
        patternContentUnits: "objectBoundingBox",
        children: reactJsxRuntimeCoreReexport.jsx("use", {
          xlinkHref: "#icon_douyin_svg__c",
          transform: "scale(.0052)"
        })
      }), reactJsxRuntimeCoreReexport.jsx("image", {
        xlinkHref: "data:image/png;base64,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",
        id: "icon_douyin_svg__c",
        width: 192,
        height: 192,
        preserveAspectRatio: "none"
      })]
    })]
  }), {}));
  var imageLoaderWithFallback = require("image-loader-with-fallback") /*id: 803654*/;
  var h = {
    search: "search-lIUYwC",
    "search-item": "search-item-OXK_4I",
    "search-item-title": "search-item-title-fLDLZw",
    "search-item-summary": "search-item-summary-uNyUB_",
    "search-item-footer": "search-item-footer-b0INFL",
    image: "image-SLWQel",
    text: "text-az7RWL",
    "footer-icon": "footer-icon-gsIPRB",
    "footer-title": "footer-title-M1Yzgt",
    "footer-citation": "footer-citation-PN73AP",
    "footer-link": "footer-link-bZzGUE"
  };
  let f = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      idx: l,
      value: i,
      classname: n,
      searchItemTitleClassName: a,
      searchItemSummaryClassName: o,
      footerTitleClassName: r,
      footerClassName: d,
      onClick: f,
      timePrefix: M,
      domain: N,
      useDefaultLinkIcon: v,
      useDYIcon: _ = false,
      onImgError: x,
      onImgLoad: j
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "search-text-item",
      ref: t,
      className: c(h.text, n),
      children: reactJsxRuntimeCoreReexport.jsx("a", {
        className: h.search,
        href: xssContentSanitizer.sanitizeUrl(i.url, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6$*14WldFcHFZ$%14T%ZwWWFEQk1WMnd3$2xjd2Rt%lhhM1Zr%0%0MFdWaEtib$JZ$FQwPQ"
        }),
        target: "_blank",
        rel: "noreferrer noopener",
        onClick: f,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "w-full",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center gap-8",
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: h["search-item"],
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: c(h["search-item-title"], a),
                children: i.title
              }), i.summary ? reactJsxRuntimeCoreReexport.jsx("div", {
                className: c(h["search-item-summary"], o),
                children: `${M}${i.summary}`
              }) : null]
            }), i.image_url ? reactJsxRuntimeCoreReexport.jsx(imageLoaderWithFallback.ImageLoader, {
              classname: h.image,
              url: i.image_url,
              imgKey: (i == null ? undefined : i.title) || i.image_url || (i == null ? undefined : i.search_id),
              defaultUrl: i.image_url,
              fallbackIcon: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "h-0 w-0"
              })
            }) : null]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: c(h["search-item-footer"], d),
            children: [!_ && i.logo_url ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx("img", {
                className: c(h["footer-icon"], v && "!hidden"),
                src: xssContentSanitizer.sanitizeUrl(i.logo_url, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6$*14WldFcHFZ$%14T%ZwWWFEQk1WMnd3$2xjd2Rt%lhhM1Zr%0%0MFdWaEtib$JZ$FQwPQ"
                }),
                onLoad: j,
                onError: x
              }), v && reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
                className: c(h["footer-link"], " text-gray-500")
              })]
            }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: _ ? reactJsxRuntimeCoreReexport.jsx(p, {
                className: c(h["footer-icon"], "truncate")
              }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
                className: c(h["footer-link"], " text-gray-500")
              })
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: c(h["footer-title"], r),
              children: i.site_name ? i.site_name : N
            }), !!l && reactJsxRuntimeCoreReexport.jsx("span", {
              className: h["footer-citation"],
              children: l
            })]
          })]
        })
      })
    });
  });
  (i = {}).Loading = "loading";
  i.Success = "success";
  i.Failure = "failure";
  let M = i;
  let N = e => {
    let {
      value: t,
      onItemInview: l,
      ...i
    } = e;
    let [s, r] = reactCoreLibraryReexport.useState(M.Loading);
    let [c, u] = reactCoreLibraryReexport.useState("");
    let [d, p] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let {
      timePrefix: m,
      domain: h,
      hostname: N
    } = reactCoreLibraryReexport.useMemo(() => {
      let l = "";
      let i = "";
      let n = "";
      try {
        if (t == null ? undefined : t.url) {
          let e = new URL(t == null ? undefined : t.url);
          i = e.hostname.split(".").slice(-2).join(".");
          n = e.hostname;
        }
      } catch (e) {}
      if (!(t == null ? undefined : t.time)) {
        return {
          timePrefix: "",
          domain: i,
          hostname: n
        };
      }
      let [a] = t.time.split("T") ?? [];
      let [o, s, r] = a.split("-");
      let c = new Date().getFullYear().toString();
      l = [c, new Date().getMonth().toString().padStart(2, "0"), new Date().getDate().toString().padStart(2, "0")].join("-") === a[0] ? "今天" : o !== c ? [o, s, r].join("/") : [s, r].join("/");
      return {
        timePrefix: `${l} - `,
        domain: i
      };
    }, [t]);
    let v = s !== M.Success;
    let _ = (t == null ? undefined : t.card_type) === "video";
    let x = e => {
      let t = "未知错误";
      let l = new XMLHttpRequest();
      l.open("HEAD", e, false);
      try {
        l.send();
        if (l.status === 404) {
          t = "图片未找到，可能路径错误";
        } else if (l.status === 400) {
          t = "无效请求，语法错误或参数错误或语义错误";
        } else if (l.status === 0) {
          t = "网络连接问题，请检查网络设置";
        }
      } catch (e) {
        t = "网络请求异常，可能是跨域问题";
      }
      u(t);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (p && (s !== M.Loading || !t.logo_url)) {
        let e = s === M.Success;
        teaAnalyticsEventTracker.trackEvent("qa_search_singlecard_rendering_completed", {
          site_name: t.site_name,
          search_url: t.url,
          logo_url: t.logo_url,
          host_url: h,
          top_host_url: N,
          qa_is_logo_url_accessible: +!!e,
          ...(e ? {} : {
            qa_logo_url_failure_reason: c
          }),
          show_from: "sidebar"
        });
      }
    }, [p, s, t.logo_url]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l && p) {
        l();
      }
    }, [p]);
    return reactJsxRuntimeCoreReexport.jsx(f, {
      ...i,
      value: t,
      ref: d,
      timePrefix: m,
      domain: h,
      useDefaultLinkIcon: v,
      useDYIcon: _,
      onImgLoad: () => {
        r(M.Success);
      },
      onImgError: () => {
        r(M.Failure);
        x(t.logo_url);
      }
    });
  };
  require.d(exports, {
    SearchResultTextItem: function () {
      return N;
    }
  });
}