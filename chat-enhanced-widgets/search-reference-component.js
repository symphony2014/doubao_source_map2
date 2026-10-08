// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 's' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 'd' to 'useRequestHook'
// - Resolved require(870590) to 'use-request-hook'
// - Renamed variable 'c' to 'popoverComponent'
// - Resolved require(973583) to 'popover-component'
// - Renamed variable 'u' to 'refContentCircleComponent'
// - Resolved require(595358) to 'ref-content-circle-component'
// - Renamed variable 'm' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable '_' to 'rtlLinkIcon'
// - Resolved require(70222) to 'rtl-link-icon'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'g' to 'textSimilarityDisplay'
// - Resolved require(987971) to 'text-similarity-display'
// - Updated imported property 'Z' to 'LinkIcon' (module 70222)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'D' to 'TextSimilarityDisplay' (module 987971)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'Z' to 'useRequest' (module 870590)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'Z' to 'PopoverComponent' (module 973583)
// - Updated imported property 't' to 'RefContentCircle' (module 595358)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 558696
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var refContentCircleComponent = require("ref-content-circle-component") /*id: 595358*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var h = classnamesUtils;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var p = {
    container: "container-bhqnGO",
    spacing: "spacing-pG7q2N"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let n;
    let {
      style: o,
      data: l,
      isLastRef: r,
      onMouseEnter: i,
      onMouseLeave: a,
      onClick: s
    } = e;
    let d = l == null ? undefined : l.insert_text;
    let c = d == null ? undefined : d.startsWith("__LINK_ICON");
    let u = d == null ? undefined : d.match(/^\s*\((.*?)\)\s*$/);
    if (!(d = (u == null ? undefined : u[1]) || d)) {
      try {
        if ((d = new URL((l == null ? undefined : l.url) || "").hostname) == null ? undefined : d.startsWith("www.")) {
          let [, e] = d.split("www.");
          d = e;
        }
      } catch (e) {}
    }
    if (d) {
      n = p.container;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: p.spacing
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          ref: t,
          style: o,
          className: n,
          onClick: s,
          onMouseEnter: i,
          onMouseLeave: a,
          children: c ? reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: "text-14"
          }) : d
        }), r && reactJsxRuntimeCoreReexport.jsx("span", {
          className: h(p.spacing, "!w-2")
        })]
      });
    } else {
      return null;
    }
  });
  var textSimilarityDisplay = require("text-similarity-display") /*id: 987971*/;
  var x = {
    info: "info-f_mz4g",
    "info-withoud-highligt": "info-withoud-highligt-fCnCwX",
    title: "title-XGDGXq",
    footer: "footer-oFwZke",
    "footer-withoud-highligt": "footer-withoud-highligt-HPqT6r",
    "footer-img": "footer-img-dcHFXU",
    "footer-border": "footer-border-jUVV1W",
    "footer-website": "footer-website-POyF8V",
    "svg-rounded-50": "svg-rounded-50-TGrUjL"
  };
  let k = e => {
    let {
      url: t,
      title: n,
      icon: l,
      loading: r,
      website_name: i,
      shouldShowHighLightContent: a,
      onClick: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: h(x.info, {
        [x["info-withoud-highligt"]]: !r && !a
      }),
      onClick: () => s == null ? undefined : s(t),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(x.footer, `${r || a ? "footer" : ""}`, {
          [x["footer-withoud-highligt"]]: !r && !a
        }),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex flex-1 items-center gap-4",
          children: [l ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx("img", {
              className: x["footer-img"],
              src: xssContentSanitizer.sanitizeUrl(l, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1SSFZq%mtRekZxWWpJM%1*cFhO$EJNTW14M$l6Sldl$1JET$d4a$IxWjBXb*MxT%dON%9-c*FWMFo1$1RKbmRHTnRWbTFNTWs1MllsaENkb%p0$m5Wa1NFMTJZekpX-%dOdFRtO%1WMXAyWWpO%2JHTnBN$3BpTWp$d1ds-zFNRXd5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: x["footer-border"]
            })]
          }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: h(x["svg-rounded-50"], "text-gray-500")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: x["footer-website"],
            children: i
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: h(x.title),
        children: n
      })]
    });
  };
  let w = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "flex w-full flex-col gap-12",
    children: Array.from({
      length: 7
    }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
      className: h("input-cEhFQi", "flash-Ubbs2Q")
    }, t))
  });
  let b = e => {
    let {
      loading: t,
      highLightData: n
    } = e;
    let {
      similarity_content: o = ""
    } = n ?? {};
    let l = o !== "" && !t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "content-ULkUS4",
      children: [reactJsxRuntimeCoreReexport.jsx(k, {
        shouldShowHighLightContent: l,
        ...e
      }), t ? reactJsxRuntimeCoreReexport.jsx(w, {}) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: l ? reactJsxRuntimeCoreReexport.jsx(textSimilarityDisplay.TextSimilarityDisplay, {
          ...n
        }) : null
      })]
    });
  };
  let y = e => {
    let {
      trackEvent: t,
      url: n,
      doc_id: o
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t != null) {
        t("search_reference_show", {
          url: n,
          doc_id: o,
          show_from: "in_text_hover"
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(b, {
      ...e
    });
  };
  let C = e => {
    let {
      data: t,
      text: n,
      useNewUI: m = false,
      isLastRef: h = false,
      customRefRender: _,
      options: p,
      message: g,
      trackEvent: x,
      refPosition: k
    } = e;
    let {
      title: w,
      insert_text: b,
      website_name: C,
      url: R,
      icon: j,
      summary: N,
      pos: S,
      start_index: T,
      doc_id: E,
      quota_show_type: $
    } = t ?? {};
    let {
      enableHightLight: W = true,
      getPopupContainer: Z
    } = p ?? {};
    let [M, F] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let [I, B] = reactCoreLibraryReexport.useState({});
    let [L, D] = reactCoreLibraryReexport.useState(false);
    let O = {
      title: w,
      website_name: C,
      url: R,
      icon: j,
      doc_id: E,
      trackEvent: x
    };
    let P = functionInvoker.invoke(() => {
      let e = "number";
      switch ($) {
        case 0:
        default:
          e = "number";
          break;
        case 1:
          e = "icon";
          break;
        case 2:
          e = "link";
      }
      return {
        search_url: R,
        doc_id: E,
        inline_type: e,
        inline_text: b,
        doc_position: k,
        reply_id: g == null ? undefined : g.reply_id
      };
    });
    let H = e => {
      if (e) {
        window.open(xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1SSFZq%mtRekZxWWpJM%1*cFhO$EJNTW14M$l6Sldl$1JET$d4a$IxWjBXb*MxT%dON%9-c*FWMFo1$1RKbmRHTnRWbTFNTW14M$drZFdORXh1$W5wbFIwWj$Xak5XZWc9PQ"
        }));
        if (x != null) {
          x("search_reference_click", {
            ...P
          });
        }
      }
    };
    let {
      loading: X,
      run: q
    } = useRequestHook.useRequest(async () => !N || !n || isUndefinedCheck.isUndefined(T) ? {} : await apiServicesCollection.SamanthaApiService.GetSearchHighlight({
      content: (S == null ? undefined : S[0]) ? n.slice(Number(T), S[0]) : "",
      summary: N
    }), {
      manual: true,
      onSuccess(e) {
        B((e == null ? undefined : e.data) ?? {});
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (F) {
        if (x != null) {
          x("message_reference_show", {
            ...P
          });
        }
      }
    }, [F]);
    let A = () => {};
    if (isUndefinedCheck.isUndefined(b)) {
      return null;
    } else if (m && typeof _ != "function") {
      return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        style: {
          boxShadow: "none",
          borderRadius: "12px"
        },
        autoAdjustOverflow: true,
        mouseEnterDelay: 200,
        mouseLeaveDelay: 200,
        onVisibleChange: e => D(e),
        getPopupContainer: Z,
        position: undefined,
        content: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: W ? reactJsxRuntimeCoreReexport.jsx(y, {
            ...O,
            loading: X,
            onClick: H,
            highLightData: I
          }) : null
        }),
        children: reactJsxRuntimeCoreReexport.jsx(f, {
          ref: M,
          style: L ? {
            background: "var(--s-color-bg-trans-primary, rgba(0, 0, 0, 0.06))"
          } : {},
          data: t,
          isLastRef: h,
          onMouseEnter: A,
          onClick: () => H(O == null ? undefined : O.url)
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        style: {
          boxShadow: "none",
          borderRadius: "12px",
          background: "var(--s-color-bg-float)"
        },
        autoAdjustOverflow: true,
        mouseEnterDelay: 200,
        mouseLeaveDelay: 200,
        onVisibleChange: e => D(e),
        getPopupContainer: Z,
        position: undefined,
        content: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: W ? reactJsxRuntimeCoreReexport.jsx(y, {
            ...O,
            loading: X,
            onClick: H,
            highLightData: I
          }) : null
        }),
        children: typeof _ == "function" ? _({
          active: L,
          onMouseEnter: A,
          onClick: () => H(O == null ? undefined : O.url)
        }) : reactJsxRuntimeCoreReexport.jsx(refContentCircleComponent.RefContentCircle, {
          ref: M,
          style: L ? {
            background: "var(--s-color-brand-primary-hover, #004ad9)",
            color: "var(--s-color-text-invert-primary, #fff) !important"
          } : {},
          page: Number(b),
          onMouseEnter: A,
          onClick: () => H(O == null ? undefined : O.url)
        })
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    SearchRef: function () {
      return C;
    }
  });
}