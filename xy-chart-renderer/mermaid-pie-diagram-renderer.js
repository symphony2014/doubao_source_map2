// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'd' to 'mermaidTextIconUtils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Renamed variable 'p' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'f' to 'mermaidSvgElementSelector'
// - Resolved require(871430) to 'mermaid-svg-element-selector'
// - Renamed variable 'y' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'm' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'xN' to 'getDefaultTheme' (module 101498)
// - Updated imported property 'iE' to 'getConfig' (module 101498)
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'oO' to 'sanitizeText' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'QA' to 'computeDimensionOfText' (module 5699)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 997032)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29963.90aa6384.js
         * chunkId: 29963
         * moduleId: 959752
         */
module.exports = function (module, exports, require) {
  var s;
  var a;
  var n;
  var h;
  var o;
  var r;
  var l;
  var c;
  var g;
  var u;
  var x;
  var mermaidTextIconUtils = require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var b = function () {
    var t = mermaidConfigUtils.setName(function (t, i, e, s) {
      e = e || {};
      s = t.length;
      for (; s--; e[t[s]] = i);
      return e;
    }, "o");
    var i = [1, 10, 12, 14, 16, 18, 19, 21, 23];
    var e = [2, 6];
    var s = [1, 3];
    var a = [1, 5];
    var n = [1, 6];
    var h = [1, 7];
    var o = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36];
    var r = [1, 25];
    var l = [1, 26];
    var c = [1, 28];
    var g = [1, 29];
    var u = [1, 30];
    var x = [1, 31];
    var d = [1, 32];
    var p = [1, 33];
    var f = [1, 34];
    var m = [1, 35];
    var b = [1, 36];
    var A = [1, 37];
    var S = [1, 43];
    var w = [1, 42];
    var C = [1, 47];
    var _ = [1, 50];
    var k = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36];
    var T = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36];
    var R = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    var D = [1, 64];
    var W = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        eol: 4,
        XYCHART: 5,
        chartConfig: 6,
        document: 7,
        CHART_ORIENTATION: 8,
        statement: 9,
        title: 10,
        text: 11,
        X_AXIS: 12,
        parseXAxis: 13,
        Y_AXIS: 14,
        parseYAxis: 15,
        LINE: 16,
        plotData: 17,
        BAR: 18,
        acc_title: 19,
        acc_title_value: 20,
        acc_descr: 21,
        acc_descr_value: 22,
        acc_descr_multiline_value: 23,
        SQUARE_BRACES_START: 24,
        commaSeparatedNumbers: 25,
        SQUARE_BRACES_END: 26,
        NUMBER_WITH_DECIMAL: 27,
        COMMA: 28,
        xAxisData: 29,
        bandData: 30,
        ARROW_DELIMITER: 31,
        commaSeparatedTexts: 32,
        yAxisData: 33,
        NEWLINE: 34,
        SEMI: 35,
        EOF: 36,
        alphaNum: 37,
        STR: 38,
        MD_STR: 39,
        alphaNumToken: 40,
        AMP: 41,
        NUM: 42,
        ALPHA: 43,
        PLUS: 44,
        EQUALS: 45,
        MULT: 46,
        DOT: 47,
        BRKT: 48,
        MINUS: 49,
        UNDERSCORE: 50,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        5: "XYCHART",
        8: "CHART_ORIENTATION",
        10: "title",
        12: "X_AXIS",
        14: "Y_AXIS",
        16: "LINE",
        18: "BAR",
        19: "acc_title",
        20: "acc_title_value",
        21: "acc_descr",
        22: "acc_descr_value",
        23: "acc_descr_multiline_value",
        24: "SQUARE_BRACES_START",
        26: "SQUARE_BRACES_END",
        27: "NUMBER_WITH_DECIMAL",
        28: "COMMA",
        31: "ARROW_DELIMITER",
        34: "NEWLINE",
        35: "SEMI",
        36: "EOF",
        38: "STR",
        39: "MD_STR",
        41: "AMP",
        42: "NUM",
        43: "ALPHA",
        44: "PLUS",
        45: "EQUALS",
        46: "MULT",
        47: "DOT",
        48: "BRKT",
        49: "MINUS",
        50: "UNDERSCORE"
      },
      productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]],
      performAction: mermaidConfigUtils.setName(function (t, i, e, s, a, n, h) {
        var o = n.length - 1;
        switch (a) {
          case 5:
            s.setOrientation(n[o]);
            break;
          case 9:
            s.setDiagramTitle(n[o].text.trim());
            break;
          case 12:
            s.setLineData({
              text: "",
              type: "text"
            }, n[o]);
            break;
          case 13:
            s.setLineData(n[o - 1], n[o]);
            break;
          case 14:
            s.setBarData({
              text: "",
              type: "text"
            }, n[o]);
            break;
          case 15:
            s.setBarData(n[o - 1], n[o]);
            break;
          case 16:
            this.$ = n[o].trim();
            s.setAccTitle(this.$);
            break;
          case 17:
          case 18:
            this.$ = n[o].trim();
            s.setAccDescription(this.$);
            break;
          case 19:
          case 27:
            this.$ = n[o - 1];
            break;
          case 20:
            this.$ = [Number(n[o - 2]), ...n[o]];
            break;
          case 21:
            this.$ = [Number(n[o])];
            break;
          case 22:
            s.setXAxisTitle(n[o]);
            break;
          case 23:
            s.setXAxisTitle(n[o - 1]);
            break;
          case 24:
            s.setXAxisTitle({
              type: "text",
              text: ""
            });
            break;
          case 25:
            s.setXAxisBand(n[o]);
            break;
          case 26:
            s.setXAxisRangeData(Number(n[o - 2]), Number(n[o]));
            break;
          case 28:
            this.$ = [n[o - 2], ...n[o]];
            break;
          case 29:
            this.$ = [n[o]];
            break;
          case 30:
            s.setYAxisTitle(n[o]);
            break;
          case 31:
            s.setYAxisTitle(n[o - 1]);
            break;
          case 32:
            s.setYAxisTitle({
              type: "text",
              text: ""
            });
            break;
          case 33:
            s.setYAxisRangeData(Number(n[o - 2]), Number(n[o]));
            break;
          case 37:
          case 38:
            this.$ = {
              text: n[o],
              type: "text"
            };
            break;
          case 39:
            this.$ = {
              text: n[o],
              type: "markdown"
            };
            break;
          case 40:
            this.$ = n[o];
            break;
          case 41:
            this.$ = n[o - 1] + "" + n[o];
        }
      }, "anonymous"),
      table: [t(i, e, {
        3: 1,
        4: 2,
        7: 4,
        5: s,
        34: a,
        35: n,
        36: h
      }), {
        1: [3]
      }, t(i, e, {
        4: 2,
        7: 4,
        3: 8,
        5: s,
        34: a,
        35: n,
        36: h
      }), t(i, e, {
        4: 2,
        7: 4,
        6: 9,
        3: 10,
        5: s,
        8: [1, 11],
        34: a,
        35: n,
        36: h
      }), {
        1: [2, 4],
        9: 12,
        10: [1, 13],
        12: [1, 14],
        14: [1, 15],
        16: [1, 16],
        18: [1, 17],
        19: [1, 18],
        21: [1, 19],
        23: [1, 20]
      }, t(o, [2, 34]), t(o, [2, 35]), t(o, [2, 36]), {
        1: [2, 1]
      }, t(i, e, {
        4: 2,
        7: 4,
        3: 21,
        5: s,
        34: a,
        35: n,
        36: h
      }), {
        1: [2, 3]
      }, t(o, [2, 5]), t(i, [2, 7], {
        4: 22,
        34: a,
        35: n,
        36: h
      }), {
        11: 23,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, {
        11: 39,
        13: 38,
        24: S,
        27: w,
        29: 40,
        30: 41,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, {
        11: 45,
        15: 44,
        27: C,
        33: 46,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, {
        11: 49,
        17: 48,
        24: _,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, {
        11: 52,
        17: 51,
        24: _,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, {
        20: [1, 53]
      }, {
        22: [1, 54]
      }, t(k, [2, 18]), {
        1: [2, 2]
      }, t(k, [2, 8]), t(k, [2, 9]), t(T, [2, 37], {
        40: 55,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }), t(T, [2, 38]), t(T, [2, 39]), t(R, [2, 40]), t(R, [2, 42]), t(R, [2, 43]), t(R, [2, 44]), t(R, [2, 45]), t(R, [2, 46]), t(R, [2, 47]), t(R, [2, 48]), t(R, [2, 49]), t(R, [2, 50]), t(R, [2, 51]), t(k, [2, 10]), t(k, [2, 22], {
        30: 41,
        29: 56,
        24: S,
        27: w
      }), t(k, [2, 24]), t(k, [2, 25]), {
        31: [1, 57]
      }, {
        11: 59,
        32: 58,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, t(k, [2, 11]), t(k, [2, 30], {
        33: 60,
        27: C
      }), t(k, [2, 32]), {
        31: [1, 61]
      }, t(k, [2, 12]), {
        17: 62,
        24: _
      }, {
        25: 63,
        27: D
      }, t(k, [2, 14]), {
        17: 65,
        24: _
      }, t(k, [2, 16]), t(k, [2, 17]), t(R, [2, 41]), t(k, [2, 23]), {
        27: [1, 66]
      }, {
        26: [1, 67]
      }, {
        26: [2, 29],
        28: [1, 68]
      }, t(k, [2, 31]), {
        27: [1, 69]
      }, t(k, [2, 13]), {
        26: [1, 70]
      }, {
        26: [2, 21],
        28: [1, 71]
      }, t(k, [2, 15]), t(k, [2, 26]), t(k, [2, 27]), {
        11: 59,
        32: 72,
        37: 24,
        38: r,
        39: l,
        40: 27,
        41: c,
        42: g,
        43: u,
        44: x,
        45: d,
        46: p,
        47: f,
        48: m,
        49: b,
        50: A
      }, t(k, [2, 33]), t(k, [2, 19]), {
        25: 73,
        27: D
      }, {
        26: [2, 28]
      }, {
        26: [2, 20]
      }],
      defaultActions: {
        8: [2, 1],
        10: [2, 3],
        21: [2, 2],
        72: [2, 28],
        73: [2, 20]
      },
      parseError: mermaidConfigUtils.setName(function (t, i) {
        if (i.recoverable) {
          this.trace(t);
        } else {
          var e = Error(t);
          e.hash = i;
          throw e;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var i = this;
        var e = [0];
        var s = [];
        var a = [null];
        var n = [];
        var h = this.table;
        var o = "";
        var r = 0;
        var l = 0;
        var c = 0;
        var g = n.slice.call(arguments, 1);
        var u = Object.create(this.lexer);
        var x = {
          yy: {}
        };
        for (var d in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, d)) {
            x.yy[d] = this.yy[d];
          }
        }
        u.setInput(t, x.yy);
        x.yy.lexer = u;
        x.yy.parser = this;
        if (u.yylloc === undefined) {
          u.yylloc = {};
        }
        var p = u.yylloc;
        n.push(p);
        var f = u.options && u.options.ranges;
        function m() {
          var t;
          if (typeof (t = s.pop() || u.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (s = t).pop();
            }
            t = i.symbols_[t] || t;
          }
          return t;
        }
        if (typeof x.yy.parseError == "function") {
          this.parseError = x.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        mermaidConfigUtils.setName(function (t) {
          e.length = e.length - t * 2;
          a.length = a.length - t;
          n.length = n.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(m, "lex");
        var b;
        var A;
        var S;
        var w;
        var C;
        var _;
        var k;
        var T;
        var R;
        var D = {};
        while (true) {
          S = e[e.length - 1];
          if (this.defaultActions[S]) {
            w = this.defaultActions[S];
          } else {
            if (b == null) {
              b = m();
            }
            w = h[S] && h[S][b];
          }
          if (w === undefined || !w.length || !w[0]) {
            var W = "";
            R = [];
            for (_ in h[S]) {
              if (this.terminals_[_] && _ > 2) {
                R.push("'" + this.terminals_[_] + "'");
              }
            }
            W = u.showPosition ? "Parse error on line " + (r + 1) + ":\n" + u.showPosition() + "\nExpecting " + R.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (r + 1) + ": Unexpected " + (b == 1 ? "end of input" : "'" + (this.terminals_[b] || b) + "'");
            this.parseError(W, {
              text: u.match,
              token: this.terminals_[b] || b,
              line: u.yylineno,
              loc: p,
              expected: R
            });
          }
          if (w[0] instanceof Array && w.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + S + ", token: " + b);
          }
          switch (w[0]) {
            case 1:
              e.push(b);
              a.push(u.yytext);
              n.push(u.yylloc);
              e.push(w[1]);
              b = null;
              if (A) {
                b = A;
                A = null;
              } else {
                l = u.yyleng;
                o = u.yytext;
                r = u.yylineno;
                p = u.yylloc;
                if (c > 0) {
                  c--;
                }
              }
              break;
            case 2:
              k = this.productions_[w[1]][1];
              D.$ = a[a.length - k];
              D._$ = {
                first_line: n[n.length - (k || 1)].first_line,
                last_line: n[n.length - 1].last_line,
                first_column: n[n.length - (k || 1)].first_column,
                last_column: n[n.length - 1].last_column
              };
              if (f) {
                D._$.range = [n[n.length - (k || 1)].range[0], n[n.length - 1].range[1]];
              }
              if ((C = this.performAction.apply(D, [o, l, r, x.yy, w[1], a, n].concat(g))) !== undefined) {
                return C;
              }
              if (k) {
                e = e.slice(0, k * -1 * 2);
                a = a.slice(0, k * -1);
                n = n.slice(0, k * -1);
              }
              e.push(this.productions_[w[1]][0]);
              a.push(D.$);
              n.push(D._$);
              T = h[e[e.length - 2]][e[e.length - 1]];
              e.push(T);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var L = {
      EOF: 1,
      parseError: mermaidConfigUtils.setName(function (t, i) {
        if (this.yy.parser) {
          this.yy.parser.parseError(t, i);
        } else {
          throw Error(t);
        }
      }, "parseError"),
      setInput: mermaidConfigUtils.setName(function (t, i) {
        this.yy = i || this.yy || {};
        this._input = t;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      input: mermaidConfigUtils.setName(function () {
        var t = this._input[0];
        this.yytext += t;
        this.yyleng++;
        this.offset++;
        this.match += t;
        this.matched += t;
        if (t.match(/(?:\r\n?|\n).*/g)) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return t;
      }, "input"),
      unput: mermaidConfigUtils.setName(function (t) {
        var i = t.length;
        var e = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - i);
        this.offset -= i;
        var s = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (e.length - 1) {
          this.yylineno -= e.length - 1;
        }
        var a = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: e ? (e.length === s.length ? this.yylloc.first_column : 0) + s[s.length - e.length].length - e[0].length : this.yylloc.first_column - i
        };
        if (this.options.ranges) {
          this.yylloc.range = [a[0], a[0] + this.yyleng - i];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      more: mermaidConfigUtils.setName(function () {
        this._more = true;
        return this;
      }, "more"),
      reject: mermaidConfigUtils.setName(function () {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
          return this;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "reject"),
      less: mermaidConfigUtils.setName(function (t) {
        this.unput(this.match.slice(t));
      }, "less"),
      pastInput: mermaidConfigUtils.setName(function () {
        var t = this.matched.substr(0, this.matched.length - this.match.length);
        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: mermaidConfigUtils.setName(function () {
        var t = this.match;
        if (t.length < 20) {
          t += this._input.substr(0, 20 - t.length);
        }
        return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: mermaidConfigUtils.setName(function () {
        var t = this.pastInput();
        var i = Array(t.length + 1).join("-");
        return t + this.upcomingInput() + "\n" + i + "^";
      }, "showPosition"),
      test_match: mermaidConfigUtils.setName(function (t, i) {
        var e;
        var s;
        var a;
        if (this.options.backtrack_lexer) {
          a = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            a.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (s = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += s.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
        };
        this.yytext += t[0];
        this.match += t[0];
        this.matches = t;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(t[0].length);
        this.matched += t[0];
        e = this.performAction.call(this, this.yy, this, i, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (e) {
          return e;
        }
        if (this._backtrack) {
          for (var n in a) {
            this[n] = a[n];
          }
        }
        return false;
      }, "test_match"),
      next: mermaidConfigUtils.setName(function () {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var t;
        var i;
        var e;
        var s;
        var a = this._currentRules();
        var n = 0;
        for (; n < a.length; n++) {
          if ((e = this._input.match(this.rules[a[n]])) && (!i || e[0].length > i[0].length)) {
            i = e;
            s = n;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(e, a[n])) !== false) {
                return t;
              }
              if (!this._backtrack) {
                return false;
              }
              i = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (i) {
          return (t = this.test_match(i, a[s])) !== false && t;
        } else if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      lex: mermaidConfigUtils.setName(function () {
        var t = this.next();
        return t || this.lex();
      }, "lex"),
      begin: mermaidConfigUtils.setName(function (t) {
        this.conditionStack.push(t);
      }, "begin"),
      popState: mermaidConfigUtils.setName(function () {
        if (this.conditionStack.length - 1 > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      _currentRules: mermaidConfigUtils.setName(function () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions.INITIAL.rules;
        }
      }, "_currentRules"),
      topState: mermaidConfigUtils.setName(function (t) {
        if ((t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0) {
          return this.conditionStack[t];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: mermaidConfigUtils.setName(function (t) {
        this.begin(t);
      }, "pushState"),
      stateStackSize: mermaidConfigUtils.setName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: mermaidConfigUtils.setName(function (t, i, e, s) {
        switch (e) {
          case 0:
          case 1:
          case 5:
          case 44:
            break;
          case 2:
          case 3:
            this.popState();
            return 34;
          case 4:
            return 34;
          case 6:
            return 10;
          case 7:
            this.pushState("acc_title");
            return 19;
          case 8:
            this.popState();
            return "acc_title_value";
          case 9:
            this.pushState("acc_descr");
            return 21;
          case 10:
            this.popState();
            return "acc_descr_value";
          case 11:
            this.pushState("acc_descr_multiline");
            break;
          case 12:
          case 26:
          case 28:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
          case 15:
            return 5;
          case 16:
            return 8;
          case 17:
            this.pushState("axis_data");
            return "X_AXIS";
          case 18:
            this.pushState("axis_data");
            return "Y_AXIS";
          case 19:
            this.pushState("axis_band_data");
            return 24;
          case 20:
            return 31;
          case 21:
            this.pushState("data");
            return 16;
          case 22:
            this.pushState("data");
            return 18;
          case 23:
            this.pushState("data_inner");
            return 24;
          case 24:
            return 27;
          case 25:
            this.popState();
            return 26;
          case 27:
            this.pushState("string");
            break;
          case 29:
            return "STR";
          case 30:
            return 24;
          case 31:
            return 26;
          case 32:
            return 43;
          case 33:
            return "COLON";
          case 34:
            return 44;
          case 35:
            return 28;
          case 36:
            return 45;
          case 37:
            return 46;
          case 38:
            return 48;
          case 39:
            return 50;
          case 40:
            return 47;
          case 41:
            return 41;
          case 42:
            return 49;
          case 43:
            return 42;
          case 45:
            return 35;
          case 46:
            return 36;
        }
      }, "anonymous"),
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\{)/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:xychart\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
      conditions: {
        data_inner: {
          rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
          inclusive: true
        },
        data: {
          rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 23, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
          inclusive: true
        },
        axis_band_data: {
          rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
          inclusive: true
        },
        axis_data: {
          rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
          inclusive: true
        },
        acc_descr_multiline: {
          rules: [12, 13],
          inclusive: false
        },
        acc_descr: {
          rules: [10],
          inclusive: false
        },
        acc_title: {
          rules: [8],
          inclusive: false
        },
        title: {
          rules: [],
          inclusive: false
        },
        md_string: {
          rules: [],
          inclusive: false
        },
        string: {
          rules: [28, 29],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
          inclusive: true
        }
      }
    };
    function P() {
      this.yy = {};
    }
    W.lexer = L;
    mermaidConfigUtils.setName(P, "Parser");
    P.prototype = W;
    W.Parser = P;
    return new P();
  }();
  function A(t) {
    return t.type === "bar";
  }
  function S(t) {
    return t.type === "band";
  }
  function w(t) {
    return t.type === "linear";
  }
  b.parser = b;
  mermaidConfigUtils.setName(A, "isBarPlot");
  mermaidConfigUtils.setName(S, "isBandAxisData");
  mermaidConfigUtils.setName(w, "isLinearAxisData");
  s = class {
    getMaxDimension(t, i) {
      if (!this.parentGroup) {
        return {
          width: t.reduce((t, i) => Math.max(i.length, t), 0) * i,
          height: i
        };
      }
      let e = {
        width: 0,
        height: 0
      };
      let s = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
      for (let a of t) {
        let t = mermaidTextIconUtils.computeDimensionOfText(s, 1, a);
        let n = t ? t.width : a.length * i;
        let h = t ? t.height : i;
        e.width = Math.max(e.width, n);
        e.height = Math.max(e.height, h);
      }
      s.remove();
      return e;
    }
    constructor(t) {
      this.parentGroup = t;
    }
  };
  mermaidConfigUtils.setName(s, "TextDimensionCalculatorWithFont");
  var C = s;
  a = class {
    setRange(t) {
      this.range = t;
      if (this.axisPosition === "left" || this.axisPosition === "right") {
        this.boundingRect.height = t[1] - t[0];
      } else {
        this.boundingRect.width = t[1] - t[0];
      }
      this.recalculateScale();
    }
    getRange() {
      return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
    }
    setAxisPosition(t) {
      this.axisPosition = t;
      this.setRange(this.range);
    }
    getTickDistance() {
      let t = this.getRange();
      return Math.abs(t[0] - t[1]) / this.getTickValues().length;
    }
    getAxisOuterPadding() {
      return this.outerPadding;
    }
    getLabelDimension() {
      return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t => t.toString()), this.axisConfig.labelFontSize);
    }
    recalculateOuterPaddingToDrawBar() {
      if (this.getTickDistance() * 0.7 > this.outerPadding * 2) {
        this.outerPadding = Math.floor(this.getTickDistance() * 0.7 / 2);
      }
      this.recalculateScale();
    }
    calculateSpaceIfDrawnHorizontally(t) {
      let i = t.height;
      if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth) {
        i -= this.axisConfig.axisLineWidth;
        this.showAxisLine = true;
      }
      if (this.axisConfig.showLabel) {
        let e = this.getLabelDimension();
        let s = t.width * 0.2;
        this.outerPadding = Math.min(e.width / 2, s);
        let a = e.height + this.axisConfig.labelPadding * 2;
        this.labelTextHeight = e.height;
        if (a <= i) {
          i -= a;
          this.showLabel = true;
        }
      }
      if (this.axisConfig.showTick && i >= this.axisConfig.tickLength) {
        this.showTick = true;
        i -= this.axisConfig.tickLength;
      }
      if (this.axisConfig.showTitle && this.title) {
        let t = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize);
        let e = t.height + this.axisConfig.titlePadding * 2;
        this.titleTextHeight = t.height;
        if (e <= i) {
          i -= e;
          this.showTitle = true;
        }
      }
      this.boundingRect.width = t.width;
      this.boundingRect.height = t.height - i;
    }
    calculateSpaceIfDrawnVertical(t) {
      let i = t.width;
      if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth) {
        i -= this.axisConfig.axisLineWidth;
        this.showAxisLine = true;
      }
      if (this.axisConfig.showLabel) {
        let e = this.getLabelDimension();
        let s = t.height * 0.2;
        this.outerPadding = Math.min(e.height / 2, s);
        let a = e.width + this.axisConfig.labelPadding * 2;
        if (a <= i) {
          i -= a;
          this.showLabel = true;
        }
      }
      if (this.axisConfig.showTick && i >= this.axisConfig.tickLength) {
        this.showTick = true;
        i -= this.axisConfig.tickLength;
      }
      if (this.axisConfig.showTitle && this.title) {
        let t = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize);
        let e = t.height + this.axisConfig.titlePadding * 2;
        this.titleTextHeight = t.height;
        if (e <= i) {
          i -= e;
          this.showTitle = true;
        }
      }
      this.boundingRect.width = t.width - i;
      this.boundingRect.height = t.height;
    }
    calculateSpace(t) {
      if (this.axisPosition === "left" || this.axisPosition === "right") {
        this.calculateSpaceIfDrawnVertical(t);
      } else {
        this.calculateSpaceIfDrawnHorizontally(t);
      }
      this.recalculateScale();
      return {
        width: this.boundingRect.width,
        height: this.boundingRect.height
      };
    }
    setBoundingBoxXY(t) {
      this.boundingRect.x = t.x;
      this.boundingRect.y = t.y;
    }
    getDrawableElementsForLeftAxis() {
      let t = [];
      if (this.showAxisLine) {
        let i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
        t.push({
          type: "path",
          groupTexts: ["left-axis", "axisl-line"],
          data: [{
            path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }]
        });
      }
      if (this.showLabel) {
        t.push({
          type: "text",
          groupTexts: ["left-axis", "label"],
          data: this.getTickValues().map(t => ({
            text: t.toString(),
            x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
            y: this.getScaleValue(t),
            fill: this.axisThemeConfig.labelColor,
            fontSize: this.axisConfig.labelFontSize,
            rotation: 0,
            verticalPos: "middle",
            horizontalPos: "right"
          }))
        });
      }
      if (this.showTick) {
        let i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
        t.push({
          type: "path",
          groupTexts: ["left-axis", "ticks"],
          data: this.getTickValues().map(t => ({
            path: `M ${i},${this.getScaleValue(t)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(t)}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth
          }))
        });
      }
      if (this.showTitle) {
        t.push({
          type: "text",
          groupTexts: ["left-axis", "title"],
          data: [{
            text: this.title,
            x: this.boundingRect.x + this.axisConfig.titlePadding,
            y: this.boundingRect.y + this.boundingRect.height / 2,
            fill: this.axisThemeConfig.titleColor,
            fontSize: this.axisConfig.titleFontSize,
            rotation: 270,
            verticalPos: "top",
            horizontalPos: "center"
          }]
        });
      }
      return t;
    }
    getDrawableElementsForBottomAxis() {
      let t = [];
      if (this.showAxisLine) {
        let i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
        t.push({
          type: "path",
          groupTexts: ["bottom-axis", "axis-line"],
          data: [{
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }]
        });
      }
      if (this.showLabel) {
        t.push({
          type: "text",
          groupTexts: ["bottom-axis", "label"],
          data: this.getTickValues().map(t => ({
            text: t.toString(),
            x: this.getScaleValue(t),
            y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
            fill: this.axisThemeConfig.labelColor,
            fontSize: this.axisConfig.labelFontSize,
            rotation: 0,
            verticalPos: "top",
            horizontalPos: "center"
          }))
        });
      }
      if (this.showTick) {
        let i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
        t.push({
          type: "path",
          groupTexts: ["bottom-axis", "ticks"],
          data: this.getTickValues().map(t => ({
            path: `M ${this.getScaleValue(t)},${i} L ${this.getScaleValue(t)},${i + this.axisConfig.tickLength}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth
          }))
        });
      }
      if (this.showTitle) {
        t.push({
          type: "text",
          groupTexts: ["bottom-axis", "title"],
          data: [{
            text: this.title,
            x: this.range[0] + (this.range[1] - this.range[0]) / 2,
            y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
            fill: this.axisThemeConfig.titleColor,
            fontSize: this.axisConfig.titleFontSize,
            rotation: 0,
            verticalPos: "top",
            horizontalPos: "center"
          }]
        });
      }
      return t;
    }
    getDrawableElementsForTopAxis() {
      let t = [];
      if (this.showAxisLine) {
        let i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
        t.push({
          type: "path",
          groupTexts: ["top-axis", "axis-line"],
          data: [{
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }]
        });
      }
      if (this.showLabel) {
        t.push({
          type: "text",
          groupTexts: ["top-axis", "label"],
          data: this.getTickValues().map(t => ({
            text: t.toString(),
            x: this.getScaleValue(t),
            y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
            fill: this.axisThemeConfig.labelColor,
            fontSize: this.axisConfig.labelFontSize,
            rotation: 0,
            verticalPos: "top",
            horizontalPos: "center"
          }))
        });
      }
      if (this.showTick) {
        let i = this.boundingRect.y;
        t.push({
          type: "path",
          groupTexts: ["top-axis", "ticks"],
          data: this.getTickValues().map(t => ({
            path: `M ${this.getScaleValue(t)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(t)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
            strokeFill: this.axisThemeConfig.tickColor,
            strokeWidth: this.axisConfig.tickWidth
          }))
        });
      }
      if (this.showTitle) {
        t.push({
          type: "text",
          groupTexts: ["top-axis", "title"],
          data: [{
            text: this.title,
            x: this.boundingRect.x + this.boundingRect.width / 2,
            y: this.boundingRect.y + this.axisConfig.titlePadding,
            fill: this.axisThemeConfig.titleColor,
            fontSize: this.axisConfig.titleFontSize,
            rotation: 0,
            verticalPos: "top",
            horizontalPos: "center"
          }]
        });
      }
      return t;
    }
    getDrawableElements() {
      if (this.axisPosition === "left") {
        return this.getDrawableElementsForLeftAxis();
      }
      if (this.axisPosition === "right") {
        throw Error("Drawing of right axis is not implemented");
      }
      if (this.axisPosition === "bottom") {
        return this.getDrawableElementsForBottomAxis();
      } else if (this.axisPosition === "top") {
        return this.getDrawableElementsForTopAxis();
      } else {
        return [];
      }
    }
    constructor(t, i, e, s) {
      this.axisConfig = t;
      this.title = i;
      this.textDimensionCalculator = e;
      this.axisThemeConfig = s;
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      this.axisPosition = "left";
      this.showTitle = false;
      this.showLabel = false;
      this.showTick = false;
      this.showAxisLine = false;
      this.outerPadding = 0;
      this.titleTextHeight = 0;
      this.labelTextHeight = 0;
      this.range = [0, 10];
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      this.axisPosition = "left";
    }
  };
  mermaidConfigUtils.setName(a, "BaseAxis");
  var _ = a;
  n = class extends _ {
    setRange(t) {
      super.setRange(t);
    }
    recalculateScale() {
      this.scale = axisAndZoomUtilities.tiA().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5);
      mermaidConfigUtils.logger.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
    }
    getTickValues() {
      return this.categories;
    }
    getScaleValue(t) {
      return this.scale(t) ?? this.getRange()[0];
    }
    constructor(t, i, e, s, a) {
      super(t, s, a, i);
      this.categories = e;
      this.scale = axisAndZoomUtilities.tiA().domain(this.categories).range(this.getRange());
    }
  };
  mermaidConfigUtils.setName(n, "BandAxis");
  var k = n;
  h = class extends _ {
    getTickValues() {
      return this.scale.ticks();
    }
    recalculateScale() {
      let t = [...this.domain];
      if (this.axisPosition === "left") {
        t.reverse();
      }
      this.scale = axisAndZoomUtilities.BYU().domain(t).range(this.getRange());
    }
    getScaleValue(t) {
      return this.scale(t);
    }
    constructor(t, i, e, s, a) {
      super(t, s, a, i);
      this.domain = e;
      this.scale = axisAndZoomUtilities.BYU().domain(this.domain).range(this.getRange());
    }
  };
  mermaidConfigUtils.setName(h, "LinearAxis");
  var T = h;
  function R(t, i, e, s) {
    let a = new C(s);
    if (S(t)) {
      return new k(i, e, t.categories, t.title, a);
    } else {
      return new T(i, e, [t.min, t.max], t.title, a);
    }
  }
  mermaidConfigUtils.setName(R, "getAxis");
  o = class {
    setBoundingBoxXY(t) {
      this.boundingRect.x = t.x;
      this.boundingRect.y = t.y;
    }
    calculateSpace(t) {
      let i = this.textDimensionCalculator.getMaxDimension([this.chartData.title], this.chartConfig.titleFontSize);
      let e = Math.max(i.width, t.width);
      let s = i.height + this.chartConfig.titlePadding * 2;
      if (i.width <= e && i.height <= s && this.chartConfig.showTitle && this.chartData.title) {
        this.boundingRect.width = e;
        this.boundingRect.height = s;
        this.showChartTitle = true;
      }
      return {
        width: this.boundingRect.width,
        height: this.boundingRect.height
      };
    }
    getDrawableElements() {
      let t = [];
      if (this.showChartTitle) {
        t.push({
          groupTexts: ["chart-title"],
          type: "text",
          data: [{
            fontSize: this.chartConfig.titleFontSize,
            text: this.chartData.title,
            verticalPos: "middle",
            horizontalPos: "center",
            x: this.boundingRect.x + this.boundingRect.width / 2,
            y: this.boundingRect.y + this.boundingRect.height / 2,
            fill: this.chartThemeConfig.titleColor,
            rotation: 0
          }]
        });
      }
      return t;
    }
    constructor(t, i, e, s) {
      this.textDimensionCalculator = t;
      this.chartConfig = i;
      this.chartData = e;
      this.chartThemeConfig = s;
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      this.showChartTitle = false;
    }
  };
  mermaidConfigUtils.setName(o, "ChartTitle");
  var D = o;
  function W(t, i, e, s) {
    return new D(new C(s), t, i, e);
  }
  mermaidConfigUtils.setName(W, "getChartTitleComponent");
  r = class {
    getDrawableElement() {
      let t;
      let i = this.plotData.data.map(t => [this.xAxis.getScaleValue(t[0]), this.yAxis.getScaleValue(t[1])]);
      if (t = this.orientation === "horizontal" ? axisAndZoomUtilities.jvg().y(t => t[0]).x(t => t[1])(i) : axisAndZoomUtilities.jvg().x(t => t[0]).y(t => t[1])(i)) {
        return [{
          groupTexts: ["plot", `line-plot-${this.plotIndex}`],
          type: "path",
          data: [{
            path: t,
            strokeFill: this.plotData.strokeFill,
            strokeWidth: this.plotData.strokeWidth
          }]
        }];
      } else {
        return [];
      }
    }
    constructor(t, i, e, s, a) {
      this.plotData = t;
      this.xAxis = i;
      this.yAxis = e;
      this.orientation = s;
      this.plotIndex = a;
    }
  };
  mermaidConfigUtils.setName(r, "LinePlot");
  var L = r;
  l = class {
    getDrawableElement() {
      let t = this.barData.data.map(t => [this.xAxis.getScaleValue(t[0]), this.yAxis.getScaleValue(t[1])]);
      let i = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * 0.95;
      let e = i / 2;
      if (this.orientation === "horizontal") {
        return [{
          groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
          type: "rect",
          data: t.map(t => ({
            x: this.boundingRect.x,
            y: t[0] - e,
            height: i,
            width: t[1] - this.boundingRect.x,
            fill: this.barData.fill,
            strokeWidth: 0,
            strokeFill: this.barData.fill
          }))
        }];
      } else {
        return [{
          groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
          type: "rect",
          data: t.map(t => ({
            x: t[0] - e,
            y: t[1],
            width: i,
            height: this.boundingRect.y + this.boundingRect.height - t[1],
            fill: this.barData.fill,
            strokeWidth: 0,
            strokeFill: this.barData.fill
          }))
        }];
      }
    }
    constructor(t, i, e, s, a, n) {
      this.barData = t;
      this.boundingRect = i;
      this.xAxis = e;
      this.yAxis = s;
      this.orientation = a;
      this.plotIndex = n;
    }
  };
  mermaidConfigUtils.setName(l, "BarPlot");
  var P = l;
  c = class {
    setAxes(t, i) {
      this.xAxis = t;
      this.yAxis = i;
    }
    setBoundingBoxXY(t) {
      this.boundingRect.x = t.x;
      this.boundingRect.y = t.y;
    }
    calculateSpace(t) {
      this.boundingRect.width = t.width;
      this.boundingRect.height = t.height;
      return {
        width: this.boundingRect.width,
        height: this.boundingRect.height
      };
    }
    getDrawableElements() {
      if (!this.xAxis || !this.yAxis) {
        throw Error("Axes must be passed to render Plots");
      }
      let t = [];
      for (let [i, e] of this.chartData.plots.entries()) {
        switch (e.type) {
          case "line":
            {
              let s = new L(e, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
              t.push(...s.getDrawableElement());
            }
            break;
          case "bar":
            {
              let s = new P(e, this.boundingRect, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
              t.push(...s.getDrawableElement());
            }
        }
      }
      return t;
    }
    constructor(t, i, e) {
      this.chartConfig = t;
      this.chartData = i;
      this.chartThemeConfig = e;
      this.boundingRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
  };
  mermaidConfigUtils.setName(c, "BasePlot");
  var E = c;
  function v(t, i, e) {
    return new E(t, i, e);
  }
  mermaidConfigUtils.setName(v, "getPlotComponent");
  g = class {
    calculateVerticalSpace() {
      let t = this.chartConfig.width;
      let i = this.chartConfig.height;
      let e = 0;
      let s = 0;
      let a = Math.floor(t * this.chartConfig.plotReservedSpacePercent / 100);
      let n = Math.floor(i * this.chartConfig.plotReservedSpacePercent / 100);
      let h = this.componentStore.plot.calculateSpace({
        width: a,
        height: n
      });
      t -= h.width;
      i -= h.height;
      s = (h = this.componentStore.title.calculateSpace({
        width: this.chartConfig.width,
        height: i
      })).height;
      i -= h.height;
      this.componentStore.xAxis.setAxisPosition("bottom");
      h = this.componentStore.xAxis.calculateSpace({
        width: t,
        height: i
      });
      i -= h.height;
      this.componentStore.yAxis.setAxisPosition("left");
      e = (h = this.componentStore.yAxis.calculateSpace({
        width: t,
        height: i
      })).width;
      if ((t -= h.width) > 0) {
        a += t;
        t = 0;
      }
      if (i > 0) {
        n += i;
        i = 0;
      }
      this.componentStore.plot.calculateSpace({
        width: a,
        height: n
      });
      this.componentStore.plot.setBoundingBoxXY({
        x: e,
        y: s
      });
      this.componentStore.xAxis.setRange([e, e + a]);
      this.componentStore.xAxis.setBoundingBoxXY({
        x: e,
        y: s + n
      });
      this.componentStore.yAxis.setRange([s, s + n]);
      this.componentStore.yAxis.setBoundingBoxXY({
        x: 0,
        y: s
      });
      if (this.chartData.plots.some(t => A(t))) {
        this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
      }
    }
    calculateHorizontalSpace() {
      let t = this.chartConfig.width;
      let i = this.chartConfig.height;
      let e = 0;
      let s = 0;
      let a = 0;
      let n = Math.floor(t * this.chartConfig.plotReservedSpacePercent / 100);
      let h = Math.floor(i * this.chartConfig.plotReservedSpacePercent / 100);
      let o = this.componentStore.plot.calculateSpace({
        width: n,
        height: h
      });
      t -= o.width;
      i -= o.height;
      e = (o = this.componentStore.title.calculateSpace({
        width: this.chartConfig.width,
        height: i
      })).height;
      i -= o.height;
      this.componentStore.xAxis.setAxisPosition("left");
      o = this.componentStore.xAxis.calculateSpace({
        width: t,
        height: i
      });
      t -= o.width;
      s = o.width;
      this.componentStore.yAxis.setAxisPosition("top");
      o = this.componentStore.yAxis.calculateSpace({
        width: t,
        height: i
      });
      i -= o.height;
      a = e + o.height;
      if (t > 0) {
        n += t;
        t = 0;
      }
      if (i > 0) {
        h += i;
        i = 0;
      }
      this.componentStore.plot.calculateSpace({
        width: n,
        height: h
      });
      this.componentStore.plot.setBoundingBoxXY({
        x: s,
        y: a
      });
      this.componentStore.yAxis.setRange([s, s + n]);
      this.componentStore.yAxis.setBoundingBoxXY({
        x: s,
        y: e
      });
      this.componentStore.xAxis.setRange([a, a + h]);
      this.componentStore.xAxis.setBoundingBoxXY({
        x: 0,
        y: a
      });
      if (this.chartData.plots.some(t => A(t))) {
        this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
      }
    }
    calculateSpace() {
      if (this.chartConfig.chartOrientation === "horizontal") {
        this.calculateHorizontalSpace();
      } else {
        this.calculateVerticalSpace();
      }
    }
    getDrawableElement() {
      this.calculateSpace();
      let t = [];
      this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
      for (let i of Object.values(this.componentStore)) {
        t.push(...i.getDrawableElements());
      }
      return t;
    }
    constructor(t, i, e, s) {
      this.chartConfig = t;
      this.chartData = i;
      this.componentStore = {
        title: W(t, i, e, s),
        plot: v(t, i, e),
        xAxis: R(i.xAxis, t.xAxis, {
          titleColor: e.xAxisTitleColor,
          labelColor: e.xAxisLabelColor,
          tickColor: e.xAxisTickColor,
          axisLineColor: e.xAxisLineColor
        }, s),
        yAxis: R(i.yAxis, t.yAxis, {
          titleColor: e.yAxisTitleColor,
          labelColor: e.yAxisLabelColor,
          tickColor: e.yAxisTickColor,
          axisLineColor: e.yAxisLineColor
        }, s)
      };
    }
  };
  mermaidConfigUtils.setName(g, "Orchestrator");
  var M = g;
  u = class {
    static build(t, i, e, s) {
      return new M(t, i, e, s).getDrawableElement();
    }
  };
  mermaidConfigUtils.setName(u, "XYChartBuilder");
  var $ = u;
  var I = 0;
  var B = Y();
  var z = X();
  var O = U();
  var N = z.plotColorPalette.split(",").map(t => t.trim());
  var F = false;
  var V = false;
  function X() {
    let t = mermaidConfigUtils.getDefaultTheme();
    let i = mermaidConfigUtils.getConfig();
    return mermaidTextLayoutUtils.cleanAndMerge(t.xyChart, i.themeVariables.xyChart);
  }
  function Y() {
    let t = mermaidConfigUtils.getConfig();
    return mermaidTextLayoutUtils.cleanAndMerge(mermaidConfigUtils.configDefaults.xyChart, t.xyChart);
  }
  function U() {
    return {
      yAxis: {
        type: "linear",
        title: "",
        min: Infinity,
        max: -Infinity
      },
      xAxis: {
        type: "band",
        title: "",
        categories: []
      },
      title: "",
      plots: []
    };
  }
  function H(t) {
    let i = mermaidConfigUtils.getConfig();
    return mermaidConfigUtils.sanitizeText(t.trim(), i);
  }
  function j(t) {
    x = t;
  }
  function G(t) {
    if (t === "horizontal") {
      B.chartOrientation = "horizontal";
    } else {
      B.chartOrientation = "vertical";
    }
  }
  function Q(t) {
    O.xAxis.title = H(t.text);
  }
  function K(t, i) {
    O.xAxis = {
      type: "linear",
      title: O.xAxis.title,
      min: t,
      max: i
    };
    F = true;
  }
  function Z(t) {
    O.xAxis = {
      type: "band",
      title: O.xAxis.title,
      categories: t.map(t => H(t.text))
    };
    F = true;
  }
  function q(t) {
    O.yAxis.title = H(t.text);
  }
  function J(t, i) {
    O.yAxis = {
      type: "linear",
      title: O.yAxis.title,
      min: t,
      max: i
    };
    V = true;
  }
  function tt(t) {
    let i = Math.min(...t);
    let e = Math.max(...t);
    let s = w(O.yAxis) ? O.yAxis.min : Infinity;
    let a = w(O.yAxis) ? O.yAxis.max : -Infinity;
    O.yAxis = {
      type: "linear",
      title: O.yAxis.title,
      min: Math.min(s, i),
      max: Math.max(a, e)
    };
  }
  function ti(t) {
    let i = [];
    if (t.length === 0) {
      return i;
    }
    if (!F) {
      K(Math.min(w(O.xAxis) ? O.xAxis.min : Infinity, 1), Math.max(w(O.xAxis) ? O.xAxis.max : -Infinity, t.length));
    }
    if (!V) {
      tt(t);
    }
    if (S(O.xAxis)) {
      i = O.xAxis.categories.map((i, e) => [i, t[e]]);
    }
    if (w(O.xAxis)) {
      let e = O.xAxis.min;
      let s = O.xAxis.max;
      let a = (s - e) / (t.length - 1);
      let n = [];
      for (let t = e; t <= s; t += a) {
        n.push(`${t}`);
      }
      i = n.map((i, e) => [i, t[e]]);
    }
    return i;
  }
  function te(t) {
    return N[t === 0 ? 0 : t % N.length];
  }
  function ts(t, i) {
    let e = ti(i);
    O.plots.push({
      type: "line",
      strokeFill: te(I),
      strokeWidth: 2,
      data: e
    });
    I++;
  }
  function ta(t, i) {
    let e = ti(i);
    O.plots.push({
      type: "bar",
      fill: te(I),
      data: e
    });
    I++;
  }
  function tn() {
    if (O.plots.length === 0) {
      throw Error("No Plot to render, please provide a plot with some data");
    }
    O.title = mermaidConfigUtils.getDiagramTitle();
    return $.build(B, O, z, x);
  }
  function th() {
    return z;
  }
  function to() {
    return B;
  }
  function tr() {
    return O;
  }
  mermaidConfigUtils.setName(X, "getChartDefaultThemeConfig");
  mermaidConfigUtils.setName(Y, "getChartDefaultConfig");
  mermaidConfigUtils.setName(U, "getChartDefaultData");
  mermaidConfigUtils.setName(H, "textSanitizer");
  mermaidConfigUtils.setName(j, "setTmpSVGG");
  mermaidConfigUtils.setName(G, "setOrientation");
  mermaidConfigUtils.setName(Q, "setXAxisTitle");
  mermaidConfigUtils.setName(K, "setXAxisRangeData");
  mermaidConfigUtils.setName(Z, "setXAxisBand");
  mermaidConfigUtils.setName(q, "setYAxisTitle");
  mermaidConfigUtils.setName(J, "setYAxisRangeData");
  mermaidConfigUtils.setName(tt, "setYAxisRangeFromPlotData");
  mermaidConfigUtils.setName(ti, "transformDataWithoutCategory");
  mermaidConfigUtils.setName(te, "getPlotColorFromPalette");
  mermaidConfigUtils.setName(ts, "setLineData");
  mermaidConfigUtils.setName(ta, "setBarData");
  mermaidConfigUtils.setName(tn, "getDrawableElem");
  mermaidConfigUtils.setName(th, "getChartThemeConfig");
  mermaidConfigUtils.setName(to, "getChartConfig");
  mermaidConfigUtils.setName(tr, "getXYChartData");
  var tl = {
    getDrawableElem: tn,
    clear: mermaidConfigUtils.setName(function () {
      mermaidConfigUtils.clearAccData();
      I = 0;
      B = Y();
      O = U();
      N = (z = X()).plotColorPalette.split(",").map(t => t.trim());
      F = false;
      V = false;
    }, "clear"),
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    setOrientation: G,
    setXAxisTitle: Q,
    setXAxisRangeData: K,
    setXAxisBand: Z,
    setYAxisTitle: q,
    setYAxisRangeData: J,
    setLineData: ts,
    setBarData: ta,
    setTmpSVGG: j,
    getChartThemeConfig: th,
    getChartConfig: to,
    getXYChartData: tr
  };
  var tc = {
    parser: b,
    db: tl,
    renderer: {
      draw: mermaidConfigUtils.setName((t, i, e, s) => {
        let a = s.db;
        let n = a.getChartThemeConfig();
        let h = a.getChartConfig();
        let o = a.getXYChartData().plots[0].data.map(t => t[1]);
        function r(t) {
          if (t === "top") {
            return "text-before-edge";
          } else {
            return "middle";
          }
        }
        function l(t) {
          if (t === "left") {
            return "start";
          } else if (t === "right") {
            return "end";
          } else {
            return "middle";
          }
        }
        function c(t) {
          return `translate(${t.x}, ${t.y}) rotate(${t.rotation || 0})`;
        }
        mermaidConfigUtils.setName(r, "getDominantBaseLine");
        mermaidConfigUtils.setName(l, "getTextAnchor");
        mermaidConfigUtils.setName(c, "getTextTransformation");
        mermaidConfigUtils.logger.debug("Rendering xychart chart\n" + t);
        let g = mermaidSvgElementSelector.selectSvgElement(i);
        let u = g.append("g").attr("class", "main");
        let x = u.append("rect").attr("width", h.width).attr("height", h.height).attr("class", "background");
        mermaidConfigUtils.configureSvgSize(g, h.height, h.width, true);
        g.attr("viewBox", `0 0 ${h.width} ${h.height}`);
        x.attr("fill", n.backgroundColor);
        a.setTmpSVGG(g.append("g").attr("class", "mermaid-tmp-group"));
        let d = a.getDrawableElem();
        let p = {};
        function m(t) {
          let i = u;
          let e = "";
          for (let [s] of t.entries()) {
            let a = u;
            if (s > 0 && p[e]) {
              a = p[e];
            }
            e += t[s];
            if (!(i = p[e])) {
              i = p[e] = a.append("g").attr("class", t[s]);
            }
          }
          return i;
        }
        mermaidConfigUtils.setName(m, "getGroup");
        for (let t of d) {
          if (t.data.length === 0) {
            continue;
          }
          let i = m(t.groupTexts);
          switch (t.type) {
            case "rect":
              i.selectAll("rect").data(t.data).enter().append("rect").attr("x", t => t.x).attr("y", t => t.y).attr("width", t => t.width).attr("height", t => t.height).attr("fill", t => t.fill).attr("stroke", t => t.strokeFill).attr("stroke-width", t => t.strokeWidth);
              if (h.showDataLabel) {
                if (h.chartOrientation === "horizontal") {
                  let e = function (t, i) {
                    let {
                      data: e,
                      label: a
                    } = t;
                    return i * a.length * s <= e.width - 10;
                  };
                  mermaidConfigUtils.setName(e, "fitsHorizontally");
                  let s = 0.7;
                  let a = t.data.map((t, i) => ({
                    data: t,
                    label: o[i].toString()
                  })).filter(t => t.data.width > 0 && t.data.height > 0);
                  let n = Math.floor(Math.min(...a.map(t => {
                    let {
                      data: i
                    } = t;
                    let s = i.height * 0.7;
                    while (!e(t, s) && s > 0) {
                      s -= 1;
                    }
                    return s;
                  })));
                  i.selectAll("text").data(a).enter().append("text").attr("x", t => t.data.x + t.data.width - 10).attr("y", t => t.data.y + t.data.height / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("fill", "black").attr("font-size", `${n}px`).text(t => t.label);
                } else {
                  let e = function (t, i, e) {
                    let {
                      data: s,
                      label: a
                    } = t;
                    let n = i * a.length * 0.7;
                    let h = s.x + s.width / 2;
                    let o = h - n / 2;
                    let r = h + n / 2;
                    let l = o >= s.x && r <= s.x + s.width;
                    let c = s.y + e + i <= s.y + s.height;
                    return l && c;
                  };
                  mermaidConfigUtils.setName(e, "fitsInBar");
                  let s = t.data.map((t, i) => ({
                    data: t,
                    label: o[i].toString()
                  })).filter(t => t.data.width > 0 && t.data.height > 0);
                  let a = Math.floor(Math.min(...s.map(t => {
                    let {
                      data: i,
                      label: s
                    } = t;
                    let a = i.width / (s.length * 0.7);
                    while (!e(t, a, 10) && a > 0) {
                      a -= 1;
                    }
                    return a;
                  })));
                  i.selectAll("text").data(s).enter().append("text").attr("x", t => t.data.x + t.data.width / 2).attr("y", t => t.data.y + 10).attr("text-anchor", "middle").attr("dominant-baseline", "hanging").attr("fill", "black").attr("font-size", `${a}px`).text(t => t.label);
                }
              }
              break;
            case "text":
              i.selectAll("text").data(t.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", t => t.fill).attr("font-size", t => t.fontSize).attr("dominant-baseline", t => r(t.verticalPos)).attr("text-anchor", t => l(t.horizontalPos)).attr("transform", t => c(t)).text(t => t.text);
              break;
            case "path":
              i.selectAll("path").data(t.data).enter().append("path").attr("d", t => t.path).attr("fill", t => t.fill ? t.fill : "none").attr("stroke", t => t.strokeFill).attr("stroke-width", t => t.strokeWidth);
          }
        }
      }, "draw")
    }
  };
  require.d(exports, {
    diagram: function () {
      return tc;
    }
  });
}