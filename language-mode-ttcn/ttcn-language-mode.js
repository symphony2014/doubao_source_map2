// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18867.0b38e6a9.js
         * chunkId: 18867
         * moduleId: 865416
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
  let i = {
    name: "ttcn",
    keywords: r("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),
    builtin: r("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),
    types: r("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),
    timerOps: r("read running start stop timeout"),
    portOps: r("call catch check clear getcall getreply halt raise receive reply send trigger"),
    configOps: r("create connect disconnect done kill killed map unmap"),
    verdictOps: r("getverdict setverdict"),
    sutOps: r("action"),
    functionOps: r("apply derefers refers"),
    verdictConsts: r("error fail inconc none pass"),
    booleanConsts: r("true false"),
    otherConsts: r("null NULL omit"),
    visibilityModifiers: r("private public friend"),
    templateMatch: r("complement ifpresent subset superset permutation"),
    multiLineStrings: true
  };
  var o;
  var a = [];
  function s(e) {
    if (e) {
      for (var t in e) {
        if (e.hasOwnProperty(t)) {
          a.push(t);
        }
      }
    }
  }
  s(i.keywords);
  s(i.builtin);
  s(i.timerOps);
  s(i.portOps);
  var l = i.keywords || {};
  var c = i.builtin || {};
  var u = i.timerOps || {};
  var p = i.portOps || {};
  var m = i.configOps || {};
  var f = i.verdictOps || {};
  var d = i.sutOps || {};
  var b = i.functionOps || {};
  var h = i.verdictConsts || {};
  var y = i.booleanConsts || {};
  var v = i.otherConsts || {};
  var g = i.types || {};
  var x = i.visibilityModifiers || {};
  var k = i.templateMatch || {};
  var O = i.multiLineStrings;
  var E = i.indentStatements !== false;
  var w = /[+\-*&@=<>!\/]/;
  function I(e, t) {
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
  function L(e, t, n, r, i) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.align = r;
    this.prev = i;
  }
  function _(e, t, n) {
    var r = e.indented;
    if (e.context && e.context.type == "statement") {
      r = e.context.indented;
    }
    return e.context = new L(r, t, n, null, e.context);
  }
  function z(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  let C = {
    name: "ttcn",
    startState: function () {
      return {
        tokenize: null,
        context: new L(0, 0, "top", false),
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
      o = null;
      var r = (t.tokenize || function (e, t) {
        var n;
        var r = e.next();
        if (r == "\"" || r == "'") {
          ;
          n = r;
          t.tokenize = function (e, t) {
            var r;
            var i = false;
            var o = false;
            while ((r = e.next()) != null) {
              if (r == n && !i) {
                var a = e.peek();
                if (a && ((a = a.toLowerCase()) == "b" || a == "h" || a == "o")) {
                  e.next();
                }
                o = true;
                break;
              }
              i = !i && r == "\\";
            }
            if (o || !i && !O) {
              t.tokenize = null;
            }
            return "string";
          };
          return t.tokenize(e, t);
        }
        if (/[\[\]{}\(\),;\\:\?\.]/.test(r)) {
          o = r;
          return "punctuation";
        }
        if (r == "#") {
          e.skipToEnd();
          return "atom";
        }
        if (r == "%") {
          e.eatWhile(/\b/);
          return "atom";
        }
        if (/\d/.test(r)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (r == "/") {
          if (e.eat("*")) {
            t.tokenize = I;
            return I(e, t);
          }
          if (e.eat("/")) {
            e.skipToEnd();
            return "comment";
          }
        }
        if (w.test(r)) {
          if (r == "@" && (e.match("try") || e.match("catch") || e.match("lazy"))) {
            return "keyword";
          } else {
            e.eatWhile(w);
            return "operator";
          }
        }
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var i = e.current();
        if (l.propertyIsEnumerable(i)) {
          return "keyword";
        } else if (c.propertyIsEnumerable(i)) {
          return "builtin";
        } else if (u.propertyIsEnumerable(i) || m.propertyIsEnumerable(i) || f.propertyIsEnumerable(i) || p.propertyIsEnumerable(i) || d.propertyIsEnumerable(i) || b.propertyIsEnumerable(i)) {
          return "def";
        } else if (h.propertyIsEnumerable(i) || y.propertyIsEnumerable(i) || v.propertyIsEnumerable(i)) {
          return "string";
        } else if (g.propertyIsEnumerable(i)) {
          return "typeName.standard";
        } else if (x.propertyIsEnumerable(i)) {
          return "modifier";
        } else if (k.propertyIsEnumerable(i)) {
          return "atom";
        } else {
          return "variable";
        }
      })(e, t);
      if (r == "comment") {
        return r;
      }
      if (n.align == null) {
        n.align = true;
      }
      if ((o == ";" || o == ":" || o == ",") && n.type == "statement") {
        z(t);
      } else if (o == "{") {
        _(t, e.column(), "}");
      } else if (o == "[") {
        _(t, e.column(), "]");
      } else if (o == "(") {
        _(t, e.column(), ")");
      } else if (o == "}") {
        while (n.type == "statement") {
          n = z(t);
        }
        for (n.type == "}" && (n = z(t)); n.type == "statement";) {
          n = z(t);
        }
      } else if (o == n.type) {
        z(t);
      } else if (E && ((n.type == "}" || n.type == "top") && o != ";" || n.type == "statement" && o == "newstatement")) {
        _(t, e.column(), "statement");
      }
      t.startOfLine = false;
      return r;
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: {
        line: "//",
        block: {
          open: "/*",
          close: "*/"
        }
      },
      autocomplete: a
    }
  };
  require.r(exports);
  require.d(exports, {
    ttcn: function () {
      return C;
    }
  });
}