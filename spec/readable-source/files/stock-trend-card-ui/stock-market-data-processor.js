// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Oi' to 'compareStockDirection'
// - Renamed export 'j6' to 'parseKlineData'
// - Renamed export 'p5' to 'fetchStockKlines'
// - Renamed export 'tz' to 'processMinuteData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 52824
         */
module.exports = function (module, exports, require) {
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var toutiaoSearchConstants = require("toutiao-search-constants") /*id: 937588*/;
  var numberFormatUtils = require("number-format-utils") /*id: 769192*/;
  function a(e, t, r) {
    let {
      minute: i
    } = e ?? {};
    let n = parseFloat(r || "0");
    if (!t) {
      return {};
    }
    let a = [];
    let [s] = t.split(" ");
    let l = new Date(s);
    l.setHours(0);
    l.setMinutes(0);
    l.setSeconds(0);
    l.setMilliseconds(0);
    let d = [Number.MAX_VALUE, 0];
    if (i != null) {
      i.forEach(e => {
        let t = e.split(" ");
        let r = t[0].substring(0, t[0].length === 4 ? 2 : 1).padStart(2, "0");
        let i = t[0].substring(t[0].length - 2);
        let l = parseFloat(t[1]);
        let c = parseInt(t[2], 10);
        let u = parseFloat(t[3]);
        if (c === 0) {
          u = (c = u) * l;
        }
        if (l < d[0]) {
          d[0] = l;
        }
        if (l > d[1]) {
          d[1] = l;
        }
        let h = (l - n) * 100 / n;
        let p = `${l >= n ? "+" : ""}${numberFormatUtils.formatNumber(h, 2)}%`;
        a.push({
          timestamp: `${r}:${i}`,
          open: l,
          close: l,
          high: l,
          low: l,
          volume: c,
          turnover: u,
          changeRate: p,
          timeStr: s
        });
      });
    }
    return {
      result: a,
      stockPriceRange: d
    };
  }
  function s(e, t) {
    let r = [];
    e.forEach((e, i) => {
      var n;
      let o = {};
      let a = {
        timestamp: 0,
        open: 0,
        close: 0,
        high: 0,
        low: 0,
        volume: 0,
        turnover: 0
      };
      for (let r = 0; r < t.length; r++) {
        o[t[r]] = e[r];
      }
      a.date = String(o.date);
      let s = (n = a.date) === null || n === undefined ? undefined : n.replace(/-/g, "/");
      let l = Date.parse(`${s}`);
      a.timestamp = Number.isFinite(l) ? l : 0;
      a.open = parseFloat(String(o.open_price));
      a.close = parseFloat(String(o.close_price));
      a.high = parseFloat(String(o.high_price));
      a.low = parseFloat(String(o.low_price));
      let d = o.trade_volume === "--" ? o.trade_value : o.trade_volume;
      a.volume = parseFloat(String(d));
      if (i > 0) {
        a.preClose = parseFloat(String(r[i - 1].close));
      } else {
        a.preClose = parseFloat(String(o.close_price));
      }
      r.push(a);
    });
    return r;
  }
  async function l(e, t, r) {
    var a;
    let l = `${toutiaoSearchConstants.apiBaseUrl}/2/wap/search/extra/aladin/?aid=13&alasrc=tt_stock&`;
    let d = `real_aid=${uniParamsManager.uniParamsManager.getParam("aid")}&wish_source=${e}&keyword=${t}&extra={"ktype":"${r}","async":"1"}&device_id=undefined`;
    let c = `${l}${d}`;
    let u = await fetch(c);
    let h = await u.json();
    if (h == null ? undefined : (a = h.data) === null || a === undefined ? undefined : a.display?.klines) {
      return {
        klinesData: s(h.data.display.klines, h.data.display.label)
      };
    } else {
      return {
        klinesData: []
      };
    }
  }
  function d(e, t) {
    if (isNaN(Number(e)) || isNaN(Number(t)) || Number(e) === Number(t)) {
      return "draw";
    } else if (Number(e) > Number(t)) {
      return "up";
    } else {
      return "down";
    }
  }
  require.d(exports, {
    compareStockDirection: function () {
      return d;
    },
    parseKlineData: function () {
      return s;
    },
    fetchStockKlines: function () {
      return l;
    },
    processMinuteData: function () {
      return a;
    }
  });
}