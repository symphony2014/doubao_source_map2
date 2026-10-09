// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'getStyles'
// - Renamed export 'J8' to 'parser'
// - Renamed export '_$' to 'diagramRenderer'
// - Renamed export 'oI' to 'StateDB'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 91748.13ebfb05.js
         * chunkId: 91748
         * moduleId: 831790
         */
module.exports = function (module, exports, require) {
  var i;
  var diagramElementSelector = require("diagram-element-selector") /*id: 150827*/;
  var mermaidSvgViewportSetup = require("mermaid-svg-viewport-setup") /*id: 3049*/;
  var mermaidLayoutRegistryRenderer = require("mermaid-layout-registry-renderer") /*id: 484129*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var h = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, s, i) {
      s = s || {};
      i = t.length;
      for (; i--; s[t[i]] = e);
      return s;
    }, "o");
    var e = [1, 2];
    var s = [1, 3];
    var i = [1, 4];
    var r = [2, 4];
    var n = [1, 9];
    var o = [1, 11];
    var a = [1, 16];
    var l = [1, 17];
    var h = [1, 18];
    var d = [1, 19];
    var u = [1, 33];
    var p = [1, 20];
    var y = [1, 21];
    var g = [1, 22];
    var f = [1, 23];
    var S = [1, 24];
    var m = [1, 26];
    var _ = [1, 27];
    var T = [1, 28];
    var E = [1, 29];
    var b = [1, 30];
    var v = [1, 31];
    var k = [1, 32];
    var D = [1, 35];
    var C = [1, 36];
    var x = [1, 37];
    var $ = [1, 38];
    var A = [1, 34];
    var L = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57];
    var I = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 39, 40, 41, 45, 48, 51, 52, 53, 54, 57];
    var O = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57];
    var w = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
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
      performAction: loggerLevelUtils.setFunctionName(function (t, e, s, i, r, n, o) {
        var a = n.length - 1;
        switch (r) {
          case 3:
            i.setRootDoc(n[a]);
            return n[a];
          case 4:
            this.$ = [];
            break;
          case 5:
            if (n[a] != "nl") {
              n[a - 1].push(n[a]);
              this.$ = n[a - 1];
            }
            break;
          case 6:
          case 7:
          case 12:
            this.$ = n[a];
            break;
          case 8:
            this.$ = "nl";
            break;
          case 13:
            let l = n[a - 1];
            l.description = i.trimColon(n[a]);
            this.$ = l;
            break;
          case 14:
            this.$ = {
              stmt: "relation",
              state1: n[a - 2],
              state2: n[a]
            };
            break;
          case 15:
            let c = i.trimColon(n[a]);
            this.$ = {
              stmt: "relation",
              state1: n[a - 3],
              state2: n[a - 1],
              description: c
            };
            break;
          case 19:
            this.$ = {
              stmt: "state",
              id: n[a - 3],
              type: "default",
              description: "",
              doc: n[a - 1]
            };
            break;
          case 20:
            var h = n[a];
            var d = n[a - 2].trim();
            if (n[a].match(":")) {
              var u = n[a].split(":");
              h = u[0];
              d = [d, u[1]];
            }
            this.$ = {
              stmt: "state",
              id: h,
              type: "default",
              description: d
            };
            break;
          case 21:
            this.$ = {
              stmt: "state",
              id: n[a - 3],
              type: "default",
              description: n[a - 5],
              doc: n[a - 1]
            };
            break;
          case 22:
            this.$ = {
              stmt: "state",
              id: n[a],
              type: "fork"
            };
            break;
          case 23:
            this.$ = {
              stmt: "state",
              id: n[a],
              type: "join"
            };
            break;
          case 24:
            this.$ = {
              stmt: "state",
              id: n[a],
              type: "choice"
            };
            break;
          case 25:
            this.$ = {
              stmt: "state",
              id: i.getDividerId(),
              type: "divider"
            };
            break;
          case 26:
            this.$ = {
              stmt: "state",
              id: n[a - 1].trim(),
              note: {
                position: n[a - 2].trim(),
                text: n[a].trim()
              }
            };
            break;
          case 29:
            this.$ = n[a].trim();
            i.setAccTitle(this.$);
            break;
          case 30:
          case 31:
            this.$ = n[a].trim();
            i.setAccDescription(this.$);
            break;
          case 32:
            this.$ = {
              stmt: "click",
              id: n[a - 3],
              url: n[a - 2],
              tooltip: n[a - 1]
            };
            break;
          case 33:
            this.$ = {
              stmt: "click",
              id: n[a - 3],
              url: n[a - 1],
              tooltip: ""
            };
            break;
          case 34:
          case 35:
            this.$ = {
              stmt: "classDef",
              id: n[a - 1].trim(),
              classes: n[a].trim()
            };
            break;
          case 36:
            this.$ = {
              stmt: "style",
              id: n[a - 1].trim(),
              styleClass: n[a].trim()
            };
            break;
          case 37:
            this.$ = {
              stmt: "applyClass",
              id: n[a - 1].trim(),
              styleClass: n[a].trim()
            };
            break;
          case 38:
            i.setDirection("TB");
            this.$ = {
              stmt: "dir",
              value: "TB"
            };
            break;
          case 39:
            i.setDirection("BT");
            this.$ = {
              stmt: "dir",
              value: "BT"
            };
            break;
          case 40:
            i.setDirection("RL");
            this.$ = {
              stmt: "dir",
              value: "RL"
            };
            break;
          case 41:
            i.setDirection("LR");
            this.$ = {
              stmt: "dir",
              value: "LR"
            };
            break;
          case 44:
          case 45:
            this.$ = {
              stmt: "state",
              id: n[a].trim(),
              type: "default",
              description: ""
            };
            break;
          case 46:
          case 47:
            this.$ = {
              stmt: "state",
              id: n[a - 2].trim(),
              classes: [n[a].trim()],
              type: "default",
              description: ""
            };
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: e,
        5: s,
        6: i
      }, {
        1: [3]
      }, {
        3: 5,
        4: e,
        5: s,
        6: i
      }, {
        3: 6,
        4: e,
        5: s,
        6: i
      }, t([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 41, 45, 48, 51, 52, 53, 54, 57], r, {
        7: 7
      }), {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3],
        4: n,
        5: o,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: a,
        17: l,
        19: h,
        22: d,
        24: u,
        25: p,
        26: y,
        27: g,
        28: f,
        29: S,
        32: 25,
        33: m,
        35: _,
        37: T,
        38: E,
        41: b,
        45: v,
        48: k,
        51: D,
        52: C,
        53: x,
        54: $,
        57: A
      }, t(L, [2, 5]), {
        9: 39,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: a,
        17: l,
        19: h,
        22: d,
        24: u,
        25: p,
        26: y,
        27: g,
        28: f,
        29: S,
        32: 25,
        33: m,
        35: _,
        37: T,
        38: E,
        41: b,
        45: v,
        48: k,
        51: D,
        52: C,
        53: x,
        54: $,
        57: A
      }, t(L, [2, 7]), t(L, [2, 8]), t(L, [2, 9]), t(L, [2, 10]), t(L, [2, 11]), t(L, [2, 12], {
        14: [1, 40],
        15: [1, 41]
      }), t(L, [2, 16]), {
        18: [1, 42]
      }, t(L, [2, 18], {
        20: [1, 43]
      }), {
        23: [1, 44]
      }, t(L, [2, 22]), t(L, [2, 23]), t(L, [2, 24]), t(L, [2, 25]), {
        30: 45,
        31: [1, 46],
        59: [1, 47],
        60: [1, 48]
      }, t(L, [2, 28]), {
        34: [1, 49]
      }, {
        36: [1, 50]
      }, t(L, [2, 31]), {
        13: 51,
        24: u,
        57: A
      }, {
        42: [1, 52],
        44: [1, 53]
      }, {
        46: [1, 54]
      }, {
        49: [1, 55]
      }, t(I, [2, 44], {
        58: [1, 56]
      }), t(I, [2, 45], {
        58: [1, 57]
      }), t(L, [2, 38]), t(L, [2, 39]), t(L, [2, 40]), t(L, [2, 41]), t(L, [2, 6]), t(L, [2, 13]), {
        13: 58,
        24: u,
        57: A
      }, t(L, [2, 17]), t(O, r, {
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
      }, t(L, [2, 29]), t(L, [2, 30]), {
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
      }, t(L, [2, 14], {
        14: [1, 71]
      }), {
        4: n,
        5: o,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: a,
        17: l,
        19: h,
        21: [1, 72],
        22: d,
        24: u,
        25: p,
        26: y,
        27: g,
        28: f,
        29: S,
        32: 25,
        33: m,
        35: _,
        37: T,
        38: E,
        41: b,
        45: v,
        48: k,
        51: D,
        52: C,
        53: x,
        54: $,
        57: A
      }, t(L, [2, 20], {
        20: [1, 73]
      }), {
        31: [1, 74]
      }, {
        24: [1, 75]
      }, {
        39: [1, 76]
      }, {
        39: [1, 77]
      }, t(L, [2, 34]), t(L, [2, 35]), t(L, [2, 36]), t(L, [2, 37]), t(I, [2, 46]), t(I, [2, 47]), t(L, [2, 15]), t(L, [2, 19]), t(O, r, {
        7: 78
      }), t(L, [2, 26]), t(L, [2, 27]), {
        5: [1, 79]
      }, {
        5: [1, 80]
      }, {
        4: n,
        5: o,
        8: 8,
        9: 10,
        10: 12,
        11: 13,
        12: 14,
        13: 15,
        16: a,
        17: l,
        19: h,
        21: [1, 81],
        22: d,
        24: u,
        25: p,
        26: y,
        27: g,
        28: f,
        29: S,
        32: 25,
        33: m,
        35: _,
        37: T,
        38: E,
        41: b,
        45: v,
        48: k,
        51: D,
        52: C,
        53: x,
        54: $,
        57: A
      }, t(L, [2, 32]), t(L, [2, 33]), t(L, [2, 21])],
      defaultActions: {
        5: [2, 1],
        6: [2, 2],
        47: [2, 48],
        48: [2, 49]
      },
      parseError: loggerLevelUtils.setFunctionName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var s = Error(t);
          s.hash = e;
          throw s;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (t) {
        var e = this;
        var s = [0];
        var i = [];
        var r = [null];
        var n = [];
        var o = this.table;
        var a = "";
        var l = 0;
        var h = 0;
        var d = 0;
        var u = n.slice.call(arguments, 1);
        var p = Object.create(this.lexer);
        var y = {
          yy: {}
        };
        for (var g in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
            y.yy[g] = this.yy[g];
          }
        }
        p.setInput(t, y.yy);
        y.yy.lexer = p;
        y.yy.parser = this;
        if (p.yylloc === undefined) {
          p.yylloc = {};
        }
        var f = p.yylloc;
        n.push(f);
        var S = p.options && p.options.ranges;
        function m() {
          var t;
          if (typeof (t = i.pop() || p.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (i = t).pop();
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
        loggerLevelUtils.setFunctionName(function (t) {
          s.length = s.length - t * 2;
          r.length = r.length - t;
          n.length = n.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(m, "lex");
        var _;
        var T;
        var E;
        var b;
        var v;
        var k;
        var D;
        var C;
        var x;
        var $ = {};
        while (true) {
          E = s[s.length - 1];
          if (this.defaultActions[E]) {
            b = this.defaultActions[E];
          } else {
            if (_ == null) {
              _ = m();
            }
            b = o[E] && o[E][_];
          }
          if (b === undefined || !b.length || !b[0]) {
            var A = "";
            x = [];
            for (k in o[E]) {
              if (this.terminals_[k] && k > 2) {
                x.push("'" + this.terminals_[k] + "'");
              }
            }
            A = p.showPosition ? "Parse error on line " + (l + 1) + ":\n" + p.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
            this.parseError(A, {
              text: p.match,
              token: this.terminals_[_] || _,
              line: p.yylineno,
              loc: f,
              expected: x
            });
          }
          if (b[0] instanceof Array && b.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + E + ", token: " + _);
          }
          switch (b[0]) {
            case 1:
              s.push(_);
              r.push(p.yytext);
              n.push(p.yylloc);
              s.push(b[1]);
              _ = null;
              if (T) {
                _ = T;
                T = null;
              } else {
                h = p.yyleng;
                a = p.yytext;
                l = p.yylineno;
                f = p.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              D = this.productions_[b[1]][1];
              $.$ = r[r.length - D];
              $._$ = {
                first_line: n[n.length - (D || 1)].first_line,
                last_line: n[n.length - 1].last_line,
                first_column: n[n.length - (D || 1)].first_column,
                last_column: n[n.length - 1].last_column
              };
              if (S) {
                $._$.range = [n[n.length - (D || 1)].range[0], n[n.length - 1].range[1]];
              }
              if ((v = this.performAction.apply($, [a, h, l, y.yy, b[1], r, n].concat(u))) !== undefined) {
                return v;
              }
              if (D) {
                s = s.slice(0, D * -1 * 2);
                r = r.slice(0, D * -1);
                n = n.slice(0, D * -1);
              }
              s.push(this.productions_[b[1]][0]);
              r.push($.$);
              n.push($._$);
              C = o[s[s.length - 2]][s[s.length - 1]];
              s.push(C);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var N = {
      EOF: 1,
      parseError: loggerLevelUtils.setFunctionName(function (t, e) {
        if (this.yy.parser) {
          this.yy.parser.parseError(t, e);
        } else {
          throw Error(t);
        }
      }, "parseError"),
      setInput: loggerLevelUtils.setFunctionName(function (t, e) {
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
      input: loggerLevelUtils.setFunctionName(function () {
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
      unput: loggerLevelUtils.setFunctionName(function (t) {
        var e = t.length;
        var s = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (s.length - 1) {
          this.yylineno -= s.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: s ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - e];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      more: loggerLevelUtils.setFunctionName(function () {
        this._more = true;
        return this;
      }, "more"),
      reject: loggerLevelUtils.setFunctionName(function () {
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
      less: loggerLevelUtils.setFunctionName(function (t) {
        this.unput(this.match.slice(t));
      }, "less"),
      pastInput: loggerLevelUtils.setFunctionName(function () {
        var t = this.matched.substr(0, this.matched.length - this.match.length);
        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: loggerLevelUtils.setFunctionName(function () {
        var t = this.match;
        if (t.length < 20) {
          t += this._input.substr(0, 20 - t.length);
        }
        return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: loggerLevelUtils.setFunctionName(function () {
        var t = this.pastInput();
        var e = Array(t.length + 1).join("-");
        return t + this.upcomingInput() + "\n" + e + "^";
      }, "showPosition"),
      test_match: loggerLevelUtils.setFunctionName(function (t, e) {
        var s;
        var i;
        var r;
        if (this.options.backtrack_lexer) {
          r = {
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
            r.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (i = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += i.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
        s = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (s) {
          return s;
        }
        if (this._backtrack) {
          for (var n in r) {
            this[n] = r[n];
          }
        }
        return false;
      }, "test_match"),
      next: loggerLevelUtils.setFunctionName(function () {
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
        var s;
        var i;
        var r = this._currentRules();
        var n = 0;
        for (; n < r.length; n++) {
          if ((s = this._input.match(this.rules[r[n]])) && (!e || s[0].length > e[0].length)) {
            e = s;
            i = n;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(s, r[n])) !== false) {
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
          return (t = this.test_match(e, r[i])) !== false && t;
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
      lex: loggerLevelUtils.setFunctionName(function () {
        var t = this.next();
        return t || this.lex();
      }, "lex"),
      begin: loggerLevelUtils.setFunctionName(function (t) {
        this.conditionStack.push(t);
      }, "begin"),
      popState: loggerLevelUtils.setFunctionName(function () {
        if (this.conditionStack.length - 1 > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      _currentRules: loggerLevelUtils.setFunctionName(function () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions.INITIAL.rules;
        }
      }, "_currentRules"),
      topState: loggerLevelUtils.setFunctionName(function (t) {
        if ((t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0) {
          return this.conditionStack[t];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: loggerLevelUtils.setFunctionName(function (t) {
        this.begin(t);
      }, "pushState"),
      stateStackSize: loggerLevelUtils.setFunctionName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: loggerLevelUtils.setFunctionName(function (t, e, s, i) {
        switch (s) {
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
    function R() {
      this.yy = {};
    }
    w.lexer = N;
    loggerLevelUtils.setFunctionName(R, "Parser");
    R.prototype = w;
    w.Parser = R;
    return new R();
  }();
  h.parser = h;
  var d = h;
  var u = "state";
  var p = "root";
  var y = "relation";
  var g = "default";
  var f = "divider";
  var S = "fill:none";
  var m = "fill: #333";
  var _ = "text";
  var T = "normal";
  var E = "rect";
  var b = "rectWithTitle";
  var v = "divider";
  var k = "roundedWithTitle";
  var D = "statediagram";
  var C = `${D}-state`;
  var x = "transition";
  var $ = `${x} note-edge`;
  var A = `${D}-note`;
  var L = `${D}-cluster`;
  var I = `${D}-cluster-alt`;
  var O = "parent";
  var w = "note";
  var N = "----";
  var R = `${N}${w}`;
  var W = `${N}${O}`;
  var B = loggerLevelUtils.setFunctionName(function (t, e = "TB") {
    if (!t.doc) {
      return e;
    }
    let s = e;
    for (let e of t.doc) {
      if (e.stmt === "dir") {
        s = e.value;
      }
    }
    return s;
  }, "getDir");
  var Y = {
    getClasses: loggerLevelUtils.setFunctionName(function (t, e) {
      return e.db.getClasses();
    }, "getClasses"),
    draw: loggerLevelUtils.setFunctionName(async function (t, e, s, i) {
      var d;
      loggerLevelUtils.logger.info("REF0:");
      loggerLevelUtils.logger.info("Drawing state diagram (v2)", e);
      let {
        securityLevel: u,
        state: p,
        layout: y
      } = mermaidConfigUtils_1.getConfigAlias();
      i.db.extract(i.db.getRootDocV2());
      let g = i.db.getData();
      let f = diagramElementSelector.getDiagramElement(e, u);
      g.type = i.type;
      g.layoutAlgorithm = y;
      g.nodeSpacing = (p == null ? undefined : p.nodeSpacing) || 50;
      g.rankSpacing = (p == null ? undefined : p.rankSpacing) || 50;
      g.markers = ["barb"];
      g.diagramId = e;
      await mermaidLayoutRegistryRenderer.render(g, f);
      try {
        (typeof i.db.getLinks == "function" ? i.db.getLinks() : new Map()).forEach((t, e) => {
          var s;
          let i;
          let r = typeof e == "string" ? e : typeof (e == null ? undefined : e.id) == "string" ? e.id : "";
          if (!r) {
            loggerLevelUtils.logger.warn("⚠️ Invalid or missing stateId from key:", JSON.stringify(e));
            return;
          }
          let n = (s = f.node()) === null || s === undefined ? undefined : s.querySelectorAll("g");
          if (n != null) {
            n.forEach(t => {
              var e;
              if (((e = t.textContent) === null || e === undefined ? undefined : e.trim()) === r) {
                i = t;
              }
            });
          }
          if (!i) {
            loggerLevelUtils.logger.warn("⚠️ Could not find node matching text:", r);
            return;
          }
          let o = i.parentNode;
          if (!o) {
            loggerLevelUtils.logger.warn("⚠️ Node has no parent, cannot wrap:", r);
            return;
          }
          let a = document.createElementNS("http://www.w3.org/2000/svg", "a");
          let l = t.url.replace(/^"+|"+$/g, "");
          a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          a.setAttribute("target", "_blank");
          if (t.tooltip) {
            let e = t.tooltip.replace(/^"+|"+$/g, "");
            a.setAttribute("title", e);
          }
          o.replaceChild(a, i);
          a.appendChild(i);
          loggerLevelUtils.logger.info("🔗 Wrapped node in <a> tag for:", r, t.url);
        });
      } catch (t) {
        loggerLevelUtils.logger.error("❌ Error injecting clickable links:", t);
      }
      mermaidDiagramUtils.mermaidUtils.insertTitle(f, "statediagramTitleText", (p == null ? undefined : p.titleTopMargin) ?? 25, i.db.getDiagramTitle());
      mermaidSvgViewportSetup.setupViewPortForSvg(f, 8, D, (d = p == null ? undefined : p.useMaxWidth) === null || d === undefined || d);
    }, "draw"),
    getDir: B
  };
  var F = new Map();
  var P = 0;
  function M(t = "", e = 0, s = "", i = N) {
    let r = s !== null && s.length > 0 ? `${i}${s}` : "";
    return `state-${t}${r}-${e}`;
  }
  loggerLevelUtils.setFunctionName(M, "stateDomId");
  var G = loggerLevelUtils.setFunctionName((t, e, s, i, r, n, o, a) => {
    loggerLevelUtils.logger.trace("items", e);
    e.forEach(e => {
      switch (e.stmt) {
        case u:
        case g:
          K(t, e, s, i, r, n, o, a);
          break;
        case y:
          {
            K(t, e.state1, s, i, r, n, o, a);
            K(t, e.state2, s, i, r, n, o, a);
            let h = {
              id: "edge" + P,
              start: e.state1.id,
              end: e.state2.id,
              arrowhead: "normal",
              arrowTypeEnd: "arrow_barb",
              style: S,
              labelStyle: "",
              label: mermaidConfigUtils_1.textUtilities.sanitizeText(e.description ?? "", mermaidConfigUtils_1.getConfigAlias()),
              arrowheadStyle: m,
              labelpos: "c",
              labelType: _,
              thickness: T,
              classes: x,
              look: o
            };
            r.push(h);
            P++;
          }
      }
    });
  }, "setupDoc");
  var j = loggerLevelUtils.setFunctionName(function (t, e = "TB") {
    let s = e;
    if (t.doc) {
      for (let e of t.doc) {
        if (e.stmt === "dir") {
          s = e.value;
        }
      }
    }
    return s;
  }, "getDir");
  function V(t, e, s) {
    if (!e.id || e.id === "</join></fork>" || e.id === "</choice>") {
      return;
    }
    if (e.cssClasses) {
      if (!Array.isArray(e.cssCompiledStyles)) {
        e.cssCompiledStyles = [];
      }
      e.cssClasses.split(" ").forEach(t => {
        let i = s.get(t);
        if (i) {
          e.cssCompiledStyles = [...(e.cssCompiledStyles ?? []), ...i.styles];
        }
      });
    }
    let i = t.find(t => t.id === e.id);
    if (i) {
      Object.assign(i, e);
    } else {
      t.push(e);
    }
  }
  function U(t) {
    var e;
    return (t == null ? undefined : (e = t.classes) === null || e === undefined ? undefined : e.join(" ")) ?? "";
  }
  function z(t) {
    return (t == null ? undefined : t.styles) ?? [];
  }
  loggerLevelUtils.setFunctionName(V, "insertOrUpdateNode");
  loggerLevelUtils.setFunctionName(U, "getClassesFromDbInfo");
  loggerLevelUtils.setFunctionName(z, "getStylesFromDbInfo");
  var K = loggerLevelUtils.setFunctionName((t, e, s, i, r, n, o, a) => {
    let h = e.id;
    let d = s.get(h);
    let u = U(d);
    let p = z(d);
    let y = mermaidConfigUtils_1.getConfigAlias();
    loggerLevelUtils.logger.info("dataFetcher parsedItem", e, d, p);
    if (h !== "root") {
      let s = E;
      if (e.start === true) {
        s = "stateStart";
      } else if (e.start === false) {
        s = "stateEnd";
      }
      if (e.type !== g) {
        s = e.type;
      }
      if (!F.get(h)) {
        F.set(h, {
          id: h,
          shape: s,
          description: mermaidConfigUtils_1.textUtilities.sanitizeText(h, y),
          cssClasses: `${u} ${C}`,
          cssStyles: p
        });
      }
      let d = F.get(h);
      if (e.description) {
        if (Array.isArray(d.description)) {
          d.shape = b;
          d.description.push(e.description);
        } else if (d.description?.length && d.description.length > 0) {
          d.shape = b;
          if (d.description === h) {
            d.description = [e.description];
          } else {
            d.description = [d.description, e.description];
          }
        } else {
          d.shape = E;
          d.description = e.description;
        }
        d.description = mermaidConfigUtils_1.textUtilities.sanitizeTextOrArray(d.description, y);
      }
      if (d.description?.length === 1 && d.shape === b) {
        if (d.type === "group") {
          d.shape = k;
        } else {
          d.shape = E;
        }
      }
      if (!d.type && e.doc) {
        loggerLevelUtils.logger.info("Setting cluster for XCX", h, j(e));
        d.type = "group";
        d.isGroup = true;
        d.dir = j(e);
        d.shape = e.type === f ? v : k;
        d.cssClasses = `${d.cssClasses} ${L} ${n ? I : ""}`;
      }
      let B = {
        labelStyle: "",
        shape: d.shape,
        label: d.description,
        cssClasses: d.cssClasses,
        cssCompiledStyles: [],
        cssStyles: d.cssStyles,
        id: h,
        dir: d.dir,
        domId: M(h, P),
        type: d.type,
        isGroup: d.type === "group",
        padding: 8,
        rx: 10,
        ry: 10,
        look: o
      };
      if (B.shape === v) {
        B.label = "";
      }
      if (t && t.id !== "root") {
        loggerLevelUtils.logger.trace("Setting node ", h, " to be child of its parent ", t.id);
        B.parentId = t.id;
      }
      B.centerLabel = true;
      if (e.note) {
        let t = {
          labelStyle: "",
          shape: "note",
          label: e.note.text,
          cssClasses: A,
          cssStyles: [],
          cssCompiledStyles: [],
          id: h + R + "-" + P,
          domId: M(h, P, w),
          type: d.type,
          isGroup: d.type === "group",
          padding: y.flowchart?.padding,
          look: o,
          position: e.note.position
        };
        let s = h + W;
        let n = {
          labelStyle: "",
          shape: "noteGroup",
          label: e.note.text,
          cssClasses: d.cssClasses,
          cssStyles: [],
          id: h + W,
          domId: M(h, P, O),
          type: "group",
          isGroup: true,
          padding: 16,
          look: o,
          position: e.note.position
        };
        P++;
        n.id = s;
        t.parentId = s;
        V(i, n, a);
        V(i, t, a);
        V(i, B, a);
        let l = h;
        let c = t.id;
        if (e.note.position === "left of") {
          l = t.id;
          c = h;
        }
        r.push({
          id: l + "-" + c,
          start: l,
          end: c,
          arrowhead: "none",
          arrowTypeEnd: "",
          style: S,
          labelStyle: "",
          classes: $,
          arrowheadStyle: m,
          labelpos: "c",
          labelType: _,
          thickness: T,
          look: o
        });
      } else {
        V(i, B, a);
      }
    }
    if (e.doc) {
      loggerLevelUtils.logger.trace("Adding nodes children ");
      G(e, e.doc, s, i, r, !n, o, a);
    }
  }, "dataFetcher");
  var H = loggerLevelUtils.setFunctionName(() => {
    F.clear();
    P = 0;
  }, "reset");
  var X = {
    START_NODE: "[*]",
    START_TYPE: "start",
    END_NODE: "[*]",
    END_TYPE: "end",
    COLOR_KEYWORD: "color",
    FILL_KEYWORD: "fill",
    BG_FILL: "bgFill",
    STYLECLASS_SEP: ","
  };
  var J = loggerLevelUtils.setFunctionName(() => new Map(), "newClassesList");
  var q = loggerLevelUtils.setFunctionName(() => ({
    relations: [],
    states: new Map(),
    documents: {}
  }), "newDoc");
  var Z = loggerLevelUtils.setFunctionName(t => JSON.parse(JSON.stringify(t)), "clone");
  i = class {
    extract(t) {
      this.clear(true);
      for (let e of Array.isArray(t) ? t : t.doc) {
        switch (e.stmt) {
          case u:
            this.addState(e.id.trim(), e.type, e.doc, e.description, e.note);
            break;
          case y:
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
      let s = mermaidConfigUtils_1.getConfigAlias();
      H();
      K(undefined, this.getRootDocV2(), e, this.nodes, this.edges, true, s.look, this.classes);
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
      let s = t.styleClass.split(",");
      for (let t of e) {
        let e = this.getState(t);
        if (!e) {
          let s = t.trim();
          this.addState(s);
          e = this.getState(s);
        }
        if (e) {
          e.styles = s.map(t => {
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
      loggerLevelUtils.logger.info("Setting root doc", t);
      this.rootDoc = t;
      if (this.version === 1) {
        this.extract(t);
      } else {
        this.extract(this.getRootDocV2());
      }
    }
    docTranslator(t, e, s) {
      if (e.stmt === y) {
        this.docTranslator(t, e.state1, true);
        this.docTranslator(t, e.state2, false);
        return;
      }
      if (e.stmt === u) {
        if (e.id === X.START_NODE) {
          e.id = t.id + (s ? "_start" : "_end");
          e.start = s;
        } else {
          e.id = e.id.trim();
        }
      }
      if (e.stmt !== p && e.stmt !== u || !e.doc) {
        return;
      }
      let i = [];
      let r = [];
      for (let t of e.doc) {
        if (t.type === f) {
          let e = Z(t);
          e.doc = Z(r);
          i.push(e);
          r = [];
        } else {
          r.push(t);
        }
      }
      if (i.length > 0 && r.length > 0) {
        let t = {
          stmt: u,
          id: mermaidDiagramUtils.generateId(),
          type: "divider",
          doc: Z(r)
        };
        i.push(Z(t));
        e.doc = i;
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
    addState(t, e = g, s = undefined, i = undefined, r = undefined, n = undefined, o = undefined, a = undefined) {
      let h = t == null ? undefined : t.trim();
      if (this.currentDocument.states.has(h)) {
        let t = this.currentDocument.states.get(h);
        if (!t) {
          throw Error(`State not found: ${h}`);
        }
        t.doc ||= s;
        t.type ||= e;
      } else {
        loggerLevelUtils.logger.info("Adding state ", h, i);
        this.currentDocument.states.set(h, {
          stmt: u,
          id: h,
          descriptions: [],
          type: e,
          doc: s,
          note: r,
          classes: [],
          styles: [],
          textStyles: []
        });
      }
      if (i) {
        loggerLevelUtils.logger.info("Setting state description", h, i);
        (Array.isArray(i) ? i : [i]).forEach(t => this.addDescription(h, t.trim()));
      }
      if (r) {
        let t = this.currentDocument.states.get(h);
        if (!t) {
          throw Error(`State not found: ${h}`);
        }
        t.note = r;
        t.note.text = mermaidConfigUtils_1.textUtilities.sanitizeText(t.note.text, mermaidConfigUtils_1.getConfigAlias());
      }
      if (n) {
        loggerLevelUtils.logger.info("Setting state classes", h, n);
        (Array.isArray(n) ? n : [n]).forEach(t => this.setCssClass(h, t.trim()));
      }
      if (o) {
        loggerLevelUtils.logger.info("Setting state styles", h, o);
        (Array.isArray(o) ? o : [o]).forEach(t => this.setStyle(h, t.trim()));
      }
      if (a) {
        loggerLevelUtils.logger.info("Setting state styles", h, o);
        (Array.isArray(a) ? a : [a]).forEach(t => this.setTextStyle(h, t.trim()));
      }
    }
    clear(t) {
      this.nodes = [];
      this.edges = [];
      this.documents = {
        root: q()
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.classes = J();
      if (!t) {
        this.links = new Map();
        mermaidConfigUtils_1.clearCommonDb();
      }
    }
    getState(t) {
      return this.currentDocument.states.get(t);
    }
    getStates() {
      return this.currentDocument.states;
    }
    logDocuments() {
      loggerLevelUtils.logger.info("Documents = ", this.documents);
    }
    getRelations() {
      return this.currentDocument.relations;
    }
    addLink(t, e, s) {
      this.links.set(t, {
        url: e,
        tooltip: s
      });
      loggerLevelUtils.logger.warn("Adding link", t, e, s);
    }
    getLinks() {
      return this.links;
    }
    startIdIfNeeded(t = "") {
      if (t === X.START_NODE) {
        this.startEndCount++;
        return `${X.START_TYPE}${this.startEndCount}`;
      } else {
        return t;
      }
    }
    startTypeIfNeeded(t = "", e = g) {
      if (t === X.START_NODE) {
        return X.START_TYPE;
      } else {
        return e;
      }
    }
    endIdIfNeeded(t = "") {
      if (t === X.END_NODE) {
        this.startEndCount++;
        return `${X.END_TYPE}${this.startEndCount}`;
      } else {
        return t;
      }
    }
    endTypeIfNeeded(t = "", e = g) {
      if (t === X.END_NODE) {
        return X.END_TYPE;
      } else {
        return e;
      }
    }
    addRelationObjs(t, e, s = "") {
      let i = this.startIdIfNeeded(t.id.trim());
      let r = this.startTypeIfNeeded(t.id.trim(), t.type);
      let n = this.startIdIfNeeded(e.id.trim());
      let o = this.startTypeIfNeeded(e.id.trim(), e.type);
      this.addState(i, r, t.doc, t.description, t.note, t.classes, t.styles, t.textStyles);
      this.addState(n, o, e.doc, e.description, e.note, e.classes, e.styles, e.textStyles);
      this.currentDocument.relations.push({
        id1: i,
        id2: n,
        relationTitle: mermaidConfigUtils_1.textUtilities.sanitizeText(s, mermaidConfigUtils_1.getConfigAlias())
      });
    }
    addRelation(t, e, s) {
      if (typeof t == "object" && typeof e == "object") {
        this.addRelationObjs(t, e, s);
      } else if (typeof t == "string" && typeof e == "string") {
        let i = this.startIdIfNeeded(t.trim());
        let r = this.startTypeIfNeeded(t);
        let n = this.endIdIfNeeded(e.trim());
        let o = this.endTypeIfNeeded(e);
        this.addState(i, r);
        this.addState(n, o);
        this.currentDocument.relations.push({
          id1: i,
          id2: n,
          relationTitle: s ? mermaidConfigUtils_1.textUtilities.sanitizeText(s, mermaidConfigUtils_1.getConfigAlias()) : undefined
        });
      }
    }
    addDescription(t, e) {
      var s;
      let i = this.currentDocument.states.get(t);
      let r = e.startsWith(":") ? e.replace(":", "").trim() : e;
      if (i != null && (s = i.descriptions) !== null && s !== undefined) {
        s.push(mermaidConfigUtils_1.textUtilities.sanitizeText(r, mermaidConfigUtils_1.getConfigAlias()));
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
      let s = this.classes.get(t);
      if (e && s) {
        e.split(X.STYLECLASS_SEP).forEach(t => {
          let e = t.replace(/([^;]*);/, "$1").trim();
          if (RegExp(X.COLOR_KEYWORD).exec(t)) {
            let t = e.replace(X.FILL_KEYWORD, X.BG_FILL).replace(X.COLOR_KEYWORD, X.FILL_KEYWORD);
            s.textStyles.push(t);
          }
          s.styles.push(e);
        });
      }
    }
    getClasses() {
      return this.classes;
    }
    setCssClass(t, e) {
      t.split(",").forEach(t => {
        var s;
        let i = this.getState(t);
        if (!i) {
          let e = t.trim();
          this.addState(e);
          i = this.getState(e);
        }
        if (i != null && (s = i.classes) !== null && s !== undefined) {
          s.push(e);
        }
      });
    }
    setStyle(t, e) {
      var s;
      var i;
      if ((i = this.getState(t)) !== null && i !== undefined && (s = i.styles) !== null && s !== undefined) {
        s.push(e);
      }
    }
    setTextStyle(t, e) {
      var s;
      var i;
      if ((i = this.getState(t)) !== null && i !== undefined && (s = i.textStyles) !== null && s !== undefined) {
        s.push(e);
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
      let t = mermaidConfigUtils_1.getConfigAlias();
      return {
        nodes: this.nodes,
        edges: this.edges,
        other: {},
        config: t,
        direction: B(this.getRootDocV2())
      };
    }
    getConfig() {
      return mermaidConfigUtils_1.getConfigAlias().state;
    }
    constructor(t) {
      this.version = t;
      this.nodes = [];
      this.edges = [];
      this.rootDoc = [];
      this.classes = J();
      this.documents = {
        root: q()
      };
      this.currentDocument = this.documents.root;
      this.startEndCount = 0;
      this.dividerCnt = 0;
      this.links = new Map();
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.clear();
      this.setRootDoc = this.setRootDoc.bind(this);
      this.getDividerId = this.getDividerId.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.trimColon = this.trimColon.bind(this);
    }
  };
  loggerLevelUtils.setFunctionName(i, "StateDB");
  i.relationType = {
    AGGREGATION: 0,
    EXTENSION: 1,
    COMPOSITION: 2,
    DEPENDENCY: 3
  };
  var Q = i;
  var tt = loggerLevelUtils.setFunctionName(t => `
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
      return tt;
    },
    parser: function () {
      return d;
    },
    diagramRenderer: function () {
      return Y;
    },
    StateDB: function () {
      return Q;
    }
  });
}