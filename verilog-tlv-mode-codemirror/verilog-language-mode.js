// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22059.c5948c57.js
         * chunkId: 22059
         * moduleId: 37098
         */
module.exports = function (module, exports, require) {
  function i(e) {
    var t;
    var n;
    var i = e.statementIndentUnit;
    var r = e.dontAlignCalls;
    var a = e.noIndentKeywords || [];
    var o = e.multiLineStrings;
    var l = e.hooks || {};
    function s(e) {
      var t = {};
      var n = e.split(" ");
      var i = 0;
      for (; i < n.length; ++i) {
        t[n[i]] = true;
      }
      return t;
    }
    var c = s("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor");
    var d = /[\+\-\*\/!~&|^%=?:]/;
    var u = /[\[\]{}()]/;
    var f = /\d[0-9_]*/;
    var m = /\d*\s*'s?d\s*\d[0-9_]*/i;
    var p = /\d*\s*'s?b\s*[xz01][xz01_]*/i;
    var v = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i;
    var g = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i;
    var h = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i;
    var k = /^((\w+)|[)}\]])/;
    var y = /[)}\]]/;
    var _ = s("case checker class clocking config function generate interface module package primitive program property specify sequence table task");
    var w = {};
    for (var b in _) {
      w[b] = "end" + b;
    }
    w.begin = "end";
    w.casex = "endcase";
    w.casez = "endcase";
    w.do = "while";
    w.fork = "join;join_any;join_none";
    w.covergroup = "endgroup";
    for (var x in a) {
      var b = a[x];
      w[b] &&= undefined;
    }
    var z = s("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");
    function I(e, i) {
      var r;
      var a;
      var s = e.peek();
      if (l[s] && (a = l[s](e, i)) != false || l.tokenBase && (a = l.tokenBase(e, i)) != false) {
        return a;
      }
      if (/[,;:\.]/.test(s)) {
        t = e.next();
        return null;
      }
      if (u.test(s)) {
        t = e.next();
        return "bracket";
      }
      if (s == "`") {
        e.next();
        if (e.eatWhile(/[\w\$_]/)) {
          return "def";
        } else {
          return null;
        }
      }
      if (s == "$") {
        e.next();
        if (e.eatWhile(/[\w\$_]/)) {
          return "meta";
        } else {
          return null;
        }
      }
      if (s == "#") {
        e.next();
        e.eatWhile(/[\d_.]/);
        return "def";
      }
      if (s == "\"") {
        ;
        e.next();
        r = s;
        i.tokenize = function (e, t) {
          var n;
          var i = false;
          var a = false;
          while ((n = e.next()) != null) {
            if (n == r && !i) {
              a = true;
              break;
            }
            i = !i && n == "\\";
          }
          if (a || !i && !o) {
            t.tokenize = I;
          }
          return "string";
        };
        return i.tokenize(e, i);
      }
      if (s == "/") {
        e.next();
        if (e.eat("*")) {
          i.tokenize = C;
          return C(e, i);
        }
        if (e.eat("/")) {
          e.skipToEnd();
          return "comment";
        }
        e.backUp(1);
      }
      if (e.match(h) || e.match(m) || e.match(p) || e.match(v) || e.match(g) || e.match(f) || e.match(h)) {
        return "number";
      }
      if (e.eatWhile(d)) {
        return "meta";
      }
      if (e.eatWhile(/[\w\$_]/)) {
        var k = e.current();
        if (c[k]) {
          if (w[k]) {
            t = "newblock";
          }
          if (z[k]) {
            t = "newstatement";
          }
          n = k;
          return "keyword";
        } else {
          return "variable";
        }
      }
      e.next();
      return null;
    }
    function C(e, t) {
      var n;
      var i = false;
      while (n = e.next()) {
        if (n == "/" && i) {
          t.tokenize = I;
          break;
        }
        i = n == "*";
      }
      return "comment";
    }
    function S(e, t, n, i, r) {
      this.indented = e;
      this.column = t;
      this.type = n;
      this.align = i;
      this.prev = r;
    }
    function A(e, t, n) {
      var i = new S(e.indented, t, n, null, e.context);
      return e.context = i;
    }
    function N(e) {
      var t = e.context.type;
      if (t == ")" || t == "]" || t == "}") {
        e.indented = e.context.indented;
      }
      return e.context = e.context.prev;
    }
    function L(e, t) {
      if (e == t) {
        return true;
      }
      var n = t.split(";");
      for (var i in n) {
        if (e == n[i]) {
          return true;
        }
      }
      return false;
    }
    return {
      name: "verilog",
      startState: function (e) {
        var t = {
          tokenize: null,
          context: new S(-e, 0, "top", false),
          indented: 0,
          startOfLine: true
        };
        if (l.startState) {
          l.startState(t);
        }
        return t;
      },
      token: function (e, i) {
        var r = i.context;
        if (e.sol()) {
          if (r.align == null) {
            r.align = false;
          }
          i.indented = e.indentation();
          i.startOfLine = true;
        }
        if (l.token) {
          var a = l.token(e, i);
          if (a !== undefined) {
            return a;
          }
        }
        if (e.eatSpace()) {
          return null;
        }
        t = null;
        n = null;
        var a = (i.tokenize || I)(e, i);
        if (a == "comment" || a == "meta" || a == "variable") {
          return a;
        }
        if (r.align == null) {
          r.align = true;
        }
        if (t == r.type) {
          N(i);
        } else if (t == ";" && r.type == "statement" || r.type && L(n, r.type)) {
          for (r = N(i); r && r.type == "statement";) {
            r = N(i);
          }
        } else if (t == "{") {
          A(i, e.column(), "}");
        } else if (t == "[") {
          A(i, e.column(), "]");
        } else if (t == "(") {
          A(i, e.column(), ")");
        } else if (r && r.type == "endcase" && t == ":") {
          A(i, e.column(), "statement");
        } else if (t == "newstatement") {
          A(i, e.column(), "statement");
        } else if (t == "newblock") {
          if (n == "function" && r && (r.type == "statement" || r.type == "endgroup")) ;else if (n == "task" && r && r.type == "statement") ;else {
            var o = w[n];
            A(i, e.column(), o);
          }
        }
        i.startOfLine = false;
        return a;
      },
      indent: function (e, t, n) {
        if (e.tokenize != I && e.tokenize != null) {
          return null;
        }
        if (l.indent) {
          var a = l.indent(e);
          if (a >= 0) {
            return a;
          }
        }
        var o = e.context;
        var s = t && t.charAt(0);
        if (o.type == "statement" && s == "}") {
          o = o.prev;
        }
        var c = false;
        var d = t.match(k);
        if (d) {
          c = L(d[0], o.type);
        }
        if (o.type == "statement") {
          return o.indented + (s == "{" ? 0 : i || n.unit);
        } else if (y.test(o.type) && o.align && !r) {
          return o.column + +!c;
        } else if (o.type != ")" || c) {
          return o.indented + (c ? 0 : n.unit);
        } else {
          return o.indented + (i || n.unit);
        }
      },
      languageData: {
        indentOnInput: function () {
          var e = [];
          for (var t in w) {
            if (w[t]) {
              var n = w[t].split(";");
              for (var i in n) {
                e.push(n[i]);
              }
            }
          }
          return RegExp("[{}()\\[\\]]|(" + e.join("|") + ")$");
        }(),
        commentTokens: {
          line: "//",
          block: {
            open: "/*",
            close: "*/"
          }
        }
      }
    };
  }
  let r = i({});
  var a = {
    "|": "link",
    ">": "property",
    $: "variable",
    $$: "variable",
    "?$": "qualifier",
    "?*": "qualifier",
    "-": "contentSeparator",
    "/": "property",
    "/-": "property",
    "@": "variableName.special",
    "@-": "variableName.special",
    "@++": "variableName.special",
    "@+=": "variableName.special",
    "@+=-": "variableName.special",
    "@--": "variableName.special",
    "@-=": "variableName.special",
    "%+": "tag",
    "%-": "tag",
    "%": "tag",
    ">>": "tag",
    "<<": "tag",
    "<>": "tag",
    "#": "tag",
    "^": "attribute",
    "^^": "attribute",
    "^!": "attribute",
    "*": "variable",
    "**": "variable",
    "\\": "keyword",
    "\"": "comment"
  };
  var o = {
    "/": "beh-hier",
    ">": "beh-hier",
    "-": "phys-hier",
    "|": "pipe",
    "?": "when",
    "@": "stage",
    "\\": "keyword"
  };
  var l = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/;
  var s = /^[! ] */;
  var c = /^\/[\/\*]/;
  let d = i({
    hooks: {
      electricInput: false,
      token: function (e, t) {
        var n;
        var i = undefined;
        if (e.sol() && !t.tlvInBlockComment) {
          if (e.peek() == "\\") {
            i = "def";
            e.skipToEnd();
            if (e.string.match(/\\SV/)) {
              t.tlvCodeActive = false;
            } else if (e.string.match(/\\TLV/)) {
              t.tlvCodeActive = true;
            }
          }
          if (t.tlvCodeActive && e.pos == 0 && t.indented == 0 && (n = e.match(s, false))) {
            t.indented = n[0].length;
          }
          var r = t.indented;
          var d = r / 3;
          if (d <= t.tlvIndentationStyle.length) {
            var u = e.string.length == r;
            var f = d * 3;
            if (f < e.string.length) {
              var m = e.string.slice(f);
              var p = m[0];
              if (o[p] && (n = m.match(l)) && a[n[1]]) {
                r += 3;
                if (p != "\\" || !(f > 0)) {
                  t.tlvIndentationStyle[d] = o[p];
                  d++;
                }
              }
            }
            if (!u) {
              while (t.tlvIndentationStyle.length > d) {
                t.tlvIndentationStyle.pop();
              }
            }
          }
          t.tlvNextIndent = r;
        }
        if (t.tlvCodeActive) {
          ;
          if (i !== undefined) ;else if (t.tlvInBlockComment) {
            if (e.match(/^.*?\*\//)) {
              t.tlvInBlockComment = false;
            } else {
              e.skipToEnd();
            }
            i = "comment";
          } else if ((n = e.match(c)) && !t.tlvInBlockComment) {
            if (n[0] == "//") {
              e.skipToEnd();
            } else {
              t.tlvInBlockComment = true;
            }
            i = "comment";
          } else if (n = e.match(l)) {
            var v = n[1];
            var g = n[2];
            if (a.hasOwnProperty(v) && (g.length > 0 || e.eol())) {
              i = a[v];
            } else {
              e.backUp(e.current().length - 1);
            }
          } else if (e.match(/^\t+/)) {
            i = "invalid";
          } else if (e.match(/^[\[\]{}\(\);\:]+/)) {
            i = "meta";
          } else if (n = e.match(/^[mM]4([\+_])?[\w\d_]*/)) {
            i = n[1] == "+" ? "keyword.special" : "keyword";
          } else if (e.match(/^ +/)) {
            if (e.eol()) {
              i = "error";
            }
          } else if (e.match(/^[\w\d_]+/)) {
            i = "number";
          } else {
            e.next();
          }
        } else if (e.match(/^[mM]4([\w\d_]*)/)) {
          i = "keyword";
        }
        return i;
      },
      indent: function (e) {
        if (e.tlvCodeActive == true) {
          return e.tlvNextIndent;
        } else {
          return -1;
        }
      },
      startState: function (e) {
        e.tlvIndentationStyle = [];
        e.tlvCodeActive = true;
        e.tlvNextIndent = -1;
        e.tlvInBlockComment = false;
      }
    }
  });
  require.r(exports);
  require.d(exports, {
    tlv: function () {
      return d;
    },
    verilog: function () {
      return r;
    }
  });
}