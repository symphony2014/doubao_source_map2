// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 899405
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    function t(e, t, n, s) {
      var r;
      var i;
      var d;
      var _;
      var o;
      i = Math.floor((r = e) % 1000 / 100);
      d = Math.floor(r % 100 / 10);
      _ = r % 10;
      o = "";
      if (i > 0) {
        o += a[i] + "vatlh";
      }
      if (d > 0) {
        o += (o !== "" ? " " : "") + a[d] + "maH";
      }
      if (_ > 0) {
        o += (o !== "" ? " " : "") + a[_];
      }
      var u = o === "" ? "pagh" : o;
      switch (n) {
        case "ss":
          return u + " lup";
        case "mm":
          return u + " tup";
        case "hh":
          return u + " rep";
        case "dd":
          return u + " jaj";
        case "MM":
          return u + " jar";
        case "yy":
          return u + " DIS";
      }
    }
    e.defineLocale("tlh", {
      months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
      monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
      monthsParseExact: true,
      weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[DaHjaj] LT",
        nextDay: "[wa’leS] LT",
        nextWeek: "LLL",
        lastDay: "[wa’Hu’] LT",
        lastWeek: "LLL",
        sameElse: "L"
      },
      relativeTime: {
        future: function (e) {
          var a = e;
          if (e.indexOf("jaj") !== -1) {
            return a.slice(0, -3) + "leS";
          } else if (e.indexOf("jar") !== -1) {
            return a.slice(0, -3) + "waQ";
          } else if (e.indexOf("DIS") !== -1) {
            return a.slice(0, -3) + "nem";
          } else {
            return a + " pIq";
          }
        },
        past: function (e) {
          var a = e;
          if (e.indexOf("jaj") !== -1) {
            return a.slice(0, -3) + "Hu’";
          } else if (e.indexOf("jar") !== -1) {
            return a.slice(0, -3) + "wen";
          } else if (e.indexOf("DIS") !== -1) {
            return a.slice(0, -3) + "ben";
          } else {
            return a + " ret";
          }
        },
        s: "puS lup",
        ss: t,
        m: "wa’ tup",
        mm: t,
        h: "wa’ rep",
        hh: t,
        d: "wa’ jaj",
        dd: t,
        M: "wa’ jar",
        MM: t,
        y: "wa’ DIS",
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