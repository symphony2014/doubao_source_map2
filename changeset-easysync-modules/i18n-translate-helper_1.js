// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(646430) to 'intl-message-format'
// - Updated imported property 'ZP' to 'IntlMessageFormat' (module 646430)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 216030
         */
module.exports = function (module, exports, require) {
  var r = require("intl-message-format") /*id: 646430*/.IntlMessageFormat;
  var i = false;
  if (typeof window != "undefined") {
    if (window.__DOCS_SHOW_I18N_KEYS__ !== undefined) {
      i = !!window.__DOCS_SHOW_I18N_KEYS__;
    } else {
      try {
        var o = window.localStorage && window.localStorage.getItem("popup_I18nKey");
        i = o === "1";
      } catch (t) {}
    }
  }
  module.exports = {
    t: function t(e) {
      if (i) {
        return e;
      }
      var o;
      var s;
      var a = Array.prototype.slice.call(arguments, 1);
      var u = {};
      a = a.filter(function (t) {
        var e;
        var n;
        e = t;
        var r = Object.prototype.toString.call(e) === "[object String]" || (n = t, Object.prototype.toString.call(n) === "[object Number]");
        if (!r) {
          u = Object.assign(u, t);
        }
        return r;
      });
      var c = null;
      if (!(c = typeof window == "undefined" ? require.g : window).TTI18N || !c.TTI18N[e]) {
        if (window) {
          if (window.i18nKeyMissingArray) {
            window.i18nKeyMissingArray.push(e);
          } else {
            window.i18nKeyMissingArray = [e];
          }
        }
        return e;
      }
      o = c.TTI18N[e];
      var l = (s = a).length === 0 ? o : o.replace(/\$\{([0-9])\}/g, function (t, e) {
        return s[parseInt(e - 1, 10)];
      });
      if (Object.keys(u).length > 0) {
        try {
          l = new r(l, t.locales).format(u);
        } catch (t) {}
      }
      return l;
    }
  };
}