// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 54012.3ca25b1f.js
         * chunkId: 54012
         * moduleId: 551840
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    return RegExp((t ? "" : "^") + "(?:" + e.join("|") + ")" + (t ? "$" : "\\b"));
  }
  function a(e, t, n) {
    n.tokenize.push(e);
    return e(t, n);
  }
  var u = /^(?:[-+/%|&^]|\*\*?|[<>]{2})/;
  var i = /^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/;
  var o = /^(?:\[\][?=]?)/;
  var c = /^(?:\.(?:\.{2})?|->|[?:])/;
  var s = /^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;
  var f = /^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/;
  var l = r(["abstract", "alias", "as", "asm", "begin", "break", "case", "class", "def", "do", "else", "elsif", "end", "ensure", "enum", "extend", "for", "fun", "if", "include", "instance_sizeof", "lib", "macro", "module", "next", "of", "out", "pointerof", "private", "protected", "rescue", "return", "require", "select", "sizeof", "struct", "super", "then", "type", "typeof", "uninitialized", "union", "unless", "until", "when", "while", "with", "yield", "__DIR__", "__END_LINE__", "__FILE__", "__LINE__"]);
  var m = r(["true", "false", "nil", "self"]);
  var h = r(["def", "fun", "macro", "class", "module", "struct", "lib", "enum", "union", "do", "for"]);
  var p = r(["if", "unless", "case", "while", "until", "begin", "then"]);
  var k = ["end", "else", "elsif", "rescue", "ensure"];
  var d = r(k);
  var _ = ["\\)", "\\}", "\\]"];
  var F = RegExp("^(?:" + _.join("|") + ")$");
  var z = {
    def: I,
    fun: I,
    macro: function (e, t) {
      var n;
      if (e.eatSpace()) {
        return null;
      }
      if (n = e.match(s)) {
        if (n == "def") {
          return "keyword";
        }
        e.eat(/[?!]/);
      }
      t.tokenize.pop();
      return "def";
    },
    class: A,
    module: A,
    struct: A,
    lib: A,
    enum: A,
    union: A
  };
  var b = {
    "[": "]",
    "{": "}",
    "(": ")",
    "<": ">"
  };
  function g(e, t) {
    if (e.eatSpace()) {
      return null;
    }
    if (t.lastToken != "\\" && e.match("{%", false)) {
      return a(y("%", "%"), e, t);
    }
    if (t.lastToken != "\\" && e.match("{{", false)) {
      return a(y("{", "}"), e, t);
    }
    if (e.peek() == "#") {
      e.skipToEnd();
      return "comment";
    }
    if (e.match(s)) {
      e.eat(/[?!]/);
      k = e.current();
      if (e.eat(":")) {
        return "atom";
      }
      if (t.lastToken == ".") {
        return "property";
      }
      if (l.test(k)) {
        if (h.test(k)) {
          if ((k != "fun" || !(t.blocks.indexOf("lib") >= 0)) && (k != "def" || t.lastToken != "abstract")) {
            t.blocks.push(k);
            t.currentIndent += 1;
          }
        } else if ((t.lastStyle == "operator" || !t.lastStyle) && p.test(k)) {
          t.blocks.push(k);
          t.currentIndent += 1;
        } else if (k == "end") {
          t.blocks.pop();
          t.currentIndent -= 1;
        }
        if (z.hasOwnProperty(k)) {
          t.tokenize.push(z[k]);
        }
        return "keyword";
      } else if (m.test(k)) {
        return "atom";
      }
      return "variable";
    }
    if (e.eat("@")) {
      if (e.peek() == "[") {
        return a(x("[", "]", "meta"), e, t);
      } else {
        e.eat("@");
        if (!e.match(s)) {
          e.match(f);
        }
        return "propertyName";
      }
    }
    if (e.match(f)) {
      return "tag";
    }
    if (e.eat(":")) {
      if (e.eat("\"")) {
        return a(w("\"", "atom", false), e, t);
      } else if (e.match(s) || e.match(f) || e.match(u) || e.match(i) || e.match(o)) {
        return "atom";
      } else {
        e.eat(":");
        return "operator";
      }
    }
    if (e.eat("\"")) {
      return a(w("\"", "string", true), e, t);
    }
    if (e.peek() == "%") {
      var n;
      var r;
      var k;
      var d;
      var _ = "string";
      var F = true;
      if (e.match("%r")) {
        _ = "string.special";
        d = e.next();
      } else if (e.match("%w")) {
        F = false;
        d = e.next();
      } else if (e.match("%q")) {
        F = false;
        d = e.next();
      } else if (d = e.match(/^%([^\w\s=])/)) {
        d = d[1];
      } else if (e.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/)) {
        return "meta";
      } else if (e.eat("%")) {
        return "operator";
      }
      if (b.hasOwnProperty(d)) {
        d = b[d];
      }
      return a(w(d, _, F), e, t);
    }
    if (k = e.match(/^<<-('?)([A-Z]\w*)\1/)) {
      return a((n = k[2], r = !k[1], function (e, t) {
        if (e.sol() && (e.eatSpace(), e.match(n))) {
          t.tokenize.pop();
          return "string";
        }
        var a = false;
        while (e.peek()) {
          if (a) {
            e.next();
            a = false;
          } else {
            if (e.match("{%", false)) {
              t.tokenize.push(y("%", "%"));
              return "string";
            }
            if (e.match("{{", false)) {
              t.tokenize.push(y("{", "}"));
              return "string";
            }
            if (r && e.match("#{", false)) {
              t.tokenize.push(x("#{", "}", "meta"));
              return "string";
            }
            a = e.next() == "\\" && r;
          }
        }
        return "string";
      }), e, t);
    } else if (e.eat("'")) {
      e.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/);
      e.eat("'");
      return "atom";
    } else if (e.eat("0")) {
      if (e.eat("x")) {
        e.match(/^[0-9a-fA-F_]+/);
      } else if (e.eat("o")) {
        e.match(/^[0-7_]+/);
      } else if (e.eat("b")) {
        e.match(/^[01_]+/);
      }
      return "number";
    } else if (e.eat(/^\d/)) {
      e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/);
      return "number";
    } else if (e.match(u)) {
      e.eat("=");
      return "operator";
    } else if (e.match(i) || e.match(c)) {
      return "operator";
    } else if (k = e.match(/[({[]/, false)) {
      return a(x(k = k[0], b[k], null), e, t);
    } else if (e.eat("\\")) {
      e.next();
      return "meta";
    } else {
      e.next();
      return null;
    }
  }
  function x(e, t, n, r) {
    return function (a, u) {
      if (!r && a.match(e)) {
        u.tokenize[u.tokenize.length - 1] = x(e, t, n, true);
        u.currentIndent += 1;
        return n;
      }
      var i = g(a, u);
      if (a.current() === t) {
        u.tokenize.pop();
        u.currentIndent -= 1;
        i = n;
      }
      return i;
    };
  }
  function y(e, t, n) {
    return function (r, a) {
      if (!n && r.match("{" + e)) {
        a.currentIndent += 1;
        a.tokenize[a.tokenize.length - 1] = y(e, t, true);
        return "meta";
      } else if (r.match(t + "}")) {
        a.currentIndent -= 1;
        a.tokenize.pop();
        return "meta";
      } else {
        return g(r, a);
      }
    };
  }
  function I(e, t) {
    if (e.eatSpace()) {
      return null;
    } else {
      if (e.match(s)) {
        e.eat(/[!?]/);
      } else if (!e.match(u) && !e.match(i)) {
        e.match(o);
      }
      t.tokenize.pop();
      return "def";
    }
  }
  function A(e, t) {
    if (e.eatSpace()) {
      return null;
    } else {
      e.match(f);
      t.tokenize.pop();
      return "def";
    }
  }
  function w(e, t, n) {
    return function (r, a) {
      var u = false;
      for (; r.peek();) {
        if (u) {
          r.next();
          u = false;
        } else {
          if (r.match("{%", false)) {
            a.tokenize.push(y("%", "%"));
            return t;
          }
          if (r.match("{{", false)) {
            a.tokenize.push(y("{", "}"));
            return t;
          }
          if (n && r.match("#{", false)) {
            a.tokenize.push(x("#{", "}", "meta"));
            return t;
          }
          var i = r.next();
          if (i == e) {
            a.tokenize.pop();
            return t;
          }
          u = n && i == "\\";
        }
      }
      return t;
    };
  }
  let E = {
    name: "crystal",
    startState: function () {
      return {
        tokenize: [g],
        currentIndent: 0,
        lastToken: null,
        lastStyle: null,
        blocks: []
      };
    },
    token: function (e, t) {
      var n = t.tokenize[t.tokenize.length - 1](e, t);
      var r = e.current();
      if (n && n != "comment") {
        t.lastToken = r;
        t.lastStyle = n;
      }
      return n;
    },
    indent: function (e, t, n) {
      t = t.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g, "");
      if (d.test(t) || F.test(t)) {
        return n.unit * (e.currentIndent - 1);
      } else {
        return n.unit * e.currentIndent;
      }
    },
    languageData: {
      indentOnInput: r(_.concat(k), true),
      commentTokens: {
        line: "#"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    crystal: function () {
      return E;
    }
  });
}