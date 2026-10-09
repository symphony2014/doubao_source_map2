// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'arrayIsArrayUtil'
// - Resolved require(447761) to 'array-is-array-util'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'd' to 'resizeObserverHooks'
// - Resolved require(246619) to 'resize-observer-hooks'
// - Renamed variable 'c' to 'radioGroupComponent'
// - Resolved require(579832) to 'radio-group-component'
// - Renamed variable 'u' to 'radioComponentExport'
// - Resolved require(423497) to 'radio-component-export'
// - Renamed variable 'h' to 'stockMarketDataProcessor'
// - Resolved require(52824) to 'stock-market-data-processor'
// - Renamed variable 'p' to 'timePeriodConstants'
// - Resolved require(456979) to 'time-period-constants'
// - Renamed variable 'b' to 'stockStylesClassNames'
// - Resolved require(930245) to 'stock-styles-class-names'
// - Renamed variable 'f' to 'stockHeaderComponent'
// - Resolved require(595573) to 'stock-header-component'
// - Renamed variable 'v' to 'stockMarketChartDataProcessor'
// - Resolved require(57076) to 'stock-market-chart-data-processor'
// - Renamed variable 'm' to 'stockMarketDataCard'
// - Resolved require(784804) to 'stock-market-data-card'
// - Renamed variable 'g' to 'stockMarketChart'
// - Resolved require(568413) to 'stock-market-chart'
// - Renamed variable 'x' to 'cardWrapperComponent'
// - Resolved require(201819) to 'card-wrapper-component'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'isArray' (module 447761)
// - Updated imported property '$t' to 'processStockChartData' (module 57076)
// - Updated imported property 'cD' to 'calculateMovingAverages' (module 57076)
// - Updated imported property 'T' to 'timePeriods' (module 456979)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'y' to 'useResizeObserverEx' (module 246619)
// - Updated imported property 'j6' to 'parseKlineData' (module 52824)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'l' to 'CardWrapper' (module 201819)
// - Updated imported property 'Z' to 'StockHeader' (module 595573)
// - Updated imported property 'n' to 'StockMarketDataCard' (module 784804)
// - Updated imported property 'Z' to 'stockStyles' (module 930245)
// - Updated imported property 'Z' to 'RadioGroup' (module 579832)
// - Updated imported property 'ZP' to 'RadioComponent' (module 423497)
// - Updated imported property 'G' to 'stockChart' (module 568413)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92966.7b511855.js
         * chunkId: 92966
         * moduleId: 990888
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var radioGroupComponent = require("radio-group-component") /*id: 579832*/;
  var radioComponentExport = require("radio-component-export") /*id: 423497*/;
  var stockMarketDataProcessor = require("stock-market-data-processor") /*id: 52824*/;
  var timePeriodConstants = require("time-period-constants") /*id: 456979*/;
  var stockStylesClassNames = require("stock-styles-class-names") /*id: 930245*/;
  var stockHeaderComponent = require("stock-header-component") /*id: 595573*/;
  var stockMarketChartDataProcessor = require("stock-market-chart-data-processor") /*id: 57076*/;
  var stockMarketDataCard = require("stock-market-data-card") /*id: 784804*/;
  var stockMarketChart = require("stock-market-chart") /*id: 568413*/;
  var cardWrapperComponent = require("card-wrapper-component") /*id: 201819*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function k(e, t) {
    let r = e == null ? undefined : e.find(e => (e == null ? undefined : e.name) === t);
    return (r == null ? undefined : r.value) ?? "";
  }
  function E(e) {
    let t = (e || "").trim();
    if (!t) {
      return [];
    }
    let i = t.split(";").map(e => e.trim()).filter(Boolean);
    let r = [];
    i.forEach(e => {
      let t = e.split(",").map(e => e.trim());
      let i = /^\d{4}\/[01]?\d\/[0-3]?\d$/;
      let n = -1;
      for (let e = 0; e < t.length; e++) {
        if (i.test(t[e])) {
          n = e;
          break;
        }
      }
      let o = n >= 0 ? t[n] : "";
      let a = (t[n + 1] || "").split(" ")[0] || "";
      let s = (t[n + 2] || "").toLowerCase();
      let l = s === "up" || s === "down" || s === "draw" ? n + 3 : n + 2;
      let d = t[l] || "0";
      let c = t[l + 1] || "0";
      let u = t[l + 2] || "0";
      let h = t[l + 3] || "0";
      let p = t[l + 4] || "0";
      let b = t[l + 5] || "0";
      let f = t[l + 6] || "";
      r.push([o, d, c, u, h, p, b, f, a]);
    });
    return r;
  }
  let w = e => {
    let {
      data: t,
      onTrackEvent: i
    } = e;
    let s = t == null ? undefined : t.display;
    let w = reactCoreLibraryReexport.useMemo(() => function (e) {
      var i;
      let p = (e == null ? undefined : e.tabloc) ?? {};
      let b = (p == null ? undefined : p.cur) ?? {};
      let f = (p == null ? undefined : p.list) ?? [];
      let v = (p == null ? undefined : p.tabtime) ?? [];
      let m = (e == null ? undefined : e.fromShow) ?? {};
      let g = (e == null ? undefined : e.toShow) ?? {};
      let x = (e == null ? undefined : e.update) ?? {};
      let y = (e == null ? undefined : e.seed_plugin_keyinfo) ?? {};
      let E = (e == null ? undefined : e.url) ?? "";
      let w = (e == null ? undefined : e.showLeftText) ?? "";
      let T = k(f, "昨收");
      let S = k(f, "今开");
      let N = k(f, "最高");
      let C = k(f, "最低");
      let R = {
        minute: ((v == null ? undefined : (i = v.find(e => (e == null ? undefined : e.name) === "分时")) === null || i === undefined ? undefined : i.data?.p) || "").split(";").map(e => e.trim()).filter(e => e).map(e => {
          let t = e.split(",");
          let i = (t[0] || "").replace(":", "").padStart(4, "0");
          let r = t[1] || "0";
          return `${i} ${r} 0 0`;
        }),
        detail: {
          pre_close: String(T || "")
        }
      };
      let j = function (e) {
        let t = new Date(Number(e || 0) * 1000);
        let i = t.getFullYear();
        let r = String(t.getMonth() + 1).padStart(2, "0");
        let n = String(t.getDate()).padStart(2, "0");
        let o = String(t.getHours()).padStart(2, "0");
        let a = String(t.getMinutes()).padStart(2, "0");
        let s = String(t.getSeconds()).padStart(2, "0");
        return `${i}-${r}-${n} ${o}:${a}:${s}`;
      }(String((x == null ? undefined : x.uptime) || ""));
      return {
        display: [{
          display: {
            open_price: String(S || ""),
            high_price: String(N || ""),
            low_price: String(C || ""),
            market_value: "—",
            trade_volume: "—",
            pe: "—",
            change: function (e) {
              let t = String(e || "").trim();
              if (t) {
                if (t.startsWith("+") || t.startsWith("-")) {
                  return t;
                } else {
                  return `+${t}`;
                }
              } else {
                return "";
              }
            }(b == null ? undefined : b.range),
            change_rate: String((b == null ? undefined : b.per) || ""),
            class: `${String((m == null ? undefined : m.signal) || "")}/${String((g == null ? undefined : g.signal) || "")}`,
            code: `${m.signal}${g.signal}`,
            detail: String(E || ""),
            keyword: String((y == null ? undefined : y.keyword) || ""),
            market: "forex",
            minutes_data: R,
            name: String((p == null ? undefined : p.name) || ""),
            pre_close_price: String(T || ""),
            price: String((b == null ? undefined : b.num) || ""),
            securities: String((y == null ? undefined : y.keyword) || ""),
            show_name: String(w || ""),
            source: String((y == null ? undefined : y.source) || ""),
            status: String((b == null ? undefined : b.status) || ""),
            symbol: `${m.signal}${g.signal}`,
            time_str: j,
            timestamp: String((x == null ? undefined : x.uptime) || ""),
            title: `${m.name}\u{5151}${g.name}`,
            trade_value: "—",
            unit: String((b == null ? undefined : b.unit) || ""),
            stock_type: "forex"
          }
        }]
      };
    }(s), [s]);
    let T = reactCoreLibraryReexport.useMemo(() => {
      let e = arrayIsArrayUtil.isArray(w.display) ? w.display : [{
        display: w.display
      }];
      return stockMarketChartDataProcessor.processStockChartData(e);
    }, [w]);
    let [S, N] = reactCoreLibraryReexport.useState([0]);
    let [C, R] = reactCoreLibraryReexport.useState(timePeriodConstants.timePeriods.REALTIME);
    let [j, $] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    let _ = reactCoreLibraryReexport.useRef(null);
    let {
      width: O
    } = resizeObserverHooks.useResizeObserverEx({
      ref: _
    });
    let P = reactCoreLibraryReexport.useMemo(() => !!O && !!(O < 392), [O]);
    let M = reactCoreLibraryReexport.useCallback(e => {
      _.current = e;
      j(e);
    }, [j]);
    let {
      chartDataGetter: D,
      stockInfo: Z,
      stockPriceRange: F
    } = T[0] || {};
    reactCoreLibraryReexport.useEffect(() => {
      let n = function (e) {
        var i;
        var n;
        var a;
        let s = e == null ? undefined : (i = e.find(e => (e == null ? undefined : e.name) === "日K")) === null || i === undefined ? undefined : i.data?.p;
        let l = e == null ? undefined : (n = e.find(e => (e == null ? undefined : e.name) === "周K")) === null || n === undefined ? undefined : n.data?.p;
        let d = e == null ? undefined : (a = e.find(e => (e == null ? undefined : e.name) === "月K")) === null || a === undefined ? undefined : a.data?.p;
        let c = ["date", "open_price", "close_price", "high_price", "low_price", "trade_volume", "trade_value", "turnover_rate", "change_rate"];
        let u = stockMarketDataProcessor.parseKlineData(E(s), c);
        let p = stockMarketDataProcessor.parseKlineData(E(l), c);
        let b = stockMarketDataProcessor.parseKlineData(E(d), c);
        return {
          day: stockMarketChartDataProcessor.calculateMovingAverages(u),
          week: stockMarketChartDataProcessor.calculateMovingAverages(p),
          month: stockMarketChartDataProcessor.calculateMovingAverages(b)
        };
      }(s == null ? undefined : s.tabloc?.tabtime);
      if (n == null ? undefined : n.day?.length) {
        D.setChartData(timePeriodConstants.timePeriods.DAY, n.day);
      }
      if (n == null ? undefined : n.week?.length) {
        D.setChartData(timePeriodConstants.timePeriods.WEEK, n.week);
      }
      if (n == null ? undefined : n.month?.length) {
        D.setChartData(timePeriodConstants.timePeriods.MONTH, n.month);
      }
      I(e => (e == null ? undefined : e.length) ? e : D.getRealTimeChartData());
    }, [s]);
    reactCoreLibraryReexport.useEffect(() => {
      N([0]);
      R(timePeriodConstants.timePeriods.REALTIME);
      I(D.getRealTimeChartData());
    }, []);
    let [z, I] = reactCoreLibraryReexport.useState(D.getRealTimeChartData());
    let B = D.getChartKTabsData();
    let {
      infoProps: A,
      headerProps: L,
      customInterval: W,
      price: V,
      stockSourceName: G,
      detail: U
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        name: e,
        title: t,
        open_price: i,
        high_price: r,
        low_price: n,
        market_value: o,
        trade_value: a,
        trade_volume: s,
        pe: l,
        detail: d,
        code: c,
        pre_close_price: u,
        price: h,
        stock_type: p,
        unit: b,
        change: f,
        change_rate: v,
        timeStr: m = "",
        status: g,
        symbol: x,
        show_name: y,
        source: k
      } = Z ?? {};
      let E = 3;
      if (F) {
        let e = F[1] - F[0];
        if (e > 40) {
          E = 15;
        } else if (e > 30) {
          E = 10;
        } else if (e > 20) {
          E = 5;
        } else if (e > 10) {
          E = 3;
        } else if (e < 5) {
          E = 1;
        }
        if (e < 0.005) {
          E = 0.0005;
        } else if (e < 0.02) {
          E = 0.001;
        } else if (e < 0.05) {
          E = 0.005;
        }
      }
      return {
        detail: d,
        infoProps: {
          openPrice: i,
          highPrice: r,
          lowPrice: n,
          marketValue: o,
          tradeValue: a,
          tradeVolume: s,
          pe: l,
          preClosePrice: u
        },
        headerProps: {
          status: g,
          symbol: x,
          name: e,
          title: t,
          code: c,
          stockType: p,
          timeStr: m,
          price: h,
          unit: b,
          change: f,
          changeRate: v
        },
        customInterval: E,
        preClosePrice: u,
        price: h,
        stockSourceName: y,
        stockSource: k
      };
    }, [Z, F]);
    let H = reactCoreLibraryReexport.useCallback(() => {
      if (U) {
        if (i != null) {
          i("venue_card_click", {
            click_option: "click_detail"
          });
        }
        window.open(xssContentSanitizer.sanitizeUrl(U, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haWl-za*9Xa2RT-0dKcE1XbFpXRT$z$ERK-WRtTnRWalJN$0ZKN$ds-zFhMHd5-khW-$IxWTB%Rz$TZW1WSFJub*FNM$o2"
        }), "_blank");
      }
    }, [U, i]);
    let X = reactCoreLibraryReexport.useMemo(() => {
      let e = O ?? 0;
      if (e <= 360) {
        return 4;
      } else if (e <= 460) {
        return 6;
      } else {
        return 8;
      }
    }, [O]);
    let Y = async e => {
      let t = B[e].key;
      if (i != null) {
        i("venue_card_click", {
          click_option: `click_tab_${t}`
        });
      }
      let r = await D.getChartData(t);
      R(t);
      I(r);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if ($) {
        if (i != null) {
          i("venue_card_show", {});
        }
      }
    }, [$]);
    return reactJsxRuntimeCoreReexport.jsxs(cardWrapperComponent.CardWrapper, {
      classname: "!max-w-460 min-w-334",
      cardStyle: {
        background: "var(--dbx-bg-body-overlay-web) !important",
        padding: P ? "14px 16px" : "22px 24px"
      },
      ref: M,
      header: reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(U && "cursor-pointer"),
        onClick: U ? H : undefined,
        children: reactJsxRuntimeCoreReexport.jsx(stockHeaderComponent.StockHeader, {
          ...L,
          shouldShowTabs: false,
          tabIndex: 0,
          isMobile: P,
          hideStatus: true,
          hideUnit: true,
          isForex: true
        })
      }),
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(U && "cursor-pointer"),
        onClick: U ? H : undefined,
        children: reactJsxRuntimeCoreReexport.jsx(stockMarketDataCard.StockMarketDataCard, {
          ...A,
          showMultiCol: !!O && !!(O >= 706),
          isMobile: P,
          compact: true
        })
      }),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: stockStylesClassNames.stockStyles["stock-tab"],
        onClick: e => e.stopPropagation(),
        children: reactJsxRuntimeCoreReexport.jsx(radioGroupComponent.RadioGroup, {
          className: l(stockStylesClassNames.stockStyles["radio-group-time"], P && stockStylesClassNames.stockStyles["radio-group-time-mobile"]),
          value: String(S[0]),
          type: "button",
          buttonSize: "large",
          onChange: e => {
            let t = [parseInt(e.target.value, 10)];
            N(t);
            Y(t[0]);
          },
          children: B.map((e, t) => {
            let {
              title: i
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(radioComponentExport.RadioComponent, {
              addonClassName: l(stockStylesClassNames.stockStyles["radio-addon-time"], P ? "!w-full" : "!w-48"),
              value: String(t),
              children: i
            });
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: stockStylesClassNames.stockStyles.charts,
        children: reactJsxRuntimeCoreReexport.jsx(stockMarketChart.stockChart, {
          kType: C,
          data: z,
          price: V,
          options: {
            customInterval: W,
            compactTooltips: true,
            xTickCount: X
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: l("flex gap-6 items-center"),
        children: G && reactJsxRuntimeCoreReexport.jsxs("span", {
          className: l("text-dbx-text-tertiary", "text-12 leading-18", U && "cursor-pointer"),
          onClick: U ? H : undefined,
          children: ["数据来自", G]
        })
      })]
    });
  };
  exports.default = w;
  require.r(exports);
  require.d(exports, {
    ForexTrendCard: function () {
      return w;
    }
  });
}