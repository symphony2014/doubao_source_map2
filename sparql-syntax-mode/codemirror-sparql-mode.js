// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49373.ec170fdb.js
         * chunkId: 49373
         * moduleId: 748318
         */
module.exports = function (module, exports, require) {
  function r(t) {
    return RegExp("^(?:" + t.join("|") + ")$", "i");
  }
  var u;
  var a = r(["str", "lang", "langmatches", "datatype", "bound", "sameterm", "isiri", "isuri", "iri", "uri", "bnode", "count", "sum", "min", "max", "avg", "sample", "group_concat", "rand", "abs", "ceil", "floor", "round", "concat", "substr", "strlen", "replace", "ucase", "lcase", "encode_for_uri", "contains", "strstarts", "strends", "strbefore", "strafter", "year", "month", "day", "hours", "minutes", "seconds", "timezone", "tz", "now", "uuid", "struuid", "md5", "sha1", "sha256", "sha384", "sha512", "coalesce", "if", "strlang", "strdt", "isnumeric", "regex", "exists", "isblank", "isliteral", "a", "bind"]);
  var o = r(["base", "prefix", "select", "distinct", "reduced", "construct", "describe", "ask", "from", "named", "where", "order", "limit", "offset", "filter", "optional", "graph", "by", "asc", "desc", "as", "having", "undef", "values", "group", "minus", "in", "not", "service", "silent", "using", "insert", "delete", "union", "true", "false", "with", "data", "copy", "to", "move", "add", "create", "drop", "clear", "load", "into"]);
  var i = /[*+\-<>=&|\^\/!\?]/;
  var c = "[A-Za-z_\\-0-9]";
  var s = /[A-Za-z]/;
  var l = RegExp("((" + c + "|\\.)*(" + c + "))?:");
  function f(t, e) {
    var n;
    var r = t.next();
    u = null;
    if (r == "$" || r == "?") {
      if (r == "?" && t.match(/\s/, false)) {
        return "operator";
      } else {
        t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/);
        return "variableName.local";
      }
    }
    if (r == "<" && !t.match(/^[\s\u00a0=]/, false)) {
      t.match(/^[^\s\u00a0>]*>?/);
      return "atom";
    }
    if (r == "\"" || r == "'") {
      n = r;
      e.tokenize = function (t, e) {
        var r;
        var u = false;
        while ((r = t.next()) != null) {
          if (r == n && !u) {
            e.tokenize = f;
            break;
          }
          u = !u && r == "\\";
        }
        return "string";
      };
      return e.tokenize(t, e);
    }
    if (/[{}\(\),\.;\[\]]/.test(r)) {
      u = r;
      return "bracket";
    }
    if (r == "#") {
      t.skipToEnd();
      return "comment";
    } else if (i.test(r)) {
      return "operator";
    } else if (r == ":") {
      d(t);
      return "atom";
    } else if (r == "@") {
      t.eatWhile(/[a-z\d\-]/i);
      return "meta";
    } else if (s.test(r) && t.match(l)) {
      d(t);
      return "atom";
    }
    t.eatWhile(/[_\w\d]/);
    var c = t.current();
    if (a.test(c)) {
      return "builtin";
    } else if (o.test(c)) {
      return "keyword";
    } else {
      return "variable";
    }
  }
  function d(t) {
    t.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i);
  }
  function m(t, e, n) {
    t.context = {
      prev: t.context,
      indent: t.indent,
      col: n,
      type: e
    };
  }
  function p(t) {
    t.indent = t.context.indent;
    t.context = t.context.prev;
  }
  let F = {
    name: "sparql",
    startState: function () {
      return {
        tokenize: f,
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
      if (u == "(") {
        m(e, ")", t.column());
      } else if (u == "[") {
        m(e, "]", t.column());
      } else if (u == "{") {
        m(e, "}", t.column());
      } else if (/[\]\}\)]/.test(u)) {
        while (e.context && e.context.type == "pattern") {
          p(e);
        }
        if (e.context && u == e.context.type) {
          p(e);
          if (u == "}" && e.context && e.context.type == "pattern") {
            p(e);
          }
        }
      } else if (u == "." && e.context && e.context.type == "pattern") {
        p(e);
      } else if (/atom|string|variable/.test(n) && e.context) {
        if (/[\}\]]/.test(e.context.type)) {
          m(e, "pattern", t.column());
        } else if (e.context.type == "pattern" && !e.context.align) {
          e.context.align = true;
          e.context.col = t.column();
        }
      }
      return n;
    },
    indent: function (t, e, n) {
      var r = e && e.charAt(0);
      var u = t.context;
      if (/[\]\}]/.test(r)) {
        while (u && u.type == "pattern") {
          u = u.prev;
        }
      }
      var a = u && r == u.type;
      if (u) {
        if (u.type == "pattern") {
          return u.col;
        } else if (u.align) {
          return u.col + +!a;
        } else {
          return u.indent + (a ? 0 : n.unit);
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
    sparql: function () {
      return F;
    }
  });
}