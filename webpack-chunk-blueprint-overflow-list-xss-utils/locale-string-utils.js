// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 936885
         */
module.exports = function (module, exports, require) {
  var t;
  var n = t = {
    _regexEscape: /([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g,
    _regexParseLocale: /^([a-zA-Z]*)([_\-a-zA-Z]*)$/,
    _escapeRegExpPattern: function (e) {
      if (typeof e != "string") {
        return e;
      } else {
        return e.replace(t._regexEscape, "\\$1");
      }
    },
    _toLowerCase: function (e, t) {
      if (typeof e != "string") {
        return t && e;
      } else {
        return e.toLowerCase();
      }
    },
    _toUpperCase: function (e, t) {
      if (typeof e != "string") {
        return t && e;
      } else {
        return e.toUpperCase();
      }
    },
    _trim: function (e, n, r) {
      var i;
      var o = [];
      function a(e) {
        o.push("^" + e + "+|" + e + "+$");
      }
      if (typeof n == "boolean") {
        r = n;
        n = null;
      }
      if (typeof e != "string") {
        return r && e;
      }
      if (Array.isArray(n)) {
        n.map(function (e) {
          a(t._escapeRegExpPattern(e));
        });
      }
      if (typeof n == "string") {
        a(t._escapeRegExpPattern(n));
      }
      if (!n) {
        a("\\s");
      }
      i = RegExp("(" + o.join("|") + ")", "g");
      while (e.match(i)) {
        e = e.replace(i, "");
      }
      return e;
    },
    _parseLocale: function (e) {
      var n;
      var r = t._regexParseLocale.exec(e);
      if (e && r) {
        r[2] = t._trim(r[2], ["-", "_"]);
        return {
          lang: t._toLowerCase(r[1]),
          countryCode: n = t._toUpperCase(r[2]) || n
        };
      }
    },
    isRtlLang: function (e) {
      var n = t._parseLocale(e);
      if (n) {
        return t._BIDI_RTL_LANGS.indexOf(n.lang) >= 0;
      }
    },
    getLangDir: function (e) {
      if (t.isRtlLang(e)) {
        return "rtl";
      } else {
        return "ltr";
      }
    }
  };
  Object.defineProperty(t, "_BIDI_RTL_LANGS", {
    value: ["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"],
    writable: false,
    enumerable: true,
    configurable: false
  });
  module.exports = n;
}