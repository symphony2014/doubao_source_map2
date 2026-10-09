// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 837891
         */
module.exports = function (module, exports, require) {
  (function (e) {
    e.defineLocale("te", {
      months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
      monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
      monthsParseExact: true,
      weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
      weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
      weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[నేడు] LT",
        nextDay: "[రేపు] LT",
        nextWeek: "dddd, LT",
        lastDay: "[నిన్న] LT",
        lastWeek: "[గత] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s లో",
        past: "%s క్రితం",
        s: "కొన్ని క్షణాలు",
        ss: "%d సెకన్లు",
        m: "ఒక నిమిషం",
        mm: "%d నిమిషాలు",
        h: "ఒక గంట",
        hh: "%d గంటలు",
        d: "ఒక రోజు",
        dd: "%d రోజులు",
        M: "ఒక నెల",
        MM: "%d నెలలు",
        y: "ఒక సంవత్సరం",
        yy: "%d సంవత్సరాలు"
      },
      dayOfMonthOrdinalParse: /\d{1,2}వ/,
      ordinal: "%dవ",
      meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "రాత్రి") {
          if (e < 4) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "ఉదయం") {
          return e;
        } else if (a === "మధ్యాహ్నం") {
          if (e >= 10) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "సాయంత్రం") {
          return e + 12;
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "రాత్రి";
        } else if (e < 10) {
          return "ఉదయం";
        } else if (e < 17) {
          return "మధ్యాహ్నం";
        } else if (e < 20) {
          return "సాయంత్రం";
        } else {
          return "రాత్రి";
        }
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}