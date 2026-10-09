// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 166586
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ");
    var t = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
    function n(e, n, s, r) {
      var i;
      var d;
      var _ = "";
      switch (s) {
        case "s":
          if (r) {
            return "muutaman sekunnin";
          } else {
            return "muutama sekunti";
          }
        case "ss":
          _ = r ? "sekunnin" : "sekuntia";
          break;
        case "m":
          if (r) {
            return "minuutin";
          } else {
            return "minuutti";
          }
        case "mm":
          _ = r ? "minuutin" : "minuuttia";
          break;
        case "h":
          if (r) {
            return "tunnin";
          } else {
            return "tunti";
          }
        case "hh":
          _ = r ? "tunnin" : "tuntia";
          break;
        case "d":
          if (r) {
            return "päivän";
          } else {
            return "päivä";
          }
        case "dd":
          _ = r ? "päivän" : "päivää";
          break;
        case "M":
          if (r) {
            return "kuukauden";
          } else {
            return "kuukausi";
          }
        case "MM":
          _ = r ? "kuukauden" : "kuukautta";
          break;
        case "y":
          if (r) {
            return "vuoden";
          } else {
            return "vuosi";
          }
        case "yy":
          _ = r ? "vuoden" : "vuotta";
      }
      i = e;
      d = r;
      return (i < 10 ? d ? t[i] : a[i] : i) + " " + _;
    }
    e.defineLocale("fi", {
      months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
      monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
      weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
      weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
      weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[ta] YYYY",
        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
        l: "D.M.YYYY",
        ll: "Do MMM YYYY",
        lll: "Do MMM YYYY, [klo] HH.mm",
        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
      },
      calendar: {
        sameDay: "[tänään] [klo] LT",
        nextDay: "[huomenna] [klo] LT",
        nextWeek: "dddd [klo] LT",
        lastDay: "[eilen] [klo] LT",
        lastWeek: "[viime] dddd[na] [klo] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s päästä",
        past: "%s sitten",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
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