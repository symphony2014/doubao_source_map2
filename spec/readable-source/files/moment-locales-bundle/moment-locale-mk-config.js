// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 353816
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("mk", {
      months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
      monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
      weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
      weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
      weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Денес во] LT",
        nextDay: "[Утре во] LT",
        nextWeek: "[Во] dddd [во] LT",
        lastDay: "[Вчера во] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Изминатата] dddd [во] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Изминатиот] dddd [во] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "пред %s",
        s: "неколку секунди",
        ss: "%d секунди",
        m: "една минута",
        mm: "%d минути",
        h: "еден час",
        hh: "%d часа",
        d: "еден ден",
        dd: "%d дена",
        M: "еден месец",
        MM: "%d месеци",
        y: "една година",
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