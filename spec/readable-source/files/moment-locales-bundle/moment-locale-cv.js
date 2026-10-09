// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 43657
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("cv", {
      months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
      monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
      weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
      weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
      weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
        LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
        LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
      },
      calendar: {
        sameDay: "[Паян] LT [сехетре]",
        nextDay: "[Ыран] LT [сехетре]",
        lastDay: "[Ӗнер] LT [сехетре]",
        nextWeek: "[Ҫитес] dddd LT [сехетре]",
        lastWeek: "[Иртнӗ] dddd LT [сехетре]",
        sameElse: "L"
      },
      relativeTime: {
        future: function (e) {
          var a = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
          return e + a;
        },
        past: "%s каялла",
        s: "пӗр-ик ҫеккунт",
        ss: "%d ҫеккунт",
        m: "пӗр минут",
        mm: "%d минут",
        h: "пӗр сехет",
        hh: "%d сехет",
        d: "пӗр кун",
        dd: "%d кун",
        M: "пӗр уйӑх",
        MM: "%d уйӑх",
        y: "пӗр ҫул",
        yy: "%d ҫул"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
      ordinal: "%d-мӗш",
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}