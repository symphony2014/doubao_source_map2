// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75420.a05380c5.js
         * chunkId: 75420
         * moduleId: 4967
         */
module.exports = function (module, exports, require) {
  var r = function (e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While");
  var o = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)";
  var a = RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)");
  var i = new RegExp(o);
  var c = RegExp(o + "?_" + o);
  var u = RegExp(o + "\\s*\\(");
  function l(e, t) {
    if ((n = e.next()) === "\"") {
      t.tokenize = s;
      return t.tokenize(e, t);
    }
    if (n === "/") {
      if (e.eat("*")) {
        t.tokenize = p;
        return t.tokenize(e, t);
      }
      if (e.eat("/")) {
        e.skipToEnd();
        return "comment";
      }
    }
    e.backUp(1);
    var n;
    var o = e.match(/^(\w+)\s*\(/, false);
    if (o !== null && r.hasOwnProperty(o[1])) {
      t.scopes.push("bodied");
    }
    var l = f(t);
    if (l === "bodied" && n === "[") {
      t.scopes.pop();
    }
    if (n === "[" || n === "{" || n === "(") {
      t.scopes.push(n);
    }
    if ((l = f(t)) === "[" && n === "]" || l === "{" && n === "}" || l === "(" && n === ")") {
      t.scopes.pop();
    }
    if (n === ";") {
      while (l === "bodied") {
        t.scopes.pop();
        l = f(t);
      }
    }
    if (e.match(/\d+ *#/, true, false)) {
      return "qualifier";
    } else if (e.match(a, true, false)) {
      return "number";
    } else if (e.match(c, true, false)) {
      return "variableName.special";
    } else if (e.match(/(?:\[|\]|{|}|\(|\))/, true, false)) {
      return "bracket";
    } else if (e.match(u, true, false)) {
      e.backUp(1);
      return "variableName.function";
    } else if (e.match(i, true, false)) {
      return "variable";
    } else if (e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/, true, false)) {
      return "operator";
    } else {
      return "error";
    }
  }
  function s(e, t) {
    var n;
    var r = false;
    var o = false;
    while ((n = e.next()) != null) {
      if (n === "\"" && !o) {
        r = true;
        break;
      }
      o = !o && n === "\\";
    }
    if (r && !o) {
      t.tokenize = l;
    }
    return "string";
  }
  function p(e, t) {
    var n;
    var r;
    while ((r = e.next()) != null) {
      if (n === "*" && r === "/") {
        t.tokenize = l;
        break;
      }
      n = r;
    }
    return "comment";
  }
  function f(e) {
    var t = null;
    if (e.scopes.length > 0) {
      t = e.scopes[e.scopes.length - 1];
    }
    return t;
  }
  let m = {
    name: "yacas",
    startState: function () {
      return {
        tokenize: l,
        scopes: []
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      } else {
        return t.tokenize(e, t);
      }
    },
    indent: function (e, t, n) {
      if (e.tokenize !== l && e.tokenize !== null) {
        return null;
      }
      var r = 0;
      if (t === "]" || t === "];" || t === "}" || t === "};" || t === ");") {
        r = -1;
      }
      return (e.scopes.length + r) * n.unit;
    },
    languageData: {
      electricInput: /[{}\[\]()\;]/,
      commentTokens: {
        line: "//",
        block: {
          open: "/*",
          close: "*/"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    yacas: function () {
      return m;
    }
  });
}