// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 836593
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("ga", {
      months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
      monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
      monthsParseExact: true,
      weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
      weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
      weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Inniu ag] LT",
        nextDay: "[Amárach ag] LT",
        nextWeek: "dddd [ag] LT",
        lastDay: "[Inné ag] LT",
        lastWeek: "dddd [seo caite] [ag] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "i %s",
        past: "%s ó shin",
        s: "cúpla soicind",
        ss: "%d soicind",
        m: "nóiméad",
        mm: "%d nóiméad",
        h: "uair an chloig",
        hh: "%d uair an chloig",
        d: "lá",
        dd: "%d lá",
        M: "mí",
        MM: "%d míonna",
        y: "bliain",
        yy: "%d bliain"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
      ordinal: function (e) {
        return e + (e === 1 ? "d" : e % 10 == 2 ? "na" : "mh");
      },
      week: {
        dow: 1,
        doy: 4
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}