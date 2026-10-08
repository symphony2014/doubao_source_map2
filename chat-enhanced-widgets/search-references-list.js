// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'SearchReferences'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 263161
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiCollapsibleComponent = require("semi-collapsible-component") /*id: 132644*/;
  var rtlChevronUpIcon = require("rtl-chevron-up-icon") /*id: 102393*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var h = {
    item: "item-k0EznQ",
    expand: "expand-gbXXJn",
    "expand-text": "expand-text-vAbQOf",
    "expand-icon": "expand-icon-IDoUjB"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      idx: t,
      text: n,
      url: o,
      className: i,
      searchType: s,
      onClick: d,
      onTrackEvent: c
    } = e;
    let [u, m] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (m) {
        if (c != null) {
          c("search_singlecard_show", {
            url: o,
            title: n,
            search_type: s,
            card_type: "doubao_search",
            content_type: "webpage",
            show_from: "chat",
            whether_use_deep_thinking: "yes"
          });
        }
      }
    }, [m]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: u,
      className: "w-full",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("mt-8 leading-normal tracking-[.45px] cursor-pointer", "text-15 text-ellipsis overflow-hidden", i, h.item),
        style: {
          textWrap: "nowrap"
        },
        onClick: () => {
          if (c != null) {
            c("search_singlecard_click", {
              url: o,
              title: n,
              search_type: s,
              card_type: "doubao_search",
              content_type: "webpage",
              click_from: "chat",
              whether_use_deep_thinking: "yes"
            });
          }
          d(o);
        },
        children: `${t}. ${n}`
      })
    });
  };
  let v = e => {
    let {
      item: u,
      index: m,
      searchType: h,
      firstReferenceClassName: v,
      onClick: f,
      onTrackEvent: g
    } = e;
    if (u.text_card) {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        idx: Number(u.text_card?.index || m + 1),
        text: u.text_card.title ?? "",
        url: u.text_card?.url ?? "",
        onClick: f,
        className: a({
          "mt-16": m === 0
        }, m === 0 && v),
        searchType: h,
        onTrackEvent: g
      }, m);
    } else if (u.video_card) {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        idx: Number(u.video_card?.index || m + 1),
        text: u.video_card?.video_captions ?? "",
        url: u.video_card?.main_site_url ?? "",
        onClick: f,
        className: a({
          "mt-16": m === 0
        }, m === 0 && v),
        searchType: h,
        onTrackEvent: g
      }, m);
    } else {
      return null;
    }
  };
  let f = e => {
    let {
      references: t,
      classname: n,
      firstReferenceClassName: l,
      childrenCollapse: i = true,
      searchType: a = "simple_search",
      onTrackEvent: p
    } = e;
    let [f, g] = reactCoreLibraryReexport.useState(false);
    let x = i18nTranslationUtils.useTranslationWithFallback();
    let k = e => {
      if (e) {
        window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(e), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBI$m14alF6RXdZ$WRzZFdFeWJI$mFl$*w2WTIxTmRsa3lPWFJq%npsM$ds-zFNRXd6%214-WJWWj$Xb*Mx-Wxw$E1Xc*lNal$3$2xjM%1Fd3liSFZh%jFZMFRHN$Nlb$ZI%m5s-%0xWj-"
        }));
      }
    };
    if (i) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n,
        children: [t.slice(0, 5).map((e, t) => reactJsxRuntimeCoreReexport.jsx(v, {
          item: e,
          index: t,
          onClick: k,
          searchType: a,
          firstReferenceClassName: l,
          onTrackEvent: p
        })), t.length > 5 && reactJsxRuntimeCoreReexport.jsx(semiCollapsibleComponent.Collapsible, {
          className: "-ml-4",
          isOpen: f,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "ml-4",
            children: t.slice(5).map((e, t) => reactJsxRuntimeCoreReexport.jsx(v, {
              item: e,
              index: t + 5,
              onClick: k,
              searchType: a,
              onTrackEvent: p
            }))
          })
        }), t.length > 5 && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: h.expand,
          onClick: () => {
            g(!f);
          },
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: h["expand-text"],
            children: x(f ? "web_search_deep_think_searchResult_showLess" : "web_search_deep_think_searchResult_showMore")
          }), f ? reactJsxRuntimeCoreReexport.jsx(rtlChevronUpIcon.ChevronUpIcon, {
            className: h["expand-icon"]
          }) : reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {
            className: h["expand-icon"]
          })]
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: n,
        children: t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(v, {
          item: e,
          index: t,
          onClick: k,
          searchType: a,
          firstReferenceClassName: l,
          onTrackEvent: p
        }))
      });
    }
  };
  require.d(exports, {
    SearchReferences: function () {
      return f;
    }
  });
}