// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 817851
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
    function n(e) {
      if (e === 0) {
        return 0;
      } else if (e === 1) {
        return 1;
      } else if (e === 2) {
        return 2;
      } else if (e % 100 >= 3 && e % 100 <= 10) {
        return 3;
      } else if (e % 100 >= 11) {
        return 4;
      } else {
        return 5;
      }
    }
    var s = {
      s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
      m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
      h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
      d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
      M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
      y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    };
    function r(e) {
      return function (a, t, r, i) {
        var d = n(a);
        var _ = s[e][n(a)];
        if (d === 2) {
          _ = _[+!t];
        }
        return _.replace(/%d/i, a);
      };
    }
    var i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    e.defineLocale("ar", {
      months: i,
      monthsShort: i,
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/‏M/‏YYYY",
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
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: r("s"),
        ss: r("s"),
        m: r("m"),
        mm: r("m"),
        h: r("h"),
        hh: r("h"),
        d: r("d"),
        dd: r("d"),
        M: r("M"),
        MM: r("M"),
        y: r("y"),
        yy: r("y")
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