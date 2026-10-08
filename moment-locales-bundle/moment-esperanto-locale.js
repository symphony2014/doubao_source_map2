// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 458423
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("eo", {
      months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
      monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
      weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
      weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
      weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "[la] D[-an de] MMMM, YYYY",
        LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
        LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
        llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM: function (e) {
        return e.charAt(0).toLowerCase() === "p";
      },
      meridiem: function (e, a, t) {
        if (e > 11) {
          if (t) {
            return "p.t.m.";
          } else {
            return "P.T.M.";
          }
        } else if (t) {
          return "a.t.m.";
        } else {
          return "A.T.M.";
        }
      },
      calendar: {
        sameDay: "[Hodiaŭ je] LT",
        nextDay: "[Morgaŭ je] LT",
        nextWeek: "dddd[n je] LT",
        lastDay: "[Hieraŭ je] LT",
        lastWeek: "[pasintan] dddd[n je] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "post %s",
        past: "antaŭ %s",
        s: "kelkaj sekundoj",
        ss: "%d sekundoj",
        m: "unu minuto",
        mm: "%d minutoj",
        h: "unu horo",
        hh: "%d horoj",
        d: "unu tago",
        dd: "%d tagoj",
        M: "unu monato",
        MM: "%d monatoj",
        y: "unu jaro",
        yy: "%d jaroj"
      },
      dayOfMonthOrdinalParse: /\d{1,2}a/,
      ordinal: "%da",
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}