// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16640.c269e209.js
         * chunkId: 16640
         * moduleId: 571234
         */
module.exports = function (module, exports, require) {
  function n(e) {
    var r = {};
    var t = 0;
    var n = e.length;
    for (; t < n; ++t) {
      r[e[t]] = true;
    }
    return r;
  }
  var a = n(["note", "across", "when", "variant", "until", "unique", "undefine", "then", "strip", "select", "retry", "rescue", "require", "rename", "reference", "redefine", "prefix", "once", "old", "obsolete", "loop", "local", "like", "is", "inspect", "infix", "include", "if", "frozen", "from", "external", "export", "ensure", "end", "elseif", "else", "do", "creation", "create", "check", "alias", "agent", "separate", "invariant", "inherit", "indexing", "feature", "expanded", "deferred", "class", "Void", "True", "Result", "Precursor", "False", "Current", "create", "attached", "detachable", "as", "and", "implies", "not", "or"]);
  var i = n([":=", "and then", "and", "or", "<<", ">>"]);
  function u(e, r) {
    if (e.eatSpace()) {
      return null;
    }
    var t;
    var n;
    var a;
    var i = e.next();
    if (i == "\"" || i == "'") {
      ;
      t = i;
      a = function (e, r) {
        var n;
        var a = false;
        while ((n = e.next()) != null) {
          if (n == t && !a) {
            r.tokenize.pop();
            break;
          }
          a = !a && n == "%";
        }
        return "string";
      };
      r.tokenize.push(a);
      return a(e, r);
    }
    if (i == "-" && e.eat("-")) {
      e.skipToEnd();
      return "comment";
    }
    if (i == ":" && e.eat("=")) {
      return "operator";
    }
    if (/[0-9]/.test(i)) {
      e.eatWhile(/[xXbBCc0-9\.]/);
      e.eat(/[\?\!]/);
      return "variable";
    }
    if (/[a-zA-Z_0-9]/.test(i)) {
      e.eatWhile(/[a-zA-Z_0-9]/);
      e.eat(/[\?\!]/);
      return "variable";
    } else if (/[=+\-\/*^%<>~]/.test(i)) {
      e.eatWhile(/[=+\-\/*^%<>~]/);
      return "operator";
    } else {
      return null;
    }
  }
  let o = {
    name: "eiffel",
    startState: function () {
      return {
        tokenize: [u]
      };
    },
    token: function (e, r) {
      var t = r.tokenize[r.tokenize.length - 1](e, r);
      if (t == "variable") {
        var n = e.current();
        t = a.propertyIsEnumerable(e.current()) ? "keyword" : i.propertyIsEnumerable(e.current()) ? "operator" : /^[A-Z][A-Z_0-9]*$/g.test(n) ? "tag" : /^0[bB][0-1]+$/g.test(n) ? "number" : /^0[cC][0-7]+$/g.test(n) ? "number" : /^0[xX][a-fA-F0-9]+$/g.test(n) ? "number" : /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(n) ? "number" : /^[0-9]+$/g.test(n) ? "number" : "variable";
      }
      return t;
    },
    languageData: {
      commentTokens: {
        line: "--"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    eiffel: function () {
      return o;
    }
  });
}