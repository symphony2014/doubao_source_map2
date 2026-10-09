// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TextTrackPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: samantha-ui-deprecated-gallery-xgplayer.821db6b8.js
         * chunkId: 65498
         * moduleId: 669260
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  function r(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      if (e) {
        i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        });
      }
      n.push.apply(n, i);
    }
    return n;
  }
  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] ?? {};
      if (e % 2) {
        r(Object(n), true).forEach(function (e) {
          c(t, e, n[e]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
      } else {
        r(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }
    }
    return t;
  }
  function s(t) {
    return (s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
      return typeof t;
    } : function (t) {
      if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof t;
      }
    })(t);
  }
  function a(t, e) {
    if (!(t instanceof e)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  function l(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) {
        i.writable = true;
      }
      Object.defineProperty(t, v(i.key), i);
    }
  }
  function u(t, e, n) {
    if (e) {
      l(t.prototype, e);
    }
    if (n) {
      l(t, n);
    }
    Object.defineProperty(t, "prototype", {
      writable: false
    });
    return t;
  }
  function c(t, e, n) {
    if ((e = v(e)) in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  function h(t) {
    return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }
  function f(t, e) {
    return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      t.__proto__ = e;
      return t;
    })(t, e);
  }
  function d(t) {
    if (t === undefined) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return t;
  }
  function p(t, e) {
    if (e && (typeof e == "object" || typeof e == "function")) {
      return e;
    }
    if (e !== undefined) {
      throw TypeError("Derived constructors may only return object or undefined");
    }
    return d(t);
  }
  function g() {
    return (g = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function (t, e, n) {
      var i = function (t, e) {
        while (!Object.prototype.hasOwnProperty.call(t, e) && (t = h(t)) !== null);
        return t;
      }(t, e);
      if (i) {
        var r = Object.getOwnPropertyDescriptor(i, e);
        if (r.get) {
          return r.get.call(arguments.length < 3 ? t : n);
        } else {
          return r.value;
        }
      }
    }).apply(this, arguments);
  }
  function v(t) {
    var e = function (t, e) {
      if (typeof t != "object" || t === null) {
        return t;
      }
      var n = t[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(t, "string");
    if (typeof e == "symbol") {
      return e;
    } else {
      return String(e);
    }
  }
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var y = /^WEBVTT/;
  var b = /^STYLE+$/;
  var _ = /^\:\:cue/;
  var x = /^}+$/;
  var k = /^\[Script Info\].*/;
  var T = [/[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}/, /[0-9]{1,2}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,2}:[0-9]{2}\.[0-9]{1,3}/, /[0-9]{1,2}\.[0-9]{1,3}-->[0-9]{1,2}\.[0-9]{1,3}/];
  var O = /^Format:\s/;
  var w = /^Style:\s/;
  var E = /^Dialogue:\s/;
  function S(t) {
    var e = t.length;
    if (e === 3) {
      return ((Number(t[0]) * 60 + Number(t[1])) * 60000 + Number(t[2]) * 1000) / 1000;
    } else if (e === 2) {
      return (Number(t[0]) * 60000 + Number(t[1]) * 1000) / 1000;
    } else {
      return Number(t[0]);
    }
  }
  function C(t, e) {
    if (t >= 0 && t < e.length) {
      return e[t];
    } else {
      return "";
    }
  }
  var P = function () {
    function t() {
      a(this, t);
    }
    u(t, null, [{
      key: "parseJson",
      value: function (t) {
        var e = [];
        var n = 0;
        var i = 0;
        for (; i < t.length; i++) {
          if (n >= 50) {
            n = 0;
          }
          if (n === 0) {
            var r = {
              start: t[i].start,
              list: [t[i]],
              end: t[i].end
            };
            e.push(r);
          } else {
            e[e.length - 1].list.push(t[i]);
            e[e.length - 1].end = t[i].end;
          }
          n++;
        }
        return e;
      }
    }, {
      key: "parse",
      value: function (e, n) {
        var i = t.checkFormat(e);
        if (!i) {
          n({
            format: i
          });
        }
        try {
          var r = [];
          if (i === "ass") {
            r = t.parseASS(e);
          } else if (i === "vtt") {
            r = t.parseVTT(e);
          }
          n({
            format: i,
            list: r.list,
            styles: r.styles
          });
        } catch (t) {
          n({
            format: i
          }, t);
        }
      }
    }, {
      key: "parseASSItem",
      value: function (t = "", e = []) {
        var n = t.split(",");
        var i = {};
        var r = "";
        try {
          var o = n.length - e.length;
          r = r = (r = o > 0 ? n.splice(e.length - 1, o + 1).join(",") + "" : n[n.length - 1] + "").replace(/\\n+/g, "");
          n[e.length - 1] = r;
          e.map(function (t, e) {
            if (t === "end" || t === "start") {
              i[t] = S(n[e].split(":"));
            } else if (t === "text") {
              i[t] = [n[e]];
            } else if (t === "layer") {
              i[t] = [n[e]];
              i.textTag = [n[e]];
            } else if (t === "style") {
              i[t] = [n[e]];
            } else {
              i[t] = Number(n[e]) ? Number(n[e]) : n[e];
            }
          });
          return i;
        } catch (t) {
          return {};
        }
      }
    }, {
      key: "parseASS",
      value: function (e) {
        var n = e.split("\n");
        var i = [];
        var r = 0;
        var o = 0;
        var s = [];
        var a = [];
        var l = null;
        while (r < n.length) {
          if (O.test(n[r])) {
            a = (a = n[r].replace(O, "").replace(/\s+/g, "").split(",")).map(function (t) {
              return t.toLocaleLowerCase();
            });
          } else if (w.test(n[r])) {
            s.push(n[r].replace(w, "").replace(/\s+/g, ""));
          } else if (E.test(n[r])) {
            var u = t.parseASSItem(n[r].replace(E, ""), a);
            if (l && u.start === l.start && u.end === l.end) {
              try {
                var c = l;
                var h = c.text;
                var f = c.textTag;
                var d = c.style;
                h.push(u.text[0]);
                f.push(u.textTag[0]);
                d.push(u.style[0]);
              } catch (t) {}
            } else {
              l = u;
              var p = null;
              if (o % 50 == 0) {
                (p = {
                  start: l.start,
                  end: l.end,
                  list: []
                }).list.push(l);
                i.push(p);
              } else {
                (p = i[i.length - 1]).end = l.end;
                p.list.push(l);
              }
              o++;
            }
          }
          r++;
        }
        return {
          list: i,
          style: {}
        };
      }
    }, {
      key: "parseVTTStyle",
      value: function (t, e) {
        var n = t.split(":");
        if (n.length > 1) {
          var i = n[0].trim().split("-");
          var r = "";
          if (i.length > 1) {
            i.map(function (t, e) {
              r += e === 0 ? t : t.charAt(0).toUpperCase() + t.slice(1);
            });
          } else {
            r = i[0];
          }
          e[r] = n[1].trim().replace(/;$/, "");
        }
        return e;
      }
    }, {
      key: "parseVTT",
      value: function (t) {
        var e = (t = t.replace(y, "")).split("\n");
        var n = [];
        var i = 0;
        var r = 0;
        var o = null;
        var s = false;
        var a = false;
        var l = null;
        var u = null;
        var c = [];
        while (i < e.length) {
          var h = C(i, e).trim();
          if (!h || s && /^(\-|\+)?\d+(\.\d+)?$/.test(h)) {
            s = !h;
          } else if (_.test(h) && b.test(C(i - 1, e).trim())) {
            a = true;
            var f = /\((.+?)\)/g.exec(h);
            u = f ? f[1] : "";
            l = "";
          } else if (a) {
            if (x.test(h)) {
              c.push({
                key: u,
                style: l
              });
              l = null;
              u = null;
              a = false;
            } else {
              l += h;
            }
          } else if (h) {
            s = false;
            var d = this.checkIsTime(e[i]);
            if (d) {
              var p = this.parseVttTime(d);
              if (!o || p.start !== o.start || p.end !== o.end) {
                (o = p).text = [];
                o.textTag = [];
                var g = null;
                if (r % 50 == 0) {
                  (g = {
                    start: o.start,
                    end: o.end,
                    list: []
                  }).list.push(o);
                  n.push(g);
                } else {
                  (g = n[n.length - 1]).end = o.end;
                  g.list.push(o);
                }
                r++;
              }
            } else if (o) {
              var v = o;
              var m = v.text;
              var k = v.textTag;
              var T = this.parseVttText(e[i]);
              m.push(T.text);
              k.push(T.tag);
            }
            s = false;
          }
          i++;
        }
        return {
          list: n,
          styles: c
        };
      }
    }, {
      key: "checkIsTime",
      value: function (t) {
        t = t.replace(/\s+/g, "");
        var e = 0;
        var n = null;
        while (e < T.length && !(n = T[e].exec(t))) {
          e++;
        }
        if (n) {
          return n[0];
        } else {
          return null;
        }
      }
    }, {
      key: "parseVttText",
      value: function (t) {
        var e = /^(<?.+?>)/g.exec(t);
        var n = "";
        var i = "default";
        if (e) {
          i = e[0].replace(/\<|\>|\&/g, "");
          var r = RegExp(`^<${i}>(([\\s\\S])*?)</${i}>\$`).exec(t);
          if (r) {
            n = r[1];
          } else {
            n = t;
            i = "";
          }
        } else {
          n = t;
        }
        var o = /<(\w+).(\w+)>/g;
        var s = o.exec(n);
        while (s && s.length > 2) {
          s = o.exec(n = n.replace(s[0], `<${s[1]} class="${s[2]}">`));
        }
        return {
          tag: i,
          text: n.replace(/\\n+/g, "<br/>")
        };
      }
    }, {
      key: "parseVttTime",
      value: function (t) {
        var e;
        var n = t.split("-->");
        var i = 0;
        if (n.length === 2) {
          var r = n[0].split(":");
          var o = n[1].split(":");
          e = S(r);
          i = S(o);
        }
        return {
          start: e,
          end: i,
          time: t
        };
      }
    }, {
      key: "isVTT",
      value: function (t) {
        return y.test(t);
      }
    }, {
      key: "isASS",
      value: function (t) {
        return k.test(t);
      }
    }, {
      key: "checkFormat",
      value: function (t) {
        if (t) {
          if (y.test(t)) {
            return "vtt";
          } else if (k.test(t)) {
            return "ass";
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    }]);
    return t;
  }();
  var I = [{
    code: 0,
    msg: "SUCCESS"
  }, {
    code: 1,
    msg: "LOAD_ERROR"
  }, {
    code: 2,
    msg: "PARSER_ERROR"
  }, {
    code: 3,
    msg: "FORMAT_NOT_SUPPORTED"
  }, {
    code: 4,
    msg: "ID_OR_LANGUAGE_NOT_EXIST"
  }, {
    code: 5,
    msg: "PARAMETERS_ERROR"
  }, {
    code: 6,
    msg: "ABORT"
  }, {
    code: 7,
    msg: "UNKNOWN"
  }, {
    code: 8,
    msg: "DATA_ERROR:subtitle.url is null"
  }, {
    code: 9,
    msg: "DATA_ERROR:subtitle.url length is 0"
  }];
  function R(t, e = {}) {
    var n = {
      code: I[t].code,
      msg: I[t].msg
    };
    Object.keys(e).map(function (t) {
      n[t] = e[t];
    });
    return n;
  }
  var L = u(function t(e = {}) {
    var n = e.url;
    var i = e.method;
    var r = i === undefined ? "GET" : i;
    var o = e.type;
    var s = o === undefined ? "arraybuffer" : o;
    var l = e.timeout;
    var u = l === undefined ? 10000 : l;
    var c = e.data;
    var h = c === undefined ? {} : c;
    var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    a(this, t);
    return new Promise(function (t, e) {
      var i = new window.XMLHttpRequest();
      var o = r.toUpperCase();
      var a = [];
      if (s) {
        i.responseType = s;
      }
      if (u) {
        i.timeout = u;
      }
      Object.keys(h).forEach(function (t) {
        a.push(`k=${h[t]}`);
      });
      i.onload = function () {
        if (i.status === 200 || i.status === 206) {
          t({
            context: f,
            res: i
          });
        } else {
          e(Error({
            context: f,
            res: i,
            type: "error"
          }));
        }
      };
      i.onerror = function (t) {
        e(Error({
          context: f,
          res: i,
          type: "error"
        }));
      };
      i.ontimeout = function (t) {
        e(Error({
          context: f,
          res: i,
          type: "error"
        }));
      };
      i.onabort = function () {
        e(Error({
          context: f,
          res: i,
          type: "error"
        }));
      };
      if (o === "GET") {
        i.open(o, `${n}`);
        i.send();
      } else if (o === "post") {
        i.open(o, n);
        i.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        i.send(a.join("&"));
      } else {
        throw Error(`xhr ${o} is not supported`);
      }
    });
  });
  var A = function () {
    function t() {
      a(this, t);
      var e;
      var n;
      var i = new Promise(function (t, i) {
        e = t;
        n = i;
      });
      i.resolve = function (t) {
        e(t);
        i.state = "fulfilled";
      };
      i.reject = function (t) {
        n(t);
        i.state = "rejected";
        i.isBreak = t === "DESTROYED";
      };
      i.state = "pending";
      return i;
    }
    u(t, [{
      key: "resolve",
      value: function (t) {}
    }, {
      key: "reject",
      value: function (t) {}
    }]);
    return t;
  }();
  function j(t, e) {
    if (!t) {
      return false;
    }
    if (t.classList) {
      return Array.prototype.some.call(t.classList, function (t) {
        return t === e;
      });
    }
    var n = t.className && s(t.className) === "object" ? t.getAttribute("class") : t.className;
    return n && !!n.match(RegExp("(\\s|^)" + e + "(\\s|$)"));
  }
  function D(t, e) {
    if (t) {
      if (t.classList) {
        e.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (e) {
          if (e) {
            t.classList.add(e);
          }
        });
      } else if (!j(t, e)) {
        if (t.className && s(t.className) === "object") {
          t.setAttribute("class", t.getAttribute("class") + " " + e);
        } else {
          t.className += " " + e;
        }
      }
    }
  }
  function M(t, e, n) {
    var i = e.length;
    if (i < 1) {
      return -1;
    }
    if (e[n = n < 0 ? 0 : n >= i ? i - 1 : n].start <= t && t < e[n].end) {
      return n;
    }
    for (var r = e[n].end <= t ? n + 1 : 0; r < i; r++) {
      if (e[r].start <= t && t < e[r].end) {
        return r;
      }
      if (t > e[r].end && r + 1 < i && t < e[r + 1].start) {
        break;
      }
      if (t > e[r].end && r + 1 >= i) {
        break;
      }
    }
    return -1;
  }
  function N(t, e, n) {
    var i = e.length;
    if (i < 1) {
      return [];
    }
    var r = [];
    if ((n = n < 0 ? 0 : n >= i ? i - 1 : n) < i) {
      for (var o = e[n].end <= t ? n : 0; o < i && (e[o].start <= t && t < e[o].end && r.push(o), !(t < e[o].start)); o++);
    }
    return r;
  }
  function Z(t) {
    return Object.prototype.toString.call(t).match(/([^\s.*]+)(?=]$)/g)[0];
  }
  function z(t, e, n) {
    n ||= new A();
    if (e === "json") {
      var i = P.parseJson(t);
      n.resolve({
        list: i,
        format: "json"
      });
    } else if (e === "string") {
      P.parse(t, function (t, e) {
        if (e) {
          var i = R(2, e);
          n.reject(i, {
            format: t.format
          });
        } else if (t.format) {
          n.resolve({
            styles: t.styles,
            list: t.list,
            format: t.format
          });
        } else {
          var r = R(3);
          n.reject(r);
        }
      });
    }
    return n;
  }
  function U(t, e) {
    e ||= new A();
    new L({
      url: t.url,
      type: "text"
    }).then(function (n) {
      z(n.res.response, "string").then(function (n) {
        e.resolve(o(o({}, n), t));
      }).catch(function (t) {
        e.reject(t);
      });
    }).catch(function (n) {
      var i = R(1, o({
        statusText: n.statusText,
        status: n.status,
        type: n.type,
        message: "http load error",
        url: t.src
      }, t));
      e.reject(i);
    });
    return e;
  }
  function B(t, e) {
    return !!t.id && !!e.id && t.id === e.id || !!t.language && !!e.language && t.language === e.language;
  }
  var H = function () {
    function t() {
      var e = this;
      a(this, t);
      this.__handlers = [];
      if (window.ResizeObserver) {
        this.observer = new window.ResizeObserver(function (t) {
          e.__trigger(t);
        });
      }
    }
    u(t, [{
      key: "addObserver",
      value: function (t, e) {
        if (this.observer) {
          if (this.observer) {
            this.observer.observe(t);
          }
          var n = this.__handlers;
          var i = -1;
          var r = 0;
          for (; r < n.length; r++) {
            if (n[r] && t === n[r].target) {
              i = r;
            }
          }
          if (i > -1) {
            this.__handlers[i].handler.push(e);
          } else {
            this.__handlers.push({
              target: t,
              handler: [e]
            });
          }
        }
      }
    }, {
      key: "unObserver",
      value: function (t) {
        var e = -1;
        this.__handlers.map(function (n, i) {
          if (t === n.target) {
            e = i;
          }
        });
        if (this.observer) {
          this.observer.unobserve(t);
        }
        if (e > -1) {
          this.__handlers.splice(e, 1);
        }
      }
    }, {
      key: "destroyObserver",
      value: function () {
        if (this.observer) {
          this.observer.disconnect();
        }
        this.observer = null;
        this.__handlers = null;
      }
    }, {
      key: "__runHandler",
      value: function (t, e) {
        var n = this.__handlers;
        var i = 0;
        for (; i < n.length; i++) {
          if (n[i] && t === n[i].target) {
            if (n[i].handler) {
              n[i].handler.forEach(function (n) {
                try {
                  n(t, e);
                } catch (t) {}
              });
            }
            break;
          }
        }
      }
    }, {
      key: "__trigger",
      value: function (t) {
        var e = this;
        t.map(function (t) {
          var n = t.contentRect;
          e.__runHandler(t.target, n);
        });
      }
    }]);
    return t;
  }();
  var q = null;
  function F(t) {
    var e = [];
    if (t && Z(t) === "String") {
      e.push({
        url: t,
        index: 0,
        start: -1,
        end: -1
      });
    } else if (Z(t) === "Array") {
      t.forEach(function (t, n) {
        e.push({
          url: t.url || t.src,
          index: n,
          start: t.start || -1,
          end: t.end || -1
        });
      });
    }
    return e;
  }
  var V = false;
  var W = function (t) {
    (function (t, e) {
      if (typeof e != "function" && e !== null) {
        throw TypeError("Super expression must either be null or a function");
      }
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      if (e) {
        f(t, e);
      }
    })(i, t);
    var e;
    e = function () {
      if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (t) {
        return false;
      }
    }();
    function n() {
      var t;
      var n = h(i);
      t = e ? Reflect.construct(n, arguments, h(this).constructor) : n.apply(this, arguments);
      return p(this, t);
    }
    function i(t) {
      var e;
      var r;
      var o;
      var s;
      var l;
      var u;
      var h;
      a(this, i);
      c(d(e = n.call(this)), "_onTimeupdate", function () {
        if (e._isOpen) {
          var t = e.player.video;
          var n = t.videoWidth;
          var i = t.videoHeight;
          if (!e._videoMeta.scale && n && i) {
            e._onResize(e.player.root);
          }
          var r = e._getPlayerCurrentTime();
          if (!(Math.round(Math.abs(r * 1000 - e._ctime)) < 200)) {
            e._ctime = r * 1000;
            if (e.currentText && e.currentText.list) {
              if (e.config.updateMode === "live") {
                e._liveUpdate(r);
              } else {
                e._update(r);
              }
            }
          }
        }
      });
      c(d(e), "getItemsByIndex", undefined);
      c(d(e), "_onResize", function (t) {
        var n = d(e);
        var i = n._videoMeta;
        if (n.config.domRender) {
          if (!t || !(t instanceof window.Element)) {
            t = e.player.root;
          }
          if (e._iId) {
            clearTimeout(e._iId);
            e._iId = null;
          }
          if (!i.scale) {
            if (!e.player.video) {
              return;
            }
            var r = e.player.video;
            var o = r.videoWidth;
            var s = r.videoHeight;
            if (!o || !s) {
              return;
            }
            i.videoWidth = o;
            i.videoHeight = s;
            i.scale = parseInt(s / o * 100, 10);
          }
          e.__startResize(t);
        }
      });
      c(d(e), "_onCoreEvents", function (t) {
        try {
          switch (t.eventName) {
            case "core.subtitlesegments":
              e._onSubtitleSegment(t.list || []);
              break;
            case "core.subtitleplaylist":
              e._onSubtitlePlaylist(t.list || []);
              break;
            case "core.seipayloadtime":
              e._onCoreSeiintime(t);
          }
        } catch (t) {}
      });
      c(d(e), "destroy", function () {
        e.detachPlayer();
        e.removeAllListeners();
        e.player = null;
        e.textTrack = null;
      });
      r = navigator.userAgent;
      o = /(?:Windows Phone)/.test(r);
      s = /(?:SymbianOS)/.test(r) || o;
      l = /(?:Android)/.test(r);
      u = /(?:Firefox)/.test(r);
      h = /(?:iPad|PlayBook)/.test(r) || l && !/(?:Mobile)/.test(r) || u && /(?:Tablet)/.test(r);
      V = /(?:iPhone)/.test(r) && !h || l || s || h;
      e.currentText = null;
      e.currentExtText = null;
      e.textTrack = [];
      e._cid = -1;
      e._gid = -1;
      e._cids = [];
      e._iId = null;
      e._iC = 0;
      e.player = null;
      e.root = null;
      e.config = {
        line: "double",
        bottom: 0,
        mode: "stroke",
        defaultOpen: false,
        baseSizeX: 49,
        baseSizeY: 28,
        minSize: 16,
        minMobileSize: 13,
        fitVideo: true,
        offsetBottom: 2,
        fontColor: "#fff",
        domRender: true,
        updateMode: "vod",
        debugger: false
      };
      e._ctime = 0;
      e._loadingTrack = {};
      Object.keys(e.config).map(function (n) {
        if (t[n] !== undefined && t[n] !== null) {
          e.config[n] = t[n];
        }
      });
      e._isOpen = e.config.defaultOpen || false;
      e._videoMeta = {
        scale: 0,
        videoHeight: 0,
        videoWidth: 0,
        lwidth: 0,
        lheight: 0,
        vWidth: 0,
        vHeight: 0,
        vBottom: 0,
        vLeft: 0,
        marginBottom: 0
      };
      if (t.subTitles && Z(t.subTitles) === "Array") {
        if (t.player) {
          e.attachPlayer(t.player);
        }
        e.seiTime = 0;
        e.lastSeiTime = 0;
        e._curTexts = [];
        e.setSubTitles(t.subTitles, e.config.defaultOpen);
        return e;
      } else {
        return p(e);
      }
    }
    u(i, [{
      key: "version",
      get: function () {
        return "3.0.7";
      }
    }, {
      key: "setSubTitles",
      value: function () {
        var t = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        var i = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        var r = this._isOpen || n;
        if (i && this.innerRoot) {
          this.switchOff();
        }
        this.currentText = null;
        this.textTrack = [];
        e.forEach(function (e) {
          var n = {};
          Object.keys(e).map(function (t) {
            n[t] = e[t];
          });
          n.url = F(n.url);
          if (n.isDefault) {
            t.currentText = n;
          }
          t.textTrack.push(n);
        });
        this._log("setSubTitles", r);
        if (r) {
          this.switch().catch(function (e) {
            t._log("[switch]", e);
          });
        }
        if (this.currentText) {
          this._loadTrack(this.currentText).then(function (e) {
            t.addStyles(e);
          });
        }
        this.emit("reset", {
          list: this.textTrack,
          isOpen: r
        });
      }
    }, {
      key: "updateSubTitle",
      value: function (t) {
        var e = this;
        var n = -1;
        var i = 0;
        for (; i < this.textTrack.length; i++) {
          if (B(t, this.textTrack[i])) {
            n = i;
            break;
          }
        }
        this._log("updateSubTitle", n, t);
        if (n > -1) {
          var r = B(this.currentText, this.textTrack[n]);
          this._log("updateSubTitle", "_isCurrent", r, "this.isOpen", this.isOpen, this.currentText);
          if (!r) {
            return;
          }
          var o = F(t.url);
          if (this.isOpen) {
            o.forEach(function (t) {
              e.textTrack[n].url.push(t);
            });
            this._log("updateSubTitle _loadTrackUrls", this.textTrack[n]);
            this._loadTrackUrls(this.currentText, 2);
          } else {
            this.textTrack[n].url = o;
          }
        }
      }
    }, {
      key: "addStyles",
      value: function (t) {
        var e = t.styles;
        var n = t.format;
        if (e && n === "vtt") {
          e.map(function (t) {
            t.key ||= "xg-text-track-span";
          });
          (function (t, e = "") {
            var n = "";
            t.map(function (t) {
              n += ` ${e} ${t.key} {${t.style}}`;
            });
            var i = document.createElement("style");
            var r = document.head || document.getElementsByTagName("head")[0];
            i.type = "text/css";
            i.id = "ssss";
            if (i.styleSheet) {
              function o() {
                try {
                  i.styleSheet.cssText = n;
                } catch (t) {}
              }
              if (i.styleSheet.disabled) {
                setTimeout(o, 10);
              } else {
                o();
              }
            } else {
              var s = document.createTextNode(n);
              i.appendChild(s);
            }
            r.appendChild(i);
          })(e, "xg-text-track");
        }
      }
    }, {
      key: "attachPlayer",
      value: function (t) {
        var e;
        var n;
        var i = this;
        this._log("attachPlayer");
        if (t) {
          if (this.player) {
            this.detachPlayer();
          }
          var r = this.config;
          var o = r.fontColor;
          var s = r.mode;
          var a = r.fitVideo;
          var l = r.domRender;
          this.player = t;
          if (l) {
            this.root = document.createElement("xg-text-track");
            this.root.className = "xg-text-track";
            if (!this._isOpen) {
              D(this.root, "text-track-hide");
            }
            if (!a) {
              D(this.root, "text-track-no-fitvideo");
            }
            if (s) {
              D(this.root, `text-track-${s}`);
            }
            this.innerRoot = document.createElement("xg-text-track-inner");
            this.root.appendChild(this.innerRoot);
            if (o) {
              this.root.style.color = o;
            }
            if (this.currentText) {
              ["language", "id", "label"].map(function (t) {
                i.root.setAttribute(`data-${t}`, i.currentText[t] || "");
              });
            }
            this.player.root.appendChild(this.root);
            e = t.root;
            n = this._onResize;
            q ||= new H();
            q.addObserver(e, n);
          }
          this.player.on("destroy", this.destroy);
          this.player.on("timeupdate", this._onTimeupdate);
          this.player.on("core_event", this._onCoreEvents);
          if (this._isOpen) {
            this.switch().catch(function (t) {
              i._log("[switch]", t);
            });
          }
        }
      }
    }, {
      key: "detachPlayer",
      value: function () {
        var t;
        var e;
        var n = this.player;
        var i = this.config;
        if (n) {
          n.off("destroy", this.destroy);
          n.off("timeupdate", this._onTimeupdate);
          n.on("core_event", this._onCoreEvents);
          if (i.domRender) {
            if (n.root) {
              t = n.root;
              e = this._onResize;
              if (q) {
                q.unObserver(t, e);
              }
              n.root.removeChild(this.root);
            }
            this.innerRoot = null;
            this.root = null;
          }
          this.player = null;
        }
      }
    }, {
      key: "switch",
      value: function () {
        var t = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          id: "",
          language: ""
        };
        this._log("switch", e);
        this._loadingTrack = e;
        return new Promise(function (n, i) {
          if (!e.id && !e.language) {
            if (t.currentText) {
              t._loadingTrack = {};
              t._updateCurrent(t.currentText);
              t.switchOn();
              n(R(0, {
                message: "switch default subtitle success"
              }));
              return;
            }
            i(R(5, {
              message: "no default subtitle"
            }));
            return;
          }
          if (t.currentText && B(e, t.currentText)) {
            t._loadingTrack = {};
            t._updateCurrent(t.currentText);
            t.switchOn();
            n(R(0));
          } else {
            var r = null;
            t.__removeByTime(t._curTexts, 0);
            for (var o = 0; o < t.textTrack.length; o++) {
              if (B(e, t.textTrack[o])) {
                r = t.textTrack[o];
                break;
              }
            }
            t._log("nextSubtitle", r);
            if (r) {
              t._emitPlayerSwitch(t.currentText, r);
              if (r.list) {
                t._loadingTrack = {};
                t._updateCurrent(r);
                t.switchOn();
                n(R(0));
              } else {
                t._log("this._loadTrack", r);
                t._updateCurrent(r);
                t._loadTrack(r).then(function (e) {
                  t.addStyles(e);
                  if (t._loadingTrack.id === r.id || t._loadingTrack.language === e.language) {
                    t._loadingTrack = {};
                    t._updateCurrent(e);
                    t.switchOn();
                    n(R(0));
                  } else {
                    i(R(6, {
                      message: `check _loadingTrack fail id: ${t._loadingTrack.id}  nextSubtitle:${e.id}`
                    }));
                  }
                }).catch(function (t) {
                  i(t);
                });
              }
            } else {
              i(R(4, Error(`The is no subtitle with id:[{${e.id}}] or language:[${e.language}]`)));
            }
          }
        });
      }
    }, {
      key: "switchExt",
      value: function () {
        var t = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          id: "",
          language: ""
        };
        return new Promise(function (n, i) {
          if (e.id || e.language) {
            var r = null;
            var o = 0;
            for (; o < t.textTrack.length; o++) {
              if (B(e, t.textTrack[o])) {
                r = t.textTrack[o];
                break;
              }
            }
            if (r && !B(r, t.currentText)) {
              t._loadTrack(r).then(function (e) {
                t.currentExtText = e;
                n(R(0));
              });
            }
          } else {
            t.currentExtText = null;
            n(R(0));
          }
        });
      }
    }, {
      key: "switchOn",
      value: function () {
        this._log("switchOn");
        this._isOpen = true;
        this.show();
        this.emit("change", this.currentText);
      }
    }, {
      key: "switchOff",
      value: function () {
        this._isOpen = false;
        this.hide();
        this.emit("off");
      }
    }, {
      key: "isOpen",
      get: function () {
        return this._isOpen;
      }
    }, {
      key: "_log",
      value: function () {
        if (this.config.debugger) {
          var t;
          var e = arguments.length;
          var n = Array(e);
          var i = 0;
          for (; i < e; i++) {
            n[i] = arguments[i];
          }
          (t = console).log.apply(t, ["[xgSubtitle]"].concat(n));
        }
      }
    }, {
      key: "_loadTrack",
      value: function (t) {
        var e = this;
        this._log("_loadTrack", t.language, t);
        var n = new A();
        var i = "";
        var r = "";
        if (t.json) {
          i = "json";
          r = t.json;
        } else if (t.stringContent && !t.url) {
          i = "string";
          r = t.stringContent;
        }
        if (r) {
          z(r, i).then(function (e) {
            t.format = e.format;
            t.styles = e.styles;
            t.list = e.list;
            n.resolve(t);
          }).catch(function (t) {
            n.reject(t);
          });
          return n;
        }
        var o = t.url;
        if (o.length === 0) {
          n.resolve(t);
        } else {
          U(o.splice(0, 1)[0]).then(function (i) {
            t.format = i.format;
            t.styles = i.styles;
            t.list ||= [];
            e._pushList(t.list, i.list);
            if (o.length > 1) {
              e._loadTrackUrls(t, 2);
            }
            n.resolve(t);
          }).catch(function (t) {
            n.reject(t);
          });
        }
        return n;
      }
    }, {
      key: "_emitPlayerSwitch",
      value: function (t, e) {
        if (t && this.config.updateMode === "live") {
          t.list = [];
          t.url = [];
        }
        var n = o({
          lang: e.language
        }, e);
        this._log("emit subtile_switch ", e, n);
        if (this.player) {
          this.player.emit("switch_subtitle", n);
        }
      }
    }, {
      key: "_loadTrackUrls",
      value: function (t, e, n) {
        var i = this;
        var r = t.url.length;
        var s = r > e ? t.url.splice(0, e) : t.url.splice(0, r);
        var a = s.length;
        this._log("_loadTrackUrls", t.language, r, s.length, a);
        s.forEach(function (e, r) {
          U(o(o({}, e), {}, {
            index: r
          })).then(function (e) {
            t.format = e.format;
            t.styles = e.format;
            t.list ||= [];
            i._pushList(t.list, e.list);
            a--;
          }).catch(function (t) {
            a--;
          }).finally(function (e) {
            if (a === 0) {
              if (n) {
                n.resolve(t);
              }
              i._loadTrackUrls(t, 2);
            }
          });
        });
      }
    }, {
      key: "_freshUrl",
      value: function (t, e = {
        url: ""
      }) {
        var n = -1;
        t.url.forEach(function (t, i) {
          if (t.url === e.url) {
            n = i;
          }
        });
        if (n > -1) {
          t.url.splice(n, 1);
        }
      }
    }, {
      key: "_pushList",
      value: function (t, e) {
        var n = e[0].start;
        var i = e[e.length - 1].end;
        if (t.length === 0 || n >= t[t.length - 1].end) {
          e.forEach(function (e) {
            t.push(e);
          });
        } else {
          var r = -1;
          var o = 0;
          for (; o < t.length; o++) {
            if (t[o].start > i) {
              r = o;
              break;
            }
          }
          if (r > -1) {
            e.forEach(function (e, n) {
              t.splice(r + n, 0, e);
            });
          }
        }
        return t;
      }
    }, {
      key: "_updateCurrent",
      value: function (t) {
        var e = this;
        this.currentText = t;
        if (this.config.domRender && this.root) {
          ["language", "id", "label"].map(function (t) {
            e.root.setAttribute(`data-${t}`, e.currentText[t] || "");
          });
          this.__remove(this._cids);
        }
        this._cids = [];
        this._gid = -1;
        this._cid = -1;
        this._curTexts = [];
        var n = this._getPlayerCurrentTime();
        if (n) {
          if (this.config.updateMode === "live") {
            this._liveUpdate(n);
          } else {
            this._update(n);
          }
        }
      }
    }, {
      key: "__loadAll",
      value: function () {
        var t = this;
        this.textTrack.forEach(function (e) {
          t._loadTrack(e);
        });
      }
    }, {
      key: "getDelCid",
      value: function (t, e) {
        var n = [];
        var i = 0;
        for (; i < t.length; i++) {
          if (!e.includes(t[i])) {
            n.push(t[i]);
          }
        }
        return n;
      }
    }, {
      key: "getNewCid",
      value: function (t, e) {
        var n = [];
        var i = 0;
        for (; i < e.length; i++) {
          if (!t.includes(e[i])) {
            n.push(e[i]);
          }
        }
        return n;
      }
    }, {
      key: "_liveUpdate",
      value: function (t) {
        var e = this;
        if (this.currentText && this.currentText.list && this.currentText.list.length) {
          var n = [];
          var i = M(t, this.currentText.list, this._gid);
          if (i > -1) {
            n = N(t, this.currentText.list[i].list, this._cid);
          }
          this.__removeByTime(this._curTexts, t);
          this._log("_liveUpdate", t, i, n, this.currentText.list[0].list[0].start, this.currentText.list[0].list[0].end);
          if (n.length > 0) {
            var r = function (t, e, n) {
              if (t.length === 0 || e < 0 || e > t.length - 1) {
                return [];
              }
              var i = t[e].list;
              if (n.length === 0) {
                return [];
              }
              var r = i.splice(n[0], n.length);
              if (e > 0) {
                t.splice(0, e);
              }
              if (i.length === 0) {
                t.splice(0, 1);
              }
              return r;
            }(this.currentText.list, i, n);
            var o = this._curTexts.length;
            var s = o > 0 ? this._curTexts[o - 1].index : 0;
            r.forEach(function (t, n) {
              t.index = n + s;
              e._curTexts.push(t);
            });
            this.__render(r);
          }
          this.emit("update", this._curTexts);
        }
      }
    }, {
      key: "_update",
      value: function (t) {
        var e = this;
        if (this.currentText && this.currentText.list && this.currentText.list.length) {
          var n = M(t, this.currentText.list, this._gid);
          var i = [];
          if (n > -1) {
            i = N(t, this.currentText.list[n].list, this._cid);
          }
          if (i.length < 1) {
            if (this._cids.length > 0 && this.config.domRender) {
              this.__remove(this._cids);
            }
            this._cids = [];
            return;
          }
          if (this._cids !== i || n !== this._gid) {
            this._gid = n;
            this._cid = i[0];
            var r = this.getDelCid(this._cids, i);
            var o = this.getNewCid(this._cids, i);
            this._cids = i;
            if (this.config.domRender) {
              this.__remove(r);
            }
            var s = [];
            o.map(function (t) {
              var i = e.currentText.list[n].list[t];
              i.index = t;
              s.push(i);
            });
            if (this.currentExtText) {
              o.map(function (t) {
                var i = e.currentText.list[n].list[t];
                i.index = t;
                s.push(i);
              });
            }
            this.emit("update", s);
            this.__render(s, t);
          }
        }
      }
    }, {
      key: "_getPlayerCurrentTime",
      value: function () {
        if (this.player) {
          return parseInt(this.player.currentTime * 1000 + this.seiTime * 1000 - this.lastSeiTime * 1000, 10) / 1000;
        } else {
          return 0;
        }
      }
    }, {
      key: "_onSubtitlePlaylist",
      value: function (t) {
        this._log("_onSubtitlePlaylist", t);
        var e = t.map(function (t) {
          return {
            label: t.name,
            language: t.lang,
            id: t.id,
            isDefault: t.default,
            url: [],
            mUrl: t.url
          };
        });
        this.setSubTitles(e);
      }
    }, {
      key: "_onSubtitleSegment",
      value: function (t) {
        this._log("_onSubtitleSegment", t.length, t[0].lang, t[0].sn, t[t.length - 1].sn, t[0].start, t[t.length - 1].end);
        if (t && t.length !== 0) {
          var e = {
            language: t[0].lang,
            url: t.map(function (t) {
              return {
                id: t.sn,
                url: t.url,
                duration: t.duration,
                start: t.start,
                end: t.end
              };
            })
          };
          if (B(e, this.currentText)) {
            this.updateSubTitle(e);
          }
        }
      }
    }, {
      key: "_onCoreSeiintime",
      value: function (t) {
        try {
          var e = t.time / 1000;
          this._log("_onCoreSeiintime sei", e, this.seiTime, this.lastSeiTime);
          this.seiTime = e;
          this.lastSeiTime = this.player ? this.player.currentTime : 0;
        } catch (t) {}
      }
    }, {
      key: "resize",
      value: function (t, e) {
        var n;
        var i = this;
        var r = this.config;
        var o = r.baseSizeX;
        var s = r.baseSizeY;
        var a = r.minMobileSize;
        var l = r.minSize;
        var u = r.fitVideo;
        var c = r.offsetBottom;
        var h = this._videoMeta.scale;
        this._videoMeta.lwidth = t;
        this._videoMeta.lheight = e;
        var f = 0;
        if (e / t * 100 >= h) {
          f = parseInt(h * t, 10) / 100;
          n = t;
        } else {
          f = e;
          n = parseInt(e / h * 100, 10);
        }
        this._videoMeta.vWidth = n;
        this._videoMeta.vHeight = f;
        var d = 0;
        var p = 0;
        p = h > 120 ? parseInt((d = s) * f / 1080, 10) : parseInt((d = o) * n / 1920, 10);
        var g = V ? a : l;
        var v = {
          fontSize: p = p < g ? g : p > d ? d : p
        };
        var m = parseInt((e - f) / 2, 10);
        var y = parseInt((t - n) / 2, 10);
        var b = parseInt(f * c, 10) / 100;
        this._videoMeta.vBottom = m;
        this._videoMeta.vLeft = y;
        this._videoMeta.marginBottom = b;
        if (u) {
          v.bottom = m + b;
          v.left = v.right = y;
        }
        Object.keys(v).map(function (t) {
          i.root.style[t] = `${v[t]}px`;
        });
        this.emit("resize", {
          vLeft: y,
          vBottom: m,
          marginBottom: b,
          vWidth: n,
          vHeight: f,
          fontSize: p,
          scale: h
        });
      }
    }, {
      key: "__startResize",
      value: function (t) {
        var e = this;
        var n = t.getBoundingClientRect();
        var i = this._videoMeta;
        var r = n.width;
        var o = n.height;
        if (this._iId) {
          clearTimeout(this._iId);
          this._iId = null;
        }
        if (r > 0 && o > 0 && (r !== i.lwidth || o !== i.lheight)) {
          this._iC = 0;
          this.resize(r, o);
        } else {
          if (this._iC >= 5) {
            this._iC = 0;
            return;
          }
          this._iC++;
          this._iId = setTimeout(function () {
            e.__startResize(t);
          }, 50);
        }
      }
    }, {
      key: "__removeByTime",
      value: function (t, e) {
        var n = [];
        var i = 0;
        for (; i < t.length; i++) {
          if (!e || t[i].end < e) {
            n.push(i);
          }
        }
        if (n.length !== 0) {
          t.splice(n[0], n.length);
          if (this.config.domRender) {
            this.__remove(n);
          }
        }
      }
    }, {
      key: "__remove",
      value: function (t) {
        var e = this;
        if (t && !(t.length < 1)) {
          var n = this.innerRoot.children;
          var i = [];
          var r = 0;
          for (; r < n.length; r++) {
            var o = Number(n[r].getAttribute("data-index"));
            if (t.includes(o)) {
              i.push(n[r]);
            }
          }
          i.map(function (t) {
            e.innerRoot.removeChild(t);
          });
        }
      }
    }, {
      key: "__render",
      value: function () {
        var t = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this._log("__render", e.length, this.config.domRender);
        if (e.length > 0 && this.config.domRender) {
          e.map(function (e) {
            var n = `text-track-${t.config.line}`;
            e.text.map(function (i, r) {
              if (r > 0) {
                n += " text-track-deputy";
              }
              var o = {
                "data-start": e.start,
                "data-end": e.end,
                "data-index": e.index
              };
              t.innerRoot.appendChild(function (t = "div", e = "", n = {}, i = "") {
                var r = document.createElement(t);
                r.className = i;
                r.innerHTML = e;
                Object.keys(n).forEach(function (e) {
                  var i = n[e];
                  if (t === "video" || t === "audio" || t === "live-video") {
                    if (i) {
                      r.setAttribute(e, i);
                    }
                  } else {
                    r.setAttribute(e, i);
                  }
                });
                return r;
              }("xg-text-track-span", i, o, n));
            });
          });
        }
      }
    }, {
      key: "show",
      value: function () {
        if (this.config.domRender) {
          var t;
          var e;
          t = this.root;
          e = "text-track-hide";
          if (t) {
            if (t.classList) {
              e.split(/\s+/g).forEach(function (e) {
                t.classList.remove(e);
              });
            } else if (j(t, e)) {
              e.split(/\s+/g).forEach(function (e) {
                var n = RegExp("(\\s|^)" + e + "(\\s|$)");
                if (t.className && s(t.className) === "object") {
                  t.setAttribute("class", t.getAttribute("class").replace(n, " "));
                } else {
                  t.className = t.className.replace(n, " ");
                }
              });
            }
          }
        }
      }
    }, {
      key: "hide",
      value: function () {
        if (this.config.domRender) {
          D(this.root, "text-track-hide");
          this.innerRoot.innerHTML = "";
        }
      }
    }, {
      key: "emit",
      value: function (t, e) {
        var n;
        var r = arguments.length;
        var o = Array(r > 2 ? r - 2 : 0);
        var s = 2;
        for (; s < r; s++) {
          o[s - 2] = arguments[s];
        }
        (n = g(h(i.prototype), "emit", this)).call.apply(n, [this, t, e].concat(o));
      }
    }, {
      key: "on",
      value: function (t, e) {
        var n;
        var r = arguments.length;
        var o = Array(r > 2 ? r - 2 : 0);
        var s = 2;
        for (; s < r; s++) {
          o[s - 2] = arguments[s];
        }
        (n = g(h(i.prototype), "on", this)).call.apply(n, [this, t, e].concat(o));
      }
    }, {
      key: "once",
      value: function (t, e) {
        var n;
        var r = arguments.length;
        var o = Array(r > 2 ? r - 2 : 0);
        var s = 2;
        for (; s < r; s++) {
          o[s - 2] = arguments[s];
        }
        (n = g(h(i.prototype), "once", this)).call.apply(n, [this, t, e].concat(o));
      }
    }, {
      key: "off",
      value: function (t, e) {
        var n;
        var r = arguments.length;
        var o = Array(r > 2 ? r - 2 : 0);
        var s = 2;
        for (; s < r; s++) {
          o[s - 2] = arguments[s];
        }
        (n = g(h(i.prototype), "off", this)).call.apply(n, [this, t, e].concat(o));
      }
    }, {
      key: "offAll",
      value: function () {
        g(h(i.prototype), "removeAllListeners", this).call(this);
      }
    }, {
      key: "marginBottom",
      get: function () {
        var t = this._videoMeta;
        var e = t.bottom;
        var n = t.marginBottom;
        if (this.config.fitVideo) {
          return e + n;
        } else {
          return n;
        }
      }
    }]);
    return i;
  }(eventEmitterWrapper_1.eventEmitter);
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var videoPlayerOptionsIconPlugin = require("video-player-options-icon-plugin") /*id: 804563*/;
  var $ = function (t) {
    babelRuntimeHelpers_1.inherits(n, t);
    var e = babelRuntimeHelpers_1.constructHelper(n);
    function n(t) {
      var r;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      r = e.call(this);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(r), "_onChange", function (t) {
        var e = r._media.textTracks;
        if (e && e.length !== 0) {
          var n = [];
          var i = [];
          var o = -1;
          var s = 0;
          for (; s < e.length; s++) {
            var a = e[s];
            if (a.kind === "subtitles") {
              n.push({
                id: a.id || a.language,
                language: a.language,
                text: a.label,
                isDefault: a.mode === "showing"
              });
              if (o === -1 && a.mode === "showing") {
                o = s;
              }
              i.push(a.language);
            }
          }
          if (i.join("|") !== r._languages) {
            r._languages = i.join("|");
            r.emit("reset", {
              list: n,
              isOpen: o > -1
            });
          } else if (o === -1) {
            r.emit("off");
          } else if (r.curIndex !== o) {
            r.emit("change", n[o]);
          }
          r.curIndex = o;
        }
      });
      r._media = t;
      r._list = [];
      r._languages = "";
      r.curIndex = -1;
      r._init();
      return r;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "_init",
      value: function () {
        this._media.textTracks.addEventListener("change", this._onChange);
      }
    }, {
      key: "switch",
      value: function (t) {
        var e = this._media.textTracks;
        var n = 0;
        for (; n < e.length; n++) {
          var i = e[n];
          if (i.language === t.language) {
            i.mode = "showing";
          } else if (i.mode === "showing") {
            i.mode = "disabled";
          }
        }
      }
    }, {
      key: "switchOff",
      value: function () {
        var t = this._media.textTracks;
        var e = 0;
        for (; e < t.length; e++) {
          t[e].mode = "disabled";
        }
        this.curIndex = -1;
      }
    }, {
      key: "destroy",
      value: function () {
        this._media.textTracks.removeEventListener("change", this._onChange);
        this._media = null;
        this._list = [];
        this._languages = "";
        this.curIndex = -1;
      }
    }]);
    return n;
  }(eventEmitterWrapper_1.eventEmitter);
  var J = {
    CLOSE: "close",
    TEXT_CLOSE: "text-close"
  };
  function Q(t) {
    var e = -1;
    t.forEach(function (t, n) {
      if (!t.id && !t.language) {
        t.id = n;
      }
      t.id = String(t.id);
      t.url ||= t.src;
      t.text ||= t.label;
      t.language ||= t.srclang;
      if (t.isDefault === undefined) {
        t.isDefault = t.default || false;
      }
      if (t.isDefault || t.default) {
        if (e < 0) {
          e = n;
        } else {
          t.isDefault = t.default = false;
        }
      }
    });
    return e;
  }
  var tt = function (t) {
    babelRuntimeHelpers_1.inherits(n, t);
    var e = babelRuntimeHelpers_1.constructHelper(n);
    function n() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      var r = arguments.length;
      var o = Array(r);
      var s = 0;
      for (; s < r; s++) {
        o[s] = arguments[s];
      }
      t = e.call.apply(e, [this].concat(o));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onOff", function () {
        t.switchOffSubtitle();
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onChange", function (e) {
        var n = t.getSubTitleIndex(t.config.list, e);
        if (!(n < 0)) {
          t.updateCurItem(n, e);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onListReset", function (e) {
        t.updateList(e);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "clickSwitch", function (e, n) {
        var i = n.type === J.CLOSE || n.type === J.TEXT_CLOSE;
        if (t.subTitles) {
          if (i) {
            t.subTitles.switchOff();
          } else {
            t.switchSubTitle({
              language: n.language,
              id: n.id
            });
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onIconClick", function (e) {
        if (t.curItem) {
          t.subTitles.switchOff();
        } else {
          t.switchOnSubtitle(e);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onPlayerFocus", function (e) {
        if (t.subTitles && t.config.style.follow) {
          t.rePosition();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onPlayerBlur", function (e) {
        if (t.subTitles && t.config.style.follow && !t.playerConfig.marginControls && t.subTitles.root) {
          t.subTitles.root.style.transform = "translate(0, 0)";
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "beforeCreate",
      value: function (t) {
        var e = t.player.config.texttrack || t.player.config.textTrack;
        if (playerUtilityHelpers.domUtils.typeOf(e) === "Array") {
          t.config.list = e;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this.config;
        var e = t.list;
        var r = t.mode;
        var o = Q(e);
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "afterCreate", this).call(this);
        this.curIndex = -1;
        this.lastIndex = -1;
        this.curItem = null;
        this._nativeTracks = null;
        this.handlerClickSwitch = this.hook("subtitle_change", this.clickSwitch);
        if (r === "native") {
          this._initNativeSubtitle();
        } else {
          this._initExtSubTitle(o);
        }
      }
    }, {
      key: "_initNativeSubtitle",
      value: function () {
        var t = this.player;
        t._subTitles ||= new $(t.media);
        this.subTitles = t._subTitles;
        this.subTitles.on("off", this._onOff);
        this.subTitles.on("change", this._onChange);
        this.subTitles.on("reset", this._onListReset);
      }
    }, {
      key: "_initExtSubTitle",
      value: function (t) {
        var e = this.config;
        var n = e.list;
        var i = e.style;
        var r = e.isDefaultOpen;
        if (r && t < 0 && n.length > 0) {
          t = 0;
          n[0].isDefault = true;
        }
        var o = {
          subTitles: n,
          defaultOpen: r,
          debugger: this.config.debugger
        };
        Object.keys(i).map(function (t) {
          o[t] = i[t];
        });
        o.updateMode = this.config.updateMode;
        if (!this.playerConfig.marginControls && this.player.controls.root) {
          this.on(videoPlayerEventConstants.PLAYER_FOCUS, this.onPlayerFocus);
          this.on(videoPlayerEventConstants.PLAYER_BLUR, this.onPlayerBlur);
        }
        var s = this.player;
        if (s._subTitles) {
          if (s._subTitles._isOpen) {
            t = this.getSubTitleIndex(this.config.list, s._subTitles.currentText);
          }
        } else {
          s._subTitles = new W(o);
          s._subTitles.attachPlayer(this.player);
        }
        this.subTitles = s._subTitles;
        this.subTitles.on("off", this._onOff);
        this.subTitles.on("change", this._onChange);
        this.subTitles.on("reset", this._onListReset);
        if (i.follow && this.subTitles.root) {
          playerUtilityHelpers.domUtils.addClass(this.subTitles.root, "follow-control");
        }
        this._renderList(n, r, t);
      }
    }, {
      key: "_renderList",
      value: function (t, e, n) {
        if (t && t.length !== 0) {
          if (e) {
            t[n = n < 0 ? 0 : n].isDefault = true;
            this.curIndex = n;
            this.curItem = t[n];
            this.switchIconState(true);
          } else {
            this.switchIconState(false);
          }
          if (this.player.isCanplay && t.length > 0) {
            this.renderItemList(t);
            this.show();
          }
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          textTrackOpen: {
            icon: "",
            class: "xg-texttrak-open"
          },
          textTrackClose: {
            icon: "",
            class: "xg-texttrak-close"
          }
        };
      }
    }, {
      key: "show",
      value: function () {
        if (this.config.list && !(this.config.list.length < 1)) {
          playerUtilityHelpers.domUtils.addClass(this.root, "show");
        }
      }
    }, {
      key: "getSubTitleIndex",
      value: function (t, e = {
        id: "",
        language: ""
      }) {
        var n = -1;
        if (e && (e.id || e.language)) {
          t.forEach(function (t, i) {
            var r;
            var o;
            r = playerUtilityHelpers.domUtils.isNotNull(t.id) && playerUtilityHelpers.domUtils.isNotNull(e.id) && t.id === e.id;
            o = playerUtilityHelpers.domUtils.isNotNull(t.language) && playerUtilityHelpers.domUtils.isNotNull(e.language) && t.language === e.language;
            if (r || o) {
              n = i;
            }
          });
        }
        return n;
      }
    }, {
      key: "updateSubtitles",
      value: function (t = []) {
        var e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        if (t) {
          this.updateList();
          if (this.subTitles) {
            this.subTitles.setSubTitles(this.config.list, this.curIndex > -1, e);
          }
        }
      }
    }, {
      key: "updateList",
      value: function (t = {}) {
        if (t.list) {
          var e = [];
          t.list.forEach(function (t) {
            e.push(t);
          });
          var n = Q(e);
          if (t.isOpen) {
            this.curIndex = n;
            this.curItem = n > -1 ? e[n] : null;
          } else {
            this.curIndex = -1;
            this.curItem = null;
          }
          this.config.list = e;
          if (e.length > 0) {
            this.show();
          } else {
            this.switchOffSubtitle();
            this.hide();
          }
          this.renderItemList();
        }
      }
    }, {
      key: "switchSubTitle",
      value: function (t = {
        id: "",
        language: ""
      }) {
        this.switchIconState(true);
        if (!(this.getSubTitleIndex(this.config.list, t) < 0)) {
          this.subTitles.switch(t).catch(function (t) {});
        }
      }
    }, {
      key: "switchOffSubtitle",
      value: function (t) {
        this.emit("subtitle_change", {
          off: true,
          isListUpdate: false,
          list: []
        });
        this.lastIndex = this.curIndex;
        this.curIndex = -1;
        this.curItem = null;
        this.switchIconState(false);
        this.renderItemList();
      }
    }, {
      key: "switchOnSubtitle",
      value: function () {
        var t = this.config.list[this.lastIndex > -1 ? this.lastIndex : 0];
        this.switchIconState(true);
        this.switchSubTitle(t);
      }
    }, {
      key: "switchIconState",
      value: function (t) {
        this.setAttr("data-state", t ? "open" : "close");
      }
    }, {
      key: "onItemClick",
      value: function (t, e) {
        var r = t.delegateTarget;
        var o = r.getAttribute("language");
        var s = r.getAttribute("data-id");
        var a = r.getAttribute("data-type");
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "onItemClick", this).apply(this, arguments);
        this.handlerClickSwitch(t, {
          language: o,
          id: s,
          type: a
        });
      }
    }, {
      key: "changeCurrentText",
      value: function () {
        if (!this.isIcons) {
          var t = this.config;
          var e = t.list;
          var n = t.closeText;
          var i = this.curIndex;
          if (i - 1 < 0) {
            this.find(".icon-text").innerHTML = this.getTextByLang(n, "iconText");
          } else if (i - 1 < e.length) {
            var r = e[i - 1];
            if (!r) {
              return;
            }
            this.find(".icon-text").innerHTML = this.getTextByLang(r, "iconText");
          }
        }
      }
    }, {
      key: "updateCurItem",
      value: function (t, e) {
        this.curIndex = t;
        this.curItem = this.config.list[t - 1];
        this.renderItemList();
        this.emit("subtitle_change", babelRuntimeHelpers_1.objectSpread({
          off: false,
          isListUpdate: false,
          list: []
        }, e));
      }
    }, {
      key: "renderItemList",
      value: function () {
        var t = this;
        var e = this.config;
        var r = e.list;
        var o = e.closeText;
        var s = e.needCloseText;
        var a = [];
        var l = this.curIndex;
        var u = this.curIndex;
        if (s) {
          a.push({
            showText: this.getTextByLang(o),
            "data-type": J.TEXT_CLOSE,
            selected: this.curIndex === -1
          });
          l++;
        }
        r.map(function (e, n) {
          var i = {
            language: e.language || e.srclang || "",
            "data-id": e.id || ""
          };
          i.selected = t.curIndex === n;
          i.showText = t.getTextByLang(e);
          a.push(i);
        });
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "renderItemList", this).call(this, a, l);
        this.curIndex = u;
        this.curItem = r[u];
      }
    }, {
      key: "rePosition",
      value: function () {
        var t = this.config.style.fitVideo;
        var e = 0 - this.player.controls.root.getBoundingClientRect().height;
        if (!t) {
          this.subTitles.root.style.transform = `translate(0, ${e}px)`;
          return;
        }
        var n = this.player;
        var i = n.video;
        var r = n.root.getBoundingClientRect();
        var o = r.height;
        var s = r.width;
        var a = parseInt(i.videoHeight / i.videoWidth * 100, 10) * s / 100;
        if (a > o) {
          a = o;
        }
        var l = (o - a) / 2 - e;
        if (l < 0) {
          this.subTitles.root.style.transform = `translate(0, ${l}px)`;
        }
      }
    }, {
      key: "destroy",
      value: function () {
        if (this.subTitles) {
          this.subTitles.destroy();
          this.subTitles = null;
        }
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "destroy", this).call(this);
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "texttrack";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({}, videoPlayerOptionsIconPlugin.OptionsIconPlugin.defaultConfig), {}, {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 6,
          list: [],
          isDefaultOpen: true,
          style: {
            follow: true,
            mode: "stroke",
            followBottom: 50,
            fitVideo: true,
            offsetBottom: 2,
            baseSizeX: 49,
            baseSizeY: 28,
            minSize: 16,
            minMobileSize: 13,
            line: "double",
            fontColor: "#fff"
          },
          closeText: {
            text: "不开启",
            iconText: "字幕"
          },
          needCloseText: true,
          className: "xgplayer-texttrack",
          hidePortrait: false,
          isShowIcon: true,
          mode: "external",
          debugger: false
        });
      }
    }]);
    return n;
  }(videoPlayerOptionsIconPlugin.OptionsIconPlugin);
  require.d(exports, {
    TextTrackPlugin: function () {
      return tt;
    }
  });
}