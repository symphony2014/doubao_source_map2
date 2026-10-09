// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 405461
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t, n) {
      var s = {
        s: ["thoddea sekondamni", "thodde sekond"],
        ss: [e + " sekondamni", e + " sekond"],
        m: ["eka mintan", "ek minut"],
        mm: [e + " mintamni", e + " mintam"],
        h: ["eka voran", "ek vor"],
        hh: [e + " voramni", e + " voram"],
        d: ["eka disan", "ek dis"],
        dd: [e + " disamni", e + " dis"],
        M: ["eka mhoinean", "ek mhoino"],
        MM: [e + " mhoineamni", e + " mhoine"],
        y: ["eka vorsan", "ek voros"],
        yy: [e + " vorsamni", e + " vorsam"]
      };
      if (n) {
        return s[t][0];
      } else {
        return s[t][1];
      }
    }
    e.defineLocale("gom-latn", {
      months: {
        standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
        isFormat: /MMMM(\s)+D[oD]?/
      },
      monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
      monthsParseExact: true,
      weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
      weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
      weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "A h:mm [vazta]",
        LTS: "A h:mm:ss [vazta]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [vazta]",
        LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
      },
      calendar: {
        sameDay: "[Aiz] LT",
        nextDay: "[Faleam] LT",
        nextWeek: "[Fuddlo] dddd[,] LT",
        lastDay: "[Kal] LT",
        lastWeek: "[Fattlo] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s",
        past: "%s adim",
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
      dayOfMonthOrdinalParse: /\d{1,2}(er)/,
      ordinal: function (e, a) {
        if (a === "D") {
          return e + "er";
        } else {
          return e;
        }
      },
      week: {
        dow: 0,
        doy: 3
      },
      meridiemParse: /rati|sokallim|donparam|sanje/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "rati") {
          if (e < 4) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "sokallim") {
          return e;
        } else if (a === "donparam") {
          if (e > 12) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "sanje") {
          return e + 12;
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "rati";
        } else if (e < 12) {
          return "sokallim";
        } else if (e < 16) {
          return "donparam";
        } else if (e < 20) {
          return "sanje";
        } else {
          return "rati";
        }
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}