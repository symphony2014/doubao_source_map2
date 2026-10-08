// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'c' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'h' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 82218
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
  var n = this && this.__values || function (t) {
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
  var o = this && this.__read || function (t, e) {
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
  var a = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.TextParser = undefined;
  var u = a(require("mathjax-tex-parser") /*id: 658610*/);
  var s = a(require("message-format-util") /*id: 342117*/);
  var l = a(require("mathjax-utilities") /*id: 142412*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var p = a(require("mathml-abstract-node-util") /*id: 352636*/);
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var f = function (t) {
    function e(e, Q, r, T) {
      var n = t.call(this, e, Q, r) || this;
      n.level = T;
      return n;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "texParser", {
      get: function () {
        return this.configuration.packageData.get("textmacros").texParser;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "tags", {
      get: function () {
        return this.texParser.tags;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.mml = function () {
      if (this.level != null) {
        return this.create("node", "mstyle", this.nodes, {
          displaystyle: false,
          scriptlevel: this.level
        });
      } else if (this.nodes.length === 1) {
        return this.nodes[0];
      } else {
        return this.create("node", "mrow", this.nodes);
      }
    };
    e.prototype.Parse = function () {
      this.text = "";
      this.nodes = [];
      this.envStack = [];
      t.prototype.Parse.call(this);
    };
    e.prototype.saveText = function () {
      if (this.text) {
        var t = this.stack.env.mathvariant;
        var e = l.default.internalText(this, this.text, t ? {
          mathvariant: t
        } : {});
        this.text = "";
        this.Push(e);
      }
    };
    e.prototype.Push = function (e) {
      if (this.text) {
        this.saveText();
      }
      if (e instanceof mathjaxEqnarrayTags.StopItem) {
        return t.prototype.Push.call(this, e);
      }
      if (e instanceof mathjaxEqnarrayTags.StyleItem) {
        this.stack.env.mathcolor = this.stack.env.color;
        return;
      }
      if (e instanceof mathmlAbstractNodeClasses.AbstractMmlNode) {
        this.addAttributes(e);
        this.nodes.push(e);
      }
    };
    e.prototype.PushMath = function (t) {
      var e;
      var Q;
      var r = this.stack.env;
      if (!t.isKind("TeXAtom")) {
        t = this.create("node", "TeXAtom", [t]);
      }
      try {
        var T = n(["mathsize", "mathcolor"]);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          if (r[i] && !t.attributes.getExplicit(i)) {
            if (!t.isToken && !t.isKind("mstyle")) {
              t = this.create("node", "mstyle", [t]);
            }
            p.default.setAttribute(t, i, r[i]);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (Q = T.return)) {
            Q.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      if (t.isInferred) {
        t = this.create("node", "mrow", t.childNodes);
      }
      this.nodes.push(t);
    };
    e.prototype.addAttributes = function (t) {
      var e;
      var Q;
      var r = this.stack.env;
      if (t.isToken) {
        try {
          var T = n(["mathsize", "mathcolor", "mathvariant"]);
          var o = T.next();
          for (; !o.done; o = T.next()) {
            var i = o.value;
            if (r[i] && !t.attributes.getExplicit(i)) {
              p.default.setAttribute(t, i, r[i]);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (o && !o.done && (Q = T.return)) {
              Q.call(T);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    e.prototype.ParseTextArg = function (t, Q) {
      return new e(this.GetArgument(t), Q = Object.assign(Object.assign({}, this.stack.env), Q), this.configuration).mml();
    };
    e.prototype.ParseArg = function (t) {
      return new e(this.GetArgument(t), this.stack.env, this.configuration).mml();
    };
    e.prototype.Error = function (t, e) {
      var Q = [];
      var r = 2;
      for (; r < arguments.length; r++) {
        Q[r - 2] = arguments[r];
      }
      throw new (s.default.bind.apply(s.default, i([undefined, t, e], o(Q), false)))();
    };
    return e;
  }(u.default);
  exports.TextParser = f;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}