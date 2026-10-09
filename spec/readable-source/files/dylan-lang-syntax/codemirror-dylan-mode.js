// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85318.6a10bd6f.js
         * chunkId: 85318
         * moduleId: 256503
         */
module.exports = function (module, exports, require) {
  function i(e, n) {
    for (var t = 0; t < e.length; t++) {
      n(e[t], t);
    }
  }
  var r = {
    unnamedDefinition: ["interface"],
    namedDefinition: ["module", "library", "macro", "C-struct", "C-union", "C-function", "C-callable-wrapper"],
    typeParameterizedDefinition: ["class", "C-subtype", "C-mapped-subtype"],
    otherParameterizedDefinition: ["method", "function", "C-variable", "C-address"],
    constantSimpleDefinition: ["constant"],
    variableSimpleDefinition: ["variable"],
    otherSimpleDefinition: ["generic", "domain", "C-pointer-type", "table"],
    statement: ["if", "block", "begin", "method", "case", "for", "select", "when", "unless", "until", "while", "iterate", "profiling", "dynamic-bind"],
    separator: ["finally", "exception", "cleanup", "else", "elseif", "afterwards"],
    other: ["above", "below", "by", "from", "handler", "in", "instance", "let", "local", "otherwise", "slot", "subclass", "then", "to", "keyed-by", "virtual"],
    signalingCalls: ["signal", "error", "cerror", "break", "check-type", "abort"]
  };
  r.otherDefinition = r.unnamedDefinition.concat(r.namedDefinition).concat(r.otherParameterizedDefinition);
  r.definition = r.typeParameterizedDefinition.concat(r.otherDefinition);
  r.parameterizedDefinition = r.typeParameterizedDefinition.concat(r.otherParameterizedDefinition);
  r.simpleDefinition = r.constantSimpleDefinition.concat(r.variableSimpleDefinition).concat(r.otherSimpleDefinition);
  r.keyword = r.statement.concat(r.separator).concat(r.other);
  var a = "[-_a-zA-Z?!*@<>$%]+";
  var o = RegExp("^" + a);
  var l = {
    symbolKeyword: a + ":",
    symbolClass: "<" + a + ">",
    symbolGlobal: "\\*" + a + "\\*",
    symbolConstant: "\\$" + a
  };
  var f = {
    symbolKeyword: "atom",
    symbolClass: "tag",
    symbolGlobal: "variableName.standard",
    symbolConstant: "variableName.constant"
  };
  for (var s in l) {
    if (l.hasOwnProperty(s)) {
      l[s] = RegExp("^" + l[s]);
    }
  }
  l.keyword = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
  var c = {
    keyword: "keyword",
    definition: "def",
    simpleDefinition: "def",
    signalingCalls: "builtin"
  };
  var u = {};
  var m = {};
  function d(e, n, t) {
    n.tokenize = t;
    return t(e, n);
  }
  function p(e, n) {
    var t = e.peek();
    if (t == "'" || t == "\"") {
      e.next();
      return d(e, n, h(t, "string"));
    }
    if (t == "/") {
      e.next();
      if (e.eat("*")) {
        return d(e, n, b);
      }
      if (e.eat("/")) {
        e.skipToEnd();
        return "comment";
      }
      e.backUp(1);
    } else if (/[+\-\d\.]/.test(t)) {
      if (e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || e.match(/^[+-]?\d+/)) {
        return "number";
      }
    } else if (t == "#") {
      e.next();
      if ((t = e.peek()) == "\"") {
        e.next();
        return d(e, n, h("\"", "string"));
      }
      if (t == "b") {
        e.next();
        e.eatWhile(/[01]/);
        return "number";
      }
      if (t == "x") {
        e.next();
        e.eatWhile(/[\da-f]/i);
        return "number";
      } else if (t == "o") {
        e.next();
        e.eatWhile(/[0-7]/);
        return "number";
      } else if (t == "#") {
        e.next();
        return "punctuation";
      } else if (t == "[" || t == "(") {
        e.next();
        return "bracket";
      } else if (e.match(/f|t|all-keys|include|key|next|rest/i)) {
        return "atom";
      } else {
        e.eatWhile(/[-a-zA-Z]/);
        return "error";
      }
    } else if (t == "~") {
      e.next();
      if ((t = e.peek()) == "=") {
        e.next();
        if ((t = e.peek()) == "=") {
          e.next();
        }
      }
      return "operator";
    } else if (t == ":") {
      e.next();
      if ((t = e.peek()) == "=") {
        e.next();
        return "operator";
      }
      if (t == ":") {
        e.next();
        return "punctuation";
      }
    } else if ("[](){}".indexOf(t) != -1) {
      e.next();
      return "bracket";
    } else if (".,".indexOf(t) != -1) {
      e.next();
      return "punctuation";
    } else if (e.match("end")) {
      return "keyword";
    }
    for (var i in l) {
      if (l.hasOwnProperty(i)) {
        var r = l[i];
        if (r instanceof Array && function (e, n) {
          for (var t = 0; t < e.length; t++) {
            if (n(e[t], t)) {
              return true;
            }
          }
          return false;
        }(r, function (n) {
          return e.match(n);
        }) || e.match(r)) {
          return f[i];
        }
      }
    }
    if (/[+\-*\/^=<>&|]/.test(t)) {
      e.next();
      return "operator";
    } else if (e.match("define")) {
      return "def";
    } else {
      e.eatWhile(/[\w\-]/);
      if (u.hasOwnProperty(e.current())) {
        return m[e.current()];
      } else if (e.current().match(o)) {
        return "variable";
      } else {
        e.next();
        return "variableName.standard";
      }
    }
  }
  function b(e, n) {
    var t;
    var i = false;
    var r = false;
    var a = 0;
    while (t = e.next()) {
      if (t == "/" && i) {
        if (a > 0) {
          a--;
        } else {
          n.tokenize = p;
          break;
        }
      } else if (t == "*" && r) {
        a++;
      }
      i = t == "*";
      r = t == "/";
    }
    return "comment";
  }
  function h(e, n) {
    return function (t, i) {
      var r;
      var a = false;
      var o = false;
      while ((r = t.next()) != null) {
        if (r == e && !a) {
          o = true;
          break;
        }
        a = !a && r == "\\";
      }
      if (o || !a) {
        i.tokenize = p;
      }
      return n;
    };
  }
  i(["keyword", "definition", "simpleDefinition", "signalingCalls"], function (e) {
    i(r[e], function (n) {
      u[n] = e;
      m[n] = c[e];
    });
  });
  let y = {
    name: "dylan",
    startState: function () {
      return {
        tokenize: p,
        currentIndent: 0
      };
    },
    token: function (e, n) {
      if (e.eatSpace()) {
        return null;
      } else {
        return n.tokenize(e, n);
      }
    },
    languageData: {
      commentTokens: {
        block: {
          open: "/*",
          close: "*/"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    dylan: function () {
      return y;
    }
  });
}