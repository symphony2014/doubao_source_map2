// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 289071
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("tet", {
      months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
      monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
      weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
      weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
      weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ohin iha] LT",
        nextDay: "[Aban iha] LT",
        nextWeek: "dddd [iha] LT",
        lastDay: "[Horiseik iha] LT",
        lastWeek: "dddd [semana kotuk] [iha] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "iha %s",
        past: "%s liuba",
        s: "segundu balun",
        ss: "segundu %d",
        m: "minutu ida",
        mm: "minutu %d",
        h: "oras ida",
        hh: "oras %d",
        d: "loron ida",
        dd: "loron %d",
        M: "fulan ida",
        MM: "fulan %d",
        y: "tinan ida",
        yy: "tinan %d"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var a = e % 10;
        var t = ~~(e % 100 / 10) == 1 ? "th" : a === 1 ? "st" : a === 2 ? "nd" : a === 3 ? "rd" : "th";
        return e + t;
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}