// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oz' to 'OzMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 4088.fc3c4589.js
         * chunkId: 4088
         * moduleId: 605984
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b");
  }
  var a = /[\^@!\|<>#~\.\*\-\+\\/,=]/;
  var o = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/;
  var i = /(:::)|(\.\.\.)|(=<:)|(>=:)/;
  var c = ["in", "then", "else", "of", "elseof", "elsecase", "elseif", "catch", "finally", "with", "require", "prepare", "import", "export", "define", "do"];
  var u = ["end"];
  var s = r(["true", "false", "nil", "unit"]);
  var f = r(["andthen", "at", "attr", "declare", "feat", "from", "lex", "mod", "div", "mode", "orelse", "parser", "prod", "prop", "scanner", "self", "syn", "token"]);
  var l = r(["local", "proc", "fun", "case", "class", "if", "cond", "or", "dis", "choice", "not", "thread", "try", "raise", "lock", "for", "suchthat", "meth", "functor"]);
  var d = r(c);
  var h = r(u);
  function m(e, t) {
    if (e.eatSpace()) {
      return null;
    }
    if (e.match(/[{}]/)) {
      return "bracket";
    }
    if (e.match("[]")) {
      return "keyword";
    }
    if (e.match(i) || e.match(o)) {
      return "operator";
    }
    if (e.match(s)) {
      return "atom";
    }
    var n;
    var r = e.match(l);
    if (r) {
      if (t.doInCurrentLine) {
        t.doInCurrentLine = false;
      } else {
        t.currentIndent++;
      }
      if (r[0] == "proc" || r[0] == "fun") {
        t.tokenize = z;
      } else if (r[0] == "class") {
        t.tokenize = k;
      } else if (r[0] == "meth") {
        t.tokenize = p;
      }
      return "keyword";
    }
    if (e.match(d) || e.match(f)) {
      return "keyword";
    }
    if (e.match(h)) {
      t.currentIndent--;
      return "keyword";
    }
    var c = e.next();
    if (c == "\"" || c == "'") {
      ;
      n = c;
      t.tokenize = function (e, t) {
        var r;
        var a = false;
        var o = false;
        while ((r = e.next()) != null) {
          if (r == n && !a) {
            o = true;
            break;
          }
          a = !a && r == "\\";
        }
        if (o || !a) {
          t.tokenize = m;
        }
        return "string";
      };
      return t.tokenize(e, t);
    }
    if (/[~\d]/.test(c)) {
      if (c == "~") {
        if (!/^[0-9]/.test(e.peek())) {
          return null;
        }
        if (e.next() == "0" && e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)) {
          return "number";
        }
      }
      if (c == "0" && e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)) {
        return "number";
      } else {
        return null;
      }
    }
    if (c == "%") {
      e.skipToEnd();
      return "comment";
    } else if (c == "/" && e.eat("*")) {
      t.tokenize = _;
      return _(e, t);
    } else if (a.test(c)) {
      return "operator";
    } else {
      e.eatWhile(/\w/);
      return "variable";
    }
  }
  function k(e, t) {
    if (e.eatSpace()) {
      return null;
    } else {
      e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/);
      t.tokenize = m;
      return "type";
    }
  }
  function p(e, t) {
    if (e.eatSpace()) {
      return null;
    } else {
      e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/);
      t.tokenize = m;
      return "def";
    }
  }
  function z(e, t) {
    if (e.eatSpace()) {
      return null;
    } else if (!t.hasPassedFirstStage && e.eat("{")) {
      t.hasPassedFirstStage = true;
      return "bracket";
    } else if (t.hasPassedFirstStage) {
      e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/);
      t.hasPassedFirstStage = false;
      t.tokenize = m;
      return "def";
    } else {
      t.tokenize = m;
      return null;
    }
  }
  function _(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "/" && r) {
        t.tokenize = m;
        break;
      }
      r = n == "*";
    }
    return "comment";
  }
  let A = {
    name: "oz",
    startState: function () {
      return {
        tokenize: m,
        currentIndent: 0,
        doInCurrentLine: false,
        hasPassedFirstStage: false
      };
    },
    token: function (e, t) {
      if (e.sol()) {
        t.doInCurrentLine = 0;
      }
      return t.tokenize(e, t);
    },
    indent: function (e, t, n) {
      var r = t.replace(/^\s+|\s+$/g, "");
      if (r.match(h) || r.match(d) || r.match(/(\[])/)) {
        return n.unit * (e.currentIndent - 1);
      } else if (e.currentIndent < 0) {
        return 0;
      } else {
        return e.currentIndent * n.unit;
      }
    },
    languageData: {
      indentOnInut: RegExp("[\\[\\]]|(" + c.concat(u).join("|") + ")$"),
      commentTokens: {
        line: "%",
        block: {
          open: "/*",
          close: "*/"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    OzMode: function () {
      return A;
    }
  });
}