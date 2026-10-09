// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 466681
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t, n) {
      var s = {
        m: ["eng Minutt", "enger Minutt"],
        h: ["eng Stonn", "enger Stonn"],
        d: ["een Dag", "engem Dag"],
        M: ["ee Mount", "engem Mount"],
        y: ["ee Joer", "engem Joer"]
      };
      if (a) {
        return s[t][0];
      } else {
        return s[t][1];
      }
    }
    function t(e) {
      if (isNaN(e = parseInt(e, 10))) {
        return false;
      }
      if (e < 0) {
        return true;
      }
      if (e < 10) {
        return !!(e >= 4) && !!(e <= 7);
      }
      if (e < 100) {
        var a = e % 10;
        var n = e / 10;
        if (a === 0) {
          return t(n);
        } else {
          return t(a);
        }
      }
      if (!(e < 10000)) {
        return t(e /= 1000);
      }
      while (e >= 10) {
        e /= 10;
      }
      return t(e);
    }
    e.defineLocale("lb", {
      months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
      monthsParseExact: true,
      weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
      weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm [Auer]",
        LTS: "H:mm:ss [Auer]",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm [Auer]",
        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
      },
      calendar: {
        sameDay: "[Haut um] LT",
        sameElse: "L",
        nextDay: "[Muer um] LT",
        nextWeek: "dddd [um] LT",
        lastDay: "[Gëschter um] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 2:
            case 4:
              return "[Leschten] dddd [um] LT";
            default:
              return "[Leschte] dddd [um] LT";
          }
        }
      },
      relativeTime: {
        future: function (e) {
          if (t(e.substr(0, e.indexOf(" ")))) {
            return "a " + e;
          } else {
            return "an " + e;
          }
        },
        past: function (e) {
          if (t(e.substr(0, e.indexOf(" ")))) {
            return "viru " + e;
          } else {
            return "virun " + e;
          }
        },
        s: "e puer Sekonnen",
        ss: "%d Sekonnen",
        m: a,
        mm: "%d Minutten",
        h: a,
        hh: "%d Stonnen",
        d: a,
        dd: "%d Deeg",
        M: a,
        MM: "%d Méint",
        y: a,
        yy: "%d Joer"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}