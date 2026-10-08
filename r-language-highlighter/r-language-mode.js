// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'rLanguageMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 25272.2b77c3c2.js
         * chunkId: 25272
         * moduleId: 311736
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = 0;
    for (; n < e.length; ++n) {
      t[e[n]] = true;
    }
    return t;
  }
  var a;
  var i = ["NULL", "NA", "Inf", "NaN", "NA_integer_", "NA_real_", "NA_complex_", "NA_character_", "TRUE", "FALSE"];
  var c = ["list", "quote", "bquote", "eval", "return", "call", "parse", "deparse"];
  var l = ["if", "else", "repeat", "while", "function", "for", "in", "next", "break"];
  var u = r(i);
  var o = r(c);
  var f = r(l);
  var s = r(["if", "else", "repeat", "while", "function", "for"]);
  var p = /[+\-*\/^<>=!&|~$:]/;
  function m(e, t) {
    a = null;
    var n;
    var r = e.next();
    if (r == "#") {
      e.skipToEnd();
      return "comment";
    }
    if (r == "0" && e.eat("x")) {
      e.eatWhile(/[\da-f]/i);
      return "number";
    }
    if (r == "." && e.eat(/\d/)) {
      e.match(/\d*(?:e[+\-]?\d+)?/);
      return "number";
    }
    if (/\d/.test(r)) {
      e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/);
      return "number";
    }
    if (r == "'" || r == "\"") {
      ;
      n = r;
      t.tokenize = function (e, t) {
        if (e.eat("\\")) {
          var r;
          var a = e.next();
          if (a == "x") {
            e.match(/^[a-f0-9]{2}/i);
          } else if ((a == "u" || a == "U") && e.eat("{") && e.skipTo("}")) {
            e.next();
          } else if (a == "u") {
            e.match(/^[a-f0-9]{4}/i);
          } else if (a == "U") {
            e.match(/^[a-f0-9]{8}/i);
          } else if (/[0-7]/.test(a)) {
            e.match(/^[0-7]{1,2}/);
          }
          return "string.special";
        }
        while ((r = e.next()) != null) {
          if (r == n) {
            t.tokenize = m;
            break;
          }
          if (r == "\\") {
            e.backUp(1);
            break;
          }
        }
        return "string";
      };
      return "string";
    } else if (r == "`") {
      e.match(/[^`]+`/);
      return "string.special";
    } else if (r == "." && e.match(/.(?:[.]|\d+)/)) {
      return "keyword";
    } else if (/[a-zA-Z\.]/.test(r)) {
      e.eatWhile(/[\w\.]/);
      var i = e.current();
      if (u.propertyIsEnumerable(i)) {
        return "atom";
      } else if (f.propertyIsEnumerable(i)) {
        if (s.propertyIsEnumerable(i) && !e.match(/\s*if(\s+|$)/, false)) {
          a = "block";
        }
        return "keyword";
      } else if (o.propertyIsEnumerable(i)) {
        return "builtin";
      } else {
        return "variable";
      }
    } else if (r == "%") {
      if (e.skipTo("%")) {
        e.next();
      }
      return "variableName.special";
    } else if (r == "<" && e.eat("-") || r == "<" && e.match("<-") || r == "-" && e.match(/>>?/)) {
      return "operator";
    } else if (r == "=" && t.ctx.argList) {
      return "operator";
    } else if (p.test(r)) {
      if (r != "$") {
        e.eatWhile(p);
      }
      return "operator";
    } else if (!/[\(\){}\[\];]/.test(r)) {
      return null;
    } else {
      a = r;
      if (r == ";") {
        return "punctuation";
      } else {
        return null;
      }
    }
  }
  function d(e, t, n) {
    e.ctx = {
      type: t,
      indent: e.indent,
      flags: 0,
      column: n.column(),
      prev: e.ctx
    };
  }
  function x(e, t) {
    var n = e.ctx;
    e.ctx = {
      type: n.type,
      indent: n.indent,
      flags: n.flags | t,
      column: n.column,
      prev: n.prev
    };
  }
  function k(e) {
    e.indent = e.ctx.indent;
    e.ctx = e.ctx.prev;
  }
  let b = {
    name: "r",
    startState: function (e) {
      return {
        tokenize: m,
        ctx: {
          type: "top",
          indent: -e,
          flags: 2
        },
        indent: 0,
        afterIdent: false
      };
    },
    token: function (e, t) {
      if (e.sol()) {
        if ((t.ctx.flags & 3) == 0) {
          t.ctx.flags |= 2;
        }
        if (t.ctx.flags & 4) {
          k(t);
        }
        t.indent = e.indentation();
      }
      if (e.eatSpace()) {
        return null;
      }
      var n = t.tokenize(e, t);
      if (n != "comment" && (t.ctx.flags & 2) == 0) {
        x(t, 1);
      }
      if ((a == ";" || a == "{" || a == "}") && t.ctx.type == "block") {
        k(t);
      }
      if (a == "{") {
        d(t, "}", e);
      } else if (a == "(") {
        d(t, ")", e);
        if (t.afterIdent) {
          t.ctx.argList = true;
        }
      } else if (a == "[") {
        d(t, "]", e);
      } else if (a == "block") {
        d(t, "block", e);
      } else if (a == t.ctx.type) {
        k(t);
      } else if (t.ctx.type == "block" && n != "comment") {
        x(t, 4);
      }
      t.afterIdent = n == "variable" || n == "keyword";
      return n;
    },
    indent: function (e, t, n) {
      if (e.tokenize != m) {
        return 0;
      }
      var r = t && t.charAt(0);
      var a = e.ctx;
      var i = r == a.type;
      if (a.flags & 4) {
        a = a.prev;
      }
      if (a.type == "block") {
        return a.indent + (r == "{" ? 0 : n.unit);
      } else if (a.flags & 1) {
        return a.column + +!i;
      } else {
        return a.indent + (i ? 0 : n.unit);
      }
    },
    languageData: {
      wordChars: ".",
      commentTokens: {
        line: "#"
      },
      autocomplete: i.concat(c, l)
    }
  };
  require.r(exports);
  require.d(exports, {
    rLanguageMode: function () {
      return b;
    }
  });
}