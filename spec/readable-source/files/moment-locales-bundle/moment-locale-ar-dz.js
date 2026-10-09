// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 722580
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e) {
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
    var t = {
      s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
      m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
      h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
      d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
      M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
      y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    };
    function n(e) {
      return function (n, s, r, i) {
        var d = a(n);
        var _ = t[e][a(n)];
        if (d === 2) {
          _ = _[+!s];
        }
        return _.replace(/%d/i, n);
      };
    }
    var s = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    e.defineLocale("ar-dz", {
      months: s,
      monthsShort: s,
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
        s: n("s"),
        ss: n("s"),
        m: n("m"),
        mm: n("m"),
        h: n("h"),
        hh: n("h"),
        d: n("d"),
        dd: n("d"),
        M: n("M"),
        MM: n("M"),
        y: n("y"),
        yy: n("y")
      },
      postformat: function (e) {
        return e.replace(/,/g, "،");
      },
      week: {
        dow: 0,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}