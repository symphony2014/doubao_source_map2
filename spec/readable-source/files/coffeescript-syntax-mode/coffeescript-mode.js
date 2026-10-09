// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46962.a230026a.js
         * chunkId: 46962
         * moduleId: 969771
         */
module.exports = function (module, exports, require) {
  var r = "error";
  function o(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b");
  }
  var c = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/;
  var i = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/;
  var f = /^[_A-Za-z$][_A-Za-z$0-9]*/;
  var a = /^@[_A-Za-z$][_A-Za-z$0-9]*/;
  var p = o(["and", "or", "not", "is", "isnt", "in", "instanceof", "typeof"]);
  var s = ["for", "while", "loop", "if", "unless", "else", "switch", "try", "catch", "finally", "class"];
  var u = o(s.concat(["break", "by", "continue", "debugger", "delete", "do", "in", "of", "new", "return", "then", "this", "@", "throw", "when", "until", "extends"]));
  s = o(s);
  var l = /^('{3}|\"{3}|['\"])/;
  var d = /^(\/{3}|\/)/;
  var h = o(["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"]);
  function m(e, t) {
    if (e.sol()) {
      if (t.scope.align === null) {
        t.scope.align = false;
      }
      var n = t.scope.offset;
      if (e.eatSpace()) {
        var o = e.indentation();
        if (o > n && t.scope.type == "coffee") {
          return "indent";
        } else if (o < n) {
          return "dedent";
        } else {
          return null;
        }
      }
      if (n > 0) {
        y(e, t);
      }
    }
    if (e.eatSpace()) {
      return null;
    }
    var s = e.peek();
    if (e.match("####")) {
      e.skipToEnd();
      return "comment";
    }
    if (e.match("###")) {
      t.tokenize = k;
      return t.tokenize(e, t);
    }
    if (s === "#") {
      e.skipToEnd();
      return "comment";
    }
    if (e.match(/^-?[0-9\.]/, false)) {
      var m = false;
      if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)) {
        m = true;
      }
      if (e.match(/^-?\d+\.\d*/)) {
        m = true;
      }
      if (e.match(/^-?\.\d+/)) {
        m = true;
      }
      if (m) {
        if (e.peek() == ".") {
          e.backUp(1);
        }
        return "number";
      }
      var g = false;
      if (e.match(/^-?0x[0-9a-f]+/i)) {
        g = true;
      }
      if (e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)) {
        g = true;
      }
      if (e.match(/^-?0(?![\dx])/i)) {
        g = true;
      }
      if (g) {
        return "number";
      }
    }
    if (e.match(l)) {
      t.tokenize = v(e.current(), false, "string");
      return t.tokenize(e, t);
    }
    if (e.match(d)) {
      if (e.current() != "/" || e.match(/^.*\//, false)) {
        t.tokenize = v(e.current(), true, "string.special");
        return t.tokenize(e, t);
      }
      e.backUp(1);
    }
    if (e.match(c) || e.match(p)) {
      return "operator";
    } else if (e.match(i)) {
      return "punctuation";
    } else if (e.match(h)) {
      return "atom";
    } else if (e.match(a) || t.prop && e.match(f)) {
      return "property";
    } else if (e.match(u)) {
      return "keyword";
    } else if (e.match(f)) {
      return "variable";
    } else {
      e.next();
      return r;
    }
  }
  function v(e, t, n) {
    return function (r, o) {
      while (!r.eol()) {
        r.eatWhile(/[^'"\/\\]/);
        if (r.eat("\\")) {
          r.next();
          if (t && r.eol()) {
            return n;
          }
        } else {
          if (r.match(e)) {
            o.tokenize = m;
            return n;
          }
          r.eat(/['"\/]/);
        }
      }
      if (t) {
        o.tokenize = m;
      }
      return n;
    };
  }
  function k(e, t) {
    while (!e.eol()) {
      e.eatWhile(/[^#]/);
      if (e.match("###")) {
        t.tokenize = m;
        break;
      }
      e.eatWhile("#");
    }
    return "comment";
  }
  function g(e, t, n = "coffee") {
    var r = 0;
    var o = false;
    var c = null;
    var i = t.scope;
    for (; i; i = i.prev) {
      if (i.type === "coffee" || i.type == "}") {
        r = i.offset + e.indentUnit;
        break;
      }
    }
    if (n !== "coffee") {
      o = null;
      c = e.column() + e.current().length;
    } else {
      t.scope.align &&= false;
    }
    t.scope = {
      offset: r,
      type: n,
      prev: t.scope,
      align: o,
      alignOffset: c
    };
  }
  function y(e, t) {
    if (t.scope.prev) {
      if (t.scope.type !== "coffee") {
        t.scope = t.scope.prev;
        return false;
      }
      var n = e.indentation();
      var r = false;
      var o = t.scope;
      for (; o; o = o.prev) {
        if (n === o.offset) {
          r = true;
          break;
        }
      }
      if (!r) {
        return true;
      }
      while (t.scope.prev && t.scope.offset !== n) {
        t.scope = t.scope.prev;
      }
      return false;
    }
  }
  let z = {
    name: "coffeescript",
    startState: function () {
      return {
        tokenize: m,
        scope: {
          offset: 0,
          type: "coffee",
          prev: null,
          align: false
        },
        prop: false,
        dedent: 0
      };
    },
    token: function (e, t) {
      var n = t.scope.align === null && t.scope;
      if (n && e.sol()) {
        n.align = false;
      }
      var o = function (e, t) {
        var n = t.tokenize(e, t);
        var o = e.current();
        if (o === "return") {
          t.dedent = true;
        }
        if ((o === "->" || o === "=>") && e.eol() || n === "indent") {
          g(e, t);
        }
        var c = "[({".indexOf(o);
        if (c !== -1) {
          g(e, t, "])}".slice(c, c + 1));
        }
        if (s.exec(o)) {
          g(e, t);
        }
        if (o == "then") {
          y(e, t);
        }
        if (n === "dedent" && y(e, t)) {
          return r;
        }
        if ((c = "])}".indexOf(o)) !== -1) {
          while (t.scope.type == "coffee" && t.scope.prev) {
            t.scope = t.scope.prev;
          }
          if (t.scope.type == o) {
            t.scope = t.scope.prev;
          }
        }
        if (t.dedent && e.eol()) {
          if (t.scope.type == "coffee" && t.scope.prev) {
            t.scope = t.scope.prev;
          }
          t.dedent = false;
        }
        if (n == "indent" || n == "dedent") {
          return null;
        } else {
          return n;
        }
      }(e, t);
      if (o && o != "comment") {
        if (n) {
          n.align = true;
        }
        t.prop = o == "punctuation" && e.current() == ".";
      }
      return o;
    },
    indent: function (e, t) {
      if (e.tokenize != m) {
        return 0;
      }
      var n = e.scope;
      var r = t && "])}".indexOf(t.charAt(0)) > -1;
      if (r) {
        while (n.type == "coffee" && n.prev) {
          n = n.prev;
        }
      }
      var o = r && n.type === t.charAt(0);
      if (n.align) {
        return n.alignOffset - +!!o;
      } else {
        return (o ? n.prev : n).offset;
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
    coffeeScript: function () {
      return z;
    }
  });
}