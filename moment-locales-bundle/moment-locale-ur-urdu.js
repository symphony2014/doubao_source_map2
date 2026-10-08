// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 579717
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"];
    var t = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
    e.defineLocale("ur", {
      months: a,
      monthsShort: a,
      weekdays: t,
      weekdaysShort: t,
      weekdaysMin: t,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd، D MMMM YYYY HH:mm"
      },
      meridiemParse: /صبح|شام/,
      isPM: function (e) {
        return e === "شام";
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          return "صبح";
        } else {
          return "شام";
        }
      },
      calendar: {
        sameDay: "[آج بوقت] LT",
        nextDay: "[کل بوقت] LT",
        nextWeek: "dddd [بوقت] LT",
        lastDay: "[گذشتہ روز بوقت] LT",
        lastWeek: "[گذشتہ] dddd [بوقت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s بعد",
        past: "%s قبل",
        s: "چند سیکنڈ",
        ss: "%d سیکنڈ",
        m: "ایک منٹ",
        mm: "%d منٹ",
        h: "ایک گھنٹہ",
        hh: "%d گھنٹے",
        d: "ایک دن",
        dd: "%d دن",
        M: "ایک ماہ",
        MM: "%d ماہ",
        y: "ایک سال",
        yy: "%d سال"
      },
      preparse: function (e) {
        return e.replace(/،/g, ",");
      },
      postformat: function (e) {
        return e.replace(/,/g, "،");
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}