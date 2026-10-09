// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 787825
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("he", {
      months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
      monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
      weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
      weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
      weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [ב]MMMM YYYY",
        LLL: "D [ב]MMMM YYYY HH:mm",
        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[היום ב־]LT",
        nextDay: "[מחר ב־]LT",
        nextWeek: "dddd [בשעה] LT",
        lastDay: "[אתמול ב־]LT",
        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "בעוד %s",
        past: "לפני %s",
        s: "מספר שניות",
        ss: "%d שניות",
        m: "דקה",
        mm: "%d דקות",
        h: "שעה",
        hh: function (e) {
          if (e === 2) {
            return "שעתיים";
          } else {
            return e + " שעות";
          }
        },
        d: "יום",
        dd: function (e) {
          if (e === 2) {
            return "יומיים";
          } else {
            return e + " ימים";
          }
        },
        M: "חודש",
        MM: function (e) {
          if (e === 2) {
            return "חודשיים";
          } else {
            return e + " חודשים";
          }
        },
        y: "שנה",
        yy: function (e) {
          if (e === 2) {
            return "שנתיים";
          } else if (e % 10 == 0 && e !== 10) {
            return e + " שנה";
          } else {
            return e + " שנים";
          }
        }
      },
      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function (e) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
      },
      meridiem: function (e, a, t) {
        if (e < 5) {
          return "לפנות בוקר";
        } else if (e < 10) {
          return "בבוקר";
        } else if (e < 12) {
          if (t) {
            return "לפנה\"צ";
          } else {
            return "לפני הצהריים";
          }
        } else if (e < 18) {
          if (t) {
            return "אחה\"צ";
          } else {
            return "אחרי הצהריים";
          }
        } else {
          return "בערב";
        }
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}