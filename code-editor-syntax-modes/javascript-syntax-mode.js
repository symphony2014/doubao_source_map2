// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12622.8ec141ef.js
         * chunkId: 12622
         * moduleId: 111924
         */
module.exports = function (module, exports, require) {
  function n(t) {
    var e;
    var r;
    var n = t.statementIndent;
    var i = t.jsonld;
    var a = t.json || i;
    var o = t.typescript;
    var u = t.wordCharacters || /[\w$\xa1-\uffff]/;
    var s = function () {
      function t(t) {
        return {
          type: t,
          style: "keyword"
        };
      }
      var e = t("keyword a");
      var r = t("keyword b");
      var n = t("keyword c");
      var i = t("keyword d");
      var a = t("operator");
      var o = {
        type: "atom",
        style: "atom"
      };
      return {
        if: t("if"),
        while: e,
        with: e,
        else: r,
        do: r,
        try: r,
        finally: r,
        return: i,
        break: i,
        continue: i,
        new: t("new"),
        delete: n,
        void: n,
        throw: n,
        debugger: t("debugger"),
        var: t("var"),
        const: t("var"),
        let: t("var"),
        function: t("function"),
        catch: t("catch"),
        for: t("for"),
        switch: t("switch"),
        case: t("case"),
        default: t("default"),
        in: a,
        typeof: a,
        instanceof: a,
        true: o,
        false: o,
        null: o,
        undefined: o,
        NaN: o,
        Infinity: o,
        this: t("this"),
        class: t("class"),
        super: t("atom"),
        yield: n,
        export: t("export"),
        import: t("import"),
        extends: n,
        await: n
      };
    }();
    var c = /[+\-*&%=<>!?|~^@]/;
    var f = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
    function l(t, n, i) {
      e = t;
      r = i;
      return n;
    }
    function d(t, e) {
      var r;
      var n;
      var a;
      var o = t.next();
      if (o == "\"" || o == "'") {
        ;
        r = o;
        e.tokenize = function (t, e) {
          var n;
          var a = false;
          if (i && t.peek() == "@" && t.match(f)) {
            e.tokenize = d;
            return l("jsonld-keyword", "meta");
          }
          while ((n = t.next()) != null && (n != r || a)) {
            a = !a && n == "\\";
          }
          if (!a) {
            e.tokenize = d;
          }
          return l("string", "string");
        };
        return e.tokenize(t, e);
      }
      if (o == "." && t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
        return l("number", "number");
      }
      if (o == "." && t.match("..")) {
        return l("spread", "meta");
      }
      if (/[\[\]{}\(\),;\:\.]/.test(o)) {
        return l(o);
      }
      if (o == "=" && t.eat(">")) {
        return l("=>", "operator");
      } else if (o == "0" && t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
        return l("number", "number");
      } else if (/\d/.test(o)) {
        t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
        return l("number", "number");
      } else if (o == "/") {
        ;
        if (t.eat("*")) {
          e.tokenize = p;
          return p(t, e);
        }
        if (t.eat("/")) {
          t.skipToEnd();
          return l("comment", "comment");
        }
        n = t;
        if ((a = e).tokenize == d && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(a.lastType) || a.lastType == "quasi" && /\{\s*$/.test(n.string.slice(0, n.pos - 1))) {
          (function (t) {
            var e;
            var r = false;
            var n = false;
            while ((e = t.next()) != null) {
              if (!r) {
                if (e == "/" && !n) {
                  return;
                }
                if (e == "[") {
                  n = true;
                } else if (n && e == "]") {
                  n = false;
                }
              }
              r = !r && e == "\\";
            }
          })(t);
          t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
          return l("regexp", "string.special");
        } else {
          t.eat("=");
          return l("operator", "operator", t.current());
        }
      } else if (o == "`") {
        e.tokenize = m;
        return m(t, e);
      } else if (o == "#" && t.peek() == "!") {
        t.skipToEnd();
        return l("meta", "meta");
      } else if (o == "#" && t.eatWhile(u)) {
        return l("variable", "property");
      } else if (o == "<" && t.match("!--") || o == "-" && t.match("->") && !/\S/.test(t.string.slice(0, t.start))) {
        t.skipToEnd();
        return l("comment", "comment");
      } else if (c.test(o)) {
        if (o != ">" || !e.lexical || e.lexical.type != ">") {
          if (t.eat("=")) {
            if (o == "!" || o == "=") {
              t.eat("=");
            }
          } else if (/[<>*+\-|&?]/.test(o)) {
            t.eat(o);
            if (o == ">") {
              t.eat(o);
            }
          }
        }
        if (o == "?" && t.eat(".")) {
          return l(".");
        } else {
          return l("operator", "operator", t.current());
        }
      } else if (u.test(o)) {
        t.eatWhile(u);
        var v = t.current();
        if (e.lastType != ".") {
          if (s.propertyIsEnumerable(v)) {
            var k = s[v];
            return l(k.type, k.style, v);
          }
          if (v == "async" && t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false)) {
            return l("async", "keyword", v);
          }
        }
        return l("variable", "variable", v);
      }
    }
    function p(t, e) {
      var r;
      var n = false;
      while (r = t.next()) {
        if (r == "/" && n) {
          e.tokenize = d;
          break;
        }
        n = r == "*";
      }
      return l("comment", "comment");
    }
    function m(t, e) {
      var r;
      var n = false;
      while ((r = t.next()) != null) {
        if (!n && (r == "`" || r == "$" && t.eat("{"))) {
          e.tokenize = d;
          break;
        }
        n = !n && r == "\\";
      }
      return l("quasi", "string.special", t.current());
    }
    function v(t, e) {
      e.fatArrowAt &&= null;
      var r = t.string.indexOf("=>", t.start);
      if (!(r < 0)) {
        if (o) {
          var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start, r));
          if (n) {
            r = n.index;
          }
        }
        var i = 0;
        var a = false;
        var s = r - 1;
        for (; s >= 0; --s) {
          var c = t.string.charAt(s);
          var f = "([{}])".indexOf(c);
          if (f >= 0 && f < 3) {
            if (!i) {
              ++s;
              break;
            }
            if (--i == 0) {
              if (c == "(") {
                a = true;
              }
              break;
            }
          } else if (f >= 3 && f < 6) {
            ++i;
          } else if (u.test(c)) {
            a = true;
          } else if (/["'\/`]/.test(c)) {
            for (;; --s) {
              if (s == 0) {
                return;
              }
              if (t.string.charAt(s - 1) == c && t.string.charAt(s - 2) != "\\") {
                s--;
                break;
              }
            }
          } else if (a && !i) {
            ++s;
            break;
          }
        }
        if (a && !i) {
          e.fatArrowAt = s;
        }
      }
    }
    var k = {
      atom: true,
      number: true,
      variable: true,
      string: true,
      regexp: true,
      this: true,
      import: true,
      "jsonld-keyword": true
    };
    function h(t, e, r, n, i, a) {
      this.indented = t;
      this.column = e;
      this.type = r;
      this.prev = i;
      this.info = a;
      if (n != null) {
        this.align = n;
      }
    }
    var y = {
      state: null,
      column: null,
      marked: null,
      cc: null
    };
    function b() {
      for (var t = arguments.length - 1; t >= 0; t--) {
        y.cc.push(arguments[t]);
      }
    }
    function w() {
      b.apply(null, arguments);
      return true;
    }
    function g(t, e) {
      for (var r = e; r; r = r.next) {
        if (r.name == t) {
          return true;
        }
      }
      return false;
    }
    function x(e) {
      var r = y.state;
      y.marked = "def";
      if (r.context) {
        if (r.lexical.info == "var" && r.context && r.context.block) {
          var n = function t(e, r) {
            if (!r) {
              return null;
            }
            if (r.block) {
              var n = t(e, r.prev);
              if (n) {
                if (n == r.prev) {
                  return r;
                } else {
                  return new A(n, r.vars, true);
                }
              } else {
                return null;
              }
            }
            if (g(e, r.vars)) {
              return r;
            } else {
              return new A(r.prev, new S(e, r.vars), false);
            }
          }(e, r.context);
          if (n != null) {
            r.context = n;
            return;
          }
        } else if (!g(e, r.localVars)) {
          r.localVars = new S(e, r.localVars);
          return;
        }
      }
      if (t.globalVars && !g(e, r.globalVars)) {
        r.globalVars = new S(e, r.globalVars);
      }
    }
    function j(t) {
      return t == "public" || t == "private" || t == "protected" || t == "abstract" || t == "readonly";
    }
    function A(t, e, r) {
      this.prev = t;
      this.vars = e;
      this.block = r;
    }
    function S(t, e) {
      this.name = t;
      this.next = e;
    }
    var L = new S("this", new S("arguments", null));
    function T() {
      y.state.context = new A(y.state.context, y.state.localVars, false);
      y.state.localVars = L;
    }
    function O() {
      y.state.context = new A(y.state.context, y.state.localVars, true);
      y.state.localVars = null;
    }
    function N() {
      y.state.localVars = y.state.context.vars;
      y.state.context = y.state.context.prev;
    }
    function V(t, e) {
      function r() {
        var r = y.state;
        var n = r.indented;
        if (r.lexical.type == "stat") {
          n = r.lexical.indented;
        } else {
          for (var i = r.lexical; i && i.type == ")" && i.align; i = i.prev) {
            n = i.indented;
          }
        }
        r.lexical = new h(n, y.stream.column(), t, null, r.lexical, e);
      }
      r.lex = true;
      return r;
    }
    function E() {
      var t = y.state;
      if (t.lexical.prev) {
        if (t.lexical.type == ")") {
          t.indented = t.lexical.indented;
        }
        t.lexical = t.lexical.prev;
      }
    }
    function I(t) {
      return function e(r) {
        if (r == t) {
          return w();
        } else if (t == ";" || r == "}" || r == ")" || r == "]") {
          return b();
        } else {
          return w(e);
        }
      };
    }
    function _(t, e) {
      if (t == "var") {
        return w(V("vardef", e), th, I(";"), E);
      }
      if (t == "keyword a") {
        return w(V("form"), $, _, E);
      }
      if (t == "keyword b") {
        return w(V("form"), _, E);
      }
      if (t == "keyword d") {
        if (y.stream.match(/^\s*$/, false)) {
          return w();
        } else {
          return w(V("stat"), q, I(";"), E);
        }
      }
      if (t == "debugger") {
        return w(I(";"));
      }
      if (t == "{") {
        return w(V("}"), O, te, E, N);
      }
      if (t == ";") {
        return w();
      }
      if (t == "if") {
        if (y.state.lexical.info == "else" && y.state.cc[y.state.cc.length - 1] == E) {
          y.state.cc.pop()();
        }
        return w(V("form"), $, _, E, tj);
      }
      if (t == "function") {
        return w(tT);
      }
      if (t == "for") {
        return w(V("form"), O, tA, _, N, E);
      }
      if (t == "class" || o && e == "interface") {
        y.marked = "keyword";
        return w(V("form", t == "class" ? t : e), tI, E);
      }
      if (t == "variable") {
        if (o && e == "declare") {
          y.marked = "keyword";
          return w(_);
        }
        if (o && (e == "module" || e == "enum" || e == "type") && y.stream.match(/^\s*\w/, false)) {
          y.marked = "keyword";
          if (e == "enum") {
            return w(tK);
          } else if (e == "type") {
            return w(tN, I("operator"), to, I(";"));
          } else {
            return w(V("form"), ty, I("{"), V("}"), te, E, E);
          }
        }
        if (o && e == "namespace") {
          y.marked = "keyword";
          return w(V("form"), D, _, E);
        } else if (o && e == "abstract") {
          y.marked = "keyword";
          return w(_);
        } else {
          return w(V("stat"), J);
        }
      }
      if (t == "switch") {
        return w(V("form"), $, I("{"), V("}", "switch"), O, te, E, E, N);
      } else if (t == "case") {
        return w(D, I(":"));
      } else if (t == "default") {
        return w(I(":"));
      } else if (t == "catch") {
        return w(V("form"), T, z, _, E, N);
      } else if (t == "export") {
        return w(V("stat"), tC, E);
      } else if (t == "import") {
        return w(V("stat"), tF, E);
      } else if (t == "async") {
        return w(_);
      } else if (e == "@") {
        return w(D, _);
      } else {
        return b(V("stat"), D, I(";"), E);
      }
    }
    function z(t) {
      if (t == "(") {
        return w(tV, I(")"));
      }
    }
    function D(t, e) {
      return F(t, e, false);
    }
    function C(t, e) {
      return F(t, e, true);
    }
    function $(t) {
      if (t != "(") {
        return b();
      } else {
        return w(V(")"), q, I(")"), E);
      }
    }
    function F(t, e, r) {
      if (y.state.fatArrowAt == y.stream.start) {
        var n;
        var i = r ? W : K;
        if (t == "(") {
          return w(T, V(")"), Y(tV, ")"), E, I("=>"), i, N);
        }
        if (t == "variable") {
          return b(T, ty, I("=>"), i, N);
        }
      }
      var a = r ? B : U;
      if (k.hasOwnProperty(t)) {
        return w(a);
      } else if (t == "function") {
        return w(tT, a);
      } else if (t == "class" || o && e == "interface") {
        y.marked = "keyword";
        return w(V("form"), tE, E);
      } else if (t == "keyword c" || t == "async") {
        return w(r ? C : D);
      } else if (t == "(") {
        return w(V(")"), q, I(")"), E, a);
      } else if (t == "operator" || t == "spread") {
        return w(r ? C : D);
      } else if (t == "[") {
        return w(V("]"), tH, E, a);
      } else if (t == "{") {
        return tt(Q, "}", null, a);
      } else if (t == "quasi") {
        return b(P, a);
      } else if (t == "new") {
        return w((n = r, function (t) {
          if (t == ".") {
            return w(n ? G : Z);
          } else if (t == "variable" && o) {
            return w(tm, n ? B : U);
          } else {
            return b(n ? C : D);
          }
        }));
      } else {
        return w();
      }
    }
    function q(t) {
      if (t.match(/[;\}\)\],]/)) {
        return b();
      } else {
        return b(D);
      }
    }
    function U(t, e) {
      if (t == ",") {
        return w(q);
      } else {
        return B(t, e, false);
      }
    }
    function B(t, e, r) {
      var n = r == false ? U : B;
      var i = r == false ? D : C;
      if (t == "=>") {
        return w(T, r ? W : K, N);
      }
      if (t == "operator") {
        if (/\+\+|--/.test(e) || o && e == "!") {
          return w(n);
        } else if (o && e == "<" && y.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false)) {
          return w(V(">"), Y(to, ">"), E, n);
        } else if (e == "?") {
          return w(D, I(":"), i);
        } else {
          return w(i);
        }
      }
      if (t == "quasi") {
        return b(P, n);
      }
      if (t != ";") {
        if (t == "(") {
          return tt(C, ")", "call", n);
        }
        if (t == ".") {
          return w(M, n);
        }
        if (t == "[") {
          return w(V("]"), q, I("]"), E, n);
        }
        if (o && e == "as") {
          y.marked = "keyword";
          return w(to, n);
        }
        if (t == "regexp") {
          y.state.lastType = y.marked = "operator";
          y.stream.backUp(y.stream.pos - y.stream.start - 1);
          return w(i);
        }
      }
    }
    function P(t, e) {
      if (t != "quasi") {
        return b();
      } else if (e.slice(e.length - 2) != "${") {
        return w(P);
      } else {
        return w(q, H);
      }
    }
    function H(t) {
      if (t == "}") {
        y.marked = "string.special";
        y.state.tokenize = m;
        return w(P);
      }
    }
    function K(t) {
      v(y.stream, y.state);
      return b(t == "{" ? _ : D);
    }
    function W(t) {
      v(y.stream, y.state);
      return b(t == "{" ? _ : C);
    }
    function Z(t, e) {
      if (e == "target") {
        y.marked = "keyword";
        return w(U);
      }
    }
    function G(t, e) {
      if (e == "target") {
        y.marked = "keyword";
        return w(B);
      }
    }
    function J(t) {
      if (t == ":") {
        return w(E, _);
      } else {
        return b(U, I(";"), E);
      }
    }
    function M(t) {
      if (t == "variable") {
        y.marked = "property";
        return w();
      }
    }
    function Q(t, e) {
      if (t == "async") {
        y.marked = "property";
        return w(Q);
      }
      if (t == "variable" || y.style == "keyword") {
        var r;
        y.marked = "property";
        if (e == "get" || e == "set") {
          return w(R);
        } else {
          if (o && y.state.fatArrowAt == y.stream.start && (r = y.stream.match(/^\s*:\s*/, false))) {
            y.state.fatArrowAt = y.stream.pos + r[0].length;
          }
          return w(X);
        }
      }
      if (t == "number" || t == "string") {
        y.marked = i ? "property" : y.style + " property";
        return w(X);
      }
      if (t == "jsonld-keyword") {
        return w(X);
      }
      if (o && j(e)) {
        y.marked = "keyword";
        return w(Q);
      } else if (t == "[") {
        return w(D, tr, I("]"), X);
      } else if (t == "spread") {
        return w(C, X);
      } else if (e == "*") {
        y.marked = "keyword";
        return w(Q);
      } else if (t == ":") {
        return b(X);
      }
    }
    function R(t) {
      if (t != "variable") {
        return b(X);
      } else {
        y.marked = "property";
        return w(tT);
      }
    }
    function X(t) {
      if (t == ":") {
        return w(C);
      } else if (t == "(") {
        return b(tT);
      } else {
        return undefined;
      }
    }
    function Y(t, e, r) {
      function n(i, a) {
        if (r ? r.indexOf(i) > -1 : i == ",") {
          var o = y.state.lexical;
          if (o.info == "call") {
            o.pos = (o.pos || 0) + 1;
          }
          return w(function (r, n) {
            if (r == e || n == e) {
              return b();
            } else {
              return b(t);
            }
          }, n);
        }
        if (i == e || a == e) {
          return w();
        } else if (r && r.indexOf(";") > -1) {
          return b(t);
        } else {
          return w(I(e));
        }
      }
      return function (r, i) {
        if (r == e || i == e) {
          return w();
        } else {
          return b(t, n);
        }
      };
    }
    function tt(t, e, r) {
      for (var n = 3; n < arguments.length; n++) {
        y.cc.push(arguments[n]);
      }
      return w(V(e, r), Y(t, e), E);
    }
    function te(t) {
      if (t == "}") {
        return w();
      } else {
        return b(_, te);
      }
    }
    function tr(t, e) {
      if (o) {
        if (t == ":") {
          return w(to);
        }
        if (e == "?") {
          return w(tr);
        }
      }
    }
    function tn(t, e) {
      if (o && (t == ":" || e == "in")) {
        return w(to);
      }
    }
    function ti(t) {
      if (o && t == ":") {
        if (y.stream.match(/^\s*\w+\s+is\b/, false)) {
          return w(D, ta, to);
        } else {
          return w(to);
        }
      }
    }
    function ta(t, e) {
      if (e == "is") {
        y.marked = "keyword";
        return w();
      }
    }
    function to(t, e) {
      if (e == "keyof" || e == "typeof" || e == "infer" || e == "readonly") {
        y.marked = "keyword";
        return w(e == "typeof" ? C : to);
      } else if (t == "variable" || e == "void") {
        y.marked = "type";
        return w(tp);
      } else if (e == "|" || e == "&") {
        return w(to);
      } else if (t == "string" || t == "number" || t == "atom") {
        return w(tp);
      } else if (t == "[") {
        return w(V("]"), Y(to, "]", ","), E, tp);
      } else if (t == "{") {
        return w(V("}"), ts, E, tp);
      } else if (t == "(") {
        return w(Y(td, ")"), tu, tp);
      } else if (t == "<") {
        return w(Y(to, ">"), to);
      } else if (t == "quasi") {
        return b(tf, tp);
      } else {
        return undefined;
      }
    }
    function tu(t) {
      if (t == "=>") {
        return w(to);
      }
    }
    function ts(t) {
      if (t.match(/[\}\)\]]/)) {
        return w();
      } else if (t == "," || t == ";") {
        return w(ts);
      } else {
        return b(tc, ts);
      }
    }
    function tc(t, e) {
      if (t == "variable" || y.style == "keyword") {
        y.marked = "property";
        return w(tc);
      }
      if (e == "?" || t == "number" || t == "string") {
        return w(tc);
      }
      if (t == ":") {
        return w(to);
      }
      if (t == "[") {
        return w(I("variable"), tn, I("]"), tc);
      }
      if (t == "(") {
        return b(tO, tc);
      } else if (!t.match(/[;\}\)\],]/)) {
        return w();
      }
    }
    function tf(t, e) {
      if (t != "quasi") {
        return b();
      } else if (e.slice(e.length - 2) != "${") {
        return w(tf);
      } else {
        return w(to, tl);
      }
    }
    function tl(t) {
      if (t == "}") {
        y.marked = "string.special";
        y.state.tokenize = m;
        return w(tf);
      }
    }
    function td(t, e) {
      if (t == "variable" && y.stream.match(/^\s*[?:]/, false) || e == "?") {
        return w(td);
      } else if (t == ":") {
        return w(to);
      } else if (t == "spread") {
        return w(td);
      } else {
        return b(to);
      }
    }
    function tp(t, e) {
      if (e == "<") {
        return w(V(">"), Y(to, ">"), E, tp);
      } else if (e == "|" || t == "." || e == "&") {
        return w(to);
      } else if (t == "[") {
        return w(to, I("]"), tp);
      } else if (e == "extends" || e == "implements") {
        y.marked = "keyword";
        return w(to);
      } else if (e == "?") {
        return w(to, I(":"), to);
      } else {
        return undefined;
      }
    }
    function tm(t, e) {
      if (e == "<") {
        return w(V(">"), Y(to, ">"), E, tp);
      }
    }
    function tv() {
      return b(to, tk);
    }
    function tk(t, e) {
      if (e == "=") {
        return w(to);
      }
    }
    function th(t, e) {
      if (e == "enum") {
        y.marked = "keyword";
        return w(tK);
      } else {
        return b(ty, tr, tg, tx);
      }
    }
    function ty(t, e) {
      if (o && j(e)) {
        y.marked = "keyword";
        return w(ty);
      } else if (t == "variable") {
        x(e);
        return w();
      } else if (t == "spread") {
        return w(ty);
      } else if (t == "[") {
        return tt(tw, "]");
      } else if (t == "{") {
        return tt(tb, "}");
      } else {
        return undefined;
      }
    }
    function tb(t, e) {
      if (t != "variable" || y.stream.match(/^\s*:/, false)) {
        if (t == "variable") {
          y.marked = "property";
        }
        if (t == "spread") {
          return w(ty);
        } else if (t == "}") {
          return b();
        } else if (t == "[") {
          return w(D, I("]"), I(":"), tb);
        } else {
          return w(I(":"), ty, tg);
        }
      } else {
        x(e);
        return w(tg);
      }
    }
    function tw() {
      return b(ty, tg);
    }
    function tg(t, e) {
      if (e == "=") {
        return w(C);
      }
    }
    function tx(t) {
      if (t == ",") {
        return w(th);
      }
    }
    function tj(t, e) {
      if (t == "keyword b" && e == "else") {
        return w(V("form", "else"), _, E);
      }
    }
    function tA(t, e) {
      if (e == "await") {
        return w(tA);
      } else if (t == "(") {
        return w(V(")"), tS, E);
      } else {
        return undefined;
      }
    }
    function tS(t) {
      if (t == "var") {
        return w(th, tL);
      } else if (t == "variable") {
        return w(tL);
      } else {
        return b(tL);
      }
    }
    function tL(t, e) {
      if (t == ")") {
        return w();
      } else if (t == ";") {
        return w(tL);
      } else if (e == "in" || e == "of") {
        y.marked = "keyword";
        return w(D, tL);
      } else {
        return b(D, tL);
      }
    }
    function tT(t, e) {
      if (e == "*") {
        y.marked = "keyword";
        return w(tT);
      } else if (t == "variable") {
        x(e);
        return w(tT);
      } else if (t == "(") {
        return w(T, V(")"), Y(tV, ")"), E, ti, _, N);
      } else if (o && e == "<") {
        return w(V(">"), Y(tv, ">"), E, tT);
      } else {
        return undefined;
      }
    }
    function tO(t, e) {
      if (e == "*") {
        y.marked = "keyword";
        return w(tO);
      } else if (t == "variable") {
        x(e);
        return w(tO);
      } else if (t == "(") {
        return w(T, V(")"), Y(tV, ")"), E, ti, N);
      } else if (o && e == "<") {
        return w(V(">"), Y(tv, ">"), E, tO);
      } else {
        return undefined;
      }
    }
    function tN(t, e) {
      if (t == "keyword" || t == "variable") {
        y.marked = "type";
        return w(tN);
      } else if (e == "<") {
        return w(V(">"), Y(tv, ">"), E);
      } else {
        return undefined;
      }
    }
    function tV(t, e) {
      if (e == "@") {
        w(D, tV);
      }
      if (t == "spread") {
        return w(tV);
      } else if (o && j(e)) {
        y.marked = "keyword";
        return w(tV);
      } else if (o && t == "this") {
        return w(tr, tg);
      } else {
        return b(ty, tr, tg);
      }
    }
    function tE(t, e) {
      if (t == "variable") {
        return tI(t, e);
      } else {
        return t_(t, e);
      }
    }
    function tI(t, e) {
      if (t == "variable") {
        x(e);
        return w(t_);
      }
    }
    function t_(t, e) {
      if (e == "<") {
        return w(V(">"), Y(tv, ">"), E, t_);
      } else if (e == "extends" || e == "implements" || o && t == ",") {
        if (e == "implements") {
          y.marked = "keyword";
        }
        return w(o ? to : D, t_);
      } else if (t == "{") {
        return w(V("}"), tz, E);
      } else {
        return undefined;
      }
    }
    function tz(t, e) {
      if (t == "async" || t == "variable" && (e == "static" || e == "get" || e == "set" || o && j(e)) && y.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false)) {
        y.marked = "keyword";
        return w(tz);
      } else if (t == "variable" || y.style == "keyword") {
        y.marked = "property";
        return w(tD, tz);
      } else if (t == "number" || t == "string") {
        return w(tD, tz);
      } else if (t == "[") {
        return w(D, tr, I("]"), tD, tz);
      } else if (e == "*") {
        y.marked = "keyword";
        return w(tz);
      } else if (o && t == "(") {
        return b(tO, tz);
      } else if (t == ";" || t == ",") {
        return w(tz);
      } else if (t == "}") {
        return w();
      } else if (e == "@") {
        return w(D, tz);
      } else {
        return undefined;
      }
    }
    function tD(t, e) {
      if (e == "!" || e == "?") {
        return w(tD);
      }
      if (t == ":") {
        return w(to, tg);
      }
      if (e == "=") {
        return w(C);
      }
      var r = y.state.lexical.prev;
      return b(r && r.info == "interface" ? tO : tT);
    }
    function tC(t, e) {
      if (e == "*") {
        y.marked = "keyword";
        return w(tP, I(";"));
      } else if (e == "default") {
        y.marked = "keyword";
        return w(D, I(";"));
      } else if (t == "{") {
        return w(Y(t$, "}"), tP, I(";"));
      } else {
        return b(_);
      }
    }
    function t$(t, e) {
      if (e == "as") {
        y.marked = "keyword";
        return w(I("variable"));
      } else if (t == "variable") {
        return b(C, t$);
      } else {
        return undefined;
      }
    }
    function tF(t) {
      if (t == "string") {
        return w();
      } else if (t == "(") {
        return b(D);
      } else if (t == ".") {
        return b(U);
      } else {
        return b(tq, tU, tP);
      }
    }
    function tq(t, e) {
      if (t == "{") {
        return tt(tq, "}");
      } else {
        if (t == "variable") {
          x(e);
        }
        if (e == "*") {
          y.marked = "keyword";
        }
        return w(tB);
      }
    }
    function tU(t) {
      if (t == ",") {
        return w(tq, tU);
      }
    }
    function tB(t, e) {
      if (e == "as") {
        y.marked = "keyword";
        return w(tq);
      }
    }
    function tP(t, e) {
      if (e == "from") {
        y.marked = "keyword";
        return w(D);
      }
    }
    function tH(t) {
      if (t == "]") {
        return w();
      } else {
        return b(Y(C, "]"));
      }
    }
    function tK() {
      return b(V("form"), ty, I("{"), V("}"), Y(tW, "}"), E, E);
    }
    function tW() {
      return b(ty, tg);
    }
    T.lex = O.lex = true;
    N.lex = true;
    E.lex = true;
    return {
      name: t.name,
      startState: function (e) {
        var r = {
          tokenize: d,
          lastType: "sof",
          cc: [],
          lexical: new h(-e, 0, "block", false),
          localVars: t.localVars,
          context: t.localVars && new A(null, null, false),
          indented: 0
        };
        if (t.globalVars && typeof t.globalVars == "object") {
          r.globalVars = t.globalVars;
        }
        return r;
      },
      token: function (t, n) {
        if (t.sol()) {
          if (!n.lexical.hasOwnProperty("align")) {
            n.lexical.align = false;
          }
          n.indented = t.indentation();
          v(t, n);
        }
        if (n.tokenize != p && t.eatSpace()) {
          return null;
        }
        var i = n.tokenize(t, n);
        if (e == "comment") {
          return i;
        } else {
          n.lastType = e == "operator" && (r == "++" || r == "--") ? "incdec" : e;
          return function (t, e, r, n, i) {
            var o = t.cc;
            y.state = t;
            y.stream = i;
            y.marked = null;
            y.cc = o;
            y.style = e;
            if (!t.lexical.hasOwnProperty("align")) {
              t.lexical.align = true;
            }
            while (true) {
              if ((o.length ? o.pop() : a ? D : _)(r, n)) {
                while (o.length && o[o.length - 1].lex) {
                  o.pop()();
                }
                if (y.marked) {
                  return y.marked;
                }
                if (r == "variable" && function (t, e) {
                  for (var r = t.localVars; r; r = r.next) {
                    if (r.name == e) {
                      return true;
                    }
                  }
                  for (var n = t.context; n; n = n.prev) {
                    for (var r = n.vars; r; r = r.next) {
                      if (r.name == e) {
                        return true;
                      }
                    }
                  }
                }(t, n)) {
                  return "variableName.local";
                }
                return e;
              }
            }
          }(n, i, e, r, t);
        }
      },
      indent: function (e, r, i) {
        if (e.tokenize == p || e.tokenize == m) {
          return null;
        }
        if (e.tokenize != d) {
          return 0;
        }
        var a;
        var o = r && r.charAt(0);
        var u = e.lexical;
        if (!/^\s*else\b/.test(r)) {
          for (var s = e.cc.length - 1; s >= 0; --s) {
            var f = e.cc[s];
            if (f == E) {
              u = u.prev;
            } else if (f != tj && f != N) {
              break;
            }
          }
        }
        while ((u.type == "stat" || u.type == "form") && (o == "}" || (a = e.cc[e.cc.length - 1]) && (a == U || a == B) && !/^[,\.=+\-*:?[\(]/.test(r))) {
          u = u.prev;
        }
        if (n && u.type == ")" && u.prev.type == "stat") {
          u = u.prev;
        }
        var l = u.type;
        var v = o == l;
        if (l == "vardef") {
          return u.indented + (e.lastType == "operator" || e.lastType == "," ? u.info.length + 1 : 0);
        }
        if (l == "form" && o == "{") {
          return u.indented;
        }
        if (l == "form") {
          return u.indented + i.unit;
        }
        if (l == "stat") {
          return u.indented + (e.lastType == "operator" || e.lastType == "," || c.test(r.charAt(0)) || /[,.]/.test(r.charAt(0)) ? n || i.unit : 0);
        }
        if (u.info == "switch" && !v && t.doubleIndentSwitch != false) {
          return u.indented + (/^(?:case|default)\b/.test(r) ? i.unit : i.unit * 2);
        } else if (u.align) {
          return u.column + +!v;
        } else {
          return u.indented + (v ? 0 : i.unit);
        }
      },
      languageData: {
        indentOnInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        commentTokens: a ? undefined : {
          line: "//",
          block: {
            open: "/*",
            close: "*/"
          }
        },
        closeBrackets: {
          brackets: ["(", "[", "{", "'", "\"", "`"]
        },
        wordChars: "$"
      }
    };
  }
  let i = n({
    name: "javascript"
  });
  let a = n({
    name: "json",
    json: true
  });
  let o = n({
    name: "json",
    jsonld: true
  });
  let u = n({
    name: "typescript",
    typescript: true
  });
  require.r(exports);
  require.d(exports, {
    javascript: function () {
      return i;
    },
    json: function () {
      return a;
    },
    jsonld: function () {
      return o;
    },
    typescript: function () {
      return u;
    }
  });
}