// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68812.22b97967.js
         * chunkId: 68812
         * moduleId: 144178
         */
module.exports = function (module, exports, require) {
  var r = function () {
    function e(e) {
      return {
        type: e,
        style: "keyword"
      };
    }
    var t = e("operator");
    var n = {
      type: "atom",
      style: "atom"
    };
    var r = {
      type: "axis_specifier",
      style: "qualifier"
    };
    var a = {
      ",": {
        type: "punctuation",
        style: null
      }
    };
    var i = ["after", "all", "allowing", "ancestor", "ancestor-or-self", "any", "array", "as", "ascending", "at", "attribute", "base-uri", "before", "boundary-space", "by", "case", "cast", "castable", "catch", "child", "collation", "comment", "construction", "contains", "content", "context", "copy", "copy-namespaces", "count", "decimal-format", "declare", "default", "delete", "descendant", "descendant-or-self", "descending", "diacritics", "different", "distance", "document", "document-node", "element", "else", "empty", "empty-sequence", "encoding", "end", "entire", "every", "exactly", "except", "external", "first", "following", "following-sibling", "for", "from", "ftand", "ftnot", "ft-option", "ftor", "function", "fuzzy", "greatest", "group", "if", "import", "in", "inherit", "insensitive", "insert", "instance", "intersect", "into", "invoke", "is", "item", "language", "last", "lax", "least", "let", "levels", "lowercase", "map", "modify", "module", "most", "namespace", "next", "no", "node", "nodes", "no-inherit", "no-preserve", "not", "occurs", "of", "only", "option", "order", "ordered", "ordering", "paragraph", "paragraphs", "parent", "phrase", "preceding", "preceding-sibling", "preserve", "previous", "processing-instruction", "relationship", "rename", "replace", "return", "revalidation", "same", "satisfies", "schema", "schema-attribute", "schema-element", "score", "self", "sensitive", "sentence", "sentences", "sequence", "skip", "sliding", "some", "stable", "start", "stemming", "stop", "strict", "strip", "switch", "text", "then", "thesaurus", "times", "to", "transform", "treat", "try", "tumbling", "type", "typeswitch", "union", "unordered", "update", "updating", "uppercase", "using", "validate", "value", "variable", "version", "weight", "when", "where", "wildcards", "window", "with", "without", "word", "words", "xquery"];
    var s = 0;
    var o = i.length;
    for (; s < o; s++) {
      a[i[s]] = e(i[s]);
    }
    var c = ["xs:anyAtomicType", "xs:anySimpleType", "xs:anyType", "xs:anyURI", "xs:base64Binary", "xs:boolean", "xs:byte", "xs:date", "xs:dateTime", "xs:dateTimeStamp", "xs:dayTimeDuration", "xs:decimal", "xs:double", "xs:duration", "xs:ENTITIES", "xs:ENTITY", "xs:float", "xs:gDay", "xs:gMonth", "xs:gMonthDay", "xs:gYear", "xs:gYearMonth", "xs:hexBinary", "xs:ID", "xs:IDREF", "xs:IDREFS", "xs:int", "xs:integer", "xs:item", "xs:java", "xs:language", "xs:long", "xs:Name", "xs:NCName", "xs:negativeInteger", "xs:NMTOKEN", "xs:NMTOKENS", "xs:nonNegativeInteger", "xs:nonPositiveInteger", "xs:normalizedString", "xs:NOTATION", "xs:numeric", "xs:positiveInteger", "xs:precisionDecimal", "xs:QName", "xs:short", "xs:string", "xs:time", "xs:token", "xs:unsignedByte", "xs:unsignedInt", "xs:unsignedLong", "xs:unsignedShort", "xs:untyped", "xs:untypedAtomic", "xs:yearMonthDuration"];
    var s = 0;
    var o = c.length;
    for (; s < o; s++) {
      a[c[s]] = n;
    }
    var u = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"];
    var s = 0;
    var o = u.length;
    for (; s < o; s++) {
      a[u[s]] = t;
    }
    var l = ["self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::"];
    var s = 0;
    var o = l.length;
    for (; s < o; s++) {
      a[l[s]] = r;
    }
    return a;
  }();
  function a(e, t, n) {
    t.tokenize = n;
    return n(e, t);
  }
  function i(e, t) {
    var n = e.next();
    var p = false;
    var y = (h = e).current() === "\"" ? h.match(/^[^\"]+\"\:/, false) : h.current() === "'" && h.match(/^[^\"]+\'\:/, false);
    if (n == "<") {
      if (e.match("!--", true)) {
        return a(e, t, l);
      }
      if (e.match("![CDATA", false)) {
        t.tokenize = f;
        return "tag";
      }
      if (e.match("?", false)) {
        return a(e, t, m);
      }
      var h;
      var k;
      var v;
      var b = e.eat("/");
      e.eatSpace();
      var z;
      var w = "";
      while (z = e.eat(/[^\s\u00a0=<>\"\'\/?]/)) {
        w += z;
      }
      return a(e, t, (k = w, v = b, function (e, t) {
        e.eatSpace();
        if (v && e.eat(">")) {
          d(t);
          t.tokenize = i;
        } else {
          if (!e.eat("/")) {
            g(t, {
              type: "tag",
              name: k,
              tokenize: i
            });
          }
          if (e.eat(">")) {
            t.tokenize = i;
          } else {
            t.tokenize = u;
          }
        }
        return "tag";
      }));
    }
    if (n == "{") {
      g(t, {
        type: "codeblock"
      });
      return null;
    }
    if (n == "}") {
      d(t);
      return null;
    }
    if (x(t, "tag")) {
      if (n == ">") {
        return "tag";
      } else if (n == "/" && e.eat(">")) {
        d(t);
        return "tag";
      } else {
        return "variable";
      }
    }
    if (/\d/.test(n)) {
      e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);
      return "atom";
    }
    if (n === "(" && e.eat(":")) {
      g(t, {
        type: "comment"
      });
      return a(e, t, s);
    }
    if (!y && (n === "\"" || n === "'")) {
      return a(e, t, o(n));
    }
    if (n === "$") {
      return a(e, t, c);
    }
    if (n === ":" && e.eat("=")) {
      return "keyword";
    }
    if (n === "(") {
      g(t, {
        type: "paren"
      });
      return null;
    }
    if (n === ")") {
      d(t);
      return null;
    }
    if (n === "[") {
      g(t, {
        type: "bracket"
      });
      return null;
    }
    if (n === "]") {
      d(t);
      return null;
    }
    var _ = r.propertyIsEnumerable(n) && r[n];
    if (y && n === "\"") {
      while (e.next() !== "\"");
    }
    if (y && n === "'") {
      while (e.next() !== "'");
    }
    if (!_) {
      e.eatWhile(/[\w\$_-]/);
    }
    var D = e.eat(":");
    if (!e.eat(":") && D) {
      e.eatWhile(/[\w\$_-]/);
    }
    if (e.match(/^[ \t]*\(/, false)) {
      p = true;
    }
    var I = e.current();
    _ = r.propertyIsEnumerable(I) && r[I];
    if (p && !_) {
      _ = {
        type: "function_call",
        style: "def"
      };
    }
    if (x(t, "xmlconstructor")) {
      d(t);
      return "variable";
    } else {
      if (I == "element" || I == "attribute" || _.type == "axis_specifier") {
        g(t, {
          type: "xmlconstructor"
        });
      }
      if (_) {
        return _.style;
      } else {
        return "variable";
      }
    }
  }
  function s(e, t) {
    var n;
    var r = false;
    var a = false;
    var i = 0;
    while (n = e.next()) {
      if (n == ")" && r) {
        if (i > 0) {
          i--;
        } else {
          d(t);
          break;
        }
      } else if (n == ":" && a) {
        i++;
      }
      r = n == ":";
      a = n == "(";
    }
    return "comment";
  }
  function o(e, t) {
    return function (n, r) {
      var a;
      if (x(r, "string") && n.current() == e) {
        d(r);
        if (t) {
          r.tokenize = t;
        }
        return "string";
      }
      g(r, {
        type: "string",
        name: e,
        tokenize: o(e, t)
      });
      if (n.match("{", false) && p(r)) {
        r.tokenize = i;
        return "string";
      }
      while (a = n.next()) {
        if (a == e) {
          d(r);
          if (t) {
            r.tokenize = t;
          }
          break;
        }
        if (n.match("{", false) && p(r)) {
          r.tokenize = i;
          break;
        }
      }
      return "string";
    };
  }
  function c(e, t) {
    var n = /[\w\$_-]/;
    if (e.eat("\"")) {
      while (e.next() !== "\"");
      e.eat(":");
    } else {
      e.eatWhile(n);
      if (!e.match(":=", false)) {
        e.eat(":");
      }
    }
    e.eatWhile(n);
    t.tokenize = i;
    return "variable";
  }
  function u(e, t) {
    var n = e.next();
    if (n == "/" && e.eat(">")) {
      if (p(t)) {
        d(t);
      }
      if (x(t, "tag")) {
        d(t);
      }
      return "tag";
    } else if (n == ">") {
      if (p(t)) {
        d(t);
      }
      return "tag";
    } else if (n == "=") {
      return null;
    } else if (n == "\"" || n == "'") {
      return a(e, t, o(n, u));
    } else {
      if (!p(t)) {
        g(t, {
          type: "attribute",
          tokenize: u
        });
      }
      e.eat(/[a-zA-Z_:]/);
      e.eatWhile(/[-a-zA-Z0-9_:.]/);
      e.eatSpace();
      if (e.match(">", false) || e.match("/", false)) {
        d(t);
        t.tokenize = i;
      }
      return "attribute";
    }
  }
  function l(e, t) {
    for (var n; n = e.next();) {
      if (n == "-" && e.match("->", true)) {
        t.tokenize = i;
        return "comment";
      }
    }
  }
  function f(e, t) {
    for (var n; n = e.next();) {
      if (n == "]" && e.match("]", true)) {
        t.tokenize = i;
        return "comment";
      }
    }
  }
  function m(e, t) {
    for (var n; n = e.next();) {
      if (n == "?" && e.match(">", true)) {
        t.tokenize = i;
        return "processingInstruction";
      }
    }
  }
  function p(e) {
    return x(e, "attribute");
  }
  function x(e, t) {
    return e.stack.length && e.stack[e.stack.length - 1].type == t;
  }
  function g(e, t) {
    e.stack.push(t);
  }
  function d(e) {
    e.stack.pop();
    var t = e.stack.length && e.stack[e.stack.length - 1].tokenize;
    e.tokenize = t || i;
  }
  let y = {
    name: "xquery",
    startState: function () {
      return {
        tokenize: i,
        cc: [],
        stack: []
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      } else {
        return t.tokenize(e, t);
      }
    },
    languageData: {
      commentTokens: {
        block: {
          open: "(:",
          close: ":)"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    xQuery: function () {
      return y;
    }
  });
}