// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 483698
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    function t(e, a, t, n) {
      switch (t) {
        case "s":
          if (n || a) {
            return "néhány másodperc";
          } else {
            return "néhány másodperce";
          }
        case "ss":
          if (e + (n || a)) {
            return " másodperc";
          } else {
            return " másodperce";
          }
        case "m":
          return "egy" + (n || a ? " perc" : " perce");
        case "mm":
          return e + (n || a ? " perc" : " perce");
        case "h":
          return "egy" + (n || a ? " óra" : " órája");
        case "hh":
          return e + (n || a ? " óra" : " órája");
        case "d":
          return "egy" + (n || a ? " nap" : " napja");
        case "dd":
          return e + (n || a ? " nap" : " napja");
        case "M":
          return "egy" + (n || a ? " hónap" : " hónapja");
        case "MM":
          return e + (n || a ? " hónap" : " hónapja");
        case "y":
          return "egy" + (n || a ? " év" : " éve");
        case "yy":
          return e + (n || a ? " év" : " éve");
      }
      return "";
    }
    function n(e) {
      return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]";
    }
    e.defineLocale("hu", {
      months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
      monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
      monthsParseExact: true,
      weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
      weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      },
      meridiemParse: /de|du/i,
      isPM: function (e) {
        return e.charAt(1).toLowerCase() === "u";
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          if (t === true) {
            return "de";
          } else {
            return "DE";
          }
        } else if (t === true) {
          return "du";
        } else {
          return "DU";
        }
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function () {
          return n.call(this, true);
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function () {
          return n.call(this, false);
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s múlva",
        past: "%s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
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