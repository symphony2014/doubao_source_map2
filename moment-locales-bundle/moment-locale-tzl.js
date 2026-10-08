// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 529938
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t, n) {
      var s = {
        s: ["viensas secunds", "'iensas secunds"],
        ss: [e + " secunds", "" + e + " secunds"],
        m: ["'n míut", "'iens míut"],
        mm: [e + " míuts", "" + e + " míuts"],
        h: ["'n þora", "'iensa þora"],
        hh: [e + " þoras", "" + e + " þoras"],
        d: ["'n ziua", "'iensa ziua"],
        dd: [e + " ziuas", "" + e + " ziuas"],
        M: ["'n mes", "'iens mes"],
        MM: [e + " mesen", "" + e + " mesen"],
        y: ["'n ar", "'iens ar"],
        yy: [e + " ars", "" + e + " ars"]
      };
      if (n) {
        return s[t][0];
      } else if (a) {
        return s[t][0];
      } else {
        return s[t][1];
      }
    }
    e.defineLocale("tzl", {
      months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
      monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
      weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
      weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
      weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM [dallas] YYYY",
        LLL: "D. MMMM [dallas] YYYY HH.mm",
        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
      },
      meridiemParse: /d\'o|d\'a/i,
      isPM: function (e) {
        return e.toLowerCase() === "d'o";
      },
      meridiem: function (e, a, t) {
        if (e > 11) {
          if (t) {
            return "d'o";
          } else {
            return "D'O";
          }
        } else if (t) {
          return "d'a";
        } else {
          return "D'A";
        }
      },
      calendar: {
        sameDay: "[oxhi à] LT",
        nextDay: "[demà à] LT",
        nextWeek: "dddd [à] LT",
        lastDay: "[ieiri à] LT",
        lastWeek: "[sür el] dddd [lasteu à] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "osprei %s",
        past: "ja%s",
        s: a,
        ss: a,
        m: a,
        mm: a,
        h: a,
        hh: a,
        d: a,
        dd: a,
        M: a,
        MM: a,
        y: a,
        yy: a
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