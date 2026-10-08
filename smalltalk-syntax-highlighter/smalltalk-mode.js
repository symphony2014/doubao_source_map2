// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17349.2feb5fb3.js
         * chunkId: 17349
         * moduleId: 133479
         */
module.exports = function (module, exports, require) {
  var a = /[+\-\/\\*~<>=@%|&?!.,:;^]/;
  var i = /true|false|nil|self|super|thisContext/;
  function r(e, t) {
    this.next = e;
    this.parent = t;
  }
  function s(e, t, n) {
    this.name = e;
    this.context = t;
    this.eos = n;
  }
  function o() {
    this.context = new r(l, null);
    this.expectVariable = true;
    this.indentation = 0;
    this.userIndentationDelta = 0;
  }
  o.prototype.userIndent = function (e, t) {
    this.userIndentationDelta = e > 0 ? e / t - this.indentation : 0;
  };
  function l(e, t, n) {
    var o = new s(null, t, false);
    var l = e.next();
    if (l === "\"") {
      o = u(e, new r(u, t));
    } else if (l === "'") {
      o = c(e, new r(c, t));
    } else if (l === "#") {
      if (e.peek() === "'") {
        e.next();
        o = h(e, new r(h, t));
      } else if (e.eatWhile(/[^\s.{}\[\]()]/)) {
        o.name = "string.special";
      } else {
        o.name = "meta";
      }
    } else if (l === "$") {
      if (e.next() === "<") {
        e.eatWhile(/[^\s>]/);
        e.next();
      }
      o.name = "string.special";
    } else if (l === "|" && n.expectVariable) {
      o.context = new r(x, t);
    } else if (/[\[\]{}()]/.test(l)) {
      o.name = "bracket";
      o.eos = /[\[{(]/.test(l);
      if (l === "[") {
        n.indentation++;
      } else if (l === "]") {
        n.indentation = Math.max(0, n.indentation - 1);
      }
    } else if (a.test(l)) {
      e.eatWhile(a);
      o.name = "operator";
      o.eos = l !== ";";
    } else if (/\d/.test(l)) {
      e.eatWhile(/[\w\d]/);
      o.name = "number";
    } else if (/[\w_]/.test(l)) {
      e.eatWhile(/[\w\d_]/);
      o.name = n.expectVariable ? i.test(e.current()) ? "keyword" : "variable" : null;
    } else {
      o.eos = n.expectVariable;
    }
    return o;
  }
  function u(e, t) {
    e.eatWhile(/[^"]/);
    return new s("comment", e.eat("\"") ? t.parent : t, true);
  }
  function c(e, t) {
    e.eatWhile(/[^']/);
    return new s("string", e.eat("'") ? t.parent : t, false);
  }
  function h(e, t) {
    e.eatWhile(/[^']/);
    return new s("string.special", e.eat("'") ? t.parent : t, false);
  }
  function x(e, t) {
    var n = new s(null, t, false);
    if (e.next() === "|") {
      n.context = t.parent;
      n.eos = true;
    } else {
      e.eatWhile(/[^|]/);
      n.name = "variable";
    }
    return n;
  }
  let d = {
    name: "smalltalk",
    startState: function () {
      return new o();
    },
    token: function (e, t) {
      t.userIndent(e.indentation(), e.indentUnit);
      if (e.eatSpace()) {
        return null;
      }
      var n = t.context.next(e, t.context, t);
      t.context = n.context;
      t.expectVariable = n.eos;
      return n.name;
    },
    blankLine: function (e, t) {
      e.userIndent(0, t);
    },
    indent: function (e, t, n) {
      var a = e.context.next === l && t && t.charAt(0) === "]" ? -1 : e.userIndentationDelta;
      return (e.indentation + a) * n.unit;
    },
    languageData: {
      indentOnInput: /^\s*\]$/
    }
  };
  require.r(exports);
  require.d(exports, {
    smalltalk: function () {
      return d;
    }
  });
}