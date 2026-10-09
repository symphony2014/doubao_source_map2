// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 728813
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      words: {
        ss: ["sekund", "sekunda", "sekundi"],
        m: ["jedan minut", "jednog minuta"],
        mm: ["minut", "minuta", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        dd: ["dan", "dana", "dana"],
        MM: ["mjesec", "mjeseca", "mjeseci"],
        yy: ["godina", "godine", "godina"]
      },
      correctGrammaticalCase: function (e, a) {
        if (e === 1) {
          return a[0];
        } else if (e >= 2 && e <= 4) {
          return a[1];
        } else {
          return a[2];
        }
      },
      translate: function (e, t, n) {
        var s = a.words[n];
        if (n.length === 1) {
          if (t) {
            return s[0];
          } else {
            return s[1];
          }
        } else {
          return e + " " + a.correctGrammaticalCase(e, s);
        }
      }
    };
    e.defineLocale("me", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sjutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT";
          }
        },
        lastDay: "[juče u] LT",
        lastWeek: function () {
          return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "nekoliko sekundi",
        ss: a.translate,
        m: a.translate,
        mm: a.translate,
        h: a.translate,
        hh: a.translate,
        d: "dan",
        dd: a.translate,
        M: "mjesec",
        MM: a.translate,
        y: "godinu",
        yy: a.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}