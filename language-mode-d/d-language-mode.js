// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'dLanguageMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76537.d187d838.js
         * chunkId: 76537
         * moduleId: 557314
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  var i;
  var o = "body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";
  let a = {
    keywords: r("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters " + o),
    blockKeywords: r(o),
    builtin: r("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),
    atoms: r("exit failure success true false null"),
    hooks: {
      "@": function (e, t) {
        e.eatWhile(/[\w\$_]/);
        return "meta";
      }
    }
  };
  var l = a.statementIndentUnit;
  var u = a.keywords;
  var s = a.builtin;
  var c = a.blockKeywords;
  var f = a.atoms;
  var d = a.hooks;
  var m = a.multiLineStrings;
  var p = /[+\-*&%=<>!?|\/]/;
  function y(e, t) {
    var n;
    var r = e.next();
    if (d[r]) {
      var o = d[r](e, t);
      if (o !== false) {
        return o;
      }
    }
    if (r == "\"" || r == "'" || r == "`") {
      ;
      n = r;
      t.tokenize = function (e, t) {
        var r;
        var i = false;
        var o = false;
        while ((r = e.next()) != null) {
          if (r == n && !i) {
            o = true;
            break;
          }
          i = !i && r == "\\";
        }
        if (o || !i && !m) {
          t.tokenize = null;
        }
        return "string";
      };
      return t.tokenize(e, t);
    }
    if (/[\[\]{}\(\),;\:\.]/.test(r)) {
      i = r;
      return null;
    }
    if (/\d/.test(r)) {
      e.eatWhile(/[\w\.]/);
      return "number";
    }
    if (r == "/") {
      if (e.eat("+")) {
        t.tokenize = h;
        return h(e, t);
      }
      if (e.eat("*")) {
        t.tokenize = _;
        return _(e, t);
      }
      if (e.eat("/")) {
        e.skipToEnd();
        return "comment";
      }
    }
    if (p.test(r)) {
      e.eatWhile(p);
      return "operator";
    }
    e.eatWhile(/[\w\$_\xa1-\uffff]/);
    var a = e.current();
    if (u.propertyIsEnumerable(a)) {
      if (c.propertyIsEnumerable(a)) {
        i = "newstatement";
      }
      return "keyword";
    } else if (s.propertyIsEnumerable(a)) {
      if (c.propertyIsEnumerable(a)) {
        i = "newstatement";
      }
      return "builtin";
    } else if (f.propertyIsEnumerable(a)) {
      return "atom";
    } else {
      return "variable";
    }
  }
  function _(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "/" && r) {
        t.tokenize = null;
        break;
      }
      r = n == "*";
    }
    return "comment";
  }
  function h(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "/" && r) {
        t.tokenize = null;
        break;
      }
      r = n == "+";
    }
    return "comment";
  }
  function b(e, t, n, r, i) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.align = r;
    this.prev = i;
  }
  function k(e, t, n) {
    var r = e.indented;
    if (e.context && e.context.type == "statement") {
      r = e.context.indented;
    }
    return e.context = new b(r, t, n, null, e.context);
  }
  function v(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  let g = {
    name: "d",
    startState: function (e) {
      return {
        tokenize: null,
        context: new b(-e, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },
    token: function (e, t) {
      var n = t.context;
      if (e.sol()) {
        if (n.align == null) {
          n.align = false;
        }
        t.indented = e.indentation();
        t.startOfLine = true;
      }
      if (e.eatSpace()) {
        return null;
      }
      i = null;
      var r = (t.tokenize || y)(e, t);
      if (r == "comment" || r == "meta") {
        return r;
      }
      if (n.align == null) {
        n.align = true;
      }
      if ((i == ";" || i == ":" || i == ",") && n.type == "statement") {
        v(t);
      } else if (i == "{") {
        k(t, e.column(), "}");
      } else if (i == "[") {
        k(t, e.column(), "]");
      } else if (i == "(") {
        k(t, e.column(), ")");
      } else if (i == "}") {
        while (n.type == "statement") {
          n = v(t);
        }
        for (n.type == "}" && (n = v(t)); n.type == "statement";) {
          n = v(t);
        }
      } else if (i == n.type) {
        v(t);
      } else if ((n.type == "}" || n.type == "top") && i != ";" || n.type == "statement" && i == "newstatement") {
        k(t, e.column(), "statement");
      }
      t.startOfLine = false;
      return r;
    },
    indent: function (e, t, n) {
      if (e.tokenize != y && e.tokenize != null) {
        return null;
      }
      var r = e.context;
      var i = t && t.charAt(0);
      if (r.type == "statement" && i == "}") {
        r = r.prev;
      }
      var o = i == r.type;
      if (r.type == "statement") {
        return r.indented + (i == "{" ? 0 : l || n.unit);
      } else if (r.align) {
        return r.column + +!o;
      } else {
        return r.indented + (o ? 0 : n.unit);
      }
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: {
        line: "//",
        block: {
          open: "/*",
          close: "*/"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    dLanguageMode: function () {
      return g;
    }
  });
}