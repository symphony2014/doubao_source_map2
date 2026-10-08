// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80083.89c5e8d7.js
         * chunkId: 80083
         * moduleId: 377328
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = 0;
    for (; n < e.length; n++) {
      t[e[n]] = true;
    }
    return t;
  }
  var i = r(["_", "var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "open", "public", "internal", "fileprivate", "private", "deinit", "init", "new", "override", "self", "subscript", "super", "convenience", "dynamic", "final", "indirect", "lazy", "required", "static", "unowned", "unowned(safe)", "unowned(unsafe)", "weak", "as", "is", "break", "case", "continue", "default", "else", "fallthrough", "for", "guard", "if", "in", "repeat", "switch", "where", "while", "defer", "return", "inout", "mutating", "nonmutating", "isolated", "nonisolated", "catch", "do", "rethrows", "throw", "throws", "async", "await", "try", "didSet", "get", "set", "willSet", "assignment", "associativity", "infix", "left", "none", "operator", "postfix", "precedence", "precedencegroup", "prefix", "right", "Any", "AnyObject", "Type", "dynamicType", "Self", "Protocol", "__COLUMN__", "__FILE__", "__FUNCTION__", "__LINE__"]);
  var a = r(["var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "for"]);
  var o = r(["true", "false", "nil", "self", "super", "_"]);
  var u = r(["Array", "Bool", "Character", "Dictionary", "Double", "Float", "Int", "Int8", "Int16", "Int32", "Int64", "Never", "Optional", "Set", "String", "UInt8", "UInt16", "UInt32", "UInt64", "Void"]);
  var c = /^\-?0b[01][01_]*/;
  var s = /^\-?0o[0-7][0-7_]*/;
  var f = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/;
  var l = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/;
  var p = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/;
  var d = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
  var _ = /^\#[A-Za-z]+/;
  var h = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
  function m(e, t, n) {
    if (e.sol()) {
      t.indented = e.indentation();
    }
    if (e.eatSpace()) {
      return null;
    }
    var r;
    var m = e.peek();
    if (m == "/") {
      if (e.match("//")) {
        e.skipToEnd();
        return "comment";
      }
      if (e.match("/*")) {
        t.tokenize.push(k);
        return k(e, t);
      }
    }
    if (e.match(_)) {
      return "builtin";
    }
    if (e.match(h)) {
      return "attribute";
    }
    if (e.match(c) || e.match(s) || e.match(f) || e.match(l)) {
      return "number";
    }
    if (e.match(d)) {
      return "property";
    }
    if ("+-/*%=|&<>~^?!".indexOf(m) > -1) {
      e.next();
      return "operator";
    }
    if (":;,.(){}[]".indexOf(m) > -1) {
      e.next();
      e.match("..");
      return "punctuation";
    }
    if (r = e.match(/("""|"|')/)) {
      var x = v.bind(null, r[0]);
      t.tokenize.push(x);
      return x(e, t);
    }
    if (e.match(p)) {
      var y = e.current();
      if (u.hasOwnProperty(y)) {
        return "type";
      } else if (o.hasOwnProperty(y)) {
        return "atom";
      } else if (i.hasOwnProperty(y)) {
        if (a.hasOwnProperty(y)) {
          t.prev = "define";
        }
        return "keyword";
      } else if (n == "define") {
        return "def";
      } else {
        return "variable";
      }
    }
    e.next();
    return null;
  }
  function v(e, t, n) {
    var r;
    var i = e.length == 1;
    var a = false;
    while (r = t.peek()) {
      if (a) {
        t.next();
        if (r == "(") {
          n.tokenize.push(function () {
            var e = 0;
            return function (t, n, r) {
              var i = m(t, n, r);
              if (i == "punctuation") {
                if (t.current() == "(") {
                  ++e;
                } else if (t.current() == ")") {
                  if (e == 0) {
                    t.backUp(1);
                    n.tokenize.pop();
                    return n.tokenize[n.tokenize.length - 1](t, n);
                  }
                  --e;
                }
              }
              return i;
            };
          }());
          return "string";
        }
        a = false;
      } else {
        if (t.match(e)) {
          n.tokenize.pop();
          return "string";
        }
        t.next();
        a = r == "\\";
      }
    }
    if (i) {
      n.tokenize.pop();
    }
    return "string";
  }
  function k(e, t) {
    for (var n; n = e.next();) {
      if (n === "/" && e.eat("*")) {
        t.tokenize.push(k);
      } else if (n === "*" && e.eat("/")) {
        t.tokenize.pop();
        break;
      }
    }
    return "comment";
  }
  function x(e, t, n) {
    this.prev = e;
    this.align = t;
    this.indented = n;
  }
  let y = {
    name: "swift",
    startState: function () {
      return {
        prev: null,
        context: null,
        indented: 0,
        tokenize: []
      };
    },
    token: function (e, t) {
      var n = t.prev;
      t.prev = null;
      var r = (t.tokenize[t.tokenize.length - 1] || m)(e, t, n);
      if (r && r != "comment") {
        t.prev ||= r;
      } else {
        t.prev = n;
      }
      if (r == "punctuation") {
        var i = /[\(\[\{]|([\]\)\}])/.exec(e.current());
        if (i) {
          (i[1] ? function (e) {
            if (e.context) {
              e.indented = e.context.indented;
              e.context = e.context.prev;
            }
          } : function (e, t) {
            var n = t.match(/^\s*($|\/[\/\*]|[)}\]])/, false) ? null : t.column() + 1;
            e.context = new x(e.context, n, e.indented);
          })(t, e);
        }
      }
      return r;
    },
    indent: function (e, t, n) {
      var r = e.context;
      if (!r) {
        return 0;
      }
      var i = /^[\]\}\)]/.test(t);
      if (r.align != null) {
        return r.align - +!!i;
      } else {
        return r.indented + (i ? 0 : n.unit);
      }
    },
    languageData: {
      indentOnInput: /^\s*[\)\}\]]$/,
      commentTokens: {
        line: "//",
        block: {
          open: "/*",
          close: "*/"
        }
      },
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "`"]
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    swift: function () {
      return y;
    }
  });
}