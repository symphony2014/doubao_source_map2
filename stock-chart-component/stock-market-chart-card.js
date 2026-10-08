// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'arrayIsArrayUtil'
// - Resolved require(447761) to 'array-is-array-util'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'resizeObserverHooks'
// - Resolved require(246619) to 'resize-observer-hooks'
// - Renamed variable 'd' to 'radioGroupComponent'
// - Resolved require(579832) to 'radio-group-component'
// - Renamed variable 'c' to 'radioComponentExport'
// - Resolved require(423497) to 'radio-component-export'
// - Renamed variable 'u' to 'timePeriodConstants'
// - Resolved require(456979) to 'time-period-constants'
// - Renamed variable 'h' to 'stockHeaderComponent'
// - Resolved require(595573) to 'stock-header-component'
// - Renamed variable 'p' to 'stockMarketChartDataProcessor'
// - Resolved require(57076) to 'stock-market-chart-data-processor'
// - Renamed variable 'b' to 'stockMarketDataCard'
// - Resolved require(784804) to 'stock-market-data-card'
// - Renamed variable 'f' to 'stockMarketChart'
// - Resolved require(568413) to 'stock-market-chart'
// - Renamed variable 'g' to 'cardWrapperComponent'
// - Resolved require(201819) to 'card-wrapper-component'
// - Renamed variable 'm' to 'stockStylesClassNames'
// - Resolved require(930245) to 'stock-styles-class-names'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'T' to 'timePeriods' (module 456979)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'y' to 'useResizeObserverEx' (module 246619)
// - Updated imported property '$t' to 'processStockChartData' (module 57076)
// - Updated imported property 'Z' to 'isArray' (module 447761)
// - Updated imported property 'l' to 'CardWrapper' (module 201819)
// - Updated imported property 'Z' to 'StockHeader' (module 595573)
// - Updated imported property 'n' to 'StockMarketDataCard' (module 784804)
// - Updated imported property 'Z' to 'stockStyles' (module 930245)
// - Updated imported property 'Z' to 'RadioGroup' (module 579832)
// - Updated imported property 'ZP' to 'RadioComponent' (module 423497)
// - Updated imported property 'G' to 'stockChart' (module 568413)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 120445
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var radioGroupComponent = require("radio-group-component") /*id: 579832*/;
  var radioComponentExport = require("radio-component-export") /*id: 423497*/;
  var timePeriodConstants = require("time-period-constants") /*id: 456979*/;
  var stockHeaderComponent = require("stock-header-component") /*id: 595573*/;
  var stockMarketChartDataProcessor = require("stock-market-chart-data-processor") /*id: 57076*/;
  var stockMarketDataCard = require("stock-market-data-card") /*id: 784804*/;
  var stockMarketChart = require("stock-market-chart") /*id: 568413*/;
  var cardWrapperComponent = require("card-wrapper-component") /*id: 201819*/;
  var stockStylesClassNames = require("stock-styles-class-names") /*id: 930245*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = {
    美股: "united_stock",
    港股: "hongkong_stock"
  };
  let y = e => {
    let {
      display: r = {}
    } = e.data ?? {};
    let {
      onTrackEvent: a
    } = e;
    let [y, k] = reactCoreLibraryReexport.useState(0);
    let [E, T] = reactCoreLibraryReexport.useState([0]);
    let [N, w] = reactCoreLibraryReexport.useState(timePeriodConstants.timePeriods.REALTIME);
    let [C, S] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    let j = reactCoreLibraryReexport.useRef(null);
    let {
      width: O
    } = resizeObserverHooks.useResizeObserverEx({
      ref: j
    });
    let R = reactCoreLibraryReexport.useMemo(() => !!O && !!(O < 392), [O]);
    let _ = reactCoreLibraryReexport.useCallback(e => {
      j.current = e;
      C(e);
    }, [C]);
    let P = reactCoreLibraryReexport.useMemo(() => stockMarketChartDataProcessor.processStockChartData(arrayIsArrayUtil.isArray(r) ? r : [{
      display: r
    }]), [r]);
    let M = P.map(e => e.tabConfig);
    let $ = P.length > 1;
    let {
      chartDataGetter: D,
      stockInfo: Z,
      stockPriceRange: I
    } = P[y];
    let [z, B] = reactCoreLibraryReexport.useState(D.getRealTimeChartData());
    let F = D.getChartKTabsData();
    let {
      infoProps: A,
      headerProps: L,
      customInterval: V,
      price: G,
      stockSourceName: U
    } = reactCoreLibraryReexport.useMemo(() => {
      let {
        name: e,
        title: t,
        open_price: r,
        high_price: i,
        low_price: n,
        market_value: o,
        trade_value: a,
        trade_volume: s,
        pe: l,
        detail: d,
        code: c,
        pre_close_price: h,
        price: p,
        stock_type: b,
        unit: f,
        change: g,
        change_rate: m,
        timeStr: v = "",
        status: x,
        symbol: y,
        show_name: k,
        source: E
      } = Z ?? {};
      T([0]);
      w(timePeriodConstants.timePeriods.REALTIME);
      B(D.getRealTimeChartData());
      let N = 3;
      if (I) {
        if (I[1] - I[0] > 40) {
          N = 15;
        } else if (I[1] - I[0] > 30) {
          N = 10;
        } else if (I[1] - I[0] > 20) {
          N = 5;
        } else if (I[1] - I[0] > 10) {
          N = 3;
        } else if (I[1] - I[0] < 5) {
          N = 1;
        }
      }
      return {
        detail: d,
        infoProps: {
          openPrice: r,
          highPrice: i,
          lowPrice: n,
          marketValue: o,
          tradeValue: a,
          tradeVolume: s,
          pe: l,
          preClosePrice: h
        },
        headerProps: {
          status: x,
          symbol: y,
          name: e,
          title: t,
          code: c,
          stockType: b,
          timeStr: v,
          price: p,
          unit: f,
          change: g,
          changeRate: m
        },
        customInterval: N,
        preClosePrice: h,
        price: p,
        stockSourceName: k,
        stockSource: E
      };
    }, [y]);
    let W = async e => {
      let t = F[e].key;
      if (a != null) {
        a("venue_card_click", {
          click_option: `click_tab_${t}`
        });
      }
      let r = await D.getChartData(t);
      w(t);
      B(r);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (S) {
        if (a != null) {
          a("venue_card_show", {});
        }
      }
    }, [S]);
    return reactJsxRuntimeCoreReexport.jsxs(cardWrapperComponent.CardWrapper, {
      classname: "!max-w-full min-w-334",
      cardClassName: "!max-w-full",
      cardStyle: {
        background: "var(--dbx-bg-body-overlay-web) !important",
        padding: R ? "14px 16px" : "22px 24px 24px"
      },
      ref: _,
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [reactJsxRuntimeCoreReexport.jsx(stockHeaderComponent.StockHeader, {
          ...L,
          shouldShowTabs: $,
          tabData: M,
          tabIndex: y,
          onChange: e => {
            k(e);
            let t = x[M[e].marketName];
            if (a != null) {
              a("venue_card_click", {
                click_option: `click_market_${t}`
              });
            }
          },
          isMobile: R
        }), reactJsxRuntimeCoreReexport.jsx(stockMarketDataCard.StockMarketDataCard, {
          ...A,
          showMultiCol: !!O && !!(O >= 706),
          isMobile: R
        })]
      }),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: stockStylesClassNames.stockStyles["stock-tab"],
        onClick: e => e.stopPropagation(),
        children: reactJsxRuntimeCoreReexport.jsx(radioGroupComponent.RadioGroup, {
          className: s(stockStylesClassNames.stockStyles["radio-group-time"], R && stockStylesClassNames.stockStyles["radio-group-time-mobile"]),
          defaultValue: String(E[0]),
          value: String(E[0]),
          type: "button",
          buttonSize: "large",
          onChange: e => {
            let t = [parseInt(e.target.value, 10)];
            T(t);
            W(t[0]);
          },
          children: F.map((e, t) => {
            let {
              title: r
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(radioComponentExport.RadioComponent, {
              addonClassName: s(stockStylesClassNames.stockStyles["radio-addon-time"], R ? "!w-full" : "!w-48"),
              value: String(t),
              children: r
            });
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: stockStylesClassNames.stockStyles.charts,
        children: reactJsxRuntimeCoreReexport.jsx(stockMarketChart.stockChart, {
          kType: N,
          data: z,
          price: G,
          options: {
            customInterval: V
          }
        })
      }), U && reactJsxRuntimeCoreReexport.jsxs("span", {
        className: s("text-dbx-text-tertiary", "text-12 leading-18"),
        children: ["数据来自", U]
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    StockCard: function () {
      return y;
    }
  });
}