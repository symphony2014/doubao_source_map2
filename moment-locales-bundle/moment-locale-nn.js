// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 477936
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("nn", {
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
      monthsParseExact: true,
      weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
      weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
      weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[I dag klokka] LT",
        nextDay: "[I morgon klokka] LT",
        nextWeek: "dddd [klokka] LT",
        lastDay: "[I går klokka] LT",
        lastWeek: "[Føregåande] dddd [klokka] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s sidan",
        s: "nokre sekund",
        ss: "%d sekund",
        m: "eit minutt",
        mm: "%d minutt",
        h: "ein time",
        hh: "%d timar",
        d: "ein dag",
        dd: "%d dagar",
        w: "ei veke",
        ww: "%d veker",
        M: "ein månad",
        MM: "%d månader",
        y: "eit år",
        yy: "%d år"
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