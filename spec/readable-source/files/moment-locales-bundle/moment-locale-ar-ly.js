// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 852700
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      0: "0"
    };
    function t(e) {
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
    var n = {
      s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
      m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
      h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
      d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
      M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
      y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    };
    function s(e) {
      return function (a, s, r, i) {
        var d = t(a);
        var _ = n[e][t(a)];
        if (d === 2) {
          _ = _[+!s];
        }
        return _.replace(/%d/i, a);
      };
    }
    var r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    e.defineLocale("ar-ly", {
      months: r,
      monthsShort: r,
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
        s: s("s"),
        ss: s("s"),
        m: s("m"),
        mm: s("m"),
        h: s("h"),
        hh: s("h"),
        d: s("d"),
        dd: s("d"),
        M: s("M"),
        MM: s("M"),
        y: s("y"),
        yy: s("y")
      },
      preparse: function (e) {
        return e.replace(/،/g, ",");
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