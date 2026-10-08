// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'StockHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 595573
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var radioGroupComponent = require("radio-group-component") /*id: 579832*/;
  var radioComponentExport = require("radio-component-export") /*id: 423497*/;
  var stockStylesClassNames = require("stock-styles-class-names") /*id: 930245*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var c = e => {
    let {
      name: t,
      title: r,
      timeStr: n,
      price: c,
      unit: u,
      change: h,
      changeRate: p,
      tabData: b,
      tabIndex: f,
      shouldShowTabs: g = false,
      onChange: m,
      isMobile: v = false,
      status: x,
      symbol: y,
      hideStatus: k = false,
      hideUnit: E = false,
      isForex: T = false
    } = e;
    let N = e => {
      let t = b == null ? undefined : b.findIndex(t => t.market === e);
      if (!isUndefinedCheck.isUndefined(t) && m != null) {
        m(t);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(stockStylesClassNames.stockStyles["stock-header"]),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(stockStylesClassNames.stockStyles["stock-header-title"], "text-dbx-text-primary"),
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          children: `${r || t}`
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: stockStylesClassNames.stockStyles["text-en"],
          children: `\u{FF08}${y}\u{FF09}`
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(stockStylesClassNames.stockStyles["stock-header-title-subtitle"], "text-dbx-text-secondary"),
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: stockStylesClassNames.stockStyles["text-en"],
          children: T ? n : function (e) {
            let [t, r] = e.split(" ");
            let i = t.split("-");
            let n = "";
            let o = "";
            if (i.length === 3) {
              n = i[1];
              o = i[2];
            } else {
              n = i[0];
              o = i[1];
            }
            let [a, s] = r.split(":");
            return `${n}-${o} ${a}:${s}`;
          }(n)
        }), !k && x && reactJsxRuntimeCoreReexport.jsx("span", {
          className: "ml-4",
          children: x
        })]
      }), g && reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: e => e.stopPropagation(),
        className: "mt-12",
        children: reactJsxRuntimeCoreReexport.jsx(radioGroupComponent.RadioGroup, {
          className: o(stockStylesClassNames.stockStyles["radio-group"], "!bg-dbx-fill-trans-20"),
          defaultValue: b == null ? undefined : b[0].market,
          value: b == null ? undefined : b[f].market,
          type: "button",
          buttonSize: "large",
          onChange: e => N(e.target.value),
          children: b == null ? undefined : b.map(e => reactJsxRuntimeCoreReexport.jsx(radioComponentExport.RadioComponent, {
            addonClassName: stockStylesClassNames.stockStyles["radio-addon"],
            className: "flex-1 p-0",
            value: e.market,
            children: e.marketName
          }))
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(stockStylesClassNames.stockStyles["stock-header-price"], v ? "h-40" : "h-62"),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(stockStylesClassNames.stockStyles["stock-header-price-title"], {
            [stockStylesClassNames.stockStyles["stock-header-price-title-mobile"]]: v,
            "!text-dbx-color-red-600": h.startsWith("+"),
            "!text-dbx-color-green-700": h.startsWith("-")
          }),
          children: c
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(stockStylesClassNames.stockStyles["stock-header-price-subtitle"], {
            [stockStylesClassNames.stockStyles["stock-header-price-subtitle-mobile"]]: v,
            "!text-dbx-color-red-600": h.startsWith("+"),
            "!text-dbx-color-green-700": h.startsWith("-")
          }),
          children: [!E && u && reactJsxRuntimeCoreReexport.jsx("span", {
            className: "mr-10",
            children: u
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: `${h}\u{FF08}${p}\u{FF09}`
          })]
        })]
      })]
    });
  };
  require.d(exports, {
    StockHeader: function () {
      return c;
    }
  });
}