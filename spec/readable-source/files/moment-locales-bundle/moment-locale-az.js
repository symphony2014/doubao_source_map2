// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 498511
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "-inci",
      5: "-inci",
      8: "-inci",
      70: "-inci",
      80: "-inci",
      2: "-nci",
      7: "-nci",
      20: "-nci",
      50: "-nci",
      3: "-üncü",
      4: "-üncü",
      100: "-üncü",
      6: "-ncı",
      9: "-uncu",
      10: "-uncu",
      30: "-uncu",
      60: "-ıncı",
      90: "-ıncı"
    };
    e.defineLocale("az", {
      months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
      weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
      weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
      weekdaysParseExact: true,
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
        nextDay: "[sabah saat] LT",
        nextWeek: "[gələn həftə] dddd [saat] LT",
        lastDay: "[dünən] LT",
        lastWeek: "[keçən həftə] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s əvvəl",
        s: "bir neçə saniyə",
        ss: "%d saniyə",
        m: "bir dəqiqə",
        mm: "%d dəqiqə",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      meridiemParse: /gecə|səhər|gündüz|axşam/,
      isPM: function (e) {
        return /^(gündüz|axşam)$/.test(e);
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "gecə";
        } else if (e < 12) {
          return "səhər";
        } else if (e < 17) {
          return "gündüz";
        } else {
          return "axşam";
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
      ordinal: function (e) {
        if (e === 0) {
          return e + "-ıncı";
        }
        var t = e % 10;
        return e + (a[t] || a[e % 100 - t] || a[e >= 100 ? 100 : null]);
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}