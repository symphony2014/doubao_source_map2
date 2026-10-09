// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 366776
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");
    var t = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
    var n = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
    function s(e) {
      return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
    }
    function r(e, a, t) {
      var n = e + " ";
      switch (t) {
        case "ss":
          return n + (s(e) ? "sekundy" : "sekund");
        case "m":
          if (a) {
            return "minuta";
          } else {
            return "minutę";
          }
        case "mm":
          return n + (s(e) ? "minuty" : "minut");
        case "h":
          if (a) {
            return "godzina";
          } else {
            return "godzinę";
          }
        case "hh":
          return n + (s(e) ? "godziny" : "godzin");
        case "ww":
          return n + (s(e) ? "tygodnie" : "tygodni");
        case "MM":
          return n + (s(e) ? "miesiące" : "miesięcy");
        case "yy":
          return n + (s(e) ? "lata" : "lat");
      }
    }
    e.defineLocale("pl", {
      months: function (e, n) {
        if (e) {
          if (/D MMMM/.test(n)) {
            return t[e.month()];
          } else {
            return a[e.month()];
          }
        } else {
          return a;
        }
      },
      monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
      monthsParse: n,
      longMonthsParse: n,
      shortMonthsParse: n,
      weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
      weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
      weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Dziś o] LT",
        nextDay: "[Jutro o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[W niedzielę o] LT";
            case 2:
              return "[We wtorek o] LT";
            case 3:
              return "[W środę o] LT";
            case 6:
              return "[W sobotę o] LT";
            default:
              return "[W] dddd [o] LT";
          }
        },
        lastDay: "[Wczoraj o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[W zeszłą niedzielę o] LT";
            case 3:
              return "[W zeszłą środę o] LT";
            case 6:
              return "[W zeszłą sobotę o] LT";
            default:
              return "[W zeszły] dddd [o] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "%s temu",
        s: "kilka sekund",
        ss: r,
        m: r,
        mm: r,
        h: r,
        hh: r,
        d: "1 dzień",
        dd: "%d dni",
        w: "tydzień",
        ww: r,
        M: "miesiąc",
        MM: r,
        y: "rok",
        yy: r
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