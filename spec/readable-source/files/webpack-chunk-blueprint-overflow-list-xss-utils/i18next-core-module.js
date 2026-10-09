// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'i18nextInstance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 667190
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var objectExtendUtil = require("object-extend-util") /*id: 597882*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var possibleConstructorReturn = require("possible-constructor-return") /*id: 233617*/;
  var getPrototypeOfHelper = require("get-prototype-of-helper") /*id: 109717*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var f = {
    type: "logger",
    log: function (e) {
      this.output("log", e);
    },
    warn: function (e) {
      this.output("warn", e);
    },
    error: function (e) {
      this.output("error", e);
    },
    output: function (e, t) {
      if (console && console[e]) {
        console[e].apply(console, t);
      }
    }
  };
  var h = new (function () {
    function e(t, n = {}) {
      classCallCheckUtil.classCallCheck(this, e);
      this.init(t, n);
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "init",
      value: function (e, t = {}) {
        this.prefix = t.prefix || "i18next:";
        this.logger = e || f;
        this.options = t;
        this.debug = t.debug;
      }
    }, {
      key: "setDebug",
      value: function (e) {
        this.debug = e;
      }
    }, {
      key: "log",
      value: function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "log", "", true);
      }
    }, {
      key: "warn",
      value: function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "warn", "", true);
      }
    }, {
      key: "error",
      value: function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "error", "");
      }
    }, {
      key: "deprecate",
      value: function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        return this.forward(t, "warn", "WARNING DEPRECATED: ", true);
      }
    }, {
      key: "forward",
      value: function (e, t, n, r) {
        if (r && !this.debug) {
          return null;
        } else {
          if (typeof e[0] == "string") {
            e[0] = `${n}${this.prefix} ${e[0]}`;
          }
          return this.logger[t](e);
        }
      }
    }, {
      key: "create",
      value: function (t) {
        return new e(this.logger, objectExtendUtil.extendObject({}, {
          prefix: `${this.prefix}:${t}:`
        }, this.options));
      }
    }]);
    return e;
  }())();
  var d = function () {
    function e() {
      classCallCheckUtil.classCallCheck(this, e);
      this.observers = {};
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "on",
      value: function (e, t) {
        var n = this;
        e.split(" ").forEach(function (e) {
          n.observers[e] = n.observers[e] || [];
          n.observers[e].push(t);
        });
        return this;
      }
    }, {
      key: "off",
      value: function (e, t) {
        if (this.observers[e]) {
          if (!t) {
            delete this.observers[e];
            return;
          }
          this.observers[e] = this.observers[e].filter(function (e) {
            return e !== t;
          });
        }
      }
    }, {
      key: "emit",
      value: function (e) {
        var t = arguments.length;
        var n = Array(t > 1 ? t - 1 : 0);
        var r = 1;
        for (; r < t; r++) {
          n[r - 1] = arguments[r];
        }
        if (this.observers[e]) {
          [].concat(this.observers[e]).forEach(function (e) {
            e.apply(undefined, n);
          });
        }
        if (this.observers["*"]) {
          [].concat(this.observers["*"]).forEach(function (t) {
            t.apply(t, [e].concat(n));
          });
        }
      }
    }]);
    return e;
  }();
  function p() {
    var e;
    var t;
    var n = new Promise(function (n, r) {
      e = n;
      t = r;
    });
    n.resolve = e;
    n.reject = t;
    return n;
  }
  function g(e) {
    if (e == null) {
      return "";
    } else {
      return "" + e;
    }
  }
  function v(e, t, n) {
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
    for (var o = typeof t != "string" ? [].concat(t) : t.split("."); o.length > 1;) {
      if (i()) {
        return {};
      }
      var a = r(o.shift());
      if (!e[a] && n) {
        e[a] = new n();
      }
      e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {};
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
  function m(e, t, n) {
    var r = v(e, t, Object);
    r.obj[r.k] = n;
  }
  function y(e, t) {
    var n = v(e, t);
    var r = n.obj;
    var i = n.k;
    if (r) {
      return r[i];
    }
  }
  function b(e, t, n) {
    var r = y(e, n);
    if (r !== undefined) {
      return r;
    } else {
      return y(t, n);
    }
  }
  function _(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var w = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  function E(e) {
    if (typeof e == "string") {
      return e.replace(/[&<>"'\/]/g, function (e) {
        return w[e];
      });
    } else {
      return e;
    }
  }
  var S = typeof window != "undefined" && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
  var x = function (e) {
    function t(e) {
      var n;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        ns: ["translation"],
        defaultNS: "translation"
      };
      classCallCheckUtil.classCallCheck(this, t);
      n = possibleConstructorReturn.constructorReturn(this, getPrototypeOfHelper.getPrototypeOf(t).call(this));
      if (S) {
        d.call(assertThisInitialized.assertThisInit(n));
      }
      n.data = e || {};
      n.options = r;
      if (n.options.keySeparator === undefined) {
        n.options.keySeparator = ".";
      }
      return n;
    }
    setPrototypeInheritance.setInheritance(t, e);
    classPropertyUtil.defineClassProps(t, [{
      key: "addNamespaces",
      value: function (e) {
        if (this.options.ns.indexOf(e) < 0) {
          this.options.ns.push(e);
        }
      }
    }, {
      key: "removeNamespaces",
      value: function (e) {
        var t = this.options.ns.indexOf(e);
        if (t > -1) {
          this.options.ns.splice(t, 1);
        }
      }
    }, {
      key: "getResource",
      value: function (e, t, n, r = {}) {
        var i = r.keySeparator !== undefined ? r.keySeparator : this.options.keySeparator;
        var o = [e, t];
        if (n && typeof n != "string") {
          o = o.concat(n);
        }
        if (n && typeof n == "string") {
          o = o.concat(i ? n.split(i) : n);
        }
        if (e.indexOf(".") > -1) {
          o = e.split(".");
        }
        return y(this.data, o);
      }
    }, {
      key: "addResource",
      value: function (e, t, n, r, i = {
        silent: false
      }) {
        var o = this.options.keySeparator;
        if (o === undefined) {
          o = ".";
        }
        var a = [e, t];
        if (n) {
          a = a.concat(o ? n.split(o) : n);
        }
        if (e.indexOf(".") > -1) {
          a = e.split(".");
          r = t;
          t = a[1];
        }
        this.addNamespaces(t);
        m(this.data, a, r);
        if (!i.silent) {
          this.emit("added", e, t, n, r);
        }
      }
    }, {
      key: "addResources",
      value: function (e, t, n, r = {
        silent: false
      }) {
        for (var i in n) {
          if (typeof n[i] == "string" || Object.prototype.toString.apply(n[i]) === "[object Array]") {
            this.addResource(e, t, i, n[i], {
              silent: true
            });
          }
        }
        if (!r.silent) {
          this.emit("added", e, t, n);
        }
      }
    }, {
      key: "addResourceBundle",
      value: function (e, t, n, r, o, a = {
        silent: false
      }) {
        var s = [e, t];
        if (e.indexOf(".") > -1) {
          s = e.split(".");
          r = n;
          n = t;
          t = s[1];
        }
        this.addNamespaces(t);
        var u = y(this.data, s) || {};
        if (r) {
          (function e(t, n, r) {
            for (var i in n) {
              if (i !== "__proto__" && i !== "constructor") {
                if (i in t) {
                  if (typeof t[i] == "string" || t[i] instanceof String || typeof n[i] == "string" || n[i] instanceof String) {
                    if (r) {
                      t[i] = n[i];
                    }
                  } else {
                    e(t[i], n[i], r);
                  }
                } else {
                  t[i] = n[i];
                }
              }
            }
            return t;
          })(u, n, o);
        } else {
          u = objectExtendUtil.extendObject({}, u, n);
        }
        m(this.data, s, u);
        if (!a.silent) {
          this.emit("added", e, t, n);
        }
      }
    }, {
      key: "removeResourceBundle",
      value: function (e, t) {
        if (this.hasResourceBundle(e, t)) {
          delete this.data[e][t];
        }
        this.removeNamespaces(t);
        this.emit("removed", e, t);
      }
    }, {
      key: "hasResourceBundle",
      value: function (e, t) {
        return this.getResource(e, t) !== undefined;
      }
    }, {
      key: "getResourceBundle",
      value: function (e, t) {
        t ||= this.options.defaultNS;
        if (this.options.compatibilityAPI === "v1") {
          return objectExtendUtil.extendObject({}, {}, this.getResource(e, t));
        } else {
          return this.getResource(e, t);
        }
      }
    }, {
      key: "getDataByLanguage",
      value: function (e) {
        return this.data[e];
      }
    }, {
      key: "toJSON",
      value: function () {
        return this.data;
      }
    }]);
    return t;
  }(d);
  var k = {
    processors: {},
    addPostProcessor: function (e) {
      this.processors[e.name] = e;
    },
    handle: function (e, t, n, r, i) {
      var o = this;
      e.forEach(function (e) {
        if (o.processors[e]) {
          t = o.processors[e].process(t, n, r, i);
        }
      });
      return t;
    }
  };
  var O = {};
  var A = function (e) {
    function t(e) {
      var n;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheckUtil.classCallCheck(this, t);
      n = possibleConstructorReturn.constructorReturn(this, getPrototypeOfHelper.getPrototypeOf(t).call(this));
      if (S) {
        d.call(assertThisInitialized.assertThisInit(n));
      }
      (function (e, t, n) {
        e.forEach(function (e) {
          if (t[e]) {
            n[e] = t[e];
          }
        });
      })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, assertThisInitialized.assertThisInit(n));
      n.options = r;
      if (n.options.keySeparator === undefined) {
        n.options.keySeparator = ".";
      }
      n.logger = h.create("translator");
      return n;
    }
    setPrototypeInheritance.setInheritance(t, e);
    classPropertyUtil.defineClassProps(t, [{
      key: "changeLanguage",
      value: function (e) {
        if (e) {
          this.language = e;
        }
      }
    }, {
      key: "exists",
      value: function (e, t = {
        interpolation: {}
      }) {
        var n = this.resolve(e, t);
        return n && n.res !== undefined;
      }
    }, {
      key: "extractFromKey",
      value: function (e, t) {
        var n = t.nsSeparator !== undefined ? t.nsSeparator : this.options.nsSeparator;
        if (n === undefined) {
          n = ":";
        }
        var r = t.keySeparator !== undefined ? t.keySeparator : this.options.keySeparator;
        var i = t.ns || this.options.defaultNS;
        if (n && e.indexOf(n) > -1) {
          var o = e.match(this.interpolator.nestingRegexp);
          if (o && o.length > 0) {
            return {
              key: e,
              namespaces: i
            };
          }
          var a = e.split(n);
          if (n !== r || n === r && this.options.ns.indexOf(a[0]) > -1) {
            i = a.shift();
          }
          e = a.join(r);
        }
        if (typeof i == "string") {
          i = [i];
        }
        return {
          key: e,
          namespaces: i
        };
      }
    }, {
      key: "translate",
      value: function (e, n, o) {
        var a = this;
        if (typeofHelper.getType(n) !== "object" && this.options.overloadTranslationOptionHandler) {
          n = this.options.overloadTranslationOptionHandler(arguments);
        }
        n ||= {};
        if (e == null) {
          return "";
        }
        if (!Array.isArray(e)) {
          e = [String(e)];
        }
        var s = n.keySeparator !== undefined ? n.keySeparator : this.options.keySeparator;
        var u = this.extractFromKey(e[e.length - 1], n);
        var c = u.key;
        var l = u.namespaces;
        var f = l[l.length - 1];
        var h = n.lng || this.language;
        var d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (h && h.toLowerCase() === "cimode") {
          if (d) {
            return f + (n.nsSeparator || this.options.nsSeparator) + c;
          } else {
            return c;
          }
        }
        var p = this.resolve(e, n);
        var g = p && p.res;
        var v = p && p.usedKey || c;
        var m = p && p.exactUsedKey || c;
        var y = Object.prototype.toString.apply(g);
        var b = n.joinArrays !== undefined ? n.joinArrays : this.options.joinArrays;
        var _ = !this.i18nFormat || this.i18nFormat.handleAsObject;
        var w = typeof g != "string" && typeof g != "boolean" && typeof g != "number";
        if (_ && g && w && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(y) < 0 && (typeof b != "string" || y !== "[object Array]")) {
          if (!n.returnObjects && !this.options.returnObjects) {
            this.logger.warn("accessing an object - but returnObjects options is not enabled!");
            if (this.options.returnedObjectHandler) {
              return this.options.returnedObjectHandler(v, g, n);
            } else {
              return `key '${c} (${this.language})' returned an object instead of string.`;
            }
          }
          if (s) {
            var E = y === "[object Array]";
            var S = E ? [] : {};
            var x = E ? m : v;
            for (var k in g) {
              if (Object.prototype.hasOwnProperty.call(g, k)) {
                var O = `${x}${s}${k}`;
                S[k] = this.translate(O, objectExtendUtil.extendObject({}, n, {
                  joinArrays: false,
                  ns: l
                }));
                if (S[k] === O) {
                  S[k] = g[k];
                }
              }
            }
            g = S;
          }
        } else if (_ && typeof b == "string" && y === "[object Array]") {
          if (g = g.join(b)) {
            g = this.extendTranslation(g, e, n, o);
          }
        } else {
          var A = false;
          var T = false;
          var R = n.count !== undefined && typeof n.count != "string";
          var C = t.hasDefaultValue(n);
          var M = R ? this.pluralResolver.getSuffix(h, n.count) : "";
          var P = n[`defaultValue${M}`] || n.defaultValue;
          if (!this.isValidLookup(g) && C) {
            A = true;
            g = P;
          }
          if (!this.isValidLookup(g)) {
            T = true;
            g = c;
          }
          var D = C && P !== g && this.options.updateMissing;
          if (T || A || D) {
            this.logger.log(D ? "updateKey" : "missingKey", h, f, c, D ? P : g);
            if (s) {
              var j = this.resolve(c, objectExtendUtil.extendObject({}, n, {
                keySeparator: false
              }));
              if (j && j.res) {
                this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
            }
            var I = [];
            var N = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
            if (this.options.saveMissingTo === "fallback" && N && N[0]) {
              for (var L = 0; L < N.length; L++) {
                I.push(N[L]);
              }
            } else if (this.options.saveMissingTo === "all") {
              I = this.languageUtils.toResolveHierarchy(n.lng || this.language);
            } else {
              I.push(n.lng || this.language);
            }
            function B(e, t, r) {
              if (a.options.missingKeyHandler) {
                a.options.missingKeyHandler(e, f, t, D ? r : g, D, n);
              } else if (a.backendConnector && a.backendConnector.saveMissing) {
                a.backendConnector.saveMissing(e, f, t, D ? r : g, D, n);
              }
              a.emit("missingKey", e, f, t, g);
            }
            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && R) {
                I.forEach(function (e) {
                  a.pluralResolver.getSuffixes(e).forEach(function (t) {
                    B([e], c + t, n[`defaultValue${t}`] || P);
                  });
                });
              } else {
                B(I, c, P);
              }
            }
          }
          g = this.extendTranslation(g, e, n, p, o);
          if (T && g === c && this.options.appendNamespaceToMissingKey) {
            g = `${f}:${c}`;
          }
          if (T && this.options.parseMissingKeyHandler) {
            g = this.options.parseMissingKeyHandler(g);
          }
        }
        return g;
      }
    }, {
      key: "extendTranslation",
      value: function (e, t, n, r, o) {
        var a = this;
        if (this.i18nFormat && this.i18nFormat.parse) {
          e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
            resolved: r
          });
        } else if (!n.skipInterpolation) {
          if (n.interpolation) {
            this.interpolator.init(objectExtendUtil.extendObject({}, n, {
              interpolation: objectExtendUtil.extendObject({}, this.options.interpolation, n.interpolation)
            }));
          }
          var s;
          var u = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
          if (u) {
            var c = e.match(this.interpolator.nestingRegexp);
            s = c && c.length;
          }
          var l = n.replace && typeof n.replace != "string" ? n.replace : n;
          if (this.options.interpolation.defaultVariables) {
            l = objectExtendUtil.extendObject({}, this.options.interpolation.defaultVariables, l);
          }
          e = this.interpolator.interpolate(e, l, n.lng || this.language, n);
          if (u) {
            var f = e.match(this.interpolator.nestingRegexp);
            if (s < (f && f.length)) {
              n.nest = false;
            }
          }
          if (n.nest !== false) {
            e = this.interpolator.nest(e, function () {
              var e = arguments.length;
              var r = Array(e);
              var i = 0;
              for (; i < e; i++) {
                r[i] = arguments[i];
              }
              if (o && o[0] === r[0] && !n.context) {
                a.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`);
                return null;
              } else {
                return a.translate.apply(a, r.concat([t]));
              }
            }, n);
          }
          if (n.interpolation) {
            this.interpolator.reset();
          }
        }
        var h = n.postProcess || this.options.postProcess;
        var d = typeof h == "string" ? [h] : h;
        if (e != null && d && d.length && n.applyPostProcessor !== false) {
          e = k.handle(d, e, t, this.options && this.options.postProcessPassResolved ? objectExtendUtil.extendObject({
            i18nResolved: r
          }, n) : n, this);
        }
        return e;
      }
    }, {
      key: "resolve",
      value: function (e) {
        var t;
        var n;
        var r;
        var i;
        var o;
        var a = this;
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (typeof e == "string") {
          e = [e];
        }
        e.forEach(function (e) {
          if (!a.isValidLookup(t)) {
            var u = a.extractFromKey(e, s);
            var c = u.key;
            n = c;
            var l = u.namespaces;
            if (a.options.fallbackNS) {
              l = l.concat(a.options.fallbackNS);
            }
            var f = s.count !== undefined && typeof s.count != "string";
            var h = s.context !== undefined && typeof s.context == "string" && s.context !== "";
            var d = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
            l.forEach(function (e) {
              if (!a.isValidLookup(t)) {
                o = e;
                if (!O[`${d[0]}-${e}`] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(o)) {
                  O[`${d[0]}-${e}`] = true;
                  a.logger.warn(`key "${n}" for languages "${d.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                }
                d.forEach(function (n) {
                  if (!a.isValidLookup(t)) {
                    i = n;
                    var o;
                    var u;
                    var l = c;
                    var d = [l];
                    for (a.i18nFormat && a.i18nFormat.addLookupKeys ? a.i18nFormat.addLookupKeys(d, c, n, e, s) : (f && (o = a.pluralResolver.getSuffix(n, s.count)), f && h && d.push(l + o), h && d.push(l += `${a.options.contextSeparator}${s.context}`), f && d.push(l += o)); u = d.pop();) {
                      if (!a.isValidLookup(t)) {
                        r = u;
                        t = a.getResource(n, e, u, s);
                      }
                    }
                  }
                });
              }
            });
          }
        });
        return {
          res: t,
          usedKey: n,
          exactUsedKey: r,
          usedLng: i,
          usedNS: o
        };
      }
    }, {
      key: "isValidLookup",
      value: function (e) {
        return e !== undefined && (!!this.options.returnNull || e !== null) && (!!this.options.returnEmptyString || e !== "");
      }
    }, {
      key: "getResource",
      value: function (e, t, n, r = {}) {
        if (this.i18nFormat && this.i18nFormat.getResource) {
          return this.i18nFormat.getResource(e, t, n, r);
        } else {
          return this.resourceStore.getResource(e, t, n, r);
        }
      }
    }], [{
      key: "hasDefaultValue",
      value: function (e) {
        var t = "defaultValue";
        for (var n in e) {
          if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== undefined) {
            return true;
          }
        }
        return false;
      }
    }]);
    return t;
  }(d);
  function T(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var R = function () {
    function e(t) {
      classCallCheckUtil.classCallCheck(this, e);
      this.options = t;
      this.whitelist = this.options.supportedLngs || false;
      this.supportedLngs = this.options.supportedLngs || false;
      this.logger = h.create("languageUtils");
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "getScriptPartFromCode",
      value: function (e) {
        if (!e || e.indexOf("-") < 0) {
          return null;
        }
        var t = e.split("-");
        if (t.length === 2) {
          return null;
        } else {
          t.pop();
          if (t[t.length - 1].toLowerCase() === "x") {
            return null;
          } else {
            return this.formatLanguageCode(t.join("-"));
          }
        }
      }
    }, {
      key: "getLanguagePartFromCode",
      value: function (e) {
        if (!e || e.indexOf("-") < 0) {
          return e;
        }
        var t = e.split("-");
        return this.formatLanguageCode(t[0]);
      }
    }, {
      key: "formatLanguageCode",
      value: function (e) {
        if (typeof e == "string" && e.indexOf("-") > -1) {
          var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
          var n = e.split("-");
          if (this.options.lowerCaseLng) {
            n = n.map(function (e) {
              return e.toLowerCase();
            });
          } else if (n.length === 2) {
            n[0] = n[0].toLowerCase();
            n[1] = n[1].toUpperCase();
            if (t.indexOf(n[1].toLowerCase()) > -1) {
              n[1] = T(n[1].toLowerCase());
            }
          } else if (n.length === 3) {
            n[0] = n[0].toLowerCase();
            if (n[1].length === 2) {
              n[1] = n[1].toUpperCase();
            }
            if (n[0] !== "sgn" && n[2].length === 2) {
              n[2] = n[2].toUpperCase();
            }
            if (t.indexOf(n[1].toLowerCase()) > -1) {
              n[1] = T(n[1].toLowerCase());
            }
            if (t.indexOf(n[2].toLowerCase()) > -1) {
              n[2] = T(n[2].toLowerCase());
            }
          }
          return n.join("-");
        }
        if (this.options.cleanCode || this.options.lowerCaseLng) {
          return e.toLowerCase();
        } else {
          return e;
        }
      }
    }, {
      key: "isWhitelisted",
      value: function (e) {
        this.logger.deprecate("languageUtils.isWhitelisted", "function \"isWhitelisted\" will be renamed to \"isSupportedCode\" in the next major - please make sure to rename it's usage asap.");
        return this.isSupportedCode(e);
      }
    }, {
      key: "isSupportedCode",
      value: function (e) {
        if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
          e = this.getLanguagePartFromCode(e);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
      }
    }, {
      key: "getBestMatchFromCodes",
      value: function (e) {
        var t;
        var n = this;
        if (e) {
          e.forEach(function (e) {
            if (!t) {
              var r = n.formatLanguageCode(e);
              if (!n.options.supportedLngs || n.isSupportedCode(r)) {
                t = r;
              }
            }
          });
          if (!t && this.options.supportedLngs) {
            e.forEach(function (e) {
              if (!t) {
                var r = n.getLanguagePartFromCode(e);
                if (n.isSupportedCode(r)) {
                  return t = r;
                }
                t = n.options.supportedLngs.find(function (e) {
                  if (e.indexOf(r) === 0) {
                    return e;
                  }
                });
              }
            });
          }
          t ||= this.getFallbackCodes(this.options.fallbackLng)[0];
          return t;
        } else {
          return null;
        }
      }
    }, {
      key: "getFallbackCodes",
      value: function (e, t) {
        if (!e) {
          return [];
        }
        if (typeof e == "function") {
          e = e(t);
        }
        if (typeof e == "string") {
          e = [e];
        }
        if (Object.prototype.toString.apply(e) === "[object Array]") {
          return e;
        }
        if (!t) {
          return e.default || [];
        }
        var n = e[t];
        n ||= e[this.getScriptPartFromCode(t)];
        n ||= e[this.formatLanguageCode(t)];
        n ||= e[this.getLanguagePartFromCode(t)];
        n ||= e.default;
        return n || [];
      }
    }, {
      key: "toResolveHierarchy",
      value: function (e, t) {
        var n = this;
        var r = this.getFallbackCodes(t || this.options.fallbackLng || [], e);
        var i = [];
        function o(e) {
          if (e) {
            if (n.isSupportedCode(e)) {
              i.push(e);
            } else {
              n.logger.warn(`rejecting language code not found in supportedLngs: ${e}`);
            }
          }
        }
        if (typeof e == "string" && e.indexOf("-") > -1) {
          if (this.options.load !== "languageOnly") {
            o(this.formatLanguageCode(e));
          }
          if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") {
            o(this.getScriptPartFromCode(e));
          }
          if (this.options.load !== "currentOnly") {
            o(this.getLanguagePartFromCode(e));
          }
        } else if (typeof e == "string") {
          o(this.formatLanguageCode(e));
        }
        r.forEach(function (e) {
          if (i.indexOf(e) < 0) {
            o(n.formatLanguageCode(e));
          }
        });
        return i;
      }
    }]);
    return e;
  }();
  var C = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
  }, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
  }];
  var M = {
    1: function (e) {
      return Number(e > 1);
    },
    2: function (e) {
      return Number(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
    },
    5: function (e) {
      return Number(e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
    },
    6: function (e) {
      return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2);
    },
    7: function (e) {
      return Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
    },
    8: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3);
    },
    9: function (e) {
      return Number(e >= 2);
    },
    10: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
    },
    11: function (e) {
      return Number(e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3);
    },
    12: function (e) {
      return Number(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return Number(e !== 0);
    },
    14: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3);
    },
    15: function (e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
    },
    16: function (e) {
      return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2);
    },
    17: function (e) {
      return Number(+(e != 1 && (e % 10 != 1 || e % 100 == 11)));
    },
    18: function (e) {
      return Number(e == 0 ? 0 : e == 1 ? 1 : 2);
    },
    19: function (e) {
      return Number(e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
    },
    20: function (e) {
      return Number(e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2);
    },
    21: function (e) {
      return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : (e % 100 == 3 || e % 100 == 4) * 3);
    },
    22: function (e) {
      return Number(e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
    }
  };
  var P = function () {
    function e(t) {
      var n;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheckUtil.classCallCheck(this, e);
      this.languageUtils = t;
      this.options = r;
      this.logger = h.create("pluralResolver");
      this.rules = (n = {}, C.forEach(function (e) {
        e.lngs.forEach(function (t) {
          n[t] = {
            numbers: e.nr,
            plurals: M[e.fc]
          };
        });
      }), n);
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "addRule",
      value: function (e, t) {
        this.rules[e] = t;
      }
    }, {
      key: "getRule",
      value: function (e) {
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
      }
    }, {
      key: "needsPlural",
      value: function (e) {
        var t = this.getRule(e);
        return t && t.numbers.length > 1;
      }
    }, {
      key: "getPluralFormsOfKey",
      value: function (e, t) {
        return this.getSuffixes(e).map(function (e) {
          return t + e;
        });
      }
    }, {
      key: "getSuffixes",
      value: function (e) {
        var t = this;
        var n = this.getRule(e);
        if (n) {
          return n.numbers.map(function (n) {
            return t.getSuffix(e, n);
          });
        } else {
          return [];
        }
      }
    }, {
      key: "getSuffix",
      value: function (e, t) {
        var n = this;
        var r = this.getRule(e);
        if (r) {
          var i = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t));
          var o = r.numbers[i];
          if (this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1) {
            if (o === 2) {
              o = "plural";
            } else if (o === 1) {
              o = "";
            }
          }
          function a() {
            if (n.options.prepend && o.toString()) {
              return n.options.prepend + o.toString();
            } else {
              return o.toString();
            }
          }
          if (this.options.compatibilityJSON === "v1") {
            if (o === 1) {
              return "";
            } else if (typeof o == "number") {
              return `_plural_${o.toString()}`;
            } else {
              return a();
            }
          } else if (this.options.compatibilityJSON === "v2") {
            return a();
          } else if (this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1) {
            return a();
          } else if (this.options.prepend && i.toString()) {
            return this.options.prepend + i.toString();
          } else {
            return i.toString();
          }
        }
        this.logger.warn(`no plural rule found for: ${e}`);
        return "";
      }
    }]);
    return e;
  }();
  var D = function () {
    function e(t = {}) {
      classCallCheckUtil.classCallCheck(this, e);
      this.logger = h.create("interpolator");
      this.options = t;
      this.format = t.interpolation && t.interpolation.format || function (e) {
        return e;
      };
      this.init(t);
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "init",
      value: function (e = {}) {
        e.interpolation ||= {
          escapeValue: true
        };
        var t = e.interpolation;
        this.escape = t.escape !== undefined ? t.escape : E;
        this.escapeValue = t.escapeValue === undefined || t.escapeValue;
        this.useRawValueToEscape = t.useRawValueToEscape !== undefined && t.useRawValueToEscape;
        this.prefix = t.prefix ? _(t.prefix) : t.prefixEscaped || "{{";
        this.suffix = t.suffix ? _(t.suffix) : t.suffixEscaped || "}}";
        this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",";
        this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-";
        this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "";
        this.nestingPrefix = t.nestingPrefix ? _(t.nestingPrefix) : t.nestingPrefixEscaped || _("$t(");
        this.nestingSuffix = t.nestingSuffix ? _(t.nestingSuffix) : t.nestingSuffixEscaped || _(")");
        this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",";
        this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1000;
        this.alwaysFormat = t.alwaysFormat !== undefined && t.alwaysFormat;
        this.resetRegExp();
      }
    }, {
      key: "reset",
      value: function () {
        if (this.options) {
          this.init(this.options);
        }
      }
    }, {
      key: "resetRegExp",
      value: function () {
        var e = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = RegExp(e, "g");
        var t = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = RegExp(t, "g");
        var n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = RegExp(n, "g");
      }
    }, {
      key: "interpolate",
      value: function (e, t, n, r) {
        var i;
        var o;
        var a;
        var s = this;
        var u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function c(e) {
          return e.replace(/\$/g, "$$$$");
        }
        function l(e) {
          if (e.indexOf(s.formatSeparator) < 0) {
            var i = b(t, u, e);
            if (s.alwaysFormat) {
              return s.format(i, undefined, n);
            } else {
              return i;
            }
          }
          var o = e.split(s.formatSeparator);
          var a = o.shift().trim();
          var c = o.join(s.formatSeparator).trim();
          return s.format(b(t, u, a), c, n, r);
        }
        this.resetRegExp();
        var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler;
        var h = r && r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
        [{
          regex: this.regexpUnescape,
          safeValue: function (e) {
            return c(e);
          }
        }, {
          regex: this.regexp,
          safeValue: function (e) {
            if (s.escapeValue) {
              return c(s.escape(e));
            } else {
              return c(e);
            }
          }
        }].forEach(function (t) {
          for (a = 0; i = t.regex.exec(e);) {
            if ((o = l(i[1].trim())) === undefined) {
              if (typeof f == "function") {
                var n = f(e, i, r);
                o = typeof n == "string" ? n : "";
              } else if (h) {
                o = i[0];
                continue;
              } else {
                s.logger.warn(`missed to pass in variable ${i[1]} for interpolating ${e}`);
                o = "";
              }
            } else if (typeof o != "string" && !s.useRawValueToEscape) {
              o = g(o);
            }
            e = e.replace(i[0], t.safeValue(o));
            t.regex.lastIndex = 0;
            if (++a >= s.maxReplaces) {
              break;
            }
          }
        });
        return e;
      }
    }, {
      key: "nest",
      value: function (e, t) {
        var n;
        var r;
        var o = this;
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var s = objectExtendUtil.extendObject({}, a);
        function u(e, t) {
          var n = this.nestingOptionsSeparator;
          if (e.indexOf(n) < 0) {
            return e;
          }
          var r = e.split(new RegExp(`${n}[ ]*{`));
          var o = `{${r[1]}`;
          e = r[0];
          o = (o = this.interpolate(o, s)).replace(/'/g, "\"");
          try {
            s = JSON.parse(o);
            if (t) {
              s = objectExtendUtil.extendObject({}, t, s);
            }
          } catch (t) {
            this.logger.warn(`failed parsing options string in nesting for key ${e}`, t);
            return `${e}${n}${o}`;
          }
          delete s.defaultValue;
          return e;
        }
        s.applyPostProcessor = false;
        delete s.defaultValue;
        while (n = this.nestingRegexp.exec(e)) {
          var c = [];
          var l = false;
          if (n[0].includes(this.formatSeparator) && !/{.*}/.test(n[1])) {
            var f = n[1].split(this.formatSeparator).map(function (e) {
              return e.trim();
            });
            n[1] = f.shift();
            c = f;
            l = true;
          }
          if ((r = t(u.call(this, n[1].trim(), s), s)) && n[0] === e && typeof r != "string") {
            return r;
          }
          if (typeof r != "string") {
            r = g(r);
          }
          if (!r) {
            this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`);
            r = "";
          }
          if (l) {
            r = c.reduce(function (e, t) {
              return o.format(e, t, a.lng, a);
            }, r.trim());
          }
          e = e.replace(n[0], r);
          this.regexp.lastIndex = 0;
        }
        return e;
      }
    }]);
    return e;
  }();
  var j = function (e) {
    function t(e, n, r) {
      var i;
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      classCallCheckUtil.classCallCheck(this, t);
      i = possibleConstructorReturn.constructorReturn(this, getPrototypeOfHelper.getPrototypeOf(t).call(this));
      if (S) {
        d.call(assertThisInitialized.assertThisInit(i));
      }
      i.backend = e;
      i.store = n;
      i.services = r;
      i.languageUtils = r.languageUtils;
      i.options = a;
      i.logger = h.create("backendConnector");
      i.state = {};
      i.queue = [];
      if (i.backend && i.backend.init) {
        i.backend.init(r, a.backend, a);
      }
      return i;
    }
    setPrototypeInheritance.setInheritance(t, e);
    classPropertyUtil.defineClassProps(t, [{
      key: "queueLoad",
      value: function (e, t, n, r) {
        var i = this;
        var o = [];
        var a = [];
        var s = [];
        var u = [];
        e.forEach(function (e) {
          var r = true;
          t.forEach(function (t) {
            var s = `${e}|${t}`;
            if (!n.reload && i.store.hasResourceBundle(e, t)) {
              i.state[s] = 2;
            } else if (!(i.state[s] < 0)) {
              if (i.state[s] === 1) {
                if (a.indexOf(s) < 0) {
                  a.push(s);
                }
              } else {
                i.state[s] = 1;
                r = false;
                if (a.indexOf(s) < 0) {
                  a.push(s);
                }
                if (o.indexOf(s) < 0) {
                  o.push(s);
                }
                if (u.indexOf(t) < 0) {
                  u.push(t);
                }
              }
            }
          });
          if (!r) {
            s.push(e);
          }
        });
        if (o.length || a.length) {
          this.queue.push({
            pending: a,
            loaded: {},
            errors: [],
            callback: r
          });
        }
        return {
          toLoad: o,
          pending: a,
          toLoadLanguages: s,
          toLoadNamespaces: u
        };
      }
    }, {
      key: "loaded",
      value: function (e, t, n) {
        var r = e.split("|");
        var i = r[0];
        var o = r[1];
        if (t) {
          this.emit("failedLoading", i, o, t);
        }
        if (n) {
          this.store.addResourceBundle(i, o, n);
        }
        this.state[e] = t ? -1 : 2;
        var a = {};
        this.queue.forEach(function (n) {
          var r;
          var s;
          var u;
          var c;
          var l;
          r = n.loaded;
          (c = (u = v(r, [i], Object)).obj)[l = u.k] = c[l] || [];
          if (!s) {
            c[l].push(o);
          }
          (function (e, t) {
            for (var n = e.indexOf(t); n !== -1;) {
              e.splice(n, 1);
              n = e.indexOf(t);
            }
          })(n.pending, e);
          if (t) {
            n.errors.push(t);
          }
          if (n.pending.length === 0 && !n.done) {
            Object.keys(n.loaded).forEach(function (e) {
              a[e] ||= [];
              if (n.loaded[e].length) {
                n.loaded[e].forEach(function (t) {
                  if (a[e].indexOf(t) < 0) {
                    a[e].push(t);
                  }
                });
              }
            });
            n.done = true;
            if (n.errors.length) {
              n.callback(n.errors);
            } else {
              n.callback();
            }
          }
        });
        this.emit("loaded", a);
        this.queue = this.queue.filter(function (e) {
          return !e.done;
        });
      }
    }, {
      key: "read",
      value: function (e, t, n) {
        var r = this;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
        var a = arguments.length > 5 ? arguments[5] : undefined;
        if (e.length) {
          return this.backend[n](e, t, function (s, u) {
            if (s && u && i < 5) {
              setTimeout(function () {
                r.read.call(r, e, t, n, i + 1, o * 2, a);
              }, o);
              return;
            }
            a(s, u);
          });
        } else {
          return a(null, {});
        }
      }
    }, {
      key: "prepareLoading",
      value: function (e, t) {
        var n = this;
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var i = arguments.length > 3 ? arguments[3] : undefined;
        if (!this.backend) {
          this.logger.warn("No backend was added via i18next.use. Will not load resources.");
          return i && i();
        }
        if (typeof e == "string") {
          e = this.languageUtils.toResolveHierarchy(e);
        }
        if (typeof t == "string") {
          t = [t];
        }
        var o = this.queueLoad(e, t, r, i);
        if (!o.toLoad.length) {
          if (!o.pending.length) {
            i();
          }
          return null;
        }
        o.toLoad.forEach(function (e) {
          n.loadOne(e);
        });
      }
    }, {
      key: "load",
      value: function (e, t, n) {
        this.prepareLoading(e, t, {}, n);
      }
    }, {
      key: "reload",
      value: function (e, t, n) {
        this.prepareLoading(e, t, {
          reload: true
        }, n);
      }
    }, {
      key: "loadOne",
      value: function (e) {
        var t = this;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var r = e.split("|");
        var i = r[0];
        var o = r[1];
        this.read(i, o, "read", undefined, undefined, function (r, a) {
          if (r) {
            t.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, r);
          }
          if (!r && a) {
            t.logger.log(`${n}loaded namespace ${o} for language ${i}`, a);
          }
          t.loaded(e, r, a);
        });
      }
    }, {
      key: "saveMissing",
      value: function (e, t, n, r, o, a = {}) {
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
          this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          return;
        }
        if (n != null && n !== "") {
          if (this.backend && this.backend.create) {
            this.backend.create(e, t, n, r, null, objectExtendUtil.extendObject({}, a, {
              isUpdate: o
            }));
          }
          if (e && e[0]) {
            this.store.addResource(e[0], t, n, r);
          }
        }
      }
    }]);
    return t;
  }(d);
  function I(e) {
    if (typeof e.ns == "string") {
      e.ns = [e.ns];
    }
    if (typeof e.fallbackLng == "string") {
      e.fallbackLng = [e.fallbackLng];
    }
    if (typeof e.fallbackNS == "string") {
      e.fallbackNS = [e.fallbackNS];
    }
    if (e.whitelist) {
      if (e.whitelist && e.whitelist.indexOf("cimode") < 0) {
        e.whitelist = e.whitelist.concat(["cimode"]);
      }
      e.supportedLngs = e.whitelist;
    }
    if (e.nonExplicitWhitelist) {
      e.nonExplicitSupportedLngs = e.nonExplicitWhitelist;
    }
    if (e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0) {
      e.supportedLngs = e.supportedLngs.concat(["cimode"]);
    }
    return e;
  }
  function N() {}
  var L = new (function (e) {
    function t() {
      var e;
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var r = arguments.length > 1 ? arguments[1] : undefined;
      classCallCheckUtil.classCallCheck(this, t);
      e = possibleConstructorReturn.constructorReturn(this, getPrototypeOfHelper.getPrototypeOf(t).call(this));
      if (S) {
        d.call(assertThisInitialized.assertThisInit(e));
      }
      e.options = I(n);
      e.services = {};
      e.logger = h;
      e.modules = {
        external: []
      };
      if (r && !e.isInitialized && !n.isClone) {
        if (!e.options.initImmediate) {
          e.init(n, r);
          return possibleConstructorReturn.constructorReturn(e, assertThisInitialized.assertThisInit(e));
        }
        setTimeout(function () {
          e.init(n, r);
        }, 0);
      }
      return e;
    }
    setPrototypeInheritance.setInheritance(t, e);
    classPropertyUtil.defineClassProps(t, [{
      key: "init",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = arguments.length > 1 ? arguments[1] : undefined;
        function o(e) {
          if (e) {
            if (typeof e == "function") {
              return new e();
            } else {
              return e;
            }
          } else {
            return null;
          }
        }
        if (typeof t == "function") {
          n = t;
          t = {};
        }
        if (t.whitelist && !t.supportedLngs) {
          this.logger.deprecate("whitelist", "option \"whitelist\" will be renamed to \"supportedLngs\" in the next major - please make sure to rename this option asap.");
        }
        if (t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs) {
          this.logger.deprecate("whitelist", "options \"nonExplicitWhitelist\" will be renamed to \"nonExplicitSupportedLngs\" in the next major - please make sure to rename this option asap.");
        }
        this.options = objectExtendUtil.extendObject({}, {
          debug: false,
          initImmediate: true,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: false,
          whitelist: false,
          nonExplicitWhitelist: false,
          supportedLngs: false,
          nonExplicitSupportedLngs: false,
          load: "all",
          preload: false,
          simplifyPluralSuffix: true,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: false,
          saveMissing: false,
          updateMissing: false,
          saveMissingTo: "fallback",
          saveMissingPlurals: true,
          missingKeyHandler: false,
          missingInterpolationHandler: false,
          postProcess: false,
          postProcessPassResolved: false,
          returnNull: true,
          returnEmptyString: true,
          returnObjects: false,
          joinArrays: false,
          returnedObjectHandler: false,
          parseMissingKeyHandler: false,
          appendNamespaceToMissingKey: false,
          appendNamespaceToCIMode: false,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (typeofHelper.getType(e[1]) === "object") {
              t = e[1];
            }
            if (typeof e[1] == "string") {
              t.defaultValue = e[1];
            }
            if (typeof e[2] == "string") {
              t.tDescription = e[2];
            }
            if (typeofHelper.getType(e[2]) === "object" || typeofHelper.getType(e[3]) === "object") {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: true,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1000,
            skipOnVariables: false
          }
        }, this.options, I(t));
        this.format = this.options.interpolation.format;
        n ||= N;
        if (!this.options.isClone) {
          if (this.modules.logger) {
            h.init(o(this.modules.logger), this.options);
          } else {
            h.init(null, this.options);
          }
          var a = new R(this.options);
          this.store = new x(this.options.resources, this.options);
          var s = this.services;
          s.logger = h;
          s.resourceStore = this.store;
          s.languageUtils = a;
          s.pluralResolver = new P(a, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          });
          s.interpolator = new D(this.options);
          s.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          };
          s.backendConnector = new j(o(this.modules.backend), s.resourceStore, s, this.options);
          s.backendConnector.on("*", function (t) {
            var n = arguments.length;
            var r = Array(n > 1 ? n - 1 : 0);
            var i = 1;
            for (; i < n; i++) {
              r[i - 1] = arguments[i];
            }
            e.emit.apply(e, [t].concat(r));
          });
          if (this.modules.languageDetector) {
            s.languageDetector = o(this.modules.languageDetector);
            s.languageDetector.init(s, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            s.i18nFormat = o(this.modules.i18nFormat);
            if (s.i18nFormat.init) {
              s.i18nFormat.init(this);
            }
          }
          this.translator = new A(this.services, this.options);
          this.translator.on("*", function (t) {
            var n = arguments.length;
            var r = Array(n > 1 ? n - 1 : 0);
            var i = 1;
            for (; i < n; i++) {
              r[i - 1] = arguments[i];
            }
            e.emit.apply(e, [t].concat(r));
          });
          this.modules.external.forEach(function (t) {
            if (t.init) {
              t.init(e);
            }
          });
        }
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          var u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          if (u.length > 0 && u[0] !== "dev") {
            this.options.lng = u[0];
          }
        }
        if (!this.services.languageDetector && !this.options.lng) {
          this.logger.warn("init: no languageDetector is used and no lng is defined");
        }
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (t) {
          e[t] = function () {
            var n;
            return (n = e.store)[t].apply(n, arguments);
          };
        });
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(function (t) {
          e[t] = function () {
            var n;
            (n = e.store)[t].apply(n, arguments);
            return e;
          };
        });
        var c = p();
        function l() {
          function t(t, r) {
            if (e.isInitialized) {
              e.logger.warn("init: i18next is already initialized. You should call init just once!");
            }
            e.isInitialized = true;
            if (!e.options.isClone) {
              e.logger.log("initialized", e.options);
            }
            e.emit("initialized", e.options);
            c.resolve(r);
            n(t, r);
          }
          if (e.languages && e.options.compatibilityAPI !== "v1" && !e.isInitialized) {
            return t(null, e.t.bind(e));
          }
          e.changeLanguage(e.options.lng, t);
        }
        if (this.options.resources || !this.options.initImmediate) {
          l();
        } else {
          setTimeout(l, 0);
        }
        return c;
      }
    }, {
      key: "loadResources",
      value: function (e) {
        var t = this;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : N;
        var r = n;
        var i = typeof e == "string" ? e : this.language;
        if (typeof e == "function") {
          r = e;
        }
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (i && i.toLowerCase() === "cimode") {
            return r();
          }
          var o = [];
          function a(e) {
            if (e) {
              t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                if (o.indexOf(e) < 0) {
                  o.push(e);
                }
              });
            }
          }
          if (i) {
            a(i);
          } else {
            this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (e) {
              return a(e);
            });
          }
          if (this.options.preload) {
            this.options.preload.forEach(function (e) {
              return a(e);
            });
          }
          this.services.backendConnector.load(o, this.options.ns, r);
        } else {
          r(null);
        }
      }
    }, {
      key: "reloadResources",
      value: function (e, t, n) {
        var r = p();
        e ||= this.languages;
        t ||= this.options.ns;
        n ||= N;
        this.services.backendConnector.reload(e, t, function (e) {
          r.resolve();
          n(e);
        });
        return r;
      }
    }, {
      key: "use",
      value: function (e) {
        if (!e) {
          throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        }
        if (!e.type) {
          throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        }
        if (e.type === "backend") {
          this.modules.backend = e;
        }
        if (e.type === "logger" || e.log && e.warn && e.error) {
          this.modules.logger = e;
        }
        if (e.type === "languageDetector") {
          this.modules.languageDetector = e;
        }
        if (e.type === "i18nFormat") {
          this.modules.i18nFormat = e;
        }
        if (e.type === "postProcessor") {
          k.addPostProcessor(e);
        }
        if (e.type === "3rdParty") {
          this.modules.external.push(e);
        }
        return this;
      }
    }, {
      key: "changeLanguage",
      value: function (e, t) {
        var n = this;
        this.isLanguageChangingTo = e;
        var r = p();
        this.emit("languageChanging", e);
        function i(e, i) {
          if (i) {
            n.language = i;
            n.languages = n.services.languageUtils.toResolveHierarchy(i);
            n.translator.changeLanguage(i);
            n.isLanguageChangingTo = undefined;
            n.emit("languageChanged", i);
            n.logger.log("languageChanged", i);
          } else {
            n.isLanguageChangingTo = undefined;
          }
          r.resolve(function () {
            return n.t.apply(n, arguments);
          });
          if (t) {
            t(e, function () {
              return n.t.apply(n, arguments);
            });
          }
        }
        function o(e) {
          var t = typeof e == "string" ? e : n.services.languageUtils.getBestMatchFromCodes(e);
          if (t) {
            if (!n.language) {
              n.language = t;
              n.languages = n.services.languageUtils.toResolveHierarchy(t);
            }
            if (!n.translator.language) {
              n.translator.changeLanguage(t);
            }
            if (n.services.languageDetector) {
              n.services.languageDetector.cacheUserLanguage(t);
            }
          }
          n.loadResources(t, function (e) {
            i(e, t);
          });
        }
        if (e || !this.services.languageDetector || this.services.languageDetector.async) {
          if (!e && this.services.languageDetector && this.services.languageDetector.async) {
            this.services.languageDetector.detect(o);
          } else {
            o(e);
          }
        } else {
          o(this.services.languageDetector.detect());
        }
        return r;
      }
    }, {
      key: "getFixedT",
      value: function (e, t) {
        var n = this;
        var o = function e(t, o) {
          var a;
          if (typeofHelper.getType(o) !== "object") {
            var s = arguments.length;
            var u = Array(s > 2 ? s - 2 : 0);
            var c = 2;
            for (; c < s; c++) {
              u[c - 2] = arguments[c];
            }
            a = n.options.overloadTranslationOptionHandler([t, o].concat(u));
          } else {
            a = objectExtendUtil.extendObject({}, o);
          }
          a.lng = a.lng || e.lng;
          a.lngs = a.lngs || e.lngs;
          a.ns = a.ns || e.ns;
          return n.t(t, a);
        };
        if (typeof e == "string") {
          o.lng = e;
        } else {
          o.lngs = e;
        }
        o.ns = t;
        return o;
      }
    }, {
      key: "t",
      value: function () {
        var e;
        return this.translator && (e = this.translator).translate.apply(e, arguments);
      }
    }, {
      key: "exists",
      value: function () {
        var e;
        return this.translator && (e = this.translator).exists.apply(e, arguments);
      }
    }, {
      key: "setDefaultNamespace",
      value: function (e) {
        this.options.defaultNS = e;
      }
    }, {
      key: "hasLoadedNamespace",
      value: function (e) {
        var t = this;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.isInitialized) {
          this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
          return false;
        }
        if (!this.languages || !this.languages.length) {
          this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
          return false;
        }
        var r = this.languages[0];
        var i = !!this.options && this.options.fallbackLng;
        var o = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode") {
          return true;
        }
        function a(e, n) {
          var r = t.services.backendConnector.state[`${e}|${n}`];
          return r === -1 || r === 2;
        }
        if (n.precheck) {
          var s = n.precheck(this, a);
          if (s !== undefined) {
            return s;
          }
        }
        return !!this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || !!a(r, e) && (!i || !!a(o, e));
      }
    }, {
      key: "loadNamespaces",
      value: function (e, t) {
        var n = this;
        var r = p();
        if (this.options.ns) {
          if (typeof e == "string") {
            e = [e];
          }
          e.forEach(function (e) {
            if (n.options.ns.indexOf(e) < 0) {
              n.options.ns.push(e);
            }
          });
          this.loadResources(function (e) {
            r.resolve();
            if (t) {
              t(e);
            }
          });
          return r;
        } else {
          if (t) {
            t();
          }
          return Promise.resolve();
        }
      }
    }, {
      key: "loadLanguages",
      value: function (e, t) {
        var n = p();
        if (typeof e == "string") {
          e = [e];
        }
        var r = this.options.preload || [];
        var i = e.filter(function (e) {
          return r.indexOf(e) < 0;
        });
        if (i.length) {
          this.options.preload = r.concat(i);
          this.loadResources(function (e) {
            n.resolve();
            if (t) {
              t(e);
            }
          });
          return n;
        } else {
          if (t) {
            t();
          }
          return Promise.resolve();
        }
      }
    }, {
      key: "dir",
      value: function (e) {
        e ||= this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
        if (e) {
          if (["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0) {
            return "rtl";
          } else {
            return "ltr";
          }
        } else {
          return "rtl";
        }
      }
    }, {
      key: "createInstance",
      value: function (e = {}, n) {
        return new t(e, n);
      }
    }, {
      key: "cloneInstance",
      value: function () {
        var e = this;
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : N;
        var o = objectExtendUtil.extendObject({}, this.options, n, {
          isClone: true
        });
        var a = new t(o);
        ["store", "services", "language"].forEach(function (t) {
          a[t] = e[t];
        });
        a.services = objectExtendUtil.extendObject({}, this.services);
        a.services.utils = {
          hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
        };
        a.translator = new A(a.services, a.options);
        a.translator.on("*", function (e) {
          var t = arguments.length;
          var n = Array(t > 1 ? t - 1 : 0);
          var r = 1;
          for (; r < t; r++) {
            n[r - 1] = arguments[r];
          }
          a.emit.apply(a, [e].concat(n));
        });
        a.init(o, r);
        a.translator.options = a.options;
        a.translator.backendConnector.services.utils = {
          hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
        };
        return a;
      }
    }]);
    return t;
  }(d))();
  exports.i18nextInstance = L;
}