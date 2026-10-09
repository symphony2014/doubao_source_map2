// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 4177.5a2a9793.js
         * chunkId: 4177
         * moduleId: 219393
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var u;
  var a;
  function o(e, t, n) {
    return function (r, i) {
      while (!r.eol()) {
        if (r.match(t)) {
          i.tokenize = f;
          break;
        }
        r.next();
      }
      if (n) {
        i.tokenize = n;
      }
      return e;
    };
  }
  function c(e) {
    return function (t, n) {
      while (!t.eol()) {
        t.next();
      }
      n.tokenize = f;
      return e;
    };
  }
  function f(e, t) {
    function n(n) {
      t.tokenize = n;
      return n(e, t);
    }
    var r = e.sol();
    var i = e.next();
    switch (i) {
      case "{":
        e.eat("/");
        e.eatSpace();
        e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/);
        t.tokenize = s;
        return "tag";
      case "_":
        if (e.eat("_")) {
          return n(o("strong", "__", f));
        }
        break;
      case "'":
        if (e.eat("'")) {
          return n(o("em", "''", f));
        }
        break;
      case "(":
        if (e.eat("(")) {
          return n(o("link", "))", f));
        }
        break;
      case "[":
        return n(o("url", "]", f));
      case "|":
        if (e.eat("|")) {
          return n(o("comment", "||"));
        }
        break;
      case "-":
        if (e.eat("=")) {
          return n(o("header string", "=-", f));
        }
        if (e.eat("-")) {
          return n(o("error tw-deleted", "--", f));
        }
        break;
      case "=":
        if (e.match("==")) {
          return n(o("tw-underline", "===", f));
        }
        break;
      case ":":
        if (e.eat(":")) {
          return n(o("comment", "::"));
        }
        break;
      case "^":
        return n(o("tw-box", "^"));
      case "~":
        if (e.match("np~")) {
          return n(o("meta", "~/np~"));
        }
    }
    if (r) {
      switch (i) {
        case "!":
          if (e.match("!!!!!")) {
            return n(c("header string"));
          }
          if (e.match("!!!!")) {
            return n(c("header string"));
          }
          if (e.match("!!!")) {
            return n(c("header string"));
          } else if (e.match("!!")) {
            return n(c("header string"));
          } else {
            return n(c("header string"));
          }
        case "*":
        case "#":
        case "+":
          return n(c("tw-listitem bracket"));
      }
    }
    return null;
  }
  function s(e, t) {
    var n;
    var r = e.next();
    var u = e.peek();
    if (r == "}") {
      t.tokenize = f;
      return "tag";
    }
    if (r == "(" || r == ")") {
      return "bracket";
    }
    if (r == "=") {
      i = "equals";
      if (u == ">") {
        e.next();
        u = e.peek();
      }
      if (!/[\'\"]/.test(u)) {
        t.tokenize = function (e, t) {
          while (!e.eol()) {
            var n = e.next();
            var r = e.peek();
            if (n == " " || n == "," || /[ )}]/.test(r)) {
              t.tokenize = s;
              break;
            }
          }
          return "string";
        };
      }
      return "operator";
    }
    if (!/[\'\"]/.test(r)) {
      e.eatWhile(/[^\s\u00a0=\"\'\/?]/);
      return "keyword";
    }
    n = r;
    t.tokenize = function (e, t) {
      while (!e.eol()) {
        if (e.next() == n) {
          t.tokenize = s;
          break;
        }
      }
      return "string";
    };
    return t.tokenize(e, t);
  }
  function l() {
    for (var e = arguments.length - 1; e >= 0; e--) {
      u.cc.push(arguments[e]);
    }
  }
  function k() {
    l.apply(null, arguments);
    return true;
  }
  function d(e, t) {
    var n = u.context && u.context.noIndent;
    u.context = {
      prev: u.context,
      pluginName: e,
      indent: u.indented,
      startOfLine: t,
      noIndent: n
    };
  }
  function g() {
    u.context &&= u.context.prev;
  }
  function p(e) {
    if (e == "keyword") {
      a = "attribute";
      return k(p);
    } else if (e == "equals") {
      return k(m, p);
    } else {
      return l();
    }
  }
  function m(e) {
    if (e == "keyword") {
      a = "string";
      return k();
    } else if (e == "string") {
      return k(x);
    } else {
      return l();
    }
  }
  function x(e) {
    if (e == "string") {
      return k(x);
    } else {
      return l();
    }
  }
  let h = {
    name: "tiki",
    startState: function () {
      return {
        tokenize: f,
        cc: [],
        indented: 0,
        startOfLine: true,
        pluginName: null,
        context: null
      };
    },
    token: function (e, t) {
      if (e.sol()) {
        t.startOfLine = true;
        t.indented = e.indentation();
      }
      if (e.eatSpace()) {
        return null;
      }
      a = i = r = null;
      var n = t.tokenize(e, t);
      if ((n || i) && n != "comment") {
        for (u = t; !(t.cc.pop() || function (e) {
          if (e == "openPlugin") {
            var t;
            u.pluginName = r;
            return k(p, (t = u.startOfLine, function (e) {
              if (e != "selfclosePlugin" && e != "endPlugin") {
                if (e == "endPlugin") {
                  d(u.pluginName, t);
                }
              }
              return k();
            }));
          }
          if (e == "closePlugin") {
            var n;
            var i = false;
            if (u.context) {
              i = u.context.pluginName != r;
              g();
            } else {
              i = true;
            }
            if (i) {
              a = "error";
            }
            return k((n = i, function (e) {
              if (n) {
                a = "error";
              }
              if (e == "endPlugin") {
                return k();
              } else {
                return l();
              }
            }));
          }
          if (e == "string") {
            if (!u.context || u.context.name != "!cdata") {
              d("!cdata");
            }
            if (u.tokenize == f) {
              g();
            }
            return k();
          } else {
            return k();
          }
        })(i || n););
      }
      t.startOfLine = false;
      return a || n;
    },
    indent: function (e, t, n) {
      var r = e.context;
      if (r && r.noIndent) {
        return 0;
      }
      for (r && /^{\//.test(t) && (r = r.prev); r && !r.startOfLine;) {
        r = r.prev;
      }
      if (r) {
        return r.indent + n.unit;
      } else {
        return 0;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    tiki: function () {
      return h;
    }
  });
}