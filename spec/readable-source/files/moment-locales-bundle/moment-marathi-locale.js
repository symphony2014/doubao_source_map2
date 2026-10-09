// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(132840) to 'moment-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85547.08aa3c4c.js
         * chunkId: 85547
         * moduleId: 921394
         */
module.exports = function (module, exports, require) {
  (function (e) {
    "use strict";

    var a = {
      1: "१",
      2: "२",
      3: "३",
      4: "४",
      5: "५",
      6: "६",
      7: "७",
      8: "८",
      9: "९",
      0: "०"
    };
    var t = {
      "१": "1",
      "२": "2",
      "३": "3",
      "४": "4",
      "५": "5",
      "६": "6",
      "७": "7",
      "८": "8",
      "९": "9",
      "०": "0"
    };
    function n(e, a, t, n) {
      var s = "";
      if (a) {
        switch (t) {
          case "s":
            s = "काही सेकंद";
            break;
          case "ss":
            s = "%d सेकंद";
            break;
          case "m":
            s = "एक मिनिट";
            break;
          case "mm":
            s = "%d मिनिटे";
            break;
          case "h":
            s = "एक तास";
            break;
          case "hh":
            s = "%d तास";
            break;
          case "d":
            s = "एक दिवस";
            break;
          case "dd":
            s = "%d दिवस";
            break;
          case "M":
            s = "एक महिना";
            break;
          case "MM":
            s = "%d महिने";
            break;
          case "y":
            s = "एक वर्ष";
            break;
          case "yy":
            s = "%d वर्षे";
        }
      } else {
        switch (t) {
          case "s":
            s = "काही सेकंदां";
            break;
          case "ss":
            s = "%d सेकंदां";
            break;
          case "m":
            s = "एका मिनिटा";
            break;
          case "mm":
            s = "%d मिनिटां";
            break;
          case "h":
            s = "एका तासा";
            break;
          case "hh":
            s = "%d तासां";
            break;
          case "d":
            s = "एका दिवसा";
            break;
          case "dd":
            s = "%d दिवसां";
            break;
          case "M":
            s = "एका महिन्या";
            break;
          case "MM":
            s = "%d महिन्यां";
            break;
          case "y":
            s = "एका वर्षा";
            break;
          case "yy":
            s = "%d वर्षां";
        }
      }
      return s.replace(/%d/i, e);
    }
    e.defineLocale("mr", {
      months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
      monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
      monthsParseExact: true,
      weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
      weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
      weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
      longDateFormat: {
        LT: "A h:mm वाजता",
        LTS: "A h:mm:ss वाजता",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm वाजता",
        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
      },
      calendar: {
        sameDay: "[आज] LT",
        nextDay: "[उद्या] LT",
        nextWeek: "dddd, LT",
        lastDay: "[काल] LT",
        lastWeek: "[मागील] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sमध्ये",
        past: "%sपूर्वी",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
      },
      preparse: function (e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return t[e];
        });
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return a[e];
        });
      },
      meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
      meridiemHour: function (e, a) {
        if (e === 12) {
          e = 0;
        }
        if (a === "पहाटे" || a === "सकाळी") {
          return e;
        } else if (a === "दुपारी" || a === "सायंकाळी" || a === "रात्री") {
          if (e >= 12) {
            return e;
          } else {
            return e + 12;
          }
        } else {
          return undefined;
        }
      },
      meridiem: function (e, a, t) {
        if (e >= 0 && e < 6) {
          return "पहाटे";
        } else if (e < 12) {
          return "सकाळी";
        } else if (e < 17) {
          return "दुपारी";
        } else if (e < 20) {
          return "सायंकाळी";
        } else {
          return "रात्री";
        }
      },
      week: {
        dow: 0,
        doy: 6
      }
    });
  })(require("moment-js-core-lib") /*id: 132840*/);
}