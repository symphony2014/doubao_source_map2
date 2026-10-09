// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11425.0cf783db.js
         * chunkId: 11425
         * moduleId: 91409
         */
module.exports = function (module, exports, require) {
  function o(t) {
    return RegExp("^(?:" + t.join("|") + ")$", "i");
  }
  o([]);
  var r;
  var i = o(["@prefix", "@base", "a"]);
  var c = /[*+\-<>=&|]/;
  function a(t, e) {
    var n;
    var o;
    var l = t.next();
    r = null;
    if (l == "<" && !t.match(/^[\s\u00a0=]/, false)) {
      t.match(/^[^\s\u00a0>]*>?/);
      return "atom";
    }
    if (l == "\"" || l == "'") {
      n = l;
      e.tokenize = function (t, e) {
        var o;
        var r = false;
        while ((o = t.next()) != null) {
          if (o == n && !r) {
            e.tokenize = a;
            break;
          }
          r = !r && o == "\\";
        }
        return "string";
      };
      return e.tokenize(t, e);
    }
    if (/[{}\(\),\.;\[\]]/.test(l)) {
      r = l;
      return null;
    }
    if (l == "#") {
      t.skipToEnd();
      return "comment";
    }
    if (c.test(l)) {
      t.eatWhile(c);
      return null;
    }
    if (l == ":") {
      return "operator";
    }
    t.eatWhile(/[_\w\d]/);
    if (t.peek() == ":") {
      return "variableName.special";
    }
    var o = t.current();
    if (i.test(o)) {
      return "meta";
    } else if (l >= "A" && l <= "Z") {
      return "comment";
    } else {
      return "keyword";
    }
  }
  function l(t, e, n) {
    t.context = {
      prev: t.context,
      indent: t.indent,
      col: n,
      type: e
    };
  }
  function u(t) {
    t.indent = t.context.indent;
    t.context = t.context.prev;
  }
  let f = {
    name: "turtle",
    startState: function () {
      return {
        tokenize: a,
        context: null,
        indent: 0,
        col: 0
      };
    },
    token: function (t, e) {
      if (t.sol()) {
        if (e.context && e.context.align == null) {
          e.context.align = false;
        }
        e.indent = t.indentation();
      }
      if (t.eatSpace()) {
        return null;
      }
      var n = e.tokenize(t, e);
      if (n != "comment" && e.context && e.context.align == null && e.context.type != "pattern") {
        e.context.align = true;
      }
      if (r == "(") {
        l(e, ")", t.column());
      } else if (r == "[") {
        l(e, "]", t.column());
      } else if (r == "{") {
        l(e, "}", t.column());
      } else if (/[\]\}\)]/.test(r)) {
        while (e.context && e.context.type == "pattern") {
          u(e);
        }
        if (e.context && r == e.context.type) {
          u(e);
        }
      } else if (r == "." && e.context && e.context.type == "pattern") {
        u(e);
      } else if (/atom|string|variable/.test(n) && e.context) {
        if (/[\}\]]/.test(e.context.type)) {
          l(e, "pattern", t.column());
        } else if (e.context.type == "pattern" && !e.context.align) {
          e.context.align = true;
          e.context.col = t.column();
        }
      }
      return n;
    },
    indent: function (t, e, n) {
      var o = e && e.charAt(0);
      var r = t.context;
      if (/[\]\}]/.test(o)) {
        while (r && r.type == "pattern") {
          r = r.prev;
        }
      }
      var i = r && o == r.type;
      if (r) {
        if (r.type == "pattern") {
          return r.col;
        } else if (r.align) {
          return r.col + +!i;
        } else {
          return r.indent + (i ? 0 : n.unit);
        }
      } else {
        return 0;
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
    turtle: function () {
      return f;
    }
  });
}