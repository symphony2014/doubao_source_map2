// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'writeTemplateItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42241.852052e1.js
         * chunkId: 42241
         * moduleId: 561161
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var v = {
    container: "container-eEEWEA",
    checked: "checked-GMbXVU",
    iconBox: "iconBox-D9wTAf",
    icon: "icon-VdW1UU",
    title: "title-UUvOMH",
    font: "font-ag9Dcx",
    desc: "desc-AVRDlo",
    description: "description-W0Dto8",
    write: "write-RX47yd",
    tag: "tag-lJyBdq",
    "container-background": "container-background-ZuMRfQ",
    breakWord: "breakWord-wzHRFQ",
    small: "small-j_Wz9V",
    smallBox: "smallBox-TVxDTt",
    header: "header-zTXFoT",
    cardMask: "cardMask-qAIKnm"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      icon_url: t,
      description: n,
      background_url: l,
      checked: g,
      show_name: w,
      value: C,
      genre: b,
      trackParams: _,
      tag: E,
      onClick: y,
      containerClassName: R,
      small: k = false
    } = e;
    let S = reactCoreLibraryReexport.useRef(null);
    let [T] = useIntersectionObserver.useIntersection(S, {
      threshold: 0.5
    });
    let [N, x] = reactCoreLibraryReexport.useState(false);
    let j = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId);
    let F = useLatestRef_1.useLatestRef({
      ..._,
      genre: b ?? null,
      content_detail: w,
      bot_id: (_ == null ? undefined : _.bot_id) || j
    });
    let M = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      teaAnalyticsEventTracker.trackEvent("write_type_show", {
        write_genre: w
      });
      teaAnalyticsEventTracker.trackEvent("show_suggested_content", F.current);
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (T && j) {
        M();
      }
    }, [T, j]);
    let A = reactCoreLibraryReexport.useRef(null);
    let H = () => {
      var e;
      if ((e = A.current) !== null && e !== undefined) {
        e.play();
      }
    };
    let O = () => {
      var e;
      if ((e = A.current) !== null && e !== undefined) {
        e.stop();
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: S,
      className: a(v.container, R, {
        [v.checked]: g,
        [v["container-background"]]: !t,
        [v.small]: k
      }),
      onClick: () => {
        teaAnalyticsEventTracker.trackEvent("write_type_click", {
          write_genre: w
        });
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", F.current);
        if (C && y) {
          y(C);
        }
      },
      "data-testid": "skill_page_write_template_item",
      onMouseOver: () => {
        H();
        x(true);
      },
      onMouseLeave: () => {
        O();
        x(false);
      },
      children: [t ? k ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: v.smallBox,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v.header,
          children: [reactJsxRuntimeCoreReexport.jsx("img", {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1RelNuQmtSM$-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
            }),
            draggable: false,
            className: v.icon
          }), reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
            className: v.title,
            ellipsis: {
              showTooltip: {
                renderTooltip: (e, t) => reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                  className: v.breakWord,
                  content: e,
                  children: t
                })
              }
            },
            "data-testid": "skill_page_write_template_item_title",
            children: w
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: v.description,
          children: reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
            ellipsis: {
              rows: 2,
              showTooltip: {
                renderTooltip: (e, t) => reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                  className: v.breakWord,
                  content: e,
                  children: t
                })
              }
            },
            children: n
          })
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: v.iconBox,
          children: reactJsxRuntimeCoreReexport.jsx("img", {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1RelNuQmtSM$-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
            }),
            draggable: false,
            className: v.icon
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(v.title, v.font),
          "data-testid": "skill_page_write_template_item_title",
          children: w
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: v.description,
          children: n
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: v.title,
          "data-testid": "skill_page_write_template_item_title",
          children: w
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: v.desc,
          children: n
        }), reactJsxRuntimeCoreReexport.jsx("img", {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1RelNuQmtSM$-w$1RKR2$WcERPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
          }),
          draggable: false,
          className: v.write
        })]
      }), E && reactJsxRuntimeCoreReexport.jsx("div", {
        className: v.tag,
        "data-testid": "skill_page_write_template_item_tag",
        children: E
      }), N && reactJsxRuntimeCoreReexport.jsx("div", {
        className: v.cardMask
      })]
    });
  };
  require.d(exports, {
    writeTemplateItem: function () {
      return g;
    }
  });
}