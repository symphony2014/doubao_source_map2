// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22948.50e1be4e.js
         * chunkId: 22948
         * moduleId: 930353
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = 0;
    var r = e.length;
    for (; n < r; ++n) {
      t[e[n]] = true;
    }
    return t;
  }
  var i;
  var a = ["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__"];
  var o = r(a);
  var u = r(["def", "class", "case", "for", "while", "until", "module", "catch", "loop", "proc", "begin"]);
  var l = r(["end", "until"]);
  var f = {
    "[": "]",
    "{": "}",
    "(": ")"
  };
  var s = {
    "]": "[",
    "}": "{",
    ")": "("
  };
  function d(e, t, n) {
    n.tokenize.push(e);
    return e(t, n);
  }
  function c(e, t) {
    if (e.sol() && e.match("=begin") && e.eol()) {
      t.tokenize.push(k);
      return "comment";
    }
    if (e.eatSpace()) {
      return null;
    }
    var n;
    var r;
    var a;
    var o = e.next();
    if (o == "`" || o == "'" || o == "\"") {
      return d(p(o, "string", o == "\"" || o == "`"), e, t);
    }
    if (o == "/") {
      if (!function (e) {
        var t;
        var n = e.pos;
        var r = 0;
        var i = false;
        var a = false;
        while ((t = e.next()) != null) {
          if (a) {
            a = false;
          } else {
            if ("[{(".indexOf(t) > -1) {
              r++;
            } else if ("]})".indexOf(t) > -1) {
              if (--r < 0) {
                break;
              }
            } else if (t == "/" && r == 0) {
              i = true;
              break;
            }
            a = t == "\\";
          }
        }
        e.backUp(e.pos - n);
        return i;
      }(e)) {
        return "operator";
      } else {
        return d(p(o, "string.special", true), e, t);
      }
    }
    if (o == "%") {
      var u = "string";
      var l = true;
      if (e.eat("s")) {
        u = "atom";
      } else if (e.eat(/[WQ]/)) {
        u = "string";
      } else if (e.eat(/[r]/)) {
        u = "string.special";
      } else if (e.eat(/[wxq]/)) {
        u = "string";
        l = false;
      }
      var s = e.eat(/[^\w\s=]/);
      if (s) {
        if (f.propertyIsEnumerable(s)) {
          s = f[s];
        }
        return d(p(s, u, l, true), e, t);
      } else {
        return "operator";
      }
    }
    if (o == "#") {
      e.skipToEnd();
      return "comment";
    }
    if (o == "<" && (a = e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) {
      ;
      return d((n = a[2], r = a[1], function (e, t) {
        if (r) {
          e.eatSpace();
        }
        if (e.match(n)) {
          t.tokenize.pop();
        } else {
          e.skipToEnd();
        }
        return "string";
      }), e, t);
    } else if (o == "0") {
      if (e.eat("x")) {
        e.eatWhile(/[\da-fA-F]/);
      } else if (e.eat("b")) {
        e.eatWhile(/[01]/);
      } else {
        e.eatWhile(/[0-7]/);
      }
      return "number";
    } else if (/\d/.test(o)) {
      e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/);
      return "number";
    } else if (o == "?") {
      while (e.match(/^\\[CM]-/));
      if (e.eat("\\")) {
        e.eatWhile(/\w/);
      } else {
        e.next();
      }
      return "string";
    } else {
      if (o == ":") {
        if (e.eat("'")) {
          return d(p("'", "atom", false), e, t);
        } else if (e.eat("\"")) {
          return d(p("\"", "atom", true), e, t);
        } else if (e.eat(/[\<\>]/)) {
          e.eat(/[\<\>]/);
          return "atom";
        } else if (e.eat(/[\+\-\*\/\&\|\:\!]/)) {
          return "atom";
        } else if (e.eat(/[a-zA-Z$@_\xa1-\uffff]/)) {
          e.eatWhile(/[\w$\xa1-\uffff]/);
          e.eat(/[\?\!\=]/);
          return "atom";
        } else {
          return "operator";
        }
      }
      if (o == "@" && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) {
        e.eat("@");
        e.eatWhile(/[\w\xa1-\uffff]/);
        return "propertyName";
      }
      if (o == "$") {
        if (e.eat(/[a-zA-Z_]/)) {
          e.eatWhile(/[\w]/);
        } else if (e.eat(/\d/)) {
          e.eat(/\d/);
        } else {
          e.next();
        }
        return "variableName.special";
      }
      if (/[a-zA-Z_\xa1-\uffff]/.test(o)) {
        e.eatWhile(/[\w\xa1-\uffff]/);
        e.eat(/[\?\!]/);
        if (e.eat(":")) {
          return "atom";
        } else {
          return "variable";
        }
      }
      if (o == "|" && (t.varList || t.lastTok == "{" || t.lastTok == "do")) {
        i = "|";
        return null;
      }
      if (/[\(\)\[\]{}\\;]/.test(o)) {
        i = o;
        return null;
      }
      if (o == "-" && e.eat(">")) {
        return "operator";
      }
      if (!/[=+\-\/*:\.^%<>~|]/.test(o)) {
        return null;
      }
      var c = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
      if (o == "." && !c) {
        i = ".";
      }
      return "operator";
    }
  }
  function p(e, t, n, r) {
    return function (i, a) {
      var o;
      var u = false;
      for (a.context.type === "read-quoted-paused" && (a.context = a.context.prev, i.eat("}")); (o = i.next()) != null;) {
        if (o == e && (r || !u)) {
          a.tokenize.pop();
          break;
        }
        if (n && o == "#" && !u) {
          if (i.eat("{")) {
            if (e == "}") {
              a.context = {
                prev: a.context,
                type: "read-quoted-paused"
              };
            }
            a.tokenize.push(function e(t) {
              t ||= 1;
              return function (n, r) {
                if (n.peek() == "}") {
                  if (t == 1) {
                    r.tokenize.pop();
                    return r.tokenize[r.tokenize.length - 1](n, r);
                  }
                  r.tokenize[r.tokenize.length - 1] = e(t - 1);
                } else if (n.peek() == "{") {
                  r.tokenize[r.tokenize.length - 1] = e(t + 1);
                }
                return c(n, r);
              };
            }());
            break;
          }
          if (/[@\$]/.test(i.peek())) {
            a.tokenize.push(function () {
              var e = false;
              return function (t, n) {
                if (e) {
                  n.tokenize.pop();
                  return n.tokenize[n.tokenize.length - 1](t, n);
                } else {
                  e = true;
                  return c(t, n);
                }
              };
            }());
            break;
          }
        }
        u = !u && o == "\\";
      }
      return t;
    };
  }
  function k(e, t) {
    if (e.sol() && e.match("=end") && e.eol()) {
      t.tokenize.pop();
    }
    e.skipToEnd();
    return "comment";
  }
  let m = {
    name: "ruby",
    startState: function (e) {
      return {
        tokenize: [c],
        indented: 0,
        context: {
          type: "top",
          indented: -e
        },
        continuedLine: false,
        lastTok: null,
        varList: false
      };
    },
    token: function (e, t) {
      i = null;
      if (e.sol()) {
        t.indented = e.indentation();
      }
      var n;
      var r = t.tokenize[t.tokenize.length - 1](e, t);
      var a = i;
      if (r == "variable") {
        var f = e.current();
        if ((r = t.lastTok == "." ? "property" : o.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(f) ? "tag" : t.lastTok == "def" || t.lastTok == "class" || t.varList ? "def" : "variable") == "keyword") {
          a = f;
          if (u.propertyIsEnumerable(f)) {
            n = "indent";
          } else if (l.propertyIsEnumerable(f)) {
            n = "dedent";
          } else if ((f == "if" || f == "unless") && e.column() == e.indentation()) {
            n = "indent";
          } else if (f == "do" && t.context.indented < t.indented) {
            n = "indent";
          }
        }
      }
      if (i || r && r != "comment") {
        t.lastTok = a;
      }
      if (i == "|") {
        t.varList = !t.varList;
      }
      if (n == "indent" || /[\(\[\{]/.test(i)) {
        t.context = {
          prev: t.context,
          type: i || r,
          indented: t.indented
        };
      } else if ((n == "dedent" || /[\)\]\}]/.test(i)) && t.context.prev) {
        t.context = t.context.prev;
      }
      if (e.eol()) {
        t.continuedLine = i == "\\" || r == "operator";
      }
      return r;
    },
    indent: function (e, t, n) {
      if (e.tokenize[e.tokenize.length - 1] != c) {
        return null;
      }
      var r = t && t.charAt(0);
      var i = e.context;
      var a = i.type == s[r] || i.type == "keyword" && /^(?:end|until|else|elsif|when|rescue)\b/.test(t);
      return i.indented + (a ? 0 : n.unit) + (e.continuedLine ? n.unit : 0);
    },
    languageData: {
      indentOnInput: /^\s*(?:end|rescue|elsif|else|\})$/,
      commentTokens: {
        line: "#"
      },
      autocomplete: a
    }
  };
  require.r(exports);
  require.d(exports, {
    ruby: function () {
      return m;
    }
  });
}