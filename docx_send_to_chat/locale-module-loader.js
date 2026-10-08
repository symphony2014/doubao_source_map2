// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 20871
         */
module.exports = function (module, exports, require) {
  var i = {
    "./de-DE.js": ["714205", "44894"],
    "./zh-HK.js": ["545842", "63551"],
    "./zh-TW.js": ["475620", "64737"],
    "./vi-VN": ["70150", "2691"],
    "./it-IT": ["565817", "41996"],
    "./pt-BR": ["347008", "81272"],
    "./st-JO.js": ["368969", "45654"],
    "./es-ES.js": ["998577", "77038"],
    "./hi-IN": ["676333", "30353"],
    "./": ["992153", "79684"],
    "./zh-HK": ["545842", "63551"],
    "./en-US": ["733443", "30850"],
    "./index.js": ["992153", "79684"],
    "./pt-BR.js": ["347008", "81272"],
    "./ru-RU": ["802839", "57075"],
    "./ko-KR": ["804859", "36054"],
    "./zh-CN": ["550478", "26774"],
    "./de-DE": ["714205", "44894"],
    "./it-IT.js": ["565817", "41996"],
    "./es-ES": ["998577", "77038"],
    "./index": ["992153", "79684"],
    "./id-ID": ["702945", "89081"],
    "./en-US.js": ["733443", "30850"],
    "./fr-FR": ["266201", "65029"],
    "./fr-FR.js": ["266201", "65029"],
    "./hi-IN.js": ["676333", "30353"],
    "./th-TH": ["299875", "5107"],
    "./zh-TW": ["475620", "64737"],
    "./ko-KR.js": ["804859", "36054"],
    "./vi-VN.js": ["70150", "2691"],
    "./ms-MY": ["782045", "95592"],
    "./ms-MY.js": ["782045", "95592"],
    "./th-TH.js": ["299875", "5107"],
    "./ja-JP.js": ["390642", "59470"],
    "./ru-RU.js": ["802839", "57075"],
    "./id-ID.js": ["702945", "89081"],
    "./st-JO": ["368969", "45654"],
    "./zh-CN.js": ["550478", "26774"],
    "./ja-JP": ["390642", "59470"]
  };
  function n(e) {
    if (!require.o(i, e)) {
      return Promise.resolve().then(function () {
        var t = Error("Cannot find module '" + e + "'");
        t.code = "MODULE_NOT_FOUND";
        throw t;
      });
    }
    var t = i[e];
    var n = t[0];
    return require.e(t[1]).then(function () {
      return require(n);
    });
  }
  n.keys = function () {
    return Object.keys(i);
  };
  n.id = 20871;
  module.exports = n;
}