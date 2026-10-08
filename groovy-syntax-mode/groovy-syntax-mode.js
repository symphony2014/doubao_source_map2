// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52116.a5841517.js
         * chunkId: 52116
         * moduleId: 987654
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  var i;
  var a = r("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while");
  var o = r("catch class def do else enum finally for if interface switch trait try while");
  var l = r("return break continue");
  var s = r("null true false this");
  function u(e, t) {
    var n = e.next();
    if (n == "\"" || n == "'") {
      return f(n, e, t);
    }
    if (/[\[\]{}\(\),;\:\.]/.test(n)) {
      i = n;
      return null;
    }
    if (/\d/.test(n)) {
      e.eatWhile(/[\w\.]/);
      if (e.eat(/eE/)) {
        e.eat(/\+\-/);
        e.eatWhile(/\d/);
      }
      return "number";
    }
    if (n == "/") {
      if (e.eat("*")) {
        t.tokenize.push(p);
        return p(e, t);
      }
      if (e.eat("/")) {
        e.skipToEnd();
        return "comment";
      }
      if (m(t.lastToken, false)) {
        return f(n, e, t);
      }
    }
    if (n == "-" && e.eat(">")) {
      i = "->";
      return null;
    }
    if (/[+\-*&%=<>!?|\/~]/.test(n)) {
      e.eatWhile(/[+\-*&%=<>|~]/);
      return "operator";
    }
    e.eatWhile(/[\w\$_]/);
    if (n == "@") {
      e.eatWhile(/[\w\$_\.]/);
      return "meta";
    }
    if (t.lastToken == ".") {
      return "property";
    }
    if (e.eat(":")) {
      i = "proplabel";
      return "property";
    }
    var r = e.current();
    if (s.propertyIsEnumerable(r)) {
      return "atom";
    } else if (a.propertyIsEnumerable(r)) {
      if (o.propertyIsEnumerable(r)) {
        i = "newstatement";
      } else if (l.propertyIsEnumerable(r)) {
        i = "standalone";
      }
      return "keyword";
    } else {
      return "variable";
    }
  }
  function f(e, t, n) {
    var r = false;
    if (e != "/" && t.eat(e)) {
      if (!t.eat(e)) {
        return "string";
      }
      r = true;
    }
    function i(t, n) {
      var i;
      var a = false;
      var o = !r;
      while ((i = t.next()) != null) {
        if (i == e && !a) {
          if (!r) {
            break;
          }
          if (t.match(e + e)) {
            o = true;
            break;
          }
        }
        if (e == "\"" && i == "$" && !a) {
          if (t.eat("{")) {
            n.tokenize.push(function () {
              var e = 1;
              function t(t, n) {
                if (t.peek() == "}") {
                  if (--e == 0) {
                    n.tokenize.pop();
                    return n.tokenize[n.tokenize.length - 1](t, n);
                  }
                } else if (t.peek() == "{") {
                  e++;
                }
                return u(t, n);
              }
              t.isBase = true;
              return t;
            }());
            return "string";
          }
          if (t.match(/^\w/, false)) {
            n.tokenize.push(c);
            return "string";
          }
        }
        a = !a && i == "\\";
      }
      if (o) {
        n.tokenize.pop();
      }
      return "string";
    }
    n.tokenize.push(i);
    return i(t, n);
  }
  function c(e, t) {
    var n = e.match(/^(\.|[\w\$_]+)/);
    if (!n || !e.match(n[0] == "." ? /^[\w$_]/ : /^\./)) {
      t.tokenize.pop();
    }
    if (n) {
      if (n[0] == ".") {
        return null;
      } else {
        return "variable";
      }
    } else {
      return t.tokenize[t.tokenize.length - 1](e, t);
    }
  }
  function p(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "/" && r) {
        t.tokenize.pop();
        break;
      }
      r = n == "*";
    }
    return "comment";
  }
  function m(e, t) {
    return !e || e == "operator" || e == "->" || /[\.\[\{\(,;:]/.test(e) || e == "newstatement" || e == "keyword" || e == "proplabel" || e == "standalone" && !t;
  }
  function k(e, t, n, r, i) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.align = r;
    this.prev = i;
  }
  function d(e, t, n) {
    return e.context = new k(e.indented, t, n, null, e.context);
  }
  function h(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  u.isBase = true;
  let y = {
    name: "groovy",
    startState: function (e) {
      return {
        tokenize: [u],
        context: new k(-e, 0, "top", false),
        indented: 0,
        startOfLine: true,
        lastToken: null
      };
    },
    token: function (e, t) {
      var n = t.context;
      if (e.sol()) {
        if (n.align == null) {
          n.align = false;
        }
        t.indented = e.indentation();
        t.startOfLine = true;
        if (n.type == "statement" && !m(t.lastToken, true)) {
          h(t);
          n = t.context;
        }
      }
      if (e.eatSpace()) {
        return null;
      }
      i = null;
      var r = t.tokenize[t.tokenize.length - 1](e, t);
      if (r == "comment") {
        return r;
      }
      if (n.align == null) {
        n.align = true;
      }
      if ((i == ";" || i == ":") && n.type == "statement") {
        h(t);
      } else if (i == "->" && n.type == "statement" && n.prev.type == "}") {
        h(t);
        t.context.align = false;
      } else if (i == "{") {
        d(t, e.column(), "}");
      } else if (i == "[") {
        d(t, e.column(), "]");
      } else if (i == "(") {
        d(t, e.column(), ")");
      } else if (i == "}") {
        while (n.type == "statement") {
          n = h(t);
        }
        for (n.type == "}" && (n = h(t)); n.type == "statement";) {
          n = h(t);
        }
      } else if (i == n.type) {
        h(t);
      } else if (n.type == "}" || n.type == "top" || n.type == "statement" && i == "newstatement") {
        d(t, e.column(), "statement");
      }
      t.startOfLine = false;
      t.lastToken = i || r;
      return r;
    },
    indent: function (e, t, n) {
      if (!e.tokenize[e.tokenize.length - 1].isBase) {
        return null;
      }
      var r = t && t.charAt(0);
      var i = e.context;
      if (i.type == "statement" && !m(e.lastToken, true)) {
        i = i.prev;
      }
      var a = r == i.type;
      if (i.type == "statement") {
        return i.indented + (r == "{" ? 0 : n.unit);
      } else if (i.align) {
        return i.column + +!a;
      } else {
        return i.indented + (a ? 0 : n.unit);
      }
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: {
        line: "//",
        block: {
          open: "/*",
          close: "*/"
        }
      },
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "'''", "\"\"\""]
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    groovy: function () {
      return y;
    }
  });
}