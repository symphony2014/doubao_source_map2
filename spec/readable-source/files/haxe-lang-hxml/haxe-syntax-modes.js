// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 73004.0abfb1bb.js
         * chunkId: 73004
         * moduleId: 801192
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return {
      type: e,
      style: "keyword"
    };
  }
  var i;
  var a;
  var o = r("keyword a");
  var u = r("keyword b");
  var l = r("keyword c");
  var c = r("operator");
  var f = {
    type: "atom",
    style: "atom"
  };
  var s = {
    type: "attribute",
    style: "attribute"
  };
  var i = r("typedef");
  var d = {
    if: o,
    while: o,
    else: u,
    do: u,
    try: u,
    return: l,
    break: l,
    continue: l,
    new: l,
    throw: l,
    var: r("var"),
    inline: s,
    static: s,
    using: r("import"),
    public: s,
    private: s,
    cast: r("cast"),
    import: r("import"),
    macro: r("macro"),
    function: r("function"),
    catch: r("catch"),
    untyped: r("untyped"),
    callback: r("cb"),
    for: r("for"),
    switch: r("switch"),
    case: r("case"),
    default: r("default"),
    in: c,
    never: r("property_access"),
    trace: r("trace"),
    class: i,
    abstract: i,
    enum: i,
    interface: i,
    typedef: i,
    extends: i,
    implements: i,
    dynamic: i,
    true: f,
    false: f,
    null: f
  };
  var p = /[+\-*&%=<>!?|]/;
  function m(e, t, n) {
    t.tokenize = n;
    return n(e, t);
  }
  function v(e, t) {
    var n;
    var r = false;
    while ((n = e.next()) != null) {
      if (n == t && !r) {
        return true;
      }
      r = !r && n == "\\";
    }
  }
  function y(e, t) {
    var n;
    var r = e.next();
    if (r == "\"" || r == "'") {
      return m(e, t, (o = r, function (e, t) {
        if (v(e, o)) {
          t.tokenize = y;
        }
        i = "string";
        a = undefined;
        return "string";
      }));
    }
    if (/[\[\]{}\(\),;\:\.]/.test(r)) {
      i = r;
      a = undefined;
      return;
    }
    if (r == "0" && e.eat(/x/i)) {
      e.eatWhile(/[\da-f]/i);
      i = "number";
      a = undefined;
      return "number";
    }
    if (/\d/.test(r) || r == "-" && e.eat(/\d/)) {
      e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/);
      i = "number";
      a = undefined;
      return "number";
    }
    if (t.reAllowed && r == "~" && e.eat(/\//)) {
      v(e, "/");
      e.eatWhile(/[gimsu]/);
      i = "regexp";
      a = undefined;
      return "string.special";
    } else {
      if (r == "/") {
        if (e.eat("*")) {
          return m(e, t, h);
        } else if (e.eat("/")) {
          e.skipToEnd();
          i = "comment";
          a = undefined;
          return "comment";
        } else {
          e.eatWhile(p);
          u = e.current();
          i = "operator";
          a = u;
          return null;
        }
      }
      if (r == "#") {
        e.skipToEnd();
        i = "conditional";
        a = undefined;
        return "meta";
      }
      if (r == "@") {
        e.eat(/:/);
        e.eatWhile(/[\w_]/);
        i = "metadata";
        a = undefined;
        return "meta";
      }
      if (p.test(r)) {
        e.eatWhile(p);
        l = e.current();
        i = "operator";
        a = l;
        return null;
      }
      if (/[A-Z]/.test(r)) {
        e.eatWhile(/[\w_<>]/);
        c = n = e.current();
        i = "type";
        a = c;
        return "type";
      }
      e.eatWhile(/[\w_]/);
      var o;
      var u;
      var l;
      var c;
      var f;
      var s;
      var b;
      var n = e.current();
      var x = d.propertyIsEnumerable(n) && d[n];
      if (x && t.kwAllowed) {
        f = x.type;
        s = x.style;
        b = n;
        i = f;
        a = b;
        return s;
      } else {
        i = "variable";
        a = n;
        return "variable";
      }
    }
  }
  function h(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "/" && r) {
        t.tokenize = y;
        break;
      }
      r = n == "*";
    }
    i = "comment";
    a = undefined;
    return "comment";
  }
  var b = {
    atom: true,
    number: true,
    variable: true,
    string: true,
    regexp: true
  };
  function x(e, t, n, r, i, a) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.prev = i;
    this.info = a;
    if (r != null) {
      this.align = r;
    }
  }
  function k(e) {
    var t = w.state;
    var n = t.importedtypes;
    for (; n; n = n.next) {
      if (n.name == e) {
        return;
      }
    }
    t.importedtypes = {
      name: e,
      next: t.importedtypes
    };
  }
  var w = {
    state: null,
    column: null,
    marked: null,
    cc: null
  };
  function g() {
    for (var e = arguments.length - 1; e >= 0; e--) {
      w.cc.push(arguments[e]);
    }
  }
  function A() {
    g.apply(null, arguments);
    return true;
  }
  function _(e, t) {
    for (var n = t; n; n = n.next) {
      if (n.name == e) {
        return true;
      }
    }
    return false;
  }
  function S(e) {
    var t = w.state;
    if (t.context) {
      w.marked = "def";
      if (_(e, t.localVars)) {
        return;
      }
      t.localVars = {
        name: e,
        next: t.localVars
      };
    } else if (t.globalVars) {
      if (_(e, t.globalVars)) {
        return;
      }
      t.globalVars = {
        name: e,
        next: t.globalVars
      };
    }
  }
  var V = {
    name: "this",
    next: null
  };
  function D() {
    if (!w.state.context) {
      w.state.localVars = V;
    }
    w.state.context = {
      prev: w.state.context,
      vars: w.state.localVars
    };
  }
  function E() {
    w.state.localVars = w.state.context.vars;
    w.state.context = w.state.context.prev;
  }
  function O(e, t) {
    function n() {
      var n = w.state;
      n.lexical = new x(n.indented, w.stream.column(), e, null, n.lexical, t);
    }
    n.lex = true;
    return n;
  }
  function W() {
    var e = w.state;
    if (e.lexical.prev) {
      if (e.lexical.type == ")") {
        e.indented = e.lexical.indented;
      }
      e.lexical = e.lexical.prev;
    }
  }
  function z(e) {
    return function t(n) {
      if (n == e) {
        return A();
      } else if (e == ";") {
        return g();
      } else {
        return A(t);
      }
    };
  }
  function T(e) {
    if (e == "@") {
      return A(B);
    } else if (e == "var") {
      return A(O("vardef"), q, z(";"), W);
    } else if (e == "keyword a") {
      return A(O("form"), L, T, W);
    } else if (e == "keyword b") {
      return A(O("form"), T, W);
    } else if (e == "{") {
      return A(O("}"), D, j, W, E);
    } else if (e == ";") {
      return A();
    } else if (e == "attribute") {
      return A(P);
    } else if (e == "function") {
      return A(Q);
    } else if (e == "for") {
      return A(O("form"), z("("), O(")"), J, z(")"), W, T, W);
    } else if (e == "variable") {
      return A(O("stat"), K);
    } else if (e == "switch") {
      return A(O("form"), L, O("}", "switch"), z("{"), j, W, W);
    } else if (e == "case") {
      return A(L, z(":"));
    } else if (e == "default") {
      return A(z(":"));
    } else if (e == "catch") {
      return A(O("form"), D, z("("), ee, z(")"), T, W, E);
    } else if (e == "import") {
      return A(C, z(";"));
    } else if (e == "typedef") {
      return A(H);
    } else {
      return g(O("stat"), L, z(";"), W);
    }
  }
  function L(e) {
    if (b.hasOwnProperty(e) || e == "type") {
      return A(N);
    } else if (e == "function") {
      return A(Q);
    } else if (e == "keyword c") {
      return A(Z);
    } else if (e == "(") {
      return A(O(")"), Z, z(")"), W, N);
    } else if (e == "operator") {
      return A(L);
    } else if (e == "[") {
      return A(O("]"), F(Z, "]"), W, N);
    } else if (e == "{") {
      return A(O("}"), F($, "}"), W, N);
    } else {
      return A();
    }
  }
  function Z(e) {
    if (e.match(/[;\}\)\],]/)) {
      return g();
    } else {
      return g(L);
    }
  }
  function N(e, t) {
    if (e == "operator" && /\+\+|--/.test(t)) {
      return A(N);
    }
    if (e == "operator" || e == ":") {
      return A(L);
    }
    if (e != ";") {
      if (e == "(") {
        return A(O(")"), F(L, ")"), W, N);
      }
      if (e == ".") {
        return A(U, N);
      }
      if (e == "[") {
        return A(O("]"), L, z("]"), W, N);
      }
    }
  }
  function P(e) {
    if (e == "attribute") {
      return A(P);
    } else if (e == "function") {
      return A(Q);
    } else if (e == "var") {
      return A(q);
    } else {
      return undefined;
    }
  }
  function B(e) {
    if (e == ":" || e == "variable") {
      return A(B);
    } else if (e == "(") {
      return A(O(")"), F(I, ")"), W, T);
    } else {
      return undefined;
    }
  }
  function I(e) {
    if (e == "variable") {
      return A();
    }
  }
  function C(e, t) {
    if (e == "variable" && /[A-Z]/.test(t.charAt(0))) {
      k(t);
      return A();
    } else if (e == "variable" || e == "property" || e == "." || t == "*") {
      return A(C);
    } else {
      return undefined;
    }
  }
  function H(e, t) {
    if (e == "variable" && /[A-Z]/.test(t.charAt(0))) {
      k(t);
      return A();
    } else if (e == "type" && /[A-Z]/.test(t.charAt(0))) {
      return A();
    } else {
      return undefined;
    }
  }
  function K(e) {
    if (e == ":") {
      return A(W, T);
    } else {
      return g(N, z(";"), W);
    }
  }
  function U(e) {
    if (e == "variable") {
      w.marked = "property";
      return A();
    }
  }
  function $(e) {
    if (e == "variable") {
      w.marked = "property";
    }
    if (b.hasOwnProperty(e)) {
      return A(z(":"), L);
    }
  }
  function F(e, t) {
    function n(r) {
      if (r == ",") {
        return A(e, n);
      } else if (r == t) {
        return A();
      } else {
        return A(z(t));
      }
    }
    return function (r) {
      if (r == t) {
        return A();
      } else {
        return g(e, n);
      }
    };
  }
  function j(e) {
    if (e == "}") {
      return A();
    } else {
      return g(T, j);
    }
  }
  function q(e, t) {
    if (e == "variable") {
      S(t);
      return A(R, G);
    } else {
      return A();
    }
  }
  function G(e, t) {
    if (t == "=") {
      return A(L, G);
    } else if (e == ",") {
      return A(q);
    } else {
      return undefined;
    }
  }
  function J(e, t) {
    if (e == "variable") {
      S(t);
      return A(M, L);
    } else {
      return g();
    }
  }
  function M(e, t) {
    if (t == "in") {
      return A();
    }
  }
  function Q(e, t) {
    if (e == "variable" || e == "type") {
      S(t);
      return A(Q);
    } else if (t == "new") {
      return A(Q);
    } else if (e == "(") {
      return A(O(")"), D, F(ee, ")"), W, R, T, E);
    } else {
      return undefined;
    }
  }
  function R(e) {
    if (e == ":") {
      return A(X);
    }
  }
  function X(e) {
    if (e == "type" || e == "variable") {
      return A();
    } else if (e == "{") {
      return A(O("}"), F(Y, "}"), W);
    } else {
      return undefined;
    }
  }
  function Y(e) {
    if (e == "variable") {
      return A(R);
    }
  }
  function ee(e, t) {
    if (e == "variable") {
      S(t);
      return A(R);
    }
  }
  E.lex = true;
  W.lex = true;
  let et = {
    name: "haxe",
    startState: function (e) {
      return {
        tokenize: y,
        reAllowed: true,
        kwAllowed: true,
        cc: [],
        lexical: new x(-e, 0, "block", false),
        importedtypes: ["Int", "Float", "String", "Void", "Std", "Bool", "Dynamic", "Array"],
        context: null,
        indented: 0
      };
    },
    token: function (e, t) {
      if (e.sol()) {
        if (!t.lexical.hasOwnProperty("align")) {
          t.lexical.align = false;
        }
        t.indented = e.indentation();
      }
      if (e.eatSpace()) {
        return null;
      }
      var n = t.tokenize(e, t);
      if (i == "comment") {
        return n;
      } else {
        t.reAllowed = i == "operator" || i == "keyword c" || !!i.match(/^[\[{}\(,;:]$/);
        t.kwAllowed = i != ".";
        return function (e, t, n, r, i) {
          var a = e.cc;
          w.state = e;
          w.stream = i;
          w.marked = null;
          w.cc = a;
          if (!e.lexical.hasOwnProperty("align")) {
            e.lexical.align = true;
          }
          while (true) {
            if ((a.length ? a.pop() : T)(n, r)) {
              while (a.length && a[a.length - 1].lex) {
                a.pop()();
              }
              if (w.marked) {
                return w.marked;
              }
              if (n == "variable" && function (e, t) {
                for (var n = e.localVars; n; n = n.next) {
                  if (n.name == t) {
                    return true;
                  }
                }
              }(e, r)) {
                return "variableName.local";
              }
              if (n == "variable" && function (e, t) {
                if (/[a-z]/.test(t.charAt(0))) {
                  return false;
                }
                var n = e.importedtypes.length;
                var r = 0;
                for (; r < n; r++) {
                  if (e.importedtypes[r] == t) {
                    return true;
                  }
                }
              }(e, r)) {
                return "variableName.special";
              }
              return t;
            }
          }
        }(t, n, i, a, e);
      }
    },
    indent: function (e, t, n) {
      if (e.tokenize != y) {
        return 0;
      }
      var r = t && t.charAt(0);
      var i = e.lexical;
      if (i.type == "stat" && r == "}") {
        i = i.prev;
      }
      var a = i.type;
      var o = r == a;
      if (a == "vardef") {
        return i.indented + 4;
      }
      if (a == "form" && r == "{") {
        return i.indented;
      }
      if (a == "stat" || a == "form") {
        return i.indented + n.unit;
      }
      if (i.info == "switch" && !o) {
        return i.indented + (/^(?:case|default)\b/.test(t) ? n.unit : n.unit * 2);
      }
      if (i.align) {
        return i.column + +!o;
      } else {
        return i.indented + (o ? 0 : n.unit);
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
      }
    }
  };
  let en = {
    name: "hxml",
    startState: function () {
      return {
        define: false,
        inString: false
      };
    },
    token: function (e, t) {
      var n = e.peek();
      var r = e.sol();
      if (n == "#") {
        e.skipToEnd();
        return "comment";
      }
      if (r && n == "-") {
        var i = "variable-2";
        e.eat(/-/);
        if (e.peek() == "-") {
          e.eat(/-/);
          i = "keyword a";
        }
        if (e.peek() == "D") {
          e.eat(/[D]/);
          i = "keyword c";
          t.define = true;
        }
        e.eatWhile(/[A-Z]/i);
        return i;
      }
      var n = e.peek();
      if (t.inString == false && n == "'") {
        t.inString = true;
        e.next();
      }
      if (t.inString == true) {
        if (!e.skipTo("'")) {
          e.skipToEnd();
        }
        if (e.peek() == "'") {
          e.next();
          t.inString = false;
        }
        return "string";
      } else {
        e.next();
        return null;
      }
    },
    languageData: {
      commentTokens: {
        line: "#"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    haxe: function () {
      return et;
    },
    hxml: function () {
      return en;
    }
  });
}