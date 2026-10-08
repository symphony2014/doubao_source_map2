// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'stockChart'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 568413
         */
module.exports = function (module, exports, require) {
  var i;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var moduleReexportWrapper = require("module-reexport-wrapper") /*id: 617542*/;
  var numberFormatUtils = require("number-format-utils") /*id: 769192*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var chartSeriesComponentsModule = require("chart-series-components-module") /*id: 660248*/;
  var stockMarketChartDataProcessor = require("stock-market-chart-data-processor") /*id: 57076*/;
  var toutiaoSearchConstants = require("toutiao-search-constants") /*id: 937588*/;
  let h = {
    color: toutiaoSearchConstants.whiteColor,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: 400,
    alignToAxis: true
  };
  let p = {
    borderRadius: 10,
    offset: 6,
    padding: [6, 8],
    borderWidth: 0.5,
    borderColor: toutiaoSearchConstants.transparentColor
  };
  function b(e, t = 4) {
    if (!Number.isFinite(e) || e <= 0) {
      return 1;
    }
    let r = e / Math.max(1, t);
    let i = Math.pow(10, Math.floor(Math.log10(r)));
    let n = r / i;
    let o = 1;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
  }
  function f(e, t) {
    switch (e) {
      case "MA5":
        if (t) {
          return "rgba(203, 126, 245, 1)";
        } else {
          return "rgba(151, 67, 195, 1)";
        }
      case "MA10":
        if (t) {
          return "rgba(55, 141, 255, 1)";
        } else {
          return "rgba(0, 101, 253, 1)";
        }
      case "MA20":
        return "rgba(255, 149, 0, 1)";
      default:
        return "";
    }
  }
  var timePeriodConstants = require("time-period-constants") /*id: 456979*/;
  var stockStylesClassNames = require("stock-styles-class-names") /*id: 930245*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (i = x || {}).OPEN = "open";
  i.HIGH = "high";
  i.LOW = "low";
  i.CLOSE = "close";
  i.VOLUME = "volume";
  var x = i;
  let y = [{
    key: x.OPEN,
    value: "开盘"
  }, {
    key: x.CLOSE,
    value: "收盘"
  }, {
    key: x.HIGH,
    value: "最高"
  }, {
    key: x.LOW,
    value: "最低"
  }, {
    key: x.VOLUME,
    value: "成交量"
  }];
  let k = (e, t, r) => {
    let {
      points: i,
      title: n
    } = e;
    let a = i[0].seriesType === "area";
    let {
      changeRate: l = "",
      timeStr: d = ""
    } = i[0].data;
    let c = (e, t) => t === x.VOLUME ? `${numberFormatUtils.formatNumber(e / 1000000, 1)}M` : isNaN(Number(e)) ? String(e) : numberFormatUtils.formatNumber(Number(e), r ?? 2);
    if (a) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("flex flex-col", t ? "bg-dbx-bg-browser-win" : "bg-dbx-bg-float"),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center justify-between",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: o(stockStylesClassNames.stockStyles["tooltip-text"], "text-dbx-text-primary", "pr-4"),
            children: numberFormatUtils.formatNumber(Number(i[0].value), r ?? 2)
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: o(stockStylesClassNames.stockStyles["tooltip-text"], "text-dbx-text-primary"),
            children: l
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(stockStylesClassNames.stockStyles["tooltip-text"], "text-dbx-text-tertiary"),
          children: [d, " ", n]
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("flex flex-col gap-2", t ? "bg-dbx-bg-browser-win" : "bg-dbx-bg-float"),
        children: [y.filter(e => {
          let t = i[0].data[e.key];
          if (e.key === x.VOLUME) {
            return isFinite(Number(t));
          } else {
            return t != null && !isNaN(Number(t));
          }
        }).map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex justify-between gap-8",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: o(stockStylesClassNames.stockStyles["tooltip-text"], "text-dbx-text-secondary", "pr-4"),
            children: e.value
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: o(stockStylesClassNames.stockStyles["tooltip-text"], "text-dbx-text-primary"),
            children: c(i[0].data[e.key], e.key)
          })]
        })), reactJsxRuntimeCoreReexport.jsx("span", {
          className: o(stockStylesClassNames.stockStyles["tooltip-text"], "text-dbx-text-tertiary"),
          children: n
        })]
      });
    }
  };
  let E = (e, t, r) => {
    let {
      name: i
    } = e;
    if (stockMarketChartDataProcessor.movingAverageIndicators.includes(i)) {
      let e = t[i];
      let n = typeof e == "number" ? numberFormatUtils.formatNumber(e, 2) : "--";
      return `<hbox color="${f(i, r)}">${i}: ${n}</hbox>`;
    }
    return `<hbox color="${r ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}">\u{5747}\u{7EBF}</hbox>`;
  };
  let T = e => {
    var t;
    var r;
    let {
      data: i,
      price: n,
      options: o,
      kType: m = timePeriodConstants.timePeriods.REALTIME
    } = e;
    if (!i) {
      return null;
    }
    let {
      customInterval: x,
      compactTooltips: y = false
    } = o ?? {};
    let T = o == null ? undefined : o.xTickCount;
    let N = ((r = document.documentElement) === null || r === undefined ? undefined : (t = r.getAttribute) === null || t === undefined ? undefined : t.call(r, "data-theme")) || "light";
    if (m === timePeriodConstants.timePeriods.REALTIME) {
      return reactJsxRuntimeCoreReexport.jsx(moduleReexportWrapper.default, {
        option: function (e) {
          let {
            data: t,
            customInterval: r = 3,
            avePrice: i = "",
            renderTooltips: n,
            xTickCount: o,
            isDark: a = false
          } = e;
          let {
            LinearGradient: c
          } = chartSeriesComponentsModule.element;
          let f = new c({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            stops: [{
              offset: 0,
              color: "rgba(150, 208, 255, 0.2)"
            }, {
              offset: 1,
              color: "rgba(150, 208, 255, 0)"
            }]
          });
          let g = (t ?? []).map(e => Number(e.high || 0));
          let m = Math.min(...g);
          let v = Math.max(...g);
          let x = isFinite(m) && isFinite(v) ? v - m : 0;
          let y = x < 0.01 ? 5 : x < 0.1 ? 4 : 2;
          let k = Number.isFinite(m) ? m : undefined;
          let E = Number.isFinite(v) ? v : undefined;
          let T = Number.isFinite(x) && x > 0 ? b(x, 4) : r;
          return {
            data: t,
            colors: [a ? "#378DFF" : "#0065FD"],
            legend: {
              show: false
            },
            padding: [22, 18],
            xAxis: {
              type: "category",
              tickLine: {
                show: false
              },
              interval: typeof o == "number" && o > 0 ? Math.max(1, Math.floor((t.length - 1) / o)) : 120,
              axisLine: {
                show: false,
                stroke: toutiaoSearchConstants.transparentColor
              },
              axisLabel: {
                ...h,
                offsetX: -3,
                color: a ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
                margin: 6
              }
            },
            yAxis: {
              type: "value",
              tickLine: {
                show: false
              },
              axisLabel: {
                ...h,
                color: a ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
                margin: 6,
                formatter: e => isNaN(Number(e)) ? String(e) : numberFormatUtils.formatNumber(Number(e), y)
              },
              gridLine: {
                show: true,
                stroke: a ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.07)",
                lineWidth: 0.5
              },
              softMax: E,
              softMin: k,
              interval: T,
              markLines: [{
                value: Number(i),
                trigger: "line",
                lineStyle: {
                  lineDash: [8, 4],
                  stroke: a ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                  lineWidth: 1
                }
              }]
            },
            tooltip: {
              ...p,
              borderColor: a ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              backgroundColor: a ? "rgba(48, 48, 48, 1)" : "rgba(255, 255, 255, 1)",
              crosshairs: {
                type: "cross",
                lineStyle: {
                  stroke: a ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
                  lineWidth: 1,
                  lineDash: [2]
                },
                label: {
                  show: true,
                  padding: [5, 5],
                  formatter: e => {
                    let {
                      value: t
                    } = e;
                    if (isNaN(Number(t))) {
                      return t;
                    } else {
                      return numberFormatUtils.formatNumber(Number(t), y);
                    }
                  },
                  backgroundStyle: {
                    fill: a ? "rgba(77, 77, 77, 1)" : "rgba(239, 239, 239, 1)",
                    borderRadius: 4
                  },
                  textStyle: {
                    color: a ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
                    fontSize: 11,
                    lineHeight: 16,
                    fontWeight: 400
                  }
                }
              },
              formatter: e => n == null ? undefined : n(e, a, y),
              customRenderer: e => new e.ReactTooltipRenderer(reactDomEntryWrapper)
            },
            series: [{
              type: "area",
              name: "value",
              encode: {
                x: "timestamp",
                y: "high"
              },
              areaStyle: {
                fillOpacity: 1,
                fill: f
              },
              lineStyle: {
                lineJoin: "miter",
                lineWidth: 1
              },
              hover: {
                marker: {
                  symbol: "circle",
                  fill: a ? "#378DFF" : "#0065FD",
                  size: 8,
                  stroke: a ? "#010711" : "#fff",
                  lineWidth: 1
                }
              }
            }]
          };
        }({
          data: i,
          customInterval: x,
          avePrice: n,
          renderTooltips: k,
          xTickCount: T,
          isDark: N === "dark"
        }),
        style: {
          height: 200,
          marginBottom: -20
        }
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(moduleReexportWrapper.default, {
        option: function (e) {
          let {
            data: i,
            renderTooltips: n,
            renderLegend: o,
            isDark: a = false
          } = e;
          let d = (i ?? []).map(e => Number(e.high || 0));
          let g = (i ?? []).map(e => Number(e.low || 0));
          let m = Math.max(...d);
          let v = Math.min(...g);
          let x = isFinite(v) && isFinite(m) ? m - v : 0;
          let y = x < 0.01 ? 5 : x < 0.1 ? 4 : 2;
          let k = x > 0 ? b(x, 4) : undefined;
          let E = Number(i[i.length - 1]?.close ?? 0);
          return {
            data: i,
            padding: [8, 18, 16],
            legend: {
              show: true,
              position: "top",
              align: "start",
              height: 0,
              itemHeight: 22,
              margin: 12,
              itemGap: [12, 0],
              icon: {
                symbol: "none",
                margin: 0,
                size: 0
              },
              textStyle: {
                rich: true
              },
              formatter: e => o == null ? undefined : o(e, i[i.length - 1], a)
            },
            tooltip: {
              ...p,
              borderColor: a ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              backgroundColor: a ? "rgba(48, 48, 48, 1)" : "rgba(255, 255, 255, 1)",
              crosshairs: {
                type: "cross",
                lineStyle: {
                  stroke: a ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
                  lineWidth: 1,
                  lineDash: [2]
                },
                label: {
                  show: true,
                  padding: [5, 5],
                  formatter: e => {
                    let {
                      value: t
                    } = e;
                    if (isNaN(Number(t))) {
                      return t;
                    } else {
                      return Number(t).toFixed(y);
                    }
                  },
                  backgroundStyle: {
                    fill: a ? "rgba(77, 77, 77, 1)" : "rgba(239, 239, 239, 1)",
                    borderRadius: 4
                  },
                  textStyle: {
                    color: a ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
                    fontSize: 11,
                    lineHeight: 16,
                    fontWeight: 400
                  }
                }
              },
              formatter: e => n == null ? undefined : n(e, a, y),
              customRenderer: e => new e.ReactTooltipRenderer(reactDomEntryWrapper)
            },
            dataZoom: [{
              axis: "x"
            }],
            xAxis: {
              type: "category",
              tickLine: {
                show: false
              },
              axisLine: {
                show: false,
                stroke: toutiaoSearchConstants.transparentColor
              },
              axisLabel: {
                ...h,
                offsetX: -6,
                color: a ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
                margin: 6
              },
              interval: Math.max(1, Math.floor((i.length - 3) / 2)),
              minInterval: 1
            },
            yAxis: {
              type: "value",
              softMin: null,
              axisLabel: {
                ...h,
                color: a ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.35)",
                margin: 6,
                formatter: e => isNaN(Number(e)) ? String(e) : numberFormatUtils.formatNumber(Number(e), y)
              },
              gridLine: {
                show: true,
                stroke: a ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.07)",
                lineWidth: 0.5
              },
              interval: k,
              markLines: [{
                value: E,
                trigger: "line",
                lineStyle: {
                  lineDash: [8, 4],
                  stroke: a ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                  lineWidth: 1
                }
              }]
            },
            series: [{
              type: "candlestick",
              name: "candle",
              upColor: a ? "rgba(255, 127, 112, 1)" : "rgba(224, 0, 7, 1)",
              downColor: a ? "rgba(137, 253, 143, 1)" : "rgba(27, 161, 51, 1)",
              encode: {
                x: "date",
                y: ["open", "close", "high", "low"]
              }
            }, ...stockMarketChartDataProcessor.movingAverageIndicators.map(e => ({
              type: "line",
              name: e,
              marker: {
                show: false
              },
              hover: {
                marker: {
                  show: false
                },
                lineStyle: {
                  lineWidth: 1
                }
              },
              encode: {
                x: "date",
                y: e
              },
              lineStyle: {
                lineWidth: 0.5,
                stroke: f(e, a),
                pointerEvents: "none"
              }
            }))]
          };
        }({
          data: i,
          renderTooltips: y ? (e, t, r) => k({
            ...e,
            points: e.points.map(e => ({
              ...e,
              data: {
                ...e.data,
                volume: undefined
              }
            }))
          }, t, r) : k,
          renderLegend: E,
          isDark: N === "dark"
        }),
        style: {
          height: 200,
          marginBottom: -20
        }
      });
    }
  };
  require.d(exports, {
    stockChart: function () {
      return T;
    }
  });
}