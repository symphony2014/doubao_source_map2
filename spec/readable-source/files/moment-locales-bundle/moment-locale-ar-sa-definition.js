// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 207091
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
    e.defineLocale("ar-sa", {
      months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /ص|م/,
      isPM: function (e) {
        return e === "م";
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          return "ص";
        } else {
          return "م";
        }
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
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
        dow: 0,
        doy: 6
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}