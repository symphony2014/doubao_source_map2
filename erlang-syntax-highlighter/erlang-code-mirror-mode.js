// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 61067.488e4164.js
         * chunkId: 61067
         * moduleId: 654262
         */
module.exports = function (module, exports, require) {
  var n = ["-type", "-spec", "-export_type", "-opaque"];
  var i = ["after", "begin", "catch", "case", "cond", "end", "fun", "if", "let", "of", "query", "receive", "try", "when"];
  var o = /[\->,;]/;
  var a = ["->", ";", ","];
  var c = ["and", "andalso", "band", "bnot", "bor", "bsl", "bsr", "bxor", "div", "not", "or", "orelse", "rem", "xor"];
  var s = /[\+\-\*\/<>=\|:!]/;
  var u = ["=", "+", "-", "*", "/", ">", ">=", "<", "=<", "=:=", "==", "=/=", "/=", "||", "<-", "!"];
  var l = /[<\(\[\{]/;
  var _ = ["<<", "(", "[", "{"];
  var f = /[>\)\]\}]/;
  var p = ["}", "]", ")", ">>"];
  var m = ["is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_record", "is_reference", "is_tuple", "atom", "binary", "bitstring", "boolean", "function", "integer", "list", "number", "pid", "port", "record", "reference", "tuple"];
  var d = ["abs", "adler32", "adler32_combine", "alive", "apply", "atom_to_binary", "atom_to_list", "binary_to_atom", "binary_to_existing_atom", "binary_to_list", "binary_to_term", "bit_size", "bitstring_to_list", "byte_size", "check_process_code", "contact_binary", "crc32", "crc32_combine", "date", "decode_packet", "delete_module", "disconnect_node", "element", "erase", "exit", "float", "float_to_list", "garbage_collect", "get", "get_keys", "group_leader", "halt", "hd", "integer_to_list", "internal_bif", "iolist_size", "iolist_to_binary", "is_alive", "is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_process_alive", "is_record", "is_reference", "is_tuple", "length", "link", "list_to_atom", "list_to_binary", "list_to_bitstring", "list_to_existing_atom", "list_to_float", "list_to_integer", "list_to_pid", "list_to_tuple", "load_module", "make_ref", "module_loaded", "monitor_node", "node", "node_link", "node_unlink", "nodes", "notalive", "now", "open_port", "pid_to_list", "port_close", "port_command", "port_connect", "port_control", "pre_loaded", "process_flag", "process_info", "processes", "purge_module", "put", "register", "registered", "round", "self", "setelement", "size", "spawn", "spawn_link", "spawn_monitor", "spawn_opt", "split_binary", "statistics", "term_to_binary", "time", "throw", "tl", "trunc", "tuple_size", "tuple_to_list", "unlink", "unregister", "whereis"];
  var b = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/;
  var g = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
  function k(e, t, r) {
    if (e.current().length == 1 && t.test(e.current())) {
      for (e.backUp(1); t.test(e.peek());) {
        e.next();
        if (x(e.current(), r)) {
          return true;
        }
      }
      e.backUp(e.current().length - 1);
    }
    return false;
  }
  function h(e, t, r) {
    if (e.current().length == 1 && t.test(e.current())) {
      while (t.test(e.peek())) {
        e.next();
      }
      while (e.current().length > 0) {
        if (x(e.current(), r)) {
          return true;
        }
        e.backUp(1);
      }
      e.next();
    }
    return false;
  }
  function y(e) {
    return w(e, "\"", "\\");
  }
  function v(e) {
    return w(e, "'", "\\");
  }
  function w(e, t, r) {
    while (!e.eol()) {
      var n = e.next();
      if (n == t) {
        return true;
      }
      if (n == r) {
        e.next();
      }
    }
    return false;
  }
  function x(e, t) {
    return t.indexOf(e) > -1;
  }
  function S(e, t, r) {
    var n;
    var i;
    var o;
    var a;
    var c;
    var s;
    var u;
    o = e;
    if ((n = r, a = z((i = t).current(), i.column(), i.indentation(), n)).type != "comment" && a.type != "whitespace") {
      c = o.tokenStack;
      s = a;
      if ((u = c.length - 1) > 0 && c[u].type === "record" && s.type === "dot") {
        c.pop();
      } else {
        if (u > 0 && c[u].type === "group") {
          c.pop();
        }
        c.push(s);
      }
      o.tokenStack = c;
      o.tokenStack = function (e) {
        if (!e.length) {
          return e;
        }
        var t = e.length - 1;
        if (e[t].type === "dot") {
          return [];
        }
        if (t > 1 && e[t].type === "fun" && e[t - 1].token === "fun") {
          return e.slice(0, t - 1);
        }
        switch (e[t].token) {
          case "}":
            return E(e, {
              g: ["{"]
            });
          case "]":
            return E(e, {
              i: ["["]
            });
          case ")":
            return E(e, {
              i: ["("]
            });
          case ">>":
            return E(e, {
              i: ["<<"]
            });
          case "end":
            return E(e, {
              i: ["begin", "case", "fun", "if", "receive", "try"]
            });
          case ",":
            return E(e, {
              e: ["begin", "try", "when", "->", ",", "(", "[", "{", "<<"]
            });
          case "->":
            return E(e, {
              r: ["when"],
              m: ["try", "if", "case", "receive"]
            });
          case ";":
            return E(e, {
              E: ["case", "fun", "if", "receive", "try", "when"]
            });
          case "catch":
            return E(e, {
              e: ["try"]
            });
          case "of":
            return E(e, {
              e: ["case"]
            });
          case "after":
            return E(e, {
              e: ["receive", "try"]
            });
          default:
            return e;
        }
      }(o.tokenStack);
    }
    switch (r) {
      case "atom":
      case "boolean":
        return "atom";
      case "attribute":
        return "attribute";
      case "builtin":
        return "builtin";
      case "close_paren":
      case "colon":
      case "dot":
      case "open_paren":
      case "separator":
      default:
        return null;
      case "comment":
        return "comment";
      case "error":
        return "error";
      case "fun":
        return "meta";
      case "function":
        return "tag";
      case "guard":
        return "property";
      case "keyword":
        return "keyword";
      case "macro":
        return "macroName";
      case "number":
        return "number";
      case "operator":
        return "operator";
      case "record":
        return "bracket";
      case "string":
        return "string";
      case "type":
        return "def";
      case "variable":
        return "variable";
    }
  }
  function z(e, t, r, n) {
    return {
      token: e,
      column: t,
      indent: r,
      type: n
    };
  }
  function A(e, t) {
    var r = e.tokenStack.length;
    var n = t || 1;
    return !(r < n) && e.tokenStack[r - n];
  }
  function E(e, t) {
    for (var r in t) {
      var n = e.length - 1;
      var i = t[r];
      var o = n - 1;
      for (; o > -1; o--) {
        if (x(e[o].token, i)) {
          var a;
          var c = e.slice(0, o);
          switch (r) {
            case "m":
              return c.concat(e[o]).concat(e[n]);
            case "r":
              return c.concat(e[n]);
            case "i":
              return c;
            case "g":
              return c.concat(z(a = "group", 0, 0, a));
            case "E":
            case "e":
              return c.concat(e[o]);
          }
        }
      }
    }
    if (r == "E") {
      return [];
    } else {
      return e;
    }
  }
  function U(e, t) {
    var r = e.tokenStack;
    var n = W(r, "token", t);
    return !!D(r[n]) && r[n];
  }
  function W(e, t, r) {
    for (var n = e.length - 1; n > -1; n--) {
      if (x(e[n][t], r)) {
        return n;
      }
    }
    return false;
  }
  function D(e) {
    return e !== false && e != null;
  }
  let L = {
    name: "erlang",
    startState: () => ({
      tokenStack: [],
      in_string: false,
      in_atom: false
    }),
    token: function (e, t) {
      if (t.in_string) {
        t.in_string = !y(e);
        return S(t, e, "string");
      }
      if (t.in_atom) {
        t.in_atom = !v(e);
        return S(t, e, "atom");
      }
      if (e.eatSpace()) {
        return S(t, e, "whitespace");
      }
      if (!A(t) && e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) {
        if (x(e.current(), n)) {
          return S(t, e, "type");
        } else {
          return S(t, e, "attribute");
        }
      }
      var r = e.next();
      if (r == "%") {
        e.skipToEnd();
        return S(t, e, "comment");
      }
      if (r == ":") {
        return S(t, e, "colon");
      }
      if (r == "?") {
        e.eatSpace();
        e.eatWhile(b);
        return S(t, e, "macro");
      }
      if (r == "#") {
        e.eatSpace();
        e.eatWhile(b);
        return S(t, e, "record");
      }
      if (r == "$") {
        if (e.next() != "\\" || e.match(g)) {
          return S(t, e, "number");
        } else {
          return S(t, e, "error");
        }
      }
      if (r == ".") {
        return S(t, e, "dot");
      }
      if (r == "'") {
        if (!(t.in_atom = !v(e))) {
          if (e.match(/\s*\/\s*[0-9]/, false)) {
            e.match(/\s*\/\s*[0-9]/, true);
            return S(t, e, "fun");
          }
          if (e.match(/\s*\(/, false) || e.match(/\s*:/, false)) {
            return S(t, e, "function");
          }
        }
        return S(t, e, "atom");
      }
      if (r == "\"") {
        t.in_string = !y(e);
        return S(t, e, "string");
      }
      if (/[A-Z_Ø-ÞÀ-Ö]/.test(r)) {
        e.eatWhile(b);
        return S(t, e, "variable");
      }
      if (/[a-z_ß-öø-ÿ]/.test(r)) {
        e.eatWhile(b);
        if (e.match(/\s*\/\s*[0-9]/, false)) {
          e.match(/\s*\/\s*[0-9]/, true);
          return S(t, e, "fun");
        }
        var w;
        var z = e.current();
        if (x(z, i)) {
          return S(t, e, "keyword");
        }
        if (x(z, c)) {
          return S(t, e, "operator");
        }
        if (e.match(/\s*\(/, false)) {
          if (x(z, d) && (A(t).token != ":" || A(t, 2).token == "erlang")) {
            return S(t, e, "builtin");
          } else if (x(z, m)) {
            return S(t, e, "guard");
          } else {
            return S(t, e, "function");
          }
        } else if (((w = e.match(/^\s*([^\s%])/, false)) ? w[1] : "") == ":") {
          if (z == "erlang") {
            return S(t, e, "builtin");
          } else {
            return S(t, e, "function");
          }
        } else if (x(z, ["true", "false"])) {
          return S(t, e, "boolean");
        } else {
          return S(t, e, "atom");
        }
      }
      var E = /[0-9]/;
      if (E.test(r)) {
        e.eatWhile(E);
        if (e.eat("#")) {
          if (!e.eatWhile(/[0-9a-zA-Z]/)) {
            e.backUp(1);
          }
        } else if (e.eat(".")) {
          if (e.eatWhile(E)) {
            if (e.eat(/[eE]/)) {
              if (e.eat(/[-+]/)) {
                if (!e.eatWhile(E)) {
                  e.backUp(2);
                }
              } else if (!e.eatWhile(E)) {
                e.backUp(1);
              }
            }
          } else {
            e.backUp(1);
          }
        }
        return S(t, e, "number");
      } else if (k(e, l, _)) {
        return S(t, e, "open_paren");
      } else if (k(e, f, p)) {
        return S(t, e, "close_paren");
      } else if (h(e, o, a)) {
        return S(t, e, "separator");
      } else if (h(e, s, u)) {
        return S(t, e, "operator");
      } else {
        return S(t, e, null);
      }
    },
    indent: function (e, t, r) {
      var n;
      var i;
      var o;
      var a;
      var c;
      var s;
      var u;
      var l = D(s = t.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/)) && s.index === 0 ? s[0] : "";
      var f = A(e, 1);
      var m = A(e, 2);
      if (e.in_string || e.in_atom) {
        return null;
      }
      if (!m) {
        return 0;
      }
      if (f.token == "when") {
        return f.column + r.unit;
      }
      if (l === "when" && m.type === "function") {
        return m.indent + r.unit;
      }
      if (l === "(" && f.token === "fun") {
        return f.column + 3;
      } else if (l === "catch" && (u = U(e, ["try"]))) {
        return u.column;
      } else if (x(l, ["end", "after", "of"])) {
        if (u = U(e, ["begin", "case", "fun", "if", "receive", "try"])) {
          return u.column;
        } else {
          return null;
        }
      } else if (x(l, p)) {
        if (u = U(e, _)) {
          return u.column;
        } else {
          return null;
        }
      } else if (x(f.token, [",", "|", "||"]) || x(l, [",", "|", "||"])) {
        i = W(n = e.tokenStack.slice(0, -1), "type", ["open_paren"]);
        if (u = !!D(n[i]) && n[i]) {
          return u.column + u.token.length;
        } else {
          return r.unit;
        }
      } else {
        if (f.token == "->") {
          if (x(m.token, ["receive", "case", "if", "try"])) {
            return m.column + r.unit + r.unit;
          } else {
            return m.column + r.unit;
          }
        }
        if (x(f.token, _)) {
          return f.column + f.token.length;
        }
        if (D((a = W(o = e.tokenStack, "type", ["open_paren", "separator", "keyword"]), c = W(o, "type", ["operator"]), u = D(a) && D(c) && a < c ? o[a + 1] : !!D(a) && o[a]))) {
          return u.column + r.unit;
        } else {
          return 0;
        }
      }
    },
    languageData: {
      commentTokens: {
        line: "%"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    erlang: function () {
      return L;
    }
  });
}