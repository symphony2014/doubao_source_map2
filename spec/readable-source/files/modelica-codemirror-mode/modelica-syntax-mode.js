// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43792.67ec3c5d.js
         * chunkId: 43792
         * moduleId: 910727
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  var o = r("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within");
  var l = r("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh");
  var i = r("Real Boolean Integer String");
  var a = [].concat(Object.keys(o), Object.keys(l), Object.keys(i));
  var u = /[;=\(:\),{}.*<>+\-\/^\[\]]/;
  var s = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/;
  var c = /[0-9]/;
  var f = /[_a-zA-Z]/;
  function k(e, t) {
    e.skipToEnd();
    t.tokenize = null;
    return "comment";
  }
  function p(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (r && n == "/") {
        t.tokenize = null;
        break;
      }
      r = n == "*";
    }
    return "comment";
  }
  function m(e, t) {
    var n;
    var r = false;
    while ((n = e.next()) != null) {
      if (n == "\"" && !r) {
        t.tokenize = null;
        t.sol = false;
        break;
      }
      r = !r && n == "\\";
    }
    return "string";
  }
  function d(e, t) {
    for (e.eatWhile(c); e.eat(c) || e.eat(f););
    var n = e.current();
    if (t.sol && (n == "package" || n == "model" || n == "when" || n == "connector")) {
      t.level++;
    } else if (t.sol && n == "end" && t.level > 0) {
      t.level--;
    }
    t.tokenize = null;
    t.sol = false;
    if (o.propertyIsEnumerable(n)) {
      return "keyword";
    } else if (l.propertyIsEnumerable(n)) {
      return "builtin";
    } else if (i.propertyIsEnumerable(n)) {
      return "atom";
    } else {
      return "variable";
    }
  }
  function z(e, t) {
    while (e.eat(/[^']/));
    t.tokenize = null;
    t.sol = false;
    if (e.eat("'")) {
      return "variable";
    } else {
      return "error";
    }
  }
  function b(e, t) {
    e.eatWhile(c);
    if (e.eat(".")) {
      e.eatWhile(c);
    }
    if (e.eat("e") || e.eat("E")) {
      if (!e.eat("-")) {
        e.eat("+");
      }
      e.eatWhile(c);
    }
    t.tokenize = null;
    t.sol = false;
    return "number";
  }
  let h = {
    name: "modelica",
    startState: function () {
      return {
        tokenize: null,
        level: 0,
        sol: true
      };
    },
    token: function (e, t) {
      if (t.tokenize != null) {
        return t.tokenize(e, t);
      }
      if (e.sol()) {
        t.sol = true;
      }
      if (e.eatSpace()) {
        t.tokenize = null;
        return null;
      }
      var n = e.next();
      if (n == "/" && e.eat("/")) {
        t.tokenize = k;
      } else if (n == "/" && e.eat("*")) {
        t.tokenize = p;
      } else if (s.test(n + e.peek())) {
        e.next();
        t.tokenize = null;
        return "operator";
      } else if (u.test(n)) {
        t.tokenize = null;
        return "operator";
      } else if (f.test(n)) {
        t.tokenize = d;
      } else if (n == "'" && e.peek() && e.peek() != "'") {
        t.tokenize = z;
      } else if (n == "\"") {
        t.tokenize = m;
      } else {
        if (!c.test(n)) {
          t.tokenize = null;
          return "error";
        }
        t.tokenize = b;
      }
      return t.tokenize(e, t);
    },
    indent: function (e, t, n) {
      if (e.tokenize != null) {
        return null;
      }
      var r = e.level;
      if (/(algorithm)/.test(t)) {
        r--;
      }
      if (/(equation)/.test(t)) {
        r--;
      }
      if (/(initial algorithm)/.test(t)) {
        r--;
      }
      if (/(initial equation)/.test(t)) {
        r--;
      }
      if (/(end)/.test(t)) {
        r--;
      }
      if (r > 0) {
        return n.unit * r;
      } else {
        return 0;
      }
    },
    languageData: {
      commentTokens: {
        line: "//",
        block: {
          open: "/*",
          close: "*/"
        }
      },
      autocomplete: a
    }
  };
  require.r(exports);
  require.d(exports, {
    modelica: function () {
      return h;
    }
  });
}