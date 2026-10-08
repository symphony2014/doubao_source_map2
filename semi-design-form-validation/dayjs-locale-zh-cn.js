// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(349712) to 'dayjs-date-library'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38149.8ce71c62.js
         * chunkId: 38149
         * moduleId: 149015
         */
module.exports = function (module, exports, require) {
  var r;
  r = function (e) {
    "use strict";

    var t = {
      name: "zh-cn",
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      ordinal: function (e, t) {
        if (t === "W") {
          return e + "周";
        } else {
          return e + "日";
        }
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      meridiem: function (e, t) {
        var n = e * 100 + t;
        if (n < 600) {
          return "凌晨";
        } else if (n < 900) {
          return "早上";
        } else if (n < 1100) {
          return "上午";
        } else if (n < 1300) {
          return "中午";
        } else if (n < 1800) {
          return "下午";
        } else {
          return "晚上";
        }
      }
    };
    (e && typeof e == "object" && "default" in e ? e : {
      default: e
    }).default.locale(t, null, true);
    return t;
  };
  module.exports = r(require("dayjs-date-library") /*id: 349712*/);
}