// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(893631) to 'babel-typeof-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 449959
         */
module.exports = function (module, exports, require) {
  var r = require("babel-typeof-helper") /*id: 893631*/.default;
  function o() {
    "use strict";

    module.exports = o = function () {
      return n;
    };
    module.exports.__esModule = true;
    module.exports.default = module.exports;
    var t;
    var n = {};
    var i = Object.prototype;
    var u = i.hasOwnProperty;
    var a = Object.defineProperty || function (e, t, n) {
      e[t] = n.value;
    };
    var c = typeof Symbol == "function" ? Symbol : {};
    var s = c.iterator || "@@iterator";
    var l = c.asyncIterator || "@@asyncIterator";
    var f = c.toStringTag || "@@toStringTag";
    function p(e, t, n) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return e[t];
    }
    try {
      p({}, "");
    } catch (e) {
      p = function (e, t, n) {
        return e[t] = n;
      };
    }
    function d(e, n, r, o) {
      var i;
      var u;
      var c;
      var s;
      var l = Object.create((n && n.prototype instanceof w ? n : w).prototype);
      a(l, "_invoke", {
        value: (i = e, u = r, c = new S(o || []), s = v, function (e, n) {
          if (s === m) {
            throw Error("Generator is already running");
          }
          if (s === g) {
            if (e === "throw") {
              throw n;
            }
            return {
              value: t,
              done: true
            };
          }
          c.method = e;
          c.arg = n;
          while (true) {
            var r = c.delegate;
            if (r) {
              var o = function e(n, r) {
                var o = r.method;
                var i = n.iterator[o];
                if (i === t) {
                  r.delegate = null;
                  if (o !== "throw" || !n.iterator.return || !(r.method = "return", r.arg = t, e(n, r), r.method === "throw")) {
                    if (o !== "return") {
                      r.method = "throw";
                      r.arg = TypeError("The iterator does not provide a '" + o + "' method");
                    }
                  }
                  return y;
                }
                var u = h(i, n.iterator, r.arg);
                if (u.type === "throw") {
                  r.method = "throw";
                  r.arg = u.arg;
                  r.delegate = null;
                  return y;
                }
                var a = u.arg;
                if (a) {
                  if (a.done) {
                    r[n.resultName] = a.value;
                    r.next = n.nextLoc;
                    if (r.method !== "return") {
                      r.method = "next";
                      r.arg = t;
                    }
                    r.delegate = null;
                    return y;
                  } else {
                    return a;
                  }
                } else {
                  r.method = "throw";
                  r.arg = TypeError("iterator result is not an object");
                  r.delegate = null;
                  return y;
                }
              }(r, c);
              if (o) {
                if (o === y) {
                  continue;
                }
                return o;
              }
            }
            if (c.method === "next") {
              c.sent = c._sent = c.arg;
            } else if (c.method === "throw") {
              if (s === v) {
                s = g;
                throw c.arg;
              }
              c.dispatchException(c.arg);
            } else if (c.method === "return") {
              c.abrupt("return", c.arg);
            }
            s = m;
            var a = h(i, u, c);
            if (a.type === "normal") {
              s = c.done ? g : "suspendedYield";
              if (a.arg === y) {
                continue;
              }
              return {
                value: a.arg,
                done: c.done
              };
            }
            if (a.type === "throw") {
              s = g;
              c.method = "throw";
              c.arg = a.arg;
            }
          }
        })
      });
      return l;
    }
    function h(e, t, n) {
      try {
        return {
          type: "normal",
          arg: e.call(t, n)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }
    n.wrap = d;
    var v = "suspendedStart";
    var m = "executing";
    var g = "completed";
    var y = {};
    function w() {}
    function b() {}
    function x() {}
    var E = {};
    p(E, s, function () {
      return this;
    });
    var k = Object.getPrototypeOf;
    var Z = k && k(k(L([])));
    if (Z && Z !== i && u.call(Z, s)) {
      E = Z;
    }
    var C = x.prototype = w.prototype = Object.create(E);
    function T(e) {
      ["next", "throw", "return"].forEach(function (t) {
        p(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function P(e, t) {
      var n;
      a(this, "_invoke", {
        value: function (o, i) {
          function a() {
            return new t(function (n, a) {
              (function n(o, i, a, c) {
                var s = h(e[o], e, i);
                if (s.type !== "throw") {
                  var l = s.arg;
                  var f = l.value;
                  if (f && r(f) == "object" && u.call(f, "__await")) {
                    return t.resolve(f.__await).then(function (e) {
                      n("next", e, a, c);
                    }, function (e) {
                      n("throw", e, a, c);
                    });
                  } else {
                    return t.resolve(f).then(function (e) {
                      l.value = e;
                      a(l);
                    }, function (e) {
                      return n("throw", e, a, c);
                    });
                  }
                }
                c(s.arg);
              })(o, i, n, a);
            });
          }
          return n = n ? n.then(a, a) : a();
        }
      });
    }
    function M(e) {
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
    function O(e) {
      var t = e.completion || {};
      t.type = "normal";
      delete t.arg;
      e.completion = t;
    }
    function S(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      e.forEach(M, this);
      this.reset(true);
    }
    function L(e) {
      if (e || e === "") {
        var n = e[s];
        if (n) {
          return n.call(e);
        }
        if (typeof e.next == "function") {
          return e;
        }
        if (!isNaN(e.length)) {
          var o = -1;
          var i = function n() {
            while (++o < e.length) {
              if (u.call(e, o)) {
                n.value = e[o];
                n.done = false;
                return n;
              }
            }
            n.value = t;
            n.done = true;
            return n;
          };
          return i.next = i;
        }
      }
      throw TypeError(r(e) + " is not iterable");
    }
    b.prototype = x;
    a(C, "constructor", {
      value: x,
      configurable: true
    });
    a(x, "constructor", {
      value: b,
      configurable: true
    });
    b.displayName = p(x, f, "GeneratorFunction");
    n.isGeneratorFunction = function (e) {
      var t = typeof e == "function" && e.constructor;
      return !!t && (t === b || (t.displayName || t.name) === "GeneratorFunction");
    };
    n.mark = function (e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, x);
      } else {
        e.__proto__ = x;
        p(e, f, "GeneratorFunction");
      }
      e.prototype = Object.create(C);
      return e;
    };
    n.awrap = function (e) {
      return {
        __await: e
      };
    };
    T(P.prototype);
    p(P.prototype, l, function () {
      return this;
    });
    n.AsyncIterator = P;
    n.async = function (e, t, r, o, i = Promise) {
      var u = new P(d(e, t, r, o), i);
      if (n.isGeneratorFunction(t)) {
        return u;
      } else {
        return u.next().then(function (e) {
          if (e.done) {
            return e.value;
          } else {
            return u.next();
          }
        });
      }
    };
    T(C);
    p(C, f, "Generator");
    p(C, s, function () {
      return this;
    });
    p(C, "toString", function () {
      return "[object Generator]";
    });
    n.keys = function (e) {
      var t = Object(e);
      var n = [];
      for (var r in t) {
        n.push(r);
      }
      n.reverse();
      return function e() {
        while (n.length) {
          var r = n.pop();
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
    n.values = L;
    S.prototype = {
      constructor: S,
      reset: function (e) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = t;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = t;
        this.tryEntries.forEach(O);
        if (!e) {
          for (var n in this) {
            if (n.charAt(0) === "t" && u.call(this, n) && !isNaN(+n.slice(1))) {
              this[n] = t;
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
        var n = this;
        function r(r, o) {
          a.type = "throw";
          a.arg = e;
          n.next = r;
          if (o) {
            n.method = "next";
            n.arg = t;
          }
          return !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o];
          var a = i.completion;
          if (i.tryLoc === "root") {
            return r("end");
          }
          if (i.tryLoc <= this.prev) {
            var c = u.call(i, "catchLoc");
            var s = u.call(i, "finallyLoc");
            if (c && s) {
              if (this.prev < i.catchLoc) {
                return r(i.catchLoc, true);
              }
              if (this.prev < i.finallyLoc) {
                return r(i.finallyLoc);
              }
            } else if (c) {
              if (this.prev < i.catchLoc) {
                return r(i.catchLoc, true);
              }
            } else {
              if (!s) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < i.finallyLoc) {
                return r(i.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var r = this.tryEntries[n];
          if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
            var o = r;
            break;
          }
        }
        if (o && (e === "break" || e === "continue") && o.tryLoc <= t && t <= o.finallyLoc) {
          o = null;
        }
        var i = o ? o.completion : {};
        i.type = e;
        i.arg = t;
        if (o) {
          this.method = "next";
          this.next = o.finallyLoc;
          return y;
        } else {
          return this.complete(i);
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
        return y;
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.finallyLoc === e) {
            this.complete(n.completion, n.afterLoc);
            O(n);
            return y;
          }
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.tryLoc === e) {
            var r = n.completion;
            if (r.type === "throw") {
              var o = r.arg;
              O(n);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, n, r) {
        this.delegate = {
          iterator: L(e),
          resultName: n,
          nextLoc: r
        };
        if (this.method === "next") {
          this.arg = t;
        }
        return y;
      }
    };
    return n;
  }
  module.exports = o;
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}