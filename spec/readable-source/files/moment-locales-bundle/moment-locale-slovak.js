// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 275050
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e) {
      return e > 1 && e < 5;
    }
    function t(e, t, n, s) {
      var r = e + " ";
      switch (n) {
        case "s":
          if (t || s) {
            return "pár sekúnd";
          } else {
            return "pár sekundami";
          }
        case "ss":
          if (t || s) {
            return r + (a(e) ? "sekundy" : "sekúnd");
          }
          return r + "sekundami";
        case "m":
          if (t) {
            return "minúta";
          } else if (s) {
            return "minútu";
          } else {
            return "minútou";
          }
        case "mm":
          if (t || s) {
            return r + (a(e) ? "minúty" : "minút");
          }
          return r + "minútami";
        case "h":
          if (t) {
            return "hodina";
          } else if (s) {
            return "hodinu";
          } else {
            return "hodinou";
          }
        case "hh":
          if (t || s) {
            return r + (a(e) ? "hodiny" : "hodín");
          }
          return r + "hodinami";
        case "d":
          if (t || s) {
            return "deň";
          } else {
            return "dňom";
          }
        case "dd":
          if (t || s) {
            return r + (a(e) ? "dni" : "dní");
          }
          return r + "dňami";
        case "M":
          if (t || s) {
            return "mesiac";
          } else {
            return "mesiacom";
          }
        case "MM":
          if (t || s) {
            return r + (a(e) ? "mesiace" : "mesiacov");
          }
          return r + "mesiacmi";
        case "y":
          if (t || s) {
            return "rok";
          } else {
            return "rokom";
          }
        case "yy":
          if (t || s) {
            return r + (a(e) ? "roky" : "rokov");
          }
          return r + "rokmi";
      }
    }
    e.defineLocale("sk", {
      months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
      weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
      weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v nedeľu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo štvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT";
          }
        },
        lastDay: "[včera o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulú nedeľu o] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[minulý] dddd [o] LT";
            case 3:
              return "[minulú stredu o] LT";
            case 6:
              return "[minulú sobotu o] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
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