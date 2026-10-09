// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 3158.0595d8b5.js
         * chunkId: 3158
         * moduleId: 831160
         */
module.exports = function (module, exports, require) {
  var r;
  function a(e) {
    return RegExp("^(?:" + e.join("|") + ")$", "i");
  }
  function i(e) {
    r = null;
    var t = e.next();
    if (t === "\"") {
      e.match(/^.*?"/);
      return "string";
    }
    if (t === "'") {
      e.match(/^.*?'/);
      return "string";
    }
    if (/[{}\(\),\.;\[\]]/.test(t)) {
      r = t;
      return "punctuation";
    }
    if (t === "/" && e.eat("/")) {
      e.skipToEnd();
      return "comment";
    }
    if (p.test(t)) {
      e.eatWhile(p);
      return null;
    }
    e.eatWhile(/[_\w\d]/);
    if (e.eat(":")) {
      e.eatWhile(/[\w\d_\-]/);
      return "atom";
    }
    var n = e.current();
    if (l.test(n)) {
      return "builtin";
    } else if (c.test(n)) {
      return "def";
    } else if (d.test(n) || u.test(n)) {
      return "keyword";
    } else {
      return "variable";
    }
  }
  function o(e, t, n) {
    return e.context = {
      prev: e.context,
      indent: e.indent,
      col: n,
      type: t
    };
  }
  function s(e) {
    e.indent = e.context.indent;
    return e.context = e.context.prev;
  }
  var l = a(["abs", "acos", "allShortestPaths", "asin", "atan", "atan2", "avg", "ceil", "coalesce", "collect", "cos", "cot", "count", "degrees", "e", "endnode", "exp", "extract", "filter", "floor", "haversin", "head", "id", "keys", "labels", "last", "left", "length", "log", "log10", "lower", "ltrim", "max", "min", "node", "nodes", "percentileCont", "percentileDisc", "pi", "radians", "rand", "range", "reduce", "rel", "relationship", "relationships", "replace", "reverse", "right", "round", "rtrim", "shortestPath", "sign", "sin", "size", "split", "sqrt", "startnode", "stdev", "stdevp", "str", "substring", "sum", "tail", "tan", "timestamp", "toFloat", "toInt", "toString", "trim", "type", "upper"]);
  var c = a(["all", "and", "any", "contains", "exists", "has", "in", "none", "not", "or", "single", "xor"]);
  var d = a(["as", "asc", "ascending", "assert", "by", "case", "commit", "constraint", "create", "csv", "cypher", "delete", "desc", "descending", "detach", "distinct", "drop", "else", "end", "ends", "explain", "false", "fieldterminator", "foreach", "from", "headers", "in", "index", "is", "join", "limit", "load", "match", "merge", "null", "on", "optional", "order", "periodic", "profile", "remove", "return", "scan", "set", "skip", "start", "starts", "then", "true", "union", "unique", "unwind", "using", "when", "where", "with", "call", "yield"]);
  var u = a(["access", "active", "assign", "all", "alter", "as", "catalog", "change", "copy", "create", "constraint", "constraints", "current", "database", "databases", "dbms", "default", "deny", "drop", "element", "elements", "exists", "from", "grant", "graph", "graphs", "if", "index", "indexes", "label", "labels", "management", "match", "name", "names", "new", "node", "nodes", "not", "of", "on", "or", "password", "populated", "privileges", "property", "read", "relationship", "relationships", "remove", "replace", "required", "revoke", "role", "roles", "set", "show", "start", "status", "stop", "suspended", "to", "traverse", "type", "types", "user", "users", "with", "write"]);
  var p = /[*+\-<>=&|~%^]/;
  let m = {
    name: "cypher",
    startState: function () {
      return {
        tokenize: i,
        context: null,
        indent: 0,
        col: 0
      };
    },
    token: function (e, t) {
      if (e.sol()) {
        if (t.context && t.context.align == null) {
          t.context.align = false;
        }
        t.indent = e.indentation();
      }
      if (e.eatSpace()) {
        return null;
      }
      var n = t.tokenize(e, t);
      if (n !== "comment" && t.context && t.context.align == null && t.context.type !== "pattern") {
        t.context.align = true;
      }
      if (r === "(") {
        o(t, ")", e.column());
      } else if (r === "[") {
        o(t, "]", e.column());
      } else if (r === "{") {
        o(t, "}", e.column());
      } else if (/[\]\}\)]/.test(r)) {
        while (t.context && t.context.type === "pattern") {
          s(t);
        }
        if (t.context && r === t.context.type) {
          s(t);
        }
      } else if (r === "." && t.context && t.context.type === "pattern") {
        s(t);
      } else if (/atom|string|variable/.test(n) && t.context) {
        if (/[\}\]]/.test(t.context.type)) {
          o(t, "pattern", e.column());
        } else if (t.context.type === "pattern" && !t.context.align) {
          t.context.align = true;
          t.context.col = e.column();
        }
      }
      return n;
    },
    indent: function (e, t, n) {
      var r = t && t.charAt(0);
      var a = e.context;
      if (/[\]\}]/.test(r)) {
        while (a && a.type === "pattern") {
          a = a.prev;
        }
      }
      var i = a && r === a.type;
      if (a) {
        if (a.type === "keywords") {
          return null;
        } else if (a.align) {
          return a.col + +!i;
        } else {
          return a.indent + (i ? 0 : n.unit);
        }
      } else {
        return 0;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    cypher: function () {
      return m;
    }
  });
}