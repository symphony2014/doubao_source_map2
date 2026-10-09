// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 843762
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("zh-cn", {
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      longDateFormat: {
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
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "凌晨" || a === "早上" || a === "上午") {
          return e;
        } else if (a === "下午" || a === "晚上") {
          return e + 12;
        } else if (e >= 11) {
          return e;
        } else {
          return e + 12;
        }
      },
      meridiem: function (e, a, t) {
        var n = e * 100 + a;
        if (n < 600) {
          return "凌晨";
        }
        if (n < 900) {
          return "早上";
        }
        if (n < 1130) {
          return "上午";
        }
        if (n < 1230) {
          return "中午";
        }
        if (n < 1800) {
          return "下午";
        } else {
          return "晚上";
        }
      },
      calendar: {
        sameDay: "[今天]LT",
        nextDay: "[明天]LT",
        nextWeek: function (e) {
          if (e.week() !== this.week()) {
            return "[下]dddLT";
          } else {
            return "[本]dddLT";
          }
        },
        lastDay: "[昨天]LT",
        lastWeek: function (e) {
          if (this.week() !== e.week()) {
            return "[上]dddLT";
          } else {
            return "[本]dddLT";
          }
        },
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
      ordinal: function (e, a) {
        switch (a) {
          case "d":
          case "D":
          case "DDD":
            return e + "日";
          case "M":
            return e + "月";
          case "w":
          case "W":
            return e + "周";
          default:
            return e;
        }
      },
      relativeTime: {
        future: "%s后",
        past: "%s前",
        s: "几秒",
        ss: "%d 秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        w: "1 周",
        ww: "%d 周",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}