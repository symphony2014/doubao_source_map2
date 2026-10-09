// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 719917
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    function a(e, a, t, n) {
      var s = {
        s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
        ss: [e + " सॅकंडांनी", e + " सॅकंड"],
        m: ["एका मिणटान", "एक मिनूट"],
        mm: [e + " मिणटांनी", e + " मिणटां"],
        h: ["एका वरान", "एक वर"],
        hh: [e + " वरांनी", e + " वरां"],
        d: ["एका दिसान", "एक दीस"],
        dd: [e + " दिसांनी", e + " दीस"],
        M: ["एका म्हयन्यान", "एक म्हयनो"],
        MM: [e + " म्हयन्यानी", e + " म्हयने"],
        y: ["एका वर्सान", "एक वर्स"],
        yy: [e + " वर्सांनी", e + " वर्सां"]
      };
      if (n) {
        return s[t][0];
      } else {
        return s[t][1];
      }
    }
    e.defineLocale("gom-deva", {
      months: {
        standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
        isFormat: /MMMM(\s)+D[oD]?/
      },
      monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
      monthsParseExact: true,
      weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
      weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
      weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: "A h:mm [वाजतां]",
        LTS: "A h:mm:ss [वाजतां]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [वाजतां]",
        LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
        llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
      },
      calendar: {
        sameDay: "[आयज] LT",
        nextDay: "[फाल्यां] LT",
        nextWeek: "[फुडलो] dddd[,] LT",
        lastDay: "[काल] LT",
        lastWeek: "[फाटलो] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s",
        past: "%s आदीं",
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
      dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
      ordinal: function (e, a) {
        if (a === "D") {
          return e + "वेर";
        } else {
          return e;
        }
      },
      week: {
        dow: 0,
        doy: 3
      },
      meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "राती") {
          if (e < 4) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "सकाळीं") {
          return e;
        } else if (a === "दनपारां") {
          if (e > 12) {
            return e;
          } else {
            return e + 12;
          }
        } else if (a === "सांजे") {
          return e + 12;
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e < 4) {
          return "राती";
        } else if (e < 12) {
          return "सकाळीं";
        } else if (e < 16) {
          return "दनपारां";
        } else if (e < 20) {
          return "सांजे";
        } else {
          return "राती";
        }
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}