// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'getStyles'
// - Renamed export 'J8' to 'parser'
// - Renamed export '_$' to 'diagramRenderer'
// - Renamed export 'oI' to 'StateDB'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39061.8678db0e.js
         * chunkId: 39061
         * moduleId: 426467
         */
module.exports = function (module, exports, require) {
  var a;
  var mermaidDiagramElementGetter = require("mermaid-diagram-element-getter") /*id: 553740*/;
  var svgViewportSetup = require("svg-viewport-setup") /*id: 509839*/;
  var mermaidLayoutRegistry = require("mermaid-layout-registry") /*id: 103329*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var c = function () {
    var t = mermaidConfigUtils.setName(function (t, e, r, a) {
      r = r || {};
      a = t.length;
      for (; a--; r[t[a]] = e);
      return r;
    }, "o");
    var e = [1, 2];
    var r = [1, 3];
    var a = [1, 4];
    var i = [2, 4];
    var s = [1, 9];
    var n = [1, 11];
    var o = [1, 16];
    var c = [1, 17];
    var d = [1, 18];
    var h = [1, 19];
    var p = [1, 33];
    var u = [1, 20];
    var y = [1, 21];
    var g = [1, 22];
    var f = [1, 23];
    var m = [1, 24];
    var k = [1, 26];
    var S = [1, 27];
    var b = [1, 28];
    var _ = [1, 29];
    var x = [1, 30];
    var T = [1, 31];
    var E = [1, 32];
    var v = [1, 35];
    var L = [1, 36];
    var w = [1, 37];
    var $ = [1, 38];
    var C = [1, 34];
    var D = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57];
    var M = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57];
    var A = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57];
    var W = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SPACE: 4,
        NL: 5,
        SD: 6,
        document: 7,
        line: 8,
        statement: 9,
        classDefStatement: 10,
        styleStatement: 11,
        cssClassStatement: 12,
        idStatement: 13,
        DESCR: 14,
        "-->": 15,
        HIDE_EMPTY: 16,
        scale: 17,
        WIDTH: 18,
        COMPOSIT_STATE: 19,
        STRUCT_START: 20,
        STRUCT_STOP: 21,
        STATE_DESCR: 22,
        AS: 23,
        ID: 24,
        FORK: 25,
        JOIN: 26,
        CHOICE: 27,
        CONCURRENT: 28,
        note: 29,
        notePosition: 30,
        NOTE_TEXT: 31,
        direction: 32,
        acc_title: 33,
        acc_title_value: 34,
        acc_descr: 35,
        acc_descr_value: 36,
        acc_descr_multiline_value: 37,
        CLICK: 38,
        STRING: 39,
        HREF: 40,
        classDef: 41,
        CLASSDEF_ID: 42,
        CLASSDEF_STYLEOPTS: 43,
        DEFAULT: 44,
        style: 45,
        STYLE_IDS: 46,
        STYLEDEF_STYLEOPTS: 47,
        class: 48,
        CLASSENTITY_IDS: 49,
        STYLECLASS: 50,
        direction_tb: 51,
        direction_bt: 52,
        direction_rl: 53,
        direction_lr: 54,
        eol: 55,
        ";": 56,
        EDGE_STATE: 57,
        STYLE_SEPARATOR: 58,
        left_of: 59,
        right_of: 60,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SPACE",
        5: "NL",
        6: "SD",
        14: "DESCR",
        15: "-->",
        16: "HIDE_EMPTY",
        17: "scale",
        18: "WIDTH",
        19: "COMPOSIT_STATE",
        20: "STRUCT_START",
        21: "STRUCT_STOP",
        22: "STATE_DESCR",
        23: "AS",
        24: "ID",
        25: "FORK",
        26: "JOIN",
        27: "CHOICE",
        28: "CONCURRENT",
        29: "note",
        31: "NOTE_TEXT",
        33: "acc_title",
        34: "acc_title_value",
        35: "acc_descr",
        36: "acc_descr_value",
        37: "acc_descr_multiline_value",
        38: "CLICK",
        39: "STRING",
        40: "HREF",
        41: "classDef",
        42: "CLASSDEF_ID",
        43: "CLASSDEF_STYLEOPTS",
        44: "DEFAULT",
        45: "style",
        46: "STYLE_IDS",
        47: "STYLEDEF_STYLEOPTS",
        48: "class",
        49: "CLASSENTITY_IDS",
        50: "STYLECLASS",
        51: "direction_tb",
        52: "direction_bt",
        53: "direction_rl",
        54: "direction_lr",
        56: ";",
        57: "EDGE_STATE",
        58: "STYLE_SEPARATOR",
        59: "left_of",
        60: "right_of"
      },
      productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 1], [9, 2], [9, 1], [9, 4], [9, 3], [9, 6], [9, 1], [9, 1], [9, 1], [9, 1], [9, 4], [9, 4], [9, 1], [9, 2], [9, 2], [9, 1], [9, 5], [9, 5], [10, 3], [10, 3], [11, 3], [12, 3], [32, 1], [32, 1], [32, 1], [32, 1], [55, 1], [55, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1]],
      performAction: mermaidConfigUtils.setName(function (t, e, r, a, i, s, n) {
        var o = s.length - 1;
        switch (i) {
          case 3:
            a.setRootDoc(s[o]);
            return s[o];
          case 4:
            this.$ = [];
            break;
          case 5:
            if (s[o] != "nl") {
              s[o - 1].push(s[o]);
              this.$ = s[o - 1];
            }
            break;
          case 6:
          case 7:
          case 12:
            this.$ = s[o];
            break;
          case 8:
            this.$ = "nl";
            break;
          case 13:
            let l = s[o - 1];
            l.description = a.trimColon(s[o]);
            this.$ = l;
            break;
          case 14:
            this.$ = {
              stmt: "relation",
              state1: s[o - 2],
              state2: s[o]
            };
            break;
          case 15:
            let c = a.trimColon(s[o]);
            this.$ = {
              stmt: "relation",
              state1: s[o - 3],
              state2: s[o - 1],
              description: c
            };
            break;
          case 19:
            this.$ = {
              stmt: "state",
              id: s[o - 3],
              type: "default",
              description: "",
              doc: s[o - 1]
            };
            break;
          case 20:
            var d = s[o];
            var h = s[o - 2].trim();
            if (s[o].match(":")) {
              var p = s[o].split(":");
              d = p[0];
              h = [h, p[1]];
            }
            this.$ = {
              stmt: "state",
              id: d,
              type: "default",
              description: h
            };
            break;
          case 21:
            this.$ = {
              stmt: "state",
              id: s[o - 3],
              type: "default",
              description: s[o - 5],
              doc: s[o - 1]
            };
            break;
          case 22:
            this.$ = {
              stmt: "state",
              id: s[o],
              type: "fork"
            };
            break;
          case 23:
            this.$ = {
              stmt: "state",
              id: s[o],
              type: "join"
            };
            break;
          case 24:
            this.$ = {
              stmt: "state",
              id: s[o],
              type: "choice"
            };
            break;
          case 25:
            this.$ = {
              stmt: "state",
              id: a.getDividerId(),
              type: "divider"
            };
            break;
          case 26:
            this.$ = {
              stmt: "state",
              id: s[o - 1].trim(),
              note: {
                position: s[o - 2].trim(),
                text: s[o].trim()
              }
            };
            break;
          case 29:
            this.$ = s[o].trim();
            a.setAccTitle(this.$);
            break;
          case 30:
          case 31:
            this.$ = s[o].trim();
            a.setAccDescription(this.$);
            break;
          case 32:
            this.$ = {
              stmt: "click",
              id: s[o - 3],
              url: s[o - 2],
              tooltip: s[o - 1]
            };
            break;
          case 33:
            this.$ = {
              stmt: "click",
              id: s[o - 3],
              url: s[o - 1],
              tooltip: ""
            };
            break;
          case 34:
          case 35:
            this.$ = {
              stmt: "classDef",
              id: s[o - 1].trim(),
              classes: s[o].trim()
            };
            break;
          case 36:
            this.$ = {
              stmt: "style",
              id: s[o - 1].trim(),
              styleClass: s[o].trim()
            };
            break;
          case 37:
            this.$ = {
              stmt: "applyClass",
              id: s[o - 1].trim(),
              styleClass: s[o].trim()
            };
            break;
          case 38:
            a.setDirection("TB");
            this.$ = {
              stmt: "dir",
              value: "TB"
            };
            break;
          case 39:
            a.setDirection("BT");
            this.$ = {
              stmt: "dir",
              value: "BT"
            };
            break;
          case 40:
            a.setDirection("RL");
            this.$ = {
              stmt: "dir",
              value: "RL"
            };
            break;
          case 41:
            a.setDirection("LR");
            this.$ = {
              stmt: "dir",
              value: "LR"
            };
            break;
          case 44:
          case 45:
            this.$ = {
              stmt: "state",
              id: s[o].trim(),
              type: "default",
              description: ""
            };
            break;
          case 46:
          case 47:
            this.$ = {
              stmt: "state",
              id: s[o - 2].trim(),
              classes: [s[o].trim()],
              type: "default",
              description: ""
            };
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: e,
        5: r,
        6: a
      }, {
        1: [3]
      }, {
        3: 5,
        4: e,
        5: r,
        6: a
      }, {
        3: 6,
        4: e,
        5: r,
        6: a
      }, t([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], i, {
        7: 7
      }), {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3],
        4: s,
        5: n,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: o,
        17: c,
        19: d,
        22: h,
        24: p,
        25: u,
        26: y,
        27: g,
        28: f,
        29: m,
        32: 25,
        33: k,
        35: S,
        37: b,
        38: _,
        41: x,
        45: T,
        48: E,
        51: v,
        52: L,
        53: w,
        54: $,
        57: C
      }, t(D, [2, 5]), {
        9: 39,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: o,
        17: c,
        19: d,
        22: h,
        24: p,
        25: u,
        26: y,
        27: g,
        28: f,
        29: m,
        32: 25,
        33: k,
        35: S,
        37: b,
        38: _,
        41: x,
        45: T,
        48: E,
        51: v,
        52: L,
        53: w,
        54: $,
        57: C
      }, t(D, [2, 7]), t(D, [2, 8]), t(D, [2, 9]), t(D, [2, 10]), t(D, [2, 11]), t(D, [2, 12], {
        14: [1, 40],
        15: [1, 41]
      }), t(D, [2, 16]), {
        18: [1, 42]
      }, t(D, [2, 18], {
        20: [1, 43]
      }), {
        23: [1, 44]
      }, t(D, [2, 22]), t(D, [2, 23]), t(D, [2, 24]), t(D, [2, 25]), {
        30: 45,
        31: [1, 46],
        59: [1, 47],
        60: [1, 48]
      }, t(D, [2, 28]), {
        34: [1, 49]
      }, {
        36: [1, 50]
      }, t(D, [2, 31]), {
        13: 51,
        24: p,
        57: C
      }, {
        42: [1, 52],
        44: [1, 53]
      }, {
        46: [1, 54]
      }, {
        49: [1, 55]
      }, t(M, [2, 44], {
        58: [1, 56]
      }), t(M, [2, 45], {
        58: [1, 57]
      }), t(D, [2, 38]), t(D, [2, 39]), t(D, [2, 40]), t(D, [2, 41]), t(D, [2, 6]), t(D, [2, 13]), {
        13: 58,
        24: p,
        57: C
      }, t(D, [2, 17]), t(A, i, {
        7: 59
      }), {
        24: [1, 60]
      }, {
        24: [1, 61]
      }, {
        23: [1, 62]
      }, {
        24: [2, 48]
      }, {
        24: [2, 49]
      }, t(D, [2, 29]), t(D, [2, 30]), {
        39: [1, 63],
        40: [1, 64]
      }, {
        43: [1, 65]
      }, {
        43: [1, 66]
      }, {
        47: [1, 67]
      }, {
        50: [1, 68]
      }, {
        24: [1, 69]
      }, {
        24: [1, 70]
      }, t(D, [2, 14], {
        14: [1, 71]
      }), {
        4: s,
        5: n,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: o,
        17: c,
        19: d,
        21: [1, 72],
        22: h,
        24: p,
        25: u,
        26: y,
        27: g,
        28: f,
        29: m,
        32: 25,
        33: k,
        35: S,
        37: b,
        38: _,
        41: x,
        45: T,
        48: E,
        51: v,
        52: L,
        53: w,
        54: $,
        57: C
      }, t(D, [2, 20], {
        20: [1, 73]
      }), {
        31: [1, 74]
      }, {
        24: [1, 75]
      }, {
        39: [1, 76]
      }, {
        39: [1, 77]
      }, t(D, [2, 34]), t(D, [2, 35]), t(D, [2, 36]), t(D, [2, 37]), t(M, [2, 46]), t(M, [2, 47]), t(D, [2, 15]), t(D, [2, 19]), t(A, i, {
        7: 78
      }), t(D, [2, 26]), t(D, [2, 27]), {
        5: [1, 79]
      }, {
        5: [1, 80]
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: o,
        17: c,
        19: d,
        21: [1, 81],
        22: h,
        24: p,
        25: u,
        26: y,
        27: g,
        28: f,
        29: m,
        32: 25,
        33: k,
        35: S,
        37: b,
        38: _,
        41: x,
        45: T,
        48: E,
        51: v,
        52: L,
        53: w,
        54: $,
        57: C
      }, t(D, [2, 32]), t(D, [2, 33]), t(D, [2, 21])],
      defaultActions: {
        5: [2, 1],
        6: [2, 2],
        47: [2, 48],
        48: [2, 49]
      },
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var r = Error(t);
          r.hash = e;
          throw r;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var r = [0];
        var a = [];
        var i = [null];
        var s = [];
        var n = this.table;
        var o = "";
        var c = 0;
        var d = 0;
        var h = 0;
        var p = s.slice.call(arguments, 1);
        var u = Object.create(this.lexer);
        var y = {
          yy: {}
        };
        for (var g in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
            y.yy[g] = this.yy[g];
          }
        }
        u.setInput(t, y.yy);
        y.yy.lexer = u;
        y.yy.parser = this;
        if (u.yylloc === undefined) {
          u.yylloc = {};
        }
        var f = u.yylloc;
        s.push(f);
        var m = u.options && u.options.ranges;
        function k() {
          var t;
          if (typeof (t = a.pop() || u.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (a = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof y.yy.parseError == "function") {
          this.parseError = y.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        mermaidConfigUtils.setName(function (t) {
          r.length = r.length - t * 2;
          i.length = i.length - t;
          s.length = s.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(k, "lex");
        var S;
        var b;
        var _;
        var x;
        var T;
        var E;
        var v;
        var L;
        var w;
        var $ = {};
        while (true) {
          _ = r[r.length - 1];
          if (this.defaultActions[_]) {
            x = this.defaultActions[_];
          } else {
            if (S == null) {
              S = k();
            }
            x = n[_] && n[_][S];
          }
          if (x === undefined || !x.length || !x[0]) {
            var C = "";
            w = [];
            for (E in n[_]) {
              if (this.terminals_[E] && E > 2) {
                w.push("'" + this.terminals_[E] + "'");
              }
            }
            C = u.showPosition ? "Parse error on line " + (c + 1) + ":\n" + u.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (S == 1 ? "end of input" : "'" + (this.terminals_[S] || S) + "'");
            this.parseError(C, {
              text: u.match,
              token: this.terminals_[S] || S,
              line: u.yylineno,
              loc: f,
              expected: w
            });
          }
          if (x[0] instanceof Array && x.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + _ + ", token: " + S);
          }
          switch (x[0]) {
            case 1:
              r.push(S);
              i.push(u.yytext);
              s.push(u.yylloc);
              r.push(x[1]);
              S = null;
              if (b) {
                S = b;
                b = null;
              } else {
                d = u.yyleng;
                o = u.yytext;
                c = u.yylineno;
                f = u.yylloc;
                if (h > 0) {
                  h--;
                }
              }
              break;
            case 2:
              v = this.productions_[x[1]][1];
              $.$ = i[i.length - v];
              $._$ = {
                first_line: s[s.length - (v || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (v || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (m) {
                $._$.range = [s[s.length - (v || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((T = this.performAction.apply($, [o, d, c, y.yy, x[1], i, s].concat(p))) !== undefined) {
                return T;
              }
              if (v) {
                r = r.slice(0, v * -1 * 2);
                i = i.slice(0, v * -1);
                s = s.slice(0, v * -1);
              }
              r.push(this.productions_[x[1]][0]);
              i.push($.$);
              s.push($._$);
              L = n[r[r.length - 2]][r[r.length - 1]];
              r.push(L);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var O = {
      EOF: 1,
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (this.yy.parser) {
          this.yy.parser.parseError(t, e);
        } else {
          throw Error(t);
        }
      }, "parseError"),
      setInput: mermaidConfigUtils.setName(function (t, e) {
        this.yy = e || this.yy || {};
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
        var e = t.length;
        var r = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (r.length - 1) {
          this.yylineno -= r.length - 1;
        }
        var i = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [i[0], i[0] + this.yyleng - e];
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
        var e = Array(t.length + 1).join("-");
        return t + this.upcomingInput() + "\n" + e + "^";
      }, "showPosition"),
      test_match: mermaidConfigUtils.setName(function (t, e) {
        var r;
        var a;
        var i;
        if (this.options.backtrack_lexer) {
          i = {
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
            i.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (a = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += a.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
        r = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (r) {
          return r;
        }
        if (this._backtrack) {
          for (var s in i) {
            this[s] = i[s];
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
        var e;
        var r;
        var a;
        var i = this._currentRules();
        var s = 0;
        for (; s < i.length; s++) {
          if ((r = this._input.match(this.rules[i[s]])) && (!e || r[0].length > e[0].length)) {
            e = r;
            a = s;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(r, i[s])) !== false) {
                return t;
              }
              if (!this._backtrack) {
                return false;
              }
              e = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (e) {
          return (t = this.test_match(e, i[a])) !== false && t;
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
      performAction: mermaidConfigUtils.setName(function (t, e, r, a) {
        switch (r) {
          case 0:
            return 38;
          case 1:
            return 40;
          case 2:
            return 39;
          case 3:
            return 44;
          case 4:
          case 45:
            return 51;
          case 5:
          case 46:
            return 52;
          case 6:
          case 47:
            return 53;
          case 7:
          case 48:
            return 54;
          case 8:
          case 9:
          case 11:
          case 12:
          case 13:
          case 14:
          case 57:
          case 59:
          case 65:
            break;
          case 10:
          case 80:
            return 5;
          case 15:
          case 35:
            this.pushState("SCALE");
            return 17;
          case 16:
          case 36:
            return 18;
          case 17:
          case 23:
          case 37:
          case 52:
          case 55:
            this.popState();
            break;
          case 18:
            this.begin("acc_title");
            return 33;
          case 19:
            this.popState();
            return "acc_title_value";
          case 20:
            this.begin("acc_descr");
            return 35;
          case 21:
            this.popState();
            return "acc_descr_value";
          case 22:
            this.begin("acc_descr_multiline");
            break;
          case 24:
            return "acc_descr_multiline_value";
          case 25:
            this.pushState("CLASSDEF");
            return 41;
          case 26:
            this.popState();
            this.pushState("CLASSDEFID");
            return "DEFAULT_CLASSDEF_ID";
          case 27:
            this.popState();
            this.pushState("CLASSDEFID");
            return 42;
          case 28:
            this.popState();
            return 43;
          case 29:
            this.pushState("CLASS");
            return 48;
          case 30:
            this.popState();
            this.pushState("CLASS_STYLE");
            return 49;
          case 31:
            this.popState();
            return 50;
          case 32:
            this.pushState("STYLE");
            return 45;
          case 33:
            this.popState();
            this.pushState("STYLEDEF_STYLES");
            return 46;
          case 34:
            this.popState();
            return 47;
          case 38:
            this.pushState("STATE");
            break;
          case 39:
          case 42:
            this.popState();
            e.yytext = e.yytext.slice(0, -8).trim();
            return 25;
          case 40:
          case 43:
            this.popState();
            e.yytext = e.yytext.slice(0, -8).trim();
            return 26;
          case 41:
          case 44:
            this.popState();
            e.yytext = e.yytext.slice(0, -10).trim();
            return 27;
          case 49:
            this.pushState("STATE_STRING");
            break;
          case 50:
            this.pushState("STATE_ID");
            return "AS";
          case 51:
          case 67:
            this.popState();
            return "ID";
          case 53:
            return "STATE_DESCR";
          case 54:
            return 19;
          case 56:
            this.popState();
            this.pushState("struct");
            return 20;
          case 58:
            this.popState();
            return 21;
          case 60:
            this.begin("NOTE");
            return 29;
          case 61:
            this.popState();
            this.pushState("NOTE_ID");
            return 59;
          case 62:
            this.popState();
            this.pushState("NOTE_ID");
            return 60;
          case 63:
            this.popState();
            this.pushState("FLOATING_NOTE");
            break;
          case 64:
            this.popState();
            this.pushState("FLOATING_NOTE_ID");
            return "AS";
          case 66:
            return "NOTE_TEXT";
          case 68:
            this.popState();
            this.pushState("NOTE_TEXT");
            return 24;
          case 69:
            this.popState();
            e.yytext = e.yytext.substr(2).trim();
            return 31;
          case 70:
            this.popState();
            e.yytext = e.yytext.slice(0, -8).trim();
            return 31;
          case 71:
          case 72:
            return 6;
          case 73:
            return 16;
          case 74:
            return 57;
          case 75:
            return 24;
          case 76:
            e.yytext = e.yytext.trim();
            return 14;
          case 77:
            return 15;
          case 78:
            return 28;
          case 79:
            return 58;
          case 81:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:click\b)/i, /^(?:href\b)/i, /^(?:"[^"]*")/i, /^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:style\s+)/i, /^(?:[\w,]+\s+)/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: {
        LINE: {
          rules: [12, 13],
          inclusive: false
        },
        struct: {
          rules: [12, 13, 25, 29, 32, 38, 45, 46, 47, 48, 57, 58, 59, 60, 74, 75, 76, 77, 78],
          inclusive: false
        },
        FLOATING_NOTE_ID: {
          rules: [67],
          inclusive: false
        },
        FLOATING_NOTE: {
          rules: [64, 65, 66],
          inclusive: false
        },
        NOTE_TEXT: {
          rules: [69, 70],
          inclusive: false
        },
        NOTE_ID: {
          rules: [68],
          inclusive: false
        },
        NOTE: {
          rules: [61, 62, 63],
          inclusive: false
        },
        STYLEDEF_STYLEOPTS: {
          rules: [],
          inclusive: false
        },
        STYLEDEF_STYLES: {
          rules: [34],
          inclusive: false
        },
        STYLE_IDS: {
          rules: [],
          inclusive: false
        },
        STYLE: {
          rules: [33],
          inclusive: false
        },
        CLASS_STYLE: {
          rules: [31],
          inclusive: false
        },
        CLASS: {
          rules: [30],
          inclusive: false
        },
        CLASSDEFID: {
          rules: [28],
          inclusive: false
        },
        CLASSDEF: {
          rules: [26, 27],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [23, 24],
          inclusive: false
        },
        acc_descr: {
          rules: [21],
          inclusive: false
        },
        acc_title: {
          rules: [19],
          inclusive: false
        },
        SCALE: {
          rules: [16, 17, 36, 37],
          inclusive: false
        },
        ALIAS: {
          rules: [],
          inclusive: false
        },
        STATE_ID: {
          rules: [51],
          inclusive: false
        },
        STATE_STRING: {
          rules: [52, 53],
          inclusive: false
        },
        FORK_STATE: {
          rules: [],
          inclusive: false
        },
        STATE: {
          rules: [12, 13, 39, 40, 41, 42, 43, 44, 49, 50, 54, 55, 56],
          inclusive: false
        },
        ID: {
          rules: [12, 13],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 18, 20, 22, 25, 29, 32, 35, 38, 56, 60, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81],
          inclusive: true
        }
      }
    };
    function I() {
      this.yy = {};
    }
    W.lexer = O;
    mermaidConfigUtils.setName(I, "Parser");
    I.prototype = W;
    W.Parser = I;
    return new I();
  }();
  c.parser = c;
  var d = c;
  var h = "state";
  var p = "root";
  var u = "relation";
  var y = "default";
  var g = "divider";
  var f = "fill:none";
  var m = "fill: #333";
  var k = "text";
  var S = "normal";
  var b = "rect";
  var _ = "rectWithTitle";
  var x = "divider";
  var T = "roundedWithTitle";
  var E = "statediagram";
  var v = `${E}-state`;
  var L = "transition";
  var w = `${L} note-edge`;
  var $ = `${E}-note`;
  var C = `${E}-cluster`;
  var D = `${E}-cluster-alt`;
  var M = "parent";
  var A = "note";
  var W = "----";
  var O = `${W}${A}`;
  var I = `${W}${M}`;
  var N = mermaidConfigUtils.setName(function (t, e = "TB") {
    if (!t.doc) {
      return e;
    }
    let r = e;
    for (let e of t.doc) {
      if (e.stmt === "dir") {
        r = e.value;
      }
    }
    return r;
  }, "getDir");
  var R = {
    getClasses: mermaidConfigUtils.setName(function (t, e) {
      return e.db.getClasses();
    }, "getClasses"),
    draw: mermaidConfigUtils.setName(async function (t, e, r, a) {
      var d;
      mermaidConfigUtils.logger.info("REF0:");
      mermaidConfigUtils.logger.info("Drawing state diagram (v2)", e);
      let {
        securityLevel: h,
        state: p,
        layout: u
      } = mermaidConfigUtils.getConfigAlias();
      a.db.extract(a.db.getRootDocV2());
      let y = a.db.getData();
      let g = mermaidDiagramElementGetter.getDiagramElement(e, h);
      y.type = a.type;
      y.layoutAlgorithm = u;
      y.nodeSpacing = (p == null ? undefined : p.nodeSpacing) || 50;
      y.rankSpacing = (p == null ? undefined : p.rankSpacing) || 50;
      y.markers = ["barb"];
      y.diagramId = e;
      await mermaidLayoutRegistry.render(y, g);
      try {
        (typeof a.db.getLinks == "function" ? a.db.getLinks() : new Map()).forEach((t, e) => {
          var r;
          let a;
          let i = typeof e == "string" ? e : typeof (e == null ? undefined : e.id) == "string" ? e.id : "";
          if (!i) {
            mermaidConfigUtils.logger.warn("⚠️ Invalid or missing stateId from key:", JSON.stringify(e));
            return;
          }
          let s = (r = g.node()) === null || r === undefined ? undefined : r.querySelectorAll("g");
          if (s != null) {
            s.forEach(t => {
              var e;
              if (((e = t.textContent) === null || e === undefined ? undefined : e.trim()) === i) {
                a = t;
              }
            });
          }
          if (!a) {
            mermaidConfigUtils.logger.warn("⚠️ Could not find node matching text:", i);
            return;
          }
          let n = a.parentNode;
          if (!n) {
            mermaidConfigUtils.logger.warn("⚠️ Node has no parent, cannot wrap:", i);
            return;
          }
          let o = document.createElementNS("http://www.w3.org/2000/svg", "a");
          let c = t.url.replace(/^"+|"+$/g, "");
          o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c);
          o.setAttribute("target", "_blank");
          if (t.tooltip) {
            let e = t.tooltip.replace(/^"+|"+$/g, "");
            o.setAttribute("title", e);
          }
          n.replaceChild(o, a);
          o.appendChild(a);
          mermaidConfigUtils.logger.info("🔗 Wrapped node in <a> tag for:", i, t.url);
        });
      } catch (t) {
        mermaidConfigUtils.logger.error("❌ Error injecting clickable links:", t);
      }
      mermaidTextLayoutUtils.textLayoutUtils.insertTitle(g, "statediagramTitleText", (p == null ? undefined : p.titleTopMargin) ?? 25, a.db.getDiagramTitle());
      svgViewportSetup.setupSvgViewport(g, 8, E, (d = p == null ? undefined : p.useMaxWidth) === null || d === undefined || d);
    }, "draw"),
    getDir: N
  };
  var Y = new Map();
  var B = 0;
  function P(t = "", e = 0, r = "", a = W) {
    let i = r !== null && r.length > 0 ? `${a}${r}` : "";
    return `state-${t}${i}-${e}`;
  }
  mermaidConfigUtils.setName(P, "stateDomId");
  var F = mermaidConfigUtils.setName((t, e, r, a, i, s, n, o) => {
    mermaidConfigUtils.logger.trace("items", e);
    e.forEach(e => {
      switch (e.stmt) {
        case h:
        case y:
          U(t, e, r, a, i, s, n, o);
          break;
        case u:
          {
            U(t, e.state1, r, a, i, s, n, o);
            U(t, e.state2, r, a, i, s, n, o);
            let d = {
              id: "edge" + B,
              start: e.state1.id,
              end: e.state2.id,
              arrowhead: "normal",
              arrowTypeEnd: "arrow_barb",
              style: f,
              labelStyle: "",
              label: mermaidConfigUtils.textUtils.sanitizeText(e.description ?? "", mermaidConfigUtils.getConfigAlias()),
              arrowheadStyle: m,
              labelpos: "c",
              labelType: k,
              thickness: S,
              classes: L,
              look: n
            };
            i.push(d);
            B++;
          }
      }
    });
  }, "setupDoc");
  var X = mermaidConfigUtils.setName(function (t, e = "TB") {
    let r = e;
    if (t.doc) {
      for (let e of t.doc) {
        if (e.stmt === "dir") {
          r = e.value;
        }
      }
    }
    return r;
  }, "getDir");
  function H(t, e, r) {
    if (!e.id || e.id === "</join></fork>" || e.id === "</choice>") {
      return;
    }
    if (e.cssClasses) {
      if (!Array.isArray(e.cssCompiledStyles)) {
        e.cssCompiledStyles = [];
      }
      e.cssClasses.split(" ").forEach(t => {
        let a = r.get(t);
        if (a) {
          e.cssCompiledStyles = [...(e.cssCompiledStyles ?? []), ...a.styles];
        }
      });
    }
    let a = t.find(t => t.id === e.id);
    if (a) {
      Object.assign(a, e);
    } else {
      t.push(e);
    }
  }
  function j(t) {
    var e;
    return (t == null ? undefined : (e = t.classes) === null || e === undefined ? undefined : e.join(" ")) ?? "";
  }
  function z(t) {
    return (t == null ? undefined : t.styles) ?? [];
  }
  mermaidConfigUtils.setName(H, "insertOrUpdateNode");
  mermaidConfigUtils.setName(j, "getClassesFromDbInfo");
  mermaidConfigUtils.setName(z, "getStylesFromDbInfo");
  var U = mermaidConfigUtils.setName((t, e, r, a, i, s, n, o) => {
    let c = e.id;
    let d = r.get(c);
    let h = j(d);
    let p = z(d);
    let u = mermaidConfigUtils.getConfigAlias();
    mermaidConfigUtils.logger.info("dataFetcher parsedItem", e, d, p);
    if (c !== "root") {
      let r = b;
      if (e.start === true) {
        r = "stateStart";
      } else if (e.start === false) {
        r = "stateEnd";
      }
      if (e.type !== y) {
        r = e.type;
      }
      if (!Y.get(c)) {
        Y.set(c, {
          id: c,
          shape: r,
          description: mermaidConfigUtils.textUtils.sanitizeText(c, u),
          cssClasses: `${h} ${v}`,
          cssStyles: p
        });
      }
      let d = Y.get(c);
      if (e.description) {
        if (Array.isArray(d.description)) {
          d.shape = _;
          d.description.push(e.description);
        } else if (d.description?.length && d.description.length > 0) {
          d.shape = _;
          if (d.description === c) {
            d.description = [e.description];
          } else {
            d.description = [d.description, e.description];
          }
        } else {
          d.shape = b;
          d.description = e.description;
        }
        d.description = mermaidConfigUtils.textUtils.sanitizeTextOrArray(d.description, u);
      }
      if (d.description?.length === 1 && d.shape === _) {
        if (d.type === "group") {
          d.shape = T;
        } else {
          d.shape = b;
        }
      }
      if (!d.type && e.doc) {
        mermaidConfigUtils.logger.info("Setting cluster for XCX", c, X(e));
        d.type = "group";
        d.isGroup = true;
        d.dir = X(e);
        d.shape = e.type === g ? x : T;
        d.cssClasses = `${d.cssClasses} ${C} ${s ? D : ""}`;
      }
      let N = {
        labelStyle: "",
        shape: d.shape,
        label: d.description,
        cssClasses: d.cssClasses,
        cssCompiledStyles: [],
        cssStyles: d.cssStyles,
        id: c,
        dir: d.dir,
        domId: P(c, B),
        type: d.type,
        isGroup: d.type === "group",
        padding: 8,
        rx: 10,
        ry: 10,
        look: n
      };
      if (N.shape === x) {
        N.label = "";
      }
      if (t && t.id !== "root") {
        mermaidConfigUtils.logger.trace("Setting node ", c, " to be child of its parent ", t.id);
        N.parentId = t.id;
      }
      N.centerLabel = true;
      if (e.note) {
        let t = {
          labelStyle: "",
          shape: "note",
          label: e.note.text,
          cssClasses: $,
          cssStyles: [],
          cssCompiledStyles: [],
          id: c + O + "-" + B,
          domId: P(c, B, A),
          type: d.type,
          isGroup: d.type === "group",
          padding: u.flowchart?.padding,
          look: n,
          position: e.note.position
        };
        let r = c + I;
        let s = {
          labelStyle: "",
          shape: "noteGroup",
          label: e.note.text,
          cssClasses: d.cssClasses,
          cssStyles: [],
          id: c + I,
          domId: P(c, B, M),
          type: "group",
          isGroup: true,
          padding: 16,
          look: n,
          position: e.note.position
        };
        B++;
        s.id = r;
        t.parentId = r;
        H(a, s, o);
        H(a, t, o);
        H(a, N, o);
        let l = c;
        let h = t.id;
        if (e.note.position === "left of") {
          l = t.id;
          h = c;
        }
        i.push({
          id: l + "-" + h,
          start: l,
          end: h,
          arrowhead: "none",
          arrowTypeEnd: "",
          style: f,
          labelStyle: "",
          classes: w,
          arrowheadStyle: m,
          labelpos: "c",
          labelType: k,
          thickness: S,
          look: n
        });
      } else {
        H(a, N, o);
      }
    }
    if (e.doc) {
      mermaidConfigUtils.logger.trace("Adding nodes children ");
      F(e, e.doc, r, a, i, !s, n, o);
    }
  }, "dataFetcher");
  var G = mermaidConfigUtils.setName(() => {
    Y.clear();
    B = 0;
  }, "reset");
  var V = {
    START_NODE: "[*]",
    START_TYPE: "start",
    END_NODE: "[*]",
    END_TYPE: "end",
    COLOR_KEYWORD: "color",
    FILL_KEYWORD: "fill",
    BG_FILL: "bgFill",
    STYLECLASS_SEP: ","
  };
  var q = mermaidConfigUtils.setName(() => new Map(), "newClassesList");
  var Z = mermaidConfigUtils.setName(() => ({
    relations: [],
    states: new Map(),
    documents: {}
  }), "newDoc");
  var K = mermaidConfigUtils.setName(t => JSON.parse(JSON.stringify(t)), "clone");
  a = class {
    extract(t) {
      this.clear(true);
      for (let e of Array.isArray(t) ? t : t.doc) {
        switch (e.stmt) {
          case h:
            this.addState(e.id.trim(), e.type, e.doc, e.description, e.note);
            break;
          case u:
            this.addRelation(e.state1, e.state2, e.description);
            break;
          case "classDef":
            this.addStyleClass(e.id.trim(), e.classes);
            break;
          case "style":
            this.handleStyleDef(e);
            break;
          case "applyClass":
            this.setCssClass(e.id.trim(), e.styleClass);
            break;
          case "click":
            this.addLink(e.id, e.url, e.tooltip);
        }
      }
      let e = this.getStates();
      let r = mermaidConfigUtils.getConfigAlias();
      G();
      U(undefined, this.getRootDocV2(), e, this.nodes, this.edges, true, r.look, this.classes);
      for (let t of this.nodes) {
        if (Array.isArray(t.label)) {
          t.description = t.label.slice(1);
          if (t.isGroup && t.description.length > 0) {
            throw Error(`Group nodes can only have label. Remove the additional description for node [${t.id}]`);
          }
          t.label = t.label[0];
        }
      }
    }
    handleStyleDef(t) {
      let e = t.id.trim().split(",");
      let r = t.styleClass.split(",");
      for (let t of e) {
        let e = this.getState(t);
        if (!e) {
          let r = t.trim();
          this.addState(r);
          e = this.getState(r);
        }
        if (e) {
          e.styles = r.map(t => {
            var e;
            if ((e = t.replace(/;/g, "")) === null || e === undefined) {
              return undefined;
            } else {
              return e.trim();
            }
          });
        }
      }
    }
    setRootDoc(t) {
      mermaidConfigUtils.logger.info("Setting root doc", t);
      this.rootDoc = t;
      if (this.version === 1) {
        this.extract(t);
      } else {
        this.extract(this.getRootDocV2());
      }
    }
    docTranslator(t, e, r) {
      if (e.stmt === u) {
        this.docTranslator(t, e.state1, true);
        this.docTranslator(t, e.state2, false);
        return;
      }
      if (e.stmt === h) {
        if (e.id === V.START_NODE) {
          e.id = t.id + (r ? "_start" : "_end");
          e.start = r;
        } else {
          e.id = e.id.trim();
        }
      }
      if (e.stmt !== p && e.stmt !== h || !e.doc) {
        return;
      }
      let a = [];
      let i = [];
      for (let t of e.doc) {
        if (t.type === g) {
          let e = K(t);
          e.doc = K(i);
          a.push(e);
          i = [];
        } else {
          i.push(t);
        }
      }
      if (a.length > 0 && i.length > 0) {
        let t = {
          stmt: h,
          id: mermaidTextLayoutUtils.generateId(),
          type: "divider",
          doc: K(i)
        };
        a.push(K(t));
        e.doc = a;
      }
      e.doc.forEach(t => this.docTranslator(e, t, true));
    }
    getRootDocV2() {
      this.docTranslator({
        id: p,
        stmt: p
      }, {
        id: p,
        stmt: p,
        doc: this.rootDoc
      }, true);
      return {
        id: p,
        doc: this.rootDoc
      };
    }
    addState(t, e = y, r = undefined, a = undefined, i = undefined, s = undefined, n = undefined, o = undefined) {
      let c = t == null ? undefined : t.trim();
      if (this.currentDocument.states.has(c)) {
        let t = this.currentDocument.states.get(c);
        if (!t) {
          throw Error(`State not found: ${c}`);
        }
        t.doc ||= r;
        t.type ||= e;
      } else {
        mermaidConfigUtils.logger.info("Adding state ", c, a);
        this.currentDocument.states.set(c, {
          stmt: h,
          id: c,
          descriptions: [],
          type: e,
          doc: r,
          note: i,
          classes: [],
          styles: [],
          textStyles: []
        });
      }
      if (a) {
        mermaidConfigUtils.logger.info("Setting state description", c, a);
        (Array.isArray(a) ? a : [a]).forEach(t => this.addDescription(c, t.trim()));
      }
      if (i) {
        let t = this.currentDocument.states.get(c);
        if (!t) {
          throw Error(`State not found: ${c}`);
        }
        t.note = i;
        t.note.text = mermaidConfigUtils.textUtils.sanitizeText(t.note.text, mermaidConfigUtils.getConfigAlias());
      }
      if (s) {
        mermaidConfigUtils.logger.info("Setting state classes", c, s);
        (Array.isArray(s) ? s : [s]).forEach(t => this.setCssClass(c, t.trim()));
      }
      if (n) {
        mermaidConfigUtils.logger.info("Setting state styles", c, n);
        (Array.isArray(n) ? n : [n]).forEach(t => this.setStyle(c, t.trim()));
      }
      if (o) {
        mermaidConfigUtils.logger.info("Setting state styles", c, n);
        (Array.isArray(o) ? o : [o]).forEach(t => this.setTextStyle(c, t.trim()));
      }
    }
    clear(t) {
      this.nodes = [];
      this.edges = [];
      this.documents = {
        root: Z()
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.classes = q();
      if (!t) {
        this.links = new Map();
        mermaidConfigUtils.clearAccData();
      }
    }
    getState(t) {
      return this.currentDocument.states.get(t);
    }
    getStates() {
      return this.currentDocument.states;
    }
    logDocuments() {
      mermaidConfigUtils.logger.info("Documents = ", this.documents);
    }
    getRelations() {
      return this.currentDocument.relations;
    }
    addLink(t, e, r) {
      this.links.set(t, {
        url: e,
        tooltip: r
      });
      mermaidConfigUtils.logger.warn("Adding link", t, e, r);
    }
    getLinks() {
      return this.links;
    }
    startIdIfNeeded(t = "") {
      if (t === V.START_NODE) {
        this.startEndCount++;
        return `${V.START_TYPE}${this.startEndCount}`;
      } else {
        return t;
      }
    }
    startTypeIfNeeded(t = "", e = y) {
      if (t === V.START_NODE) {
        return V.START_TYPE;
      } else {
        return e;
      }
    }
    endIdIfNeeded(t = "") {
      if (t === V.END_NODE) {
        this.startEndCount++;
        return `${V.END_TYPE}${this.startEndCount}`;
      } else {
        return t;
      }
    }
    endTypeIfNeeded(t = "", e = y) {
      if (t === V.END_NODE) {
        return V.END_TYPE;
      } else {
        return e;
      }
    }
    addRelationObjs(t, e, r = "") {
      let a = this.startIdIfNeeded(t.id.trim());
      let i = this.startTypeIfNeeded(t.id.trim(), t.type);
      let s = this.startIdIfNeeded(e.id.trim());
      let n = this.startTypeIfNeeded(e.id.trim(), e.type);
      this.addState(a, i, t.doc, t.description, t.note, t.classes, t.styles, t.textStyles);
      this.addState(s, n, e.doc, e.description, e.note, e.classes, e.styles, e.textStyles);
      this.currentDocument.relations.push({
        id1: a,
        id2: s,
        relationTitle: mermaidConfigUtils.textUtils.sanitizeText(r, mermaidConfigUtils.getConfigAlias())
      });
    }
    addRelation(t, e, r) {
      if (typeof t == "object" && typeof e == "object") {
        this.addRelationObjs(t, e, r);
      } else if (typeof t == "string" && typeof e == "string") {
        let a = this.startIdIfNeeded(t.trim());
        let i = this.startTypeIfNeeded(t);
        let s = this.endIdIfNeeded(e.trim());
        let n = this.endTypeIfNeeded(e);
        this.addState(a, i);
        this.addState(s, n);
        this.currentDocument.relations.push({
          id1: a,
          id2: s,
          relationTitle: r ? mermaidConfigUtils.textUtils.sanitizeText(r, mermaidConfigUtils.getConfigAlias()) : undefined
        });
      }
    }
    addDescription(t, e) {
      var r;
      let a = this.currentDocument.states.get(t);
      let i = e.startsWith(":") ? e.replace(":", "").trim() : e;
      if (a != null && (r = a.descriptions) !== null && r !== undefined) {
        r.push(mermaidConfigUtils.textUtils.sanitizeText(i, mermaidConfigUtils.getConfigAlias()));
      }
    }
    cleanupLabel(t) {
      if (t.startsWith(":")) {
        return t.slice(2).trim();
      } else {
        return t.trim();
      }
    }
    getDividerId() {
      this.dividerCnt++;
      return `divider-id-${this.dividerCnt}`;
    }
    addStyleClass(t, e = "") {
      if (!this.classes.has(t)) {
        this.classes.set(t, {
          id: t,
          styles: [],
          textStyles: []
        });
      }
      let r = this.classes.get(t);
      if (e && r) {
        e.split(V.STYLECLASS_SEP).forEach(t => {
          let e = t.replace(/([^;]*);/, "$1").trim();
          if (RegExp(V.COLOR_KEYWORD).exec(t)) {
            let t = e.replace(V.FILL_KEYWORD, V.BG_FILL).replace(V.COLOR_KEYWORD, V.FILL_KEYWORD);
            r.textStyles.push(t);
          }
          r.styles.push(e);
        });
      }
    }
    getClasses() {
      return this.classes;
    }
    setCssClass(t, e) {
      t.split(",").forEach(t => {
        var r;
        let a = this.getState(t);
        if (!a) {
          let e = t.trim();
          this.addState(e);
          a = this.getState(e);
        }
        if (a != null && (r = a.classes) !== null && r !== undefined) {
          r.push(e);
        }
      });
    }
    setStyle(t, e) {
      var r;
      var a;
      if ((a = this.getState(t)) !== null && a !== undefined && (r = a.styles) !== null && r !== undefined) {
        r.push(e);
      }
    }
    setTextStyle(t, e) {
      var r;
      var a;
      if ((a = this.getState(t)) !== null && a !== undefined && (r = a.textStyles) !== null && r !== undefined) {
        r.push(e);
      }
    }
    getDirectionStatement() {
      return this.rootDoc.find(t => t.stmt === "dir");
    }
    getDirection() {
      return this.getDirectionStatement()?.value ?? "TB";
    }
    setDirection(t) {
      let e = this.getDirectionStatement();
      if (e) {
        e.value = t;
      } else {
        this.rootDoc.unshift({
          stmt: "dir",
          value: t
        });
      }
    }
    trimColon(t) {
      if (t.startsWith(":")) {
        return t.slice(1).trim();
      } else {
        return t.trim();
      }
    }
    getData() {
      let t = mermaidConfigUtils.getConfigAlias();
      return {
        nodes: this.nodes,
        edges: this.edges,
        other: {},
        config: t,
        direction: N(this.getRootDocV2())
      };
    }
    getConfig() {
      return mermaidConfigUtils.getConfigAlias().state;
    }
    constructor(t) {
      this.version = t;
      this.nodes = [];
      this.edges = [];
      this.rootDoc = [];
      this.classes = q();
      this.documents = {
        root: Z()
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.dividerCnt = 0;
      this.links = new Map();
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.clear();
      this.setRootDoc = this.setRootDoc.bind(this);
      this.getDividerId = this.getDividerId.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.trimColon = this.trimColon.bind(this);
    }
  };
  mermaidConfigUtils.setName(a, "StateDB");
  a.relationType = {
    AGGREGATION: 0,
    EXTENSION: 1,
    COMPOSITION: 2,
    DEPENDENCY: 3
  };
  var Q = a;
  var J = mermaidConfigUtils.setName(t => `
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor || t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor || t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground || t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg || t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder || t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground || t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`, "getStyles");
  require.d(exports, {
    getStyles: function () {
      return J;
    },
    parser: function () {
      return d;
    },
    diagramRenderer: function () {
      return R;
    },
    StateDB: function () {
      return Q;
    }
  });
}