// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 24534
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "೧",
      2: "೨",
      3: "೩",
      4: "೪",
      5: "೫",
      6: "೬",
      7: "೭",
      8: "೮",
      9: "೯",
      0: "೦"
    };
    var t = {
      "೧": "1",
      "೨": "2",
      "೩": "3",
      "೪": "4",
      "೫": "5",
      "೬": "6",
      "೭": "7",
      "೮": "8",
      "೯": "9",
      "೦": "0"
    };
    e.defineLocale("kn", {
      months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
      monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
      monthsParseExact: true,
      weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
      weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
      weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[ಇಂದು] LT",
        nextDay: "[ನಾಳೆ] LT",
        nextWeek: "dddd, LT",
        lastDay: "[ನಿನ್ನೆ] LT",
        lastWeek: "[ಕೊನೆಯ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ನಂತರ",
        past: "%s ಹಿಂದೆ",
        s: "ಕೆಲವು ಕ್ಷಣಗಳು",
        ss: "%d ಸೆಕೆಂಡುಗಳು",
        m: "ಒಂದು ನಿಮಿಷ",
        mm: "%d ನಿಮಿಷ",
        h: "ಒಂದು ಗಂಟೆ",
        hh: "%d ಗಂಟೆ",
        d: "ಒಂದು ದಿನ",
        dd: "%d ದಿನ",
        M: "ಒಂದು ತಿಂಗಳು",
        MM: "%d ತಿಂಗಳು",
        y: "ಒಂದು ವರ್ಷ",
        yy: "%d ವರ್ಷ"
      },
      preparse: function (e) {
        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
          return t[e];
        });
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return a[e];
        });
      },
      meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "ರಾತ್ರಿ") {
          if (e < 4) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "ಬೆಳಿಗ್ಗೆ") {
          return e;
        } else if (a === "ಮಧ್ಯಾಹ್ನ") {
          if (e >= 10) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "ಸಂಜೆ") {
          return e + 12;
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "ರಾತ್ರಿ";
        } else if (e < 10) {
          return "ಬೆಳಿಗ್ಗೆ";
        } else if (e < 17) {
          return "ಮಧ್ಯಾಹ್ನ";
        } else if (e < 20) {
          return "ಸಂಜೆ";
        } else {
          return "ರಾತ್ರಿ";
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
      ordinal: function (e) {
        return e + "ನೇ";
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}