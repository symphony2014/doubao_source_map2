// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 's' to 'fontAwesomeIconStylesHelper'
// - Resolved require(878353) to 'font-awesome-icon-styles-helper'
// - Renamed variable 'r' to 'jsYamlCoreImplementation'
// - Resolved require(671191) to 'js-yaml-core-implementation'
// - Renamed variable 'o' to 'mermaidNodeShapesRenderer'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'l' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'a' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'c' to 'colorDarknessUtil'
// - Resolved require(99164) to 'color-darkness-util'
// - Renamed variable 'h' to 'colorLightnessAdjuster'
// - Resolved require(695366) to 'color-lightness-adjuster'
// - Renamed variable 'u' to 'colorLightnessHelper'
// - Resolved require(366687) to 'color-lightness-helper'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'oO' to 'sanitizeText' (module 401926)
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'j7' to 'setupViewbox' (module 401926)
// - Updated imported property 'z' to 'load' (module 671191)
// - Updated imported property 'A' to 'Schema' (module 671191)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// - Updated imported property 'us' to 'insertNode' (module 411411)
// - Updated imported property 'Lf' to 'insertCluster' (module 411411)
// - Updated imported property 'aH' to 'kanbanItem' (module 411411)
// - Updated imported property 'Z' to 'isColorDark' (module 99164)
// - Updated imported property 'Z' to 'adjustLightness' (module 695366)
// - Updated imported property 'Z' to 'adjustLightness' (module 366687)
// - Updated imported property 'G' to 'getIconStyles' (module 878353)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81998.ed60c4db.js
         * chunkId: 81998
         * moduleId: 139952
         */
