// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 660330
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t) {
      var n;
      var s;
      var r;
      if (t === "m") {
        if (a) {
          return "хвіліна";
        } else {
          return "хвіліну";
        }
      } else if (t === "h") {
        if (a) {
          return "гадзіна";
        } else {
          return "гадзіну";
        }
      } else {
        return e + " " + (n = {
          ss: a ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: a ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: a ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў"
        }[t], s = +e, r = n.split("_"), s % 10 == 1 && s % 100 != 11 ? r[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? r[1] : r[2]);
      }
    }
    e.defineLocale("be", {
      months: {
        format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
        standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
      },
      monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
      weekdays: {
        format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
        standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
      },
      weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., HH:mm",
        LLLL: "dddd, D MMMM YYYY г., HH:mm"
      },
      calendar: {
        sameDay: "[Сёння ў] LT",
        nextDay: "[Заўтра ў] LT",
        lastDay: "[Учора ў] LT",
        nextWeek: function () {
          return "[У] dddd [ў] LT";
        },
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return "[У мінулую] dddd [ў] LT";
            case 1:
            case 2:
            case 4:
              return "[У мінулы] dddd [ў] LT";
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "праз %s",
        past: "%s таму",
        s: "некалькі секунд",
        m: a,
        mm: a,
        h: a,
        hh: a,
        d: "дзень",
        dd: a,
        M: "месяц",
        MM: a,
        y: "год",
        yy: a
      },
      meridiemParse: /ночы|раніцы|дня|вечара/,
      isPM: function (e) {
        return /^(дня|вечара)$/.test(e);
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "ночы";
        } else if (e < 12) {
          return "раніцы";
        } else if (e < 17) {
          return "дня";
        } else {
          return "вечара";
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
      ordinal: function (e, a) {
        switch (a) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            if ((e % 10 == 2 || e % 10 == 3) && e % 100 != 12 && e % 100 != 13) {
              return e + "-і";
            } else {
              return e + "-ы";
            }
          case "D":
            return e + "-га";
          default:
            return e;
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}