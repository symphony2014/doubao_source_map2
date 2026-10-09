// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'abstractFindMathBase'
// - Resolved require(721035) to 'abstract-find-math-base'
// - Renamed variable 'i' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// - Renamed variable 'a' to 'abstractMathItemCore'
// - Resolved require(254335) to 'abstract-math-item-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 971062
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
  exports.FindTeX = undefined;
  var abstractFindMathBase = require("abstract-find-math-base") /*id: 721035*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var abstractMathItemCore = require("abstract-math-item-core") /*id: 254335*/;
  var u = function (t) {
    function e(e) {
      var Q = t.call(this, e) || this;
      Q.getPatterns();
      return Q;
    }
    T(e, t);
    e.prototype.getPatterns = function () {
      var t = this;
      var e = this.options;
      var Q = [];
      var r = [];
      var T = [];
      this.end = {};
      this.env = this.sub = 0;
      var n = 1;
      e.inlineMath.forEach(function (e) {
        return t.addPattern(Q, e, false);
      });
      e.displayMath.forEach(function (e) {
        return t.addPattern(Q, e, true);
      });
      if (Q.length) {
        r.push(Q.sort(stringUtils_1.sortLength).join("|"));
      }
      if (e.processEnvironments) {
        r.push("\\\\begin\\s*\\{([^}]*)\\}");
        this.env = n;
        n++;
      }
      if (e.processEscapes) {
        T.push("\\\\([\\\\$])");
      }
      if (e.processRefs) {
        T.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})");
      }
      if (T.length) {
        r.push("(" + T.join("|") + ")");
        this.sub = n;
      }
      this.start = RegExp(r.join("|"), "g");
      this.hasPatterns = r.length > 0;
    };
    e.prototype.addPattern = function (t, e, Q) {
      var r = n(e, 2);
      var T = r[0];
      var o = r[1];
      t.push(stringUtils_1.quotePattern(T));
      this.end[T] = [o, Q, this.endPattern(o)];
    };
    e.prototype.endPattern = function (t, e) {
      return RegExp((e || stringUtils_1.quotePattern(t)) + "|\\\\(?:[a-zA-Z]|.)|[{}]", "g");
    };
    e.prototype.findEnd = function (t, e, Q, r) {
      var T;
      var o = n(r, 3);
      var i = o[0];
      var u = o[1];
      var s = o[2];
      var l = s.lastIndex = Q.index + Q[0].length;
      var c = 0;
      while (T = s.exec(t)) {
        if ((T[1] || T[0]) === i && c === 0) {
          return abstractMathItemCore.protoItem(Q[0], t.substr(l, T.index - l), T[0], e, Q.index, T.index + T[0].length, u);
        }
        if (T[0] === "{") {
          c++;
        } else if (T[0] === "}" && c) {
          c--;
        }
      }
      return null;
    };
    e.prototype.findMathInString = function (t, e, Q) {
      var r;
      var T;
      for (this.start.lastIndex = 0; r = this.start.exec(Q);) {
        if (r[this.env] !== undefined && this.env) {
          var n = "\\\\end\\s*(\\{" + stringUtils_1.quotePattern(r[this.env]) + "\\})";
          if (T = this.findEnd(Q, e, r, ["{" + r[this.env] + "}", true, this.endPattern(null, n)])) {
            T.math = T.open + T.math + T.close;
            T.open = T.close = "";
          }
        } else if (r[this.sub] !== undefined && this.sub) {
          var o = r[this.sub];
          var n = r.index + r[this.sub].length;
          T = o.length === 2 ? abstractMathItemCore.protoItem("", o.substr(1), "", e, r.index, n) : abstractMathItemCore.protoItem("", o, "", e, r.index, n, false);
        } else {
          T = this.findEnd(Q, e, r, this.end[r[0]]);
        }
        if (T) {
          t.push(T);
          this.start.lastIndex = T.end.n;
        }
      }
    };
    e.prototype.findMath = function (t) {
      var e = [];
      if (this.hasPatterns) {
        var Q = 0;
        var r = t.length;
        for (; Q < r; Q++) {
          this.findMathInString(e, Q, t[Q]);
        }
      }
      return e;
    };
    e.OPTIONS = {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      processRefs: true
    };
    return e;
  }(abstractFindMathBase.AbstractFindMath);
  exports.FindTeX = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}