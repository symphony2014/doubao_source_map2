// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bS' to 'SearchCardBlock'
// - Renamed export 'E4' to 'SearchWebBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 417891
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var u = {
    text: "text-EzDRRo",
    container: "container-CkaliT",
    img: "img-K4AS4J",
    sitename: "sitename-fWrsTf",
    point: "point-eprJWU",
    summary: "summary-IgQ9Uf"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      classname: t,
      data: n,
      onTrackEvent: i,
      onClick: r
    } = e;
    let [s, h] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let {
      sitename: v,
      logo_url: m,
      title: f,
      url: g
    } = n || {};
    let {
      hostname: _,
      trackParams: b
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = "";
      let t = "";
      try {
        if (g) {
          let i = new URL(g);
          e = i.hostname.split(".").slice(-2).join(".");
          if ((t = (i == null ? undefined : i.hostname) ?? "").startsWith("www.")) {
            t = t.slice(4);
          }
        }
      } catch (e) {}
      return {
        domain: e,
        hostname: t,
        trackParams: {
          web_url: g
        }
      };
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      if (h) {
        if (i != null) {
          i("search_web_show", b);
        }
      }
    }, [h]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: s,
      className: c(u.container, t),
      onClick: () => {
        if (i != null) {
          i("search_web_click", b);
        }
        if (g) {
          if (r) {
            r(g);
          } else {
            window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(g), null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$SZ*1Ne$Zta*pi$T$2$EZk$2RWb3liSFZh$Xp*cFlr-z$hb%-1T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
            }), "_blank");
          }
        }
      },
      children: [m && reactJsxRuntimeCoreReexport.jsx("img", {
        className: u.img,
        src: xssContentSanitizer.sanitizeUrl(m, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$SZ*1Ne$Zta*pi$T$2$EZk$2RWb3liSFZh$Xp*cFlr-z$hb%-1T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "flex items-center gap-4",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: u.sitename,
            children: v
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: u.point,
            children: "·"
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: u.text,
            children: _
          })]
        }), f && reactJsxRuntimeCoreReexport.jsx("div", {
          className: u.summary,
          children: f
        })]
      })]
    });
  };
  let v = e => ({
    handleClick: undefined
  });
  let m = e => {
    let {
      contentBlock: n,
      message: i
    } = e;
    return {
      onTrackEvent: (e, t) => {
        teaAnalyticsEventTracker.trackEvent(e, {
          bot_id: (i == null ? undefined : i.bot_id) ?? "",
          message_id: (i == null ? undefined : i.message_id) ?? "",
          conversation_id: (i == null ? undefined : i.conversation_id) ?? "",
          ...t
        });
      },
      querySearchData: n == null ? undefined : n.content_obj?.text_card
    };
  };
  let f = e => {
    let {
      inView: t,
      contentBlock: n,
      message: i
    } = e;
    if (!n || !i) {
      return null;
    }
    let {
      querySearchData: r,
      onTrackEvent: o
    } = m({
      contentBlock: n,
      message: i
    });
    let {
      handleClick: l
    } = v({
      searchCardData: r,
      message: i
    });
    return reactJsxRuntimeCoreReexport.jsx(h, {
      onClick: l,
      inView: t,
      data: r,
      onTrackEvent: o
    });
  };
  let g = e => {
    let {
      inView: n,
      contentBlock: r,
      message: o
    } = e;
    if (r && o && (r == null ? undefined : r.content_obj?.text_card)) {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        inView: n,
        data: r.content_obj.text_card,
        onTrackEvent: emptyExportFunction.emptyFunction
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SearchCardBlock: function () {
      return f;
    },
    SearchWebBlock: function () {
      return g;
    }
  });
}