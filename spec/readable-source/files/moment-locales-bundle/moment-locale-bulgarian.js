// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 37463
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("bg", {
      months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
      monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
      weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
      weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
      weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Днес в] LT",
        nextDay: "[Утре в] LT",
        nextWeek: "dddd [в] LT",
        lastDay: "[Вчера в] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Миналата] dddd [в] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Миналия] dddd [в] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "след %s",
        past: "преди %s",
        s: "няколко секунди",
        ss: "%d секунди",
        m: "минута",
        mm: "%d минути",
        h: "час",
        hh: "%d часа",
        d: "ден",
        dd: "%d дена",
        w: "седмица",
        ww: "%d седмици",
        M: "месец",
        MM: "%d месеца",
        y: "година",
        yy: "%d години"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function (e) {
        var a = e % 10;
        var t = e % 100;
        if (e === 0) {
          return e + "-ев";
        }
        if (t === 0) {
          return e + "-ен";
        }
        if (t > 10 && t < 20) {
          return e + "-ти";
        }
        if (a === 1) {
          return e + "-ви";
        }
        if (a === 2) {
          return e + "-ри";
        } else if (a === 7 || a === 8) {
          return e + "-ми";
        } else {
          return e + "-ти";
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}