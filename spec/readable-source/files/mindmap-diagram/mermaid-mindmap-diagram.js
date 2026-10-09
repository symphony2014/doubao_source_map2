// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'mermaidTextIconUtils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Renamed variable 'o' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'r' to 'mermaidSvgElementSelector'
// - Resolved require(871430) to 'mermaid-svg-element-selector'
// - Renamed variable 'a' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'l' to 'cytoscapeCoreModule'
// - Resolved require(305745) to 'cytoscape-core-module'
// - Renamed variable 'c' to 'coseBilkentLayout'
// - Resolved require(168116) to 'cose-bilkent-layout'
// - Renamed variable 'h' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'u' to 'colorDarknessUtil'
// - Resolved require(99164) to 'color-darkness-util'
// - Renamed variable 'g' to 'colorLightnessAdjuster'
// - Resolved require(695366) to 'color-lightness-adjuster'
// - Renamed variable 'p' to 'colorLightnessHelper'
// - Resolved require(366687) to 'color-lightness-helper'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'oO' to 'sanitizeText' (module 101498)
// - Updated imported property 'j7' to 'setupViewbox' (module 101498)
// - Updated imported property 'rw' to 'replaceIconSubstring' (module 5699)
// - Updated imported property 'VG' to 'parseFontSize' (module 997032)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Z' to 'Cytoscape' (module 305745)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// - Updated imported property 'Z' to 'isColorDark' (module 99164)
// - Updated imported property 'Z' to 'adjustLightness' (module 695366)
// - Updated imported property 'Z' to 'adjustLightness' (module 366687)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51836.77840dba.js
         * chunkId: 51836
         * moduleId: 870448
         */
