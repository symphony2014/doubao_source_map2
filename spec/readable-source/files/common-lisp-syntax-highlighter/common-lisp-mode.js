// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23252.1032e287.js
         * chunkId: 23252
         * moduleId: 170126
         */
module.exports = function (module, exports, require) {
  var r;
  var o = /^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/;
  var l = /^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/;
  var i = /^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/;
  var a = /[^\s'`,@()\[\]";]/;
  function c(e) {
    for (var t; t = e.next();) {
      if (t == "\\") {
        e.next();
      } else if (!a.test(t)) {
        e.backUp(1);
        break;
      }
    }
    return e.current();
  }
  function u(e, t) {
    if (e.eatSpace()) {
      r = "ws";
      return null;
    }
    if (e.match(i)) {
      return "number";
    }
    var n = e.next();
    if (n == "\\") {
      n = e.next();
    }
    if (n == "\"") {
      return (t.tokenize = s)(e, t);
    }
    if (n == "(") {
      r = "open";
      return "bracket";
    }
    if (n == ")") {
      r = "close";
      return "bracket";
    }
    if (n == ";") {
      e.skipToEnd();
      r = "ws";
      return "comment";
    }
    if (/['`,@]/.test(n)) {
      return null;
    } else if (n == "|") {
      if (e.skipTo("|")) {
        e.next();
        return "variableName";
      } else {
        e.skipToEnd();
        return "error";
      }
    } else if (n == "#") {
      var n = e.next();
      if (n == "(") {
        r = "open";
        return "bracket";
      }
      if (/[+\-=\.']/.test(n)) {
        return null;
      }
      if (/\d/.test(n) && e.match(/^\d*#/)) {
        return null;
      } else if (n == "|") {
        return (t.tokenize = f)(e, t);
      } else if (n == ":") {
        c(e);
        return "meta";
      } else if (n == "\\") {
        e.next();
        c(e);
        return "string.special";
      } else {
        return "error";
      }
    } else {
      var a = c(e);
      if (a == ".") {
        return null;
      } else {
        r = "symbol";
        if (a == "nil" || a == "t" || a.charAt(0) == ":") {
          return "atom";
        } else if (t.lastType == "open" && (o.test(a) || l.test(a))) {
          return "keyword";
        } else if (a.charAt(0) == "&") {
          return "variableName.special";
        } else {
          return "variableName";
        }
      }
    }
  }
  function s(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "\"" && !r) {
        t.tokenize = u;
        break;
      }
      r = !r && n == "\\";
    }
    return "string";
  }
  function f(e, t) {
    var n;
    var o;
    while (n = e.next()) {
      if (n == "#" && o == "|") {
        t.tokenize = u;
        break;
      }
      o = n;
    }
    r = "ws";
    return "comment";
  }
  let d = {
    name: "commonlisp",
    startState: function () {
      return {
        ctx: {
          prev: null,
          start: 0,
          indentTo: 0
        },
        lastType: null,
        tokenize: u
      };
    },
    token: function (e, t) {
      if (e.sol() && typeof t.ctx.indentTo != "number") {
        t.ctx.indentTo = t.ctx.start + 1;
      }
      r = null;
      var n = t.tokenize(e, t);
      if (r != "ws") {
        if (t.ctx.indentTo == null) {
          if (r == "symbol" && l.test(e.current())) {
            t.ctx.indentTo = t.ctx.start + e.indentUnit;
          } else {
            t.ctx.indentTo = "next";
          }
        } else if (t.ctx.indentTo == "next") {
          t.ctx.indentTo = e.column();
        }
        t.lastType = r;
      }
      if (r == "open") {
        t.ctx = {
          prev: t.ctx,
          start: e.column(),
          indentTo: null
        };
      } else if (r == "close") {
        t.ctx = t.ctx.prev || t.ctx;
      }
      return n;
    },
    indent: function (e) {
      var t = e.ctx.indentTo;
      if (typeof t == "number") {
        return t;
      } else {
        return e.ctx.start + 1;
      }
    },
    languageData: {
      commentTokens: {
        line: ";;",
        block: {
          open: "#|",
          close: "|#"
        }
      },
      closeBrackets: {
        brackets: ["(", "[", "{", "\""]
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    commonLisp: function () {
      return d;
    }
  });
}