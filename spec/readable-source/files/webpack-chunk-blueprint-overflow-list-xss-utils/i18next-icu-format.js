// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'I18nIcuFormat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 404395
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var intlMessageFormat = require("intl-message-format") /*id: 646430*/;
  function a() {
    return (a = Object.assign || function (e) {
      var t;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in t = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function s(e, t, n) {
    function r(e) {
      if (e && e.indexOf("###") > -1) {
        return e.replace(/###/g, ".");
      } else {
        return e;
      }
    }
    function i() {
      return !e || typeof e == "string";
    }
    if (n === undefined) {
      n = null;
    }
    for (var o = typeof t != "string" ? [].concat(t) : t.split("."); o.length > 1;) {
      if (i()) {
        return {};
      }
      var a = r(o.shift());
      if (!e[a] && n) {
        e[a] = new n();
      }
      e = e[a];
    }
    if (i()) {
      return {};
    } else {
      return {
        obj: e,
        k: r(o.shift())
      };
    }
  }
  (r = i ||= {}).keepRaw = "keepRaw";
  r.replaceAnyway = "replaceAnyway";
  i.replaceAnyway;
  var u = {
    memorize: false,
    memoizeFallback: false,
    bindI18n: false,
    bindI18nStore: false,
    onParseError: i.replaceAnyway
  };
  var c = function () {
    function e() {
      this.mem = {};
    }
    e.staticInit = function (t) {
      e._i18nextInstance = t;
    };
    e.prototype.init = function (t, n) {
      var r = this;
      if (t === undefined) {
        t = e._i18nextInstance;
      }
      var i = {};
      if (t == null ? undefined : t.options) {
        if (t.options.i18nFormat) {
          i = t.options.i18nFormat;
        }
        i.onParseError = t.options.onParseError;
        i.missingInterpolationHandler = t.options.missingInterpolationHandler;
        i.icuConfig = t.options.icuConfig;
        i.ignoreWarning = !!t.options.ignoreWarning;
      }
      this.options = Object.assign(u, n, i);
      this.formats = this.options.formats;
      if (t) {
        var a = this.options;
        var s = a.bindI18n;
        var c = a.bindI18nStore;
        var l = a.memorize;
        t.IntlMessageFormat = intlMessageFormat.IntlMessageFormat;
        this.IntlMessageFormat = intlMessageFormat.IntlMessageFormat;
        t.ICU = this;
        if (l) {
          if (s) {
            t.on(s, function () {
              return r.clearCache();
            });
          }
          if (c) {
            t.store.on(c, function () {
              return r.clearCache();
            });
          }
        }
      }
      if (this.options.localeData) {
        if (Object.prototype.toString.apply(this.options.localeData) === "[object Array]") {
          this.options.localeData.forEach(function (e) {
            return r.addLocaleData(e);
          });
        } else {
          this.addLocaleData(this.options.localeData);
        }
      }
    };
    e.prototype.addLocaleData = function (e) {
      (Object.prototype.toString.apply(e) === "[object Array]" ? e : [e]).forEach(function (e) {
        if (e && e.locale) {
          intlMessageFormat.IntlMessageFormat.__addLocaleData(e);
        }
      });
    };
    e.prototype.addUserDefinedFormats = function (e) {
      this.formats = this.formats ? a(a({}, this.formats), e) : e;
    };
    e.prototype.checkMissingInterpolation = function (e, t, n, r, o) {
      if ((this.options.icuConfig || {}).strict === false) {
        return n;
      }
      var a = {};
      var s = 0;
      for (; s < e.length; s++) {
        var u = e[s];
        if (u.type === 1) {
          var c = u.value;
          if (n[c] === null || n[c] === undefined) {
            if (typeof this.options.missingInterpolationHandler == "function") {
              var l = this.options.missingInterpolationHandler({
                key: o,
                text: t,
                locale: r,
                interpolation: {
                  key: c,
                  val: n[c]
                }
              });
              if (typeof l == "string") {
                a[c] = l;
                continue;
              }
            }
            switch (this.options.onParseError) {
              case i.keepRaw:
                throw Error();
              case i.replaceAnyway:
                a[c] = "{" + c + "}";
                continue;
            }
            if (typeof this.options.onParseError == "function") {
              var f = this.options.onParseError(t, c, r, this.IntlMessageFormat);
              if (f === true) {
                throw Error();
              }
              a[c] = typeof f == "string" ? f : "{" + c + "}";
            } else {
              this.options.ignoreWarning;
              a[c] = "{" + c + "}";
            }
          }
        }
      }
      return Object.assign({}, n, a);
    };
    e.prototype.parse = function (e, t, n, r, i, o) {
      var a;
      var u;
      var c;
      var l;
      var f = o && o.resolved && o.resolved.res;
      var h = this.options.memorize && n + "." + r + "." + i.replace(/\./g, "###");
      if (!f && t.thirdParamFallback && t.fallbackText) {
        e = t.fallbackText;
      }
      if (this.options.memorize) {
        l = function (e, t) {
          var n = s(e, t);
          var r = n.obj;
          var i = n.k;
          if (r) {
            return r[i];
          }
        }(this.mem, h);
      }
      try {
        if (!l && (l = new this.IntlMessageFormat(e, n, this.formats, (this.options.icuConfig || {}).formatOptions), this.options.memorize && (this.options.memoizeFallback || !o || f))) {
          a = this.mem;
          u = l;
          (c = s(a, h, Object)).obj[c.k] = u;
        }
        return l.format(this.checkMissingInterpolation(l.getAst(), e, t || {}, n, i));
      } catch (t) {
        return e;
      }
    };
    e.prototype.addLookupKeys = function (e, t, n, r, i) {
      return e;
    };
    e.prototype.clearCache = function () {
      this.mem = {};
    };
    e.type = "i18nFormat";
    e._i18nextInstance = null;
    return e;
  }();
  c.name;
  require.d(exports, {
    I18nIcuFormat: function () {
      return c;
    }
  });
}