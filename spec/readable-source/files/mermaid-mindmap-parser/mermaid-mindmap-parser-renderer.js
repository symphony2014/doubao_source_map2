// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'diagramElementSelector'
// - Resolved require(150827) to 'diagram-element-selector'
// - Renamed variable 'r' to 'mermaidSvgViewportSetup'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Renamed variable 'o' to 'mermaidLayoutRegistryRenderer'
// - Resolved require(484129) to 'mermaid-layout-registry-renderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'a' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'c' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'l' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'h' to 'colorDarknessUtil'
// - Resolved require(99164) to 'color-darkness-util'
// - Renamed variable 'd' to 'colorLightnessAdjuster'
// - Resolved require(695366) to 'color-lightness-adjuster'
// - Renamed variable 'g' to 'colorLightnessHelper'
// - Resolved require(366687) to 'color-lightness-helper'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'oO' to 'sanitizeText' (module 401926)
// - Updated imported property 'qO' to 'getUserConfig' (module 401926)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// - Updated imported property 'q' to 'getDiagramElement' (module 150827)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 484129)
// - Updated imported property 'sY' to 'render' (module 484129)
// - Updated imported property 'j' to 'setupViewPortForSvg' (module 3049)
// - Updated imported property 'Z' to 'isColorDark' (module 99164)
// - Updated imported property 'Z' to 'adjustLightness' (module 695366)
// - Updated imported property 'Z' to 'adjustLightness' (module 366687)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 91326.684af921.js
         * chunkId: 91326
         * moduleId: 861422
         */
