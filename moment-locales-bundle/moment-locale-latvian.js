// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 334642
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
      m: "minūtes_minūtēm_minūte_minūtes".split("_"),
      mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
      h: "stundas_stundām_stunda_stundas".split("_"),
      hh: "stundas_stundām_stunda_stundas".split("_"),
      d: "dienas_dienām_diena_dienas".split("_"),
      dd: "dienas_dienām_diena_dienas".split("_"),
      M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
      MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
      y: "gada_gadiem_gads_gadi".split("_"),
      yy: "gada_gadiem_gads_gadi".split("_")
    };
    function t(e, a, t) {
      if (t) {
        if (a % 10 == 1 && a % 100 != 11) {
          return e[2];
        } else {
          return e[3];
        }
      } else if (a % 10 == 1 && a % 100 != 11) {
        return e[0];
      } else {
        return e[1];
      }
    }
    function n(e, n, s) {
      return e + " " + t(a[s], e, n);
    }
    function s(e, n, s) {
      return t(a[s], e, n);
    }
    e.defineLocale("lv", {
      months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
      weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
      weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY.",
        LL: "YYYY. [gada] D. MMMM",
        LLL: "YYYY. [gada] D. MMMM, HH:mm",
        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
      },
      calendar: {
        sameDay: "[Šodien pulksten] LT",
        nextDay: "[Rīt pulksten] LT",
        nextWeek: "dddd [pulksten] LT",
        lastDay: "[Vakar pulksten] LT",
        lastWeek: "[Pagājušā] dddd [pulksten] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "pēc %s",
        past: "pirms %s",
        s: function (e, a) {
          if (a) {
            return "dažas sekundes";
          } else {
            return "dažām sekundēm";
          }
        },
        ss: n,
        m: s,
        mm: n,
        h: s,
        hh: n,
        d: s,
        dd: n,
        M: s,
        MM: n,
        y: s,
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