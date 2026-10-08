// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17553.09609e05.js
         * chunkId: 17553
         * moduleId: 948318
         */
module.exports = function (module, exports, require) {
  function a(e) {
    return RegExp("^(?:" + e.join("|") + ")$", "i");
  }
  var r = a(["_G", "_VERSION", "assert", "collectgarbage", "dofile", "error", "getfenv", "getmetatable", "ipairs", "load", "loadfile", "loadstring", "module", "next", "pairs", "pcall", "print", "rawequal", "rawget", "rawset", "require", "select", "setfenv", "setmetatable", "tonumber", "tostring", "type", "unpack", "xpcall", "coroutine.create", "coroutine.resume", "coroutine.running", "coroutine.status", "coroutine.wrap", "coroutine.yield", "debug.debug", "debug.getfenv", "debug.gethook", "debug.getinfo", "debug.getlocal", "debug.getmetatable", "debug.getregistry", "debug.getupvalue", "debug.setfenv", "debug.sethook", "debug.setlocal", "debug.setmetatable", "debug.setupvalue", "debug.traceback", "close", "flush", "lines", "read", "seek", "setvbuf", "write", "io.close", "io.flush", "io.input", "io.lines", "io.open", "io.output", "io.popen", "io.read", "io.stderr", "io.stdin", "io.stdout", "io.tmpfile", "io.type", "io.write", "math.abs", "math.acos", "math.asin", "math.atan", "math.atan2", "math.ceil", "math.cos", "math.cosh", "math.deg", "math.exp", "math.floor", "math.fmod", "math.frexp", "math.huge", "math.ldexp", "math.log", "math.log10", "math.max", "math.min", "math.modf", "math.pi", "math.pow", "math.rad", "math.random", "math.randomseed", "math.sin", "math.sinh", "math.sqrt", "math.tan", "math.tanh", "os.clock", "os.date", "os.difftime", "os.execute", "os.exit", "os.getenv", "os.remove", "os.rename", "os.setlocale", "os.time", "os.tmpname", "package.cpath", "package.loaded", "package.loaders", "package.loadlib", "package.path", "package.preload", "package.seeall", "string.byte", "string.char", "string.dump", "string.find", "string.format", "string.gmatch", "string.gsub", "string.len", "string.lower", "string.match", "string.rep", "string.reverse", "string.sub", "string.upper", "table.concat", "table.insert", "table.maxn", "table.remove", "table.sort"]);
  var o = a(["and", "break", "elseif", "false", "nil", "not", "or", "return", "true", "function", "end", "if", "then", "else", "do", "while", "repeat", "until", "for", "in", "local"]);
  var i = a(["function", "if", "repeat", "do", "\\(", "{"]);
  var s = a(["end", "until", "\\)", "}"]);
  var l = RegExp("^(?:end|until|\\)|}|else|elseif)", "i");
  function u(e) {
    var t = 0;
    for (; e.eat("=");) {
      ++t;
    }
    e.eat("[");
    return t;
  }
  function c(e, t) {
    var n;
    var a = e.next();
    if (a == "-" && e.eat("-")) {
      if (e.eat("[") && e.eat("[")) {
        return (t.cur = g(u(e), "comment"))(e, t);
      } else {
        e.skipToEnd();
        return "comment";
      }
    }
    if (a == "\"" || a == "'") {
      return (n = a, t.cur = function (e, t) {
        var a;
        var r = false;
        while ((a = e.next()) != null && (a != n || r)) {
          r = !r && a == "\\";
        }
        if (!r) {
          t.cur = c;
        }
        return "string";
      })(e, t);
    } else if (a == "[" && /[\[=]/.test(e.peek())) {
      return (t.cur = g(u(e), "string"))(e, t);
    } else if (/\d/.test(a)) {
      e.eatWhile(/[\w.%]/);
      return "number";
    } else if (/[\w_]/.test(a)) {
      e.eatWhile(/[\w\\\-_.]/);
      return "variable";
    } else {
      return null;
    }
  }
  function g(e, t) {
    return function (n, a) {
      var r;
      var o = null;
      while ((r = n.next()) != null) {
        if (o == null) {
          if (r == "]") {
            o = 0;
          }
        } else if (r == "=") {
          ++o;
        } else if (r == "]" && o == e) {
          a.cur = c;
          break;
        } else {
          o = null;
        }
      }
      return t;
    };
  }
  let m = {
    name: "lua",
    startState: function () {
      return {
        basecol: 0,
        indentDepth: 0,
        cur: c
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      }
      var n = t.cur(e, t);
      var a = e.current();
      if (n == "variable") {
        if (o.test(a)) {
          n = "keyword";
        } else if (r.test(a)) {
          n = "builtin";
        }
      }
      if (n != "comment" && n != "string") {
        if (i.test(a)) {
          ++t.indentDepth;
        } else if (s.test(a)) {
          --t.indentDepth;
        }
      }
      return n;
    },
    indent: function (e, t, n) {
      var a = l.test(t);
      return e.basecol + n.unit * (e.indentDepth - +!!a);
    },
    languageData: {
      indentOnInput: /^\s*(?:end|until|else|\)|\})$/,
      commentTokens: {
        line: "--",
        block: {
          open: "--[[",
          close: "]]--"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    lua: function () {
      return m;
    }
  });
}