// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 403023
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("el", {
      monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
      monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
      months: function (e, a) {
        if (e) {
          if (typeof a == "string" && /D/.test(a.substring(0, a.indexOf("MMMM")))) {
            return this._monthsGenitiveEl[e.month()];
          } else {
            return this._monthsNominativeEl[e.month()];
          }
        } else {
          return this._monthsNominativeEl;
        }
      },
      monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
      weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
      weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
      weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
      meridiem: function (e, a, t) {
        if (e > 11) {
          if (t) {
            return "μμ";
          } else {
            return "ΜΜ";
          }
        } else if (t) {
          return "πμ";
        } else {
          return "ΠΜ";
        }
      },
      isPM: function (e) {
        return (e + "").toLowerCase()[0] === "μ";
      },
      meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendarEl: {
        sameDay: "[Σήμερα {}] LT",
        nextDay: "[Αύριο {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[Χθες {}] LT",
        lastWeek: function () {
          if (this.day() === 6) {
            return "[το προηγούμενο] dddd [{}] LT";
          } else {
            return "[την προηγούμενη] dddd [{}] LT";
          }
        },
        sameElse: "L"
      },
      calendar: function (e, a) {
        var t;
        var n = this._calendarEl[e];
        var s = a && a.hours();
        t = n;
        if (typeof Function != "undefined" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]") {
          n = n.apply(a);
        }
        return n.replace("{}", s % 12 == 1 ? "στη" : "στις");
      },
      relativeTime: {
        future: "σε %s",
        past: "%s πριν",
        s: "λίγα δευτερόλεπτα",
        ss: "%d δευτερόλεπτα",
        m: "ένα λεπτό",
        mm: "%d λεπτά",
        h: "μία ώρα",
        hh: "%d ώρες",
        d: "μία μέρα",
        dd: "%d μέρες",
        M: "ένας μήνας",
        MM: "%d μήνες",
        y: "ένας χρόνος",
        yy: "%d χρόνια"
      },
      dayOfMonthOrdinalParse: /\d{1,2}η/,
      ordinal: "%dη",
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}