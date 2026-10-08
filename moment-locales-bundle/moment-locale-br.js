// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 171052
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t) {
      var n;
      var s;
      var r;
      return e + " " + (n = {
        mm: "munutenn",
        MM: "miz",
        dd: "devezh"
      }[t], e === 2 ? (r = {
        m: "v",
        b: "v",
        d: "z"
      })[(s = n).charAt(0)] === undefined ? s : r[s.charAt(0)] + s.substring(1) : n);
    }
    var t = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i];
    var n = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i;
    var s = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
    e.defineLocale("br", {
      months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
      monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
      weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
      weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
      weekdaysParse: s,
      fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
      shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
      minWeekdaysParse: s,
      monthsRegex: n,
      monthsShortRegex: n,
      monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
      monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
      monthsParse: t,
      longMonthsParse: t,
      shortMonthsParse: t,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [a viz] MMMM YYYY",
        LLL: "D [a viz] MMMM YYYY HH:mm",
        LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hiziv da] LT",
        nextDay: "[Warcʼhoazh da] LT",
        nextWeek: "dddd [da] LT",
        lastDay: "[Decʼh da] LT",
        lastWeek: "dddd [paset da] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "a-benn %s",
        past: "%s ʼzo",
        s: "un nebeud segondennoù",
        ss: "%d eilenn",
        m: "ur vunutenn",
        mm: a,
        h: "un eur",
        hh: "%d eur",
        d: "un devezh",
        dd: a,
        M: "ur miz",
        MM: a,
        y: "ur bloaz",
        yy: function (e) {
          switch (function e(a) {
            if (a > 9) {
              return e(a % 10);
            } else {
              return a;
            }
          }(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz";
          }
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
      ordinal: function (e) {
        return e + (e === 1 ? "añ" : "vet");
      },
      week: {
        dow: 1,
        doy: 4
      },
      meridiemParse: /a.m.|g.m./,
      isPM: function (e) {
        return e === "g.m.";
      },
      meridiem: function (e, a, t) {
        if (e < 12) {
          return "a.m.";
        } else {
          return "g.m.";
        }
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}