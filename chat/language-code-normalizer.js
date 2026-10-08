// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'normalizeLanguageCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 12412
         */
module.exports = function (module, exports, require) {
  var i18nLanguageConstants = require("i18n-language-constants") /*id: 437736*/;
  let r = e => {
    if (e === i18nLanguageConstants.browserLanguageKey && typeof navigator != "undefined") {
      e = "zh";
    }
    let t = e.toLowerCase();
    if (["en-gb"].includes(t)) {
      return e;
    }
    let [n] = t.split(/-|_/);
    if (n === "zh") {
      if (["zh", "zh-cn", "zh-sg", "zh-hans", "zh-hans-cn", "zh-hans-sg"].includes(t)) {
        return "zh";
      } else {
        return "zh-Hant";
      }
    } else if (n === "ms") {
      return "ms-MY";
    } else if (n === "th") {
      return "th-TH";
    } else {
      return n;
    }
  };
  require.d(exports, {
    normalizeLanguageCode: function () {
      return r;
    }
  });
}