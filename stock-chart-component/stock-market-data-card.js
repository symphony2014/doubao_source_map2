// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'StockMarketDataCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 784804
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var stockMarketDataProcessor = require("stock-market-data-processor") /*id: 52824*/;
  var stockStylesClassNames = require("stock-styles-class-names") /*id: 930245*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      data: t,
      isMobile: r,
      comparedValue: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex w-1/2 flex-col gap-4",
      children: t.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n("flex gap-12", stockStylesClassNames.stockStyles["stock-info-item"], r && stockStylesClassNames.stockStyles["stock-info-item-mobile"]),
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: n("text-dbx-text-secondary", "flex-1"),
          children: e.key
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: n("text-dbx-text-primary", stockStylesClassNames.stockStyles["stock-info-item-value"], {
            "!text-dbx-color-red-600": e.showStatus && stockMarketDataProcessor.compareStockDirection(e.value, i) === "up",
            "!text-dbx-color-green-700": e.showStatus && stockMarketDataProcessor.compareStockDirection(e.value, i) === "down"
          }),
          children: e.value + (e.suffix || "")
        })]
      }))
    });
  };
  let c = e => {
    let {
      openPrice: t,
      highPrice: r,
      lowPrice: i,
      marketValue: a,
      tradeValue: c,
      pe: u,
      tradeVolume: h,
      preClosePrice: p,
      showMultiCol: b,
      isMobile: f,
      compact: g = false
    } = e;
    let m = g ? [[{
      key: "今开",
      value: t,
      showStatus: true
    }, {
      key: "昨收",
      value: p
    }], [{
      key: "最高",
      value: r,
      showStatus: true
    }, {
      key: "最低",
      value: i,
      showStatus: true
    }]] : [[{
      key: "今开",
      value: t,
      showStatus: true
    }, {
      key: "昨收",
      value: p
    }], [{
      key: "最高",
      value: r,
      showStatus: true
    }, {
      key: "最低",
      value: i,
      showStatus: true
    }], [{
      key: "成交量",
      value: c,
      suffix: "股"
    }, {
      key: "成交额",
      value: h
    }], [{
      key: "市值",
      value: a
    }, {
      key: "市盈率",
      value: u
    }]];
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: n(stockStylesClassNames.stockStyles["stock-info"], f ? "gap-12" : "gap-16", "mt-4"),
      children: b ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(d, {
          data: m[0],
          comparedValue: p
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex items-center",
          children: reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
            layout: "vertical",
            className: "!h-full !max-h-84 bg-dbx-line-7"
          })
        }), reactJsxRuntimeCoreReexport.jsx(d, {
          data: m[1],
          comparedValue: p
        }), !g && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex items-center",
            children: reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
              layout: "vertical",
              className: "!h-full !max-h-84 bg-dbx-line-7"
            })
          }), reactJsxRuntimeCoreReexport.jsx(d, {
            data: m[2],
            comparedValue: p
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex items-center",
            children: reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
              layout: "vertical",
              className: "!h-full !max-h-84 bg-dbx-line-7"
            })
          }), reactJsxRuntimeCoreReexport.jsx(d, {
            data: m[3],
            comparedValue: p
          })]
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(d, {
          data: g ? [...m[0]] : [...m[0], ...m[2]],
          isMobile: f,
          comparedValue: p
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex items-center",
          children: reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
            layout: "vertical",
            className: "!h-full !max-h-84 bg-dbx-line-7"
          })
        }), reactJsxRuntimeCoreReexport.jsx(d, {
          data: g ? [...m[1]] : [...m[1], ...m[3]],
          isMobile: f,
          comparedValue: p
        })]
      })
    });
  };
  require.d(exports, {
    StockMarketDataCard: function () {
      return c;
    }
  });
}