// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 630393
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"];
    var t = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
    e.defineLocale("sd", {
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
        sameDay: "[اڄ] LT",
        nextDay: "[سڀاڻي] LT",
        nextWeek: "dddd [اڳين هفتي تي] LT",
        lastDay: "[ڪالهه] LT",
        lastWeek: "[گزريل هفتي] dddd [تي] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s پوء",
        past: "%s اڳ",
        s: "چند سيڪنڊ",
        ss: "%d سيڪنڊ",
        m: "هڪ منٽ",
        mm: "%d منٽ",
        h: "هڪ ڪلاڪ",
        hh: "%d ڪلاڪ",
        d: "هڪ ڏينهن",
        dd: "%d ڏينهن",
        M: "هڪ مهينو",
        MM: "%d مهينا",
        y: "هڪ سال",
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