module.exports = function (module, exports, require) {
  var i;
  var mermaidTextIconUtils = require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var cytoscapeCoreModule = require("cytoscape-core-module") /*id: 305745*/;
  var coseBilkentLayout = require("cose-bilkent-layout") /*id: 168116*/;
  var d = coseBilkentLayout;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var colorDarknessUtil = require("color-darkness-util") /*id: 99164*/;
  var colorLightnessAdjuster = require("color-lightness-adjuster") /*id: 695366*/;
  var colorLightnessHelper = require("color-lightness-helper") /*id: 366687*/;
  var y = function () {
    var t = mermaidConfigUtils.setName(function (t, e, n, i) {
      n = n || {};
      i = t.length;
      for (; i--; n[t[i]] = e);
      return n;
    }, "o");
    var e = [1, 4];
    var n = [1, 13];
    var i = [1, 12];
    var s = [1, 15];
    var o = [1, 16];
    var r = [1, 20];
    var l = [1, 19];
    var c = [6, 7, 8];
    var d = [1, 26];
    var h = [1, 24];
    var u = [1, 25];
    var g = [6, 7, 11];
    var p = [1, 6, 13, 15, 16, 19, 22];
    var y = [1, 33];
    var f = [1, 34];
    var m = [1, 6, 7, 11, 13, 15, 16, 19, 22];
    var E = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
      performAction: mermaidConfigUtils.setName(function (t, e, n, i, s, o, r) {
        var a = o.length - 1;
        switch (s) {
          case 6:
          case 7:
            return i;
          case 8:
            i.getLogger().trace("Stop NL ");
            break;
          case 9:
            i.getLogger().trace("Stop EOF ");
            break;
          case 11:
            i.getLogger().trace("Stop NL2 ");
            break;
          case 12:
            i.getLogger().trace("Stop EOF2 ");
            break;
          case 15:
            i.getLogger().info("Node: ", o[a].id);
            i.addNode(o[a - 1].length, o[a].id, o[a].descr, o[a].type);
            break;
          case 16:
            i.getLogger().trace("Icon: ", o[a]);
            i.decorateNode({
              icon: o[a]
            });
            break;
          case 17:
          case 21:
            i.decorateNode({
              class: o[a]
            });
            break;
          case 18:
            i.getLogger().trace("SPACELIST");
            break;
          case 19:
            i.getLogger().trace("Node: ", o[a].id);
            i.addNode(0, o[a].id, o[a].descr, o[a].type);
            break;
          case 20:
            i.decorateNode({
              icon: o[a]
            });
            break;
          case 25:
            i.getLogger().trace("node found ..", o[a - 2]);
            this.$ = {
              id: o[a - 1],
              descr: o[a - 1],
              type: i.getType(o[a - 2], o[a])
            };
            break;
          case 26:
            this.$ = {
              id: o[a],
              descr: o[a],
              type: i.nodeType.DEFAULT
            };
            break;
          case 27:
            i.getLogger().trace("node found ..", o[a - 3]);
            this.$ = {
              id: o[a - 3],
              descr: o[a - 1],
              type: i.getType(o[a - 2], o[a])
            };
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: [1, 5],
        8: e
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        4: 6,
        6: [1, 7],
        7: [1, 8],
        8: e
      }, {
        6: n,
        7: [1, 10],
        9: 9,
        12: 11,
        13: i,
        14: 14,
        15: s,
        16: o,
        17: 17,
        18: 18,
        19: r,
        22: l
      }, t(c, [2, 3]), {
        1: [2, 2]
      }, t(c, [2, 4]), t(c, [2, 5]), {
        1: [2, 6],
        6: n,
        12: 21,
        13: i,
        14: 14,
        15: s,
        16: o,
        17: 17,
        18: 18,
        19: r,
        22: l
      }, {
        6: n,
        9: 22,
        12: 11,
        13: i,
        14: 14,
        15: s,
        16: o,
        17: 17,
        18: 18,
        19: r,
        22: l
      }, {
        6: d,
        7: h,
        10: 23,
        11: u
      }, t(g, [2, 22], {
        17: 17,
        18: 18,
        14: 27,
        15: [1, 28],
        16: [1, 29],
        19: r,
        22: l
      }), t(g, [2, 18]), t(g, [2, 19]), t(g, [2, 20]), t(g, [2, 21]), t(g, [2, 23]), t(g, [2, 24]), t(g, [2, 26], {
        19: [1, 30]
      }), {
        20: [1, 31]
      }, {
        6: d,
        7: h,
        10: 32,
        11: u
      }, {
        1: [2, 7],
        6: n,
        12: 21,
        13: i,
        14: 14,
        15: s,
        16: o,
        17: 17,
        18: 18,
        19: r,
        22: l
      }, t(p, [2, 14], {
        7: y,
        11: f
      }), t(m, [2, 8]), t(m, [2, 9]), t(m, [2, 10]), t(g, [2, 15]), t(g, [2, 16]), t(g, [2, 17]), {
        20: [1, 35]
      }, {
        21: [1, 36]
      }, t(p, [2, 13], {
        7: y,
        11: f
      }), t(m, [2, 11]), t(m, [2, 12]), {
        21: [1, 37]
      }, t(g, [2, 25]), t(g, [2, 27])],
      defaultActions: {
        2: [2, 1],
        6: [2, 2]
      },
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var n = Error(t);
          n.hash = e;
          throw n;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var n = [0];
        var i = [];
        var s = [null];
        var o = [];
        var r = this.table;
        var l = "";
        var c = 0;
        var d = 0;
        var h = 0;
        var u = o.slice.call(arguments, 1);
        var g = Object.create(this.lexer);
        var p = {
          yy: {}
        };
        for (var y in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, y)) {
            p.yy[y] = this.yy[y];
          }
        }
        g.setInput(t, p.yy);
        p.yy.lexer = g;
        p.yy.parser = this;
        if (g.yylloc === undefined) {
          g.yylloc = {};
        }
        var f = g.yylloc;
        o.push(f);
        var m = g.options && g.options.ranges;
        function E() {
          var t;
          if (typeof (t = i.pop() || g.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (i = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof p.yy.parseError == "function") {
          this.parseError = p.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        mermaidConfigUtils.setName(function (t) {
          n.length = n.length - t * 2;
          s.length = s.length - t;
          o.length = o.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(E, "lex");
        var _;
        var L;
        var N;
        var T;
        var b;
        var $;
        var D;
        var I;
        var S;
        var A = {};
        while (true) {
          N = n[n.length - 1];
          if (this.defaultActions[N]) {
            T = this.defaultActions[N];
          } else {
            if (_ == null) {
              _ = E();
            }
            T = r[N] && r[N][_];
          }
          if (T === undefined || !T.length || !T[0]) {
            var v = "";
            S = [];
            for ($ in r[N]) {
              if (this.terminals_[$] && $ > 2) {
                S.push("'" + this.terminals_[$] + "'");
              }
            }
            v = g.showPosition ? "Parse error on line " + (c + 1) + ":\n" + g.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
            this.parseError(v, {
              text: g.match,
              token: this.terminals_[_] || _,
              line: g.yylineno,
              loc: f,
              expected: S
            });
          }
          if (T[0] instanceof Array && T.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + N + ", token: " + _);
          }
          switch (T[0]) {
            case 1:
              n.push(_);
              s.push(g.yytext);
              o.push(g.yylloc);
              n.push(T[1]);
              _ = null;
              if (L) {
                _ = L;
                L = null;
              } else {
                d = g.yyleng;
                l = g.yytext;
                c = g.yylineno;
                f = g.yylloc;
                if (h > 0) {
                  h--;
                }
              }
              break;
            case 2:
              D = this.productions_[T[1]][1];
              A.$ = s[s.length - D];
              A._$ = {
                first_line: o[o.length - (D || 1)].first_line,
                last_line: o[o.length - 1].last_line,
                first_column: o[o.length - (D || 1)].first_column,
                last_column: o[o.length - 1].last_column
              };
              if (m) {
                A._$.range = [o[o.length - (D || 1)].range[0], o[o.length - 1].range[1]];
              }
              if ((b = this.performAction.apply(A, [l, d, c, p.yy, T[1], s, o].concat(u))) !== undefined) {
                return b;
              }
              if (D) {
                n = n.slice(0, D * -1 * 2);
                s = s.slice(0, D * -1);
                o = o.slice(0, D * -1);
              }
              n.push(this.productions_[T[1]][0]);
              s.push(A.$);
              o.push(A._$);
              I = r[n[n.length - 2]][n[n.length - 1]];
              n.push(I);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var _ = {
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
        var n = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (n.length - 1) {
          this.yylineno -= n.length - 1;
        }
        var s = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [s[0], s[0] + this.yyleng - e];
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
        var n;
        var i;
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
        n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (n) {
          return n;
        }
        if (this._backtrack) {
          for (var o in s) {
            this[o] = s[o];
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
        var n;
        var i;
        var s = this._currentRules();
        var o = 0;
        for (; o < s.length; o++) {
          if ((n = this._input.match(this.rules[s[o]])) && (!e || n[0].length > e[0].length)) {
            e = n;
            i = o;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(n, s[o])) !== false) {
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
          return (t = this.test_match(e, s[i])) !== false && t;
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
      performAction: mermaidConfigUtils.setName(function (t, e, n, i) {
        switch (n) {
          case 0:
            t.getLogger().trace("Found comment", e.yytext);
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
            t.getLogger().trace("Begin icon");
            this.begin("ICON");
            break;
          case 6:
            t.getLogger().trace("SPACELINE");
            return 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            t.getLogger().trace("end icon");
            this.popState();
            break;
          case 10:
            t.getLogger().trace("Exploding node");
            this.begin("NODE");
            return 19;
          case 11:
            t.getLogger().trace("Cloud");
            this.begin("NODE");
            return 19;
          case 12:
            t.getLogger().trace("Explosion Bang");
            this.begin("NODE");
            return 19;
          case 13:
            t.getLogger().trace("Cloud Bang");
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
            t.getLogger().trace("Starting NSTR");
            this.begin("NSTR");
            break;
          case 25:
            t.getLogger().trace("description:", e.yytext);
            return "NODE_DESCR";
          case 27:
            this.popState();
            t.getLogger().trace("node end ))");
            return "NODE_DEND";
          case 28:
            this.popState();
            t.getLogger().trace("node end )");
            return "NODE_DEND";
          case 29:
            this.popState();
            t.getLogger().trace("node end ...", e.yytext);
            return "NODE_DEND";
          case 30:
          case 33:
          case 34:
            this.popState();
            t.getLogger().trace("node end ((");
            return "NODE_DEND";
          case 31:
          case 32:
            this.popState();
            t.getLogger().trace("node end (-");
            return "NODE_DEND";
          case 35:
          case 36:
            t.getLogger().trace("Long description:", e.yytext);
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
    function L() {
      this.yy = {};
    }
    E.lexer = _;
    mermaidConfigUtils.setName(L, "Parser");
    L.prototype = E;
    E.Parser = L;
    return new L();
  }();
  y.parser = y;
  var f = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6
  };
  i = class {
    clear() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
    }
    getParent(t) {
      for (let e = this.nodes.length - 1; e >= 0; e--) {
        if (this.nodes[e].level < t) {
          return this.nodes[e];
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
    addNode(t, e, n, i) {
      mermaidConfigUtils.logger.info("addNode", t, e, n, i);
      let c = mermaidConfigUtils.getConfigAlias();
      let d = c.mindmap?.padding ?? mermaidConfigUtils.configDefaults.mindmap.padding;
      switch (i) {
        case this.nodeType.ROUNDED_RECT:
        case this.nodeType.RECT:
        case this.nodeType.HEXAGON:
          d *= 2;
      }
      let h = {
        id: this.count++,
        nodeId: mermaidConfigUtils.sanitizeText(e, c),
        level: t,
        descr: mermaidConfigUtils.sanitizeText(n, c),
        type: i,
        children: [],
        width: c.mindmap?.maxNodeWidth ?? mermaidConfigUtils.configDefaults.mindmap.maxNodeWidth,
        padding: d
      };
      let u = this.getParent(t);
      if (u) {
        u.children.push(h);
        this.nodes.push(h);
      } else if (this.nodes.length === 0) {
        this.nodes.push(h);
      } else {
        throw Error(`There can be only one root. No parent could be found for ("${h.descr}")`);
      }
    }
    getType(t, e) {
      mermaidConfigUtils.logger.debug("In get type", t, e);
      switch (t) {
        case "[":
          return this.nodeType.RECT;
        case "(":
          if (e === ")") {
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
    setElementForId(t, e) {
      this.elements[t] = e;
    }
    getElementById(t) {
      return this.elements[t];
    }
    decorateNode(t) {
      if (!t) {
        return;
      }
      let e = mermaidConfigUtils.getConfigAlias();
      let n = this.nodes[this.nodes.length - 1];
      if (t.icon) {
        n.icon = mermaidConfigUtils.sanitizeText(t.icon, e);
      }
      if (t.class) {
        n.class = mermaidConfigUtils.sanitizeText(t.class, e);
      }
    }
    type2Str(t) {
      switch (t) {
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
    getLogger() {
      return mermaidConfigUtils.logger;
    }
    constructor() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.getLogger = this.getLogger.bind(this);
      this.nodeType = f;
      this.clear();
      this.getType = this.getType.bind(this);
      this.getMindmap = this.getMindmap.bind(this);
      this.getElementById = this.getElementById.bind(this);
      this.getParent = this.getParent.bind(this);
      this.getMindmap = this.getMindmap.bind(this);
      this.addNode = this.addNode.bind(this);
      this.decorateNode = this.decorateNode.bind(this);
    }
  };
  mermaidConfigUtils.setName(i, "MindmapDB");
  var m = i;
  var E = mermaidConfigUtils.setName(function (t, e, n, i) {
    e.append("path").attr("id", "node-" + n.id).attr("class", "node-bkg node-" + t.type2Str(n.type)).attr("d", `M0 ${n.height - 5} v${-n.height + 10} q0,-5 5,-5 h${n.width - 10} q5,0 5,5 v${n.height - 5} H0 Z`);
    e.append("line").attr("class", "node-line-" + i).attr("x1", 0).attr("y1", n.height).attr("x2", n.width).attr("y2", n.height);
  }, "defaultBkg");
  var _ = mermaidConfigUtils.setName(function (t, e, n) {
    e.append("rect").attr("id", "node-" + n.id).attr("class", "node-bkg node-" + t.type2Str(n.type)).attr("height", n.height).attr("width", n.width);
  }, "rectBkg");
  var L = mermaidConfigUtils.setName(function (t, e, n) {
    let i = n.width;
    let s = n.height;
    let o = i * 0.15;
    let r = i * 0.25;
    let a = i * 0.35;
    let l = i * 0.2;
    e.append("path").attr("id", "node-" + n.id).attr("class", "node-bkg node-" + t.type2Str(n.type)).attr("d", `M0 0 a${o},${o} 0 0,1 ${i * 0.25},${i * -1 * 0.1}
      a${a},${a} 1 0,1 ${i * 0.4},${i * -1 * 0.1}
      a${r},${r} 1 0,1 ${i * 0.35},${+i * 0.2}

      a${o},${o} 1 0,1 ${i * 0.15},${+s * 0.35}
      a${l},${l} 1 0,1 ${i * -1 * 0.15},${+s * 0.65}

      a${r},${o} 1 0,1 ${i * -1 * 0.25},${i * 0.15}
      a${a},${a} 1 0,1 ${i * -1 * 0.5},0
      a${o},${o} 1 0,1 ${i * -1 * 0.25},${i * -1 * 0.15}

      a${o},${o} 1 0,1 ${i * -1 * 0.1},${s * -1 * 0.35}
      a${l},${l} 1 0,1 ${i * 0.1},${s * -1 * 0.65}

    H0 V0 Z`);
  }, "cloudBkg");
  var N = mermaidConfigUtils.setName(function (t, e, n) {
    let i = n.width;
    let s = n.height;
    let o = i * 0.15;
    e.append("path").attr("id", "node-" + n.id).attr("class", "node-bkg node-" + t.type2Str(n.type)).attr("d", `M0 0 a${o},${o} 1 0,0 ${i * 0.25},${s * -1 * 0.1}
      a${o},${o} 1 0,0 ${i * 0.25},0
      a${o},${o} 1 0,0 ${i * 0.25},0
      a${o},${o} 1 0,0 ${i * 0.25},${+s * 0.1}

      a${o},${o} 1 0,0 ${i * 0.15},${+s * 0.33}
      a${o * 0.8},${o * 0.8} 1 0,0 0,${+s * 0.34}
      a${o},${o} 1 0,0 ${i * -1 * 0.15},${+s * 0.33}

      a${o},${o} 1 0,0 ${i * -1 * 0.25},${s * 0.15}
      a${o},${o} 1 0,0 ${i * -1 * 0.25},0
      a${o},${o} 1 0,0 ${i * -1 * 0.25},0
      a${o},${o} 1 0,0 ${i * -1 * 0.25},${s * -1 * 0.15}

      a${o},${o} 1 0,0 ${i * -1 * 0.1},${s * -1 * 0.33}
      a${o * 0.8},${o * 0.8} 1 0,0 0,${s * -1 * 0.34}
      a${o},${o} 1 0,0 ${i * 0.1},${s * -1 * 0.33}

    H0 V0 Z`);
  }, "bangBkg");
  var T = mermaidConfigUtils.setName(function (t, e, n) {
    e.append("circle").attr("id", "node-" + n.id).attr("class", "node-bkg node-" + t.type2Str(n.type)).attr("r", n.width / 2);
  }, "circleBkg");
  function b(t, e, n, i, s) {
    return t.insert("polygon", ":first-child").attr("points", i.map(function (t) {
      return t.x + "," + t.y;
    }).join(" ")).attr("transform", "translate(" + (s.width - e) / 2 + ", " + n + ")");
  }
  mermaidConfigUtils.setName(b, "insertPolygonShape");
  var $ = mermaidConfigUtils.setName(function (t, e, n) {
    let i = n.height;
    let s = i / 4;
    let o = n.width - n.padding + s * 2;
    let r = [{
      x: s,
      y: 0
    }, {
      x: o - s,
      y: 0
    }, {
      x: o,
      y: -i / 2
    }, {
      x: o - s,
      y: -i
    }, {
      x: s,
      y: -i
    }, {
      x: 0,
      y: -i / 2
    }];
    b(e, o, i, r, n);
  }, "hexagonBkg");
  var D = mermaidConfigUtils.setName(function (t, e, n) {
    e.append("rect").attr("id", "node-" + n.id).attr("class", "node-bkg node-" + t.type2Str(n.type)).attr("height", n.height).attr("rx", n.padding).attr("ry", n.padding).attr("width", n.width);
  }, "roundedRectBkg");
  var I = mermaidConfigUtils.setName(async function (t, e, n, i, r) {
    let a = r.htmlLabels;
    let l = i % 11;
    let c = e.append("g");
    n.section = l;
    let d = "section-" + l;
    if (l < 0) {
      d += " section-root";
    }
    c.attr("class", (n.class ? n.class + " " : "") + "mindmap-node " + d);
    let h = c.append("g");
    let u = c.append("g");
    let g = n.descr.replace(/(<br\/*>)/g, "\n");
    await mermaidTextIconUtils.replaceIconSubstring(u, g, {
      useHtmlLabels: a,
      width: n.width,
      classes: "mindmap-node-label"
    }, r);
    if (!a) {
      u.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
    }
    let p = u.node().getBBox();
    let [y] = mermaidTextLayoutUtils.parseFontSize(r.fontSize);
    n.height = p.height + y * 0.55 + n.padding;
    n.width = p.width + n.padding * 2;
    if (n.icon) {
      if (n.type === t.nodeType.CIRCLE) {
        n.height += 50;
        n.width += 50;
        c.append("foreignObject").attr("height", "50px").attr("width", n.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + l + " " + n.icon);
        u.attr("transform", "translate(" + n.width / 2 + ", " + (n.height / 2 - n.padding * 1.5) + ")");
      } else {
        n.width += 50;
        let t = n.height;
        n.height = Math.max(t, 60);
        let e = Math.abs(n.height - t);
        c.append("foreignObject").attr("width", "60px").attr("height", n.height).attr("style", "text-align: center;margin-top:" + e / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + l + " " + n.icon);
        u.attr("transform", "translate(" + (25 + n.width / 2) + ", " + (e / 2 + n.padding / 2) + ")");
      }
    } else if (a) {
      let t = (n.width - p.width) / 2;
      let e = (n.height - p.height) / 2;
      u.attr("transform", "translate(" + t + ", " + e + ")");
    } else {
      let t = n.width / 2;
      let e = n.padding / 2;
      u.attr("transform", "translate(" + t + ", " + e + ")");
    }
    switch (n.type) {
      case t.nodeType.DEFAULT:
        E(t, h, n, l);
        break;
      case t.nodeType.ROUNDED_RECT:
        D(t, h, n, l);
        break;
      case t.nodeType.RECT:
        _(t, h, n, l);
        break;
      case t.nodeType.CIRCLE:
        h.attr("transform", "translate(" + n.width / 2 + ", " + +n.height / 2 + ")");
        T(t, h, n, l);
        break;
      case t.nodeType.CLOUD:
        L(t, h, n, l);
        break;
      case t.nodeType.BANG:
        N(t, h, n, l);
        break;
      case t.nodeType.HEXAGON:
        $(t, h, n, l);
    }
    t.setElementForId(n.id, c);
    return n.height;
  }, "drawNode");
  var S = mermaidConfigUtils.setName(function (t, e) {
    let n = t.getElementById(e.id);
    let i = e.x || 0;
    let s = e.y || 0;
    n.attr("transform", "translate(" + i + "," + s + ")");
  }, "positionNode");
  async function A(t, e, n, i, s) {
    await I(t, e, n, i, s);
    if (n.children) {
      await Promise.all(n.children.map((n, o) => A(t, e, n, i < 0 ? o : i, s)));
    }
  }
  function v(t, e) {
    e.edges().map((e, n) => {
      let i = e.data();
      if (e[0]._private.bodyBounds) {
        let s = e[0]._private.rscratch;
        mermaidConfigUtils.logger.trace("Edge: ", n, i);
        t.insert("path").attr("d", `M ${s.startX},${s.startY} L ${s.midX},${s.midY} L${s.endX},${s.endY} `).attr("class", "edge section-edge-" + i.section + " edge-depth-" + i.depth);
      }
    });
  }
  function O(t, e, n, i) {
    e.add({
      group: "nodes",
      data: {
        id: t.id.toString(),
        labelText: t.descr,
        height: t.height,
        width: t.width,
        level: i,
        nodeId: t.id,
        padding: t.padding,
        type: t.type
      },
      position: {
        x: t.x,
        y: t.y
      }
    });
    if (t.children) {
      t.children.forEach(s => {
        O(s, e, n, i + 1);
        e.add({
          group: "edges",
          data: {
            id: `${t.id}_${s.id}`,
            source: t.id,
            target: s.id,
            depth: i,
            section: s.section
          }
        });
      });
    }
  }
  function x(t, e) {
    return new Promise(n => {
      let i = axisAndZoomUtilities.select("body").append("div").attr("id", "cy").attr("style", "display:none");
      let s = cytoscapeCoreModule.Cytoscape({
        container: document.getElementById("cy"),
        style: [{
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }]
      });
      i.remove();
      O(t, s, e, 0);
      s.nodes().forEach(function (t) {
        t.layoutDimensions = () => {
          let e = t.data();
          return {
            w: e.width,
            h: e.height
          };
        };
      });
      s.layout({
        name: "cose-bilkent",
        quality: "proof",
        styleEnabled: false,
        animate: false
      }).run();
      s.ready(t => {
        mermaidConfigUtils.logger.info("Ready", t);
        n(s);
      });
    });
  }
  function C(t, e) {
    e.nodes().map((e, n) => {
      let i = e.data();
      i.x = e.position().x;
      i.y = e.position().y;
      S(t, i);
      let s = t.getElementById(i.nodeId);
      mermaidConfigUtils.logger.info("id:", n, "Position: (", e.position().x, ", ", e.position().y, ")", i);
      s.attr("transform", `translate(${e.position().x - i.width / 2}, ${e.position().y - i.height / 2})`);
      s.attr("attr", `apa-${n})`);
    });
  }
  cytoscapeCoreModule.Cytoscape.use(d);
  mermaidConfigUtils.setName(A, "drawNodes");
  mermaidConfigUtils.setName(v, "drawEdges");
  mermaidConfigUtils.setName(O, "addNodes");
  mermaidConfigUtils.setName(x, "layoutMindmap");
  mermaidConfigUtils.setName(C, "positionNodes");
  var R = mermaidConfigUtils.setName(async (t, e, n, i) => {
    mermaidConfigUtils.logger.debug("Rendering mindmap diagram\n" + t);
    let d = i.db;
    let h = d.getMindmap();
    if (!h) {
      return;
    }
    let u = mermaidConfigUtils.getConfigAlias();
    u.htmlLabels = false;
    let g = mermaidSvgElementSelector.selectSvgElement(e);
    let p = g.append("g");
    p.attr("class", "mindmap-edges");
    let y = g.append("g");
    y.attr("class", "mindmap-nodes");
    await A(d, y, h, -1, u);
    let f = await x(h, u);
    v(p, f);
    C(d, f);
    mermaidConfigUtils.setupViewbox(undefined, g, u.mindmap?.padding ?? mermaidConfigUtils.configDefaults.mindmap.padding, u.mindmap?.useMaxWidth ?? mermaidConfigUtils.configDefaults.mindmap.useMaxWidth);
  }, "draw");
  var k = mermaidConfigUtils.setName(t => {
    let e = "";
    for (let e = 0; e < t.THEME_COLOR_LIMIT; e++) {
      t["lineColor" + e] = t["lineColor" + e] || t["cScaleInv" + e];
      if (colorDarknessUtil.isColorDark(t["lineColor" + e])) {
        t["lineColor" + e] = colorLightnessAdjuster.adjustLightness(t["lineColor" + e], 20);
      } else {
        t["lineColor" + e] = colorLightnessHelper.adjustLightness(t["lineColor" + e], 20);
      }
    }
    for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) {
      let i = "" + (17 - n * 3);
      e += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} polygon, .section-${n - 1} path  {
      fill: ${t["cScale" + n]};
    }
    .section-${n - 1} text {
     fill: ${t["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${t["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${i};
    }
    .section-${n - 1} line {
      stroke: ${t["cScaleInv" + n]} ;
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
    return e;
  }, "genSections");
  var w = {
    get db() {
      return new m();
    },
    renderer: {
      draw: R
    },
    parser: y,
    styles: mermaidConfigUtils.setName(t => `
  .edge {
    stroke-width: 3;
  }
  ${k(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
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
      return w;
    }
  });
}