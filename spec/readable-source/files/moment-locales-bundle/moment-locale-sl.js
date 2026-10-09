// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 753534
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t, n) {
      var s = e + " ";
      switch (t) {
        case "s":
          if (a || n) {
            return "nekaj sekund";
          } else {
            return "nekaj sekundami";
          }
        case "ss":
          if (e === 1) {
            s += a ? "sekundo" : "sekundi";
          } else if (e === 2) {
            s += a || n ? "sekundi" : "sekundah";
          } else if (e < 5) {
            s += a || n ? "sekunde" : "sekundah";
          } else {
            s += "sekund";
          }
          return s;
        case "m":
          if (a) {
            return "ena minuta";
          } else {
            return "eno minuto";
          }
        case "mm":
          if (e === 1) {
            s += a ? "minuta" : "minuto";
          } else if (e === 2) {
            s += a || n ? "minuti" : "minutama";
          } else if (e < 5) {
            s += a || n ? "minute" : "minutami";
          } else {
            s += a || n ? "minut" : "minutami";
          }
          return s;
        case "h":
          if (a) {
            return "ena ura";
          } else {
            return "eno uro";
          }
        case "hh":
          if (e === 1) {
            s += a ? "ura" : "uro";
          } else if (e === 2) {
            s += a || n ? "uri" : "urama";
          } else if (e < 5) {
            s += a || n ? "ure" : "urami";
          } else {
            s += a || n ? "ur" : "urami";
          }
          return s;
        case "d":
          if (a || n) {
            return "en dan";
          } else {
            return "enim dnem";
          }
        case "dd":
          if (e === 1) {
            s += a || n ? "dan" : "dnem";
          } else if (e === 2) {
            s += a || n ? "dni" : "dnevoma";
          } else {
            s += a || n ? "dni" : "dnevi";
          }
          return s;
        case "M":
          if (a || n) {
            return "en mesec";
          } else {
            return "enim mesecem";
          }
        case "MM":
          if (e === 1) {
            s += a || n ? "mesec" : "mesecem";
          } else if (e === 2) {
            s += a || n ? "meseca" : "mesecema";
          } else if (e < 5) {
            s += a || n ? "mesece" : "meseci";
          } else {
            s += a || n ? "mesecev" : "meseci";
          }
          return s;
        case "y":
          if (a || n) {
            return "eno leto";
          } else {
            return "enim letom";
          }
        case "yy":
          if (e === 1) {
            s += a || n ? "leto" : "letom";
          } else if (e === 2) {
            s += a || n ? "leti" : "letoma";
          } else if (e < 5) {
            s += a || n ? "leta" : "leti";
          } else {
            s += a || n ? "let" : "leti";
          }
          return s;
      }
    }
    e.defineLocale("sl", {
      months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
      weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
      weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD. MM. YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v] [nedeljo] [ob] LT";
            case 3:
              return "[v] [sredo] [ob] LT";
            case 6:
              return "[v] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[v] dddd [ob] LT";
          }
        },
        lastDay: "[včeraj ob] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[prejšnjo] [nedeljo] [ob] LT";
            case 3:
              return "[prejšnjo] [sredo] [ob] LT";
            case 6:
              return "[prejšnjo] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prejšnji] dddd [ob] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "čez %s",
        past: "pred %s",
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
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}