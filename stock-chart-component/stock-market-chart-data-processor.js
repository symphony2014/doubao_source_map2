// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$t' to 'processStockChartData'
// - Renamed export 'eu' to 'movingAverageIndicators'
// - Renamed export 'cD' to 'calculateMovingAverages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 57076
         */
module.exports = function (module, exports, require) {
  var stockMarketDataProcessor = require("stock-market-data-processor") /*id: 52824*/;
  var timePeriodConstants = require("time-period-constants") /*id: 456979*/;
  function o(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class a {
    constructor(e, t) {
      o(this, "stockSource", undefined);
      o(this, "keyword", undefined);
      o(this, "data", undefined);
      o(this, "kTabs", undefined);
      o(this, "setChartData", (e, t) => {
        this.data[e] = t;
      });
      o(this, "getChartKTabsData", () => this.kTabs);
      o(this, "getRealTimeChartData", () => this.data.realtime);
      o(this, "getChartData", async e => {
        try {
          if (this.data[e].length > 0) {
            return this.data[e];
          }
          let {
            klinesData: t
          } = await stockMarketDataProcessor.fetchStockKlines(this.stockSource, this.keyword, e);
          let r = c(t);
          this.setChartData(e, r);
          return this.data[e];
        } catch (t) {
          return this.data[e];
        }
      });
      this.stockSource = e;
      this.keyword = t;
      this.data = {
        realtime: [],
        day: [],
        week: [],
        month: []
      };
      this.kTabs = [{
        title: "分时",
        key: timePeriodConstants.timePeriods.REALTIME,
        type: "real_time"
      }, {
        title: "日K",
        key: timePeriodConstants.timePeriods.DAY,
        type: "candle_stick"
      }, {
        title: "周K",
        key: timePeriodConstants.timePeriods.WEEK,
        type: "candle_stick"
      }, {
        title: "月K",
        key: timePeriodConstants.timePeriods.MONTH,
        type: "candle_stick"
      }];
    }
  }
  let s = {
    us: "美股",
    hk: "港股",
    sh: "上证",
    sz: "深证",
    bj: "A股"
  };
  let l = ["MA5", "MA10", "MA20"];
  function d(e) {
    return e.map(e => {
      let r = e.display;
      let {
        minutes_data: o,
        market: l,
        source: d,
        keyword: c,
        time_str: u
      } = r;
      r.tagName = s[l] || "";
      r.timeStr = u;
      let h = new a(d, c);
      let p = stockMarketDataProcessor.processMinuteData(o, u, r.pre_close_price);
      h.setChartData(timePeriodConstants.timePeriods.REALTIME, (p == null ? undefined : p.result) ?? []);
      let b = {
        market: s[l] || "",
        marketName: r.class
      };
      return {
        chartDataGetter: h,
        stockInfo: r,
        tabConfig: b,
        stockPriceRange: p.stockPriceRange
      };
    });
  }
  function c(e) {
    l.forEach(t => {
      let r = (() => {
        switch (t) {
          case "MA5":
          default:
            return 5;
          case "MA10":
            return 10;
          case "MA20":
            return 20;
        }
      })();
      for (let i = r - 1; i < e.length; i++) {
        let n = 0;
        for (let t = i - (r - 1); t <= i; t++) {
          n += e[t].close;
        }
        let o = n / r;
        e[i][t] = o;
      }
    });
    return e;
  }
  require.d(exports, {
    processStockChartData: function () {
      return d;
    },
    movingAverageIndicators: function () {
      return l;
    },
    calculateMovingAverages: function () {
      return c;
    }
  });
}