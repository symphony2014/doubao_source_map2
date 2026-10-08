// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'symbolMacroClasses'
// - Resolved require(41578) to 'symbol-macro-classes'
// - Renamed variable 'u' to 'priorityHandlerConfig'
// - Resolved require(706684) to 'priority-handler-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 664746
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var o = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var i = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.EnvironmentMap = exports.CommandMap = exports.MacroMap = exports.DelimiterMap = exports.CharacterMap = exports.AbstractParseMap = exports.RegExpMap = exports.AbstractSymbolMap = exports.parseResult = undefined;
  var symbolMacroClasses = require("symbol-macro-classes") /*id: 41578*/;
  var priorityHandlerConfig = require("priority-handler-config") /*id: 706684*/;
  function s(t) {
    return t === undefined || t;
  }
  exports.parseResult = s;
  var l = function () {
    function t(t, e) {
      this._name = t;
      this._parser = e;
      priorityHandlerConfig.MapHandler.register(this);
    }
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return this._name;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.parserFor = function (t) {
      if (this.contains(t)) {
        return this.parser;
      } else {
        return null;
      }
    };
    t.prototype.parse = function (t) {
      var e = n(t, 2);
      var Q = e[0];
      var r = e[1];
      var T = this.parserFor(r);
      var o = this.lookup(r);
      if (T && o) {
        return s(T(Q, o));
      } else {
        return null;
      }
    };
    Object.defineProperty(t.prototype, "parser", {
      get: function () {
        return this._parser;
      },
      set: function (t) {
        this._parser = t;
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }();
  exports.AbstractSymbolMap = l;
  var c = function (t) {
    function e(e, Q, r) {
      var T = t.call(this, e, Q) || this;
      T._regExp = r;
      return T;
    }
    T(e, t);
    e.prototype.contains = function (t) {
      return this._regExp.test(t);
    };
    e.prototype.lookup = function (t) {
      if (this.contains(t)) {
        return t;
      } else {
        return null;
      }
    };
    return e;
  }(l);
  exports.RegExpMap = c;
  var p = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.map = new Map();
      return e;
    }
    T(e, t);
    e.prototype.lookup = function (t) {
      return this.map.get(t);
    };
    e.prototype.contains = function (t) {
      return this.map.has(t);
    };
    e.prototype.add = function (t, e) {
      this.map.set(t, e);
    };
    e.prototype.remove = function (t) {
      this.map.delete(t);
    };
    return e;
  }(l);
  exports.AbstractParseMap = p;
  var h = function (t) {
    function e(e, Q, r) {
      var T;
      var i;
      var u = t.call(this, e, Q) || this;
      try {
        var s = o(Object.keys(r));
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var c = l.value;
          var p = r[c];
          var h = n(typeof p == "string" ? [p, null] : p, 2);
          var f = h[0];
          var d = h[1];
          var D = new symbolMacroClasses.Symbol(c, f, d);
          u.add(c, D);
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (i = s.return)) {
            i.call(s);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
      return u;
    }
    T(e, t);
    return e;
  }(p);
  exports.CharacterMap = h;
  var f = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.parse = function (e) {
      var Q = n(e, 2);
      var r = Q[0];
      var T = Q[1];
      return t.prototype.parse.call(this, [r, "\\" + T]);
    };
    return e;
  }(h);
  exports.DelimiterMap = f;
  var d = function (t) {
    function e(e, Q, r) {
      var T;
      var i;
      var u = t.call(this, e, null) || this;
      try {
        var s = o(Object.keys(Q));
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var c = l.value;
          var p = Q[c];
          var h = n(typeof p == "string" ? [p] : p);
          var f = h[0];
          var d = h.slice(1);
          var D = new symbolMacroClasses.Macro(c, r[f], d);
          u.add(c, D);
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (i = s.return)) {
            i.call(s);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
      return u;
    }
    T(e, t);
    e.prototype.parserFor = function (t) {
      var e = this.lookup(t);
      if (e) {
        return e.func;
      } else {
        return null;
      }
    };
    e.prototype.parse = function (t) {
      var e = n(t, 2);
      var Q = e[0];
      var r = e[1];
      var T = this.lookup(r);
      var o = this.parserFor(r);
      if (T && o) {
        return s(o.apply(undefined, i([Q, T.symbol], n(T.args), false)));
      } else {
        return null;
      }
    };
    return e;
  }(p);
  exports.MacroMap = d;
  var D = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.parse = function (t) {
      var e = n(t, 2);
      var Q = e[0];
      var r = e[1];
      var T = this.lookup(r);
      var o = this.parserFor(r);
      if (!T || !o) {
        return null;
      }
      var a = Q.currentCS;
      Q.currentCS = "\\" + r;
      var u = o.apply(undefined, i([Q, "\\" + T.symbol], n(T.args), false));
      Q.currentCS = a;
      return s(u);
    };
    return e;
  }(d);
  exports.CommandMap = D;
  var L = function (t) {
    function e(e, Q, r, T) {
      var n = t.call(this, e, r, T) || this;
      n.parser = Q;
      return n;
    }
    T(e, t);
    e.prototype.parse = function (t) {
      var e = n(t, 2);
      var Q = e[0];
      var r = e[1];
      var T = this.lookup(r);
      var o = this.parserFor(r);
      if (T && o) {
        return s(this.parser(Q, T.symbol, o, T.args));
      } else {
        return null;
      }
    };
    return e;
  }(d);
  exports.EnvironmentMap = L;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}