// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 32339
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("jv", {
      months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
      weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
      weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /enjing|siyang|sonten|ndalu/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "enjing") {
          return e;
        } else if (a === "siyang") {
          if (e >= 11) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "sonten" || a === "ndalu") {
          return e + 12;
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e < 11) {
          return "enjing";
        } else if (e < 15) {
          return "siyang";
        } else if (e < 19) {
          return "sonten";
        } else {
          return "ndalu";
        }
      },
      calendar: {
        sameDay: "[Dinten puniko pukul] LT",
        nextDay: "[Mbenjang pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kala wingi pukul] LT",
        lastWeek: "dddd [kepengker pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "wonten ing %s",
        past: "%s ingkang kepengker",
        s: "sawetawis detik",
        ss: "%d detik",
        m: "setunggal menit",
        mm: "%d menit",
        h: "setunggal jam",
        hh: "%d jam",
        d: "sedinten",
        dd: "%d dinten",
        M: "sewulan",
        MM: "%d wulan",
        y: "setaun",
        yy: "%d taun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}