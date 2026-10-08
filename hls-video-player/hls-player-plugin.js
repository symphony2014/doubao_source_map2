// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'HlsPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92744.5f06be26.js
         * chunkId: 92744
         * moduleId: 577532
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      i.push.apply(i, r);
    }
    return i;
  }
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t] ?? {};
      if (t % 2) {
        r(Object(i), true).forEach(function (t) {
          d(e, t, i[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(i));
      } else {
        r(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
    }
    return e;
  }
  function s() {
    s = function () {
      return e;
    };
    var e = {};
    var t = Object.prototype;
    var i = t.hasOwnProperty;
    var r = Object.defineProperty || function (e, t, i) {
      e[t] = i.value;
    };
    var n = typeof Symbol == "function" ? Symbol : {};
    var a = n.iterator || "@@iterator";
    var o = n.asyncIterator || "@@asyncIterator";
    var u = n.toStringTag || "@@toStringTag";
    function c(e, t, i) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return e[t];
    }
    try {
      c({}, "");
    } catch (e) {
      c = function (e, t, i) {
        return e[t] = i;
      };
    }
    function l(e, t, i, n) {
      var s;
      var a;
      var o;
      var u;
      var c = Object.create((t && t.prototype instanceof f ? t : f).prototype);
      r(c, "_invoke", {
        value: (s = e, a = i, o = new x(n || []), u = "suspendedStart", function (e, t) {
          if (u === "executing") {
            throw Error("Generator is already running");
          }
          if (u === "completed") {
            if (e === "throw") {
              throw t;
            }
            return w();
          }
          o.method = e;
          o.arg = t;
          while (true) {
            var i = o.delegate;
            if (i) {
              var r = function e(t, i) {
                var r = i.method;
                var n = t.iterator[r];
                if (n === undefined) {
                  i.delegate = null;
                  if (r !== "throw" || !t.iterator.return || !(i.method = "return", i.arg = undefined, e(t, i), i.method === "throw")) {
                    if (r !== "return") {
                      i.method = "throw";
                      i.arg = TypeError("The iterator does not provide a '" + r + "' method");
                    }
                  }
                  return d;
                }
                var s = h(n, t.iterator, i.arg);
                if (s.type === "throw") {
                  i.method = "throw";
                  i.arg = s.arg;
                  i.delegate = null;
                  return d;
                }
                var a = s.arg;
                if (a) {
                  if (a.done) {
                    i[t.resultName] = a.value;
                    i.next = t.nextLoc;
                    if (i.method !== "return") {
                      i.method = "next";
                      i.arg = undefined;
                    }
                    i.delegate = null;
                    return d;
                  } else {
                    return a;
                  }
                } else {
                  i.method = "throw";
                  i.arg = TypeError("iterator result is not an object");
                  i.delegate = null;
                  return d;
                }
              }(i, o);
              if (r) {
                if (r === d) {
                  continue;
                }
                return r;
              }
            }
            if (o.method === "next") {
              o.sent = o._sent = o.arg;
            } else if (o.method === "throw") {
              if (u === "suspendedStart") {
                u = "completed";
                throw o.arg;
              }
              o.dispatchException(o.arg);
            } else if (o.method === "return") {
              o.abrupt("return", o.arg);
            }
            u = "executing";
            var n = h(s, a, o);
            if (n.type === "normal") {
              u = o.done ? "completed" : "suspendedYield";
              if (n.arg === d) {
                continue;
              }
              return {
                value: n.arg,
                done: o.done
              };
            }
            if (n.type === "throw") {
              u = "completed";
              o.method = "throw";
              o.arg = n.arg;
            }
          }
        })
      });
      return c;
    }
    function h(e, t, i) {
      try {
        return {
          type: "normal",
          arg: e.call(t, i)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }
    e.wrap = l;
    var d = {};
    function f() {}
    function p() {}
    function v() {}
    var m = {};
    c(m, a, function () {
      return this;
    });
    var g = Object.getPrototypeOf;
    var _ = g && g(g(E([])));
    if (_ && _ !== t && i.call(_, a)) {
      m = _;
    }
    var y = v.prototype = f.prototype = Object.create(m);
    function b(e) {
      ["next", "throw", "return"].forEach(function (t) {
        c(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function k(e, t) {
      var n;
      r(this, "_invoke", {
        value: function (r, s) {
          function a() {
            return new t(function (n, a) {
              (function r(n, s, a, o) {
                var u = h(e[n], e, s);
                if (u.type !== "throw") {
                  var c = u.arg;
                  var l = c.value;
                  if (l && typeof l == "object" && i.call(l, "__await")) {
                    return t.resolve(l.__await).then(function (e) {
                      r("next", e, a, o);
                    }, function (e) {
                      r("throw", e, a, o);
                    });
                  } else {
                    return t.resolve(l).then(function (e) {
                      c.value = e;
                      a(c);
                    }, function (e) {
                      return r("throw", e, a, o);
                    });
                  }
                }
                o(u.arg);
              })(r, s, n, a);
            });
          }
          return n = n ? n.then(a, a) : a();
        }
      });
    }
    function S(e) {
      var t = {
        tryLoc: e[0]
      };
      if (1 in e) {
        t.catchLoc = e[1];
      }
      if (2 in e) {
        t.finallyLoc = e[2];
        t.afterLoc = e[3];
      }
      this.tryEntries.push(t);
    }
    function T(e) {
      var t = e.completion || {};
      t.type = "normal";
      delete t.arg;
      e.completion = t;
    }
    function x(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      e.forEach(S, this);
      this.reset(true);
    }
    function E(e) {
      if (e) {
        var t = e[a];
        if (t) {
          return t.call(e);
        }
        if (typeof e.next == "function") {
          return e;
        }
        if (!isNaN(e.length)) {
          var r = -1;
          var n = function t() {
            while (++r < e.length) {
              if (i.call(e, r)) {
                t.value = e[r];
                t.done = false;
                return t;
              }
            }
            t.value = undefined;
            t.done = true;
            return t;
          };
          return n.next = n;
        }
      }
      return {
        next: w
      };
    }
    function w() {
      return {
        value: undefined,
        done: true
      };
    }
    p.prototype = v;
    r(y, "constructor", {
      value: v,
      configurable: true
    });
    r(v, "constructor", {
      value: p,
      configurable: true
    });
    p.displayName = c(v, u, "GeneratorFunction");
    e.isGeneratorFunction = function (e) {
      var t = typeof e == "function" && e.constructor;
      return !!t && (t === p || (t.displayName || t.name) === "GeneratorFunction");
    };
    e.mark = function (e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, v);
      } else {
        e.__proto__ = v;
        c(e, u, "GeneratorFunction");
      }
      e.prototype = Object.create(y);
      return e;
    };
    e.awrap = function (e) {
      return {
        __await: e
      };
    };
    b(k.prototype);
    c(k.prototype, o, function () {
      return this;
    });
    e.AsyncIterator = k;
    e.async = function (t, i, r, n, s = Promise) {
      var a = new k(l(t, i, r, n), s);
      if (e.isGeneratorFunction(i)) {
        return a;
      } else {
        return a.next().then(function (e) {
          if (e.done) {
            return e.value;
          } else {
            return a.next();
          }
        });
      }
    };
    b(y);
    c(y, u, "Generator");
    c(y, a, function () {
      return this;
    });
    c(y, "toString", function () {
      return "[object Generator]";
    });
    e.keys = function (e) {
      var t = Object(e);
      var i = [];
      for (var r in t) {
        i.push(r);
      }
      i.reverse();
      return function e() {
        while (i.length) {
          var r = i.pop();
          if (r in t) {
            e.value = r;
            e.done = false;
            return e;
          }
        }
        e.done = true;
        return e;
      };
    };
    e.values = E;
    x.prototype = {
      constructor: x,
      reset: function (e) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(T);
        if (!e) {
          for (var t in this) {
            if (t.charAt(0) === "t" && i.call(this, t) && !isNaN(+t.slice(1))) {
              this[t] = undefined;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var e = this.tryEntries[0].completion;
        if (e.type === "throw") {
          throw e.arg;
        }
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) {
          throw e;
        }
        var t = this;
        function r(i, r) {
          a.type = "throw";
          a.arg = e;
          t.next = i;
          if (r) {
            t.method = "next";
            t.arg = undefined;
          }
          return !!r;
        }
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var s = this.tryEntries[n];
          var a = s.completion;
          if (s.tryLoc === "root") {
            return r("end");
          }
          if (s.tryLoc <= this.prev) {
            var o = i.call(s, "catchLoc");
            var u = i.call(s, "finallyLoc");
            if (o && u) {
              if (this.prev < s.catchLoc) {
                return r(s.catchLoc, true);
              }
              if (this.prev < s.finallyLoc) {
                return r(s.finallyLoc);
              }
            } else if (o) {
              if (this.prev < s.catchLoc) {
                return r(s.catchLoc, true);
              }
            } else {
              if (!u) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < s.finallyLoc) {
                return r(s.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var n = this.tryEntries[r];
          if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
            var s = n;
            break;
          }
        }
        if (s && (e === "break" || e === "continue") && s.tryLoc <= t && t <= s.finallyLoc) {
          s = null;
        }
        var a = s ? s.completion : {};
        a.type = e;
        a.arg = t;
        if (s) {
          this.method = "next";
          this.next = s.finallyLoc;
          return d;
        } else {
          return this.complete(a);
        }
      },
      complete: function (e, t) {
        if (e.type === "throw") {
          throw e.arg;
        }
        if (e.type === "break" || e.type === "continue") {
          this.next = e.arg;
        } else if (e.type === "return") {
          this.rval = this.arg = e.arg;
          this.method = "return";
          this.next = "end";
        } else if (e.type === "normal" && t) {
          this.next = t;
        }
        return d;
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var i = this.tryEntries[t];
          if (i.finallyLoc === e) {
            this.complete(i.completion, i.afterLoc);
            T(i);
            return d;
          }
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var i = this.tryEntries[t];
          if (i.tryLoc === e) {
            var r = i.completion;
            if (r.type === "throw") {
              var n = r.arg;
              T(i);
            }
            return n;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, t, i) {
        this.delegate = {
          iterator: E(e),
          resultName: t,
          nextLoc: i
        };
        if (this.method === "next") {
          this.arg = undefined;
        }
        return d;
      }
    };
    return e;
  }
  function a(e) {
    return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function o(e, t, i, r, n, s, a) {
    try {
      var o = e[s](a);
      var u = o.value;
    } catch (e) {
      i(e);
      return;
    }
    if (o.done) {
      t(u);
    } else {
      Promise.resolve(u).then(r, n);
    }
  }
  function u(e) {
    return function () {
      var t = this;
      var i = arguments;
      return new Promise(function (r, n) {
        var s = e.apply(t, i);
        function a(e) {
          o(s, r, n, a, u, "next", e);
        }
        function u(e) {
          o(s, r, n, a, u, "throw", e);
        }
        a(undefined);
      });
    };
  }
  function c(e, t) {
    if (!(e instanceof t)) {
      throw TypeError("Cannot call a class as a function");
    }
  }
  function l(e, t) {
    for (var i = 0; i < t.length; i++) {
      var r = t[i];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, k(r.key), r);
    }
  }
  function h(e, t, i) {
    if (t) {
      l(e.prototype, t);
    }
    if (i) {
      l(e, i);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  }
  function d(e, t, i) {
    if ((t = k(t)) in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    if (t) {
      v(e, t);
    }
  }
  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function v(e, t) {
    return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function m(e) {
    if (e === undefined) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
  }
  function g(e) {
    var t = function () {
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
    }();
    return function () {
      var i;
      var r = p(e);
      i = t ? Reflect.construct(r, arguments, p(this).constructor) : r.apply(this, arguments);
      return function (e, t) {
        if (t && (typeof t == "object" || typeof t == "function")) {
          return t;
        }
        if (t !== undefined) {
          throw TypeError("Derived constructors may only return object or undefined");
        }
        return m(e);
      }(this, i);
    };
  }
  function _(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (i != null) {
        var r;
        var n;
        var s;
        var a;
        var o = [];
        var u = true;
        var c = false;
        try {
          s = (i = i.call(e)).next;
          if (t === 0) {
            if (Object(i) !== i) {
              return;
            }
            u = false;
          } else {
            for (; !(u = (r = s.call(i)).done) && (o.push(r.value), o.length !== t); u = true);
          }
        } catch (e) {
          c = true;
          n = e;
        } finally {
          try {
            if (!u && i.return != null && (a = i.return(), Object(a) !== a)) {
              return;
            }
          } finally {
            if (c) {
              throw n;
            }
          }
        }
        return o;
      }
    }(e, t) || y(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function y(e, t) {
    if (e) {
      if (typeof e == "string") {
        return b(e, t);
      }
      var i = Object.prototype.toString.call(e).slice(8, -1);
      if (i === "Object" && e.constructor) {
        i = e.constructor.name;
      }
      if (i === "Map" || i === "Set") {
        return Array.from(e);
      }
      if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) {
        return b(e, t);
      }
    }
  }
  function b(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var i = 0;
    var r = Array(t);
    for (; i < t; i++) {
      r[i] = e[i];
    }
    return r;
  }
  function k(e) {
    var t = function (e, t) {
      if (typeof e != "object" || e === null) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(e, "string");
    if (typeof t == "symbol") {
      return t;
    } else {
      return String(t);
    }
  }
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerErrorHandler = require("player-error-handler") /*id: 608826*/;
  var mediaCoreEventKeys = require("media-core-event-keys") /*id: 379724*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var customLoggerClass = require("custom-logger-class") /*id: 246025*/;
  var bufferRangeUtil = require("buffer-range-util") /*id: 252499*/;
  var mediaErrorHandler = require("media-error-handler") /*id: 706617*/;
  var mediaPlaybackUtils = require("media-playback-utils") /*id: 53628*/;
  var babelRuntimeHelpers = require("babel-runtime-helpers") /*id: 339562*/;
  var O = function () {
    function e(t) {
      var i = this;
      babelRuntimeHelpers.classCallCheck(this, e);
      babelRuntimeHelpers.defineProperty(this, "_seiSet", new Set());
      this.emitter = t;
      t.on(mediaCoreEventKeys.mediaCoreEventKeys.SEI, function (e) {
        if (e) {
          i._seiSet.add(e);
        }
      });
    }
    babelRuntimeHelpers.classProps(e, [{
      key: "throw",
      value: function (e, t) {
        var i = this;
        if (e != null && this._seiSet.size) {
          var r = e - 0.2;
          var n = e + 0.2;
          var s = [];
          this._seiSet.forEach(function (e) {
            if (e.time >= r && e.time <= n) {
              s.push(e);
            }
          });
          s.forEach(function (e) {
            i._seiSet.delete(e);
            i.emitter.emit(mediaCoreEventKeys.mediaCoreEventKeys.SEI_IN_TIME, e);
          });
          if (t) {
            this._seiSet.forEach(function (t) {
              if (t.time < e - 5) {
                i._seiSet.delete(t);
              }
            });
          }
        }
      }
    }, {
      key: "reset",
      value: function () {
        this._seiSet.clear();
      }
    }]);
    return e;
  }();
  var C = function () {
    function e() {
      babelRuntimeHelpers.classCallCheck(this, e);
      babelRuntimeHelpers.defineProperty(this, "_prevCurrentTime", 0);
    }
    babelRuntimeHelpers.classProps(e, [{
      key: "do",
      value: function (e, t = 3, i, r = 1) {
        if (e) {
          var n = e.currentTime;
          var s = 0;
          if (this._prevCurrentTime === n) {
            var a = bufferRangeUtil.BufferRangeUtil.info(bufferRangeUtil.BufferRangeUtil.get(e), n);
            if (!a.buffers.length) {
              return;
            }
            if (i && a.nextStart || a.nextStart && a.nextStart - n < t) {
              s = a.nextStart + 0.1;
            } else if (a.end && a.end - n > r && !e.seeking) {
              s = n + 0.1;
            }
          }
          this._prevCurrentTime = n;
          if (s && n !== s) {
            e.currentTime = s;
          }
        }
      }
    }]);
    return e;
  }();
  var R = function () {
    function e(t) {
      babelRuntimeHelpers.classCallCheck(this, e);
      babelRuntimeHelpers.defineProperty(this, "encodeType", "");
      babelRuntimeHelpers.defineProperty(this, "audioCodec", "");
      babelRuntimeHelpers.defineProperty(this, "videoCodec", "");
      babelRuntimeHelpers.defineProperty(this, "domain", "");
      babelRuntimeHelpers.defineProperty(this, "fps", 0);
      babelRuntimeHelpers.defineProperty(this, "bitrate", 0);
      babelRuntimeHelpers.defineProperty(this, "width", 0);
      babelRuntimeHelpers.defineProperty(this, "height", 0);
      babelRuntimeHelpers.defineProperty(this, "samplerate", 0);
      babelRuntimeHelpers.defineProperty(this, "channelCount", 0);
      babelRuntimeHelpers.defineProperty(this, "gop", 0);
      babelRuntimeHelpers.defineProperty(this, "_bitsAccumulateSize", 0);
      babelRuntimeHelpers.defineProperty(this, "_bitsAccumulateDuration", 0);
      babelRuntimeHelpers.defineProperty(this, "_startGopId", -1);
      this._timescale = t;
    }
    babelRuntimeHelpers.classProps(e, [{
      key: "getStats",
      value: function () {
        return {
          encodeType: this.encodeType,
          audioCodec: this.audioCodec,
          videoCodec: this.videoCodec,
          domain: this.domain,
          fps: this.fps,
          bitrate: this.bitrate,
          width: this.width,
          height: this.height,
          samplerate: this.samplerate,
          channelCount: this.channelCount,
          gop: this.gop
        };
      }
    }, {
      key: "setEncodeType",
      value: function (e) {
        this.encodeType = e;
      }
    }, {
      key: "setFpsFromScriptData",
      value: function (e) {
        var i = e.data;
        var r = i == null ? undefined : i.onMetaData?.framerate;
        if (r && r > 0 && r < 100) {
          this.fps = r;
        }
      }
    }, {
      key: "setVideoMeta",
      value: function (e) {
        this.width = e.width;
        this.height = e.height;
        this.videoCodec = e.codec;
        this.encodeType = e.codecType;
        if (e.fpsNum && e.fpsDen) {
          var t = e.fpsNum / e.fpsDen;
          if (t > 0 && t < 100) {
            this.fps = t;
          }
        }
      }
    }, {
      key: "setAudioMeta",
      value: function (e) {
        this.audioCodec = e.codec;
        this.samplerate = e.sampleRate;
        this.channelCount = e.channelCount;
      }
    }, {
      key: "setDomain",
      value: function (e) {
        this.domain = e.split("/").slice(2, 3)[0];
      }
    }, {
      key: "updateBitrate",
      value: function (e) {
        var t = this;
        if ((!this.fps || this.fps >= 100) && e.length) {
          var i = e.reduce(function (e, t) {
            return e + t.duration;
          }, 0) / e.length;
          this.fps = Math.round(this._timescale / i);
        }
        e.forEach(function (e) {
          if (t._startGopId === -1) {
            t._startGopId = e.gopId;
          }
          if (e.gopId === t._startGopId) {
            t.gop++;
          }
          t._bitsAccumulateDuration += e.duration / (t._timescale / 1000);
          t._bitsAccumulateSize += e.units.reduce(function (e, t) {
            return e + t.length;
          }, 0);
          if (t._bitsAccumulateDuration >= 1000) {
            t.bitrate = t._bitsAccumulateSize * 8;
            t._bitsAccumulateDuration = 0;
            t._bitsAccumulateSize = 0;
          }
        });
      }
    }]);
    return e;
  }();
  var B = function () {
    function e(t, i = 1000) {
      babelRuntimeHelpers.classCallCheck(this, e);
      babelRuntimeHelpers.defineProperty(this, "_core", null);
      babelRuntimeHelpers.defineProperty(this, "_samples", []);
      this._core = t;
      this._timescale = i;
      this._stats = new R(i);
      this._bindEvents();
    }
    babelRuntimeHelpers.classProps(e, [{
      key: "getStats",
      value: function () {
        var t;
        var i;
        var r;
        var n;
        var s;
        var o = this._core?.media || {};
        var u = o.currentTime;
        var c = o.decodeFps;
        return babelRuntimeHelpers.objectSpread(babelRuntimeHelpers.objectSpread({}, this._stats.getStats()), {}, {
          downloadSpeed: ((t = this._core) === null || t === undefined ? undefined : (i = t.speedInfo) === null || i === undefined ? undefined : i.call(t).speed) || 0,
          avgSpeed: ((r = this._core) === null || r === undefined ? undefined : (n = r.speedInfo) === null || n === undefined ? undefined : n.call(r).avgSpeed) || 0,
          currentTime: u === undefined ? 0 : u,
          bufferEnd: ((s = this._core) === null || s === undefined ? undefined : s.bufferInfo()?.remaining) || 0,
          decodeFps: c === undefined ? 0 : c
        });
      }
    }, {
      key: "_bindEvents",
      value: function () {
        var e = this;
        this._core.on(mediaCoreEventKeys.mediaCoreEventKeys.DEMUXED_TRACK, function (t) {
          var i = t.videoTrack;
          return e._stats.updateBitrate(i.samples);
        });
        this._core.on(mediaCoreEventKeys.mediaCoreEventKeys.FLV_SCRIPT_DATA, function (t) {
          e._stats.setFpsFromScriptData(t);
        });
        this._core.on(mediaCoreEventKeys.mediaCoreEventKeys.METADATA_PARSED, function (t) {
          if (t.type === "video") {
            e._stats.setVideoMeta(t.track);
          } else {
            e._stats.setAudioMeta(t.track);
          }
        });
        this._core.on(mediaCoreEventKeys.mediaCoreEventKeys.TTFB, function (t) {
          e._stats.setDomain(t.responseUrl);
        });
      }
    }, {
      key: "reset",
      value: function () {
        this._samples = [];
        this._stats = new R(this._timescale);
      }
    }]);
    return e;
  }();
  var mseMediaSourceManager = require("mse-media-source-manager") /*id: 595663*/;
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var M = function () {
    function e(t) {
      babelClassHelpers.classCallCheck(this, e);
      this.name = t || "";
      this._prefix = `[${this.name}]`;
    }
    babelClassHelpers.createClass(e, [{
      key: "warn",
      value: function () {
        var t;
        if (!e.disabled) {
          var i = arguments.length;
          var r = Array(i);
          var n = 0;
          for (; n < i; n++) {
            r[n] = arguments[n];
          }
          (t = console).warn.apply(t, [this._prefix].concat(r));
        }
      }
    }], [{
      key: "enable",
      value: function () {
        e.disabled = false;
      }
    }, {
      key: "disable",
      value: function () {
        e.disabled = true;
      }
    }]);
    return e;
  }();
  babelClassHelpers.defineProperty(M, "disabled", true);
  var avMediaConstants = require("av-media-constants") /*id: 87395*/;
  var mediaSampleClass = require("media-sample-class") /*id: 972226*/;
  var browserDetection = require("browser-detection") /*id: 93195*/;
  var aacAdtsParserUtil = require("aac-adts-parser-util") /*id: 493629*/;
  var H = 450000;
  var K = function () {
    function e(t, i, r) {
      babelClassHelpers.classCallCheck(this, e);
      this.videoTrack = t;
      this.audioTrack = i;
      this.metadataTrack = r;
      this._baseDts = -1;
      this._baseDtsInited = false;
      this._audioNextPts = undefined;
      this._videoNextDts = undefined;
      this._audioTimestampBreak = false;
      this._videoTimestampBreak = false;
      this._lastAudioExceptionGapDot = 0;
      this._lastAudioExceptionOverlapDot = 0;
      this._lastAudioExceptionLargeGapDot = 0;
    }
    babelClassHelpers.createClass(e, [{
      key: "fix",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        var r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        t = Math.round(t * 90000);
        var n = this.videoTrack;
        var s = this.audioTrack;
        var a = n.samples;
        var o = s.samples;
        if (a.length || o.length) {
          var u = a[0];
          var c = o[0];
          var l = 0;
          if (a.length && o.length) {
            l = u.dts - c.pts;
          }
          if (!this._baseDtsInited) {
            this._calculateBaseDts(this.audioTrack, this.videoTrack);
          }
          if (i) {
            this._calculateBaseDts(this.audioTrack, this.videoTrack);
            this._baseDts -= t;
          }
          if (!r) {
            this._videoNextDts = l > 0 ? t + l : t;
            this._audioNextPts = l > 0 ? t : t - l;
            var h = u ? u.dts - this._baseDts - this._videoNextDts : 0;
            var d = c ? c.pts - this._baseDts - this._audioNextPts : 0;
            if (Math.abs(h || d) > 90000) {
              this._calculateBaseDts(this.audioTrack, this.videoTrack);
              this._baseDts -= t;
            }
          }
          this._resetBaseDtsWhenStreamBreaked();
          this._fixAudio(s);
          this._fixVideo(n);
          if (this.metadataTrack.exist()) {
            var f = this.metadataTrack.timescale;
            this.metadataTrack.seiSamples.forEach(function (t) {
              t.pts = t.originPts - e._baseDts;
              t.time = Math.max(0, t.pts) / f;
            });
          }
          if (n.samples.length) {
            n.baseMediaDecodeTime = n.samples[0].dts;
          }
          if (s.samples.length) {
            s.baseMediaDecodeTime = s.samples[0].pts * s.timescale / 90000;
          }
        }
      }
    }, {
      key: "_fixVideo",
      value: function (e) {
        var t;
        var i = this;
        var r = e.samples;
        if (r.length) {
          r.forEach(function (e) {
            e.dts -= i._baseDts;
            e.pts -= i._baseDts;
          });
          if (this._videoNextDts === undefined) {
            var n = r[0];
            this._videoNextDts = n.dts;
          }
          var s = r.length;
          var a = 0;
          var o = r[0];
          var u = r[1];
          var c = this._videoNextDts - o.dts;
          if (Math.abs(c) > 45000) {
            e.warnings.push({
              type: avMediaConstants.avMetrics.LARGE_VIDEO_GAP_BETWEEN_CHUNK,
              nextDts: this._videoNextDts / 90,
              firstSampleDts: o.dts / 90,
              nextSampleDts: (r[1]?.dts || 0) / 90,
              sampleDuration: c / 90
            });
            o.dts += c;
            o.pts += c;
            if (u && Math.abs(u.dts - o.dts) > 90000) {
              this._videoTimestampBreak = true;
              r.forEach(function (e, t) {
                if (t !== 0) {
                  e.dts += c;
                  e.pts += c;
                }
              });
            } else {
              for (var l = 1; l < s - 1; l++) {
                var f = r[l]?.dts;
                var p = r[l - 1].dts;
                if (f && f - p < 0) {
                  r[l].dts += c;
                  r[l].pts += c;
                }
              }
            }
          }
          if (e.fpsNum && e.fpsDen) {
            t = e.timescale * (e.fpsDen / e.fpsNum);
          } else {
            var v = e.samples[0];
            var m = e.samples[1];
            t = s === 1 ? 9000 : Math.floor(m.dts - v.dts);
          }
          for (var g = 0; g < s; g++) {
            var _ = r[g].dts;
            var y = r[g + 1];
            if ((a = g < s - 1 ? y.dts - _ : r[g - 1] ? Math.min(_ - r[g - 1].dts, t) : t) > 90000 || a < 0) {
              this._videoTimestampBreak = true;
              a = this._audioTimestampBreak ? t : Math.max(a, 2700);
              var b = this._audioNextPts || 0;
              if (y && y.dts > b) {
                a = t;
              }
              e.warnings.push({
                type: avMediaConstants.avMetrics.LARGE_VIDEO_GAP,
                time: _ / e.timescale,
                dts: _,
                originDts: r[g].originDts,
                nextDts: this._videoNextDts,
                sampleDuration: a,
                refSampleDuration: t
              });
            }
            r[g].duration = a;
            this._videoNextDts += a;
          }
        }
      }
    }, {
      key: "_fixAudio",
      value: function (e) {
        var t = this;
        var i = e.samples;
        if (i.length) {
          i.forEach(function (e) {
            e.pts -= t._baseDts;
            e.dts = e.pts;
          });
          this._doFixAudioInternal(e, i, 90000);
        }
      }
    }, {
      key: "_calculateBaseDts",
      value: function (e, t) {
        var i = e.samples;
        var r = t.samples;
        if (!i.length && !r.length) {
          return false;
        }
        var n = Infinity;
        var s = Infinity;
        if (i.length) {
          e.baseDts = n = i[0].pts;
        }
        if (r.length) {
          t.baseDts = s = r[0].dts;
        }
        this._baseDts = Math.min(n, s);
        var a = s - n;
        if (Number.isFinite(a) && Math.abs(a) > 45000) {
          t.warnings.push({
            type: avMediaConstants.avMetrics.LARGE_AV_SHIFT,
            videoBaseDts: s,
            audioBasePts: n,
            baseDts: this._baseDts,
            delta: a
          });
        }
        this._baseDtsInited = true;
        return true;
      }
    }, {
      key: "_resetBaseDtsWhenStreamBreaked",
      value: function () {
        if (this._baseDtsInited && this._videoTimestampBreak && this._audioTimestampBreak && this._calculateBaseDts(this.audioTrack, this.videoTrack)) {
          this._baseDts -= Math.min(this._audioNextPts, this._videoNextDts);
          this._audioLastSample = null;
          this._videoLastSample = null;
          this._videoTimestampBreak = false;
          this._audioTimestampBreak = false;
        }
      }
    }, {
      key: "_doFixAudioInternal",
      value: function (e, t, i) {
        e.sampleDuration ||= aacAdtsParserUtil.AacAdtsParser.getFrameDuration(e.timescale, i);
        var r = e.sampleDuration;
        if (this._audioNextPts === undefined) {
          var n = t[0];
          this._audioNextPts = n.pts;
        }
        for (var s = 0; s < t.length; s++) {
          var a = this._audioNextPts;
          var o = t[s];
          var u = o.pts - a;
          if (!this._audioTimestampBreak && u >= r * 3 && u <= 90000 && !browserDetection.isSafari) {
            var c = aacAdtsParserUtil.AacAdtsParser.getSilentFrame(e.codec, e.channelCount) || t[0].data.subarray();
            var l = Math.floor(u / r);
            if (Math.abs(o.pts - this._lastAudioExceptionGapDot) > H) {
              this._lastAudioExceptionGapDot = o.pts;
            }
            e.warnings.push({
              type: avMediaConstants.avMetrics.AUDIO_FILLED,
              pts: o.pts,
              originPts: o.originPts,
              count: l,
              nextPts: a,
              refSampleDuration: r
            });
            for (var h = 0; h < l; h++) {
              var d = new mediaSampleClass.MediaSample(Math.floor(a), c);
              d.originPts = Math.floor(this._baseDts + a);
              t.splice(s, 0, d);
              this._audioNextPts += r;
              s++;
            }
            s--;
          } else if (u <= r * -3 && u >= -90000) {
            if (Math.abs(o.pts - this._lastAudioExceptionOverlapDot) > H) {
              this._lastAudioExceptionOverlapDot = o.pts;
              e.warnings.push({
                type: avMediaConstants.avMetrics.AUDIO_DROPPED,
                pts: o.pts,
                originPts: o.originPts,
                nextPts: a,
                refSampleDuration: r
              });
            }
            t.splice(s, 1);
            s--;
          } else {
            if (Math.abs(u) >= 90000) {
              this._audioTimestampBreak = true;
              if (Math.abs(o.pts - this._lastAudioExceptionLargeGapDot) > H) {
                this._lastAudioExceptionLargeGapDot = o.pts;
                e.warnings.push({
                  type: avMediaConstants.avMetrics.LARGE_AUDIO_GAP,
                  time: o.pts / 1000,
                  pts: o.pts,
                  originPts: o.originPts,
                  nextPts: a,
                  sampleDuration: u,
                  refSampleDuration: r
                });
              }
            }
            o.dts = o.pts = a;
            this._audioNextPts += r;
          }
        }
      }
    }]);
    return e;
  }();
  var binaryBufferUtils = require("binary-buffer-utils") /*id: 852150*/;
  var W = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
    }
    babelClassHelpers.createClass(e, null, [{
      key: "parseAnnexB",
      value: function (e) {
        var t = e.length;
        var i = 2;
        var r = 0;
        while (e[i] !== null && e[i] !== undefined && e[i] !== 1) {
          i++;
        }
        if ((r = ++i + 2) >= t) {
          return [];
        }
        var n = [];
        for (; r < t;) {
          switch (e[r]) {
            case 0:
              if (e[r - 1] !== 0) {
                r += 2;
                break;
              }
              if (e[r - 2] !== 0) {
                r++;
                break;
              }
              if (i !== r - 2) {
                n.push(e.subarray(i, r - 2));
              }
              do {
                r++;
              } while (e[r] !== 1 && r < t);
              r = (i = r + 1) + 2;
              break;
            case 1:
              if (e[r - 1] !== 0 || e[r - 2] !== 0) {
                r += 3;
                break;
              }
              if (i !== r - 2) {
                n.push(e.subarray(i, r - 2));
              }
              r = (i = r + 1) + 2;
              break;
            default:
              r += 3;
          }
        }
        if (i < t) {
          n.push(e.subarray(i));
        }
        return n;
      }
    }, {
      key: "parseAvcC",
      value: function (e) {
        var t;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        if (!(e.length < 4)) {
          var r = e.length;
          var n = [];
          var s = 0;
          while (s + i < r) {
            t = binaryBufferUtils.readUint32(e, s);
            if (i === 3) {
              t >>>= 8;
            }
            s += i;
            if (t) {
              if (s + t > r) {
                break;
              }
              n.push(e.subarray(s, s + t));
              s += t;
            }
          }
          return n;
        }
      }
    }, {
      key: "parseSEI",
      value: function (e, t) {
        var i = e.length;
        var r = t ? 2 : 1;
        var n = 0;
        var s = 0;
        var a = "";
        while (e[r] === 255) {
          n += 255;
          r++;
        }
        for (n += e[r++]; e[r] === 255;) {
          s += 255;
          r++;
        }
        s += e[r++];
        if (n === 5 && i > r + 16) {
          for (var o = 0; o < 16; o++) {
            a += e[r].toString(16);
            r++;
          }
        }
        return {
          payload: e.subarray(r, r + s),
          type: n,
          size: s,
          uuid: a
        };
      }
    }, {
      key: "removeEPB",
      value: function (e) {
        var t = e.byteLength;
        var i = [];
        var r = 1;
        while (r < t - 2) {
          if (e[r] === 0 && e[r + 1] === 0 && e[r + 2] === 3) {
            i.push(r + 2);
            r += 2;
          } else {
            r++;
          }
        }
        if (!i.length) {
          return e;
        }
        var n = t - i.length;
        var s = new Uint8Array(n);
        var a = 0;
        for (r = 0; r < n; a++, r++) {
          if (a === i[0]) {
            a++;
            i.shift();
          }
          s[r] = e[a];
        }
        return s;
      }
    }]);
    return e;
  }();
  var z = function () {
    function e(t) {
      babelClassHelpers.classCallCheck(this, e);
      babelClassHelpers.defineProperty(this, "_bytesAvailable", undefined);
      babelClassHelpers.defineProperty(this, "_bitsAvailable", 0);
      babelClassHelpers.defineProperty(this, "_word", 0);
      if (!t) {
        throw Error("ExpGolomb data params is required");
      }
      this._data = t;
      this._bytesAvailable = t.byteLength;
      if (this._bytesAvailable) {
        this._loadWord();
      }
    }
    babelClassHelpers.createClass(e, [{
      key: "bitsAvailable",
      get: function () {
        return this._bitsAvailable;
      }
    }, {
      key: "_loadWord",
      value: function () {
        var e = this._data.byteLength - this._bytesAvailable;
        var t = Math.min(4, this._bytesAvailable);
        if (t === 0) {
          throw Error("No bytes available");
        }
        var i = new Uint8Array(4);
        i.set(this._data.subarray(e, e + t));
        this._word = new DataView(i.buffer).getUint32(0);
        this._bitsAvailable = t * 8;
        this._bytesAvailable -= t;
      }
    }, {
      key: "skipBits",
      value: function (e) {
        if (this._bitsAvailable > e) {
          this._word <<= e;
          this._bitsAvailable -= e;
        } else {
          var t = Math.floor((e -= this._bitsAvailable) / 8);
          e -= t * 8;
          this._bytesAvailable -= t;
          this._loadWord();
          this._word <<= e;
          this._bitsAvailable -= e;
        }
      }
    }, {
      key: "readBits",
      value: function (e) {
        if (e > 32) {
          throw Error("Cannot read more than 32 bits");
        }
        var t = Math.min(this._bitsAvailable, e);
        var i = this._word >>> 32 - t;
        this._bitsAvailable -= t;
        if (this._bitsAvailable > 0) {
          this._word <<= t;
        } else if (this._bytesAvailable > 0) {
          this._loadWord();
        }
        if ((t = e - t) > 0 && this._bitsAvailable) {
          return i << t | this.readBits(t);
        } else {
          return i;
        }
      }
    }, {
      key: "skipLZ",
      value: function () {
        var e;
        for (e = 0; e < this._bitsAvailable; ++e) {
          if ((this._word & -2147483648 >>> e) != 0) {
            this._word <<= e;
            this._bitsAvailable -= e;
            return e;
          }
        }
        this._loadWord();
        return e + this.skipLZ();
      }
    }, {
      key: "skipUEG",
      value: function () {
        this.skipBits(1 + this.skipLZ());
      }
    }, {
      key: "readUEG",
      value: function () {
        var e = this.skipLZ();
        return this.readBits(e + 1) - 1;
      }
    }, {
      key: "readEG",
      value: function () {
        var e = this.readUEG();
        if (e & 1) {
          return 1 + e >>> 1;
        } else {
          return (e >>> 1) * -1;
        }
      }
    }, {
      key: "readBool",
      value: function () {
        return this.readBits(1) === 1;
      }
    }, {
      key: "readUByte",
      value: function () {
        return this.readBits(8);
      }
    }, {
      key: "skipScalingList",
      value: function (e) {
        var t = 8;
        var i = 8;
        var r = 0;
        for (; r < e; r++) {
          if (i !== 0) {
            i = (t + this.readEG() + 256) % 256;
          }
          t = i === 0 ? t : i;
        }
      }
    }]);
    return e;
  }();
  var X = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
    }
    babelClassHelpers.createClass(e, null, [{
      key: "parseAVCDecoderConfigurationRecord",
      value: function (t) {
        if (!(t.length < 7)) {
          var i;
          var r;
          var n;
          var s = (t[4] & 3) + 1;
          var a = [];
          var o = [];
          var u = 6;
          var c = t[5] & 31;
          var l = 0;
          for (; l < c; l++) {
            r = t[u] << 8 | t[u + 1];
            u += 2;
            if (r) {
              var h = t.subarray(u, u + r);
              u += r;
              a.push(h);
              i ||= e.parseSPS(W.removeEPB(h));
            }
          }
          var d = t[u];
          u++;
          for (var f = 0; f < d; f++) {
            n = t[u] << 8 | t[u + 1];
            u += 2;
            if (n) {
              o.push(t.subarray(u, u + n));
              u += n;
            }
          }
          return {
            sps: i,
            spsArr: a,
            ppsArr: o,
            nalUnitSize: s
          };
        }
      }
    }, {
      key: "parseSPS",
      value: function (e) {
        var t;
        var i;
        var r;
        var n;
        var s;
        var a = new z(e);
        a.readUByte();
        var o = a.readUByte();
        var u = a.readUByte();
        var c = a.readUByte();
        a.skipUEG();
        var l = 420;
        if (o === 100 || o === 110 || o === 122 || o === 244 || o === 44 || o === 83 || o === 86 || o === 118 || o === 128 || o === 138 || o === 144) {
          var h = a.readUEG();
          if (h <= 3) {
            l = [0, 420, 422, 444][h];
          }
          if (h === 3) {
            a.skipBits(1);
          }
          a.skipUEG();
          a.skipUEG();
          a.skipBits(1);
          if (a.readBool()) {
            var d = h !== 3 ? 8 : 12;
            var f = 0;
            for (; f < d; f++) {
              if (a.readBool()) {
                if (f < 6) {
                  a.skipScalingList(16);
                } else {
                  a.skipScalingList(64);
                }
              }
            }
          }
        }
        a.skipUEG();
        var p = a.readUEG();
        if (p === 0) {
          a.readUEG();
        } else if (p === 1) {
          a.skipBits(1);
          a.skipUEG();
          a.skipUEG();
          var v = a.readUEG();
          var m = 0;
          for (; m < v; m++) {
            a.skipUEG();
          }
        }
        a.skipUEG();
        a.skipBits(1);
        var g = a.readUEG();
        var _ = a.readUEG();
        var y = a.readBits(1);
        if (y === 0) {
          a.skipBits(1);
        }
        a.skipBits(1);
        var b = 0;
        var k = 0;
        var S = 0;
        var T = 0;
        if (a.readBool()) {
          b = a.readUEG();
          k = a.readUEG();
          S = a.readUEG();
          T = a.readUEG();
        }
        if (a.readBool()) {
          if (a.readBool()) {
            switch (a.readUByte()) {
              case 1:
                t = [1, 1];
                break;
              case 2:
                t = [12, 11];
                break;
              case 3:
                t = [10, 11];
                break;
              case 4:
                t = [16, 11];
                break;
              case 5:
                t = [40, 33];
                break;
              case 6:
                t = [24, 11];
                break;
              case 7:
                t = [20, 11];
                break;
              case 8:
                t = [32, 11];
                break;
              case 9:
                t = [80, 33];
                break;
              case 10:
                t = [18, 11];
                break;
              case 11:
                t = [15, 11];
                break;
              case 12:
                t = [64, 33];
                break;
              case 13:
                t = [160, 99];
                break;
              case 14:
                t = [4, 3];
                break;
              case 15:
                t = [3, 2];
                break;
              case 16:
                t = [2, 1];
                break;
              case 255:
                t = [a.readUByte() << 8 | a.readUByte(), a.readUByte() << 8 | a.readUByte()];
            }
          }
          if (a.readBool()) {
            a.readBool();
          }
          if (a.readBool()) {
            a.readBits(4);
            if (a.readBool()) {
              a.readBits(24);
            }
          }
          if (a.readBool()) {
            a.readUEG();
            a.readUEG();
          }
          if (a.readBool()) {
            var x = a.readBits(32);
            var E = a.readBits(32);
            i = a.readBool();
            s = (r = E) / (n = x * 2);
          }
        }
        return {
          codec: binaryBufferUtils.getAvcCodec(e.subarray(1, 4)),
          profileIdc: o,
          profileCompatibility: u,
          levelIdc: c,
          chromaFormat: l,
          width: Math.ceil((g + 1) * 16 - (b + k) * 2),
          height: (2 - y) * (_ + 1) * 16 - (y ? 2 : 4) * (S + T),
          sarRatio: t,
          fpsNum: r,
          fpsDen: n,
          fps: s,
          fixedFrame: i
        };
      }
    }]);
    return e;
  }();
  var Z = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
    }
    babelClassHelpers.createClass(e, null, [{
      key: "parseHEVCDecoderConfigurationRecord",
      value: function (t) {
        var i;
        var r;
        var n;
        var s;
        var a;
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!(t.length < 23)) {
          o = o || {};
          var u = (t[21] & 3) + 1;
          var c = [];
          var l = [];
          var h = [];
          var d = 23;
          var f = t[22];
          var p = 0;
          for (; p < f; p++) {
            n = t[d] & 63;
            s = t[d + 1] << 8 | t[d + 2];
            d += 3;
            for (var v = 0; v < s; v++) {
              a = t[d] << 8 | t[d + 1];
              d += 2;
              if (a) {
                switch (n) {
                  case 32:
                    var m = t.subarray(d, d + a);
                    i ||= e.parseVPS(W.removeEPB(m), o);
                    h.push(m);
                    break;
                  case 33:
                    var g = t.subarray(d, d + a);
                    r ||= e.parseSPS(W.removeEPB(g), o);
                    c.push(g);
                    break;
                  case 34:
                    l.push(t.subarray(d, d + a));
                }
                d += a;
              }
            }
          }
          return {
            hvcC: o,
            sps: r,
            spsArr: c,
            ppsArr: l,
            vpsArr: h,
            nalUnitSize: u
          };
        }
      }
    }, {
      key: "parseVPS",
      value: function (t, i) {
        i = i || {};
        var r = new z(t);
        r.readUByte();
        r.readUByte();
        r.readBits(12);
        var n = r.readBits(3);
        i.numTemporalLayers = Math.max(i.numTemporalLayers || 0, n + 1);
        r.readBits(17);
        e._parseProfileTierLevel(r, n, i);
        return i;
      }
    }, {
      key: "parseSPS",
      value: function (t) {
        var i;
        var r;
        var n;
        var s;
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        a = a || {};
        var o = new z(t);
        o.readUByte();
        o.readUByte();
        o.readBits(4);
        var u = o.readBits(3);
        a.numTemporalLayers = Math.max(u + 1, a.numTemporalLayers || 0);
        a.temporalIdNested = o.readBits(1);
        e._parseProfileTierLevel(o, u, a);
        o.readUEG();
        var c = a.chromaFormatIdc = o.readUEG();
        var l = 420;
        if (c <= 3) {
          l = [0, 420, 422, 444][c];
        }
        var h = 0;
        if (c === 3) {
          h = o.readBits(1);
        }
        var d = o.readUEG();
        var f = o.readUEG();
        var p = o.readBits(1);
        if (p === 1) {
          i = o.readUEG();
          r = o.readUEG();
          n = o.readUEG();
          s = o.readUEG();
        }
        a.bitDepthLumaMinus8 = o.readUEG();
        a.bitDepthChromaMinus8 = o.readUEG();
        if (p === 1) {
          var v = (c === 1 || c === 2) && h === 0 ? 2 : 1;
          var m = c === 1 && h === 0 ? 2 : 1;
          d -= v * (r + i);
          f -= m * (s + n);
        }
        return {
          codec: "hev1.1.6.L93.B0",
          width: d,
          height: f,
          chromaFormat: l,
          hvcC: a
        };
      }
    }, {
      key: "_parseProfileTierLevel",
      value: function (e, t, i) {
        var r = i.generalTierFlag || 0;
        i.generalProfileSpace = e.readBits(2);
        i.generalTierFlag = Math.max(e.readBits(1), r);
        i.generalProfileIdc = Math.max(e.readBits(5), i.generalProfileIdc || 0);
        i.generalProfileCompatibilityFlags = e.readBits(32);
        i.generalConstraintIndicatorFlags = [e.readBits(8), e.readBits(8), e.readBits(8), e.readBits(8), e.readBits(8), e.readBits(8)];
        var n = e.readBits(8);
        if (r < i.generalTierFlag) {
          i.generalLevelIdc = n;
        } else {
          i.generalLevelIdc = Math.max(n, i.generalLevelIdc || 0);
        }
        var s = [];
        var a = [];
        if (t > e.bitsAvailable) {
          throw Error(`maxSubLayersMinus inavlid size ${t}`);
        }
        for (var o = 0; o < t; o++) {
          s[o] = e.readBits(1);
          a[o] = e.readBits(1);
        }
        if (t > 0) {
          e.readBits((8 - t) * 2);
        }
        for (var u = 0; u < t; u++) {
          if (s[u] !== 0) {
            e.readBits(2);
            e.readBits(1);
            e.readBits(5);
            e.readBits(16);
            e.readBits(16);
            e.readBits(4);
            e.readBits(16);
            e.readBits(16);
            e.readBits(12);
          }
          if (a[u] !== 0) {
            e.readBits(8);
          }
        }
      }
    }]);
    return e;
  }();
  var videoTrackConfig = require("video-track-config") /*id: 101487*/;
  var audioTrackContext = require("audio-track-context") /*id: 536430*/;
  var videoFrameClass = require("video-frame-class") /*id: 638125*/;
  var avMediaDataClasses = require("av-media-data-classes") /*id: 564754*/;
  var ee = new M("TsDemuxer");
  var et = function () {
    function e(t, i, r) {
      babelClassHelpers.classCallCheck(this, e);
      babelClassHelpers.defineProperty(this, "_pmtId", -1);
      babelClassHelpers.defineProperty(this, "_remainingPacketData", null);
      babelClassHelpers.defineProperty(this, "_videoPesData", []);
      babelClassHelpers.defineProperty(this, "_audioPesData", []);
      babelClassHelpers.defineProperty(this, "_gopId", 0);
      this.videoTrack = t || new videoTrackConfig.VideoTrackConfig();
      this.audioTrack = i || new audioTrackContext.AudioTrack();
      this.metadataTrack = r || new avMediaDataClasses.MediaMetadata();
      this._fixer = new K(this.videoTrack, this.audioTrack, this.metadataTrack);
    }
    babelClassHelpers.createClass(e, [{
      key: "demux",
      value: function (e, t = false) {
        var i = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        var r = this.audioTrack;
        var n = this.videoTrack;
        var s = this.metadataTrack;
        if (t) {
          this._pmtId = -1;
          n.reset();
          r.reset();
          s.reset();
        }
        if (!i || t) {
          this._remainingPacketData = null;
          this._videoPesData = [];
          this._audioPesData = [];
        } else {
          n.samples = [];
          r.samples = [];
          s.seiSamples = [];
          n.warnings = [];
          r.warnings = [];
          if (this._remainingPacketData) {
            e = binaryBufferUtils.concatBuffers(this._remainingPacketData, e);
            this._remainingPacketData = null;
          }
        }
        var a = e.length;
        var o = a % 188;
        if (o) {
          this._remainingPacketData = e.subarray(a - o);
          a -= o;
        }
        var u = n.pid;
        var c = r.pid;
        var l = 0;
        for (; l < a; l += 188) {
          if (e[l] !== 71) {
            throw Error("TS packet did not start with 0x47");
          }
          var h = !!(e[l + 1] & 64);
          var d = ((e[l + 1] & 31) << 8) + e[l + 2];
          var f = (e[l + 3] & 48) >> 4;
          var p = undefined;
          if (f > 1) {
            if ((p = l + 5 + e[l + 4]) === l + 188) {
              continue;
            }
          } else {
            p = l + 4;
          }
          switch (d) {
            case 0:
              if (h) {
                p += e[p] + 1;
              }
              this._pmtId = (e[p + 10] & 31) << 8 | e[p + 11];
              break;
            case this._pmtId:
              if (h) {
                p += e[p] + 1;
              }
              var v = p + 3 + ((e[p + 1] & 15) << 8 | e[p + 2]) - 4;
              var m = (e[p + 10] & 15) << 8 | e[p + 11];
              for (p += 12 + m; p < v;) {
                var g = (e[p + 1] & 31) << 8 | e[p + 2];
                switch (e[p]) {
                  case 15:
                    r.pid = c = g;
                    break;
                  case 27:
                    if (u !== -1) {
                      break;
                    }
                    n.codecType = avMediaConstants.videoCodecs.AVC;
                    n.pid = u = g;
                    break;
                  case 36:
                    if (u !== -1) {
                      break;
                    }
                    n.codecType = avMediaConstants.videoCodecs.HEVC;
                    n.pid = u = g;
                    break;
                  default:
                    ee.warn(`Unsupported stream. type: ${e[p]}, pid: ${g}`);
                }
                p += ((e[p + 3] & 15) << 8 | e[p + 4]) + 5;
              }
              break;
            case u:
              if (h && this._videoPesData.length) {
                this._parseVideoData();
              }
              this._videoPesData.push(e.subarray(p, l + 188));
              break;
            case c:
              if (h && this._audioPesData.length) {
                this._parseAudioData();
              }
              this._audioPesData.push(e.subarray(p, l + 188));
              break;
            case 17:
            case 8191:
              break;
            default:
              ee.warn(`Unknown pid: ${d}`);
          }
        }
        this._parseVideoData();
        this._parseAudioData();
        r.formatTimescale = n.formatTimescale = n.timescale = s.timescale = 90000;
        r.timescale = r.sampleRate || 0;
        return {
          videoTrack: n,
          audioTrack: r,
          metadataTrack: s
        };
      }
    }, {
      key: "fix",
      value: function (e, t, i) {
        this._fixer.fix(e, t, i);
        return {
          videoTrack: this.videoTrack,
          audioTrack: this.audioTrack,
          metadataTrack: this.metadataTrack
        };
      }
    }, {
      key: "demuxAndFix",
      value: function (e, t, i, r) {
        this.demux(e, t, i);
        return this.fix(r, t, i);
      }
    }, {
      key: "_parseVideoData",
      value: function () {
        if (this._videoPesData.length) {
          var t = e._parsePES(binaryBufferUtils.concatBuffers.apply(undefined, babelClassHelpers.toConsumableArray(this._videoPesData)));
          if (!t) {
            ee.warn("Cannot parse video pes", this._videoPesData);
            return;
          }
          var i = W.parseAnnexB(t.data);
          if (i) {
            this._createVideoSample(i, t.pts, t.dts);
          } else {
            ee.warn("Cannot parse avc units", t);
          }
          this._videoPesData = [];
        }
      }
    }, {
      key: "_createVideoSample",
      value: function (e, t, i) {
        var r = this;
        if (e.length) {
          var n = this.videoTrack;
          var s = n.codecType === avMediaConstants.videoCodecs.HEVC;
          var a = new videoFrameClass.VideoFrame(t, i);
          e.forEach(function (e) {
            var i = s ? e[0] >>> 1 & 63 : e[0] & 31;
            switch (i) {
              case 5:
              case 16:
              case 17:
              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 23:
                if (!s && i !== 5 || s && i === 5) {
                  break;
                }
                a.setToKeyframe();
                r._gopId++;
                break;
              case 6:
              case 39:
              case 40:
                if (!s && i !== 6 || s && i === 6) {
                  break;
                }
                r.metadataTrack.seiSamples.push(new avMediaDataClasses.MediaDataModel(W.parseSEI(W.removeEPB(e), s), t));
                return;
              case 32:
                if (!s) {
                  break;
                }
                if (!n.vps.length) {
                  var o = Z.parseVPS(W.removeEPB(e), n.hvcC);
                  n.hvcC = n.hvcC || o;
                  n.vps = [e];
                }
                break;
              case 7:
              case 33:
                if (!s && i !== 7 || s && i === 7) {
                  break;
                }
                if (!n.sps.length) {
                  var u = W.removeEPB(e);
                  var c = s ? Z.parseSPS(u, n.hvcC) : X.parseSPS(u);
                  n.sps = [e];
                  n.hvcC = n.hvcC || c.hvcC;
                  n.codec = c.codec;
                  n.width = c.width;
                  n.height = c.height;
                  n.sarRatio = c.sarRatio;
                  n.fpsNum = c.fpsNum;
                  n.fpsDen = c.fpsDen;
                }
                break;
              case 8:
              case 34:
                if (!s && i !== 8 || s && i === 8) {
                  break;
                }
                if (!n.pps.length) {
                  n.pps = [e];
                }
                break;
              case 9:
              case 35:
                break;
              case 38:
                if (s) {
                  var l = false;
                  var h = 2;
                  for (; h < e.byteLength; h++) {
                    if (e[h] === 255) {
                      l = true;
                      break;
                    }
                  }
                  if (!l) {
                    return;
                  }
                }
            }
            a.units.push(e);
          });
          a.gopId = this._gopId;
          this._pushVideoSample(n, a);
        }
      }
    }, {
      key: "_pushVideoSample",
      value: function (e, t) {
        if (t.units.length) {
          if (t.pts === null || t.pts === undefined) {
            ee.warn("Video sample no pts", t);
            var i = e.samples[e.samples.length - 1];
            if (i) {
              t.pts = i.pts;
              t.dts = i.dts;
            } else {
              ee.warn("Drop video sample", t);
            }
          } else {
            e.samples.push(t);
          }
        }
      }
    }, {
      key: "_parseAudioData",
      value: function () {
        if (this._audioPesData.length) {
          var t = e._parsePES(binaryBufferUtils.concatBuffers.apply(undefined, babelClassHelpers.toConsumableArray(this._audioPesData)));
          if (!t) {
            ee.warn("Cannot parse audio pes", this._audioPesData);
            return;
          }
          this._parseAacData(t);
          this._audioPesData = [];
        }
      }
    }, {
      key: "_parseAacData",
      value: function (e) {
        var t;
        var i = this.audioTrack;
        var r = e.pts;
        if (r == null) {
          ee.warn("AAC pes not pts", i);
          if (!i.samples.length || !i.sampleRate) {
            return;
          }
          r = i.samples[i.samples.length - 1].pts + aacAdtsParserUtil.AacAdtsParser.getFrameDuration(i.sampleRate);
        }
        var n = aacAdtsParserUtil.AacAdtsParser.parseADTS(e.data, r);
        if (n) {
          i.codec = n.codec;
          i.channelCount = n.channelCount;
          i.sampleRate = n.sampleRate;
          i.objectType = n.objectType;
          i.sampleRateIndex = n.samplingFrequencyIndex;
          i.config = n.config;
          (t = i.samples).push.apply(t, babelClassHelpers.toConsumableArray(n.frames.map(function (e) {
            return new mediaSampleClass.MediaSample(e.pts, e.data);
          })));
          if (n.skip) {
            ee.warn(`Skip aac adts ${n.skip} bits`);
          }
          if (n.remaining) {
            ee.warn(`Remaining aac adts ${n.remaining} bits`);
          }
        } else {
          ee.warn("Cannot parse aac adts", e);
        }
      }
    }], [{
      key: "probe",
      value: function (e) {
        return !!e.length && e[0] === 71 && e[188] === 71 && e[376] === 71;
      }
    }, {
      key: "_parsePES",
      value: function (e) {
        var t;
        var i;
        var r = e[8];
        if (r != null && !(e.length < r + 9) && (e[0] << 16 | e[1] << 8 | e[2]) == 1) {
          var n = (e[4] << 8) + e[5];
          if (!n || !(n > e.length - 6)) {
            var s = e[7];
            if (s & 192) {
              t = (e[9] & 14) * 536870912 + (e[10] & 255) * 4194304 + (e[11] & 254) * 16384 + (e[12] & 255) * 128 + (e[13] & 254) / 2;
              if (s & 64) {
                if (t - (i = (e[14] & 14) * 536870912 + (e[15] & 255) * 4194304 + (e[16] & 254) * 16384 + (e[17] & 255) * 128 + (e[18] & 254) / 2) > 5400000) {
                  t = i;
                }
              } else {
                i = t;
              }
            }
            return {
              data: e.subarray(9 + r),
              pts: t,
              dts: i
            };
          }
        }
      }
    }]);
    return e;
  }();
  var mp4BoxParserUtil = require("mp4-box-parser-util") /*id: 413511*/;
  var er = function () {
    var e;
    var t;
    function i() {
      c(this, i);
      var e = window.crypto || window.msCrypto;
      this.subtle = e && (e.subtle || e.webkitSubtle);
      this.externalDecryptor = null;
    }
    h(i, [{
      key: "destroy",
      value: function () {
        var e;
        if ((e = this.externalDecryptor) !== null && e !== undefined && e.destroy) {
          this.externalDecryptor.destroy();
        }
      }
    }, {
      key: "decrypt",
      value: function (e, t) {
        if (e || t) {
          var i = [];
          if (e) {
            i[0] = this._decryptSegment(e);
          }
          if (t) {
            i[1] = this._decryptSegment(t);
          }
          return Promise.all(i);
        }
      }
    }, {
      key: "_decryptSegment",
      value: (e = u(s().mark(function e(t) {
        var i;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = t.data;
                if (!t.key) {
                  e.next = 5;
                  break;
                }
                e.next = 4;
                return this._decryptData(t.data, t.key, t.keyIv);
              case 4:
                i = e.sent;
              case 5:
                if (t.map) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", i);
              case 7:
                return e.abrupt("return", mediaPlaybackUtils.concatBuffers(t.map, i));
              case 8:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (t) {
        return e.apply(this, arguments);
      })
    }, {
      key: "_decryptData",
      value: (t = u(s().mark(function e(t, i, r) {
        var n;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!this.externalDecryptor) {
                  e.next = 6;
                  break;
                }
                e.next = 3;
                return this.externalDecryptor.decrypt(t, i, r);
              case 3:
                return e.abrupt("return", e.sent);
              case 6:
                if (this.subtle) {
                  e.next = 8;
                  break;
                }
                throw Error("crypto is not defined");
              case 8:
                e.next = 10;
                return this.subtle.importKey("raw", i, {
                  name: "AES-CBC"
                }, false, ["encrypt", "decrypt"]);
              case 10:
                n = e.sent;
                e.t0 = Uint8Array;
                e.next = 14;
                return this.subtle.decrypt({
                  name: "AES-CBC",
                  iv: r
                }, n, t);
              case 14:
                e.t1 = e.sent;
                return e.abrupt("return", new e.t0(e.t1));
              case 16:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e, i, r) {
        return t.apply(this, arguments);
      })
    }]);
    return i;
  }();
  var en = function () {
    function e(t, i, r) {
      babelClassHelpers.classCallCheck(this, e);
      this.videoTrack = t || new videoTrackConfig.VideoTrackConfig();
      this.audioTrack = i || new audioTrackContext.AudioTrack();
      this.metadataTrack = r || new avMediaDataClasses.MediaMetadata();
    }
    babelClassHelpers.createClass(e, [{
      key: "demux",
      value: function (e, t) {
        var i = this.videoTrack;
        var r = this.audioTrack;
        var n = i.exist();
        var s = r.exist();
        i.samples = [];
        r.samples = [];
        if (t) {
          if (!s) {
            var a = mp4BoxParserUtil.Mp4BoxParser.findBox(t, ["moov"])[0];
            if (!a) {
              throw Error("cannot found moov box");
            }
            mp4BoxParserUtil.Mp4BoxParser.moovToTrack(mp4BoxParserUtil.Mp4BoxParser.moov(a), null, r);
          }
          var o = mp4BoxParserUtil.Mp4BoxParser.findBox(t, ["moof"])[0];
          if (o) {
            var u = mp4BoxParserUtil.Mp4BoxParser.moofToSamples(mp4BoxParserUtil.Mp4BoxParser.moof(o), null, r)[r.id];
            var c = r.baseMediaDecodeTime;
            if (u) {
              var l = o.start;
              u.map(function (e) {
                e.offset += l;
                var i = t.subarray(e.offset, e.offset + e.size);
                r.samples.push(new mediaSampleClass.MediaSample(e.dts + c, i, e.duration));
              });
            }
          }
        }
        if (e) {
          if (!n && !s) {
            var h = mp4BoxParserUtil.Mp4BoxParser.findBox(e, ["moov"])[0];
            if (!h) {
              throw Error("cannot found moov box");
            }
            mp4BoxParserUtil.Mp4BoxParser.moovToTrack(mp4BoxParserUtil.Mp4BoxParser.moov(h), i, r);
          }
          var d = mp4BoxParserUtil.Mp4BoxParser.findBox(e, ["moof"])[0];
          if (d) {
            var f;
            var p = mp4BoxParserUtil.Mp4BoxParser.moofToSamples(mp4BoxParserUtil.Mp4BoxParser.moof(d), i, r);
            var v = i.baseMediaDecodeTime;
            var m = r.baseMediaDecodeTime;
            var g = d.start;
            Object.keys(p).forEach(function (t) {
              if (i.id == t) {
                p[t].map(function (t) {
                  t.offset += g;
                  var r = new videoFrameClass.VideoFrame((t.pts || t.dts) + v, t.dts + v);
                  r.duration = t.duration;
                  r.gopId = t.gopId;
                  if (t.keyframe) {
                    r.setToKeyframe();
                  }
                  var n = e.subarray(t.offset, t.offset + t.size);
                  r.data = n;
                  var s = 0;
                  var a = n.length - 1;
                  while (s < a) {
                    f = binaryBufferUtils.readUint32(n, s);
                    s += 4;
                    r.units.push(n.subarray(s, s + f));
                    s += f;
                  }
                  i.samples.push(r);
                });
              } else if (r.id == t) {
                p[t].map(function (t) {
                  t.offset += g;
                  var i = e.subarray(t.offset, t.offset + t.size);
                  r.samples.push(new mediaSampleClass.MediaSample(t.dts + m, i, t.duration));
                });
              }
            });
          }
        }
        return {
          videoTrack: i,
          audioTrack: r,
          metadataTrack: this.metadataTrack
        };
      }
    }, {
      key: "reset",
      value: function () {
        this.videoTrack.reset();
        this.audioTrack.reset();
        this.metadataTrack.reset();
      }
    }], [{
      key: "probe",
      value: function (e) {
        return mp4BoxParserUtil.Mp4BoxParser.probe(e);
      }
    }]);
    return e;
  }();
  var fmp4Remuxer = require("fmp4-remuxer") /*id: 480914*/;
  var ea = n(n({}, mediaCoreEventKeys.mediaCoreEventKeys), {}, {
    STREAM_PARSED: "core.streamparsed",
    NO_AUDIO_TRACK: "core.noaudiotrack",
    SUBTITLE_SEGMENTS: "core.subtitlesegments",
    SUBTITLE_PLAYLIST: "core.subtitleplaylist",
    SEI_PAYLOAD_TIME: "core.seipayloadtime",
    APPEND_COST: "core.appendcost"
  });
  var eo = new customLoggerClass.Logger("Transmuxer");
  var eu = function () {
    function e(t, i, r) {
      c(this, e);
      d(this, "_initSegmentId", "");
      this.hls = t;
      this._demuxer = i ? new en() : new et();
      this._isMP4 = i;
      if (r) {
        this._remuxer = new fmp4Remuxer.Fmp4Remuxer(this._demuxer.videoTrack, this._demuxer.audioTrack);
      }
    }
    h(e, [{
      key: "transmux",
      value: function (e, t, i, r, n, s) {
        var a = this._demuxer;
        try {
          if (this._isMP4) {
            a.demux(e, t);
          } else {
            a.demuxAndFix(mediaPlaybackUtils.concatBuffers(e, t), i, r, n);
          }
        } catch (e) {
          throw new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.DEMUX, mediaErrorHandler.ErrorTypes.SUB_TYPES.HLS, e);
        }
        var o = a.videoTrack;
        var u = a.audioTrack;
        var c = a.metadataTrack;
        var l = `${o.codec}/${o.width}/${o.height}/${u.codec}/${u.config}`;
        if (l !== this._initSegmentId) {
          this._initSegmentId = l;
          s = true;
        }
        this._fireEvents(o, u, c, i || s);
        this.hls.emit(ea.DEMUXED_TRACK, {
          videoTrack: o,
          audioTrack: u
        });
        if (!this._remuxer) {
          return [o, u];
        }
        try {
          var h = this._remuxer.remux(s);
          var d = h.videoInitSegment;
          var f = h.videoSegment;
          var p = h.audioInitSegment;
          var v = h.audioSegment;
          var m = mediaPlaybackUtils.concatBuffers(d, f);
          var g = mediaPlaybackUtils.concatBuffers(p, v);
          return [m ? {
            codec: o.codec,
            data: m
          } : undefined, g ? {
            codec: u.codec,
            data: g
          } : undefined];
        } catch (e) {
          throw new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.REMUX, mediaErrorHandler.ErrorTypes.SUB_TYPES.FMP4, e);
        }
      }
    }, {
      key: "_fireEvents",
      value: function (e, t, i, r) {
        var s = this;
        eo.debug(e.samples, t.samples);
        if (r) {
          if (e.exist()) {
            this.hls.emit(ea.METADATA_PARSED, {
              type: "video",
              track: e,
              meta: {
                codec: e.codec,
                timescale: e.timescale,
                width: e.width,
                height: e.height,
                sarRatio: e.sarRatio,
                baseDts: e.baseDts
              }
            });
          }
          if (t.exist()) {
            this.hls.emit(ea.METADATA_PARSED, {
              type: "audio",
              track: t,
              meta: {
                codec: t.codec,
                channelCount: t.channelCount,
                sampleRate: t.sampleRate,
                timescale: t.timescale,
                baseDts: t.baseDts
              }
            });
          }
          eo.debug("discontinuity", e, t);
        }
        e.warnings.forEach(function (e) {
          var t;
          switch (e.type) {
            case avMediaConstants.avMetrics.LARGE_AV_SHIFT:
              t = ea.LARGE_AV_FIRST_FRAME_GAP_DETECT;
              break;
            case avMediaConstants.avMetrics.LARGE_VIDEO_GAP:
              t = ea.LARGE_VIDEO_DTS_GAP_DETECT;
              break;
            case avMediaConstants.avMetrics.LARGE_VIDEO_GAP_BETWEEN_CHUNK:
              t = ea.MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT;
          }
          if (t) {
            s.hls.emit(ea.STREAM_EXCEPTION, n(n({}, e), {}, {
              type: t
            }));
          }
          eo.warn("video exception", e);
        });
        t.warnings.forEach(function (e) {
          var t;
          switch (e.type) {
            case avMediaConstants.avMetrics.LARGE_AUDIO_GAP:
              t = ea.LARGE_AUDIO_DTS_GAP_DETECT;
              break;
            case avMediaConstants.avMetrics.AUDIO_FILLED:
              t = ea.AUDIO_GAP_DETECT;
              break;
            case avMediaConstants.avMetrics.AUDIO_DROPPED:
              t = ea.AUDIO_OVERLAP_DETECT;
          }
          if (t) {
            s.hls.emit(ea.STREAM_EXCEPTION, n(n({}, e), {}, {
              type: t
            }));
          }
          eo.warn("audio exception", e);
        });
        e.samples.forEach(function (e) {
          if (e.keyframe) {
            s.hls.emit(ea.KEYFRAME, {
              pts: e.pts
            });
          }
        });
        i.seiSamples.forEach(function (e) {
          s.hls.emit(ea.SEI, n(n({}, e), {}, {
            originPts: e.originPts / 90,
            sei: {
              code: e.data.type,
              content: e.data.payload,
              dts: e.pts
            }
          }));
        });
      }
    }]);
    return e;
  }();
  var ec = new customLoggerClass.Logger("BufferService");
  var el = function () {
    var e;
    var t;
    var i;
    var r;
    var n;
    var a;
    var o;
    var l;
    var f;
    function p(e) {
      c(this, p);
      d(this, "_decryptor", new er());
      d(this, "_transmuxer", null);
      d(this, "_mse", null);
      d(this, "_softVideo", null);
      d(this, "_sourceCreated", false);
      d(this, "_needInitSegment", true);
      d(this, "_directAppend", false);
      this.hls = e;
      if (e.config.softDecode) {
        this._softVideo = e.media;
      } else {
        this._mse = new mseMediaSourceManager.MseManager(null, {
          preferMMS: e.config.preferMMS
        });
        if (e.config.url) {
          this._mse.bindMedia(e.media);
        }
      }
      if (e.config.decryptor) {
        this._decryptor.externalDecryptor = e.config.decryptor;
      }
    }
    h(p, [{
      key: "baseDts",
      get: function () {
        var e;
        var t;
        if ((e = this._transmuxer) === null || e === undefined) {
          return undefined;
        } else if ((t = e._demuxer) === null || t === undefined) {
          return undefined;
        } else {
          return t._fixer?._baseDts;
        }
      }
    }, {
      key: "nbSb",
      get: function () {
        var e;
        if ((e = this._mse) !== null && e !== undefined && e._sourceBuffer) {
          return Object.keys(this._mse._sourceBuffer).length;
        } else {
          return 0;
        }
      }
    }, {
      key: "msIsOpend",
      get: function () {
        return this._mse?.isOpened;
      }
    }, {
      key: "msStreaming",
      get: function () {
        return this._mse?.streaming;
      }
    }, {
      key: "updateDuration",
      value: (e = u(s().mark(function e(t) {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                ec.debug("update duration", t);
                if (!this._mse) {
                  e.next = 9;
                  break;
                }
                if (this._mse.isOpened) {
                  e.next = 5;
                  break;
                }
                e.next = 5;
                return this._mse.open();
              case 5:
                e.next = 7;
                return this._mse.updateDuration(t);
              case 7:
                e.next = 10;
                break;
              case 9:
                if (this._softVideo) {
                  this._softVideo.duration = t;
                }
              case 10:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (t) {
        return e.apply(this, arguments);
      })
    }, {
      key: "createSource",
      value: function (e, t, i, r) {
        if (!this._sourceCreated) {
          var n = e || t;
          if (n) {
            if (et.probe(n)) {
              this._transmuxer ||= new eu(this.hls, false, !this._softVideo);
            } else if (mp4BoxParserUtil.Mp4BoxParser.probe(n)) {
              if (this._softVideo) {
                this._transmuxer ||= new eu(this.hls, true);
              } else {
                this._directAppend = true;
                var s = false;
                if (e && !i) {
                  mp4BoxParserUtil.Mp4BoxParser.findBox(e, ["moov", "trak"]).forEach(function (e) {
                    var t = mp4BoxParserUtil.Mp4BoxParser.findBox(e.data, ["trak", "mdia", "minf", "stbl", "stsd"])[0];
                    if (t) {
                      var a = mp4BoxParserUtil.Mp4BoxParser.stsd(t).entries[0];
                      if (a) {
                        if (a.hvcC) {
                          i = a.hvcC.codec || "hev1.1.6.L93.B0";
                        } else if (a.avcC) {
                          i = a.avcC.codec;
                        } else if (a.sampleRate || a.esds) {
                          r = a.esds?.codec || "mp4a.40.2";
                          s = true;
                        }
                      }
                    }
                  });
                }
                if (t && !r) {
                  mp4BoxParserUtil.Mp4BoxParser.findBox(t, ["moov", "trak", "mdia", "minf", "stbl", "stsd"]).forEach(function (e) {
                    var t = mp4BoxParserUtil.Mp4BoxParser.stsd(e).entries[0];
                    if (t && t.esds) {
                      r = t.esds.codec;
                    }
                  });
                }
                if (e && !i) {
                  i = "avc1.42e01e";
                }
                if (t && !r) {
                  r = "mp4a.40.2";
                }
                if (s) {
                  i += `, ${r}`;
                  r = "";
                }
                this._createMseSource(i, r);
              }
            } else {
              throw new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.OTHER, null, null, null, "unsupported stream");
            }
            if (this._softVideo) {
              this._sourceCreated = true;
            }
          }
        }
      }
    }, {
      key: "appendBuffer",
      value: (t = u(s().mark(function e(t, i, r, n, a, o, u) {
        var c;
        var l;
        var h;
        var d;
        var f;
        var p;
        var v;
        var m;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (r != null && !!r.length || n != null && !!n.length) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (!this._directAppend) {
                  e.next = 7;
                  break;
                }
                c = [];
                if (r) {
                  c.push(this._mse.append(mseMediaSourceManager.MseManager.VIDEO, r));
                }
                if (n) {
                  c.push(this._mse.append(mseMediaSourceManager.MseManager.AUDIO, n));
                }
                return e.abrupt("return", Promise.all(c));
              case 7:
                l = this._needInitSegment || a;
                d = (h = _(this._transmuxer.transmux(r, n, a, o, u, this._needInitSegment || a), 2))[0];
                f = h[1];
                if (n && i) {
                  if (i != null) {
                    i.setTrackExist(false, true);
                  }
                }
                if (n && t) {
                  if (t != null) {
                    t.setTrackExist(true, false);
                  }
                }
                if (!i && t != null) {
                  t.setTrackExist(!!d, !!f);
                }
                if (d && !f) {
                  this.hls.emit(ea.NO_AUDIO_TRACK);
                }
                if (!this._softVideo) {
                  e.next = 18;
                  break;
                }
                this._softVideo.appendBuffer(d, f);
                this._needInitSegment = false;
                e.next = 28;
                break;
              case 18:
                if (!this._mse) {
                  e.next = 28;
                  break;
                }
                if (p = !this._sourceCreated) {
                  this._createMseSource(d == null ? undefined : d.codec, f == null ? undefined : f.codec);
                }
                this._needInitSegment = false;
                v = this._mse;
                m = [];
                if (l && !p) {
                  this._handleCodecChange(d, f);
                }
                if (d) {
                  m.push(v.append(mseMediaSourceManager.MseManager.VIDEO, d.data));
                }
                if (f) {
                  m.push(v.append(mseMediaSourceManager.MseManager.AUDIO, f.data));
                }
                return e.abrupt("return", Promise.all(m));
              case 28:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e, i, r, n, s, a, o) {
        return t.apply(this, arguments);
      })
    }, {
      key: "removeBuffer",
      value: (i = u(s().mark(function e() {
        var t;
        var i;
        var r;
        var n = this;
        var a = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                t = a.length > 0 && a[0] !== undefined ? a[0] : 0;
                i = a.length > 1 && a[1] !== undefined ? a[1] : Infinity;
                r = this.hls.media;
                if (!!this._mse && !!r && !(t < 0) && !(i < t) && !(t >= this._mse.duration)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return");
              case 5:
                return e.abrupt("return", this._mse.clearBuffer(t, i).then(function () {
                  return n.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.REMOVE_BUFFER, {
                    start: t,
                    end: i,
                    removeEnd: i
                  });
                }));
              case 6:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return i.apply(this, arguments);
      })
    }, {
      key: "evictBuffer",
      value: (r = u(s().mark(function e(t) {
        var i;
        var r;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = this.hls.media;
                if (!!this._mse && !!i && !!t && !(t < 0)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return");
              case 3:
                if (!((r = i.currentTime - t) <= 0)) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return");
              case 7:
                if (!(bufferRangeUtil.BufferRangeUtil.start(bufferRangeUtil.BufferRangeUtil.get(i)) + 1 >= r)) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return");
              case 10:
                return e.abrupt("return", this.removeBuffer(0, r));
              case 11:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e) {
        return r.apply(this, arguments);
      })
    }, {
      key: "clearAllBuffer",
      value: (n = u(s().mark(function e() {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!this._mse) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", this._mse.clearAllBuffer());
              case 2:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return n.apply(this, arguments);
      })
    }, {
      key: "decryptBuffer",
      value: function (e, t) {
        return this._decryptor.decrypt(e, t);
      }
    }, {
      key: "reset",
      value: (a = u(s().mark(function e() {
        var t;
        var i = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                t = i.length > 0 && i[0] !== undefined && i[0];
                if (!this._mse || !!t) {
                  e.next = 8;
                  break;
                }
                this._transmuxer = null;
                this._sourceCreated = false;
                e.next = 6;
                return this._mse.unbindMedia();
              case 6:
                e.next = 8;
                return this._mse.bindMedia(this.hls.media);
              case 8:
                this._needInitSegment = true;
                this._directAppend = false;
              case 10:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return a.apply(this, arguments);
      })
    }, {
      key: "endOfStream",
      value: (o = u(s().mark(function e() {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!this._mse || !this._sourceCreated) {
                  e.next = 5;
                  break;
                }
                e.next = 4;
                return this._mse.endOfStream();
              case 4:
                this.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.BUFFEREOS);
              case 5:
                if (this._softVideo) {
                  this._softVideo.endOfStream();
                }
              case 6:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return o.apply(this, arguments);
      })
    }, {
      key: "setLiveSeekableRange",
      value: (l = u(s().mark(function e(t, i) {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (this._mse) {
                  this._mse.setLiveSeekableRange(t, i);
                }
              case 1:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e, t) {
        return l.apply(this, arguments);
      })
    }, {
      key: "destroy",
      value: (f = u(s().mark(function e() {
        var t;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if ((t = this._decryptor) !== null && t !== undefined) {
                  t.destroy();
                }
                if (!this._mse) {
                  e.next = 4;
                  break;
                }
                e.next = 4;
                return this._mse.unbindMedia();
              case 4:
                this._decryptor = null;
                this._mse = null;
                this._softVideo = null;
              case 7:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return f.apply(this, arguments);
      })
    }, {
      key: "_createMseSource",
      value: function (e, t) {
        ec.debug(`create mse source, videoCodec=${e}, audioCodec=${t}`);
        var i = this._mse;
        if (i) {
          if (e) {
            i.createSource(mseMediaSourceManager.MseManager.VIDEO, `video/mp4;codecs=${e}`);
            this._sourceCreated = true;
          }
          if (t) {
            i.createSource(mseMediaSourceManager.MseManager.AUDIO, `audio/mp4;codecs=${t}`);
            this._sourceCreated = true;
          }
          this.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.SOURCEBUFFER_CREATED);
        }
      }
    }, {
      key: "_handleCodecChange",
      value: function (e, t) {
        var i = this._mse;
        [{
          type: mseMediaSourceManager.MseManager.VIDEO,
          codecs: e == null ? undefined : e.codec
        }, {
          type: mseMediaSourceManager.MseManager.AUDIO,
          codecs: t == null ? undefined : t.codec
        }].filter(function (e) {
          return !!e.codecs;
        }).forEach(function (e) {
          var t = e.type;
          var r = e.codecs;
          var n = i.getSourceBuffer(t);
          if (n && !RegExp(r.split(",")[0], "ig").test(n.mimeType)) {
            i.changeType(t, `${t}/mp4;codecs=${r}`);
          }
        });
      }
    }, {
      key: "seamlessSwitch",
      value: function () {
        this._needInitSegment = true;
      }
    }, {
      key: "isFull",
      value: function () {
        var e;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mseMediaSourceManager.MseManager.VIDEO;
        if ((e = this._mse) === null || e === undefined) {
          return undefined;
        } else {
          return e.isFull(t);
        }
      }
    }]);
    return p;
  }();
  var httpRequestLoader = require("http-request-loader") /*id: 371915*/;
  var ed = h(function e() {
    c(this, e);
    d(this, "version", 0);
    d(this, "streams", []);
    d(this, "isMaster", true);
  });
  var ef = h(function e() {
    c(this, e);
    d(this, "id", 0);
    d(this, "url", "");
    d(this, "default", false);
    d(this, "autoSelect", false);
    d(this, "forced", false);
    d(this, "group", "");
    d(this, "name", "");
    d(this, "lang", "");
    d(this, "segments", []);
    d(this, "endSN", 0);
  });
  var ep = function (e) {
    f(i, e);
    var t = g(i);
    function i() {
      var e;
      c(this, i);
      var r = arguments.length;
      var n = Array(r);
      var s = 0;
      for (; s < r; s++) {
        n[s] = arguments[s];
      }
      d(m(e = t.call.apply(t, [this].concat(n))), "mediaType", "AUDIO");
      d(m(e), "channels", 0);
      return e;
    }
    return h(i);
  }(ef);
  var ev = function (e) {
    f(i, e);
    var t = g(i);
    function i() {
      var e;
      c(this, i);
      var r = arguments.length;
      var n = Array(r);
      var s = 0;
      for (; s < r; s++) {
        n[s] = arguments[s];
      }
      d(m(e = t.call.apply(t, [this].concat(n))), "mediaType", "SUBTITLE");
      return e;
    }
    return h(i);
  }(ef);
  var em = h(function e() {
    c(this, e);
    d(this, "id", 0);
    d(this, "bitrate", 0);
    d(this, "width", 0);
    d(this, "height", 0);
    d(this, "name", "");
    d(this, "url", "");
    d(this, "audioCodec", "");
    d(this, "videoCodec", "");
    d(this, "textCodec", "");
    d(this, "audioGroup", "");
    d(this, "audioStreams", []);
    d(this, "subtitleStreams", []);
    d(this, "closedCaptionsStream", []);
  });
  var eg = h(function e() {
    c(this, e);
    d(this, "version", 0);
    d(this, "url", "");
    d(this, "type", "");
    d(this, "startCC", 0);
    d(this, "endCC", 0);
    d(this, "startSN", 0);
    d(this, "endSN", 0);
    d(this, "totalDuration", 0);
    d(this, "targetDuration", 0);
    d(this, "partTargetDuration", 0);
    d(this, "canSkipUntil", 0);
    d(this, "canSkipDateRanges", false);
    d(this, "skippedSegments", 0);
    d(this, "canBlockReload", false);
    d(this, "partHoldBack", 0);
    d(this, "live", true);
    d(this, "lowLatency", false);
    d(this, "endPartIndex", 0);
    d(this, "segments", []);
  });
  var e_ = function () {
    function e() {
      c(this, e);
      d(this, "sn", 0);
      d(this, "cc", 0);
      d(this, "url", "");
      d(this, "title", "");
      d(this, "start", 0);
      d(this, "duration", 0);
      d(this, "dataTime", "");
      d(this, "key", null);
      d(this, "byteRange", null);
      d(this, "isInitSegment", false);
      d(this, "initSegment", null);
      d(this, "isLast", false);
      d(this, "hasAudio", false);
      d(this, "hasVideo", false);
      d(this, "independent", false);
      d(this, "partIndex", 0);
    }
    h(e, [{
      key: "end",
      get: function () {
        return this.start + this.duration;
      }
    }, {
      key: "setTrackExist",
      value: function (e, t) {
        this.hasVideo = e;
        this.hasAudio = t;
      }
    }, {
      key: "setByteRange",
      value: function (e, t) {
        this.byteRange = [0];
        var i = e.split("@");
        if (i.length === 1 && t && t.byteRange) {
          this.byteRange[0] = t.byteRange[1] || 0;
          if (this.byteRange[0]) {
            this.byteRange[0] += 1;
          }
        } else {
          this.byteRange[0] = parseInt(i[1]);
        }
        this.byteRange[1] = this.byteRange[0] + parseInt(i[0]) - 1;
      }
    }]);
    return e;
  }();
  var ey = function () {
    function e(t) {
      c(this, e);
      d(this, "method", "");
      d(this, "url", "");
      d(this, "iv", null);
      d(this, "keyFormat", "");
      d(this, "keyFormatVersions", "");
      if (t instanceof e) {
        this.method = t.method;
        this.url = t.url;
        this.keyFormat = t.keyFormat;
        this.keyFormatVersions = t.keyFormatVersions;
        if (t.iv) {
          this.iv = new Uint8Array(t.iv);
        }
      }
    }
    h(e, [{
      key: "clone",
      value: function (t) {
        var i = new e(this);
        if (t != null) {
          i.setIVFromSN(t);
        }
        return i;
      }
    }, {
      key: "setIVFromSN",
      value: function (e) {
        if (!this.iv && this.method === "AES-128" && typeof e == "number" && this.url) {
          this.iv = new Uint8Array(16);
          for (var t = 12; t < 16; t++) {
            this.iv[t] = e >> (15 - t) * 8 & 255;
          }
        }
      }
    }, {
      key: "isSegmentEncrypted",
      value: function () {
        return this.method === "AES-128";
      }
    }, {
      key: "isValidKeySystem",
      value: function () {
        return !!(["org.w3.clearkey", "com.apple.streamingkeydelivery", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.microsoft.playready"].indexOf(this.keyFormat) > -1) && !!(["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) > -1);
      }
    }, {
      key: "isSupported",
      value: function () {
        return !!this.method && (!!this.isSegmentEncrypted() || !!this.isValidKeySystem());
      }
    }]);
    return e;
  }();
  var eb = /^#(EXT[^:]*)(?::(.*))?$/;
  var ek = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;
  var eS = /^(?:[a-zA-Z0-9+\-.]+:)?\/\//;
  var eT = /^((?:[a-zA-Z0-9+\-.]+:)?\/\/[^/?#]*)?([^?#]*\/)?/;
  function ex(e) {
    var t = e.match(eb);
    if (t && t[1]) {
      return [t[1].replace("EXT-X-", ""), t[2]];
    }
  }
  function eE(e) {
    var t = {};
    var i = ek.exec(e);
    while (i) {
      t[i[1]] = i[2] || i[3];
      i = ek.exec(e);
    }
    return t;
  }
  function ew(e, t) {
    if (!t || !e || eS.test(e)) {
      return e;
    }
    var i = eT.exec(t);
    if (i) {
      if (e[0] === "/") {
        return i[1] + e;
      } else {
        return i[1] + i[2] + e;
      }
    } else {
      return e;
    }
  }
  var eA = {
    audio: [/^mp4a/, /^vorbis$/, /^opus$/, /^flac$/, /^[ae]c-3$/],
    video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
    text: [/^vtt$/, /^wvtt/, /^stpp/]
  };
  function eL(e, t) {
    var i = eA[e];
    if (i && t && t.length) {
      for (var r = 0; r < i.length; r++) {
        for (var n = 0; n < t.length; n++) {
          if (i[r].test(t[n])) {
            return t[n];
          }
        }
      }
    }
  }
  var eD = function () {
    function e() {
      c(this, e);
    }
    h(e, null, [{
      key: "parse",
      value: function (t = "", i, r) {
        if (!t.includes("#EXTM3U")) {
          throw Error("Invalid m3u8 file");
        }
        var n = t.split(/[\r\n]/).map(function (e) {
          return e.trim();
        }).filter(Boolean);
        if (e.isMediaPlaylist(t)) {
          return function (e, t, i) {
            var r;
            var n = new eg();
            n.url = t;
            var s = new e_();
            var a = null;
            var o = null;
            var u = 0;
            var c = 0;
            var l = 0;
            var h = 0;
            var d = false;
            var f = 0;
            while ((r = e[h++]) && !d) {
              if (r[0] !== "#") {
                if (n.lowLatency) {
                  c++;
                  continue;
                }
                s.sn = c;
                s.cc = l;
                s.url = ew(r, t);
                if (o) {
                  s.key = o.clone(c);
                }
                if (a) {
                  s.initSegment = a;
                }
                n.segments.push(s);
                s = new e_();
                c++;
                continue;
              }
              var p = ex(r);
              if (p) {
                var v = _(p, 2);
                var m = v[0];
                var g = v[1];
                switch (m) {
                  case "VERSION":
                    n.version = parseInt(g);
                    break;
                  case "PLAYLIST-TYPE":
                    n.type = g == null ? undefined : g.toUpperCase();
                    break;
                  case "TARGETDURATION":
                    n.targetDuration = parseFloat(g);
                    break;
                  case "PART-INF":
                    if (i) {
                      n.lowLatency = true;
                    }
                    var y = eE(g);
                    if (y["PART-TARGET"]) {
                      n.partTargetDuration = parseFloat(y["PART-TARGET"]);
                    }
                    break;
                  case "SERVER-CONTROL":
                    var b = eE(g);
                    n.canBlockReload = b["CAN-BLOCK-RELOAD"] === "YES";
                    n.partHoldBack = parseFloat(b["PART-HOLD-BACK"] || 0);
                    n.canSkipUntil = parseFloat(b["CAN-SKIP-UNTIL"] || 0);
                    n.canSkipDateRanges = b["CAN-SKIP-DATERANGES"] === "YES";
                    break;
                  case "ENDLIST":
                    var k = n.segments[n.segments.length - 1];
                    if (k) {
                      k.isLast = true;
                    }
                    n.live = false;
                    d = true;
                    break;
                  case "MEDIA-SEQUENCE":
                    c = n.startSN = parseInt(g);
                    break;
                  case "DISCONTINUITY-SEQUENCE":
                    l = n.startCC = parseInt(g);
                    break;
                  case "DISCONTINUITY":
                    l++;
                    break;
                  case "BYTERANGE":
                    s.setByteRange(g, n.segments[n.segments.length - 1]);
                    break;
                  case "PART":
                    if (!n.lowLatency) {
                      break;
                    }
                    var S = eE(g);
                    s.duration = parseFloat(S.DURATION);
                    s.independent = S.INDEPENDENT === "YES";
                    s.sn = c;
                    s.cc = l;
                    s.partIndex = f;
                    s.start = u;
                    s.duration = parseFloat(S.DURATION);
                    u += s.duration;
                    s.url = ew(S.URI, t);
                    if (o) {
                      s.key = o.clone(c);
                    }
                    if (a) {
                      s.initSegment = a;
                    }
                    n.segments.push(s);
                    s = new e_();
                    f++;
                    break;
                  case "PRELOAD-HINT":
                    break;
                  case "PROGRAM-DATE-TIME":
                    s.dataTime = g;
                    break;
                  case "EXTINF":
                    if (n.lowLatency) {
                      f = 0;
                      break;
                    }
                    var T = _(g.split(","), 2);
                    var x = T[0];
                    var E = T[1];
                    s.start = u;
                    s.duration = parseFloat(x);
                    u += s.duration;
                    s.title = E;
                    break;
                  case "KEY":
                    var w = eE(g);
                    if (w.METHOD === "NONE") {
                      o = null;
                      break;
                    }
                    (o = new ey()).method = w.METHOD;
                    o.url = /^blob:/.test(w.URI) ? w.URI : ew(w.URI, t);
                    o.keyFormat = w.KEYFORMAT || "identity";
                    o.keyFormatVersions = w.KEYFORMATVERSIONS;
                    if (!o.isSupported()) {
                      throw Error(`encrypt ${w.METHOD}/${w.KEYFORMAT} is not supported`);
                    }
                    if (w.IV) {
                      var A = w.IV.slice(2);
                      A = (A.length & 1 ? "0" : "") + A;
                      o.iv = new Uint8Array(A.length / 2);
                      var L = 0;
                      var D = A.length / 2;
                      for (; L < D; L++) {
                        o.iv[L] = parseInt(A.slice(L * 2, L * 2 + 2), 16);
                      }
                    }
                    break;
                  case "MAP":
                    var I = eE(g);
                    s.url = ew(I.URI, t);
                    if (I.BYTERANGE) {
                      s.setByteRange(I.BYTERANGE);
                    }
                    s.isInitSegment = true;
                    s.sn = 0;
                    if (o) {
                      s.key = o.clone(0);
                    }
                    a = s;
                    s = new e_();
                }
              }
            }
            n.segments = n.segments.filter(function (e) {
              return e.duration !== 0;
            });
            var P = n.segments[n.segments.length - 1];
            if (P) {
              n.endSN = P.sn;
              n.endPartIndex = P.partIndex;
            }
            n.totalDuration = u;
            n.endCC = l;
            return n;
          }(n, i, r);
        } else {
          return function (e, t) {
            var i;
            var r = new ed();
            var n = 0;
            var s = [];
            var a = [];
            while (i = e[n++]) {
              var o = ex(i);
              if (o) {
                var u = _(o, 2);
                var c = u[0];
                var l = u[1];
                if (c === "VERSION") {
                  r.version = parseInt(l);
                } else if (c === "MEDIA" && l) {
                  var h = eE(l);
                  var d = undefined;
                  switch (h.TYPE) {
                    case "AUDIO":
                      d = new ep();
                      break;
                    case "SUBTITLES":
                      d = new ev();
                      break;
                    default:
                      d = new ef();
                  }
                  d.url = ew(h.URI, t);
                  d.default = h.DEFAULT === "YES";
                  d.autoSelect = h.AUTOSELECT === "YES";
                  d.group = h["GROUP-ID"];
                  d.name = h.NAME;
                  d.lang = h.LANGUAGE;
                  if (h.CHANNELS) {
                    d.channels = Number(h.CHANNELS.split("/")[0]);
                    if (Number.isNaN(d.channels)) {
                      d.channels = 0;
                    }
                  }
                  if (h.TYPE === "AUDIO" && h.URI) {
                    s.push(d);
                  }
                  if (h.TYPE === "SUBTITLES") {
                    a.push(d);
                  }
                } else if (c === "STREAM-INF" && l) {
                  var f = new em();
                  var p = eE(l);
                  f.bitrate = parseInt(p["AVERAGE-BANDWIDTH"] || p.BANDWIDTH);
                  f.name = p.NAME;
                  f.url = ew(e[n++], t);
                  if (p.RESOLUTION) {
                    var v = _(p.RESOLUTION.split("x"), 2);
                    var m = v[0];
                    var g = v[1];
                    f.width = parseInt(m);
                    f.height = parseInt(g);
                  }
                  if (p.CODECS) {
                    var y = p.CODECS.split(/[ ,]+/).filter(Boolean);
                    f.videoCodec = eL("video", y);
                    f.audioCodec = eL("audio", y);
                    f.textCodec = eL("text", y);
                  }
                  f.audioGroup = p.AUDIO;
                  f.subtitleGroup = p.SUBTITLES;
                  r.streams.push(f);
                }
              }
            }
            r.streams.forEach(function (e, t) {
              e.id = t;
            });
            if (s.length) {
              s.forEach(function (e, t) {
                e.id = t;
              });
              r.streams.forEach(function (e) {
                if (e.audioGroup) {
                  e.audioStreams = s.filter(function (t) {
                    return t.group === e.audioGroup;
                  });
                }
              });
            }
            if (a.length) {
              a.forEach(function (e, t) {
                e.id = t;
              });
              r.streams.forEach(function (e) {
                if (e.subtitleGroup) {
                  e.subtitleStreams = a.filter(function (t) {
                    return t.group === e.subtitleGroup;
                  });
                }
              });
            }
            return r;
          }(n, i);
        }
      }
    }, {
      key: "isMediaPlaylist",
      value: function (e) {
        return e.includes("#EXTINF:") || e.includes("#EXT-X-TARGETDURATION:");
      }
    }]);
    return e;
  }();
  var eI = function () {
    var e;
    function t(e) {
      var i = this;
      c(this, t);
      d(this, "_emitOnLoaded", function (e, t) {
        var r = e.response;
        var n = e.options || {};
        var s = n.firstByteTime;
        var a = n.startTime;
        var o = n.endTime;
        var u = n.contentLength;
        var c = o - a;
        i.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.SPEED, {
          time: c,
          byteLength: u,
          url: t
        });
        i.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_COMPLETE, {
          url: t,
          elapsed: c || 0
        });
        i.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.TTFB, {
          url: t,
          responseUrl: r.url,
          elapsed: s - a
        });
        i.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_RESPONSE_HEADERS, {
          headers: r.headers,
          url: t
        });
      });
      d(this, "_onLoaderRetry", function (e, t) {
        i.hls.emit(ea.LOAD_RETRY, {
          error: mediaErrorHandler.MediaError.network(e),
          retryTime: t
        });
      });
      this.hls = e;
      this._timer = null;
      this._useLowLatency = e.config.useLowLatency;
      var r = this.hls.config;
      var s = r.retryCount;
      var a = r.retryDelay;
      var o = r.manifestLoadTimeout;
      var u = r.fetchOptions;
      this._loader = new httpRequestLoader.HttpLoader(n(n({}, u), {}, {
        responseType: "text",
        retry: s,
        retryDelay: a,
        timeout: o,
        onRetryError: this._onLoaderRetry
      }));
      this._audioLoader = new httpRequestLoader.HttpLoader(n(n({}, u), {}, {
        responseType: "text",
        retry: s,
        retryDelay: a,
        timeout: o,
        onRetryError: this._onLoaderRetry
      }));
      this._subtitleLoader = new httpRequestLoader.HttpLoader(n(n({}, u), {}, {
        responseType: "text",
        retry: s,
        retryDelay: a,
        timeout: o,
        onRetryError: this._onLoaderRetry
      }));
    }
    h(t, [{
      key: "load",
      value: (e = u(s().mark(function e(t, i, r) {
        var n;
        var a;
        var o;
        var u;
        var c;
        var l;
        var h;
        var d;
        var f;
        var p;
        var v;
        var b;
        var k;
        var S;
        var T;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                n = [this._loader.load(t)];
                if (i) {
                  n.push(this._audioLoader.load(i));
                }
                if (r) {
                  n.push(this._subtitleLoader.load(r));
                }
                e.prev = 3;
                e.next = 6;
                return Promise.all(n);
              case 6:
                f = (d = _(e.sent, 3))[0];
                p = d[1];
                v = d[2];
                if (f) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return", []);
              case 13:
                this._emitOnLoaded(f, t);
                a = f.data;
                c = f.response.url || t;
                if (i) {
                  o = p == null ? undefined : p.data;
                  u = v == null ? undefined : v.data;
                  l = (p == null ? undefined : p.response?.url) || i;
                  h = (v == null ? undefined : v.response?.url) || r;
                  if (o) {
                    this._emitOnLoaded(p, i);
                  }
                  if (u) {
                    this._emitOnLoaded(v, r);
                  }
                } else {
                  u = p == null ? undefined : p.data;
                  h = (p == null ? undefined : p.response?.url) || r;
                  if (u) {
                    this._emitOnLoaded(p, r);
                  }
                }
                e.next = 22;
                break;
              case 19:
                e.prev = 19;
                e.t0 = e.catch(3);
                throw mediaErrorHandler.MediaError.network(e.t0);
              case 22:
                b = this.hls.config.onPreM3U8Parse;
                e.prev = 23;
                if (b) {
                  a = b(a) || a;
                  o &&= b(o, true) || o;
                  u &&= b(u, true) || u;
                }
                if ((k = eD.parse(a, c, this._useLowLatency))?.live !== false || !k.segments || !!k.segments.length) {
                  e.next = 28;
                  break;
                }
                throw Error("empty segments list");
              case 28:
                if (o) {
                  S = eD.parse(o, l, this._useLowLatency);
                }
                if (u) {
                  T = eD.parse(u, h, this._useLowLatency);
                }
                e.next = 35;
                break;
              case 32:
                e.prev = 32;
                e.t1 = e.catch(23);
                throw new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.MANIFEST, mediaErrorHandler.ErrorTypes.SUB_TYPES.HLS, e.t1);
              case 35:
                if (k) {
                  if (k.isMaster) {
                    this.hls.emit(ea.HLS_MANIFEST_LOADED, {
                      playlist: k
                    });
                  } else {
                    this.hls.emit(ea.HLS_LEVEL_LOADED, {
                      playlist: k
                    });
                  }
                }
                return e.abrupt("return", [k, S, T]);
              case 37:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[3, 19], [23, 32]]);
      })), function (t, i, r) {
        return e.apply(this, arguments);
      })
    }, {
      key: "parseText",
      value: function (e, t) {
        var i;
        var n = this.hls.config.onPreM3U8Parse;
        try {
          if (n) {
            e = n(e) || e;
          }
          i = eD.parse(e, t, this._useLowLatency);
          if (i?.live === false && i.segments && !i.segments.length) {
            throw Error("empty segments list");
          }
        } catch (e) {
          throw new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.MANIFEST, mediaErrorHandler.ErrorTypes.SUB_TYPES.HLS, e);
        }
        if (i) {
          if (i.isMaster) {
            this.hls.emit(ea.HLS_MANIFEST_LOADED, {
              playlist: i
            });
          } else {
            this.hls.emit(ea.HLS_LEVEL_LOADED, {
              playlist: i
            });
          }
        }
        return [i];
      }
    }, {
      key: "poll",
      value: function (e, t, i, r, n, a) {
        var o;
        var c = this;
        clearTimeout(this._timer);
        a = a || 3000;
        var l = this.hls.config.pollRetryCount;
        o = u(s().mark(function o() {
          var u;
          return s().wrap(function (s) {
            while (true) {
              switch (s.prev = s.next) {
                case 0:
                  clearTimeout(c._timer);
                  s.prev = 1;
                  s.next = 4;
                  return c.load(e, t, i);
                case 4:
                  if ((u = s.sent)[0]) {
                    s.next = 7;
                    break;
                  }
                  return s.abrupt("return");
                case 7:
                  l = c.hls.config.pollRetryCount;
                  r(u[0], u[1], u[2]);
                  s.next = 15;
                  break;
                case 11:
                  s.prev = 11;
                  s.t0 = s.catch(1);
                  if (--l <= 0) {
                    n(s.t0);
                  }
                case 15:
                  c._timer = setTimeout(h, a);
                case 16:
                case "end":
                  return s.stop();
              }
            }
          }, o, null, [[1, 11]]);
        }));
        function h() {
          return o.apply(this, arguments);
        }
        this._timer = setTimeout(h, a);
      }
    }, {
      key: "stopPoll",
      value: function () {
        clearTimeout(this._timer);
        return this.cancel();
      }
    }, {
      key: "cancel",
      value: function () {
        return Promise.all([this._loader.cancel(), this._audioLoader.cancel()]);
      }
    }]);
    return t;
  }();
  function eP(e, t, i) {
    if (t > i) {
      i = t;
    }
    return Math.min(Math.max(e, t), i);
  }
  var eO = new customLoggerClass.Logger("playlist");
  var eC = function () {
    function e(t, i, r) {
      c(this, e);
      d(this, "live", undefined);
      d(this, "id", 0);
      d(this, "bitrate", 0);
      d(this, "width", 0);
      d(this, "height", 0);
      d(this, "name", "");
      d(this, "url", "");
      d(this, "audioCodec", "");
      d(this, "videoCodec", "");
      d(this, "textCodec", "");
      d(this, "startCC", 0);
      d(this, "endCC", 0);
      d(this, "startSN", 0);
      d(this, "endSN", -1);
      d(this, "totalDuration", 0);
      d(this, "targetDuration", 0);
      d(this, "partTargetDuration", 0);
      d(this, "canSkipUntil", 0);
      d(this, "canSkipDateRanges", false);
      d(this, "skippedSegments", 0);
      d(this, "canBlockReload", false);
      d(this, "partHoldBack", 0);
      d(this, "lowLatency", false);
      d(this, "endPartIndex", 0);
      d(this, "snDiff", null);
      d(this, "segments", []);
      d(this, "audioStreams", []);
      d(this, "subtitleStreams", []);
      d(this, "closedCaptions", []);
      d(this, "currentAudioStream", null);
      d(this, "currentSubtitleStream", null);
      this.update(this._setLLPlaybackPoint(t), i, r);
    }
    h(e, [{
      key: "lastSegment",
      get: function () {
        if (this.segments.length) {
          return this.segments[this.segments.length - 1];
        } else {
          return null;
        }
      }
    }, {
      key: "segmentDuration",
      get: function () {
        return this.targetDuration || this.segments[0]?.duration || 0;
      }
    }, {
      key: "liveEdge",
      get: function () {
        return this.endTime;
      }
    }, {
      key: "endTime",
      get: function () {
        return this.lastSegment?.end || 0;
      }
    }, {
      key: "currentSubtitleEndSn",
      get: function () {
        return this.currentSubtitleStream?.endSN || 0;
      }
    }, {
      key: "clearOldSegment",
      value: function (e, t) {
        if (this.currentAudioStream) {
          this._clearSegments(e, t);
        }
        return this._clearSegments(e, t);
      }
    }, {
      key: "getAudioSegment",
      value: function (e) {
        if (e && this.currentAudioStream) {
          var t = e.sn - this.snDiff;
          return this.currentAudioStream.segments.find(function (e) {
            return e.sn === t;
          });
        }
      }
    }, {
      key: "update",
      value: function (e, t) {
        this.url = e.url;
        if (Array.isArray(e.segments)) {
          if (this.live === null || this.live === undefined) {
            this.live = e.live;
          }
          this._updateSegments(e, this);
          this.startCC = e.startCC;
          this.endCC = e.endCC;
          this.startSN = e.startSN;
          this.endSN = e.endSN || -1;
          this.totalDuration = e.totalDuration;
          this.targetDuration = e.targetDuration;
          this.live = e.live;
          this.lowLatency = e.lowLatency;
          this.canBlockReload = e.canBlockReload;
          this.canSkipDateRanges = e.canSkipDateRanges;
          this.canSkipUntil = e.canSkipUntil;
          this.partHoldBack = e.partHoldBack;
          this.partTargetDuration = e.partTargetDuration;
          this.skippedSegments = e.skippedSegments;
          this.endPartIndex = e.endPartIndex;
          if (t && this.currentAudioStream && Array.isArray(t.segments)) {
            this._updateSegments(t, this.currentAudioStream);
            if ((this.snDiff === null || this.snDiff === undefined) && e.segments.length && t.segments.length) {
              this.snDiff = e.segments[0].sn - t.segments[0].sn;
            }
          }
        } else {
          this.id = e.id;
          this.bitrate = e.bitrate;
          this.width = e.width;
          this.height = e.height;
          this.name = e.name;
          this.audioCodec = e.audioCodec;
          this.videoCodec = e.videoCodec;
          this.textCodec = e.textCodec;
          this.audioStreams = e.audioStreams;
          this.subtitleStreams = e.subtitleStreams;
          if (!this.currentAudioStream && this.audioStreams.length) {
            this.currentAudioStream = this.audioStreams.find(function (e) {
              return e.default;
            }) || this.audioStreams[0];
          }
          if (!this.currentSubtitleStream && this.subtitleStreams.length) {
            this.currentSubtitleStream = this.subtitleStreams.find(function (e) {
              return e.default;
            }) || this.subtitleStreams[0];
          }
        }
      }
    }, {
      key: "updateSubtitle",
      value: function (e) {
        var t = this;
        if (e && this.currentSubtitleStream && Array.isArray(e.segments)) {
          var i = this._updateSegments(e, this.currentSubtitleStream);
          var r = this.currentSubtitleStream.segments;
          if (r.length > 100) {
            this.currentSubtitleStream.segments = r.slice(100);
          }
          if (i) {
            return i.map(function (e) {
              return {
                sn: e.sn,
                url: e.url,
                duration: e.duration,
                start: e.start,
                end: e.end,
                lang: t.currentSubtitleStream.lang
              };
            });
          }
        }
      }
    }, {
      key: "switchSubtitle",
      value: function (e) {
        var t = this.subtitleStreams.find(function (t) {
          return t.lang === e;
        });
        var i = this.currentSubtitleStream;
        if (t) {
          this.currentSubtitleStream = t;
          i.segments = [];
        }
      }
    }, {
      key: "_setLLPlaybackPoint",
      value: function (e) {
        if (!e.lowLatency || !e.segments.length) {
          return e;
        }
        var t = e.totalDuration - e.partHoldBack;
        var i = e.segments;
        var r = 0;
        var n = 0;
        var s = i.length;
        for (; n < s; n++) {
          if (i[n].start <= t && i[n].independent) {
            r = n;
          }
        }
        var a = i.slice(r);
        var o = 0;
        a.forEach(function (e) {
          e.start = o;
          o = e.end;
        });
        e.segments = a;
        e.totalDuration = o;
        e.startSN = a[0].sn;
        e.startCC = a[0].cc;
        eO.log(`set ll-hls playback point: SN=${e.startSN} partIndex=${a[0].partIndex}, duration=${o}`);
        return e;
      }
    }, {
      key: "_clearSegments",
      value: function (e, t) {
        var i = 0;
        var r = this.segments;
        var n = 0;
        var s = r.length;
        for (; n < s; n++) {
          if (r[n].end >= e) {
            i = n;
            break;
          }
        }
        if (i > t) {
          i = t;
        }
        if (i) {
          this.segments = this.segments.slice(i);
          if (this.currentAudioStream) {
            this.currentAudioStream.segments = this.currentAudioStream.segments.slice(i);
          }
        }
        return t - i;
      }
    }, {
      key: "_updateSegments",
      value: function (e, t) {
        var i = t.segments;
        if (this.live) {
          var n = e.lowLatency;
          var s = i[i.length - 1];
          var a = (s == null ? undefined : s.sn) ?? -1;
          var o = (s == null ? undefined : s.partIndex) || 0;
          var u = a < e.endSN && e.segments.length;
          if (n) {
            u = u || o < e.endPartIndex;
          }
          if (u) {
            eO.log(`update segments: endSN:${a}, partIndex:${o} --> endSN:${e.endSN}, partIndex:${e.endPartIndex}`);
            var c = e.segments.findIndex(function (e) {
              return e.sn === a && e.partIndex === o;
            });
            var l = c < 0 ? e.segments : e.segments.slice(c + 1);
            if (i.length && l.length) {
              var h = s.end;
              var d = h;
              l.forEach(function (e) {
                e.start = h;
                h = e.end;
              });
              eO.log(`liveEdge: ${d} -> ${h}`);
              var f = (s == null ? undefined : s.cc) || -1;
              if (f > l[0].cc) {
                l.forEach(function (e) {
                  return e.cc += f;
                });
              }
            }
            t.endSN = e.endSN;
            t.segments = i.concat(l);
            return l;
          }
        } else {
          t.segments = e.segments;
        }
      }
    }]);
    return e;
  }();
  var eR = function () {
    function e(t) {
      c(this, e);
      d(this, "streams", []);
      d(this, "currentStream", null);
      d(this, "dvrWindow", 0);
      d(this, "_segmentPointer", -1);
      this.hls = t;
    }
    h(e, [{
      key: "lowLatency",
      get: function () {
        return this.currentStream?.lowLatency;
      }
    }, {
      key: "lastSegment",
      get: function () {
        return this.currentStream?.lastSegment;
      }
    }, {
      key: "currentSegment",
      get: function () {
        return this.currentSegments?.[this._segmentPointer];
      }
    }, {
      key: "nextSegment",
      get: function () {
        return this.currentSegments?.[this._segmentPointer + 1];
      }
    }, {
      key: "currentSegments",
      get: function () {
        return this.currentStream?.segments;
      }
    }, {
      key: "currentSubtitleEndSn",
      get: function () {
        return this.currentStream?.currentSubtitleEndSn;
      }
    }, {
      key: "liveEdge",
      get: function () {
        return this.currentStream?.liveEdge;
      }
    }, {
      key: "totalDuration",
      get: function () {
        return this.currentStream?.totalDuration || 0;
      }
    }, {
      key: "seekRange",
      get: function () {
        var e = this.currentSegments;
        if (e && e.length) {
          return [e[0].start, e[e.length - 1].end];
        }
      }
    }, {
      key: "nbSegments",
      get: function () {
        return this.currentSegments?.length || 0;
      }
    }, {
      key: "isEmpty",
      get: function () {
        var e;
        return (e = this.currentSegments) === null || e === undefined || !e.length;
      }
    }, {
      key: "isLive",
      get: function () {
        return this.currentStream?.live;
      }
    }, {
      key: "hadSegmentLoaded",
      get: function () {
        return this._segmentPointer !== -1;
      }
    }, {
      key: "hasSubtitle",
      get: function () {
        var e;
        return (e = this.currentStream) !== null && e !== undefined && !!e.currentSubtitleStream;
      }
    }, {
      key: "getAudioSegment",
      value: function (e) {
        var t;
        if ((t = this.currentStream) === null || t === undefined) {
          return undefined;
        } else {
          return t.getAudioSegment(e);
        }
      }
    }, {
      key: "moveSegmentPointer",
      value: function (e) {
        if (e == null) {
          e = this._segmentPointer + 1;
        }
        this._segmentPointer = eP(e, -1, this.currentSegments?.length);
      }
    }, {
      key: "reset",
      value: function () {
        this.streams = [];
        this.currentStream = null;
        this.dvrWindow = 0;
        this._segmentPointer = -1;
      }
    }, {
      key: "getSegmentByIndex",
      value: function (e) {
        return this.currentSegments?.[e];
      }
    }, {
      key: "setNextSegmentByIndex",
      value: function (e = 0) {
        this._segmentPointer = e - 1;
      }
    }, {
      key: "findSegmentIndexByTime",
      value: function (e) {
        var t = this.currentSegments;
        if (t) {
          var i;
          var r = 0;
          var n = t.length;
          for (; r < n; r++) {
            if (e >= (i = t[r]).start && e < i.end) {
              return r;
            }
          }
          var s = t[t.length - 1];
          if (Math.abs(e - (s == null ? undefined : s.end)) < 0.2) {
            return t.length - 1;
          }
        }
      }
    }, {
      key: "upsertPlaylist",
      value: function (e, t, i) {
        var r = this;
        if (e) {
          if (e.isMaster) {
            this.streams.length = e.streams.length;
            e.streams.filter(function (e) {
              return e.url;
            }).forEach(function (e, t) {
              if (r.streams[t]) {
                r.streams[t].update(e);
              } else {
                r.streams[t] = new eC(e);
              }
            });
            this.currentStream = this.streams[0];
          } else if (Array.isArray(e.segments)) {
            var n = this.currentStream;
            if (n) {
              n.update(e, t, i);
              var s = n.updateSubtitle(i);
              if (s) {
                this.hls.emit(ea.SUBTITLE_SEGMENTS, {
                  list: s
                });
              }
            } else {
              this.reset();
              this.currentStream = this.streams[0] = new eC(e, t, i);
            }
          }
          if (this.currentStream && this.hls.isLive && !this.dvrWindow) {
            this.dvrWindow = this.currentSegments.reduce(function (e, t) {
              return e + t.duration;
            }, 0);
          }
        }
      }
    }, {
      key: "switchSubtitle",
      value: function (e) {
        var t;
        if ((t = this.currentStream) !== null && t !== undefined) {
          t.switchSubtitle(e);
        }
      }
    }, {
      key: "clearOldSegment",
      value: function (e = 50) {
        var t = this.currentStream;
        if (this.dvrWindow && t) {
          var i = t.endTime - this.dvrWindow;
          if (!(i <= 0)) {
            if (!(t.segments.length <= e)) {
              this._segmentPointer = t.clearOldSegment(i, this._segmentPointer);
            }
          }
        }
      }
    }, {
      key: "checkSegmentTrackChange",
      value: function (e, t) {
        var i = this.findSegmentIndexByTime(e);
        var r = this.getSegmentByIndex(i);
        if (!!r && (!!r.hasAudio || !!r.hasVideo)) {
          if (t !== 2 && r.hasAudio && r.hasVideo) {
            return r;
          }
          if (!(r.end - e > 0.3)) {
            var n = this.getSegmentByIndex(i + 1);
            if (n && (n.hasAudio || n.hasVideo) && (n.hasAudio !== r.hasAudio || n.hasVideo !== r.hasVideo)) {
              return n;
            }
          }
        }
      }
    }]);
    return e;
  }();
  var eB = function () {
    function e() {
      babelRuntimeHelpers.classCallCheck(this, e);
      babelRuntimeHelpers.defineProperty(this, "_chunkSpeeds", []);
      babelRuntimeHelpers.defineProperty(this, "_speeds", []);
    }
    babelRuntimeHelpers.classProps(e, [{
      key: "addRecord",
      value: function (e, t) {
        if (e && t) {
          this._speeds.push(e * 8000 / t);
          this._speeds = this._speeds.slice(-3);
        }
      }
    }, {
      key: "addChunkRecord",
      value: function (e, t) {
        if (e && t) {
          this._chunkSpeeds.push(e * 8000 / t);
          this._chunkSpeeds = this._chunkSpeeds.slice(-100);
        }
      }
    }, {
      key: "getAvgSpeed",
      value: function () {
        if (this._chunkSpeeds.length || this._speeds.length) {
          if (this._speeds.length) {
            return this._speeds.reduce(function (e, t) {
              return e + t;
            }) / this._speeds.length;
          } else {
            return this._chunkSpeeds.reduce(function (e, t) {
              return e + t;
            }) / this._chunkSpeeds.length;
          }
        } else {
          return 0;
        }
      }
    }, {
      key: "getLatestSpeed",
      value: function () {
        if (this._chunkSpeeds.length || this._speeds.length) {
          if (this._speeds.length) {
            return this._speeds[this._speeds.length - 1];
          } else {
            return this._chunkSpeeds[this._chunkSpeeds.length - 1];
          }
        } else {
          return 0;
        }
      }
    }, {
      key: "reset",
      value: function () {
        this._chunkSpeeds = [];
        this._speeds = [];
      }
    }]);
    return e;
  }();
  var eU = function () {
    var e;
    var t;
    function i(e) {
      var t = this;
      c(this, i);
      d(this, "error", null);
      d(this, "_emitOnLoaded", function (e, i) {
        var r = e.data;
        var n = e.response;
        var s = e.options || {};
        var a = s.firstByteTime;
        var o = s.startTime;
        var u = s.endTime;
        var c = s.contentLength;
        var l = u - o;
        t._bandwidthService.addRecord(c || r.byteLength, l);
        t.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.SPEED, {
          time: l,
          byteLength: c,
          url: i
        });
        t.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_COMPLETE, {
          url: i,
          elapsed: l || 0
        });
        t.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.TTFB, {
          url: i,
          responseUrl: n.url,
          elapsed: a - o
        });
        t.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_RESPONSE_HEADERS, {
          headers: n.headers,
          url: i
        });
      });
      d(this, "_onLoaderRetry", function (e, i) {
        t.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_RETRY, {
          error: mediaErrorHandler.MediaError.network(e),
          retryTime: i
        });
      });
      this.hls = e;
      this._bandwidthService = new eB();
      this._mapCache = {};
      this._keyCache = {};
      var r = this.hls.config;
      var s = r.retryCount;
      var a = r.retryDelay;
      var o = r.loadTimeout;
      var u = r.fetchOptions;
      this._segmentLoader = new httpRequestLoader.HttpLoader(n(n({}, u), {}, {
        responseType: "arraybuffer",
        retry: s,
        retryDelay: a,
        timeout: o,
        onRetryError: this._onLoaderRetry
      }));
      this._audioSegmentLoader = new httpRequestLoader.HttpLoader(n(n({}, u), {}, {
        responseType: "arraybuffer",
        retry: s,
        retryDelay: a,
        timeout: o,
        onRetryError: this._onLoaderRetry
      }));
      this._keyLoader = new httpRequestLoader.HttpLoader(n(n({}, u), {}, {
        responseType: "arraybuffer",
        retry: s,
        retryDelay: a,
        timeout: o,
        onRetryError: this._onLoaderRetry
      }));
    }
    h(i, [{
      key: "speedInfo",
      value: function () {
        return {
          speed: this._bandwidthService.getLatestSpeed(),
          avgSpeed: this._bandwidthService.getAvgSpeed()
        };
      }
    }, {
      key: "load",
      value: function (e, t, i, r = i) {
        var n = [];
        if (e) {
          n[0] = this.loadVideoSegment(e, i);
        }
        if (t) {
          n[1] = this.loadAudioSegment(t, r);
        }
        return Promise.all(n);
      }
    }, {
      key: "loadVideoSegment",
      value: function (e, t) {
        return this._loadSegment(this._segmentLoader, e, t);
      }
    }, {
      key: "loadAudioSegment",
      value: function (e, t) {
        return this._loadSegment(this._audioSegmentLoader, e, t);
      }
    }, {
      key: "_loadSegment",
      value: (e = u(s().mark(function e(t, i, r) {
        var n;
        var a;
        var o;
        var u;
        var c;
        var l;
        var d;
        var f;
        var p;
        var v;
        var m;
        var y = this;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                l = [];
                this.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_START, {
                  url: i.url
                });
                l[0] = t.load(i.url);
                if (r && i.initSegment) {
                  d = i.initSegment.url;
                  if (!(n = this._mapCache[d])) {
                    this.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_START, {
                      url: d
                    });
                    l[1] = t.load(d).then(function (e) {
                      if (e) {
                        if (Object.keys(y._mapCache) > 30) {
                          y._mapCache = {};
                        }
                        n = y._mapCache[d] = e.data;
                        y._emitOnLoaded(e, d);
                      }
                    });
                  }
                  if (f = i.initSegment.key?.url) {
                    c = i.initSegment.key.iv;
                    if (!(u = this._keyCache[f])) {
                      this.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_START, {
                        url: f
                      });
                      l[2] = this._keyLoader.load(f).then(function (e) {
                        if (e) {
                          u = y._keyCache[f] = e.data;
                          y._emitOnLoaded(e, f);
                        }
                      });
                    }
                  }
                }
                if ((p = i.key?.url) && i.key.isSegmentEncrypted()) {
                  o = i.key.iv;
                  if (!(a = this._keyCache[p])) {
                    this.hls.emit(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_START, {
                      url: p
                    });
                    l[3] = this._keyLoader.load(p).then(function (e) {
                      if (e) {
                        a = y._keyCache[p] = e.data;
                        y._emitOnLoaded(e, p);
                      }
                    });
                  }
                }
                e.next = 8;
                return Promise.all(l);
              case 8:
                if (v = _(e.sent, 1)[0]) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return");
              case 13:
                m = v.data;
                this._emitOnLoaded(v, i.url);
                return e.abrupt("return", {
                  data: m,
                  map: n,
                  key: a,
                  mapKey: u,
                  keyIv: o,
                  mapKeyIv: c
                });
              case 16:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (t, i, r) {
        return e.apply(this, arguments);
      })
    }, {
      key: "reset",
      value: function () {
        this.error = null;
        this._mapCache = {};
        this._keyCache = {};
        this._bandwidthService.reset();
      }
    }, {
      key: "cancel",
      value: (t = u(s().mark(function e() {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return Promise.all([this._keyLoader.cancel(), this._segmentLoader.cancel(), this._audioSegmentLoader.cancel()]);
              case 2:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return t.apply(this, arguments);
      })
    }]);
    return i;
  }();
  var eN = new customLoggerClass.Logger("hls");
  var eM = function (e) {
    f(N, e);
    var t;
    var i;
    var r;
    var o;
    var l;
    var p;
    var v;
    var k;
    var S;
    var T;
    var x;
    var E;
    var w;
    var P;
    var R = g(N);
    function N(e) {
      var t;
      var i;
      var r;
      c(this, N);
      d(m(t = R.call(this)), "version", N.version);
      d(m(t), "media", null);
      d(m(t), "config", null);
      d(m(t), "_manifestLoader", null);
      d(m(t), "_segmentLoader", null);
      d(m(t), "_playlist", null);
      d(m(t), "_bufferService", null);
      d(m(t), "_gapService", null);
      d(m(t), "_seiService", null);
      d(m(t), "_stats", null);
      d(m(t), "_prevSegSn", null);
      d(m(t), "_prevSegCc", null);
      d(m(t), "_tickTimer", null);
      d(m(t), "_tickInterval", 500);
      d(m(t), "_segmentProcessing", false);
      d(m(t), "_reloadOnPlay", false);
      d(m(t), "_switchUrlOpts", null);
      d(m(t), "_isProcessQuotaExceeded", false);
      d(m(t), "_loadSegment", u(s().mark(function e() {
        var i;
        var r;
        var n;
        var a;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!t._segmentProcessing && !!t.media) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                i = t._playlist.nextSegment;
                r = m(t).config;
                if (i) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return");
              case 6:
                if (t.isLive) {
                  e.next = 16;
                  break;
                }
                n = t.bufferInfo();
                if (t.media.paused && !t.media.currentTime) {
                  n = t.bufferInfo(n.nextStart || 0.5);
                }
                a = Math.abs(n.end - t.media.duration) < 0.1;
                if (!(n.remaining >= r.preloadTime) && !a) {
                  e.next = 13;
                  break;
                }
                if (a && t._bufferService.msIsOpend) {
                  t._bufferService.endOfStream();
                }
                return e.abrupt("return");
              case 13:
                if (!r.preferMMSStreaming || !!t._bufferService.msStreaming) {
                  e.next = 15;
                  break;
                }
                return e.abrupt("return");
              case 15:
                if (!t._urlSwitching && t._prevSegSn !== i.sn - 1 && n.end && Math.abs(i.start - n.end) > 1) {
                  t._playlist.setNextSegmentByIndex(t._playlist.findSegmentIndexByTime(n.end + 0.1));
                }
              case 16:
                return e.abrupt("return", t._loadSegmentDirect());
              case 17:
              case "end":
                return e.stop();
            }
          }
        }, e);
      })));
      d(m(t), "_onPlay", u(s().mark(function e() {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!t.media.seeking || t.media.currentTime !== 0) {
                  e.next = 3;
                  break;
                }
                eN.debug("replay currentTime 0, return");
                return e.abrupt("return");
              case 3:
                clearTimeout(t._disconnectTimer);
                if (!t._reloadOnPlay) {
                  e.next = 9;
                  break;
                }
                t._reloadOnPlay = false;
                t.replay(true);
                e.next = 12;
                break;
              case 9:
                e.next = 11;
                return t._loadSegment();
              case 11:
                t._startTick();
              case 12:
              case "end":
                return e.stop();
            }
          }
        }, e);
      })));
      d(m(t), "_onPause", function () {
        if (t.isLive) {
          if (!t._reloadOnPlay) {
            var e = t.config.disconnectTime;
            if (e == null) {
              e = t._playlist.dvrWindow;
            }
            if (Number.isFinite(e)) {
              clearTimeout(t._disconnectTimer);
              t._disconnectTimer = setTimeout(function () {
                t._reloadOnPlay = true;
                t._clear();
              }, e || 0);
            }
          }
        } else {
          t._stopTick();
        }
      });
      d(m(t), "_onSeeking", u(s().mark(function e() {
        var i;
        var r;
        var n;
        var a;
        var o;
        var u;
        var c;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (t.media) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                t._onCheckQuotaExceeded();
                i = t.media.currentTime;
                if (!(r = t._playlist.seekRange) || !((n = eP(i, r[0], t.isLive ? r[1] : t.media.duration)) >= 0) || !(Math.abs(i - n) >= 0.1)) {
                  e.next = 10;
                  break;
                }
                t.media.currentTime = n;
                return e.abrupt("return");
              case 10:
                a = t._playlist.currentSegment;
                o = bufferRangeUtil.BufferRangeUtil.info(bufferRangeUtil.BufferRangeUtil.get(t.media), i, 0.1);
                if (!a || !o.end || !(Math.abs(o.end - a.end) < 0.2)) {
                  e.next = 15;
                  break;
                }
                return e.abrupt("return");
              case 15:
                u = t._playlist.findSegmentIndexByTime(i);
                c = t._playlist.getSegmentByIndex(u);
                if (u != null && !!c && (!t._segmentProcessing || c !== t._playlist.nextSegment)) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return");
              case 19:
                eN.debug("seek to", i, c);
                t._playlist.setNextSegmentByIndex(u);
                t._stopTick();
                e.next = 24;
                return t._segmentLoader.cancel();
              case 24:
                t._segmentProcessing = false;
                if (!!o.end && !t.isLive) {
                  e.next = 28;
                  break;
                }
                e.next = 28;
                return t._loadSegmentDirect(true);
              case 28:
                t._startTick();
              case 29:
              case "end":
                return e.stop();
            }
          }
        }, e);
      })));
      d(m(t), "_onTimeupdate", function () {
        if (t.media) {
          var e;
          var i = t.config;
          if (i.isLive && i.maxLatency && i.targetLatency && t.media) {
            var r = t._playlist.liveEdge;
            if (!r) {
              return;
            }
            var n = r - t.media.currentTime;
            if (n >= i.maxLatency) {
              eN.debug(`latency jump, currentTime:${t.media.currentTime}, liveEdge:${r},  latency=${n}`);
              t.media.currentTime = r - i.targetLatency;
            }
          }
          if (i.seiInTime) {
            if ((e = t._seiService) !== null && e !== undefined) {
              e.throw(t.media.currentTime);
            }
          }
          if (t.config.allowedStreamTrackChange && !t.config.softDecode) {
            t._checkStreamTrackChange(t.media.currentTime);
          }
        }
      });
      d(m(t), "_tick", function () {
        if (t.media) {
          t._startTick();
          var e = t.media;
          var i = bufferRangeUtil.BufferRangeUtil.get(e);
          var r = t._segmentLoader.error;
          t._onCheckQuotaExceeded();
          if (t._isProcessQuotaExceeded && !t._bufferService.isFull()) {
            t._isProcessQuotaExceeded = false;
            t._segmentProcessing = false;
          }
          if (r) {
            if (!e.readyState || t.bufferInfo(0.5).remaining < 1) {
              r.fatal = true;
              t._emitError(mediaErrorHandler.MediaError.network(r));
            }
            return;
          }
          if (!(bufferRangeUtil.BufferRangeUtil.end(i) < 0.1) && e.readyState) {
            if (mediaPlaybackUtils.isMediaPlaying(e)) {
              t._loadSegment();
              if (t._gapService) {
                t._gapService.do(e, t.config.maxJumpDistance, t.isLive);
              }
            } else if (e.readyState < 2 && t._gapService) {
              t._gapService.do(e, t.config.maxJumpDistance, !e.currentTime || t.isLive);
            }
          }
        }
      });
      r = ((i = e) == null ? undefined : i.media) || document.createElement("video");
      t.config = e = n(n({
        maxPlaylistSize: 50,
        retryCount: 3,
        retryDelay: 1000,
        pollRetryCount: 2,
        loadTimeout: 10000,
        manifestLoadTimeout: 10000,
        preloadTime: 30,
        softDecode: false,
        bufferBehind: 10,
        maxJumpDistance: 3,
        startTime: 0,
        useLowLatency: true,
        targetLatency: 10,
        maxLatency: 20,
        allowedStreamTrackChange: true,
        seiInTime: false,
        manifestList: [],
        minSegmentsStartPlay: 3,
        preferMMS: false,
        preferMMSStreaming: false
      }, i), {}, {
        media: r
      });
      t.media = t.config.media;
      t._manifestLoader = new eI(m(t));
      t._segmentLoader = new eU(m(t));
      t._playlist = new eR(m(t));
      t._bufferService = new el(m(t));
      if (e.seiInTime) {
        t._seiService = new O(m(t));
      }
      if (!e.softDecode) {
        t._gapService = new C();
      }
      t._stats = new B(m(t), 90000);
      t.media.addEventListener("play", t._onPlay);
      t.media.addEventListener("pause", t._onPause);
      t.media.addEventListener("seeking", t._onSeeking);
      t.media.addEventListener("timeupdate", t._onTimeupdate);
      return t;
    }
    h(N, [{
      key: "isLive",
      get: function () {
        return this._playlist.isLive;
      }
    }, {
      key: "streams",
      get: function () {
        return this._playlist.streams;
      }
    }, {
      key: "currentStream",
      get: function () {
        return this._playlist.currentStream;
      }
    }, {
      key: "hasSubtitle",
      get: function () {
        return this._playlist.hasSubtitle;
      }
    }, {
      key: "baseDts",
      get: function () {
        return this._bufferService?.baseDts;
      }
    }, {
      key: "speedInfo",
      value: function () {
        return this._segmentLoader.speedInfo();
      }
    }, {
      key: "bufferInfo",
      value: function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
        return bufferRangeUtil.BufferRangeUtil.info(bufferRangeUtil.BufferRangeUtil.get(this.media), this.media?.currentTime, t);
      }
    }, {
      key: "getStats",
      value: function () {
        return this._stats.getStats();
      }
    }, {
      key: "playbackQuality",
      value: function () {
        return mediaPlaybackUtils.getVideoQuality(this.media);
      }
    }, {
      key: "load",
      value: (t = u(s().mark(function e(t) {
        var i;
        var r = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = r.length > 1 && r[1] !== undefined && r[1];
                if (t) {
                  this.config.url = t;
                }
                t = this.config.url;
                e.next = 5;
                return this._reset(i);
              case 5:
                e.next = 7;
                return this._loadData(t);
              case 7:
                this._startTick();
              case 8:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e) {
        return t.apply(this, arguments);
      })
    }, {
      key: "_loadData",
      value: (i = u(s().mark(function e(t) {
        var i;
        var r;
        var n;
        var o;
        var u;
        var c;
        var l;
        var h;
        var d;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                try {
                  t &&= t.trim();
                } catch (e) {}
                if (t) {
                  e.next = 3;
                  break;
                }
                throw this._emitError(new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.OTHER, mediaErrorHandler.ErrorTypes.SUB_TYPES.OPTION, null, null, "m3u8 url is missing"));
              case 3:
                e.next = 5;
                return this._loadM3U8(t);
              case 5:
                i = e.sent;
                r = this._playlist.currentStream;
                if (!this._urlSwitching || (r.bitrate === 0 && (n = this._switchUrlOpts) !== null && n !== undefined && n.bitrate && (r.bitrate = this._switchUrlOpts?.bitrate), o = this._getSeamlessSwitchPoint(), this.config.startTime = o, u = this._playlist.findSegmentIndexByTime(o), !(c = this._playlist.getSegmentByIndex(u + 1)))) {
                  e.next = 17;
                  break;
                }
                l = c.start;
                e.next = 17;
                return this._bufferService.removeBuffer(l);
              case 17:
                if (i) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return");
              case 19:
                if (!this.isLive) {
                  e.next = 30;
                  break;
                }
                this._bufferService.setLiveSeekableRange(0, 4294967295);
                eN.log("totalDuration first time got:", this._playlist.totalDuration);
                eN.log("nb segments got:", this._playlist.nbSegments);
                if (this.config.targetLatency < this._playlist.totalDuration) {
                  this.config.targetLatency = this._playlist.totalDuration;
                  this.config.maxLatency = this.config.targetLatency * 1.5;
                }
                if (!i.isMaster) {
                  this._pollM3U8(t);
                }
                if (!(this._playlist.nbSegments < this.config.minSegmentsStartPlay)) {
                  e.next = 27;
                  break;
                }
                return e.abrupt("return");
              case 27:
                e.next = 29;
                return this._loadSegment();
              case 29:
                return e.abrupt("return");
              case 30:
                e.next = 32;
                return this._bufferService.updateDuration(r.totalDuration);
              case 32:
                if (h = this.config.startTime) {
                  if ((d = this._switchUrlOpts) === null || d === undefined || !d.seamless) {
                    this.media.currentTime = h;
                  }
                  this._playlist.setNextSegmentByIndex(this._playlist.findSegmentIndexByTime(h) || 0);
                }
                e.next = 36;
                return this._loadSegment();
              case 36:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e) {
        return i.apply(this, arguments);
      })
    }, {
      key: "replay",
      value: (r = u(s().mark(function e(t) {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                this.config.startTime = 0;
                e.next = 3;
                return this.load();
              case 3:
                this._reloadOnPlay = false;
                return e.abrupt("return", this.media.play(!t));
              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e) {
        return r.apply(this, arguments);
      })
    }, {
      key: "switchURL",
      value: (o = u(s().mark(function e(t) {
        var i;
        var r;
        var n;
        var o;
        var u;
        var c;
        var l;
        var h = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = h.length > 1 && h[1] !== undefined ? h[1] : {};
                r = {
                  seamless: false,
                  startTime: 0,
                  bitrate: 0
                };
                e.t0 = a(i);
                e.next = e.t0 === "number" ? 5 : e.t0 === "boolean" ? 7 : e.t0 === "object" ? 9 : 11;
                break;
              case 5:
                i = {
                  startTime: i
                };
                return e.abrupt("break", 12);
              case 7:
                i = {
                  seamless: i
                };
                return e.abrupt("break", 12);
              case 9:
                for (n in i) {
                  if (i[n] === undefined || i[n] === null) {
                    delete i[n];
                  }
                }
                return e.abrupt("break", 12);
              case 11:
                throw `unsupported switchURL args: ${i}`;
              case 12:
                u = (o = i = Object.assign({}, r, i)).seamless;
                c = o.startTime;
                this.config.url = t;
                this.config.startTime = c;
                this._switchUrlOpts = i;
                if (u) {
                  e.next = 38;
                  break;
                }
                e.prev = 18;
                if (!this.config.softDecode) {
                  e.next = 23;
                  break;
                }
                e.t1 = this.load(t);
                e.next = 26;
                break;
              case 23:
                e.next = 25;
                return this.load(t);
              case 25:
                e.t1 = e.sent;
              case 26:
                l = e.t1;
                e.next = 33;
                break;
              case 29:
                e.prev = 29;
                e.t2 = e.catch(18);
                this.emit(ea.SWITCH_URL_FAILED, e.t2);
                throw e.t2;
              case 33:
                this._reloadOnPlay = false;
                if (l) {
                  this.emit(ea.SWITCH_URL_SUCCESS, {
                    url: t
                  });
                }
                return e.abrupt("return", this.media.play(true));
              case 38:
                this._urlSwitching = true;
                this._prevSegSn = null;
                this._prevSegCc = null;
                this._playlist.reset();
                this._bufferService.seamlessSwitch();
                e.next = 45;
                return this._clear();
              case 45:
                e.next = 47;
                return this._loadData(t);
              case 47:
                this._startTick();
              case 48:
                this._switchUrlOpts = null;
              case 49:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[18, 29]]);
      })), function (e) {
        return o.apply(this, arguments);
      })
    }, {
      key: "switchStream",
      value: (l = u(s().mark(function e(t) {
        var i;
        var r;
        var n;
        var a;
        var o;
        var u = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = !(u.length > 1) || u[1] === undefined || u[1];
                r = this.currentStream;
                n = this.streams;
                if (!!r && r.id !== t && !!n && !(n.length < 2)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return");
              case 5:
                if (a = n.find(function (e) {
                  return e.id === t;
                })) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return");
              case 8:
                e.prev = 8;
                e.next = 11;
                return this._clear();
              case 11:
                if (!i) {
                  e.next = 14;
                  break;
                }
                e.next = 14;
                return this._bufferService.clearAllBuffer();
              case 14:
                e.next = 19;
                break;
              case 16:
                e.prev = 16;
                e.t0 = e.catch(8);
                throw this._emitError(mediaErrorHandler.MediaError.create(e.t0));
              case 19:
                if (r.currentAudioStream && a.audioStreams.length > 2) {
                  o = r.currentAudioStream.id;
                  a.currentAudioStream = a.audioStreams.find(function (e) {
                    return e.id === o;
                  }) || a.currentAudioStream;
                }
                this._playlist.currentStream = a;
                e.prev = 21;
                if (!this.isLive && !!a.segments.length) {
                  e.next = 25;
                  break;
                }
                e.next = 25;
                return this._refreshM3U8();
              case 25:
                this._playlist.setNextSegmentByIndex(this._playlist.findSegmentIndexByTime(this.media.currentTime) || 0);
                this._prevSegCc = null;
                e.next = 29;
                return this._loadSegmentDirect();
              case 29:
                e.next = 35;
                break;
              case 31:
                e.prev = 31;
                e.t1 = e.catch(21);
                this._playlist.currentStream = r;
                throw e.t1;
              case 35:
                this._startTick();
                return e.abrupt("return", a);
              case 37:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[8, 16], [21, 31]]);
      })), function (e) {
        return l.apply(this, arguments);
      })
    }, {
      key: "switchAudioStream",
      value: (p = u(s().mark(function e(t) {
        var i;
        var r;
        var n;
        var a;
        var o = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = !(o.length > 1) || o[1] === undefined || o[1];
                if (r = this.currentStream) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return");
              case 4:
                if (!!(n = r.currentAudioStream) && n.id !== t && !(r.audioStreams.length < 2)) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return");
              case 7:
                if (a = r.audioStreams.find(function (e) {
                  return e.id === t;
                })) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return");
              case 10:
                e.prev = 10;
                e.next = 13;
                return this._clear();
              case 13:
                if (!i) {
                  e.next = 16;
                  break;
                }
                e.next = 16;
                return this._bufferService.clearAllBuffer();
              case 16:
                e.next = 21;
                break;
              case 18:
                e.prev = 18;
                e.t0 = e.catch(10);
                throw this._emitError(mediaErrorHandler.MediaError.create(e.t0));
              case 21:
                r.currentAudioStream = a;
                e.prev = 22;
                if (!this.isLive && !!a.segments.length) {
                  e.next = 26;
                  break;
                }
                e.next = 26;
                return this._refreshM3U8();
              case 26:
                this._playlist.setNextSegmentByIndex(this._playlist.findSegmentIndexByTime(this.media.currentTime) || 0);
                this._prevSegCc = null;
                e.next = 30;
                return this._loadSegmentDirect();
              case 30:
                e.next = 36;
                break;
              case 32:
                e.prev = 32;
                e.t1 = e.catch(22);
                r.currentAudioStream = n;
                throw e.t1;
              case 36:
                this._startTick();
                return e.abrupt("return", a);
              case 38:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[10, 18], [22, 32]]);
      })), function (e) {
        return p.apply(this, arguments);
      })
    }, {
      key: "switchSubtitleStream",
      value: (v = u(s().mark(function e(t) {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                this._playlist.switchSubtitle(t);
                e.next = 3;
                return this._manifestLoader.stopPoll();
              case 3:
                e.next = 5;
                return this._refreshM3U8();
              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e) {
        return v.apply(this, arguments);
      })
    }, {
      key: "destroy",
      value: (k = u(s().mark(function e() {
        var t;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (this.media) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                this.removeAllListeners();
                this._playlist.reset();
                this._segmentLoader.reset();
                if ((t = this._seiService) !== null && t !== undefined) {
                  t.reset();
                }
                this.media.removeEventListener("play", this._onPlay);
                this.media.removeEventListener("pause", this._onPause);
                this.media.removeEventListener("seeking", this._onSeeking);
                this.media.removeEventListener("timeupdate", this._onTimeupdate);
                e.next = 12;
                return Promise.all([this._clear(), this._bufferService.destroy()]);
              case 12:
                this.media = null;
              case 13:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return k.apply(this, arguments);
      })
    }, {
      key: "_loadM3U8",
      value: (S = u(s().mark(function e(t) {
        var i;
        var r;
        var a;
        var o;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                e.prev = 0;
                if (!(a = (r = this.config.manifestList) === null || r === undefined ? undefined : r.filter(function (e) {
                  return e.url === t;
                })[0]?.manifest)) {
                  e.next = 6;
                  break;
                }
                e.t0 = this._manifestLoader.parseText(a, t);
                e.next = 9;
                break;
              case 6:
                e.next = 8;
                return this._manifestLoader.load(t);
              case 8:
                e.t0 = e.sent;
              case 9:
                i = _(e.t0, 1)[0];
                e.next = 17;
                break;
              case 14:
                e.prev = 14;
                e.t1 = e.catch(0);
                throw this._emitError(mediaErrorHandler.MediaError.create(e.t1));
              case 17:
                if (i) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return");
              case 19:
                this._playlist.upsertPlaylist(i);
                if (!i.isMaster) {
                  e.next = 24;
                  break;
                }
                if ((o = this._playlist.currentStream.subtitleStreams) !== null && o !== undefined && o.length) {
                  this.emit(ea.SUBTITLE_PLAYLIST, {
                    list: this._playlist.currentStream.subtitleStreams
                  });
                }
                e.next = 24;
                return this._refreshM3U8();
              case 24:
                this.emit(ea.STREAM_PARSED);
                return e.abrupt("return", i);
              case 26:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[0, 14]]);
      })), function (e) {
        return S.apply(this, arguments);
      })
    }, {
      key: "_refreshM3U8",
      value: function () {
        var i = this;
        var r = this._playlist.currentStream;
        if (!r || !r.url) {
          throw this._emitError(mediaErrorHandler.MediaError.create(null, null, Error("m3u8 url is not defined")));
        }
        var n = r.url;
        var s = r.currentAudioStream?.url;
        var a = r.currentSubtitleStream?.url;
        return this._manifestLoader.load(n, s, a).then(function (e) {
          var t = _(e, 3);
          var r = t[0];
          var o = t[1];
          var u = t[2];
          if (r) {
            i._playlist.upsertPlaylist(r, o, u);
            if (i.isLive) {
              i._pollM3U8(n, s, a);
            }
          }
        }).catch(function (e) {
          throw i._emitError(mediaErrorHandler.MediaError.create(e));
        });
      }
    }, {
      key: "_pollM3U8",
      value: function (e, t, i) {
        var r;
        var s = this;
        var a = this._playlist.isEmpty;
        r = this._playlist.lowLatency ? (this._playlist.currentStream.partTargetDuration * 2 || 0) * 1000 : (this._playlist.lastSegment?.duration || 0) * 1000;
        this._manifestLoader.poll(e, t, i, function (e, t, i) {
          s._playlist.upsertPlaylist(e, t, i);
          s._playlist.clearOldSegment();
          if (e && a && !s._playlist.isEmpty || !s._playlist.hadSegmentLoaded && s._playlist.nbSegments >= s.config.minSegmentsStartPlay) {
            s._loadSegment();
          }
          a &&= s._playlist.isEmpty;
        }, function (e) {
          s._emitError(mediaErrorHandler.MediaError.create(e));
        }, r);
      }
    }, {
      key: "_loadSegmentDirect",
      value: (T = u(s().mark(function e(t) {
        var i;
        var r;
        var n;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (i = this._playlist.nextSegment) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return");
              case 3:
                r = false;
                n = null;
                e.prev = 5;
                this._segmentProcessing = true;
                eN.log(`load segment, sn:${i.sn}, partIndex:${i.partIndex}`);
                e.next = 10;
                return this._reqAndBufferSegment(i, this._playlist.getAudioSegment(i));
              case 10:
                r = e.sent;
                e.next = 16;
                break;
              case 13:
                e.prev = 13;
                e.t0 = e.catch(5);
                n = e.t0;
              case 16:
                e.prev = 16;
                this._segmentProcessing = false;
                return e.finish(16);
              case 19:
                if (!n) {
                  e.next = 26;
                  break;
                }
                if (!this._bufferService.isFull()) {
                  e.next = 25;
                  break;
                }
                eN.log(`load segment, sn:${i.sn}, partIndex:${i.partIndex}`);
                this._segmentProcessing = true;
                this._isProcessQuotaExceeded = true;
                return e.abrupt("return", false);
              case 25:
                return e.abrupt("return", this._emitError(mediaErrorHandler.MediaError.create(n)));
              case 26:
                if (r) {
                  if (this._urlSwitching) {
                    this._urlSwitching = false;
                    this.emit(ea.SWITCH_URL_SUCCESS, {
                      url: this.config.url
                    });
                  }
                  this._playlist.moveSegmentPointer();
                  if (i.isLast) {
                    this._end();
                  } else if (!t) {
                    this._loadSegment();
                  }
                }
                return e.abrupt("return", r);
              case 28:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[5, 13, 16, 19]]);
      })), function (e) {
        return T.apply(this, arguments);
      })
    }, {
      key: "_reqAndBufferSegment",
      value: (x = u(s().mark(function e(t, i) {
        var r;
        var n;
        var a;
        var o;
        var u;
        var c;
        var l;
        var h;
        var d;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                n = t ? t.cc : i.cc;
                a = this._prevSegCc !== n;
                o = [];
                e.prev = 3;
                e.next = 6;
                return this._segmentLoader.load(t, i, a);
              case 6:
                o = e.sent;
                e.next = 14;
                break;
              case 9:
                e.prev = 9;
                e.t0 = e.catch(3);
                e.t0.fatal = false;
                this._segmentLoader.error = e.t0;
                throw e.t0;
              case 14:
                if (o[0]) {
                  e.next = 16;
                  break;
                }
                return e.abrupt("return");
              case 16:
                var s;
                e.next = 18;
                return (r = this._bufferService).decryptBuffer.apply(r, function (e) {
                  if (Array.isArray(e)) {
                    return b(e);
                  }
                }(s = o) || function (e) {
                  if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
                    return Array.from(e);
                  }
                }(s) || y(s) || function () {
                  throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }());
              case 18:
                if (u = e.sent) {
                  e.next = 21;
                  break;
                }
                return e.abrupt("return");
              case 21:
                c = t ? t.sn : i.sn;
                l = t ? t.start : i.start;
                h = this._playlist.currentStream;
                this._bufferService.createSource(u[0], u[1], h == null ? undefined : h.videoCodec, h == null ? undefined : h.audioCodec);
                d = Date.now();
                e.next = 28;
                return this._bufferService.appendBuffer(t, i, u[0], u[1], a, this._prevSegSn === c - 1, l);
              case 28:
                this.emit(ea.APPEND_COST, {
                  elapsed: Date.now() - d,
                  url: t.url
                });
                e.next = 31;
                return this._bufferService.evictBuffer(this.config.bufferBehind);
              case 31:
                this._prevSegCc = n;
                this._prevSegSn = c;
                return e.abrupt("return", true);
              case 34:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[3, 9]]);
      })), function (e, t) {
        return x.apply(this, arguments);
      })
    }, {
      key: "_onCheckQuotaExceeded",
      value: (E = u(s().mark(function e() {
        var t;
        var i;
        var r;
        var n;
        var a;
        var o;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                t = this.media.currentTime;
                i = this.media.buffered;
                r = false;
                n = 0;
              case 4:
                if (!(n < i.length)) {
                  e.next = 11;
                  break;
                }
                if (!(i.start(0) >= t) || !(t < i.end(n))) {
                  e.next = 8;
                  break;
                }
                r = true;
                return e.abrupt("break", 11);
              case 8:
                n++;
                e.next = 4;
                break;
              case 11:
                if (!this._bufferService.isFull() || (a = r ? this.config.bufferBehind : 5, !((o = this.media.currentTime) - a > 0))) {
                  e.next = 17;
                  break;
                }
                e.next = 17;
                return this._bufferService.removeBuffer(0, o - a);
              case 17:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return E.apply(this, arguments);
      })
    }, {
      key: "_checkStreamTrackChange",
      value: function (e) {
        var t = this._playlist.checkSegmentTrackChange(e, this._bufferService.nbSb);
        if (t) {
          this.switchURL(this.config.url, t.start + 0.2);
        }
      }
    }, {
      key: "_clear",
      value: (w = u(s().mark(function e() {
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                clearTimeout(this._disconnectTimer);
                this._stopTick();
                e.next = 4;
                return Promise.all([this._segmentLoader.cancel(), this._manifestLoader.stopPoll()]);
              case 4:
                this._segmentProcessing = false;
              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return w.apply(this, arguments);
      })
    }, {
      key: "_reset",
      value: (P = u(s().mark(function e() {
        var t;
        var i;
        var r = arguments;
        return s().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = r.length > 0 && r[0] !== undefined && r[0];
                this._reloadOnPlay = false;
                this._prevSegSn = null;
                this._prevSegCc = null;
                this._switchUrlOpts = null;
                this._playlist.reset();
                this._segmentLoader.reset();
                if ((t = this._seiService) !== null && t !== undefined) {
                  t.reset();
                }
                this._stats.reset();
                e.next = 11;
                return this._clear();
              case 11:
                return e.abrupt("return", this._bufferService.reset(i));
              case 12:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return P.apply(this, arguments);
      })
    }, {
      key: "_end",
      value: function () {
        this._clear();
        this._bufferService.endOfStream();
        if (this.media.readyState <= 2 || this.media.buffered.length > 1) {
          this._startTick();
        }
      }
    }, {
      key: "_stopTick",
      value: function () {
        if (this._tickTimer) {
          clearTimeout(this._tickTimer);
        }
        this._tickTimer = null;
      }
    }, {
      key: "_startTick",
      value: function () {
        this._stopTick();
        this._tickTimer = setTimeout(this._tick, this._tickInterval);
      }
    }, {
      key: "_emitError",
      value: function (e) {
        var r;
        var n;
        var s = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if (e.originError?.fatal === false) {
          eN.warn(e);
        } else {
          eN.table(e);
          eN.error(e);
          eN.error(this.media?.error);
          if ((r = this.media) !== null && r !== undefined && r.readyState) {
            this.media.pause();
          }
          this._stopTick();
          if (this._urlSwitching) {
            this._urlSwitching = false;
            this.emit(ea.SWITCH_URL_FAILED, e);
          }
          this.emit(ea.ERROR, e);
          if (s) {
            this._end();
          }
          if ((n = this._seiService) !== null && n !== undefined) {
            n.reset();
          }
        }
        return e;
      }
    }, {
      key: "_getSeamlessSwitchPoint",
      value: function () {
        var e = this.media;
        var t = e.currentTime;
        if (!e.paused) {
          var i;
          var r = this._playlist.findSegmentIndexByTime(e.currentTime);
          var n = this._playlist.getSegmentByIndex(r);
          var s = (i = this._stats) === null || i === undefined ? undefined : i.getStats().downloadSpeed;
          if (s && n) {
            t += n.duration * this._playlist.currentStream.bitrate / s + 1;
          } else {
            t += 5;
          }
        }
        return t;
      }
    }], [{
      key: "isSupported",
      value: function (e) {
        if (e && e !== "video" && e !== "audio") {
          return typeof WebAssembly != "undefined";
        } else {
          return mseMediaSourceManager.MseManager.isSupported();
        }
      }
    }, {
      key: "enableLogger",
      value: function () {
        customLoggerClass.Logger.enable();
        M.enable();
      }
    }, {
      key: "disableLogger",
      value: function () {
        customLoggerClass.Logger.disable();
        M.disable();
      }
    }]);
    return N;
  }(eventEmitterWrapper_1.eventEmitter);
  d(eM, "version", "3.0.16");
  try {
    if (localStorage.getItem("xgd")) {
      eM.enableLogger();
    } else {
      eM.disableLogger();
    }
  } catch (e) {}
  var eF = function () {
    function e(t, i) {
      var r = this;
      c(this, e);
      d(this, "_opts", null);
      d(this, "_plugin", null);
      d(this, "_onLowDecode", function () {
        var e;
        var t;
        var i;
        var s;
        var a = r._opts;
        var o = a.media;
        var u = a.innerDegrade;
        if ((e = r._plugin) !== null && e !== undefined && (t = e.player) !== null && t !== undefined) {
          t.emit("lowdecode", o.degradeInfo);
        }
        if ((i = r._plugin) !== null && i !== undefined && (s = i.player) !== null && s !== undefined) {
          s.emit("core_event", n(n({}, o.degradeInfo), {}, {
            eventName: ea.LOWDECODE
          }));
        }
        if (u === 1) {
          r._degrade(o.src);
        }
      });
      d(this, "_degrade", function (e) {
        var t = r._plugin.player;
        var i = t.video;
        if (!i || i.TAG === "MVideo") {
          var n = t.video.degradeVideo;
          t.video = n;
          i.degrade(e);
          if (e) {
            t.config.url = e;
          }
          var s = t.root.firstChild;
          if (s.TAG === "MVideo") {
            t.root.replaceChild(n, s);
          }
          var a = r._plugin.constructor.pluginName.toLowerCase();
          t.unRegisterPlugin(a);
          t.once("canplay", function () {
            t.play();
          });
        }
      });
      d(this, "forceDegradeToVideo", function (e) {
        if (r._opts.innerDegrade === 1) {
          r._degrade(e);
        }
      });
      this._opts = t;
      this._plugin = i;
      this._init();
    }
    h(e, [{
      key: "_init",
      value: function () {
        var e = this._opts;
        var t = e.media;
        var i = e.preloadTime;
        var r = e.innerDegrade;
        var n = e.isLive;
        if (t) {
          if (!n && t.setPlayMode) {
            t.setPlayMode("VOD");
            return;
          }
          if (r) {
            t.setAttribute("innerdegrade", r);
          }
          if (i) {
            t.setAttribute("preloadtime", i);
          }
          this._bindEvents();
        }
      }
    }, {
      key: "_bindEvents",
      value: function () {
        this._opts.media.addEventListener("lowdecode", this._onLowDecode);
      }
    }, {
      key: "destroy",
      value: function () {
        var e;
        var t;
        if ((e = this._opts) !== null && e !== undefined && (t = e.media) !== null && t !== undefined) {
          t.removeEventListener("lowdecode", this._onLowDecode);
        }
        this._plugin = null;
      }
    }]);
    return e;
  }();
  var ej = function (e) {
    f(i, e);
    var t = g(i);
    function i() {
      var e;
      c(this, i);
      var r = arguments.length;
      var n = Array(r);
      var s = 0;
      for (; s < r; s++) {
        n[s] = arguments[s];
      }
      d(m(e = t.call.apply(t, [this].concat(n))), "hls", null);
      d(m(e), "pluginExtension", null);
      d(m(e), "getStats", function () {
        var t;
        if ((t = e.hls) === null || t === undefined) {
          return undefined;
        } else {
          return t.getStats();
        }
      });
      d(m(e), "_onSwitchSubtitle", function (t) {
        var i;
        var r = t.lang;
        if ((i = e.hls) !== null && i !== undefined) {
          i.switchSubtitleStream(r);
        }
      });
      d(m(e), "_onSwitchURL", function (t, i) {
        var r = m(e);
        var n = r.player;
        var s = r.hls;
        if (s) {
          var o;
          var u;
          var c = function (e, t) {
            var i = {
              startTime: t.player.currentTime
            };
            switch (a(e)) {
              case "boolean":
                i.seamless = e;
                break;
              case "object":
                Object.assign(i, e);
            }
            return i;
          }(i, m(e));
          n.config.url = t;
          s.switchURL(t, c).catch(function (e) {});
          if (!c.seamless && (o = e.player.config) !== null && o !== undefined && (u = o.hls) !== null && u !== undefined && u.keepStatusAfterSwitch) {
            e._keepPauseStatus();
          }
        }
      });
      d(m(e), "_keepPauseStatus", function () {
        if (e.player.paused) {
          e.player.once("canplay", function () {
            e.player.pause();
          });
        }
      });
      return e;
    }
    h(i, [{
      key: "core",
      get: function () {
        return this.hls;
      }
    }, {
      key: "version",
      get: function () {
        return this.hls?.version;
      }
    }, {
      key: "softDecode",
      get: function () {
        var e;
        var i = (e = this.player) === null || e === undefined ? undefined : e.config?.mediaType;
        return !!i && i !== "video" && i !== "audio";
      }
    }, {
      key: "beforePlayerInit",
      value: function () {
        var e;
        var t = this;
        var i = this.player.config;
        if (i.url || i.__allowHlsEmptyUrl__) {
          if (this.hls) {
            this.hls.destroy();
          }
          this.player.switchURL = this._onSwitchURL;
          this.player.handleSource = false;
          var r = i.hls || {};
          r.innerDegrade = r.innerDegrade || i.innerDegrade;
          if (r.disconnectTime === null || r.disconnectTime === undefined) {
            r.disconnectTime = 0;
          }
          this.hls = new eM(n({
            softDecode: this.softDecode,
            isLive: i.isLive,
            media: this.player.media || this.player.video,
            startTime: i.startTime,
            url: i.url
          }, r));
          if (!this.softDecode) {
            playerPluginBaseClass.PluginBase.defineGetterOrSetter(this.player, {
              url: {
                get: function () {
                  var e;
                  if ((e = t.hls) === null || e === undefined) {
                    return undefined;
                  } else {
                    return e.media?.src;
                  }
                },
                configurable: true
              }
            });
          }
          if (this.softDecode) {
            this.pluginExtension = new eF(n({
              isLive: i.isLive,
              media: this.player.video
            }, r), this);
            this.player.forceDegradeToVideo = function () {
              var e;
              var i = arguments.length;
              var r = Array(i);
              var n = 0;
              for (; n < i; n++) {
                r[n] = arguments[n];
              }
              if ((e = t.pluginExtension) === null || e === undefined) {
                return undefined;
              } else {
                return e.forceDegradeToVideo.apply(e, r);
              }
            };
          }
          if (i.isLive) {
            if ((e = this.player) !== null && e !== undefined) {
              e.useHooks("replay", function () {
                var e;
                if ((e = t.hls) === null || e === undefined) {
                  return undefined;
                } else {
                  return e.replay();
                }
              });
            }
          }
          this.on(videoPlayerEventConstants.SWITCH_SUBTITLE || "switch_subtitle", this._onSwitchSubtitle);
          this.on(videoPlayerEventConstants.URL_CHANGE, this._onSwitchURL);
          this.on(videoPlayerEventConstants.DESTROY, this.destroy.bind(this));
          this._transError();
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.TTFB);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_START);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_RESPONSE_HEADERS);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_COMPLETE);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.LOAD_RETRY);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.SOURCEBUFFER_CREATED);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.REMOVE_BUFFER);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.BUFFEREOS);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.KEYFRAME);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.METADATA_PARSED);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.DEMUXED_TRACK);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.SEI);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.SEI_IN_TIME);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.SPEED);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.HLS_MANIFEST_LOADED);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.HLS_LEVEL_LOADED);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.STREAM_EXCEPTION);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.SWITCH_URL_SUCCESS);
          this._transCoreEvent(mediaCoreEventKeys.mediaCoreEventKeys.SWITCH_URL_FAILED);
          this._transCoreEvent(ea.NO_AUDIO_TRACK);
          this._transCoreEvent(ea.STREAM_PARSED);
          this._transCoreEvent(ea.SUBTITLE_SEGMENTS);
          this._transCoreEvent(ea.SUBTITLE_PLAYLIST);
          this._transCoreEvent(ea.APPEND_COST);
          if (i.url) {
            this.hls.load(i.url, true).catch(function (e) {});
          }
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e;
        if (this.hls) {
          this.hls.destroy();
          this.hls = null;
        }
        if ((e = this.pluginExtension) !== null && e !== undefined) {
          e.destroy();
        }
        this.pluginExtension = null;
      }
    }, {
      key: "_transError",
      value: function () {
        var e = this;
        this.hls.on(ea.ERROR, function (t) {
          if (e.player) {
            e.player.emit(videoPlayerEventConstants.ERROR, new playerErrorHandler.MediaErrorClass(e.player, t));
          }
        });
      }
    }, {
      key: "_transCoreEvent",
      value: function (e) {
        var t = this;
        this.hls.on(e, function (i) {
          if (t.player) {
            t.player.emit("core_event", n(n({}, i), {}, {
              eventName: e
            }));
            if (e === mediaCoreEventKeys.mediaCoreEventKeys.SEI_IN_TIME && t.hls.hasSubtitle) {
              t._emitSeiPaylodTime(i);
            }
          }
        });
      }
    }, {
      key: "_emitSeiPaylodTime",
      value: function (e) {
        try {
          var t = JSON.parse(Array.from(e.data.payload).map(function (e) {
            return String.fromCharCode(e);
          }).join("").slice(0, -1));
          if (!t.rtmp_dts) {
            return;
          }
          this.player.emit("core_event", {
            eventName: ea.SEI_PAYLOAD_TIME,
            time: t.rtmp_dts
          });
        } catch (e) {}
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "hls";
      }
    }, {
      key: "isSupported",
      value: function (e, t) {
        return eM.isSupported(e, t);
      }
    }]);
    return i;
  }(playerPluginBaseClass.PluginBase);
  d(ej, "Hls", eM);
  d(ej, "EVENT", ea);
  require.d(exports, {
    HlsPlugin: function () {
      return ej;
    }
  });
}