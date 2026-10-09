// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 419849
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t) {
      var n = e + " ";
      switch (t) {
        case "ss":
          if (e === 1) {
            n += "sekunda";
          } else if (e === 2 || e === 3 || e === 4) {
            n += "sekunde";
          } else {
            n += "sekundi";
          }
          return n;
        case "m":
          if (a) {
            return "jedna minuta";
          } else {
            return "jedne minute";
          }
        case "mm":
          if (e === 1) {
            n += "minuta";
          } else if (e === 2 || e === 3 || e === 4) {
            n += "minute";
          } else {
            n += "minuta";
          }
          return n;
        case "h":
          if (a) {
            return "jedan sat";
          } else {
            return "jednog sata";
          }
        case "hh":
          if (e === 1) {
            n += "sat";
          } else if (e === 2 || e === 3 || e === 4) {
            n += "sata";
          } else {
            n += "sati";
          }
          return n;
        case "dd":
          if (e === 1) {
            n += "dan";
          } else {
            n += "dana";
          }
          return n;
        case "MM":
          if (e === 1) {
            n += "mjesec";
          } else if (e === 2 || e === 3 || e === 4) {
            n += "mjeseca";
          } else {
            n += "mjeseci";
          }
          return n;
        case "yy":
          if (e === 1) {
            n += "godina";
          } else if (e === 2 || e === 3 || e === 4) {
            n += "godine";
          } else {
            n += "godina";
          }
          return n;
      }
    }
    e.defineLocale("hr", {
      months: {
        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
        standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
      },
      monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
      monthsParseExact: true,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM YYYY",
        LLL: "Do MMMM YYYY H:mm",
        LLLL: "dddd, Do MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
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
        lastDay: "[jučer u] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[prošlu] [nedjelju] [u] LT";
            case 3:
              return "[prošlu] [srijedu] [u] LT";
            case 6:
              return "[prošle] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prošli] dddd [u] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: a,
        m: a,
        mm: a,
        h: a,
        hh: a,
        d: "dan",
        dd: a,
        M: "mjesec",
        MM: a,
        y: "godinu",
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