module.exports = function (module, exports, require) {
  var n;
  var diagramElementSelector = require("diagram-element-selector") /*id: 150827*/;
  var mermaidSvgViewportSetup = require("mermaid-svg-viewport-setup") /*id: 3049*/;
  var mermaidLayoutRegistryRenderer = require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var colorDarknessUtil = require("color-darkness-util") /*id: 99164*/;
  var colorLightnessAdjuster = require("color-lightness-adjuster") /*id: 695366*/;
  var colorLightnessHelper = require("color-lightness-helper") /*id: 366687*/;
  var u = function () {
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
    var a = [1, 19];
    var l = [6, 7, 8];
    var h = [1, 26];
    var d = [1, 24];
    var g = [1, 25];
    var u = [6, 7, 11];
    var p = [1, 6, 13, 15, 16, 19, 22];
    var y = [1, 33];
    var f = [1, 34];
    var m = [1, 6, 7, 11, 13, 15, 16, 19, 22];
    var _ = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mindMap: 4,
        spaceLines: 5,
        SPACELINE: 6,
        NL: 7,
        MINDMAP: 8,
        document: 9,
        stop: 10,
        EOF: 11,
        statement: 12,
        SPACELIST: 13,
        node: 14,
        ICON: 15,
        CLASS: 16,
        nodeWithId: 17,
        nodeWithoutId: 18,
        NODE_DSTART: 19,
        NODE_DESCR: 20,
        NODE_DEND: 21,
        NODE_ID: 22,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "SPACELINE",
        7: "NL",
        8: "MINDMAP",
        11: "EOF",
        13: "SPACELIST",
        15: "ICON",
        16: "CLASS",
        19: "NODE_DSTART",
        20: "NODE_DESCR",
        21: "NODE_DEND",
        22: "NODE_ID"
      },
      productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
      performAction: loggerLevelUtils.setFunctionName(function (e, t, i, n, s, r, o) {
        var a = r.length - 1;
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
            n.getLogger().info("Node: ", r[a].id);
            n.addNode(r[a - 1].length, r[a].id, r[a].descr, r[a].type);
            break;
          case 16:
            n.getLogger().trace("Icon: ", r[a]);
            n.decorateNode({
              icon: r[a]
            });
            break;
          case 17:
          case 21:
            n.decorateNode({
              class: r[a]
            });
            break;
          case 18:
            n.getLogger().trace("SPACELIST");
            break;
          case 19:
            n.getLogger().trace("Node: ", r[a].id);
            n.addNode(0, r[a].id, r[a].descr, r[a].type);
            break;
          case 20:
            n.decorateNode({
              icon: r[a]
            });
            break;
          case 25:
            n.getLogger().trace("node found ..", r[a - 2]);
            this.$ = {
              id: r[a - 1],
              descr: r[a - 1],
              type: n.getType(r[a - 2], r[a])
            };
            break;
          case 26:
            this.$ = {
              id: r[a],
              descr: r[a],
              type: n.nodeType.DEFAULT
            };
            break;
          case 27:
            n.getLogger().trace("node found ..", r[a - 3]);
            this.$ = {
              id: r[a - 3],
              descr: r[a - 1],
              type: n.getType(r[a - 2], r[a])
            };
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
        15: s,
        16: r,
        17: 17,
        18: 18,
        19: o,
        22: a
      }, e(l, [2, 3]), {
        1: [2, 2]
      }, e(l, [2, 4]), e(l, [2, 5]), {
        1: [2, 6],
        6: i,
        12: 21,
        13: n,
        14: 14,
        15: s,
        16: r,
        17: 17,
        18: 18,
        19: o,
        22: a
      }, {
        6: i,
        9: 22,
        12: 11,
        13: n,
        14: 14,
        15: s,
        16: r,
        17: 17,
        18: 18,
        19: o,
        22: a
      }, {
        6: h,
        7: d,
        10: 23,
        11: g
      }, e(u, [2, 22], {
        17: 17,
        18: 18,
        14: 27,
        15: [1, 28],
        16: [1, 29],
        19: o,
        22: a
      }), e(u, [2, 18]), e(u, [2, 19]), e(u, [2, 20]), e(u, [2, 21]), e(u, [2, 23]), e(u, [2, 24]), e(u, [2, 26], {
        19: [1, 30]
      }), {
        20: [1, 31]
      }, {
        6: h,
        7: d,
        10: 32,
        11: g
      }, {
        1: [2, 7],
        6: i,
        12: 21,
        13: n,
        14: 14,
        15: s,
        16: r,
        17: 17,
        18: 18,
        19: o,
        22: a
      }, e(p, [2, 14], {
        7: y,
        11: f
      }), e(m, [2, 8]), e(m, [2, 9]), e(m, [2, 10]), e(u, [2, 15]), e(u, [2, 16]), e(u, [2, 17]), {
        20: [1, 35]
      }, {
        21: [1, 36]
      }, e(p, [2, 13], {
        7: y,
        11: f
      }), e(m, [2, 11]), e(m, [2, 12]), {
        21: [1, 37]
      }, e(u, [2, 25]), e(u, [2, 27])],
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
        var a = "";
        var l = 0;
        var h = 0;
        var d = 0;
        var g = r.slice.call(arguments, 1);
        var u = Object.create(this.lexer);
        var p = {
          yy: {}
        };
        for (var y in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, y)) {
            p.yy[y] = this.yy[y];
          }
        }
        u.setInput(e, p.yy);
        p.yy.lexer = u;
        p.yy.parser = this;
        if (u.yylloc === undefined) {
          u.yylloc = {};
        }
        var f = u.yylloc;
        r.push(f);
        var m = u.options && u.options.ranges;
        function _() {
          var e;
          if (typeof (e = n.pop() || u.lex() || 1) != "number") {
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
        loggerLevelUtils.setFunctionName(_, "lex");
        var E;
        var b;
        var S;
        var N;
        var v;
        var L;
        var D;
        var k;
        var x;
        var O = {};
        while (true) {
          S = i[i.length - 1];
          if (this.defaultActions[S]) {
            N = this.defaultActions[S];
          } else {
            if (E == null) {
              E = _();
            }
            N = o[S] && o[S][E];
          }
          if (N === undefined || !N.length || !N[0]) {
            var T = "";
            x = [];
            for (L in o[S]) {
              if (this.terminals_[L] && L > 2) {
                x.push("'" + this.terminals_[L] + "'");
              }
            }
            T = u.showPosition ? "Parse error on line " + (l + 1) + ":\n" + u.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + (this.terminals_[E] || E) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (E == 1 ? "end of input" : "'" + (this.terminals_[E] || E) + "'");
            this.parseError(T, {
              text: u.match,
              token: this.terminals_[E] || E,
              line: u.yylineno,
              loc: f,
              expected: x
            });
          }
          if (N[0] instanceof Array && N.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + S + ", token: " + E);
          }
          switch (N[0]) {
            case 1:
              i.push(E);
              s.push(u.yytext);
              r.push(u.yylloc);
              i.push(N[1]);
              E = null;
              if (b) {
                E = b;
                b = null;
              } else {
                h = u.yyleng;
                a = u.yytext;
                l = u.yylineno;
                f = u.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              D = this.productions_[N[1]][1];
              O.$ = s[s.length - D];
              O._$ = {
                first_line: r[r.length - (D || 1)].first_line,
                last_line: r[r.length - 1].last_line,
                first_column: r[r.length - (D || 1)].first_column,
                last_column: r[r.length - 1].last_column
              };
              if (m) {
                O._$.range = [r[r.length - (D || 1)].range[0], r[r.length - 1].range[1]];
              }
              if ((v = this.performAction.apply(O, [a, h, l, p.yy, N[1], s, r].concat(g))) !== undefined) {
                return v;
              }
              if (D) {
                i = i.slice(0, D * -1 * 2);
                s = s.slice(0, D * -1);
                r = r.slice(0, D * -1);
              }
              i.push(this.productions_[N[1]][0]);
              s.push(O.$);
              r.push(O._$);
              k = o[i[i.length - 2]][i[i.length - 1]];
              i.push(k);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var E = {
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
            e.getLogger().trace("Found comment", t.yytext);
            return 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            this.popState();
            return 16;
          case 4:
          case 23:
          case 26:
            this.popState();
            break;
          case 5:
            e.getLogger().trace("Begin icon");
            this.begin("ICON");
            break;
          case 6:
            e.getLogger().trace("SPACELINE");
            return 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            e.getLogger().trace("end icon");
            this.popState();
            break;
          case 10:
            e.getLogger().trace("Exploding node");
            this.begin("NODE");
            return 19;
          case 11:
            e.getLogger().trace("Cloud");
            this.begin("NODE");
            return 19;
          case 12:
            e.getLogger().trace("Explosion Bang");
            this.begin("NODE");
            return 19;
          case 13:
            e.getLogger().trace("Cloud Bang");
            this.begin("NODE");
            return 19;
          case 14:
          case 15:
          case 16:
          case 17:
            this.begin("NODE");
            return 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 24:
            e.getLogger().trace("Starting NSTR");
            this.begin("NSTR");
            break;
          case 25:
            e.getLogger().trace("description:", t.yytext);
            return "NODE_DESCR";
          case 27:
            this.popState();
            e.getLogger().trace("node end ))");
            return "NODE_DEND";
          case 28:
            this.popState();
            e.getLogger().trace("node end )");
            return "NODE_DEND";
          case 29:
            this.popState();
            e.getLogger().trace("node end ...", t.yytext);
            return "NODE_DEND";
          case 30:
          case 33:
          case 34:
            this.popState();
            e.getLogger().trace("node end ((");
            return "NODE_DEND";
          case 31:
          case 32:
            this.popState();
            e.getLogger().trace("node end (-");
            return "NODE_DEND";
          case 35:
          case 36:
            e.getLogger().trace("Long description:", t.yytext);
            return 20;
        }
      }, "anonymous"),
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: {
        CLASS: {
          rules: [3, 4],
          inclusive: false
        },
        ICON: {
          rules: [8, 9],
          inclusive: false
        },
        NSTR2: {
          rules: [22, 23],
          inclusive: false
        },
        NSTR: {
          rules: [25, 26],
          inclusive: false
        },
        NODE: {
          rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          inclusive: true
        }
      }
    };
    function b() {
      this.yy = {};
    }
    _.lexer = E;
    loggerLevelUtils.setFunctionName(b, "Parser");
    b.prototype = _;
    _.Parser = b;
    return new b();
  }();
  u.parser = u;
  var p = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
  };
  n = class {
    clear() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.baseLevel = undefined;
    }
    getParent(e) {
      for (let t = this.nodes.length - 1; t >= 0; t--) {
        if (this.nodes[t].level < e) {
          return this.nodes[t];
        }
      }
      return null;
    }
    getMindmap() {
      if (this.nodes.length > 0) {
        return this.nodes[0];
      } else {
        return null;
      }
    }
    addNode(e, t, i, n) {
      loggerLevelUtils.logger.info("addNode", e, t, i, n);
      let h = false;
      if (this.nodes.length === 0) {
        this.baseLevel = e;
        e = 0;
        h = true;
      } else if (this.baseLevel !== undefined) {
        e -= this.baseLevel;
        h = false;
      }
      let d = mermaidConfigUtils_1.getConfigAlias();
      let g = d.mindmap?.padding ?? mermaidConfigUtils_1.defaultConfig.mindmap.padding;
      switch (n) {
        case this.nodeType.ROUNDED_RECT:
        case this.nodeType.RECT:
        case this.nodeType.HEXAGON:
          g *= 2;
      }
      let u = {
        id: this.count++,
        nodeId: mermaidConfigUtils_1.sanitizeText(t, d),
        level: e,
        descr: mermaidConfigUtils_1.sanitizeText(i, d),
        type: n,
        children: [],
        width: d.mindmap?.maxNodeWidth ?? mermaidConfigUtils_1.defaultConfig.mindmap.maxNodeWidth,
        padding: g,
        isRoot: h
      };
      let p = this.getParent(e);
      if (p) {
        p.children.push(u);
        this.nodes.push(u);
      } else if (h) {
        this.nodes.push(u);
      } else {
        throw Error(`There can be only one root. No parent could be found for ("${u.descr}")`);
      }
    }
    getType(e, t) {
      loggerLevelUtils.logger.debug("In get type", e, t);
      switch (e) {
        case "[":
          return this.nodeType.RECT;
        case "(":
          if (t === ")") {
            return this.nodeType.ROUNDED_RECT;
          } else {
            return this.nodeType.CLOUD;
          }
        case "((":
          return this.nodeType.CIRCLE;
        case ")":
          return this.nodeType.CLOUD;
        case "))":
          return this.nodeType.BANG;
        case "{{":
          return this.nodeType.HEXAGON;
        default:
          return this.nodeType.DEFAULT;
      }
    }
    setElementForId(e, t) {
      this.elements[e] = t;
    }
    getElementById(e) {
      return this.elements[e];
    }
    decorateNode(e) {
      if (!e) {
        return;
      }
      let t = mermaidConfigUtils_1.getConfigAlias();
      let i = this.nodes[this.nodes.length - 1];
      if (e.icon) {
        i.icon = mermaidConfigUtils_1.sanitizeText(e.icon, t);
      }
      if (e.class) {
        i.class = mermaidConfigUtils_1.sanitizeText(e.class, t);
      }
    }
    type2Str(e) {
      switch (e) {
        case this.nodeType.DEFAULT:
          return "no-border";
        case this.nodeType.RECT:
          return "rect";
        case this.nodeType.ROUNDED_RECT:
          return "rounded-rect";
        case this.nodeType.CIRCLE:
          return "circle";
        case this.nodeType.CLOUD:
          return "cloud";
        case this.nodeType.BANG:
          return "bang";
        case this.nodeType.HEXAGON:
          return "hexgon";
        default:
          return "no-border";
      }
    }
    assignSections(e, t) {
      if (e.level === 0) {
        e.section = undefined;
      } else {
        e.section = t;
      }
      if (e.children) {
        for (let [i, n] of e.children.entries()) {
          let s = e.level === 0 ? i : t;
          this.assignSections(n, s);
        }
      }
    }
    flattenNodes(e, t) {
      let n = ["mindmap-node"];
      if (e.isRoot === true) {
        n.push("section-root", "section--1");
      } else if (e.section !== undefined) {
        n.push(`section-${e.section}`);
      }
      if (e.class) {
        n.push(e.class);
      }
      let s = n.join(" ");
      let r = loggerLevelUtils.setFunctionName(e => {
        switch (e) {
          case p.CIRCLE:
            return "mindmapCircle";
          case p.RECT:
            return "rect";
          case p.ROUNDED_RECT:
            return "rounded";
          case p.CLOUD:
            return "cloud";
          case p.BANG:
            return "bang";
          case p.HEXAGON:
            return "hexagon";
          case p.DEFAULT:
            return "defaultMindmapNode";
          case p.NO_BORDER:
          default:
            return "rect";
        }
      }, "getShapeFromType");
      let o = {
        id: e.id.toString(),
        domId: "node_" + e.id.toString(),
        label: e.descr,
        isGroup: false,
        shape: r(e.type),
        width: e.width,
        height: e.height ?? 0,
        padding: e.padding,
        cssClasses: s,
        cssStyles: [],
        look: "default",
        icon: e.icon,
        x: e.x,
        y: e.y,
        level: e.level,
        nodeId: e.nodeId,
        type: e.type,
        section: e.section
      };
      t.push(o);
      if (e.children) {
        for (let i of e.children) {
          this.flattenNodes(i, t);
        }
      }
    }
    generateEdges(e, t) {
      if (e.children) {
        for (let i of e.children) {
          let n = "edge";
          if (i.section !== undefined) {
            n += ` section-edge-${i.section}`;
          }
          let s = e.level + 1;
          n += ` edge-depth-${s}`;
          let r = {
            id: `edge_${e.id}_${i.id}`,
            start: e.id.toString(),
            end: i.id.toString(),
            type: "normal",
            curve: "basis",
            thickness: "normal",
            look: "default",
            classes: n,
            depth: e.level,
            section: i.section
          };
          t.push(r);
          this.generateEdges(i, t);
        }
      }
    }
    getData() {
      let e = this.getMindmap();
      let t = mermaidConfigUtils_1.getConfigAlias();
      if (mermaidConfigUtils_1.getUserConfig().layout === undefined) {
        t.layout = "cose-bilkent";
      }
      if (!e) {
        return {
          nodes: [],
          edges: [],
          config: t
        };
      }
      loggerLevelUtils.logger.debug("getData: mindmapRoot", e, t);
      this.assignSections(e);
      let i = [];
      let n = [];
      this.flattenNodes(e, i);
      this.generateEdges(e, n);
      loggerLevelUtils.logger.debug(`getData: processed ${i.length} nodes and ${n.length} edges`);
      let s = new Map();
      for (let e of i) {
        s.set(e.id, {
          shape: e.shape,
          width: e.width,
          height: e.height,
          padding: e.padding
        });
      }
      return {
        nodes: i,
        edges: n,
        config: t,
        rootNode: e,
        markers: ["point"],
        direction: "TB",
        nodeSpacing: 50,
        rankSpacing: 50,
        shapes: Object.fromEntries(s),
        type: "mindmap",
        diagramId: "mindmap-" + uuidGeneratorUtil.generateUuid()
      };
    }
    getLogger() {
      return loggerLevelUtils.logger;
    }
    constructor() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.getLogger = this.getLogger.bind(this);
      this.nodeType = p;
      this.clear();
      this.getType = this.getType.bind(this);
      this.getElementById = this.getElementById.bind(this);
      this.getParent = this.getParent.bind(this);
      this.getMindmap = this.getMindmap.bind(this);
      this.addNode = this.addNode.bind(this);
      this.decorateNode = this.decorateNode.bind(this);
    }
  };
  loggerLevelUtils.setFunctionName(n, "MindmapDB");
  var y = n;
  var f = loggerLevelUtils.setFunctionName(async (e, t, i, n) => {
    loggerLevelUtils.logger.debug("Rendering mindmap diagram\n" + e);
    let u = n.db;
    let p = u.getData();
    let y = diagramElementSelector.getDiagramElement(t, p.config.securityLevel);
    p.type = n.type;
    p.layoutAlgorithm = mermaidLayoutRegistryRenderer.getRegisteredLayoutAlgorithm(p.config.layout, {
      fallback: "cose-bilkent"
    });
    p.diagramId = t;
    if (u.getMindmap()) {
      p.nodes.forEach(e => {
        if (e.shape === "rounded") {
          e.radius = 15;
          e.taper = 15;
          e.stroke = "none";
          e.width = 0;
          e.padding = 15;
        } else if (e.shape === "circle") {
          e.padding = 10;
        } else if (e.shape === "rect") {
          e.width = 0;
          e.padding = 10;
        }
      });
      await mermaidLayoutRegistryRenderer.render(p, y);
      mermaidSvgViewportSetup.setupViewPortForSvg(y, p.config.mindmap?.padding ?? mermaidConfigUtils_1.defaultConfig.mindmap.padding, "mindmapDiagram", p.config.mindmap?.useMaxWidth ?? mermaidConfigUtils_1.defaultConfig.mindmap.useMaxWidth);
    }
  }, "draw");
  var m = loggerLevelUtils.setFunctionName(e => {
    let t = "";
    for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) {
      e["lineColor" + t] = e["lineColor" + t] || e["cScaleInv" + t];
      if (colorDarknessUtil.isColorDark(e["lineColor" + t])) {
        e["lineColor" + t] = colorLightnessAdjuster.adjustLightness(e["lineColor" + t], 20);
      } else {
        e["lineColor" + t] = colorLightnessHelper.adjustLightness(e["lineColor" + t], 20);
      }
    }
    for (let i = 0; i < e.THEME_COLOR_LIMIT; i++) {
      let n = "" + (17 - i * 3);
      t += `
    .section-${i - 1} rect, .section-${i - 1} path, .section-${i - 1} circle, .section-${i - 1} polygon, .section-${i - 1} path  {
      fill: ${e["cScale" + i]};
    }
    .section-${i - 1} text {
     fill: ${e["cScaleLabel" + i]};
    }
    .node-icon-${i - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + i]};
    }
    .section-edge-${i - 1}{
      stroke: ${e["cScale" + i]};
    }
    .edge-depth-${i - 1}{
      stroke-width: ${n};
    }
    .section-${i - 1} line {
      stroke: ${e["cScaleInv" + i]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
    }
    return t;
  }, "genSections");
  var _ = {
    get db() {
      return new y();
    },
    renderer: {
      draw: f
    },
    parser: u,
    styles: loggerLevelUtils.setFunctionName(e => `
  .edge {
    stroke-width: 3;
  }
  ${m(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .section-root span {
    color: ${e.gitBranchLabel0};
  }
  .section-2 span {
    color: ${e.gitBranchLabel0};
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
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return _;
    }
  });
}