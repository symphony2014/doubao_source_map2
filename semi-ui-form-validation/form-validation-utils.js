// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JH' to 'getFieldConfig'
// - Renamed export 'JY' to 'isEmptyValue'
// - Renamed export 'dG' to 'processFieldProps'
// - Renamed export 'Gf' to 'getSemiFieldName'
// - Renamed export 'G$' to 'createValidator'
// - Renamed export 'Fs' to 'resolveUndefined'
// - Renamed export 'TM' to 'getTriggerList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 921165
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  function i() {
    return (i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function a(e) {
    return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function s(e, t) {
    return (s = Object.setPrototypeOf || function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function l(e, t, n) {
    return (l = !function () {
      if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }() ? function (e, t, n) {
      var r = [null];
      r.push.apply(r, t);
      var o = new (Function.bind.apply(e, r))();
      if (n) {
        s(o, n.prototype);
      }
      return o;
    } : Reflect.construct).apply(null, arguments);
  }
  function c(e) {
    var t = typeof Map == "function" ? new Map() : undefined;
    return (c = function (e) {
      if (e === null || Function.toString.call(e).indexOf("[native code]") === -1) {
        return e;
      }
      if (typeof e != "function") {
        throw TypeError("Super expression must either be null or a function");
      }
      if (t !== undefined) {
        if (t.has(e)) {
          return t.get(e);
        }
        t.set(e, n);
      }
      function n() {
        return l(e, arguments, a(this).constructor);
      }
      n.prototype = Object.create(e.prototype, {
        constructor: {
          value: n,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return s(n, e);
    })(e);
  }
  var d = /%[sdj%]/g;
  function u(e) {
    if (!e || !e.length) {
      return null;
    }
    var t = {};
    e.forEach(function (e) {
      var n = e.field;
      t[n] = t[n] || [];
      t[n].push(e);
    });
    return t;
  }
  function p() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    var r = 1;
    var o = t[0];
    var i = t.length;
    if (typeof o == "function") {
      return o.apply(null, t.slice(1));
    } else if (typeof o == "string") {
      return String(o).replace(d, function (e) {
        if (e === "%%") {
          return "%";
        }
        if (r >= i) {
          return e;
        }
        switch (e) {
          case "%s":
            return String(t[r++]);
          case "%d":
            return Number(t[r++]);
          case "%j":
            try {
              return JSON.stringify(t[r++]);
            } catch (e) {
              return "[Circular]";
            }
            break;
          default:
            return e;
        }
      });
    } else {
      return o;
    }
  }
  function f(e, t) {
    return e == null || t === "array" && !!Array.isArray(e) && !e.length || (t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern") && typeof e == "string" && !e && true;
  }
  function h(e, t, n) {
    var r = 0;
    var o = e.length;
    (function i(a) {
      if (a && a.length) {
        n(a);
        return;
      }
      var s = r;
      r += 1;
      if (s < o) {
        t(e[s], i);
      } else {
        n([]);
      }
    })([]);
  }
  if (processBrowserShim !== undefined) {
    processBrowserShim.env;
  }
  var m = function (e) {
    function t(t, n) {
      var r;
      (r = e.call(this, "Async Validation Error") || this).errors = t;
      r.fields = n;
      return r;
    }
    t.prototype = Object.create(e.prototype);
    t.prototype.constructor = t;
    s(t, e);
    return t;
  }(c(Error));
  function v(e) {
    return function (t) {
      if (t && t.message) {
        t.field = t.field || e.fullField;
        return t;
      } else {
        return {
          message: typeof t == "function" ? t() : t,
          field: t.field || e.fullField
        };
      }
    };
  }
  function g(e, t) {
    if (t) {
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          var r = t[n];
          if (typeof r == "object" && typeof e[n] == "object") {
            e[n] = i({}, e[n], r);
          } else {
            e[n] = r;
          }
        }
      }
    }
    return e;
  }
  function b(e, t, n, r, o, i) {
    if (e.required && (!n.hasOwnProperty(e.field) || f(t, i || e.type))) {
      r.push(p(o.messages.required, e.fullField));
    }
  }
  var y = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var _ = {
    integer: function (e) {
      return _.number(e) && parseInt(e, 10) === e;
    },
    float: function (e) {
      return _.number(e) && !_.integer(e);
    },
    array: function (e) {
      return Array.isArray(e);
    },
    regexp: function (e) {
      if (e instanceof RegExp) {
        return true;
      }
      try {
        new RegExp(e);
        return true;
      } catch (e) {
        return false;
      }
    },
    date: function (e) {
      return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
    },
    number: function (e) {
      return !isNaN(e) && typeof e == "number";
    },
    object: function (e) {
      return typeof e == "object" && !_.array(e);
    },
    method: function (e) {
      return typeof e == "function";
    },
    email: function (e) {
      return typeof e == "string" && !!e.match(y.email) && e.length < 255;
    },
    url: function (e) {
      return typeof e == "string" && !!e.match(y.url);
    },
    hex: function (e) {
      return typeof e == "string" && !!e.match(y.hex);
    }
  };
  var x = "enum";
  var w = {
    required: b,
    whitespace: function (e, t, n, r, o) {
      if (/^\s+$/.test(t) || t === "") {
        r.push(p(o.messages.whitespace, e.fullField));
      }
    },
    type: function (e, t, n, r, o) {
      if (e.required && t === undefined) {
        b(e, t, n, r, o);
        return;
      }
      var i = e.type;
      if (["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(i) > -1) {
        if (!_[i](t)) {
          r.push(p(o.messages.types[i], e.fullField, e.type));
        }
      } else if (i && typeof t !== e.type) {
        r.push(p(o.messages.types[i], e.fullField, e.type));
      }
    },
    range: function (e, t, n, r, o) {
      var i = typeof e.len == "number";
      var a = typeof e.min == "number";
      var s = typeof e.max == "number";
      var l = t;
      var c = null;
      var d = typeof t == "number";
      var u = typeof t == "string";
      var f = Array.isArray(t);
      if (d) {
        c = "number";
      } else if (u) {
        c = "string";
      } else if (f) {
        c = "array";
      }
      if (!c) {
        return false;
      }
      if (f) {
        l = t.length;
      }
      if (u) {
        l = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
      }
      if (i) {
        if (l !== e.len) {
          r.push(p(o.messages[c].len, e.fullField, e.len));
        }
      } else if (a && !s && l < e.min) {
        r.push(p(o.messages[c].min, e.fullField, e.min));
      } else if (s && !a && l > e.max) {
        r.push(p(o.messages[c].max, e.fullField, e.max));
      } else if (a && s && (l < e.min || l > e.max)) {
        r.push(p(o.messages[c].range, e.fullField, e.min, e.max));
      }
    },
    enum: function (e, t, n, r, o) {
      e[x] = Array.isArray(e[x]) ? e[x] : [];
      if (e[x].indexOf(t) === -1) {
        r.push(p(o.messages[x], e.fullField, e[x].join(", ")));
      }
    },
    pattern: function (e, t, n, r, o) {
      if (e.pattern) {
        if (e.pattern instanceof RegExp) {
          e.pattern.lastIndex = 0;
          if (!e.pattern.test(t)) {
            r.push(p(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
          }
        } else if (typeof e.pattern == "string" && !new RegExp(e.pattern).test(t)) {
          r.push(p(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
        }
      }
    }
  };
  function k(e, t, n, r, o) {
    var i = e.type;
    var a = [];
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (f(t, i) && !e.required) {
        return n();
      }
      w.required(e, t, r, a, o, i);
      if (!f(t, i)) {
        w.type(e, t, r, a, o);
      }
    }
    n(a);
  }
  var E = {
    string: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t, "string") && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o, "string");
        if (!f(t, "string")) {
          w.type(e, t, r, i, o);
          w.range(e, t, r, i, o);
          w.pattern(e, t, r, i, o);
          if (e.whitespace === true) {
            w.whitespace(e, t, r, i, o);
          }
        }
      }
      n(i);
    },
    method: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.type(e, t, r, i, o);
        }
      }
      n(i);
    },
    number: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (t === "") {
          t = undefined;
        }
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.type(e, t, r, i, o);
          w.range(e, t, r, i, o);
        }
      }
      n(i);
    },
    boolean: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.type(e, t, r, i, o);
        }
      }
      n(i);
    },
    regexp: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (!f(t)) {
          w.type(e, t, r, i, o);
        }
      }
      n(i);
    },
    integer: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.type(e, t, r, i, o);
          w.range(e, t, r, i, o);
        }
      }
      n(i);
    },
    float: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.type(e, t, r, i, o);
          w.range(e, t, r, i, o);
        }
      }
      n(i);
    },
    array: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (t == null && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o, "array");
        if (t != null) {
          w.type(e, t, r, i, o);
          w.range(e, t, r, i, o);
        }
      }
      n(i);
    },
    object: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.type(e, t, r, i, o);
        }
      }
      n(i);
    },
    enum: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (t !== undefined) {
          w.enum(e, t, r, i, o);
        }
      }
      n(i);
    },
    pattern: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t, "string") && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
        if (!f(t, "string")) {
          w.pattern(e, t, r, i, o);
        }
      }
      n(i);
    },
    date: function (e, t, n, r, o) {
      var i;
      var a = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t, "date") && !e.required) {
          return n();
        }
        w.required(e, t, r, a, o);
        if (!f(t, "date")) {
          i = t instanceof Date ? t : new Date(t);
          w.type(e, i, r, a, o);
          if (i) {
            w.range(e, i.getTime(), r, a, o);
          }
        }
      }
      n(a);
    },
    url: k,
    hex: k,
    email: k,
    required: function (e, t, n, r, o) {
      var i = [];
      var a = Array.isArray(t) ? "array" : typeof t;
      w.required(e, t, r, i, o, a);
      n(i);
    },
    any: function (e, t, n, r, o) {
      var i = [];
      if (e.required || !e.required && r.hasOwnProperty(e.field)) {
        if (f(t) && !e.required) {
          return n();
        }
        w.required(e, t, r, i, o);
      }
      n(i);
    }
  };
  function j() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function () {
        var e = JSON.parse(JSON.stringify(this));
        e.clone = this.clone;
        return e;
      }
    };
  }
  var C = j();
  function S(e) {
    this.rules = null;
    this._messages = C;
    this.define(e);
  }
  S.prototype = {
    messages: function (e) {
      if (e) {
        this._messages = g(j(), e);
      }
      return this._messages;
    },
    define: function (e) {
      var t;
      var n;
      if (!e) {
        throw Error("Cannot configure a schema with no rules");
      }
      if (typeof e != "object" || Array.isArray(e)) {
        throw Error("Rules must be an object");
      }
      this.rules = {};
      for (t in e) {
        if (e.hasOwnProperty(t)) {
          n = e[t];
          this.rules[t] = Array.isArray(n) ? n : [n];
        }
      }
    },
    validate: function (e, t, n) {
      var r;
      var o;
      var a = this;
      if (t === undefined) {
        t = {};
      }
      if (n === undefined) {
        n = function () {};
      }
      var s = e;
      var l = t;
      var c = n;
      if (typeof l == "function") {
        c = l;
        l = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (c) {
          c();
        }
        return Promise.resolve();
      }
      if (l.messages) {
        var d = this.messages();
        if (d === C) {
          d = j();
        }
        g(d, l.messages);
        l.messages = d;
      } else {
        l.messages = this.messages();
      }
      var f = {};
      (l.keys || Object.keys(this.rules)).forEach(function (t) {
        r = a.rules[t];
        o = s[t];
        r.forEach(function (n) {
          var r = n;
          if (typeof r.transform == "function") {
            if (s === e) {
              s = i({}, s);
            }
            o = s[t] = r.transform(o);
          }
          (r = typeof r == "function" ? {
            validator: r
          } : i({}, r)).validator = a.getValidationMethod(r);
          r.field = t;
          r.fullField = r.fullField || t;
          r.type = a.getType(r);
          if (r.validator) {
            f[t] = f[t] || [];
            f[t].push({
              rule: r,
              value: o,
              source: s,
              field: t
            });
          }
        });
      });
      var b = {};
      return function (e, t, n, r) {
        if (t.first) {
          var o = new Promise(function (t, o) {
            var i;
            h((i = [], Object.keys(e).forEach(function (t) {
              i.push.apply(i, e[t]);
            }), i), n, function (e) {
              r(e);
              if (e.length) {
                return o(new m(e, u(e)));
              } else {
                return t();
              }
            });
          });
          o.catch(function (e) {
            return e;
          });
          return o;
        }
        var i = t.firstFields || [];
        if (i === true) {
          i = Object.keys(e);
        }
        var a = Object.keys(e);
        var s = a.length;
        var l = 0;
        var c = [];
        var d = new Promise(function (t, o) {
          function d(e) {
            c.push.apply(c, e);
            if (++l === s) {
              r(c);
              if (c.length) {
                return o(new m(c, u(c)));
              } else {
                return t();
              }
            }
          }
          if (!a.length) {
            r(c);
            t();
          }
          a.forEach(function (t) {
            var r = e[t];
            if (i.indexOf(t) !== -1) {
              h(r, n, d);
            } else {
              (function (e, t, n) {
                var r = [];
                var o = 0;
                var i = e.length;
                function a(e) {
                  r.push.apply(r, e);
                  if (++o === i) {
                    n(r);
                  }
                }
                e.forEach(function (e) {
                  t(e, a);
                });
              })(r, n, d);
            }
          });
        });
        d.catch(function (e) {
          return e;
        });
        return d;
      }(f, l, function (e, t) {
        var n;
        var r = e.rule;
        var o = (r.type === "object" || r.type === "array") && (typeof r.fields == "object" || typeof r.defaultField == "object");
        function a(e, t) {
          return i({}, t, {
            fullField: r.fullField + "." + e
          });
        }
        function s(n = []) {
          var s = n;
          if (!Array.isArray(s)) {
            s = [s];
          }
          if (!l.suppressWarning && s.length) {
            S.warning("async-validator:", s);
          }
          if (s.length && r.message !== undefined) {
            s = [].concat(r.message);
          }
          s = s.map(v(r));
          if (l.first && s.length) {
            b[r.field] = 1;
            return t(s);
          }
          if (o) {
            if (r.required && !e.value) {
              if (r.message !== undefined) {
                s = [].concat(r.message).map(v(r));
              } else if (l.error) {
                s = [l.error(r, p(l.messages.required, r.field))];
              }
              return t(s);
            }
            var c = {};
            if (r.defaultField) {
              for (var d in e.value) {
                if (e.value.hasOwnProperty(d)) {
                  c[d] = r.defaultField;
                }
              }
            }
            for (var u in c = i({}, c, e.rule.fields)) {
              if (c.hasOwnProperty(u)) {
                var f = Array.isArray(c[u]) ? c[u] : [c[u]];
                c[u] = f.map(a.bind(null, u));
              }
            }
            var h = new S(c);
            h.messages(l.messages);
            if (e.rule.options) {
              e.rule.options.messages = l.messages;
              e.rule.options.error = l.error;
            }
            h.validate(e.value, e.rule.options || l, function (e) {
              var n = [];
              if (s && s.length) {
                n.push.apply(n, s);
              }
              if (e && e.length) {
                n.push.apply(n, e);
              }
              t(n.length ? n : null);
            });
          } else {
            t(s);
          }
        }
        o = o && (r.required || !r.required && e.value);
        r.field = e.field;
        if (r.asyncValidator) {
          n = r.asyncValidator(r, e.value, s, e.source, l);
        } else if (r.validator) {
          if ((n = r.validator(r, e.value, s, e.source, l)) === true) {
            s();
          } else if (n === false) {
            s(r.message || r.field + " fails");
          } else if (n instanceof Array) {
            s(n);
          } else if (n instanceof Error) {
            s(n.message);
          }
        }
        if (n && n.then) {
          n.then(function () {
            return s();
          }, function (e) {
            return s(e);
          });
        }
      }, function (e) {
        (function (e) {
          var t;
          var n = [];
          var r = {};
          for (t = 0; t < e.length; t++) {
            (function (e) {
              if (Array.isArray(e)) {
                var t;
                n = (t = n).concat.apply(t, e);
              } else {
                n.push(e);
              }
            })(e[t]);
          }
          if (n.length) {
            r = u(n);
          } else {
            n = null;
            r = null;
          }
          c(n, r);
        })(e);
      });
    },
    getType: function (e) {
      if (e.type === undefined && e.pattern instanceof RegExp) {
        e.type = "pattern";
      }
      if (typeof e.validator != "function" && e.type && !E.hasOwnProperty(e.type)) {
        throw Error(p("Unknown rule type %s", e.type));
      }
      return e.type || "string";
    },
    getValidationMethod: function (e) {
      if (typeof e.validator == "function") {
        return e.validator;
      }
      var t = Object.keys(e);
      var n = t.indexOf("message");
      if (n !== -1) {
        t.splice(n, 1);
      }
      if (t.length === 1 && t[0] === "required") {
        return E.required;
      } else {
        return E[this.getType(e)] || false;
      }
    }
  };
  S.register = function (e, t) {
    if (typeof t != "function") {
      throw Error("Cannot register a validator by type, validator is not a function");
    }
    E[e] = t;
  };
  S.warning = function () {};
  S.messages = C;
  S.validators = E;
  var formUxConstants = require("form-ux-constants") /*id: 740990*/;
  var deepCloneUtil = require("deep-clone-util") /*id: 539809*/;
  function R(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; o < r.length; o++) {
        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
          n[r[o]] = e[r[o]];
        }
      }
    }
    return n;
  }
  function O(e) {
    let t = e.displayName || e.name;
    if (t) {
      return `SemiField${t}`;
    } else {
      return "SemiField";
    }
  }
  function I(e, t = []) {
    let n = {
      [e]: t
    };
    return new S(n);
  }
  function $(e, t) {
    let n = [];
    let o = [];
    if (Array.isArray(n = isUndefinedCheck.isUndefined(e) ? isUndefinedCheck.isUndefined(t) ? formUxConstants.formLayoutOptions.DEFAULT_TRIGGER : t : e)) {
      o = n;
    }
    if (typeof n == "string") {
      o[0] = n;
    }
    return o;
  }
  function Z(e, t, n = false) {
    if (isUndefinedCheck.isUndefined(e)) {
      if (isUndefinedCheck.isUndefined(t)) {
        return n;
      } else {
        return t;
      }
    } else {
      return e;
    }
  }
  function M(e, t) {
    let n = Object.assign(Object.assign({}, {
      valueKey: "value",
      onKeyChangeFnName: "onChange",
      valuePath: "",
      maintainCursor: false,
      shouldInject: true,
      shouldMemo: true
    }), e);
    let r = "field" in t || n.shouldInject;
    return {
      options: n,
      shouldInject: r
    };
  }
  function P(e) {
    let t = Object.assign(Object.assign({}, {
      allowEmptyString: false,
      allowEmpty: false,
      emptyValue: "",
      noLabel: false,
      noErrorMessage: false,
      isInInputGroup: false
    }), e);
    let {
      field: n,
      label: r,
      labelPosition: o,
      labelWidth: i,
      labelAlign: a,
      labelCol: s,
      wrapperCol: l,
      initValue: c,
      validate: d,
      validateStatus: u,
      trigger: p,
      allowEmptyString: f,
      allowEmpty: h,
      emptyValue: m,
      rules: v,
      onChange: g,
      keepState: b,
      transform: y,
      name: _,
      fieldClassName: x,
      fieldStyle: w,
      noLabel: k,
      noErrorMessage: E,
      isInInputGroup: j,
      stopValidateWithError: C,
      convert: S,
      showValidateIcon: T,
      helpText: O,
      extraText: I,
      extraTextPosition: $,
      pure: Z,
      id: M
    } = t;
    let P = R(t, ["field", "label", "labelPosition", "labelWidth", "labelAlign", "labelCol", "wrapperCol", "initValue", "validate", "validateStatus", "trigger", "allowEmptyString", "allowEmpty", "emptyValue", "rules", "onChange", "keepState", "transform", "name", "fieldClassName", "fieldStyle", "noLabel", "noErrorMessage", "isInInputGroup", "stopValidateWithError", "convert", "showValidateIcon", "helpText", "extraText", "extraTextPosition", "pure", "id"]);
    delete P.defaultChecked;
    delete P.defaultValue;
    delete P.checked;
    if (c !== undefined) {
      c = deepCloneUtil.deepClone(c);
    }
    let F = function (e = []) {
      let t = false;
      if (typeof e == "object" && "required" in e) {
        t = e.required;
      } else if (Array.isArray(e) && e.length) {
        e.forEach(e => {
          if (e.required) {
            t = true;
          }
        });
      }
      return t;
    }(v);
    return {
      field: n,
      label: r,
      labelPosition: o,
      labelWidth: i,
      labelAlign: a,
      labelCol: s,
      wrapperCol: l,
      noLabel: k,
      noErrorMessage: E,
      isInInputGroup: j,
      initValue: c,
      validate: d,
      validateStatus: u,
      trigger: p,
      allowEmptyString: f,
      allowEmpty: h,
      emptyValue: m = m !== undefined ? m : "",
      rules: v,
      required: F,
      keepState: b,
      transform: y,
      name: _,
      fieldClassName: x,
      fieldStyle: w,
      convert: S,
      stopValidateWithError: C,
      showValidateIcon: T,
      helpText: O,
      extraText: I,
      extraTextPosition: $,
      pure: Z,
      rest: P,
      id: M
    };
  }
  require.d(exports, {
    getFieldConfig: function () {
      return M;
    },
    isEmptyValue: function () {
      return function e(t) {
        let n = true;
        if (typeof t == "string" && t.length) {
          n = false;
        } else if (Array.isArray(t) && t.length) {
          n = t.every(t => e(t));
        } else if (typeof t == "boolean") {
          n = t;
        } else if (t && typeof t.$$typeof == "symbol" && t.$$typeof.toString() === "Symbol(react.element)") {
          n = false;
        }
        return n;
      };
    },
    processFieldProps: function () {
      return P;
    },
    getSemiFieldName: function () {
      return O;
    },
    createValidator: function () {
      return I;
    },
    resolveUndefined: function () {
      return Z;
    },
    getTriggerList: function () {
      return $;
    }
  });
}