// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 560623
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
    var t = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
    function n(e) {
      return e > 1 && e < 5 && ~~(e / 10) != 1;
    }
    function s(e, a, t, s) {
      var r = e + " ";
      switch (t) {
        case "s":
          if (a || s) {
            return "pár sekund";
          } else {
            return "pár sekundami";
          }
        case "ss":
          if (a || s) {
            return r + (n(e) ? "sekundy" : "sekund");
          }
          return r + "sekundami";
        case "m":
          if (a) {
            return "minuta";
          } else if (s) {
            return "minutu";
          } else {
            return "minutou";
          }
        case "mm":
          if (a || s) {
            return r + (n(e) ? "minuty" : "minut");
          }
          return r + "minutami";
        case "h":
          if (a) {
            return "hodina";
          } else if (s) {
            return "hodinu";
          } else {
            return "hodinou";
          }
        case "hh":
          if (a || s) {
            return r + (n(e) ? "hodiny" : "hodin");
          }
          return r + "hodinami";
        case "d":
          if (a || s) {
            return "den";
          } else {
            return "dnem";
          }
        case "dd":
          if (a || s) {
            return r + (n(e) ? "dny" : "dní");
          }
          return r + "dny";
        case "M":
          if (a || s) {
            return "měsíc";
          } else {
            return "měsícem";
          }
        case "MM":
          if (a || s) {
            return r + (n(e) ? "měsíce" : "měsíců");
          }
          return r + "měsíci";
        case "y":
          if (a || s) {
            return "rok";
          } else {
            return "rokem";
          }
        case "yy":
          if (a || s) {
            return r + (n(e) ? "roky" : "let");
          }
          return r + "lety";
      }
    }
    e.defineLocale("cs", {
      months: {
        format: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
        standalone: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_")
      },
      monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
      monthsRegex: t,
      monthsShortRegex: t,
      monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
      weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
      weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[zítra v] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v neděli v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve středu v] LT";
            case 4:
              return "[ve čtvrtek v] LT";
            case 5:
              return "[v pátek v] LT";
            case 6:
              return "[v sobotu v] LT";
          }
        },
        lastDay: "[včera v] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulou neděli v] LT";
            case 1:
            case 2:
              return "[minulé] dddd [v] LT";
            case 3:
              return "[minulou středu v] LT";
            case 4:
            case 5:
              return "[minulý] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "před %s",
        s: s,
        ss: s,
        m: s,
        mm: s,
        h: s,
        hh: s,
        d: s,
        dd: s,
        M: s,
        MM: s,
        y: s,
        yy: s
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