module.exports = function (module, exports, require) {
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var fontAwesomeIconStylesHelper = require("font-awesome-icon-styles-helper") /*id: 878353*/;
  var jsYamlCoreImplementation = require("js-yaml-core-implementation") /*id: 671191*/;
  var mermaidNodeShapesRenderer = require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var colorDarknessUtil = require("color-darkness-util") /*id: 99164*/;
  var colorLightnessAdjuster = require("color-lightness-adjuster") /*id: 695366*/;
  var colorLightnessHelper = require("color-lightness-helper") /*id: 366687*/;
  var d = function () {
    var e = loggerLevelUtils.setFunctionName(function (e, t, i, n) {
      i = i || {};
      n = e.length;
      for (; n--; i[e[n]] = t);
      return i;
    }, "o");
    var t = [1, 4];
    var i = [1, 13];
    var n = [1, 12];
    var s = [1, 15];
    var r = [1, 16];
    var o = [1, 20];
    var l = [1, 19];
    var c = [6, 7, 8];
    var h = [1, 26];
    var u = [1, 24];
    var d = [1, 25];
    var g = [6, 7, 11];
    var p = [1, 31];
    var y = [6, 7, 11, 24];
    var f = [1, 6, 13, 16, 17, 20, 23];
    var _ = [1, 35];
    var m = [1, 36];
    var b = [1, 6, 7, 11, 13, 16, 17, 20, 23];
    var k = [1, 38];
    var E = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mindMap: 4,
        spaceLines: 5,
        SPACELINE: 6,
        NL: 7,
        KANBAN: 8,
        document: 9,
        stop: 10,
        EOF: 11,
        statement: 12,
        SPACELIST: 13,
        node: 14,
        shapeData: 15,
        ICON: 16,
        CLASS: 17,
        nodeWithId: 18,
        nodeWithoutId: 19,
        NODE_DSTART: 20,
        NODE_DESCR: 21,
        NODE_DEND: 22,
        NODE_ID: 23,
        SHAPE_DATA: 24,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "SPACELINE",
        7: "NL",
        8: "KANBAN",
        11: "EOF",
        13: "SPACELIST",
        16: "ICON",
        17: "CLASS",
        20: "NODE_DSTART",
        21: "NODE_DESCR",
        22: "NODE_DEND",
        23: "NODE_ID",
        24: "SHAPE_DATA"
      },
      productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 3], [12, 2], [12, 2], [12, 2], [12, 1], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [19, 3], [18, 1], [18, 4], [15, 2], [15, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (e, t, i, n, s, r, o) {
        var l = r.length - 1;
        switch (s) {
          case 6:
          case 7:
            return n;
          case 8:
            n.getLogger().trace("Stop NL ");
            break;
          case 9:
            n.getLogger().trace("Stop EOF ");
            break;
          case 11:
            n.getLogger().trace("Stop NL2 ");
            break;
          case 12:
            n.getLogger().trace("Stop EOF2 ");
            break;
          case 15:
            n.getLogger().info("Node: ", r[l - 1].id);
            n.addNode(r[l - 2].length, r[l - 1].id, r[l - 1].descr, r[l - 1].type, r[l]);
            break;
          case 16:
            n.getLogger().info("Node: ", r[l].id);
            n.addNode(r[l - 1].length, r[l].id, r[l].descr, r[l].type);
            break;
          case 17:
            n.getLogger().trace("Icon: ", r[l]);
            n.decorateNode({
              icon: r[l]
            });
            break;
          case 18:
          case 23:
            n.decorateNode({
              class: r[l]
            });
            break;
          case 19:
            n.getLogger().trace("SPACELIST");
            break;
          case 20:
            n.getLogger().trace("Node: ", r[l - 1].id);
            n.addNode(0, r[l - 1].id, r[l - 1].descr, r[l - 1].type, r[l]);
            break;
          case 21:
            n.getLogger().trace("Node: ", r[l].id);
            n.addNode(0, r[l].id, r[l].descr, r[l].type);
            break;
          case 22:
            n.decorateNode({
              icon: r[l]
            });
            break;
          case 27:
            n.getLogger().trace("node found ..", r[l - 2]);
            this.$ = {
              id: r[l - 1],
              descr: r[l - 1],
              type: n.getType(r[l - 2], r[l])
            };
            break;
          case 28:
            this.$ = {
              id: r[l],
              descr: r[l],
              type: 0
            };
            break;
          case 29:
            n.getLogger().trace("node found ..", r[l - 3]);
            this.$ = {
              id: r[l - 3],
              descr: r[l - 1],
              type: n.getType(r[l - 2], r[l])
            };
            break;
          case 30:
            this.$ = r[l - 1] + r[l];
            break;
          case 31:
            this.$ = r[l];
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: [1, 5],
        8: t
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        4: 6,
        6: [1, 7],
        7: [1, 8],
        8: t
      }, {
        6: i,
        7: [1, 10],
        9: 9,
        12: 11,
        13: n,
        14: 14,
        16: s,
        17: r,
        18: 17,
        19: 18,
        20: o,
        23: l
      }, e(c, [2, 3]), {
        1: [2, 2]
      }, e(c, [2, 4]), e(c, [2, 5]), {
        1: [2, 6],
        6: i,
        12: 21,
        13: n,
        14: 14,
        16: s,
        17: r,
        18: 17,
        19: 18,
        20: o,
        23: l
      }, {
        6: i,
        9: 22,
        12: 11,
        13: n,
        14: 14,
        16: s,
        17: r,
        18: 17,
        19: 18,
        20: o,
        23: l
      }, {
        6: h,
        7: u,
        10: 23,
        11: d
      }, e(g, [2, 24], {
        18: 17,
        19: 18,
        14: 27,
        16: [1, 28],
        17: [1, 29],
        20: o,
        23: l
      }), e(g, [2, 19]), e(g, [2, 21], {
        15: 30,
        24: p
      }), e(g, [2, 22]), e(g, [2, 23]), e(y, [2, 25]), e(y, [2, 26]), e(y, [2, 28], {
        20: [1, 32]
      }), {
        21: [1, 33]
      }, {
        6: h,
        7: u,
        10: 34,
        11: d
      }, {
        1: [2, 7],
        6: i,
        12: 21,
        13: n,
        14: 14,
        16: s,
        17: r,
        18: 17,
        19: 18,
        20: o,
        23: l
      }, e(f, [2, 14], {
        7: _,
        11: m
      }), e(b, [2, 8]), e(b, [2, 9]), e(b, [2, 10]), e(g, [2, 16], {
        15: 37,
        24: p
      }), e(g, [2, 17]), e(g, [2, 18]), e(g, [2, 20], {
        24: k
      }), e(y, [2, 31]), {
        21: [1, 39]
      }, {
        22: [1, 40]
      }, e(f, [2, 13], {
        7: _,
        11: m
      }), e(b, [2, 11]), e(b, [2, 12]), e(g, [2, 15], {
        24: k
      }), e(y, [2, 30]), {
        22: [1, 41]
      }, e(y, [2, 27]), e(y, [2, 29])],
      defaultActions: {
        2: [2, 1],
        6: [2, 2]
      },
      parseError: loggerLevelUtils.setFunctionName(function (e, t) {
        if (t.recoverable) {
          this.trace(e);
        } else {
          var i = Error(e);
          i.hash = t;
          throw i;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (e) {
        var t = this;
        var i = [0];
        var n = [];
        var s = [null];
        var r = [];
        var o = this.table;
        var l = "";
        var c = 0;
        var h = 0;
        var u = 0;
        var d = r.slice.call(arguments, 1);
        var g = Object.create(this.lexer);
        var p = {
          yy: {}
        };
        for (var y in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, y)) {
            p.yy[y] = this.yy[y];
          }
        }
        g.setInput(e, p.yy);
        p.yy.lexer = g;
        p.yy.parser = this;
        if (g.yylloc === undefined) {
          g.yylloc = {};
        }
        var f = g.yylloc;
        r.push(f);
        var _ = g.options && g.options.ranges;
        function m() {
          var e;
          if (typeof (e = n.pop() || g.lex() || 1) != "number") {
            if (e instanceof Array) {
              e = (n = e).pop();
            }
            e = t.symbols_[e] || e;
          }
          return e;
        }
        if (typeof p.yy.parseError == "function") {
          this.parseError = p.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (e) {
          i.length = i.length - e * 2;
          s.length = s.length - e;
          r.length = r.length - e;
        }, "popStack");
        loggerLevelUtils.setFunctionName(m, "lex");
        var b;
        var k;
        var E;
        var v;
        var S;
        var N;
        var L;
        var x;
        var D;
        var O = {};
        while (true) {
          E = i[i.length - 1];
          if (this.defaultActions[E]) {
            v = this.defaultActions[E];
          } else {
            if (b == null) {
              b = m();
            }
            v = o[E] && o[E][b];
          }
          if (v === undefined || !v.length || !v[0]) {
            var C = "";
            D = [];
            for (N in o[E]) {
              if (this.terminals_[N] && N > 2) {
                D.push("'" + this.terminals_[N] + "'");
              }
            }
            C = g.showPosition ? "Parse error on line " + (c + 1) + ":\n" + g.showPosition() + "\nExpecting " + D.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (b == 1 ? "end of input" : "'" + (this.terminals_[b] || b) + "'");
            this.parseError(C, {
              text: g.match,
              token: this.terminals_[b] || b,
              line: g.yylineno,
              loc: f,
              expected: D
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + E + ", token: " + b);
          }
          switch (v[0]) {
            case 1:
              i.push(b);
              s.push(g.yytext);
              r.push(g.yylloc);
              i.push(v[1]);
              b = null;
              if (k) {
                b = k;
                k = null;
              } else {
                h = g.yyleng;
                l = g.yytext;
                c = g.yylineno;
                f = g.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              L = this.productions_[v[1]][1];
              O.$ = s[s.length - L];
              O._$ = {
                first_line: r[r.length - (L || 1)].first_line,
                last_line: r[r.length - 1].last_line,
                first_column: r[r.length - (L || 1)].first_column,
                last_column: r[r.length - 1].last_column
              };
              if (_) {
                O._$.range = [r[r.length - (L || 1)].range[0], r[r.length - 1].range[1]];
              }
              if ((S = this.performAction.apply(O, [l, h, c, p.yy, v[1], s, r].concat(d))) !== undefined) {
                return S;
              }
              if (L) {
                i = i.slice(0, L * -1 * 2);
                s = s.slice(0, L * -1);
                r = r.slice(0, L * -1);
              }
              i.push(this.productions_[v[1]][0]);
              s.push(O.$);
              r.push(O._$);
              x = o[i[i.length - 2]][i[i.length - 1]];
              i.push(x);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var v = {
      EOF: 1,
      parseError: loggerLevelUtils.setFunctionName(function (e, t) {
        if (this.yy.parser) {
          this.yy.parser.parseError(e, t);
        } else {
          throw Error(e);
        }
      }, "parseError"),
      setInput: loggerLevelUtils.setFunctionName(function (e, t) {
        this.yy = t || this.yy || {};
        this._input = e;
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
        var e = this._input[0];
        this.yytext += e;
        this.yyleng++;
        this.offset++;
        this.match += e;
        this.matched += e;
        if (e.match(/(?:\r\n?|\n).*/g)) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return e;
      }, "input"),
      unput: loggerLevelUtils.setFunctionName(function (e) {
        var t = e.length;
        var i = e.split(/(?:\r\n?|\n)/g);
        this._input = e + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - t);
        this.offset -= t;
        var n = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (i.length - 1) {
          this.yylineno -= i.length - 1;
        }
        var s = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - t
        };
        if (this.options.ranges) {
          this.yylloc.range = [s[0], s[0] + this.yyleng - t];
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
      less: loggerLevelUtils.setFunctionName(function (e) {
        this.unput(this.match.slice(e));
      }, "less"),
      pastInput: loggerLevelUtils.setFunctionName(function () {
        var e = this.matched.substr(0, this.matched.length - this.match.length);
        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: loggerLevelUtils.setFunctionName(function () {
        var e = this.match;
        if (e.length < 20) {
          e += this._input.substr(0, 20 - e.length);
        }
        return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: loggerLevelUtils.setFunctionName(function () {
        var e = this.pastInput();
        var t = Array(e.length + 1).join("-");
        return e + this.upcomingInput() + "\n" + t + "^";
      }, "showPosition"),
      test_match: loggerLevelUtils.setFunctionName(function (e, t) {
        var i;
        var n;
        var s;
        if (this.options.backtrack_lexer) {
          s = {
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
            s.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (n = e[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += n.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
        };
        this.yytext += e[0];
        this.match += e[0];
        this.matches = e;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(e[0].length);
        this.matched += e[0];
        i = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (i) {
          return i;
        }
        if (this._backtrack) {
          for (var r in s) {
            this[r] = s[r];
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
        var e;
        var t;
        var i;
        var n;
        var s = this._currentRules();
        var r = 0;
        for (; r < s.length; r++) {
          if ((i = this._input.match(this.rules[s[r]])) && (!t || i[0].length > t[0].length)) {
            t = i;
            n = r;
            if (this.options.backtrack_lexer) {
              if ((e = this.test_match(i, s[r])) !== false) {
                return e;
              }
              if (!this._backtrack) {
                return false;
              }
              t = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (t) {
          return (e = this.test_match(t, s[n])) !== false && e;
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
        var e = this.next();
        return e || this.lex();
      }, "lex"),
      begin: loggerLevelUtils.setFunctionName(function (e) {
        this.conditionStack.push(e);
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
      topState: loggerLevelUtils.setFunctionName(function (e) {
        if ((e = this.conditionStack.length - 1 - Math.abs(e || 0)) >= 0) {
          return this.conditionStack[e];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: loggerLevelUtils.setFunctionName(function (e) {
        this.begin(e);
      }, "pushState"),
      stateStackSize: loggerLevelUtils.setFunctionName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: loggerLevelUtils.setFunctionName(function (e, t, i, n) {
        switch (i) {
          case 0:
            this.pushState("shapeData");
            t.yytext = "";
            return 24;
          case 1:
            this.pushState("shapeDataStr");
            return 24;
          case 2:
            this.popState();
            return 24;
          case 3:
            t.yytext = t.yytext.replace(/\n\s*/g, "<br/>");
            return 24;
          case 4:
            return 24;
          case 5:
          case 10:
          case 29:
          case 32:
            this.popState();
            break;
          case 6:
            e.getLogger().trace("Found comment", t.yytext);
            return 6;
          case 7:
            return 8;
          case 8:
            this.begin("CLASS");
            break;
          case 9:
            this.popState();
            return 17;
          case 11:
            e.getLogger().trace("Begin icon");
            this.begin("ICON");
            break;
          case 12:
            e.getLogger().trace("SPACELINE");
            return 6;
          case 13:
            return 7;
          case 14:
            return 16;
          case 15:
            e.getLogger().trace("end icon");
            this.popState();
            break;
          case 16:
            e.getLogger().trace("Exploding node");
            this.begin("NODE");
            return 20;
          case 17:
            e.getLogger().trace("Cloud");
            this.begin("NODE");
            return 20;
          case 18:
            e.getLogger().trace("Explosion Bang");
            this.begin("NODE");
            return 20;
          case 19:
            e.getLogger().trace("Cloud Bang");
            this.begin("NODE");
            return 20;
          case 20:
          case 21:
          case 22:
          case 23:
            this.begin("NODE");
            return 20;
          case 24:
            return 13;
          case 25:
            return 23;
          case 26:
            return 11;
          case 27:
            this.begin("NSTR2");
            break;
          case 28:
            return "NODE_DESCR";
          case 30:
            e.getLogger().trace("Starting NSTR");
            this.begin("NSTR");
            break;
          case 31:
            e.getLogger().trace("description:", t.yytext);
            return "NODE_DESCR";
          case 33:
            this.popState();
            e.getLogger().trace("node end ))");
            return "NODE_DEND";
          case 34:
            this.popState();
            e.getLogger().trace("node end )");
            return "NODE_DEND";
          case 35:
            this.popState();
            e.getLogger().trace("node end ...", t.yytext);
            return "NODE_DEND";
          case 36:
          case 39:
          case 40:
            this.popState();
            e.getLogger().trace("node end ((");
            return "NODE_DEND";
          case 37:
          case 38:
            this.popState();
            e.getLogger().trace("node end (-");
            return "NODE_DEND";
          case 41:
          case 42:
            e.getLogger().trace("Long description:", t.yytext);
            return 21;
        }
      }, "anonymous"),
      rules: [/^(?:@\{)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^\"]+)/i, /^(?:[^}^"]+)/i, /^(?:\})/i, /^(?:\s*%%.*)/i, /^(?:kanban\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}@]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: {
        shapeDataEndBracket: {
          rules: [],
          inclusive: false
        },
        shapeDataStr: {
          rules: [2, 3],
          inclusive: false
        },
        shapeData: {
          rules: [1, 4, 5],
          inclusive: false
        },
        CLASS: {
          rules: [9, 10],
          inclusive: false
        },
        ICON: {
          rules: [14, 15],
          inclusive: false
        },
        NSTR2: {
          rules: [28, 29],
          inclusive: false
        },
        NSTR: {
          rules: [31, 32],
          inclusive: false
        },
        NODE: {
          rules: [27, 30, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 6, 7, 8, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
          inclusive: true
        }
      }
    };
    function S() {
      this.yy = {};
    }
    E.lexer = v;
    loggerLevelUtils.setFunctionName(S, "Parser");
    S.prototype = E;
    E.Parser = S;
    return new S();
  }();
  d.parser = d;
  var g = [];
  var p = [];
  var y = 0;
  var f = {};
  var _ = loggerLevelUtils.setFunctionName(() => {
    g = [];
    p = [];
    y = 0;
    f = {};
  }, "clear");
  var m = loggerLevelUtils.setFunctionName(e => {
    if (g.length === 0) {
      return null;
    }
    let t = g[0].level;
    let i = null;
    for (let e = g.length - 1; e >= 0; e--) {
      if (g[e].level === t && !i) {
        i = g[e];
      }
      if (g[e].level < t) {
        throw Error("Items without section detected, found section (\"" + g[e].label + "\")");
      }
    }
    if (e === (i == null ? undefined : i.level)) {
      return null;
    } else {
      return i;
    }
  }, "getSection");
  var b = loggerLevelUtils.setFunctionName(function () {
    return p;
  }, "getSections");
  var k = loggerLevelUtils.setFunctionName(function () {
    let e = [];
    let t = b();
    let i = mermaidConfigUtils_1.getConfigAlias();
    for (let r of t) {
      let t = {
        id: r.id,
        label: mermaidConfigUtils_1.sanitizeText(r.label ?? "", i),
        isGroup: true,
        ticket: r.ticket,
        shape: "kanbanSection",
        level: r.level,
        look: i.look
      };
      e.push(t);
      for (let n of g.filter(e => e.parentId === r.id)) {
        let t = {
          id: n.id,
          parentId: r.id,
          label: mermaidConfigUtils_1.sanitizeText(n.label ?? "", i),
          isGroup: false,
          ticket: n == null ? undefined : n.ticket,
          priority: n == null ? undefined : n.priority,
          assigned: n == null ? undefined : n.assigned,
          icon: n == null ? undefined : n.icon,
          shape: "kanbanItem",
          level: n.level,
          rx: 5,
          ry: 5,
          cssStyles: ["text-align: left"]
        };
        e.push(t);
      }
    }
    return {
      nodes: e,
      edges: [],
      other: {},
      config: mermaidConfigUtils_1.getConfigAlias()
    };
  }, "getData");
  var E = loggerLevelUtils.setFunctionName((e, t, i, n, s) => {
    let u = mermaidConfigUtils_1.getConfigAlias();
    let d = u.mindmap?.padding ?? mermaidConfigUtils_1.defaultConfig.mindmap.padding;
    switch (n) {
      case v.ROUNDED_RECT:
      case v.RECT:
      case v.HEXAGON:
        d *= 2;
    }
    let f = {
      id: mermaidConfigUtils_1.sanitizeText(t, u) || "kbn" + y++,
      level: e,
      label: mermaidConfigUtils_1.sanitizeText(i, u),
      width: u.mindmap?.maxNodeWidth ?? mermaidConfigUtils_1.defaultConfig.mindmap.maxNodeWidth,
      padding: d,
      isGroup: false
    };
    if (s !== undefined) {
      let e;
      e = s.includes("\n") ? s + "\n" : "{\n" + s + "\n}";
      let t = jsYamlCoreImplementation.load(e, {
        schema: jsYamlCoreImplementation.Schema
      });
      if (t.shape && (t.shape !== t.shape.toLowerCase() || t.shape.includes("_"))) {
        throw Error(`No such shape: ${t.shape}. Shape names should be lowercase.`);
      }
      if ((t == null ? undefined : t.shape) && t.shape === "kanbanItem") {
        f.shape = t == null ? undefined : t.shape;
      }
      if (t == null ? undefined : t.label) {
        f.label = t == null ? undefined : t.label;
      }
      if (t == null ? undefined : t.icon) {
        f.icon = t == null ? undefined : t.icon.toString();
      }
      if (t == null ? undefined : t.assigned) {
        f.assigned = t == null ? undefined : t.assigned.toString();
      }
      if (t == null ? undefined : t.ticket) {
        f.ticket = t == null ? undefined : t.ticket.toString();
      }
      if (t == null ? undefined : t.priority) {
        f.priority = t == null ? undefined : t.priority;
      }
    }
    let _ = m(e);
    if (_) {
      f.parentId = _.id || "kbn" + y++;
    } else {
      p.push(f);
    }
    g.push(f);
  }, "addNode");
  var v = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
  };
  var S = loggerLevelUtils.setFunctionName((e, t) => {
    loggerLevelUtils.logger.debug("In get type", e, t);
    switch (e) {
      case "[":
        return v.RECT;
      case "(":
        if (t === ")") {
          return v.ROUNDED_RECT;
        } else {
          return v.CLOUD;
        }
      case "((":
        return v.CIRCLE;
      case ")":
        return v.CLOUD;
      case "))":
        return v.BANG;
      case "{{":
        return v.HEXAGON;
      default:
        return v.DEFAULT;
    }
  }, "getType");
  var N = loggerLevelUtils.setFunctionName((e, t) => {
    f[e] = t;
  }, "setElementForId");
  var L = loggerLevelUtils.setFunctionName(e => {
    if (!e) {
      return;
    }
    let t = mermaidConfigUtils_1.getConfigAlias();
    let i = g[g.length - 1];
    if (e.icon) {
      i.icon = mermaidConfigUtils_1.sanitizeText(e.icon, t);
    }
    if (e.class) {
      i.cssClasses = mermaidConfigUtils_1.sanitizeText(e.class, t);
    }
  }, "decorateNode");
  var x = loggerLevelUtils.setFunctionName(e => {
    switch (e) {
      case v.DEFAULT:
        return "no-border";
      case v.RECT:
        return "rect";
      case v.ROUNDED_RECT:
        return "rounded-rect";
      case v.CIRCLE:
        return "circle";
      case v.CLOUD:
        return "cloud";
      case v.BANG:
        return "bang";
      case v.HEXAGON:
        return "hexgon";
      default:
        return "no-border";
    }
  }, "type2Str");
  var D = loggerLevelUtils.setFunctionName(() => loggerLevelUtils.logger, "getLogger");
  var O = loggerLevelUtils.setFunctionName(e => f[e], "getElementById");
  var C = loggerLevelUtils.setFunctionName(async (e, t, i, s) => {
    loggerLevelUtils.logger.debug("Rendering kanban diagram\n" + e);
    let y = s.db.getData();
    let f = mermaidConfigUtils_1.getConfigAlias();
    f.htmlLabels = false;
    let _ = selectSvgElement.selectSvgElement(t);
    let m = _.append("g");
    m.attr("class", "sections");
    let b = _.append("g");
    b.attr("class", "items");
    let k = y.nodes.filter(e => e.isGroup);
    let E = 0;
    let v = [];
    let S = 25;
    for (let e of k) {
      let t = (f == null ? undefined : f.kanban?.sectionWidth) || 200;
      E += 1;
      e.x = t * E + (E - 1) * 10 / 2;
      e.width = t;
      e.y = 0;
      e.height = t * 3;
      e.rx = 5;
      e.ry = 5;
      e.cssClasses = e.cssClasses + " section-" + E;
      let i = await mermaidNodeShapesRenderer.insertNode(m, e);
      S = Math.max(S, i == null ? undefined : i.labelBBox?.height);
      v.push(i);
    }
    let N = 0;
    for (let e of k) {
      let t = v[N];
      N += 1;
      let i = (f == null ? undefined : f.kanban?.sectionWidth) || 200;
      let n = -(i * 3) / 2 + S;
      let s = n;
      for (let t of y.nodes.filter(t => t.parentId === e.id)) {
        if (t.isGroup) {
          throw Error("Groups within groups are not allowed in Kanban diagrams");
        }
        t.x = e.x;
        t.width = i - 15;
        let n = (await mermaidNodeShapesRenderer.insertCluster(b, t, {
          config: f
        })).node().getBBox();
        t.y = s + n.height / 2;
        await mermaidNodeShapesRenderer.kanbanItem(t);
        s = t.y + n.height / 2 + 5;
      }
      let r = t.cluster.select("rect");
      let l = Math.max(s - n + 30, 50) + (S - 25);
      r.attr("height", l);
    }
    mermaidConfigUtils_1.setupViewbox(undefined, _, f.mindmap?.padding ?? mermaidConfigUtils_1.defaultConfig.kanban.padding, f.mindmap?.useMaxWidth ?? mermaidConfigUtils_1.defaultConfig.kanban.useMaxWidth);
  }, "draw");
  var I = loggerLevelUtils.setFunctionName(e => {
    let t = "";
    for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) {
      e["lineColor" + t] = e["lineColor" + t] || e["cScaleInv" + t];
      if (colorDarknessUtil.isColorDark(e["lineColor" + t])) {
        e["lineColor" + t] = colorLightnessAdjuster.adjustLightness(e["lineColor" + t], 20);
      } else {
        e["lineColor" + t] = colorLightnessHelper.adjustLightness(e["lineColor" + t], 20);
      }
    }
    let i = loggerLevelUtils.setFunctionName((t, i) => e.darkMode ? colorLightnessHelper.adjustLightness(t, i) : colorLightnessAdjuster.adjustLightness(t, i), "adjuster");
    for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) {
      let s = "" + (17 - n * 3);
      t += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} polygon, .section-${n - 1} path  {
      fill: ${i(e["cScale" + n], 10)};
      stroke: ${i(e["cScale" + n], 10)};

    }
    .section-${n - 1} text {
     fill: ${e["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${e["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${s};
    }
    .section-${n - 1} line {
      stroke: ${e["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `;
    }
    return t;
  }, "genSections");
  var A = {
    db: {
      clear: _,
      addNode: E,
      getSections: b,
      getData: k,
      nodeType: v,
      getType: S,
      setElementForId: N,
      decorateNode: L,
      type2Str: x,
      getLogger: D,
      getElementById: O
    },
    renderer: {
      draw: C
    },
    parser: d,
    styles: loggerLevelUtils.setFunctionName(e => `
  .edge {
    stroke-width: 3;
  }
  ${I(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${fontAwesomeIconStylesHelper.getIconStyles()}
`, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return A;
    }
  });
}