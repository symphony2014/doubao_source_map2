// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 376985
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
      0: "٠"
    };
    var t = {
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "٠": "0"
    };
    var n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
    e.defineLocale("ku", {
      months: n,
      monthsShort: n,
      weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
      weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
      weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /ئێواره‌|به‌یانی/,
      isPM: function (e) {
        return /ئێواره‌/.test(e);
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          return "به‌یانی";
        } else {
          return "ئێواره‌";
        }
      },
      calendar: {
        sameDay: "[ئه‌مرۆ كاتژمێر] LT",
        nextDay: "[به‌یانی كاتژمێر] LT",
        nextWeek: "dddd [كاتژمێر] LT",
        lastDay: "[دوێنێ كاتژمێر] LT",
        lastWeek: "dddd [كاتژمێر] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "له‌ %s",
        past: "%s",
        s: "چه‌ند چركه‌یه‌ك",
        ss: "چركه‌ %d",
        m: "یه‌ك خوله‌ك",
        mm: "%d خوله‌ك",
        h: "یه‌ك كاتژمێر",
        hh: "%d كاتژمێر",
        d: "یه‌ك ڕۆژ",
        dd: "%d ڕۆژ",
        M: "یه‌ك مانگ",
        MM: "%d مانگ",
        y: "یه‌ك ساڵ",
        yy: "%d ساڵ"
      },
      preparse: function (e) {
        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
          return t[e];
        }).replace(/،/g, ",");
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return a[e];
        }).replace(/,/g, "،");
      },
      week: {
        dow: 6,
        doy: 12
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}