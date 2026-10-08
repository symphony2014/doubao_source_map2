// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 54662.a45ebf60.js
         * chunkId: 54662
         * moduleId: 256307
         */
module.exports = function (module, exports, require) {
  function r(e, t = "\\b", n = "") {
    return RegExp("^" + n + "((" + e.join(")|(") + "))" + t);
  }
  var a = ["[<>]:", "[<>=]=", "<<=?", ">>>?=?", "=>", "--?>", "<--[->]?", "\\/\\/", "\\.{2,3}", "[\\.\\\\%*+\\-<>!\\/^|&]=?", "\\?", "\\$", "~", ":"];
  var i = r(["[<>]:", "[<>=]=", "[!=]==", "<<=?", ">>>?=?", "=>?", "--?>", "<--[->]?", "\\/\\/", "[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?", "\\?", "\\$", "~", ":", "\\u00D7", "\\u2208", "\\u2209", "\\u220B", "\\u220C", "\\u2218", "\\u221A", "\\u221B", "\\u2229", "\\u222A", "\\u2260", "\\u2264", "\\u2265", "\\u2286", "\\u2288", "\\u228A", "\\u22C5", "\\b(in|isa)\\b(?!.?\\()"], "");
  var s = /^[;,()[\]{}]/;
  var u = /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/;
  var o = r(["\\\\[0-7]{1,3}", "\\\\x[A-Fa-f0-9]{1,2}", "\\\\[abefnrtv0%?'\"\\\\]", "([^\\u0027\\u005C\uD800-\uDFFF]|[\uD800-\uDFFF][\uDC00-\uDFFF])"], "'");
  var c = ["if", "else", "elseif", "while", "for", "begin", "let", "end", "do", "try", "catch", "finally", "return", "break", "continue", "global", "local", "const", "export", "import", "importall", "using", "function", "where", "macro", "module", "baremodule", "struct", "type", "mutable", "immutable", "quote", "typealias", "abstract", "primitive", "bitstype"];
  var l = ["true", "false", "nothing", "NaN", "Inf"];
  var m = r(["begin", "function", "type", "struct", "immutable", "let", "macro", "for", "while", "quote", "if", "else", "elseif", "try", "finally", "catch", "do"]);
  var f = r(["end", "else", "elseif", "catch", "finally"]);
  var p = r(c);
  var h = r(l);
  var d = /^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/;
  var F = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/;
  var k = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;
  var b = r(a, "", "@");
  var _ = r(a, "", ":");
  function g(e) {
    return e.nestedArrays > 0;
  }
  function v(e, t = 0) {
    if (e.scopes.length <= t) {
      return null;
    } else {
      return e.scopes[e.scopes.length - (t + 1)];
    }
  }
  function A(e, t) {
    if (e.match("#=", false)) {
      t.tokenize = z;
      return t.tokenize(e, t);
    }
    var n;
    var r;
    var a = t.leavingExpr;
    if (e.sol()) {
      a = false;
    }
    t.leavingExpr = false;
    if (a && e.match(/^'+/)) {
      return "operator";
    }
    if (e.match(/\.{4,}/)) {
      return "error";
    }
    if (e.match(/\.{1,3}/)) {
      return "operator";
    }
    if (e.eatSpace()) {
      return null;
    }
    var o = e.peek();
    if (o === "#") {
      e.skipToEnd();
      return "comment";
    }
    if (o === "[") {
      t.scopes.push("[");
      t.nestedArrays++;
    }
    if (o === "(") {
      t.scopes.push("(");
      t.nestedGenerators++;
    }
    if (g(t) && o === "]") {
      while (t.scopes.length && v(t) !== "[") {
        t.scopes.pop();
      }
      t.scopes.pop();
      t.nestedArrays--;
      t.leavingExpr = true;
    }
    if (t.nestedGenerators > 0 && o === ")") {
      while (t.scopes.length && v(t) !== "(") {
        t.scopes.pop();
      }
      t.scopes.pop();
      t.nestedGenerators--;
      t.leavingExpr = true;
    }
    if (g(t)) {
      if (t.lastToken == "end" && e.match(":")) {
        return "operator";
      }
      if (e.match("end")) {
        return "number";
      }
    }
    if (r = e.match(m, false)) {
      t.scopes.push(r[0]);
    }
    if (e.match(f, false)) {
      t.scopes.pop();
    }
    if (e.match(/^::(?![:\$])/)) {
      t.tokenize = x;
      return t.tokenize(e, t);
    }
    if (!a && (e.match(F) || e.match(_))) {
      return "builtin";
    }
    if (e.match(i)) {
      return "operator";
    }
    if (e.match(/^\.?\d/, false)) {
      var c = RegExp(/^im\b/);
      var l = false;
      if (e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)) {
        l = true;
      }
      if (e.match(/^0x[0-9a-f_]+/i)) {
        l = true;
      }
      if (e.match(/^0b[01_]+/i)) {
        l = true;
      }
      if (e.match(/^0o[0-7_]+/i)) {
        l = true;
      }
      if (e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)) {
        l = true;
      }
      if (e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)) {
        l = true;
      }
      if (l) {
        e.match(c);
        t.leavingExpr = true;
        return "number";
      }
    }
    if (e.match("'")) {
      t.tokenize = E;
      return t.tokenize(e, t);
    }
    if (e.match(k)) {
      ;
      if ((n = e.current()).substr(-3) === "\"\"\"") {
        n = "\"\"\"";
      } else if (n.substr(-1) === "\"") {
        n = "\"";
      }
      t.tokenize = function (e, t) {
        if (e.eat("\\")) {
          e.next();
        } else {
          if (e.match(n)) {
            t.tokenize = A;
            t.leavingExpr = true;
            return "string";
          }
          e.eat(/[`"]/);
        }
        e.eatWhile(/[^\\`"]/);
        return "string";
      };
      return t.tokenize(e, t);
    }
    if (e.match(d) || e.match(b)) {
      return "meta";
    }
    if (e.match(s)) {
      return null;
    }
    if (e.match(p)) {
      return "keyword";
    }
    if (e.match(h)) {
      return "builtin";
    }
    var D = t.isDefinition || t.lastToken == "function" || t.lastToken == "macro" || t.lastToken == "type" || t.lastToken == "struct" || t.lastToken == "immutable";
    if (e.match(u)) {
      if (D) {
        if (e.peek() === ".") {
          t.isDefinition = true;
          return "variable";
        } else {
          t.isDefinition = false;
          return "def";
        }
      } else {
        t.leavingExpr = true;
        return "variable";
      }
    }
    e.next();
    return "error";
  }
  function x(e, t) {
    e.match(/.*?(?=[,;{}()=\s]|$)/);
    if (e.match("{")) {
      t.nestedParameters++;
    } else if (e.match("}") && t.nestedParameters > 0) {
      t.nestedParameters--;
    }
    if (t.nestedParameters > 0) {
      if (!e.match(/.*?(?={|})/)) {
        e.next();
      }
    } else if (t.nestedParameters == 0) {
      t.tokenize = A;
    }
    return "builtin";
  }
  function z(e, t) {
    if (e.match("#=")) {
      t.nestedComments++;
    }
    if (!e.match(/.*?(?=(#=|=#))/)) {
      e.skipToEnd();
    }
    if (e.match("=#")) {
      t.nestedComments--;
      if (t.nestedComments == 0) {
        t.tokenize = A;
      }
    }
    return "comment";
  }
  function E(e, t) {
    var n;
    var r = false;
    if (e.match(o)) {
      r = true;
    } else if (n = e.match(/\\u([a-f0-9]{1,4})(?=')/i)) {
      var a = parseInt(n[1], 16);
      if (a <= 55295 || a >= 57344) {
        r = true;
        e.next();
      }
    } else if (n = e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)) {
      var a = parseInt(n[1], 16);
      if (a <= 1114111) {
        r = true;
        e.next();
      }
    }
    if (r) {
      t.leavingExpr = true;
      t.tokenize = A;
      return "string";
    } else {
      if (!e.match(/^[^']+(?=')/)) {
        e.skipToEnd();
      }
      if (e.match("'")) {
        t.tokenize = A;
      }
      return "error";
    }
  }
  let D = {
    name: "julia",
    startState: function () {
      return {
        tokenize: A,
        scopes: [],
        lastToken: null,
        leavingExpr: false,
        isDefinition: false,
        nestedArrays: 0,
        nestedComments: 0,
        nestedGenerators: 0,
        nestedParameters: 0,
        firstParenPos: -1
      };
    },
    token: function (e, t) {
      var n = t.tokenize(e, t);
      var r = e.current();
      if (r && n) {
        t.lastToken = r;
      }
      return n;
    },
    indent: function (e, t, n) {
      var r = 0;
      if (t === "]" || t === ")" || /^end\b/.test(t) || /^else/.test(t) || /^catch\b/.test(t) || /^elseif\b/.test(t) || /^finally/.test(t)) {
        r = -1;
      }
      return (e.scopes.length + r) * n.unit;
    },
    languageData: {
      indentOnInput: /^\s*(end|else|catch|finally)\b$/,
      commentTokens: {
        line: "#",
        block: {
          open: "#=",
          close: "=#"
        }
      },
      closeBrackets: {
        brackets: ["(", "[", "{", "\""]
      },
      autocomplete: c.concat(l)
    }
  };
  require.r(exports);
  require.d(exports, {
    julia: function () {
      return D;
    }
  });
}