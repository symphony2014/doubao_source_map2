// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'u' to 'mathmlOperatorTable'
// - Resolved require(646582) to 'mathml-operator-table'
// - Renamed variable 's' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 903546
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
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
  var i = this && this.__values || function (t) {
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
  exports.MmlMo = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var mathmlOperatorTable = require("mathml-operator-table") /*id: 646582*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var l = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e._texClass = null;
      e.lspace = 5 / 18;
      e.rspace = 5 / 18;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "texClass", {
      get: function () {
        if (this._texClass === null) {
          var t = this.getText();
          var e = o(this.handleExplicitForm(this.getForms()), 3);
          var Q = e[0];
          var r = e[1];
          var T = e[2];
          var n = this.constructor.OPTABLE;
          var i = n[Q][t] || n[r][t] || n[T][t];
          if (i) {
            return i[2];
          } else {
            return mathmlAbstractNodeClasses.TEXCLASS.REL;
          }
        }
        return this._texClass;
      },
      set: function (t) {
        this._texClass = t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mo";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isEmbellished", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "hasNewLine", {
      get: function () {
        return this.attributes.get("linebreak") === "newline";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.coreParent = function () {
      var t = this;
      var e = this;
      var Q = this.factory.getNodeClass("math");
      while (e && e.isEmbellished && e.coreMO() === this && !(e instanceof Q)) {
        t = e;
        e = e.parent;
      }
      return t;
    };
    e.prototype.coreText = function (t) {
      if (!t) {
        return "";
      }
      if (t.isEmbellished) {
        return t.coreMO().getText();
      }
      while (((t.isKind("mrow") || t.isKind("TeXAtom") && t.texClass !== mathmlAbstractNodeClasses.TEXCLASS.VCENTER || t.isKind("mstyle") || t.isKind("mphantom")) && t.childNodes.length === 1 || t.isKind("munderover")) && t.childNodes[0]) {
        t = t.childNodes[0];
      }
      if (t.isToken) {
        return t.getText();
      } else {
        return "";
      }
    };
    e.prototype.hasSpacingAttributes = function () {
      return this.attributes.isSet("lspace") || this.attributes.isSet("rspace");
    };
    Object.defineProperty(e.prototype, "isAccent", {
      get: function () {
        var t = false;
        var e = this.coreParent().parent;
        if (e) {
          var Q = e.isKind("mover") ? e.childNodes[e.over].coreMO() ? "accent" : "" : e.isKind("munder") ? e.childNodes[e.under].coreMO() ? "accentunder" : "" : e.isKind("munderover") ? this === e.childNodes[e.over].coreMO() ? "accent" : this === e.childNodes[e.under].coreMO() ? "accentunder" : "" : "";
          if (Q) {
            t = e.attributes.getExplicit(Q) !== undefined ? t : this.attributes.get("accent");
          }
        }
        return t;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setTeXclass = function (t) {
      var e = this.attributes.getList("form", "fence");
      var Q = e.form;
      var r = e.fence;
      if (this.getProperty("texClass") === undefined && (this.attributes.isSet("lspace") || this.attributes.isSet("rspace"))) {
        return null;
      } else {
        if (r && this.texClass === mathmlAbstractNodeClasses.TEXCLASS.REL) {
          if (Q === "prefix") {
            this.texClass = mathmlAbstractNodeClasses.TEXCLASS.OPEN;
          }
          if (Q === "postfix") {
            this.texClass = mathmlAbstractNodeClasses.TEXCLASS.CLOSE;
          }
        }
        return this.adjustTeXclass(t);
      }
    };
    e.prototype.adjustTeXclass = function (t) {
      var e = this.texClass;
      var Q = this.prevClass;
      if (e === mathmlAbstractNodeClasses.TEXCLASS.NONE) {
        return t;
      }
      if (t) {
        if (t.getProperty("autoOP") && (e === mathmlAbstractNodeClasses.TEXCLASS.BIN || e === mathmlAbstractNodeClasses.TEXCLASS.REL)) {
          Q = t.texClass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
        }
        Q = this.prevClass = t.texClass || mathmlAbstractNodeClasses.TEXCLASS.ORD;
        this.prevLevel = this.attributes.getInherited("scriptlevel");
      } else {
        Q = this.prevClass = mathmlAbstractNodeClasses.TEXCLASS.NONE;
      }
      if (e === mathmlAbstractNodeClasses.TEXCLASS.BIN && (Q === mathmlAbstractNodeClasses.TEXCLASS.NONE || Q === mathmlAbstractNodeClasses.TEXCLASS.BIN || Q === mathmlAbstractNodeClasses.TEXCLASS.OP || Q === mathmlAbstractNodeClasses.TEXCLASS.REL || Q === mathmlAbstractNodeClasses.TEXCLASS.OPEN || Q === mathmlAbstractNodeClasses.TEXCLASS.PUNCT)) {
        this.texClass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
      } else if (Q === mathmlAbstractNodeClasses.TEXCLASS.BIN && (e === mathmlAbstractNodeClasses.TEXCLASS.REL || e === mathmlAbstractNodeClasses.TEXCLASS.CLOSE || e === mathmlAbstractNodeClasses.TEXCLASS.PUNCT)) {
        t.texClass = this.prevClass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
      } else if (e === mathmlAbstractNodeClasses.TEXCLASS.BIN) {
        var r = this;
        var T = this.parent;
        while (T && T.parent && T.isEmbellished && (T.childNodes.length === 1 || !T.isKind("mrow") && T.core() === r)) {
          r = T;
          T = T.parent;
        }
        if (T.childNodes[T.childNodes.length - 1] === r) {
          this.texClass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
        }
      }
      return this;
    };
    e.prototype.setInheritedAttributes = function (e = {}, Q = false, r = 0, T = false) {
      t.prototype.setInheritedAttributes.call(this, e, Q, r, T);
      var n = this.getText();
      this.checkOperatorTable(n);
      this.checkPseudoScripts(n);
      this.checkPrimes(n);
      this.checkMathAccent(n);
    };
    e.prototype.checkOperatorTable = function (t) {
      var e;
      var Q;
      var r = o(this.handleExplicitForm(this.getForms()), 3);
      var T = r[0];
      var n = r[1];
      var a = r[2];
      this.attributes.setInherited("form", T);
      var s = this.constructor.OPTABLE;
      var l = s[T][t] || s[n][t] || s[a][t];
      if (l) {
        if (this.getProperty("texClass") === undefined) {
          this.texClass = l[2];
        }
        try {
          var c = i(Object.keys(l[3] || {}));
          var p = c.next();
          for (; !p.done; p = c.next()) {
            var h = p.value;
            this.attributes.setInherited(h, l[3][h]);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (p && !p.done && (Q = c.return)) {
              Q.call(c);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        this.lspace = (l[0] + 1) / 18;
        this.rspace = (l[1] + 1) / 18;
      } else {
        var f = mathmlOperatorTable.getRange(t);
        if (f) {
          if (this.getProperty("texClass") === undefined) {
            this.texClass = f[2];
          }
          var d = this.constructor.MMLSPACING[f[2]];
          this.lspace = (d[0] + 1) / 18;
          this.rspace = (d[1] + 1) / 18;
        }
      }
    };
    e.prototype.getForms = function () {
      var t = this;
      var e = this.parent;
      var Q = this.Parent;
      while (Q && Q.isEmbellished) {
        t = e;
        e = Q.parent;
        Q = Q.Parent;
      }
      if (e && e.isKind("mrow") && e.nonSpaceLength() !== 1) {
        if (e.firstNonSpace() === t) {
          return ["prefix", "infix", "postfix"];
        }
        if (e.lastNonSpace() === t) {
          return ["postfix", "infix", "prefix"];
        }
      }
      return ["infix", "prefix", "postfix"];
    };
    e.prototype.handleExplicitForm = function (t) {
      if (this.attributes.isSet("form")) {
        var e = this.attributes.get("form");
        t = [e].concat(t.filter(function (t) {
          return t !== e;
        }));
      }
      return t;
    };
    e.prototype.checkPseudoScripts = function (t) {
      var e = this.constructor.pseudoScripts;
      if (t.match(e)) {
        var Q = this.coreParent().Parent;
        var r = !Q || !Q.isKind("msubsup") || !!Q.isKind("msub");
        this.setProperty("pseudoscript", r);
        if (r) {
          this.attributes.setInherited("lspace", 0);
          this.attributes.setInherited("rspace", 0);
        }
      }
    };
    e.prototype.checkPrimes = function (t) {
      var e = this.constructor.primes;
      if (t.match(e)) {
        var Q = this.constructor.remapPrimes;
        var r = stringUtils_1.unicodeString(stringUtils_1.unicodeChars(t).map(function (t) {
          return Q[t];
        }));
        this.setProperty("primes", r);
      }
    };
    e.prototype.checkMathAccent = function (t) {
      var e = this.Parent;
      if (this.getProperty("mathaccent") === undefined && e && e.isKind("munderover")) {
        var Q = e.childNodes[0];
        if (!Q.isEmbellished || Q.coreMO() !== this) {
          var r = this.constructor.mathaccents;
          if (t.match(r)) {
            this.setProperty("mathaccent", true);
          }
        }
      }
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlTokenNode.defaults), {
      form: "infix",
      fence: false,
      separator: false,
      lspace: "thickmathspace",
      rspace: "thickmathspace",
      stretchy: false,
      symmetric: false,
      maxsize: "infinity",
      minsize: "0em",
      largeop: false,
      movablelimits: false,
      accent: false,
      linebreak: "auto",
      lineleading: "1ex",
      linebreakstyle: "before",
      indentalign: "auto",
      indentshift: "0",
      indenttarget: "",
      indentalignfirst: "indentalign",
      indentshiftfirst: "indentshift",
      indentalignlast: "indentalign",
      indentshiftlast: "indentshift"
    });
    e.MMLSPACING = mathmlOperatorTable.MMLSPACING;
    e.OPTABLE = mathmlOperatorTable.OPTABLE;
    e.pseudoScripts = RegExp("^[\"'*`ª°²-´¹º‘-‟′-‷⁗⁰ⁱ⁴-ⁿ₀-₎]+$");
    e.primes = RegExp("^[\"'`‘-‟]+$");
    e.remapPrimes = {
      34: 8243,
      39: 8242,
      96: 8245,
      8216: 8245,
      8217: 8242,
      8218: 8242,
      8219: 8245,
      8220: 8246,
      8221: 8243,
      8222: 8243,
      8223: 8246
    };
    e.mathaccents = RegExp("^[´́ˊ`̀ˋ¨̈~̃˜¯̄ˉ˘̆ˇ̌^̂ˆ→⃗˙̇˚̊⃛⃜]$");
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlTokenNode);
  exports.MmlMo = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}