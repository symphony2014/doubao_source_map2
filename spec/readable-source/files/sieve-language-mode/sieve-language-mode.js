// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40981.c01c500c.js
         * chunkId: 40981
         * moduleId: 104320
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var n = {};
    var t = e.split(" ");
    var r = 0;
    for (; r < t.length; ++r) {
      n[t[r]] = true;
    }
    return n;
  }
  var i = r("if elsif else stop require");
  var u = r("true false not");
  function o(e, n) {
    var t;
    var r = e.next();
    if (r == "/" && e.eat("*")) {
      n.tokenize = a;
      return a(e, n);
    }
    if (r === "#") {
      e.skipToEnd();
      return "comment";
    }
    if (r == "\"") {
      ;
      t = r;
      n.tokenize = function (e, n) {
        var r;
        var i = false;
        while ((r = e.next()) != null && (r != t || i)) {
          i = !i && r == "\\";
        }
        if (!i) {
          n.tokenize = o;
        }
        return "string";
      };
      return n.tokenize(e, n);
    }
    if (r == "(") {
      n._indent.push("(");
      n._indent.push("{");
      return null;
    }
    if (r === "{") {
      n._indent.push("{");
      return null;
    }
    if (r == ")") {
      n._indent.pop();
      n._indent.pop();
    }
    if (r === "}") {
      n._indent.pop();
      return null;
    }
    if (r == "," || r == ";" || /[{}\(\),;]/.test(r)) {
      return null;
    }
    if (/\d/.test(r)) {
      e.eatWhile(/[\d]/);
      e.eat(/[KkMmGg]/);
      return "number";
    }
    if (r == ":") {
      e.eatWhile(/[a-zA-Z_]/);
      e.eatWhile(/[a-zA-Z0-9_]/);
      return "operator";
    }
    e.eatWhile(/\w/);
    var s = e.current();
    if (s == "text" && e.eat(":")) {
      n.tokenize = l;
      return "string";
    } else if (i.propertyIsEnumerable(s)) {
      return "keyword";
    } else if (u.propertyIsEnumerable(s)) {
      return "atom";
    } else {
      return null;
    }
  }
  function l(e, n) {
    n._multiLineString = true;
    if (e.sol()) {
      if (e.next() == "." && e.eol()) {
        n._multiLineString = false;
        n.tokenize = o;
      }
      return "string";
    } else {
      e.eatSpace();
      if (e.peek() == "#") {
        e.skipToEnd();
        return "comment";
      } else {
        e.skipToEnd();
        return "string";
      }
    }
  }
  function a(e, n) {
    var t;
    var r = false;
    while ((t = e.next()) != null) {
      if (r && t == "/") {
        n.tokenize = o;
        break;
      }
      r = t == "*";
    }
    return "comment";
  }
  let s = {
    name: "sieve",
    startState: function (e) {
      return {
        tokenize: o,
        baseIndent: e || 0,
        _indent: []
      };
    },
    token: function (e, n) {
      if (e.eatSpace()) {
        return null;
      } else {
        return (n.tokenize || o)(e, n);
      }
    },
    indent: function (e, n, t) {
      var r = e._indent.length;
      if (n && n[0] == "}") {
        r--;
      }
      if (r < 0) {
        r = 0;
      }
      return r * t.unit;
    },
    languageData: {
      indentOnInput: /^\s*\}$/
    }
  };
  require.r(exports);
  require.d(exports, {
    sieve: function () {
      return s;
    }
  });
}