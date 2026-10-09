// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 127263
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
          return "хвилина";
        } else {
          return "хвилину";
        }
      } else if (t === "h") {
        if (a) {
          return "година";
        } else {
          return "годину";
        }
      } else {
        return e + " " + (n = {
          ss: a ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
          mm: a ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
          hh: a ? "година_години_годин" : "годину_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років"
        }[t], s = +e, r = n.split("_"), s % 10 == 1 && s % 100 != 11 ? r[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? r[1] : r[2]);
      }
    }
    function t(e) {
      return function () {
        return e + "о" + (this.hours() === 11 ? "б" : "") + "] LT";
      };
    }
    e.defineLocale("uk", {
      months: {
        format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
        standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
      },
      monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
      weekdays: function (e, a) {
        var t = {
          nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
          accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
          genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
        };
        if (e === true) {
          return t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1));
        } else if (e) {
          return t[/(\[[ВвУу]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()];
        } else {
          return t.nominative;
        }
      },
      weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY р.",
        LLL: "D MMMM YYYY р., HH:mm",
        LLLL: "dddd, D MMMM YYYY р., HH:mm"
      },
      calendar: {
        sameDay: t("[Сьогодні "),
        nextDay: t("[Завтра "),
        lastDay: t("[Вчора "),
        nextWeek: t("[У] dddd ["),
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return t("[Минулої] dddd [").call(this);
            case 1:
            case 2:
            case 4:
              return t("[Минулого] dddd [").call(this);
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "%s тому",
        s: "декілька секунд",
        ss: a,
        m: a,
        mm: a,
        h: "годину",
        hh: a,
        d: "день",
        dd: a,
        M: "місяць",
        MM: a,
        y: "рік",
        yy: a
      },
      meridiemParse: /ночі|ранку|дня|вечора/,
      isPM: function (e) {
        return /^(дня|вечора)$/.test(e);
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "ночі";
        } else if (e < 12) {
          return "ранку";
        } else if (e < 17) {
          return "дня";
        } else {
          return "вечора";
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
      ordinal: function (e, a) {
        switch (a) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return e + "-й";
          case "D":
            return e + "-го";
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