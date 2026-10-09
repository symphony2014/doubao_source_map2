// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 830132
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_");
    var t = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    e.defineLocale("fy", {
      months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
      monthsShort: function (e, n) {
        if (e) {
          if (/-MMM-/.test(n)) {
            return t[e.month()];
          } else {
            return a[e.month()];
          }
        } else {
          return a;
        }
      },
      monthsParseExact: true,
      weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
      weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
      weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[hjoed om] LT",
        nextDay: "[moarn om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[juster om] LT",
        lastWeek: "[ôfrûne] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "oer %s",
        past: "%s lyn",
        s: "in pear sekonden",
        ss: "%d sekonden",
        m: "ien minút",
        mm: "%d minuten",
        h: "ien oere",
        hh: "%d oeren",
        d: "ien dei",
        dd: "%d dagen",
        M: "ien moanne",
        MM: "%d moannen",
        y: "ien jier",
        yy: "%d jierren"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (e) {
        return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de");
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}