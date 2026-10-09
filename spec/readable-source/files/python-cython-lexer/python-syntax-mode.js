// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67630.d017c1eb.js
         * chunkId: 67630
         * moduleId: 346979
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b");
  }
  var i = r(["and", "or", "not", "is"]);
  var a = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in", "False", "True"];
  var o = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
  function s(e) {
    return e.scopes[e.scopes.length - 1];
  }
  function l(e) {
    var t = "error";
    var n = e.delimiters || e.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/;
    var l = [e.singleOperators, e.doubleOperators, e.doubleDelimiters, e.tripleDelimiters, e.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/];
    var c = 0;
    for (; c < l.length; c++) {
      if (!l[c]) {
        l.splice(c--, 1);
      }
    }
    var u = e.hangingIndent;
    var f = a;
    var p = o;
    if (e.extra_keywords != undefined) {
      f = f.concat(e.extra_keywords);
    }
    if (e.extra_builtins != undefined) {
      p = p.concat(e.extra_builtins);
    }
    var d = !e.version || !(Number(e.version) < 3);
    if (d) {
      var m = e.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
      f = f.concat(["nonlocal", "None", "aiter", "anext", "async", "await", "breakpoint", "match", "case"]);
      p = p.concat(["ascii", "bytes", "exec", "print"]);
      var h = RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))", "i");
    } else {
      var m = e.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
      f = f.concat(["exec", "print"]);
      p = p.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "None"]);
      var h = RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
    }
    var b = r(f);
    var g = r(p);
    function y(e, n) {
      var r = e.sol() && n.lastToken != "\\";
      if (r) {
        n.indent = e.indentation();
      }
      if (r && s(n).type == "py") {
        var i = s(n).offset;
        if (e.eatSpace()) {
          var a = e.indentation();
          if (a > i) {
            v(e, n);
          } else if (a < i && _(e, n) && e.peek() != "#") {
            n.errorToken = true;
          }
          return null;
        }
        var o = k(e, n);
        if (i > 0 && _(e, n)) {
          o += " " + t;
        }
        return o;
      }
      return k(e, n);
    }
    function k(r, a, o) {
      if (r.eatSpace()) {
        return null;
      }
      if (!o && r.match(/^#.*/)) {
        return "comment";
      }
      if (r.match(/^[0-9\.]/, false)) {
        var s = false;
        if (r.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)) {
          s = true;
        }
        if (r.match(/^[\d_]+\.\d*/)) {
          s = true;
        }
        if (r.match(/^\.\d+/)) {
          s = true;
        }
        if (s) {
          r.eat(/J/i);
          return "number";
        }
        var c = false;
        if (r.match(/^0x[0-9a-f_]+/i)) {
          c = true;
        }
        if (r.match(/^0b[01_]+/i)) {
          c = true;
        }
        if (r.match(/^0o[0-7_]+/i)) {
          c = true;
        }
        if (r.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)) {
          r.eat(/J/i);
          c = true;
        }
        if (r.match(/^0(?![\dx])/i)) {
          c = true;
        }
        if (c) {
          r.eat(/L/i);
          return "number";
        }
      }
      if (r.match(h)) {
        if (r.current().toLowerCase().indexOf("f") === -1) {
          a.tokenize = function (n, r) {
            while ("rubf".indexOf(n.charAt(0).toLowerCase()) >= 0) {
              n = n.substr(1);
            }
            var i = n.length == 1;
            var a = "string";
            function o(o, s) {
              while (!o.eol()) {
                o.eatWhile(/[^'"\\]/);
                if (o.eat("\\")) {
                  o.next();
                  if (i && o.eol()) {
                    return a;
                  }
                } else {
                  if (o.match(n)) {
                    s.tokenize = r;
                    return a;
                  }
                  o.eat(/['"]/);
                }
              }
              if (i) {
                if (e.singleLineStringErrors) {
                  return t;
                }
                s.tokenize = r;
              }
              return a;
            }
            o.isString = true;
            return o;
          }(r.current(), a.tokenize);
        } else {
          a.tokenize = function (n, r) {
            while ("rubf".indexOf(n.charAt(0).toLowerCase()) >= 0) {
              n = n.substr(1);
            }
            var i = n.length == 1;
            var a = "string";
            function o(s, l) {
              while (!s.eol()) {
                s.eatWhile(/[^'"\{\}\\]/);
                if (s.eat("\\")) {
                  s.next();
                  if (i && s.eol()) {
                    return a;
                  }
                } else if (s.match(n)) {
                  l.tokenize = r;
                  return a;
                } else if (s.match("{{")) {
                  return a;
                } else if (s.match("{", false)) {
                  l.tokenize = function e(t) {
                    return function (n, r) {
                      var i = k(n, r, true);
                      if (i == "punctuation") {
                        if (n.current() == "{") {
                          r.tokenize = e(t + 1);
                        } else if (n.current() == "}") {
                          if (t > 1) {
                            r.tokenize = e(t - 1);
                          } else {
                            r.tokenize = o;
                          }
                        }
                      }
                      return i;
                    };
                  }(0);
                  if (s.current()) {
                    return a;
                  }
                  return l.tokenize(s, l);
                } else {
                  if (s.match("}}")) {
                    return a;
                  }
                  if (s.match("}")) {
                    return t;
                  }
                  s.eat(/['"]/);
                }
              }
              if (i) {
                if (e.singleLineStringErrors) {
                  return t;
                }
                l.tokenize = r;
              }
              return a;
            }
            o.isString = true;
            return o;
          }(r.current(), a.tokenize);
        }
        return a.tokenize(r, a);
      }
      for (var u = 0; u < l.length; u++) {
        if (r.match(l[u])) {
          return "operator";
        }
      }
      if (r.match(n)) {
        return "punctuation";
      } else if (a.lastToken == "." && r.match(m)) {
        return "property";
      } else if (r.match(b) || r.match(i)) {
        return "keyword";
      } else if (r.match(g)) {
        return "builtin";
      } else if (r.match(/^(self|cls)\b/)) {
        return "self";
      } else if (r.match(m)) {
        if (a.lastToken == "def" || a.lastToken == "class") {
          return "def";
        } else {
          return "variable";
        }
      } else {
        r.next();
        if (o) {
          return null;
        } else {
          return t;
        }
      }
    }
    function v(e, t) {
      while (s(t).type != "py") {
        t.scopes.pop();
      }
      t.scopes.push({
        offset: s(t).offset + e.indentUnit,
        type: "py",
        align: null
      });
    }
    function _(e, t) {
      for (var n = e.indentation(); t.scopes.length > 1 && s(t).offset > n;) {
        if (s(t).type != "py") {
          return true;
        }
        t.scopes.pop();
      }
      return s(t).offset != n;
    }
    return {
      name: "python",
      startState: function () {
        return {
          tokenize: y,
          scopes: [{
            offset: 0,
            type: "py",
            align: null
          }],
          indent: 0,
          lastToken: null,
          lambda: false,
          dedent: 0
        };
      },
      token: function (e, n) {
        var r = n.errorToken;
        if (r) {
          n.errorToken = false;
        }
        var i = function (e, n) {
          if (e.sol()) {
            n.beginningOfLine = true;
            n.dedent = false;
          }
          var r = n.tokenize(e, n);
          var i = e.current();
          if (n.beginningOfLine && i == "@") {
            if (e.match(m, false)) {
              return "meta";
            } else if (d) {
              return "operator";
            } else {
              return t;
            }
          }
          if (/\S/.test(i)) {
            n.beginningOfLine = false;
          }
          if ((r == "variable" || r == "builtin") && n.lastToken == "meta") {
            r = "meta";
          }
          if (i == "pass" || i == "return") {
            n.dedent = true;
          }
          if (i == "lambda") {
            n.lambda = true;
          }
          if (i == ":" && !n.lambda && s(n).type == "py" && e.match(/^\s*(?:#|$)/, false)) {
            v(e, n);
          }
          if (i.length == 1 && !/string|comment/.test(r)) {
            var a = "[({".indexOf(i);
            if (a != -1) {
              (function (e, t, n) {
                var r = e.match(/^[\s\[\{\(]*(?:#|$)/, false) ? null : e.column() + 1;
                t.scopes.push({
                  offset: t.indent + (u || e.indentUnit),
                  type: n,
                  align: r
                });
              })(e, n, "])}".slice(a, a + 1));
            }
            if ((a = "])}".indexOf(i)) != -1) {
              if (s(n).type != i) {
                return t;
              }
              n.indent = n.scopes.pop().offset - (u || e.indentUnit);
            }
          }
          if (n.dedent && e.eol() && s(n).type == "py" && n.scopes.length > 1) {
            n.scopes.pop();
          }
          return r;
        }(e, n);
        if (i && i != "comment") {
          n.lastToken = i == "keyword" || i == "punctuation" ? e.current() : i;
        }
        if (i == "punctuation") {
          i = null;
        }
        if (e.eol() && n.lambda) {
          n.lambda = false;
        }
        if (r) {
          return t;
        } else {
          return i;
        }
      },
      indent: function (e, t, n) {
        if (e.tokenize != y) {
          if (e.tokenize.isString) {
            return null;
          } else {
            return 0;
          }
        }
        var r = s(e);
        var i = r.type == t.charAt(0) || r.type == "py" && !e.dedent && /^(else:|elif |except |finally:)/.test(t);
        if (r.align != null) {
          return r.align - +!!i;
        } else {
          return r.offset - (i ? u || n.unit : 0);
        }
      },
      languageData: {
        autocomplete: a.concat(o).concat(["exec", "print"]),
        indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
        commentTokens: {
          line: "#"
        },
        closeBrackets: {
          brackets: ["(", "[", "{", "'", "\"", "'''", "\"\"\""]
        }
      }
    };
  }
  let c = l({});
  let u = l({
    extra_keywords: "by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE".split(" ")
  });
  require.r(exports);
  require.d(exports, {
    cython: function () {
      return u;
    },
    mkPython: function () {
      return l;
    },
    python: function () {
      return c;
    }
  });
}