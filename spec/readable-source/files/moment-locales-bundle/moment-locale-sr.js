// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 524970
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      words: {
        ss: ["sekunda", "sekunde", "sekundi"],
        m: ["jedan minut", "jednog minuta"],
        mm: ["minut", "minuta", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        d: ["jedan dan", "jednog dana"],
        dd: ["dan", "dana", "dana"],
        M: ["jedan mesec", "jednog meseca"],
        MM: ["mesec", "meseca", "meseci"],
        y: ["jednu godinu", "jedne godine"],
        yy: ["godinu", "godine", "godina"]
      },
      correctGrammaticalCase: function (e, a) {
        if (e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)) {
          if (e % 10 == 1) {
            return a[0];
          } else {
            return a[1];
          }
        } else {
          return a[2];
        }
      },
      translate: function (e, t, n, s) {
        var r;
        var i = a.words[n];
        if (n.length === 1) {
          if (n === "y" && t) {
            return "jedna godina";
          } else if (s || t) {
            return i[0];
          } else {
            return i[1];
          }
        } else {
          r = a.correctGrammaticalCase(e, i);
          if (n === "yy" && t && r === "godinu") {
            return e + " godina";
          } else {
            return e + " " + r;
          }
        }
      }
    };
    e.defineLocale("sr", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D. M. YYYY.",
        LL: "D. MMMM YYYY.",
        LLL: "D. MMMM YYYY. H:mm",
        LLLL: "dddd, D. MMMM YYYY. H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedelju] [u] LT";
            case 3:
              return "[u] [sredu] [u] LT";
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
          return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pre %s",
        s: "nekoliko sekundi",
        ss: a.translate,
        m: a.translate,
        mm: a.translate,
        h: a.translate,
        hh: a.translate,
        d: a.translate,
        dd: a.translate,
        M: a.translate,
        MM: a.translate,
        y: a.translate,
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