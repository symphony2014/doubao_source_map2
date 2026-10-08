// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(384745) to 'mathml-node-stack-processor'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 's' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 658610
         */
module.exports = function (module, exports, require) {
  var r = this && this.__values || function (t) {
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
  var T = this && this.__read || function (t, e) {
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
  var n = this && this.__spreadArray || function (t, e, Q) {
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
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var i = o(require("mathjax-utilities") /*id: 142412*/);
  var a = o(require("mathml-node-stack-processor") /*id: 384745*/);
  var u = o(require("message-format-util") /*id: 342117*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var l = function () {
    function t(t, e, Q) {
      this._string = t;
      this.configuration = Q;
      this.macroCount = 0;
      this.i = 0;
      this.currentCS = "";
      var T;
      var n;
      var o;
      var i = e.hasOwnProperty("isInner");
      var u = e.isInner;
      delete e.isInner;
      if (e) {
        o = {};
        try {
          var s = r(Object.keys(e));
          var l = s.next();
          for (; !l.done; l = s.next()) {
            var c = l.value;
            o[c] = e[c];
          }
        } catch (t) {
          T = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (n = s.return)) {
              n.call(s);
            }
          } finally {
            if (T) {
              throw T.error;
            }
          }
        }
      }
      this.configuration.pushParser(this);
      this.stack = new a.default(this.itemFactory, o, !i || u);
      this.Parse();
      this.Push(this.itemFactory.create("stop"));
    }
    Object.defineProperty(t.prototype, "options", {
      get: function () {
        return this.configuration.options;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "itemFactory", {
      get: function () {
        return this.configuration.itemFactory;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "tags", {
      get: function () {
        return this.configuration.tags;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "string", {
      get: function () {
        return this._string;
      },
      set: function (t) {
        this._string = t;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.parse = function (t, e) {
      return this.configuration.handlers.get(t).parse(e);
    };
    t.prototype.lookup = function (t, e) {
      return this.configuration.handlers.get(t).lookup(e);
    };
    t.prototype.contains = function (t, e) {
      return this.configuration.handlers.get(t).contains(e);
    };
    t.prototype.toString = function () {
      var t;
      var e;
      var Q = "";
      try {
        var T = r(Array.from(this.configuration.handlers.keys()));
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var o = n.value;
          Q += o + ": " + this.configuration.handlers.get(o) + "\n";
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (n && !n.done && (e = T.return)) {
            e.call(T);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return Q;
    };
    t.prototype.Parse = function () {
      var t;
      for (; this.i < this.string.length;) {
        t = this.getCodePoint();
        this.i += t.length;
        this.parse("character", [this, t]);
      }
    };
    t.prototype.Push = function (t) {
      if (t instanceof mathmlAbstractNodeClasses.AbstractMmlNode && t.isInferred) {
        this.PushAll(t.childNodes);
      } else {
        this.stack.Push(t);
      }
    };
    t.prototype.PushAll = function (t) {
      var e;
      var Q;
      try {
        var T = r(t);
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var o = n.value;
          this.stack.Push(o);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (n && !n.done && (Q = T.return)) {
            Q.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.prototype.mml = function () {
      if (!this.stack.Top().isKind("mml")) {
        return null;
      }
      var t = this.stack.Top().First;
      this.configuration.popParser();
      return t;
    };
    t.prototype.convertDelimiter = function (t) {
      var e = this.lookup("delimiter", t);
      if (e) {
        return e.char;
      } else {
        return null;
      }
    };
    t.prototype.getCodePoint = function () {
      var t = this.string.codePointAt(this.i);
      if (t === undefined) {
        return "";
      } else {
        return String.fromCodePoint(t);
      }
    };
    t.prototype.nextIsSpace = function () {
      return !!this.string.charAt(this.i).match(/\s/);
    };
    t.prototype.GetNext = function () {
      while (this.nextIsSpace()) {
        this.i++;
      }
      return this.getCodePoint();
    };
    t.prototype.GetCS = function () {
      var t = this.string.slice(this.i).match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i);
      if (t) {
        this.i += t[0].length;
        return t[2] || t[1];
      } else {
        this.i++;
        return " ";
      }
    };
    t.prototype.GetArgument = function (t, e) {
      switch (this.GetNext()) {
        case "":
          if (!e) {
            throw new u.default("MissingArgFor", "Missing argument for %1", this.currentCS);
          }
          return null;
        case "}":
          if (!e) {
            throw new u.default("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
          }
          return null;
        case "\\":
          this.i++;
          return "\\" + this.GetCS();
        case "{":
          var Q = ++this.i;
          var r = 1;
          while (this.i < this.string.length) {
            switch (this.string.charAt(this.i++)) {
              case "\\":
                this.i++;
                break;
              case "{":
                r++;
                break;
              case "}":
                if (--r == 0) {
                  return this.string.slice(Q, this.i - 1);
                }
            }
          }
          throw new u.default("MissingCloseBrace", "Missing close brace");
      }
      var T = this.getCodePoint();
      this.i += T.length;
      return T;
    };
    t.prototype.GetBrackets = function (t, e) {
      if (this.GetNext() !== "[") {
        return e;
      }
      var Q = ++this.i;
      var r = 0;
      while (this.i < this.string.length) {
        switch (this.string.charAt(this.i++)) {
          case "{":
            r++;
            break;
          case "\\":
            this.i++;
            break;
          case "}":
            if (r-- <= 0) {
              throw new u.default("ExtraCloseLooking", "Extra close brace while looking for %1", "']'");
            }
            break;
          case "]":
            if (r === 0) {
              return this.string.slice(Q, this.i - 1);
            }
        }
      }
      throw new u.default("MissingCloseBracket", "Could not find closing ']' for argument to %1", this.currentCS);
    };
    t.prototype.GetDelimiter = function (t, e) {
      var Q = this.GetNext();
      this.i += Q.length;
      if (this.i <= this.string.length && (Q === "\\" ? Q += this.GetCS() : Q === "{" && e && (this.i--, Q = this.GetArgument(t).trim()), this.contains("delimiter", Q))) {
        return this.convertDelimiter(Q);
      }
      throw new u.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
    };
    t.prototype.GetDimen = function (t) {
      if (this.GetNext() === "{") {
        var e = this.GetArgument(t);
        var Q = T(i.default.matchDimen(e), 2);
        var r = Q[0];
        var n = Q[1];
        if (r) {
          return r + n;
        }
      } else {
        var e = this.string.slice(this.i);
        var o = T(i.default.matchDimen(e, true), 3);
        var r = o[0];
        var n = o[1];
        var a = o[2];
        if (r) {
          this.i += a;
          return r + n;
        }
      }
      throw new u.default("MissingDimOrUnits", "Missing dimension or its units for %1", this.currentCS);
    };
    t.prototype.GetUpTo = function (t, e) {
      while (this.nextIsSpace()) {
        this.i++;
      }
      var Q = this.i;
      var r = 0;
      while (this.i < this.string.length) {
        var T = this.i;
        var n = this.GetNext();
        this.i += n.length;
        switch (n) {
          case "\\":
            n += this.GetCS();
            break;
          case "{":
            r++;
            break;
          case "}":
            if (r === 0) {
              throw new u.default("ExtraCloseLooking", "Extra close brace while looking for %1", e);
            }
            r--;
        }
        if (r === 0 && n === e) {
          return this.string.slice(Q, T);
        }
      }
      throw new u.default("TokenNotFoundForCommand", "Could not find %1 for %2", e, this.currentCS);
    };
    t.prototype.ParseArg = function (e) {
      return new t(this.GetArgument(e), this.stack.env, this.configuration).mml();
    };
    t.prototype.ParseUpTo = function (e, Q) {
      return new t(this.GetUpTo(e, Q), this.stack.env, this.configuration).mml();
    };
    t.prototype.GetDelimiterArg = function (t) {
      var e = i.default.trimSpaces(this.GetArgument(t));
      if (e === "") {
        return null;
      }
      if (this.contains("delimiter", e)) {
        return e;
      }
      throw new u.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
    };
    t.prototype.GetStar = function () {
      var t = this.GetNext() === "*";
      if (t) {
        this.i++;
      }
      return t;
    };
    t.prototype.create = function (t) {
      var e;
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      return (e = this.configuration.nodeFactory).create.apply(e, n([t], T(Q), false));
    };
    return t;
  }();
  exports.default = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}