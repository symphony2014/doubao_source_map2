// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 252282
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "'inci",
      5: "'inci",
      8: "'inci",
      70: "'inci",
      80: "'inci",
      2: "'nci",
      7: "'nci",
      20: "'nci",
      50: "'nci",
      3: "'üncü",
      4: "'üncü",
      100: "'üncü",
      6: "'ncı",
      9: "'uncu",
      10: "'uncu",
      30: "'uncu",
      60: "'ıncı",
      90: "'ıncı"
    };
    e.defineLocale("tr", {
      months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
      monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
      weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
      weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
      weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
      meridiem: function (e, a, t) {
        if (e < 12) {
          if (t) {
            return "öö";
          } else {
            return "ÖÖ";
          }
        } else if (t) {
          return "ös";
        } else {
          return "ÖS";
        }
      },
      meridiemParse: /öö|ÖÖ|ös|ÖS/,
      isPM: function (e) {
        return e === "ös" || e === "ÖS";
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugün saat] LT",
        nextDay: "[yarın saat] LT",
        nextWeek: "[gelecek] dddd [saat] LT",
        lastDay: "[dün] LT",
        lastWeek: "[geçen] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s önce",
        s: "birkaç saniye",
        ss: "%d saniye",
        m: "bir dakika",
        mm: "%d dakika",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        w: "bir hafta",
        ww: "%d hafta",
        M: "bir ay",
        MM: "%d ay",
        y: "bir yıl",
        yy: "%d yıl"
      },
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "Do":
          case "DD":
            return e;
          default:
            if (e === 0) {
              return e + "'ıncı";
            }
            var n = e % 10;
            return e + (a[n] || a[e % 100 - n] || a[e >= 100 ? 100 : null]);
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}