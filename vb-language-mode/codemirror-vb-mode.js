// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vb' to 'vbMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52433.dfea406f.js
         * chunkId: 52433
         * moduleId: 996890
         */
module.exports = function (module, exports, require) {
  var r = "error";
  function a(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b", "i");
  }
  var i = RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]");
  var o = RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");
  var c = RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");
  var u = RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");
  var s = RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");
  var l = RegExp("^[_A-Za-z][_A-Za-z0-9]*");
  var d = ["class", "module", "sub", "enum", "select", "while", "if", "function", "get", "set", "property", "try", "structure", "synclock", "using", "with"];
  var m = ["else", "elseif", "case", "catch", "finally"];
  var h = ["next", "loop"];
  var f = ["and", "andalso", "or", "orelse", "xor", "in", "not", "is", "isnot", "like"];
  var p = a(f);
  var g = ["#const", "#else", "#elseif", "#end", "#if", "#region", "addhandler", "addressof", "alias", "as", "byref", "byval", "cbool", "cbyte", "cchar", "cdate", "cdbl", "cdec", "cint", "clng", "cobj", "compare", "const", "continue", "csbyte", "cshort", "csng", "cstr", "cuint", "culng", "cushort", "declare", "default", "delegate", "dim", "directcast", "each", "erase", "error", "event", "exit", "explicit", "false", "for", "friend", "gettype", "goto", "handles", "implements", "imports", "infer", "inherits", "interface", "isfalse", "istrue", "lib", "me", "mod", "mustinherit", "mustoverride", "my", "mybase", "myclass", "namespace", "narrowing", "new", "nothing", "notinheritable", "notoverridable", "of", "off", "on", "operator", "option", "optional", "out", "overloads", "overridable", "overrides", "paramarray", "partial", "private", "protected", "public", "raiseevent", "readonly", "redim", "removehandler", "resume", "return", "shadows", "shared", "static", "step", "stop", "strict", "then", "throw", "to", "true", "trycast", "typeof", "until", "until", "when", "widening", "withevents", "writeonly"];
  var b = ["object", "boolean", "char", "string", "byte", "sbyte", "short", "ushort", "int16", "uint16", "integer", "uinteger", "int32", "uint32", "long", "ulong", "int64", "uint64", "decimal", "single", "double", "float", "date", "datetime", "intptr", "uintptr"];
  var y = a(g);
  var v = a(b);
  var k = a(d);
  var x = a(m);
  var w = a(h);
  var I = a(["end"]);
  var L = a(["do"]);
  function _(e, t) {
    t.currentIndent++;
  }
  function E(e, t) {
    t.currentIndent--;
  }
  function z(e, t) {
    if (e.eatSpace()) {
      return null;
    }
    if (e.peek() === "'") {
      e.skipToEnd();
      return "comment";
    }
    if (e.match(/^((&H)|(&O))?[0-9\.a-f]/i, false)) {
      var n;
      var a;
      var d;
      var m = false;
      if (e.match(/^\d*\.\d+F?/i)) {
        m = true;
      } else if (e.match(/^\d+\.\d*F?/)) {
        m = true;
      } else if (e.match(/^\.\d+F?/)) {
        m = true;
      }
      if (m) {
        e.eat(/J/i);
        return "number";
      }
      var h = false;
      if (e.match(/^&H[0-9a-f]+/i)) {
        h = true;
      } else if (e.match(/^&O[0-7]+/i)) {
        h = true;
      } else if (e.match(/^[1-9]\d*F?/)) {
        e.eat(/J/i);
        h = true;
      } else if (e.match(/^0(?![\dx])/i)) {
        h = true;
      }
      if (h) {
        e.eat(/L/i);
        return "number";
      }
    }
    if (e.match("\"")) {
      a = (n = e.current()).length == 1;
      d = "string";
      t.tokenize = function (e, t) {
        while (!e.eol()) {
          e.eatWhile(/[^'"]/);
          if (e.match(n)) {
            t.tokenize = z;
            return d;
          }
          e.eat(/['"]/);
        }
        if (a) {
          t.tokenize = z;
        }
        return d;
      };
      return t.tokenize(e, t);
    } else if (e.match(s) || e.match(u)) {
      return null;
    } else if (e.match(c) || e.match(i) || e.match(p)) {
      return "operator";
    } else if (e.match(o)) {
      return null;
    } else if (e.match(L)) {
      _(e, t);
      t.doInCurrentLine = true;
      return "keyword";
    } else if (e.match(k)) {
      if (t.doInCurrentLine) {
        t.doInCurrentLine = false;
      } else {
        _(e, t);
      }
      return "keyword";
    } else if (e.match(x)) {
      return "keyword";
    } else if (e.match(I)) {
      E(e, t);
      E(e, t);
      return "keyword";
    } else if (e.match(w)) {
      E(e, t);
      return "keyword";
    } else if (e.match(v) || e.match(y)) {
      return "keyword";
    } else if (e.match(l)) {
      return "variable";
    } else {
      e.next();
      return r;
    }
  }
  let A = {
    name: "vb",
    startState: function () {
      return {
        tokenize: z,
        lastToken: null,
        currentIndent: 0,
        nextLineIndent: 0,
        doInCurrentLine: false
      };
    },
    token: function (e, t) {
      if (e.sol()) {
        t.currentIndent += t.nextLineIndent;
        t.nextLineIndent = 0;
        t.doInCurrentLine = 0;
      }
      var n = function (e, t) {
        var n = t.tokenize(e, t);
        var a = e.current();
        if (a === ".") {
          if ((n = t.tokenize(e, t)) === "variable") {
            return "variable";
          } else {
            return r;
          }
        }
        var i = "[({".indexOf(a);
        if (i !== -1) {
          _(e, t);
        }
        if ((i = "])}".indexOf(a)) !== -1 && E(e, t)) {
          return r;
        } else {
          return n;
        }
      }(e, t);
      t.lastToken = {
        style: n,
        content: e.current()
      };
      return n;
    },
    indent: function (e, t, n) {
      var r = t.replace(/^\s+|\s+$/g, "");
      if (r.match(w) || r.match(I) || r.match(x)) {
        return n.unit * (e.currentIndent - 1);
      } else if (e.currentIndent < 0) {
        return 0;
      } else {
        return e.currentIndent * n.unit;
      }
    },
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "\""]
      },
      commentTokens: {
        line: "'"
      },
      autocomplete: d.concat(m).concat(h).concat(f).concat(g).concat(b)
    }
  };
  require.r(exports);
  require.d(exports, {
    vbMode: function () {
      return A;
    }
  });
}