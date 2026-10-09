// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 48475.80dcfc5e.js
         * chunkId: 48475
         * moduleId: 399702
         */
module.exports = function (module, exports, require) {
  function r(t) {
    function e(t, e) {
      t.cmdState.push(e);
    }
    function n(t) {
      if (t.cmdState.length > 0) {
        return t.cmdState[t.cmdState.length - 1];
      } else {
        return null;
      }
    }
    function r(t, e, n) {
      return function () {
        this.name = t;
        this.bracketNo = 0;
        this.style = e;
        this.styles = n;
        this.argument = null;
        this.styleIdentifier = function () {
          return this.styles[this.bracketNo - 1] || null;
        };
        this.openBracket = function () {
          this.bracketNo++;
          return "bracket";
        };
        this.closeBracket = function () {};
      };
    }
    var a = {};
    function i(t, r) {
      if (t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)) {
        var i;
        var f;
        var o;
        var m;
        var s;
        var l = t.current().slice(1);
        e(r, s = new (s = a.hasOwnProperty(l) ? a[l] : a.DEFAULT)());
        r.f = u;
        return s.style;
      }
      if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/\\]/)) {
        return "tag";
      }
      if (t.match("\\[")) {
        i = function (t, e) {
          return c(t, e, "\\]");
        };
        r.f = i;
        return "keyword";
      }
      if (t.match("\\(")) {
        f = function (t, e) {
          return c(t, e, "\\)");
        };
        r.f = f;
        return "keyword";
      }
      if (t.match("$$")) {
        o = function (t, e) {
          return c(t, e, "$$");
        };
        r.f = o;
        return "keyword";
      }
      if (t.match("$")) {
        m = function (t, e) {
          return c(t, e, "$");
        };
        r.f = m;
        return "keyword";
      }
      var h = t.next();
      if (h == "%") {
        t.skipToEnd();
        return "comment";
      }
      if (h == "}" || h == "]") {
        if (s = n(r)) {
          s.closeBracket(h);
          r.f = u;
          return "bracket";
        } else {
          return "error";
        }
      }
      if (h == "{" || h == "[") {
        e(r, s = new (s = a.DEFAULT)());
        return "bracket";
      } else if (/\d/.test(h)) {
        t.eatWhile(/[\w.%]/);
        return "atom";
      } else {
        t.eatWhile(/[\w\-_]/);
        if ((s = function (t) {
          var e = t.cmdState;
          var n = e.length - 1;
          for (; n >= 0; n--) {
            var r = e[n];
            if (r.name != "DEFAULT") {
              return r;
            }
          }
          return {
            styleIdentifier: function () {
              return null;
            }
          };
        }(r)).name == "begin") {
          s.argument = t.current();
        }
        return s.styleIdentifier();
      }
    }
    function c(t, e, n) {
      if (t.eatSpace()) {
        return null;
      }
      if (n && t.match(n)) {
        e.f = i;
        return "keyword";
      }
      if (t.match(/^\\[a-zA-Z@]+/)) {
        return "tag";
      }
      if (t.match(/^[a-zA-Z]+/)) {
        return "variableName.special";
      }
      if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/]/) || t.match(/^[\^_&]/)) {
        return "tag";
      }
      if (t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) {
        return null;
      }
      if (t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) {
        return "number";
      }
      var r = t.next();
      if (r == "{" || r == "}" || r == "[" || r == "]" || r == "(" || r == ")") {
        return "bracket";
      } else if (r == "%") {
        t.skipToEnd();
        return "comment";
      } else {
        return "error";
      }
    }
    function u(t, e) {
      var r;
      var a = t.peek();
      if (a == "{" || a == "[") {
        n(e).openBracket(a);
        t.eat(a);
        e.f = i;
        return "bracket";
      } else if (/[ \t\r]/.test(a)) {
        t.eat(a);
        return null;
      } else {
        e.f = i;
        if (r = e.cmdState.pop()) {
          r.closeBracket();
        }
        return i(t, e);
      }
    }
    a.importmodule = r("importmodule", "tag", ["string", "builtin"]);
    a.documentclass = r("documentclass", "tag", ["", "atom"]);
    a.usepackage = r("usepackage", "tag", ["atom"]);
    a.begin = r("begin", "tag", ["atom"]);
    a.end = r("end", "tag", ["atom"]);
    a.label = r("label", "tag", ["atom"]);
    a.ref = r("ref", "tag", ["atom"]);
    a.eqref = r("eqref", "tag", ["atom"]);
    a.cite = r("cite", "tag", ["atom"]);
    a.bibitem = r("bibitem", "tag", ["atom"]);
    a.Bibitem = r("Bibitem", "tag", ["atom"]);
    a.RBibitem = r("RBibitem", "tag", ["atom"]);
    a.DEFAULT = function () {
      this.name = "DEFAULT";
      this.style = "tag";
      this.styleIdentifier = this.openBracket = this.closeBracket = function () {};
    };
    return {
      name: "stex",
      startState: function () {
        return {
          cmdState: [],
          f: t ? function (t, e) {
            return c(t, e);
          } : i
        };
      },
      copyState: function (t) {
        return {
          cmdState: t.cmdState.slice(),
          f: t.f
        };
      },
      token: function (t, e) {
        return e.f(t, e);
      },
      blankLine: function (t) {
        t.f = i;
        t.cmdState.length = 0;
      },
      languageData: {
        commentTokens: {
          line: "%"
        }
      }
    };
  }
  let a = r(false);
  let i = r(true);
  require.r(exports);
  require.d(exports, {
    stex: function () {
      return a;
    },
    stexMath: function () {
      return i;
    }
  });
}