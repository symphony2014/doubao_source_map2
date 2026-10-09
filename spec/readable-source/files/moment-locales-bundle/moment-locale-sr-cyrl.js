// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 910315
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      words: {
        ss: ["секунда", "секунде", "секунди"],
        m: ["један минут", "једног минута"],
        mm: ["минут", "минута", "минута"],
        h: ["један сат", "једног сата"],
        hh: ["сат", "сата", "сати"],
        d: ["један дан", "једног дана"],
        dd: ["дан", "дана", "дана"],
        M: ["један месец", "једног месеца"],
        MM: ["месец", "месеца", "месеци"],
        y: ["једну годину", "једне године"],
        yy: ["годину", "године", "година"]
      },
      correctGrammaticalCase: function (e, a) {
        if (e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)) {
          if (e % 10 == 1) {
            return a[0];
          } else {
            return a[1];
          }
        } else {
          return a[2];
        }
      },
      translate: function (e, t, n, s) {
        var r;
        var i = a.words[n];
        if (n.length === 1) {
          if (n === "y" && t) {
            return "једна година";
          } else if (s || t) {
            return i[0];
          } else {
            return i[1];
          }
        } else {
          r = a.correctGrammaticalCase(e, i);
          if (n === "yy" && t && r === "годину") {
            return e + " година";
          } else {
            return e + " " + r;
          }
        }
      }
    };
    e.defineLocale("sr-cyrl", {
      months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
      monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
      monthsParseExact: true,
      weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
      weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
      weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D. M. YYYY.",
        LL: "D. MMMM YYYY.",
        LLL: "D. MMMM YYYY. H:mm",
        LLLL: "dddd, D. MMMM YYYY. H:mm"
      },
      calendar: {
        sameDay: "[данас у] LT",
        nextDay: "[сутра у] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[у] [недељу] [у] LT";
            case 3:
              return "[у] [среду] [у] LT";
            case 6:
              return "[у] [суботу] [у] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[у] dddd [у] LT";
          }
        },
        lastDay: "[јуче у] LT",
        lastWeek: function () {
          return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()];
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "пре %s",
        s: "неколико секунди",
        ss: a.translate,
        m: a.translate,
        mm: a.translate,
        h: a.translate,
        hh: a.translate,
        d: a.translate,
        dd: a.translate,
        M: a.translate,
        MM: a.translate,
        y: a.translate,
        yy: a.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}