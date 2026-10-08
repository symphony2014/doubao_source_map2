// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 344113
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "੧",
      2: "੨",
      3: "੩",
      4: "੪",
      5: "੫",
      6: "੬",
      7: "੭",
      8: "੮",
      9: "੯",
      0: "੦"
    };
    var t = {
      "੧": "1",
      "੨": "2",
      "੩": "3",
      "੪": "4",
      "੫": "5",
      "੬": "6",
      "੭": "7",
      "੮": "8",
      "੯": "9",
      "੦": "0"
    };
    e.defineLocale("pa-in", {
      months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
      monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
      weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
      weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
      weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
      longDateFormat: {
        LT: "A h:mm ਵਜੇ",
        LTS: "A h:mm:ss ਵਜੇ",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
      },
      calendar: {
        sameDay: "[ਅਜ] LT",
        nextDay: "[ਕਲ] LT",
        nextWeek: "[ਅਗਲਾ] dddd, LT",
        lastDay: "[ਕਲ] LT",
        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ਵਿੱਚ",
        past: "%s ਪਿਛਲੇ",
        s: "ਕੁਝ ਸਕਿੰਟ",
        ss: "%d ਸਕਿੰਟ",
        m: "ਇਕ ਮਿੰਟ",
        mm: "%d ਮਿੰਟ",
        h: "ਇੱਕ ਘੰਟਾ",
        hh: "%d ਘੰਟੇ",
        d: "ਇੱਕ ਦਿਨ",
        dd: "%d ਦਿਨ",
        M: "ਇੱਕ ਮਹੀਨਾ",
        MM: "%d ਮਹੀਨੇ",
        y: "ਇੱਕ ਸਾਲ",
        yy: "%d ਸਾਲ"
      },
      preparse: function (e) {
        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
          return t[e];
        });
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return a[e];
        });
      },
      meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "ਰਾਤ") {
          if (e < 4) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "ਸਵੇਰ") {
          return e;
        } else if (a === "ਦੁਪਹਿਰ") {
          if (e >= 10) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "ਸ਼ਾਮ") {
          return e + 12;
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "ਰਾਤ";
        } else if (e < 10) {
          return "ਸਵੇਰ";
        } else if (e < 17) {
          return "ਦੁਪਹਿਰ";
        } else if (e < 20) {
          return "ਸ਼ਾਮ";
        } else {
          return "ਰਾਤ";
        }
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}