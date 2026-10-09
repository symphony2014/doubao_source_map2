// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 871414
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e) {
      if (e % 100 == 11) ;else if (e % 10 == 1) {
        return false;
      }
      return true;
    }
    function t(e, t, n, s) {
      var r = e + " ";
      switch (n) {
        case "s":
          if (t || s) {
            return "nokkrar sekúndur";
          } else {
            return "nokkrum sekúndum";
          }
        case "ss":
          if (a(e)) {
            return r + (t || s ? "sekúndur" : "sekúndum");
          }
          return r + "sekúnda";
        case "m":
          if (t) {
            return "mínúta";
          } else {
            return "mínútu";
          }
        case "mm":
          if (a(e)) {
            return r + (t || s ? "mínútur" : "mínútum");
          }
          if (t) {
            return r + "mínúta";
          }
          return r + "mínútu";
        case "hh":
          if (a(e)) {
            return r + (t || s ? "klukkustundir" : "klukkustundum");
          }
          return r + "klukkustund";
        case "d":
          if (t) {
            return "dagur";
          }
          if (s) {
            return "dag";
          } else {
            return "degi";
          }
        case "dd":
          if (a(e)) {
            if (t) {
              return r + "dagar";
            }
            return r + (s ? "daga" : "dögum");
          }
          if (t) {
            return r + "dagur";
          }
          return r + (s ? "dag" : "degi");
        case "M":
          if (t) {
            return "mánuður";
          }
          if (s) {
            return "mánuð";
          } else {
            return "mánuði";
          }
        case "MM":
          if (a(e)) {
            if (t) {
              return r + "mánuðir";
            }
            return r + (s ? "mánuði" : "mánuðum");
          }
          if (t) {
            return r + "mánuður";
          }
          return r + (s ? "mánuð" : "mánuði");
        case "y":
          if (t || s) {
            return "ár";
          } else {
            return "ári";
          }
        case "yy":
          if (a(e)) {
            return r + (t || s ? "ár" : "árum");
          }
          return r + (t || s ? "ár" : "ári");
      }
    }
    e.defineLocale("is", {
      months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
      weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
      weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
      weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
      },
      calendar: {
        sameDay: "[í dag kl.] LT",
        nextDay: "[á morgun kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[í gær kl.] LT",
        lastWeek: "[síðasta] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "eftir %s",
        past: "fyrir %s síðan",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: "klukkustund",
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