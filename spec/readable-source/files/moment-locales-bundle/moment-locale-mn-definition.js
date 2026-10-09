// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 698984
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t, n) {
      switch (t) {
        case "s":
          if (a) {
            return "хэдхэн секунд";
          } else {
            return "хэдхэн секундын";
          }
        case "ss":
          return e + (a ? " секунд" : " секундын");
        case "m":
        case "mm":
          return e + (a ? " минут" : " минутын");
        case "h":
        case "hh":
          return e + (a ? " цаг" : " цагийн");
        case "d":
        case "dd":
          return e + (a ? " өдөр" : " өдрийн");
        case "M":
        case "MM":
          return e + (a ? " сар" : " сарын");
        case "y":
        case "yy":
          return e + (a ? " жил" : " жилийн");
        default:
          return e;
      }
    }
    e.defineLocale("mn", {
      months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
      monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
      monthsParseExact: true,
      weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
      weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
      weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY оны MMMMын D",
        LLL: "YYYY оны MMMMын D HH:mm",
        LLLL: "dddd, YYYY оны MMMMын D HH:mm"
      },
      meridiemParse: /ҮӨ|ҮХ/i,
      isPM: function (e) {
        return e === "ҮХ";
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          return "ҮӨ";
        } else {
          return "ҮХ";
        }
      },
      calendar: {
        sameDay: "[Өнөөдөр] LT",
        nextDay: "[Маргааш] LT",
        nextWeek: "[Ирэх] dddd LT",
        lastDay: "[Өчигдөр] LT",
        lastWeek: "[Өнгөрсөн] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s дараа",
        past: "%s өмнө",
        s: a,
        ss: a,
        m: a,
        mm: a,
        h: a,
        hh: a,
        d: a,
        dd: a,
        M: a,
        MM: a,
        y: a,
        yy: a
      },
      dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
      ordinal: function (e, a) {
        switch (a) {
          case "d":
          case "D":
          case "DDD":
            return e + " өдөр";
          default:
            return e;
        }
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}